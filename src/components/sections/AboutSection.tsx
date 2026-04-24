interface AboutProps {
  title?: string;
  body?: string;
  image?: string;
}

export default function AboutSection({ title, body, image }: AboutProps) {
  return (
    <section className="bg-background">
      <div className="container py-20 grid md:grid-cols-2 gap-12 items-center">
        {image ? (
          <img src={image} alt={title || "About"} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-elev-md" />
        ) : (
          <div className="aspect-[4/3] rounded-2xl bg-gradient-subtle border border-border" />
        )}
        <div className="space-y-4">
          {title && <h2 data-edit-key="title" className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>}
          {body && <p data-edit-key="body" className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{body}</p>}
        </div>
      </div>
    </section>
  );
}
