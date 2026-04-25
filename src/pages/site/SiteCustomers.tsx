import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SiteCustomers() {
  const { siteId, site } = useCurrentSite();
  const { upsertCustomer, removeCustomer } = useBuilderStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!site) return <SiteShell title="Customers">{null}</SiteShell>;

  const handleOpen = () => {
    setName("");
    setEmail("customer@example.com");
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    const trimmedName = name.trim();
    if (!trimmedName) return;
    upsertCustomer(siteId, { name: trimmedName, email: email.trim() });
    setIsDialogOpen(false);
  };

  return (
    <SiteShell
      title="Customers"
      actions={
        <Button onClick={handleOpen}>
          <Plus className="w-4 h-4 mr-1" /> New customer
        </Button>
      }
    >
      <div className="max-w-3xl">
        {site.customers.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <p className="text-muted-foreground mb-4">No customers yet.</p>
            <Button onClick={handleOpen}>Add customer</Button>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Customer</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customer-name">Customer name</Label>
              <Input
                id="customer-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jane Doe"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && name.trim()) handleSubmit();
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="customer-email">Email</Label>
              <Input
                id="customer-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="customer@example.com"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && name.trim()) handleSubmit();
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button disabled={!name.trim()} onClick={handleSubmit}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SiteShell>
  );
}
