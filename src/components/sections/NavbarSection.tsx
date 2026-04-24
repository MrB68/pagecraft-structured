import { motion } from "framer-motion";
import { Search, User, ShoppingBag } from "lucide-react";

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavbarSectionProps {
  brand?: string;
  links?: NavLinkItem[];
  showIcons?: boolean;
  sticky?: boolean;
  animate?: boolean;
}

export default function NavbarSection({
  brand = "clo",
  links = [],
  showIcons = true,
  sticky = false,
  animate = true,
}: NavbarSectionProps) {
  const Wrapper = animate ? motion.nav : "nav";
  const motionProps = animate
    ? { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 } }
    : {};

  return (
    <Wrapper
      {...(motionProps as Record<string, unknown>)}
      className={`${sticky ? "sticky top-0 z-50" : ""} w-full bg-black text-white border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <a href="#" className="text-2xl tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">
            {brand}
          </a>
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                className="relative group tracking-widest uppercase text-sm text-white whitespace-nowrap"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          {showIcons && (
            <div className="flex items-center gap-4 ml-auto">
              <button className="hover:opacity-70 transition-opacity" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="hover:opacity-70 transition-opacity" aria-label="Account">
                <User size={20} />
              </button>
              <button className="hover:opacity-70 transition-opacity" aria-label="Cart">
                <ShoppingBag size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
