interface Link { label: string; href: string }
interface FooterProps {
  brand?: string;
  tagline?: string;
  links?: Link[];
}

export default function FooterSection({ brand, tagline, links = [] }: FooterProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <div>
          <div className="font-bold text-lg">{brand}</div>
          {tagline && <div className="text-sm opacity-70 mt-1">{tagline}</div>}
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l, i) => (
            <a key={i} href={l.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
