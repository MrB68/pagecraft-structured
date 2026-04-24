import { motion } from "framer-motion";
import { ArrowRight, Minus } from "lucide-react";

export interface CloHeroSectionProps {
  image?: string;
  title?: string;
  tagline?: string;
  buttonText?: string;
  buttonHref?: string;
  animate?: boolean;
  fullHeight?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CloHeroSection({
  image = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
  title = "clo",
  tagline = "Minimal · Original · Design",
  buttonText = "Explore Collections",
  buttonHref = "#",
  animate = true,
  fullHeight = true,
}: CloHeroSectionProps) {
  const Wrapper = animate ? motion.div : "div";
  const innerProps = animate
    ? { variants: containerVariants, initial: "hidden", animate: "show" }
    : {};

  return (
    <section className={`relative ${fullHeight ? "h-screen" : "h-[80vh]"} overflow-hidden bg-black text-white`}>
      <div className="absolute inset-0">
        {animate ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center opacity-95 brightness-110"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover object-center" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_85%)] opacity-70" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <Wrapper {...(innerProps as Record<string, unknown>)} className="text-center space-y-8 px-6">
          <motion.h1
            variants={animate ? itemVariants : undefined}
            className="text-4xl sm:text-5xl md:text-8xl tracking-[0.2em] uppercase flex justify-center gap-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={animate ? { opacity: 0, y: 50 } : false}
                animate={animate ? { opacity: 1, y: 0 } : undefined}
                transition={animate ? { delay: i * 0.15, duration: 0.6 } : undefined}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            variants={animate ? itemVariants : undefined}
            className="flex items-center justify-center gap-4 sm:gap-8"
          >
            <Minus size={40} className="opacity-50" />
            <p className="text-sm md:text-base tracking-[0.2em] uppercase opacity-80">{tagline}</p>
            <Minus size={40} className="opacity-50" />
          </motion.div>

          {buttonText && (
            <motion.div
              initial={animate ? { opacity: 0, scale: 0.9 } : false}
              animate={animate ? { opacity: 1, scale: 1 } : undefined}
              transition={animate ? { delay: 0.9, duration: 0.5 } : undefined}
            >
              <a
                href={buttonHref}
                className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 sm:px-12 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-sm backdrop-blur-sm"
              >
                {buttonText}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          )}
        </Wrapper>
      </div>
    </section>
  );
}
