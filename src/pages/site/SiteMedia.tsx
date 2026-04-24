import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function SiteMedia() {
  const { siteId, site } = useCurrentSite();
  const { addMedia, removeMedia } = useBuilderStore();

  if (!site) return <SiteShell title="Media">{null}</SiteShell>;

  const handleAdd = () => {
    const url = prompt("Image URL")?.trim();
    if (!url) return;
    const name = prompt("Name", "Untitled")?.trim() || "Untitled";
    addMedia(siteId, { url, name });
    toast.success("Media added");
  };

  return (
    <SiteShell
      title="Media"
      actions={
        <Button onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-1" /> Add image
        </Button>
      }
    >
      {site.media.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card max-w-2xl">
          <h3 className="font-semibold mb-1">No media yet</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Paste an image URL to add it to your site library.
          </p>
          <Button onClick={handleAdd}>Add your first image</Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {site.media.map((m) => (
            <div
              key={m.id}
              className="group rounded-xl border border-border bg-card overflow-hidden shadow-elev-sm hover:shadow-elev-md transition-shadow"
            >
              <div className="aspect-square bg-muted">
                <img src={m.url} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 flex items-center justify-between gap-2">
                <span className="text-xs truncate">{m.name}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7"
                  onClick={() => removeMedia(siteId, m.id)}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </SiteShell>
  );
}
