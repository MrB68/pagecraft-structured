interface Product { name: string; price: string; image?: string }
interface ProductGridProps {
  title?: string;
  products?: Product[];
}

export default function ProductGridSection({ title, products = [] }: ProductGridProps) {
  return (
    <section className="bg-surface">
      <div className="container py-20">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">{title}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-3 shadow-elev-sm group-hover:shadow-elev-md transition-shadow">
                {p.image ? (
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
