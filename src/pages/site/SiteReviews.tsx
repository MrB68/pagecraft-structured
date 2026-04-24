import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Plus, Star, Trash2 } from "lucide-react";

export default function SiteReviews() {
  const { siteId, site } = useCurrentSite();
  const { upsertReview, removeReview } = useBuilderStore();

  if (!site) return <SiteShell title="Reviews">{null}</SiteShell>;

  const handleAdd = () => {
    if (site.products.length === 0) {
      alert("Add a product first.");
      return;
    }
    const author = prompt("Reviewer name")?.trim();
    if (!author) return;
    const body = prompt("Review")?.trim() || "";
    const rating = Math.max(1, Math.min(5, Number(prompt("Rating 1-5", "5") ?? 5)));
    upsertReview(siteId, { productId: site.products[0].id, author, body, rating });
  };

  return (
    <SiteShell
      title="Reviews"
      actions={
        <Button onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-1" /> New review
        </Button>
      }
    >
      <div className="max-w-3xl space-y-3">
        {site.reviews.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <p className="text-muted-foreground mb-4">No reviews yet.</p>
            <Button onClick={handleAdd}>Add review</Button>
          </div>
        ) : (
          site.reviews.map((r) => {
            const product = site.products.find((p) => p.id === r.productId);
            return (
              <div key={r.id} className="rounded-xl border border-border bg-card p-5 shadow-elev-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium">{r.author}</div>
                    <div className="text-xs text-muted-foreground">on {product?.name ?? "Product"}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < r.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                      />
                    ))}
                    <Button size="icon" variant="ghost" className="h-7 w-7 ml-2" onClick={() => removeReview(siteId, r.id)}>
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{r.body}</p>
              </div>
            );
          })
        )}
      </div>
    </SiteShell>
  );
}
