import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/store/builderStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SiteSettings() {
  const { siteId, site } = useCurrentSite();
  const { renameWebsite, deleteWebsite } = useBuilderStore();
  const [name, setName] = useState(site?.name ?? "");
  const navigate = useNavigate();

  if (!site) return <SiteShell title="Website Settings">{null}</SiteShell>;

  return (
    <SiteShell title="Website Settings">
      <div className="max-w-2xl space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-elev-sm space-y-4">
          <div>
            <h3 className="font-semibold">General</h3>
            <p className="text-xs text-muted-foreground">Basic information about this website.</p>
          </div>
          <div className="space-y-2">
            <Label>Website name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <Button
            onClick={() => {
              if (!name.trim()) return;
              renameWebsite(siteId, name.trim());
              toast.success("Saved");
            }}
          >
            Save changes
          </Button>
        </div>

        <div className="rounded-xl border border-destructive/30 bg-card p-6 shadow-elev-sm space-y-3">
          <div>
            <h3 className="font-semibold text-destructive">Danger zone</h3>
            <p className="text-xs text-muted-foreground">This action cannot be undone.</p>
          </div>
          <Button
            variant="destructive"
            onClick={() => {
              if (confirm(`Delete "${site.name}"? This cannot be undone.`)) {
                deleteWebsite(siteId);
                navigate("/websites");
              }
            }}
          >
            Delete website
          </Button>
        </div>
      </div>
    </SiteShell>
  );
}
