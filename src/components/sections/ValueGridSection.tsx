import { motion } from "framer-motion";
import { Minus } from "lucide-react";

export interface ValueItem {
  title: string;
  description: string;
}

export interface ValueGridSectionProps {
  title?: string;
  values?: ValueItem[];
  animate?: boolean;
}

export default function ValueGridSection({
  title,
  values = [],
  animate = true,
}: ValueGridSectionProps) {
  const Wrapper = animate ? motion.div : "div";
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <Wrapper
        {...(animate
          ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 } }
          : {})}
        className="max-w-7xl mx-auto"
      >
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl tracking-[0.2em] uppercase">{title}</h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {values.map((v, i) => (
            <div key={i} className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 border-2 border-white flex items-center justify-center">
                  <Minus size={24} />
                </div>
              </div>
              <h3 className="text-xl tracking-[0.2em] uppercase">{v.title}</h3>
              <p className="leading-relaxed opacity-75 text-gray-300">{v.description}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
