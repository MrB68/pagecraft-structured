import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Minus } from "lucide-react";

export interface CollectionItem {
  name: string;
  image: string;
  href?: string;
}

export interface CollectionsSectionProps {
  title?: string;
  collections?: CollectionItem[];
  ctaLabel?: string;
  ctaHref?: string;
  autoScroll?: boolean;
  animate?: boolean;
}

export default function CollectionsSection({
  title = "Collections",
  collections = [],
  ctaLabel = "View All Collections",
  ctaHref = "#",
  autoScroll = true,
  animate = true,
}: CollectionsSectionProps) {
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
  }, [autoScroll, collections.length]);

  const items = collections.length > 0 ? [...collections, ...collections] : [];
  const Wrapper = animate ? motion.div : "div";

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <Wrapper
        {...(animate
          ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8 } }
          : {})}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tracking-[0.2em] uppercase mb-3">{title}</h2>
          <div className="flex items-center justify-center gap-4 opacity-50">
            <div className="w-8 h-px bg-white" />
            <Minus size={12} />
            <div className="w-8 h-px bg-white" />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing relative [&::-webkit-scrollbar]:hidden overscroll-x-contain"
          onMouseEnter={() => scrollRef.current && (scrollRef.current.dataset.paused = "true")}
          onMouseLeave={() => scrollRef.current && (scrollRef.current.dataset.paused = "false")}
        >
          <div className="flex gap-3 select-none">
            {items.map((c, i) => (
              <div
                key={c.name + "-" + i}
                className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0"
              >
                <a
                  href={c.href ?? "#"}
                  className="block group relative overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] bg-neutral-900 transition-transform duration-700 hover:scale-[1.02]"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-center">
                    <h3 className="text-sm md:text-xl tracking-[0.15em] uppercase leading-tight">{c.name}</h3>
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-80 mt-1">
                      View Collection <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {ctaLabel && (
          <div className="mt-12 text-center">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-3 border-2 border-white px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </Wrapper>
    </section>
  );
}
