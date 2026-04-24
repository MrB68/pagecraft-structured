import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { BarChart3, Eye, MousePointerClick, ShoppingCart, Users } from "lucide-react";

export default function SiteAnalytics() {
  const { site } = useCurrentSite();
  if (!site) return <SiteShell title="Traffic overview">{null}</SiteShell>;

  // Deterministic mock numbers based on site id
  const seed = site.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const visitors = 320 + (seed % 800);
  const pageviews = visitors * 3 + (seed % 100);
  const conversion = ((seed % 50) / 10 + 1).toFixed(1);
  const orders = site.orders.length;

  const stats = [
    { label: "Visitors (30d)", value: visitors.toLocaleString(), icon: Users, delta: "+12%" },
    { label: "Pageviews", value: pageviews.toLocaleString(), icon: Eye, delta: "+8%" },
    { label: "Conversion", value: `${conversion}%`, icon: MousePointerClick, delta: "+0.4%" },
    { label: "Orders", value: orders, icon: ShoppingCart, delta: orders ? "+2" : "0" },
  ];

  // Mini bar chart data
  const bars = Array.from({ length: 14 }, (_, i) => 30 + ((seed + i * 13) % 70));

  return (
    <SiteShell title="Traffic overview">
      <div className="space-y-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-elev-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{s.label}</span>
                <s.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold mt-2 tracking-tight">{s.value}</div>
              <div className="text-xs text-success mt-1">{s.delta}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-elev-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Visitors — last 14 days</h3>
              <p className="text-xs text-muted-foreground">Demo data for preview purposes.</p>
            </div>
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex items-end gap-2 h-40">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-gradient-primary opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
