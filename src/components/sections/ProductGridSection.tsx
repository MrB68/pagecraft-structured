import { useDevice } from "@/core/responsive";

interface Product { name: string; price: string; image?: string }
interface ProductGridProps {
  title?: string;
  products?: Product[];
  /** Columns per device, defaults to 4/3/2. */
  columns?: { desktop?: number; tablet?: number; mobile?: number };
  _device?: "desktop" | "tablet" | "mobile";
  _spacing?: string;
}

export default function ProductGridSection({
  title,
  products = [],
  columns,
  _device,
  _spacing,
}: ProductGridProps) {
  const ctxDevice = useDevice();
  const device = _device ?? ctxDevice;

  const cols =
    columns?.[device] ??
    (device === "mobile" ? 2 : device === "tablet" ? 3 : 4);

  const gridColsClass =
    cols === 1
      ? "grid-cols-1"
      : cols === 2
        ? "grid-cols-2"
        : cols === 3
          ? "grid-cols-2 md:grid-cols-3"
          : cols === 5
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  const padding =
    _spacing ?? (device === "mobile" ? "py-12" : device === "tablet" ? "py-16" : "py-20");

  const titleClass =
    device === "mobile"
      ? "text-2xl font-bold tracking-tight mb-6"
      : "text-3xl md:text-4xl font-bold tracking-tight mb-10";

  return (
    <section className="bg-surface">
      <div className={`container ${padding}`}>
        {title && <h2 className={titleClass}>{title}</h2>}
        <div className={`grid ${gridColsClass} gap-4 md:gap-6`}>
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-3 shadow-elev-sm group-hover:shadow-elev-md transition-shadow">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-primary opacity-80" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-sm">{p.name}</h3>
                <span className="text-sm text-muted-foreground">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
