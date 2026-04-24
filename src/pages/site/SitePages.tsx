import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { ExternalLink, Pencil, Plus, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SitePages() {
  const { siteId, site } = useCurrentSite();
  const { addPage, deletePage } = useBuilderStore();
  const navigate = useNavigate();

  if (!site) return <SiteShell title="Pages">{null}</SiteShell>;

  return (
    <SiteShell
      title="Pages"
      actions={
        <Button
          onClick={() => {
            const name = prompt("Page name (e.g. Pricing)")?.trim();
            if (!name) return;
            addPage(siteId, name);
            toast.success("Page added");
          }}
        >
          <Plus className="w-4 h-4 mr-1" /> New page
        </Button>
      }
    >
      <div className="max-w-4xl rounded-xl border border-border bg-card overflow-hidden shadow-elev-sm">
        <table className="w-full text-sm">
          <thead className="bg-surface text-muted-foreground">
            <tr>
              <th className="text-left font-medium px-5 py-3">Name</th>
              <th className="text-left font-medium px-5 py-3 hidden md:table-cell">Slug</th>
              <th className="text-left font-medium px-5 py-3">Sections</th>
              <th className="text-right font-medium px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {site.pages.map((p) => (
              <tr key={p.id} className="border-t border-border hover:bg-surface/50">
                <td className="px-5 py-3 font-medium">{p.name}</td>
                <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">/{p.slug}</td>
                <td className="px-5 py-3 text-muted-foreground">{p.sections.length}</td>
                <td className="px-5 py-3">
                  <div className="flex justify-end gap-1">
                    {site.published && (
                      <Button asChild size="icon" variant="ghost">
                        <Link to={`/site/${site.id}/${p.id}`} target="_blank">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => navigate(`/editor/${site.id}/${p.id}`)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      disabled={site.pages.length <= 1}
                      onClick={() => {
                        if (confirm(`Delete page "${p.name}"?`)) {
                          deletePage(siteId, p.id);
                          toast.success("Page deleted");
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SiteShell>
  );
}
