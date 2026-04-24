import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface CloProduct {
  id?: string;
  name: string;
  price: string;
  image: string;
  href?: string;
}

export interface CloProductGridSectionProps {
  title?: string;
  products?: CloProduct[];
  ctaLabel?: string;
  ctaHref?: string;
  autoScroll?: boolean;
  animate?: boolean;
}

export default function CloProductGridSection({
  title = "Featured",
  products = [],
  ctaLabel = "View All",
  ctaHref = "#",
  autoScroll = true,
  animate = true,
}: CloProductGridSectionProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!autoScroll) return;
    const el = scrollRef.current;
    if (!el) return;
    el.dataset.paused = "false";
    const interval = setInterval(() => {
      if (!el || el.dataset.paused === "true") return;
      el.scrollBy({ left: 1, behavior: "auto" });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: "auto" });
      }
    }, 20);
    return () => clearInterval(interval);
  }, [autoScroll, products.length]);

  const items = products.length > 0 ? [...products, ...products] : [];

  return (
    <section className="bg-black px-4 pt-16 pb-20 text-white sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl tracking-[0.2em] uppercase">{title}</h2>
          </div>
        )}

        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden touch-auto cursor-grab active:cursor-grabbing relative [&::-webkit-scrollbar]:hidden overscroll-x-contain"
          onMouseEnter={() => scrollRef.current && (scrollRef.current.dataset.paused = "true")}
          onMouseLeave={() => scrollRef.current && (scrollRef.current.dataset.paused = "false")}
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex gap-3 select-none">
            {items.map((p, index) => {
              const Card = animate ? motion.div : "div";
              return (
                <Card
                  key={(p.id ?? p.name) + "-" + index}
                  {...(animate
                    ? {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { delay: (index % products.length) * 0.05 },
                      }
                    : {})}
                  className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0"
                >
                  <a href={p.href ?? "#"} className="block group relative overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] bg-neutral-900">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 hidden md:flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full pb-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-center">
                        <p className="text-xs tracking-[0.3em] uppercase">View Product</p>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs uppercase tracking-widest md:hidden">
                      <span>{p.name}</span>
                      <span className="opacity-70">{p.price}</span>
                    </div>
                  </a>
                  <div className="hidden md:flex items-center justify-between mt-3 text-xs uppercase tracking-widest">
                    <span>{p.name}</span>
                    <span className="opacity-70">{p.price}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {ctaLabel && (
          <div className="mt-10 text-center">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-3 border-2 border-white px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
