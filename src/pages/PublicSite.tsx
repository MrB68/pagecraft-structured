import { Link, useParams, useLocation } from "react-router-dom";
import { useBuilderStore } from "@/store/builderStore";
import Renderer from "@/core/Renderer";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";
import { getPagePath, normalizePath } from "@/core/utils";
import { useEffect, useMemo } from "react";

export default function PublicSite() {
  const { siteId = "" } = useParams();
  const { pathname } = useLocation();
  const site = useBuilderStore((s) => s.websites.find((w) => w.id === siteId));

  // Extract the wildcard part after /site/:siteId/
  const rawPath = useMemo(() => {
    const prefix = `/site/${siteId}/`;
    return pathname.startsWith(prefix) ? pathname.slice(prefix.length) : "";
  }, [pathname, siteId]);

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

  const targetNormalized = normalizePath("/" + rawPath);

  // Match page: empty path → homepage (slug "home" or first page)
  const page = useMemo(() => {
    if (!targetNormalized || targetNormalized === "/") {
      return site.pages.find((p) => p.slug === "home") ?? site.pages[0] ?? null;
    }

    const match = site.pages.find((p) => {
      const pagePath = getPagePath(p, site.pages);
      return normalizePath(pagePath) === targetNormalized;
    });

    return match ?? null;
  }, [site.pages, targetNormalized]);

  if (!page) {
    return <NotFound />;
  }

  // SEO
  useEffect(() => {
    const title = page.seo?.title?.trim() || page.name || site.name || "";
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = page.seo?.description?.trim() || "";

    return () => {
      document.title = site.name || "";
    };
  }, [page, site.name]);

  const data = {
    store: {
      name: site.name,
      brand: site.name,
    },
    products: site.products,
    categories: site.categories,
    collections: site.categories,
    brands: site.brands,
  };

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
                  to={`/site/${site.id}${getPagePath(p, site.pages)}`}
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
      <Renderer sections={page.sections} data={data} />
    </div>
  );
}

