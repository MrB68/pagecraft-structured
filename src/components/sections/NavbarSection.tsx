import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useDevice } from "@/core/responsive";

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
  _device?: "desktop" | "tablet" | "mobile";
}

export default function NavbarSection({
  brand = "clo",
  links = [],
  showIcons = true,
  sticky = false,
  animate = true,
  _device,
}: NavbarSectionProps) {
  const ctxDevice = useDevice();
  const device = _device ?? ctxDevice;
  const [open, setOpen] = useState(false);

  const Wrapper = animate ? motion.nav : "nav";
  const motionProps = animate
    ? { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 } }
    : {};

  // Editor-aware: when previewing tablet/mobile, hide the desktop link row
  // and show the burger so it matches what mobile users see.
  const forceMobileMenu = device === "mobile" || device === "tablet";

  return (
    <Wrapper
      {...(motionProps as Record<string, unknown>)}
      className={`${sticky ? "sticky top-0 z-50" : ""} w-full bg-black text-white border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-xl md:text-2xl tracking-[0.3em] uppercase hover:opacity-70 transition-opacity"
          >
            {brand}
          </a>

          {/* Desktop links */}
          <div
            className={`${forceMobileMenu ? "hidden" : "hidden md:flex"} items-center gap-8 absolute left-1/2 -translate-x-1/2`}
          >
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

          <div className="flex items-center gap-3 md:gap-4 ml-auto">
            {showIcons && (
              <div
                className={`${forceMobileMenu ? "hidden sm:flex" : "flex"} items-center gap-3 md:gap-4`}
              >
                <button className="hover:opacity-70 transition-opacity" aria-label="Search">
                  <Search size={18} />
                </button>
                <button className="hover:opacity-70 transition-opacity" aria-label="Account">
                  <User size={18} />
                </button>
                <button className="hover:opacity-70 transition-opacity" aria-label="Cart">
                  <ShoppingBag size={18} />
                </button>
              </div>
            )}

            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className={`${forceMobileMenu ? "inline-flex" : "inline-flex md:hidden"} items-center justify-center hover:opacity-70 transition-opacity`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`${forceMobileMenu ? "" : "md:hidden"} overflow-hidden`}
            >
              <div className="flex flex-col gap-1 py-4 border-t border-white/10">
                {links.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-2 py-3 tracking-widest uppercase text-sm hover:bg-white/5 rounded"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
}
