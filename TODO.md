# AI Template Generator — Implementation TODO

## Steps

- [x] Step 1: Create `src/ai/generateTemplate.ts`
  - [x] Define types, mappings, and constants
  - [x] Implement `generateLayout(prompt)` with OpenAI fetch
  - [x] Implement `convertToTemplate(layout)` with normalization + defaults merge
  - [x] Implement `validateAndFix(template)` with Zod + max 2 retries
  - [x] Implement `generateTemplate(prompt)` orchestrator
- [x] Step 2: Update `src/store/builderStore.ts`
  - [x] Add `createWebsiteFromTemplateObject(template, name)` method
- [x] Step 3: Update `src/pages/Editor.tsx`
  - [x] Add imports for AI service + Sparkles icon
  - [x] Add `generateAITemplate()` async handler
  - [x] Add "Generate AI Website" button with loading state
  - [x] Handle navigation safely (check pages exist)
- [x] Step 4: Build & verify
  - [x] Run TypeScript check — **PASS** (zero errors)
  - [x] Vite production build — **PASS** (742KB bundle)
  - [x] Test suite — **PASS** (1/1 tests)

