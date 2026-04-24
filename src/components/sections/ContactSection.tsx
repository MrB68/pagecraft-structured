interface ContactProps {
  title?: string;
  subtitle?: string;
  email?: string;
}

export default function ContactSection({ title, subtitle, email }: ContactProps) {
  return (
    <section className="bg-surface">
      <div className="container py-20 max-w-xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>}
        {subtitle && <p className="text-muted-foreground mb-8">{subtitle}</p>}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full px-4 py-3 rounded-lg border border-input bg-background" placeholder="Your name" />
          <input className="w-full px-4 py-3 rounded-lg border border-input bg-background" placeholder="Email" type="email" />
          <textarea className="w-full px-4 py-3 rounded-lg border border-input bg-background min-h-32" placeholder="Message" />
          <button type="submit" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Send message
          </button>
        </form>
        {email && <p className="text-sm text-muted-foreground mt-6">Or email us at <a href={`mailto:${email}`} className="text-primary underline">{email}</a></p>}
      </div>
    </section>
  );
}
