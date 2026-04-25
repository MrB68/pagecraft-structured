import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Copy, ExternalLink, Pencil, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export default function Websites() {
  const { websites, deleteWebsite, togglePublish, duplicateWebsite } = useBuilderStore();

  return (
    <AppLayout
      title="Websites"
      actions={
        <Button asChild>
          <Link to="/templates">
            <Plus className="w-4 h-4 mr-1" /> New website
          </Link>
        </Button>
      }
    >
      <div className="max-w-6xl">
        {websites.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <h3 className="font-semibold mb-1">No websites yet</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Create your first website from a template.
            </p>
            <Button asChild>
              <Link to="/templates">Browse templates</Link>
            </Button>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-elev-sm">
            <table className="w-full text-sm">
              <thead className="bg-surface text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-5 py-3">Name</th>
                  <th className="text-left font-medium px-5 py-3 hidden md:table-cell">Pages</th>
                  <th className="text-left font-medium px-5 py-3">Status</th>
                  <th className="text-right font-medium px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {websites.map((w) => (
                  <tr key={w.id} className="border-t border-border hover:bg-surface/50">
                    <td className="px-5 py-3 font-medium">
                      <Link to={`/sites/${w.id}/pages`} className="hover:text-primary transition-colors">
                        {w.name}
                      </Link>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">
                      {w.pages.length}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={w.published}
                          onCheckedChange={() => {
                            togglePublish(w.id);
                            toast.success(w.published ? "Unpublished" : "Published");
                          }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {w.published ? "Live" : "Draft"}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex justify-end gap-1">
                        {w.published && (
                          <Button asChild size="icon" variant="ghost">
                            <Link to={`/site/${w.id}`} target="_blank">
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                        <Button asChild size="icon" variant="ghost" title="Edit">
                          <Link to={`/editor/${w.id}/${w.pages[0]?.id}`}>
                            <Pencil className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          title="Duplicate"
                          onClick={() => {
                            const newId = duplicateWebsite(w.id);
                            if (newId) toast.success("Website duplicated");
                          }}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => {
                            if (confirm(`Delete "${w.name}"?`)) {
                              deleteWebsite(w.id);
                              toast.success("Website deleted");
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
        )}
      </div>
    </AppLayout>
  );
}

