import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Plus, Star, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SiteReviews() {
  const { siteId, site } = useCurrentSite();
  const { upsertReview, removeReview } = useBuilderStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("5");

  if (!site) return <SiteShell title="Reviews">{null}</SiteShell>;

  const handleOpen = () => {
    if (site.products.length === 0) {
      alert("Add a product first.");
      return;
    }
    setAuthor("");
    setBody("");
    setRating("5");
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    const trimmedAuthor = author.trim();
    if (!trimmedAuthor) return;
    upsertReview(siteId, {
      productId: site.products[0].id,
      author: trimmedAuthor,
      body: body.trim(),
      rating: Math.max(1, Math.min(5, Number(rating) || 5)),
    });
    setIsDialogOpen(false);
  };

  return (
    <SiteShell
      title="Reviews"
      actions={
        <Button onClick={handleOpen}>
          <Plus className="w-4 h-4 mr-1" /> New review
        </Button>
      }
    >
      <div className="max-w-3xl space-y-3">
        {site.reviews.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <p className="text-muted-foreground mb-4">No reviews yet.</p>
            <Button onClick={handleOpen}>Add review</Button>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Review</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="review-author">Reviewer name</Label>
              <Input
                id="review-author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. Jane Doe"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && author.trim()) handleSubmit();
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="review-body">Review</Label>
              <Textarea
                id="review-body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write your review..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="review-rating">Rating</Label>
              <Select value={rating} onValueChange={setRating}>
                <SelectTrigger id="review-rating" className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 — Poor</SelectItem>
                  <SelectItem value="2">2 — Fair</SelectItem>
                  <SelectItem value="3">3 — Good</SelectItem>
                  <SelectItem value="4">4 — Very Good</SelectItem>
                  <SelectItem value="5">5 — Excellent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button disabled={!author.trim()} onClick={handleSubmit}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SiteShell>
  );
}
