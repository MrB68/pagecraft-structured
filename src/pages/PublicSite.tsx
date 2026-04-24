import { Link, useParams } from "react-router-dom";
import { useBuilderStore } from "@/store/builderStore";
import Renderer from "@/core/Renderer";
import { Button } from "@/components/ui/button";

export default function PublicSite() {
  const { siteId = "", pageId } = useParams();
  const site = useBuilderStore((s) => s.websites.find((w) => w.id === siteId));

  if (!site) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Site not found</h1>
          <p className="text-muted-foreground mb-4">This website doesn't exist.</p>
          <Button asChild variant="outline">
            <Link to="/">Go home</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!site.published) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center bg-surface">
        <div className="rounded-xl border border-border bg-card p-8 max-w-md shadow-elev-md">
          <h1 className="text-xl font-semibold mb-2">Site not published</h1>
          <p className="text-muted-foreground text-sm mb-4">
            The owner hasn't published this website yet.
          </p>
          <Button asChild variant="outline" size="sm">
            <Link to={`/editor/${site.id}/${site.pages[0]?.id}`}>Open editor</Link>
          </Button>
        </div>
      </div>
    );
  }

  const page = pageId
    ? site.pages.find((p) => p.id === pageId) ?? site.pages[0]
    : site.pages[0];

  return (
    <div className="min-h-screen bg-background">
      {site.pages.length > 1 && (
        <nav className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-20">
          <div className="container h-14 flex items-center justify-between gap-6">
            <div className="font-semibold tracking-tight">{site.name}</div>
            <div className="flex gap-1">
              {site.pages.map((p) => (
                <Link
                  key={p.id}
                  to={`/site/${site.id}/${p.id}`}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    p.id === page?.id
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
      {page && <Renderer sections={page.sections} />}
    </div>
  );
}
