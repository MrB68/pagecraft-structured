import { useDevice } from "@/core/responsive";

interface FeatureItem { title: string; description: string }
interface FeaturesProps {
  title?: string;
  subtitle?: string;
  items?: FeatureItem[];
  /** Optional explicit columns per device. Falls back to sensible defaults. */
  columns?: { desktop?: number; tablet?: number; mobile?: number };
  _device?: "desktop" | "tablet" | "mobile";
  _spacing?: string;
}

export default function FeaturesSection({
  title,
  subtitle,
  items = [],
  columns,
  _device,
  _spacing,
}: FeaturesProps) {
  const ctxDevice = useDevice();
  const device = _device ?? ctxDevice;

  const cols =
    columns?.[device] ??
    (device === "mobile" ? 1 : device === "tablet" ? 2 : 3);

  // Tailwind needs static class names — pre-map.
  const gridColsClass =
    cols === 1
      ? "grid-cols-1"
      : cols === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : cols === 4
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  const padding =
    _spacing ?? (device === "mobile" ? "py-12" : device === "tablet" ? "py-16" : "py-20");

  const titleClass =
    device === "mobile"
      ? "text-2xl font-bold tracking-tight"
      : "text-3xl md:text-4xl font-bold tracking-tight";

  return (
    <section className="bg-background">
      <div className={`container ${padding}`}>
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 md:mb-12">
          {title && <h2 className={titleClass}>{title}</h2>}
          {subtitle && (
            <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>
          )}
        </div>
        <div className={`grid ${gridColsClass} gap-5 md:gap-6`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 md:p-6 rounded-xl bg-card border border-border shadow-elev-sm hover:shadow-elev-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
