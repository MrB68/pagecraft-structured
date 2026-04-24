interface CtaProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaSection({ title, subtitle, buttonText, buttonHref }: CtaProps) {
  return (
    <section className="bg-background">
      <div className="container py-20">
        <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-10 md:p-16 text-center shadow-glow">
          {title && <h2 data-edit-key="title" className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>}
          {subtitle && <p data-edit-key="subtitle" className="text-primary-foreground/90 max-w-xl mx-auto mb-8">{subtitle}</p>}
          {buttonText && (
            <a
              href={buttonHref || "#"}
              className="inline-block px-6 py-3 rounded-lg bg-background text-foreground font-medium hover:opacity-90 transition-opacity"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
