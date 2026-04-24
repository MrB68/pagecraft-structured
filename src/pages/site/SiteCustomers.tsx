import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Plus, Trash2 } from "lucide-react";

export default function SiteCustomers() {
  const { siteId, site } = useCurrentSite();
  const { upsertCustomer, removeCustomer } = useBuilderStore();

  if (!site) return <SiteShell title="Customers">{null}</SiteShell>;

  const handleAdd = () => {
    const name = prompt("Customer name")?.trim();
    if (!name) return;
    const email = prompt("Email", "customer@example.com")?.trim() || "";
    upsertCustomer(siteId, { name, email });
  };

  return (
    <SiteShell
      title="Customers"
      actions={
        <Button onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-1" /> New customer
        </Button>
      }
    >
      <div className="max-w-3xl">
        {site.customers.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <p className="text-muted-foreground mb-4">No customers yet.</p>
            <Button onClick={handleAdd}>Add customer</Button>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-elev-sm">
            <table className="w-full text-sm">
              <thead className="bg-surface text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-5 py-3">Name</th>
                  <th className="text-left font-medium px-5 py-3">Email</th>
                  <th className="text-right font-medium px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {site.customers.map((c) => (
                  <tr key={c.id} className="border-t border-border hover:bg-surface/50">
                    <td className="px-5 py-3 font-medium">{c.name}</td>
                    <td className="px-5 py-3 text-muted-foreground">{c.email}</td>
                    <td className="px-5 py-3 text-right">
                      <Button size="icon" variant="ghost" onClick={() => removeCustomer(siteId, c.id)}>
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
