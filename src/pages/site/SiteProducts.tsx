import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function SiteProducts() {
  const { siteId, site } = useCurrentSite();
  const { upsertProduct, removeProduct } = useBuilderStore();

  if (!site) return <SiteShell title="Products">{null}</SiteShell>;

  const handleAdd = () => {
    const name = prompt("Product name")?.trim();
    if (!name) return;
    const price = prompt("Price (e.g. $29)", "$0")?.trim() || "$0";
    upsertProduct(siteId, { name, price, stock: 0 });
    toast.success("Product added");
  };

  return (
    <SiteShell
      title="Products"
      actions={
        <Button onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-1" /> New product
        </Button>
      }
    >
      <div className="max-w-5xl">
        {site.products.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <h3 className="font-semibold mb-1">No products yet</h3>
            <p className="text-muted-foreground text-sm mb-4">Add your first product to start selling.</p>
            <Button onClick={handleAdd}>Add product</Button>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-elev-sm">
            <table className="w-full text-sm">
              <thead className="bg-surface text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-5 py-3">Name</th>
                  <th className="text-left font-medium px-5 py-3">Price</th>
                  <th className="text-left font-medium px-5 py-3 hidden md:table-cell">Stock</th>
                  <th className="text-right font-medium px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {site.products.map((p) => (
                  <tr key={p.id} className="border-t border-border hover:bg-surface/50">
                    <td className="px-5 py-3 font-medium">{p.name}</td>
                    <td className="px-5 py-3">{p.price}</td>
                    <td className="px-5 py-3 hidden md:table-cell text-muted-foreground">{p.stock}</td>
                    <td className="px-5 py-3 text-right">
                      <Button size="icon" variant="ghost" onClick={() => removeProduct(siteId, p.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </SiteShell>
  );
}
