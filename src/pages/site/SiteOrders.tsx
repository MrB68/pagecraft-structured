import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order } from "@/types";
import { useState } from "react";
import NameInputDialog from "@/components/modals/NameInputDialog";

const STATUS_STYLES: Record<Order["status"], string> = {
  pending: "bg-accent text-accent-foreground",
  fulfilled: "bg-success/15 text-success",
  refunded: "bg-destructive/15 text-destructive",
};

export default function SiteOrders() {
  const { siteId, site } = useCurrentSite();
  const { addOrder, setOrderStatus } = useBuilderStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!site) return <SiteShell title="Orders">{null}</SiteShell>;

  const handleOpen = () => {
    if (site.customers.length === 0) {
      alert("Add a customer first.");
      return;
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = (total: string) => {
    const customer = site.customers[0];
    addOrder(siteId, { customerId: customer.id, total, status: "pending" });
  };

  return (
    <SiteShell
      title="Orders"
      actions={
        <Button onClick={handleOpen}>
          <Plus className="w-4 h-4 mr-1" /> New order
        </Button>
      }
    >
      <div className="max-w-5xl">
        {site.orders.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <p className="text-muted-foreground mb-4">No orders yet.</p>
            <Button onClick={handleOpen}>Create test order</Button>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-elev-sm">
            <table className="w-full text-sm">
              <thead className="bg-surface text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-5 py-3">Order</th>
                  <th className="text-left font-medium px-5 py-3">Customer</th>
                  <th className="text-left font-medium px-5 py-3">Total</th>
                  <th className="text-left font-medium px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {site.orders.map((o) => {
                  const customer = site.customers.find((c) => c.id === o.customerId);
                  return (
                    <tr key={o.id} className="border-t border-border hover:bg-surface/50">
                      <td className="px-5 py-3 font-mono text-xs">#{o.id.slice(0, 6)}</td>
                      <td className="px-5 py-3">{customer?.name ?? "—"}</td>
                      <td className="px-5 py-3">{o.total}</td>
                      <td className="px-5 py-3">
                        <Select
                          value={o.status}
                          onValueChange={(v) => setOrderStatus(siteId, o.id, v as Order["status"])}
                        >
                          <SelectTrigger className={`w-[140px] h-8 text-xs ${STATUS_STYLES[o.status]}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="fulfilled">Fulfilled</SelectItem>
                            <SelectItem value="refunded">Refunded</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <NameInputDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Order Total"
        placeholder="e.g. $99"
        defaultValue="$0"
        onSubmit={handleSubmit}
      />
    </SiteShell>
  );
}
