import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { TEMPLATES } from "@/templates";
import { Globe, LayoutTemplate, Plus, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const websites = useBuilderStore((s) => s.websites);
  const published = websites.filter((w) => w.published).length;

  const stats = [
    { label: "Websites", value: websites.length, icon: Globe },
    { label: "Published", value: published, icon: Sparkles },
    { label: "Templates", value: TEMPLATES.length, icon: LayoutTemplate },
  ];

  return (
    <AppLayout
      title="Dashboard"
      actions={
        <Button asChild>
          <Link to="/templates">
            <Plus className="w-4 h-4 mr-1" /> Create Website
          </Link>
        </Button>
      }
    >
      <div className="space-y-8 max-w-6xl">
        <section className="rounded-2xl bg-gradient-primary text-primary-foreground p-8 md:p-10 shadow-glow">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary-foreground/15">
              Welcome
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Build beautiful websites in minutes.
            </h2>
            <p className="text-primary-foreground/85">
              Pick a template, edit your content with structured forms, and publish a live site.
            </p>
            <div className="pt-2">
              <Button asChild variant="secondary">
                <Link to="/templates">Browse templates</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-elev-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <s.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mt-2 tracking-tight">{s.value}</div>
            </div>
          ))}
        </div>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight">Recent websites</h3>
            <Link to="/websites" className="text-sm text-primary hover:underline">
              View all
            </Link>
          </div>
          {websites.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center bg-card">
              <p className="text-muted-foreground mb-4">You haven't created any websites yet.</p>
              <Button asChild>
                <Link to="/templates">
                  <Plus className="w-4 h-4 mr-1" /> Create your first website
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {websites.slice(0, 6).map((w) => (
                <Link
                  key={w.id}
                  to={`/sites/${w.id}/pages`}
                  className="rounded-xl border border-border bg-card p-5 shadow-elev-sm hover:shadow-elev-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium truncate">{w.name}</span>
                    {w.published && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-success/15 text-success font-medium">
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{w.pages.length} page{w.pages.length === 1 ? "" : "s"}</p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </AppLayout>
  );
}
