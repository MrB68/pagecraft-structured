interface HeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  image?: string;
}

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  buttonText,
  buttonHref,
  image,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          {eyebrow && (
            <span data-edit-key="eyebrow" className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-accent text-accent-foreground">
              {eyebrow}
            </span>
          )}
          <h1 data-edit-key="title" className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p data-edit-key="subtitle" className="text-lg md:text-xl text-muted-foreground max-w-xl">
              {subtitle}
            </p>
          )}
          {buttonText && (
            <a
              href={buttonHref || "#"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-opacity"
            >
              {buttonText}
            </a>
          )}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elev-lg">
            <img src={image} alt={title || "Hero"} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ) : (
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-primary opacity-90 shadow-elev-lg" />
        )}
      </div>
    </section>
  );
}
