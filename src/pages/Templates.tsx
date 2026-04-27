import { useMemo, useRef, useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBuilderStore } from "@/store/builderStore";
import { TEMPLATES as BUILTIN_TEMPLATES } from "@/templates";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Renderer from "@/core/Renderer";
import {
  ChevronLeft,
  ChevronRight,
  Crown,
  Eye,
  Lock,
  Search,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import { SECTION_MAP } from "@/core/sectionRegistry";
import { Template, SectionType } from "@/types";
import { cn } from "@/lib/utils";

type TypeFilter = "all" | "free" | "premium";
type SortKey = "newest" | "name" | "category";

const POPULAR_SECTIONS: SectionType[] = [
  "hero",
  "features",
  "product-grid",
  "cta",
  "navbar",
  "footer",
  "contact",
  "newsletter",
  "about",
];

export default function Templates() {
  const navigate = useNavigate();
  const create = useBuilderStore((s) => s.createWebsiteFromTemplate);
  const customTemplates = useBuilderStore((s) => s.customTemplates);
  const deleteCustomTemplate = useBuilderStore((s) => s.deleteCustomTemplate);
  const userPlan = useBuilderStore((s) => s.userPlan);
  const setUserPlan = useBuilderStore((s) => s.setUserPlan);
  const isPro = userPlan === "pro";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [sectionFilters, setSectionFilters] = useState<SectionType[]>([]);
  const [sort, setSort] = useState<SortKey>("newest");
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [lockedTpl, setLockedTpl] = useState<Template | null>(null);
  const [previewTpl, setPreviewTpl] = useState<Template | null>(null);

  const all: Template[] = useMemo(
    () => [...BUILTIN_TEMPLATES, ...customTemplates],
    [customTemplates]
  );

  const categories = useMemo(() => {
    const set = new Set<string>();
    all.forEach((t) => set.add(t.category));
    return ["all", ...Array.from(set).sort()];
  }, [all]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = all.filter((t) => {
      if (q) {
        const hay = `${t.name} ${t.description} ${t.category}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (category !== "all" && t.category !== category) return false;
      if (typeFilter === "free" && t.isPremium) return false;
      if (typeFilter === "premium" && !t.isPremium) return false;
      if (sectionFilters.length > 0) {
        const has = sectionFilters.every((s) => t.allowedSections.includes(s));
        if (!has) return false;
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "category") return a.category.localeCompare(b.category);
      return (b.createdAt ?? 0) - (a.createdAt ?? 0);
    });
    return list;
  }, [all, search, category, typeFilter, sectionFilters, sort]);

  const premiumTemplates = useMemo(
    () => all.filter((t) => t.isPremium).slice(0, 12),
    [all]
  );

  const toggleSection = (s: SectionType) =>
    setSectionFilters((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setTypeFilter("all");
    setSectionFilters([]);
    setSort("newest");
  };

  const handleUse = (tpl: Template) => {
    if (tpl.isPremium && !isPro) {
      setLockedTpl(tpl);
      setUpgradeOpen(true);
      return;
    }
    const name = prompt("Name your website", tpl.name)?.trim();
    if (!name) return;
    const id = create(tpl.id, name);
    if (id) {
      toast.success("Website created");
      navigate(`/sites/${id}/pages`);
    }
  };

  const upgrade = () => {
    setUserPlan("pro");
    setUpgradeOpen(false);
    toast.success("Welcome to Pro 🎉");
    if (lockedTpl) {
      const tpl = lockedTpl;
      setLockedTpl(null);
      setTimeout(() => handleUse(tpl), 50);
    }
  };

  const activeFilters =
    (search ? 1 : 0) +
    (category !== "all" ? 1 : 0) +
    (typeFilter !== "all" ? 1 : 0) +
    sectionFilters.length +
    (sort !== "newest" ? 1 : 0);

  return (
    <AppLayout title="Templates">
      <div className="max-w-6xl space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-muted-foreground">
              Browse {all.length} templates. Filter, preview, and start in seconds.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Plan:</span>
            <span
              className={cn(
                "text-xs font-semibold px-2.5 py-1 rounded-full",
                isPro
                  ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {isPro ? "Pro" : "Free"}
            </span>
            {isPro ? (
              <Button variant="ghost" size="sm" onClick={() => setUserPlan("free")}>
                Switch to Free
              </Button>
            ) : (
              <Button size="sm" onClick={() => setUpgradeOpen(true)}>
                <Sparkles className="w-4 h-4 mr-1" /> Upgrade
              </Button>
            )}
          </div>
        </div>

        {/* Premium Carousel */}
        {premiumTemplates.length > 0 && (
          <PremiumCarousel
            templates={premiumTemplates}
            isPro={isPro}
            onUse={handleUse}
            onPreview={setPreviewTpl}
          />
        )}

        {/* Filters */}
        <div className="rounded-2xl border border-border bg-card p-4 space-y-4 shadow-elev-sm">
          <div className="grid gap-3 md:grid-cols-12">
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, description, or category…"
                className="pl-9"
              />
            </div>
            <div className="md:col-span-3">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c === "all" ? "All categories" : c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Select value={typeFilter} onValueChange={(v) => setTypeFilter(v as TypeFilter)}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="name">Name A–Z</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-muted-foreground mr-1">Sections:</span>
            {POPULAR_SECTIONS.map((s) => {
              const active = sectionFilters.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleSection(s)}
                  className={cn(
                    "text-xs px-2.5 py-1 rounded-full border transition-all",
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background border-border hover:border-primary/50 hover:text-foreground text-muted-foreground"
                  )}
                >
                  {SECTION_MAP[s]?.label ?? s}
                </button>
              );
            })}
            {activeFilters > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs px-2.5 py-1 rounded-full text-muted-foreground hover:text-foreground inline-flex items-center gap-1 ml-auto"
              >
                <X className="w-3 h-3" /> Clear ({activeFilters})
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight">
              {filtered.length} {filtered.length === 1 ? "template" : "templates"}
            </h3>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
              <p className="text-muted-foreground mb-4">
                No templates match your filters.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((tpl) => (
                <TemplateCard
                  key={tpl.id}
                  tpl={tpl}
                  isPro={isPro}
                  onUse={() => handleUse(tpl)}
                  onPreview={() => setPreviewTpl(tpl)}
                  onDelete={
                    tpl.category === "Custom"
                      ? () => {
                          if (confirm(`Delete template "${tpl.name}"?`)) {
                            deleteCustomTemplate(tpl.id);
                            toast.success("Template deleted");
                          }
                        }
                      : undefined
                  }
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <Dialog open={upgradeOpen} onOpenChange={setUpgradeOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-500" /> Upgrade to Pro
            </DialogTitle>
            <DialogDescription>
              {lockedTpl
                ? `"${lockedTpl.name}" is a premium template. Upgrade to Pro to unlock all premium designs and advanced sections.`
                : "Unlock all premium templates, priority support, and advanced features."}
            </DialogDescription>
          </DialogHeader>
          <ul className="text-sm space-y-2 my-2">
            <li className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" /> Access all premium templates
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" /> Advanced section library
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" /> Priority support
            </li>
          </ul>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUpgradeOpen(false)}>
              Maybe later
            </Button>
            <Button onClick={upgrade}>
              <Crown className="w-4 h-4 mr-1" /> Upgrade now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <PreviewDialog
        tpl={previewTpl}
        isPro={isPro}
        onClose={() => setPreviewTpl(null)}
        onUse={(t) => {
          setPreviewTpl(null);
          handleUse(t);
        }}
      />
    </AppLayout>
  );
}

/* ---------- Premium Carousel ---------- */

function PremiumCarousel({
  templates,
  isPro,
  onUse,
  onPreview,
}: {
  templates: Template[];
  isPro: boolean;
  onUse: (t: Template) => void;
  onPreview: (t: Template) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section className="space-y-3 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-amber-500" />
          <h3 className="text-lg font-semibold tracking-tight">Premium Templates</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-medium">
            Pro
          </span>
        </div>
        <div className="flex gap-1">
          <Button variant="outline" size="icon" onClick={() => scroll(-1)}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll(1)}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth -mx-1 px-1"
        style={{ scrollbarWidth: "thin" }}
      >
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="snap-start shrink-0 w-[300px] md:w-[340px] group"
          >
            <PremiumCard
              tpl={tpl}
              isPro={isPro}
              onUse={() => onUse(tpl)}
              onPreview={() => onPreview(tpl)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function PremiumCard({
  tpl,
  isPro,
  onUse,
  onPreview,
}: {
  tpl: Template;
  isPro: boolean;
  onUse: () => void;
  onPreview: () => void;
}) {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-card overflow-hidden shadow-elev-sm hover:shadow-elev-md transition-all duration-300 hover:-translate-y-0.5 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
      <button
        type="button"
        onClick={onPreview}
        aria-label={`Preview ${tpl.name}`}
        className="aspect-[16/10] w-full bg-surface border-b border-border overflow-hidden relative block text-left"
      >
        <div className="absolute inset-0 origin-top-left scale-[0.32] w-[312%] h-[312%] pointer-events-none select-none transition-transform duration-500 group-hover:scale-[0.34]">
          <Renderer sections={tpl.pages[0].sections.slice(0, 2)} />
        </div>
        <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">
          <Crown className="w-3 h-3" /> PREMIUM
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-background/90 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-medium">
            {!isPro ? (
              <>
                <Lock className="w-3.5 h-3.5 text-amber-500" /> Preview
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" /> Preview
              </>
            )}
          </div>
        </div>
      </button>
      <div className="p-4 relative">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-semibold tracking-tight truncate">{tpl.name}</h4>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent text-accent-foreground font-medium shrink-0">
            {tpl.category}
          </span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 min-h-[2rem]">
          {tpl.description}
        </p>
        <div className="flex gap-2">
          <Button
            className={cn(
              "flex-1",
              !isPro &&
                "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
            )}
            onClick={onUse}
          >
            {isPro ? (
              "Use template"
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 mr-1.5" /> Upgrade to use
              </>
            )}
          </Button>
          <Button variant="outline" size="icon" onClick={onPreview} title="Preview">
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Standard Card ---------- */

function TemplateCard({
  tpl,
  isPro,
  onUse,
  onPreview,
  onDelete,
}: {
  tpl: Template;
  isPro: boolean;
  onUse: () => void;
  onPreview: () => void;
  onDelete?: () => void;
}) {
  const locked = !!tpl.isPremium && !isPro;
  return (
    <div
      className={cn(
        "group rounded-2xl border bg-card overflow-hidden shadow-elev-sm transition-all duration-300 hover:shadow-elev-md hover:-translate-y-0.5 flex flex-col animate-fade-in",
        tpl.isPremium ? "border-amber-500/30" : "border-border"
      )}
    >
      <button
        type="button"
        onClick={onPreview}
        aria-label={`Preview ${tpl.name}`}
        className="aspect-[16/10] w-full bg-surface border-b border-border overflow-hidden relative block text-left"
      >
        <div className="absolute inset-0 origin-top-left scale-[0.32] w-[312%] h-[312%] pointer-events-none select-none transition-transform duration-500 group-hover:scale-[0.34]">
          <Renderer sections={tpl.pages[0].sections.slice(0, 2)} />
        </div>
        {tpl.isPremium && (
          <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">
            <Crown className="w-3 h-3" /> PREMIUM
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-background/95 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-medium">
            {locked ? (
              <Lock className="w-3.5 h-3.5 text-amber-500" />
            ) : (
              <Eye className="w-3.5 h-3.5" />
            )}
            Preview
          </div>
        </div>
      </button>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-1 gap-2">
          <h3 className="font-semibold tracking-tight truncate">{tpl.name}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium shrink-0">
            {tpl.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-3 flex-1 line-clamp-2">
          {tpl.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tpl.allowedSections.slice(0, 6).map((t) => (
            <span
              key={t}
              className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium"
            >
              {SECTION_MAP[t]?.label ?? t}
            </span>
          ))}
          {tpl.allowedSections.length > 6 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
              +{tpl.allowedSections.length - 6}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            className={cn(
              "flex-1",
              locked &&
                "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
            )}
            onClick={onUse}
          >
            {locked ? (
              <>
                <Lock className="w-3.5 h-3.5 mr-1.5" /> Upgrade to use
              </>
            ) : (
              "Use template"
            )}
          </Button>
          {onDelete && (
            <Button variant="outline" size="icon" onClick={onDelete}>
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
