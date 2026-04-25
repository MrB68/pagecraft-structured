import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBuilderStore } from "@/store/builderStore";
import { useEditorStore } from "@/store/editorStore";
import { SECTION_MAP } from "@/core/sectionRegistry";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChevronDown,
  Eye,
  ExternalLink,
  Loader2,
  Monitor,
  Plus,
  RotateCcw,
  Save,
  Smartphone,
  Sparkles,
  Tablet,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import PropsForm from "@/components/editor/PropsForm";
import DragDropWrapper from "@/components/editor/DragDropWrapper";
import SectionPalette from "@/components/editor/SectionPalette";
import EditorCanvas from "@/components/editor/EditorCanvas";
import AnimationControls from "@/components/editor/AnimationControls";
import { SectionType } from "@/types";
import { generateTemplate } from "@/ai/generateTemplate";

const DEVICE_WIDTHS = {
  desktop: "100%",
  tablet: "820px",
  mobile: "390px",
};

export default function Editor() {
  const { siteId = "", pageId = "" } = useParams();
  const navigate = useNavigate();
  const {
    websites,
    updateSectionProps,
    addSection,
    removeSection,
    moveSection,
    reorderSections,
    duplicateSection,
    addPage,
    deletePage,
    resetPageToTemplate,
    togglePublish,
    saveSiteAsTemplate,
    createWebsiteFromTemplateObject,
  } = useBuilderStore();

  const {
    selectedSectionId,
    setSelected,
    device,
    setDevice,
  } = useEditorStore();

  const [aiLoading, setAiLoading] = useState(false);

  const site = websites.find((w) => w.id === siteId);
  const page = site?.pages.find((p) => p.id === pageId) ?? site?.pages[0];

  // Determine which section types are available for this template
  const allowedSectionTypes = site?.allowedSections;

  // Auto-select first section when page changes
  useEffect(() => {
    if (page && !page.sections.find((s) => s.id === selectedSectionId)) {
      setSelected(page.sections[0]?.id ?? null);
    }
  }, [page, selectedSectionId, setSelected]);

  const selectedSection = useMemo(
    () => page?.sections.find((s) => s.id === selectedSectionId) ?? null,
    [page, selectedSectionId]
  );

  if (!site || !page) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center">
        <div>
          <h1 className="text-xl font-semibold mb-2">Website not found</h1>
          <Button asChild variant="outline">
            <Link to="/websites">Back to websites</Link>
          </Button>
        </div>
      </div>
    );
  }

  const meta = selectedSection ? SECTION_MAP[selectedSection.type] : null;

  const handleAddFromPalette = (type: SectionType, atIndex: number) => {
    const id = addSection(site.id, page.id, type, atIndex);
    setSelected(id);
    toast.success(`${SECTION_MAP[type].label} added`);
  };

  const handleDuplicate = (id: string) => {
    const newId = duplicateSection(site.id, page.id, id);
    setSelected(newId);
    toast.success("Section duplicated");
  };

  const handleDelete = (id: string) => {
    removeSection(site.id, page.id, id);
    if (selectedSectionId === id) setSelected(null);
  };

  const handleInlineEdit = (sectionId: string, fieldKey: string, value: string) => {
    const s = page.sections.find((x) => x.id === sectionId);
    if (!s) return;
    updateSectionProps(site.id, page.id, sectionId, {
      ...s.props,
      [fieldKey]: value,
    });
  };

  const generateAITemplate = async () => {
    if (aiLoading) return;
    setAiLoading(true);
    try {
      const template = await generateTemplate("Modern ecommerce store");
      const newSiteId = createWebsiteFromTemplateObject(template, "AI Generated Website");
      if (!newSiteId) {
        toast.error("Failed to create AI website.");
        return;
      }
      const newSite = websites.find((w) => w.id === newSiteId) ??
        useBuilderStore.getState().websites.find((w) => w.id === newSiteId);
      const firstPage = newSite?.pages[0];
      if (newSite && firstPage) {
        navigate(`/editor/${newSite.id}/${firstPage.id}`);
        toast.success("AI website generated successfully!");
      } else {
        toast.error("AI website created but pages could not be loaded.");
      }
    } catch (err: any) {
      console.error("[AI] Generation failed:", err);
      toast.error(err?.message ?? "AI generation failed.");
    } finally {
      setAiLoading(false);
    }
  };

  const deviceWidth = DEVICE_WIDTHS[device];

  return (
    <div className="h-screen flex flex-col bg-surface">
      {/* Top bar */}
      <header className="h-14 flex items-center gap-3 border-b border-border bg-background px-4 shrink-0">
        <Button asChild variant="ghost" size="sm">
          <Link to={`/sites/${site.id}/pages`}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Link>
        </Button>
        <div className="h-5 w-px bg-border" />
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold tracking-tight truncate">{site.name}</span>
          <span className="text-muted-foreground">/</span>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm flex items-center gap-1 hover:text-primary">
              {page.name}
              <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {site.pages.map((p) => (
                <DropdownMenuItem
                  key={p.id}
                  onClick={() => navigate(`/editor/${site.id}/${p.id}`)}
                >
                  {p.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  const name = prompt("Page name (e.g. Pricing)")?.trim();
                  if (!name) return;
                  addPage(site.id, name);
                  toast.success("Page added");
                }}
              >
                <Plus className="w-3.5 h-3.5 mr-1" /> Add page
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Device toggles */}
        <div className="ml-auto flex items-center gap-1 rounded-md border border-border p-0.5">
          <Button
            size="icon"
            variant={device === "desktop" ? "secondary" : "ghost"}
            className="h-7 w-7"
            onClick={() => setDevice("desktop")}
            title="Desktop"
          >
            <Monitor className="w-3.5 h-3.5" />
          </Button>
          <Button
            size="icon"
            variant={device === "tablet" ? "secondary" : "ghost"}
            className="h-7 w-7"
            onClick={() => setDevice("tablet")}
            title="Tablet"
          >
            <Tablet className="w-3.5 h-3.5" />
          </Button>
          <Button
            size="icon"
            variant={device === "mobile" ? "secondary" : "ghost"}
            className="h-7 w-7"
            onClick={() => setDevice("mobile")}
            title="Mobile"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={generateAITemplate}
            disabled={aiLoading}
            className="gap-1.5"
          >
            {aiLoading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            )}
            {aiLoading ? "Generating..." : "Generate AI Website"}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Template
                <ChevronDown className="w-3.5 h-3.5 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  const name = prompt("Template name", `${site.name} template`)?.trim();
                  if (!name) return;
                  saveSiteAsTemplate(site.id, name);
                  toast.success("Saved as template");
                }}
              >
                <Save className="w-3.5 h-3.5 mr-2" /> Save as template
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  if (!confirm(`Reset "${page.name}" to its template defaults?`)) return;
                  resetPageToTemplate(site.id, page.id);
                  setSelected(null);
                  toast.success("Page reset to template");
                }}
              >
                <RotateCcw className="w-3.5 h-3.5 mr-2" /> Reset page
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-2">
            <Switch
              checked={site.published}
              onCheckedChange={() => {
                togglePublish(site.id);
                toast.success(site.published ? "Unpublished" : "Published");
              }}
            />
            <span className="text-xs text-muted-foreground">
              {site.published ? "Live" : "Draft"}
            </span>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to={`/site/${site.id}/${page.id}`} target="_blank">
              <Eye className="w-4 h-4 mr-1" /> Preview
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12 min-h-0">
        {/* Left: sortable sections + palette */}
        <aside className="col-span-3 lg:col-span-2 border-r border-border bg-background overflow-y-auto">
          <div className="p-3 sticky top-0 bg-background border-b border-border z-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Page sections
            </span>
          </div>
          <div className="p-3">
            <DragDropWrapper
              sections={page.sections}
              selectedId={selectedSectionId}
              onSelect={setSelected}
              onReorder={(from, to) => reorderSections(site.id, page.id, from, to)}
              onDuplicate={handleDuplicate}
              onDelete={handleDelete}
              onAddFromPalette={handleAddFromPalette}
                paletteSlot={
                  <SectionPalette
                    onAdd={(t) => handleAddFromPalette(t, page.sections.length)}
                    allowedTypes={allowedSectionTypes}
                  />
                }
            />
          </div>

          {site.pages.length > 1 && (
            <div className="p-3 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-destructive hover:text-destructive"
                onClick={() => {
                  if (confirm(`Delete page "${page.name}"?`)) {
                    deletePage(site.id, page.id);
                    const next = site.pages.find((p) => p.id !== page.id);
                    navigate(`/editor/${site.id}/${next?.id ?? ""}`);
                  }
                }}
              >
                Delete page
              </Button>
            </div>
          )}
        </aside>

        {/* Center: live preview / canvas */}
        <main
          className="col-span-6 lg:col-span-7 overflow-auto bg-muted/40"
          onClick={() => setSelected(null)}
        >
          <div className="p-4 flex justify-center">
            <div
              className="bg-background shadow-elev-md overflow-hidden border border-border rounded-xl transition-[width] duration-300"
              style={{ width: deviceWidth, maxWidth: "100%" }}
            >
              <EditorCanvas
                sections={page.sections}
                onSelect={setSelected}
                onDuplicate={handleDuplicate}
                onDelete={handleDelete}
                onMove={(id, dir) => moveSection(site.id, page.id, id, dir)}
                onInlineEdit={handleInlineEdit}
              />
            </div>
          </div>
        </main>

        {/* Right: props form */}
        <aside className="col-span-3 border-l border-border bg-background overflow-y-auto">
          {selectedSection && meta ? (
            <div className="p-5 space-y-5">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Editing
                </div>
                <div className="font-semibold">{meta.label}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Tip: double-click text in the preview to edit it inline.
                </p>
              </div>

              <PropsForm
                fields={meta.fields}
                values={selectedSection.props}
                onChange={(next) =>
                  updateSectionProps(site.id, page.id, selectedSection.id, next)
                }
              />

              {"animate" in (meta.defaults ?? {}) && (
                <AnimationControls
                  section={selectedSection}
                  onChange={(props) =>
                    updateSectionProps(site.id, page.id, selectedSection.id, props)
                  }
                />
              )}

              {site.published && (
                <a
                  href={`/site/${site.id}/${page.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                >
                  View live page <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ) : (
            <div className="p-6 text-sm text-muted-foreground space-y-2">
              <p>Select a section in the canvas or left panel to edit its content.</p>
              <p className="text-xs">You can also drag sections from the left palette.</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
