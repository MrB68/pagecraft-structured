import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { TEMPLATES as BUILTIN_TEMPLATES } from "@/templates";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Renderer from "@/core/Renderer";
import { Trash2 } from "lucide-react";
import { SECTION_MAP } from "@/core/sectionRegistry";

export default function Templates() {
  const navigate = useNavigate();
  const create = useBuilderStore((s) => s.createWebsiteFromTemplate);
  const customTemplates = useBuilderStore((s) => s.customTemplates);
  const deleteCustomTemplate = useBuilderStore((s) => s.deleteCustomTemplate);

  const all = [...BUILTIN_TEMPLATES, ...customTemplates];

  const handleCreate = (templateId: string, defaultName: string) => {
    const name = prompt("Name your website", defaultName)?.trim();
    if (!name) return;
    const id = create(templateId, name);
    if (id) {
      toast.success("Website created");
      navigate(`/sites/${id}/pages`);
    }
  };

  return (
    <AppLayout title="Templates">
      <div className="max-w-6xl space-y-2">
        <p className="text-muted-foreground mb-6">
          Pick a template to start. You can edit every section after.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {all.map((tpl) => {
            const isCustom = tpl.category === "Custom";
            return (
              <div
                key={tpl.id}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-elev-sm hover:shadow-elev-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/10] bg-surface border-b border-border overflow-hidden relative">
                  <div className="absolute inset-0 origin-top-left scale-[0.32] w-[312%] h-[312%] pointer-events-none select-none">
                    <Renderer sections={tpl.pages[0].sections.slice(0, 2)} />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold tracking-tight">{tpl.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium">
                      {tpl.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 flex-1">{tpl.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tpl.allowedSections.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium"
                      >
                        {SECTION_MAP[t]?.label ?? t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => handleCreate(tpl.id, tpl.name)}>
                      Use template
                    </Button>
                    {isCustom && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          if (confirm(`Delete template "${tpl.name}"?`)) {
                            deleteCustomTemplate(tpl.id);
                            toast.success("Template deleted");
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
