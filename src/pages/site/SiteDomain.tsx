import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useBuilderStore } from "@/store/builderStore";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function SiteDomain() {
  const { siteId, site } = useCurrentSite();
  const { setDomain, togglePublish } = useBuilderStore();
  const [domain, setDomainLocal] = useState(site?.domain ?? "");

  if (!site) return <SiteShell title="Domain & Publish">{null}</SiteShell>;

  const publicUrl = `${window.location.origin}/site/${site.id}`;

  return (
    <SiteShell title="Domain & Publish">
      <div className="max-w-2xl space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-elev-sm space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold">Publish status</h3>
              <p className="text-xs text-muted-foreground">
                Make your site reachable on its public URL.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                checked={site.published}
                onCheckedChange={() => {
                  togglePublish(siteId);
                  toast.success(site.published ? "Unpublished" : "Published");
                }}
              />
              <span className="text-xs text-muted-foreground">
                {site.published ? "Live" : "Draft"}
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-3 flex items-center justify-between gap-2">
            <span className="text-sm font-mono truncate">{publicUrl}</span>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  navigator.clipboard.writeText(publicUrl);
                  toast.success("Copied");
                }}
              >
                <Copy className="w-4 h-4" />
              </Button>
              {site.published && (
                <Button asChild size="icon" variant="ghost">
                  <Link to={`/site/${site.id}`} target="_blank">
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-elev-sm space-y-4">
          <div>
            <h3 className="font-semibold">Custom domain</h3>
            <p className="text-xs text-muted-foreground">
              Connect a custom domain (display only in this MVP).
            </p>
          </div>
          <div className="space-y-2">
            <Label>Domain</Label>
            <Input
              placeholder="www.yourbrand.com"
              value={domain}
              onChange={(e) => setDomainLocal(e.target.value)}
            />
          </div>
          <Button
            onClick={() => {
              setDomain(siteId, domain.trim());
              toast.success("Domain saved");
            }}
          >
            Save domain
          </Button>
        </div>
      </div>
    </SiteShell>
  );
}

