import { useState, useMemo } from "react";
import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { useBuilderStore } from "@/store/builderStore";
import { usePOSStore } from "@/store/posStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { Search, Plus, Minus, Trash2, ShoppingCart, Package } from "lucide-react";

function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

function parsePrice(price: string): number {
  const cleaned = price.replace(/[^0-9.]/g, "");
  const parsed = parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function POS() {
  const { siteId, site } = useCurrentSite();
  const [search, setSearch] = useState("");

  const cart = usePOSStore((s) => s.cart);
  const addToCart = usePOSStore((s) => s.addToCart);
  const removeFromCart = usePOSStore((s) => s.removeFromCart);
  const increaseQty = usePOSStore((s) => s.increaseQty);
  const decreaseQty = usePOSStore((s) => s.decreaseQty);
  const clearCart = usePOSStore((s) => s.clearCart);
  const getTotal = usePOSStore((s) => s.getTotal);

  const addOrder = useBuilderStore((s) => s.addOrder);
  const upsertCustomer = useBuilderStore((s) => s.upsertCustomer);
  const upsertProduct = useBuilderStore((s) => s.upsertProduct);

  const filteredProducts = useMemo(() => {
    if (!site) return [];
    const q = search.trim().toLowerCase();
    if (!q) return site.products;
    return site.products.filter((p) => p.name.toLowerCase().includes(q));
  }, [site, search]);

  const handleCompleteSale = () => {
    if (!site || cart.length === 0) return;

    const total = getTotal();

    // Find or create walk-in customer
    let walkIn = site.customers.find((c) => c.name === "Walk-in Customer");
    if (!walkIn) {
      upsertCustomer(siteId, { name: "Walk-in Customer", email: "pos@store.local" });
      // Re-fetch after state update — read fresh state
      const freshSite = useBuilderStore
        .getState()
        .websites.find((w) => w.id === siteId);
      walkIn = freshSite?.customers.find((c) => c.name === "Walk-in Customer");
    }
    const customerId = walkIn?.id ?? "";

    // Create order
    addOrder(siteId, {
      customerId,
      total: formatCurrency(total),
      status: "fulfilled",
    });

    // Decrement stock
    cart.forEach((item) => {
      const product = site.products.find((p) => p.id === item.productId);
      if (product && typeof product.stock === "number") {
        const newStock = Math.max(0, product.stock - item.quantity);
        upsertProduct(siteId, { ...product, stock: newStock });
      }
    });

    clearCart();
    toast.success("Sale completed successfully!");
  };

  if (!site) return <SiteShell title="POS">{null}</SiteShell>;

  return (
    <SiteShell title="POS">
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)] min-h-[500px]">
        {/* LEFT — Products */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>

          {site.products.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
              <Package className="w-10 h-10 text-muted-foreground mb-3" />
              <h3 className="font-semibold mb-1">No products yet</h3>
              <p className="text-muted-foreground text-sm">
                Add products in the Products tab to start selling.
              </p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
              <Search className="w-10 h-10 text-muted-foreground mb-3" />
              <h3 className="font-semibold mb-1">No products found</h3>
              <p className="text-muted-foreground text-sm">
                Try a different search term.
              </p>
            </div>
          ) : (
            <ScrollArea className="flex-1 -mx-2 px-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 pb-2">
                {filteredProducts.map((product) => {
                  const numericPrice = parsePrice(product.price);
                  const inCart = cart.find((c) => c.productId === product.id);
                  return (
                    <Card
                      key={product.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-4 flex flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="font-medium truncate">{product.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {formatCurrency(numericPrice)}
                            </p>
                          </div>
                          {typeof product.stock === "number" && (
                            <Badge variant="secondary" className="shrink-0">
                              {product.stock} in stock
                            </Badge>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="w-full mt-1"
                          onClick={() =>
                            addToCart({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                            })
                          }
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add{inCart ? ` (${inCart.quantity})` : ""}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </ScrollArea>
          )}
        </div>

        {/* RIGHT — Cart */}
        <div className="w-full lg:w-96 flex flex-col gap-4">
          <Card className="flex flex-col h-full lg:h-auto lg:sticky lg:top-0">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-muted-foreground" />
              <h2 className="font-semibold">Cart</h2>
              <Badge variant="secondary" className="ml-auto">
                {cart.reduce((sum, i) => sum + i.quantity, 0)} items
              </Badge>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <ShoppingCart className="w-10 h-10 text-muted-foreground mb-3" />
                <p className="text-muted-foreground text-sm">
                  Your cart is empty. Add products to get started.
                </p>
              </div>
            ) : (
              <>
                <ScrollArea className="flex-1 max-h-[400px]">
                  <div className="p-4 flex flex-col gap-3">
                    {cart.map((item) => (
                      <div
                        key={item.productId}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatCurrency(item.price)} × {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <Button
                            size="icon"
                            variant="outline"
                            className="w-7 h-7"
                            onClick={() => decreaseQty(item.productId)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-6 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="w-7 h-7"
                            onClick={() => increaseQty(item.productId)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="w-7 h-7 text-destructive ml-1"
                            onClick={() => removeFromCart(item.productId)}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-xl font-bold">
                      {formatCurrency(getTotal())}
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    size="lg"
                    disabled={cart.length === 0}
                    onClick={handleCompleteSale}
                  >
                    Complete Sale
                  </Button>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </SiteShell>
  );
}

