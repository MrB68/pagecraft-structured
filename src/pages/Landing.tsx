import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { TEMPLATES } from "@/templates";
import {
  ArrowRight,
  Check,
  LayoutTemplate,
  MousePointerClick,
  Smartphone,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: LayoutTemplate,
    title: "100+ premium templates",
    body: "Production-ready designs for SaaS, ecommerce, portfolios, and more — fully editable.",
  },
  {
    icon: MousePointerClick,
    title: "Visual section editor",
    body: "Drag, drop, and inline-edit. Every section is a reusable, props-driven component.",
  },
  {
    icon: Smartphone,
    title: "Responsive by default",
    body: "Designs adapt cleanly across desktop, tablet, and mobile with per-device overrides.",
  },
  {
    icon: Wand2,
    title: "AI-powered generation",
    body: "Spin up an entire site from a prompt. Refine the structure with smart suggestions.",
  },
  {
    icon: Zap,
    title: "Publish instantly",
    body: "Hit publish and your site is live on a fast global CDN — custom domain optional.",
  },
  {
    icon: Sparkles,
    title: "Built-in commerce",
    body: "Products, categories, orders, customers, reviews — wired into your storefront.",
  },
];

const TESTIMONIALS = [
  {
    name: "Maya Chen",
    role: "Founder, Lumen Studio",
    quote:
      "We launched our entire brand site in an afternoon. The section editor feels closer to Framer than a no-code tool — but ten times faster.",
  },
  {
    name: "Jordan Park",
    role: "Head of Growth, Northwind",
    quote:
      "Our marketing team ships landing pages without bothering engineering anymore. The templates look like they were custom-designed.",
  },
  {
    name: "Aiyana Reyes",
    role: "Owner, Salt & Linen",
    quote:
      "The commerce features just worked. Storefront, products, checkout flow — all polished out of the box.",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
}

export default function Landing() {
  const previewTemplates = useMemo(() => TEMPLATES.slice(0, 6), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="w-7 h-7 rounded-lg bg-gradient-primary shadow-glow grid place-items-center text-primary-foreground">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            Sitewise
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Loved by</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/dashboard">
                Open app
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-subtle" />
        <div
          aria-hidden
          className="absolute -z-10 left-1/2 top-[-200px] -translate-x-1/2 h-[520px] w-[820px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div className="container py-24 md:py-32 text-center max-w-4xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-accent text-accent-foreground border border-accent">
            <Sparkles className="w-3 h-3" />
            New · AI website generation
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            The website builder that{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
              feels designed
            </span>
            .
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Launch beautiful, responsive websites in minutes — with a visual editor,
            premium templates, and built-in commerce. No code required.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/signup">
                Start building free
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/templates">Browse templates</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-success" /> No credit card required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-success" /> Publish in one click
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-success" /> 100+ templates
            </span>
          </div>

          {/* Hero "screenshot" mock */}
          <div className="mt-16 relative">
            <div className="rounded-2xl border border-border bg-card shadow-elev-lg overflow-hidden text-left">
              <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-muted/40">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
                <span className="ml-3 text-[11px] text-muted-foreground font-mono">
                  sitewise.app/editor
                </span>
              </div>
              <div className="grid grid-cols-12 min-h-[360px]">
                <div className="col-span-3 border-r border-border p-3 space-y-1.5 bg-muted/20">
                  {["Hero", "Features", "Product Grid", "Testimonials", "CTA", "Footer"].map((s) => (
                    <div
                      key={s}
                      className="text-xs px-2 py-2 rounded-md bg-card border border-border/70 text-muted-foreground"
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div className="col-span-9 p-6 space-y-4">
                  <div className="h-3 w-1/3 rounded bg-muted" />
                  <div className="h-9 w-3/4 rounded bg-foreground/85" />
                  <div className="h-3 w-2/3 rounded bg-muted" />
                  <div className="h-3 w-1/2 rounded bg-muted" />
                  <div className="flex gap-2 pt-1">
                    <div className="h-9 w-32 rounded-md bg-gradient-primary" />
                    <div className="h-9 w-28 rounded-md border border-border" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] rounded-lg bg-gradient-subtle border border-border"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-background border-t border-border">
        <div className="container py-24">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">
              Why Sitewise
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Everything you need to ship.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              A studio-grade builder, an editor your team actually enjoys, and infrastructure
              that scales as you grow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elev-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow group-hover:scale-105 transition-transform">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 font-semibold text-lg tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="bg-surface border-t border-border">
        <div className="container py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                Templates
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
                Start from beautiful.
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                Hand-picked designs across every industry. Open one, edit the content,
                and publish — that's it.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/templates">
                View all templates <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewTemplates.map((tpl, i) => (
              <Link
                key={tpl.id}
                to="/templates"
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elev-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-subtle">
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      background: `linear-gradient(${135 + i * 30}deg, hsl(${(i * 47) % 360} 70% 88%), hsl(${(i * 47 + 60) % 360} 70% 75%))`,
                    }}
                  />
                  <div className="absolute inset-x-6 top-6 bottom-6 rounded-xl bg-card/90 backdrop-blur shadow-elev-md p-4 flex flex-col gap-2">
                    <div className="h-2 w-1/3 rounded bg-muted" />
                    <div className="h-5 w-3/4 rounded bg-foreground/80" />
                    <div className="h-2 w-2/3 rounded bg-muted" />
                    <div className="mt-auto grid grid-cols-3 gap-1.5">
                      {[0, 1, 2].map((j) => (
                        <div key={j} className="aspect-square rounded bg-muted" />
                      ))}
                    </div>
                  </div>
                  {tpl.isPremium && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-amber-500 text-white shadow-elev-sm">
                      Premium
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold tracking-tight truncate">{tpl.name}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground shrink-0">
                      {tpl.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {tpl.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-background border-t border-border">
        <div className="container py-24">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">
              Loved by builders
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              The builder teams trust.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="p-7 rounded-2xl border border-border bg-card shadow-elev-sm hover:shadow-elev-md transition-shadow flex flex-col"
              >
                <Stars />
                <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <div className="font-semibold tracking-tight">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border">
        <div className="container py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary text-primary-foreground p-12 md:p-16 text-center shadow-glow">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, hsl(0 0% 100% / 0.4), transparent 40%), radial-gradient(circle at 80% 80%, hsl(0 0% 100% / 0.3), transparent 40%)",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Build something beautiful today.
              </h2>
              <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto md:text-lg">
                Start free. Pick a template. Publish in minutes. No credit card required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/signup">
                    Get started free <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to="/templates">Explore templates</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-gradient-primary shadow-glow grid place-items-center text-primary-foreground">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              Sitewise
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The premium website builder for designers, founders, and modern teams.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><Link to="/templates" className="hover:text-primary transition-colors">Templates</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Account
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/login" className="hover:text-primary transition-colors">Sign in</Link></li>
              <li><Link to="/signup" className="hover:text-primary transition-colors">Sign up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Sitewise. All rights reserved.</span>
            <span>Crafted with care.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
