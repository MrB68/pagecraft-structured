interface FeatureItem { title: string; description: string }
interface FeaturesProps {
  title?: string;
  subtitle?: string;
  items?: FeatureItem[];
}

export default function FeaturesSection({ title, subtitle, items = [] }: FeaturesProps) {
  return (
    <section className="bg-background">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          {title && <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>}
          {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border shadow-elev-sm hover:shadow-elev-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
