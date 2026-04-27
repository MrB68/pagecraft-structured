import { useDevice } from "@/core/responsive";

interface HeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  image?: string;
  /** Force stacked layout on tablet/mobile (auto when device is small). */
  stackOnMobile?: boolean;
  _device?: "desktop" | "tablet" | "mobile";
  _spacing?: string;
}

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  buttonText,
  buttonHref,
  image,
  stackOnMobile = true,
  _device,
  _spacing,
}: HeroProps) {
  const ctxDevice = useDevice();
  const device = _device ?? ctxDevice;
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";

  // Editor-aware: when previewing tablet/mobile, force the stack layout
  // even though the canvas viewport is wider than Tailwind's md breakpoint.
  const forceStack = stackOnMobile && (isMobile || isTablet);

  const gridClass = forceStack
    ? "grid grid-cols-1 gap-8 items-center"
    : "grid md:grid-cols-2 gap-12 items-center";

  const padding =
    _spacing ?? (isMobile ? "py-12" : isTablet ? "py-16" : "py-20 md:py-28");

  const titleClass = isMobile
    ? "text-3xl font-bold tracking-tight text-foreground leading-[1.1]"
    : isTablet
      ? "text-4xl font-bold tracking-tight text-foreground leading-[1.08]"
      : "text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]";

  const subtitleClass = isMobile
    ? "text-base text-muted-foreground max-w-xl"
    : "text-lg md:text-xl text-muted-foreground max-w-xl";

  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className={`container ${padding} ${gridClass}`}>
        <div className="space-y-5 md:space-y-6 animate-fade-in">
          {eyebrow && (
            <span
              data-edit-key="eyebrow"
              className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-accent text-accent-foreground"
            >
              {eyebrow}
            </span>
          )}
          <h1 data-edit-key="title" className={titleClass}>
            {title}
          </h1>
          {subtitle && (
            <p data-edit-key="subtitle" className={subtitleClass}>
              {subtitle}
            </p>
          )}
          {buttonText && (
            <a
              href={buttonHref || "#"}
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-opacity"
            >
              {buttonText}
            </a>
          )}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elev-lg">
            <img
              src={image}
              alt={title || "Hero"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-primary opacity-90 shadow-elev-lg" />
        )}
      </div>
    </section>
  );
}
