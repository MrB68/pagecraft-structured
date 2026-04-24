import { motion } from "framer-motion";
import { Minus } from "lucide-react";

export interface PhilosophySectionProps {
  title?: string;
  body?: string;
  animate?: boolean;
}

export default function PhilosophySection({
  title = "Less is More",
  body = "We believe in the power of simplicity. Each piece is thoughtfully designed to transcend trends.",
  animate = true,
}: PhilosophySectionProps) {
  const Wrapper = animate ? motion.div : "div";
  return (
    <section className="border-b border-white/10 bg-black px-4 py-32 text-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Wrapper
          {...(animate
            ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 } }
            : {})}
          className="space-y-8"
        >
          <div className="flex items-center justify-center gap-4 mb-8 opacity-60">
            <div className="h-px w-12 bg-white" />
            <Minus size={16} />
            <div className="h-px w-12 bg-white" />
          </div>
          <h2 data-edit-key="title" className="text-4xl tracking-[0.2em] uppercase md:text-5xl">{title}</h2>
          <p data-edit-key="body" className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">{body}</p>
        </Wrapper>
      </div>
    </section>
  );
}
