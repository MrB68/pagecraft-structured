import { z } from "zod";
import { Template, Page, Section, SectionType } from "@/types";
import { SECTION_MAP } from "@/core/sectionRegistry";
import { clone, uid, slugify } from "@/core/utils";

/* ─────────────── 1. CONSTANTS & MAPPINGS ─────────────── */

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_MODEL = "gpt-4o-mini";

/** Maps AI-friendly PascalCase names → registry kebab-case keys. */
const AI_NAME_TO_REGISTRY: Record<string, SectionType> = {
  NavbarSection: "navbar",
  HeroSection: "hero",
  ProductGridSection: "product-grid",
  FooterSection: "footer",
  FeaturesSection: "features",
  NewsletterSection: "newsletter",
  ContactSection: "contact",
};

const REGISTRY_KEYS = new Set(Object.keys(SECTION_MAP) as SectionType[]);

/* ─────────────── 2. OPENAI FETCH HELPER ─────────────── */

interface OpenAIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

async function callOpenAI(messages: OpenAIMessage[], temperature = 0.7): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing VITE_OPENAI_API_KEY environment variable.");
  }

  const res = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages,
      temperature,
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "Unknown error");
    throw new Error(`OpenAI API error ${res.status}: ${text}`);
  }

  const json = await res.json();
  const content = json.choices?.[0]?.message?.content;
  if (typeof content !== "string") {
    throw new Error("OpenAI response missing content.");
  }
  return content;
}

/* ─────────────── 3. STAGE 1 — LAYOUT GENERATION ─────────────── */

export interface AILayoutSection {
  type: string;
  content: Record<string, any>;
}

export interface AILayout {
  sections: AILayoutSection[];
}

export async function generateLayout(prompt: string): Promise<AILayout> {
  const systemPrompt = `You are a website layout generator. Given a user prompt, return ONLY a JSON object with this exact shape:

{
  "sections": [
    { "type": "HeroSection", "content": { ... } },
    { "type": "FeaturesSection", "content": { ... } },
    ...
  ]
}

Allowed section types (use exactly these PascalCase names):
- NavbarSection
- HeroSection
- FeaturesSection
- ProductGridSection
- NewsletterSection
- ContactSection
- FooterSection

Guidelines:
- Generate 4–8 sections in a logical order (Navbar first, Footer last).
- Populate "content" with realistic, context-appropriate props for each section.
- For list fields (items, products, links, etc), provide 3–4 rich entries.
- Use real placeholder content relevant to the user's prompt.
- Keep JSON valid and well-formed. Do NOT wrap in markdown code blocks.`;

  const userPrompt = `Generate a website layout for: ${prompt}`;

  const raw = await callOpenAI([
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt },
  ]);

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("OpenAI returned invalid JSON during layout generation.");
  }

  if (!parsed || typeof parsed !== "object" || !Array.isArray((parsed as any).sections)) {
    throw new Error("OpenAI layout response missing 'sections' array.");
  }

  return parsed as AILayout;
}

/* ─────────────── 4. STAGE 2 — CONVERSION TO TEMPLATE ─────────────── */

function normalizeSectionType(aiType: string): SectionType | null {
  // Direct registry match (kebab-case)
  if (REGISTRY_KEYS.has(aiType as SectionType)) return aiType as SectionType;
  // PascalCase mapping
  const mapped = AI_NAME_TO_REGISTRY[aiType];
  if (mapped) return mapped;
  // Fuzzy fallback: case-insensitive Pascal-to-kebab
  const lower = aiType.toLowerCase();
  for (const key of REGISTRY_KEYS) {
    if (key.toLowerCase() === lower || key.toLowerCase().replace(/-/g, "") === lower.replace(/-/g, "")) {
      return key;
    }
  }
  return null;
}

function mergePropsWithDefaults(type: SectionType, aiProps: Record<string, any>): Record<string, any> {
  const meta = SECTION_MAP[type];
  if (!meta) return aiProps;

  const defaults = clone(meta.defaults);

  // Recursively merge AI props over defaults
  const merge = (base: any, overlay: any): any => {
    if (overlay === null || overlay === undefined) return base;
    if (Array.isArray(base) && Array.isArray(overlay)) {
      return overlay.map((item, i) => {
        if (typeof item === "object" && base[i] && typeof base[i] === "object") {
          return merge(base[i], item);
        }
        return item;
      });
    }
    if (typeof base === "object" && typeof overlay === "object") {
      const result = { ...base };
      for (const key of Object.keys(overlay)) {
        result[key] = merge(base[key], overlay[key]);
      }
      return result;
    }
    return overlay;
  };

  return merge(defaults, aiProps);
}

export interface IntermediateTemplate {
  pages: {
    home: {
      sections: Array<{ type: string; props: Record<string, any> }>;
    };
  };
}

export function convertToTemplate(layout: AILayout): IntermediateTemplate {
  const sections: Array<{ type: string; props: Record<string, any> }> = [];

  for (const sec of layout.sections) {
    const normalizedType = normalizeSectionType(sec.type);

    if (!normalizedType) {
      console.warn(`[AI] Unknown section type "${sec.type}" — skipping.`);
      continue;
    }

    const mergedProps = mergePropsWithDefaults(normalizedType, sec.content ?? {});

    sections.push({
      type: normalizedType,
      props: mergedProps,
    });
  }

  // Ensure at least a minimal page
  if (sections.length === 0) {
    sections.push({ type: "hero", props: clone(SECTION_MAP.hero.defaults) });
    sections.push({ type: "footer", props: clone(SECTION_MAP.footer.defaults) });
  }

  return {
    pages: {
      home: { sections },
    },
  };
}

/* ─────────────── 5. STAGE 3 — VALIDATION & AUTO-FIX ─────────────── */

const sectionSchema = z.object({
  type: z.string(),
  props: z.record(z.any()),
});

const pageSchema = z.object({
  home: z.object({
    sections: z.array(sectionSchema),
  }),
});

const intermediateTemplateSchema = z.object({
  pages: pageSchema,
});

function isValidIntermediate(template: unknown): template is IntermediateTemplate {
  const result = intermediateTemplateSchema.safeParse(template);
  return result.success;
}

export async function validateAndFix(
  template: IntermediateTemplate,
  originalPrompt: string,
  attempt = 1
): Promise<IntermediateTemplate> {
  if (isValidIntermediate(template)) {
    return template;
  }

  if (attempt > 2) {
    throw new Error("AI template validation failed after 2 auto-fix attempts.");
  }

  const systemPrompt = `You are a JSON repair assistant. Given a malformed website template and a list of validation errors, return ONLY a corrected JSON object with this exact shape:

{
  "pages": {
    "home": {
      "sections": [
        { "type": "HeroSection", "props": { ... } },
        ...
      ]
    }
  }
}

Allowed section types (PascalCase):
NavbarSection, HeroSection, FeaturesSection, ProductGridSection, NewsletterSection, ContactSection, FooterSection.

Guidelines:
- Ensure all arrays are valid arrays and all objects are valid objects.
- Populate realistic props for each section.
- Do NOT wrap in markdown code blocks.`;

  const userPrompt = `Fix this website template. Original prompt: "${originalPrompt}". Previous JSON was malformed. Return a corrected version.`;

  const raw = await callOpenAI([
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt },
  ], 0.5);

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // If still invalid JSON, return a safe fallback instead of infinite retry
    console.warn(`[AI] Auto-fix attempt ${attempt} returned invalid JSON. Using fallback.`);
    return {
      pages: {
        home: {
          sections: [
            { type: "hero", props: clone(SECTION_MAP.hero.defaults) },
            { type: "features", props: clone(SECTION_MAP.features.defaults) },
            { type: "footer", props: clone(SECTION_MAP.footer.defaults) },
          ],
        },
      },
    };
  }

  // Recursively validate (up to 2 total attempts)
  return validateAndFix(parsed as IntermediateTemplate, originalPrompt, attempt + 1);
}

/* ─────────────── 6. ORCHESTRATOR ─────────────── */

export async function generateTemplate(prompt: string): Promise<Template> {
  const layout = await generateLayout(prompt);
  const intermediate = convertToTemplate(layout);
  const fixed = await validateAndFix(intermediate, prompt);

  // Convert intermediate → proper Template type with IDs
  const pageId = uid();
  const page: Page = {
    id: pageId,
    name: "Home",
    slug: "home",
    sections: fixed.pages.home.sections.map((s) => {
      const type = normalizeSectionType(s.type);
      // Fallback to hero if somehow still unknown after validation
      const safeType: SectionType = type ?? "hero";
      return {
        id: uid(),
        type: safeType,
        props: clone(s.props),
      } satisfies Section;
    }),
  };

  const usedTypes = new Set(page.sections.map((s) => s.type));

  const template: Template = {
    id: `tpl-ai-${uid()}`,
    name: "AI Generated",
    description: `Generated from prompt: "${prompt}"`,
    category: "AI",
    pages: [page],
    allowedSections: Array.from(usedTypes) as SectionType[],
  };

  return template;
}

