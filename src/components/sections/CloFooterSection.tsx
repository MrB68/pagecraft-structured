export interface CloFooterLink { label: string; href: string }
export interface CloFooterColumn { heading: string; links: CloFooterLink[] }
export interface CloFooterSocial { label: string; href: string; icon?: string }

export interface CloFooterSectionProps {
  brand?: string;
  tagline?: string;
  columns?: CloFooterColumn[];
  socials?: CloFooterSocial[];
  copyright?: string;
}

export default function CloFooterSection({
  brand = "clo",
  tagline = "Minimal · Original · Design",
  columns = [],
  socials = [],
  copyright = "© 2025 clo. All rights reserved.",
}: CloFooterSectionProps) {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] text-center md:text-left">
          <div className="space-y-6">
            <h3 className="text-xl tracking-[0.3em] uppercase">{brand}</h3>
            <p className="text-sm text-gray-400 leading-6 max-w-xs mx-auto md:mx-0">{tagline}</p>
            {socials.length > 0 && (
              <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-white/70 hover:text-white border border-white/20 px-3 py-2 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {columns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.25em] text-white/80">{col.heading}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} className="text-white/60 hover:text-white tracking-wider transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs uppercase tracking-widest text-white/40">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
