import {
  Building2, Globe2, Landmark, ClipboardList, Users, HardHat, ScrollText,
} from 'lucide-react';
import { IMPORTANT_LINKS } from '@/data/importantLinks';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, Globe2, Landmark, ClipboardList, Users, HardHat, ScrollText,
};

interface ImportantLinksStripProps {
  variant?: 'light' | 'dark';
}

/** Compact horizontal strip used in the Footer. */
export function ImportantLinksStrip({ variant = 'dark' }: ImportantLinksStripProps) {
  return (
    <div className={cn('border-t', variant === 'dark' ? 'border-cream/10 bg-cream/5' : 'border-saffron-100 bg-saffron-50/50')}>
      <div className="container-px py-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-cream/40">
          Important Websites &amp; Resources
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {IMPORTANT_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/60 hover:text-saffron-400 transition-colors underline-offset-2 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Full card grid version used as a page section. */
export function ImportantLinksSection() {
  return (
    <section className="section-py">
      <div className="container-px">
        <h2 className="text-2xl font-bold text-center mb-2 text-gradient-saffron">
          Important Websites &amp; Resources
        </h2>
        <p className="text-center text-ink/60 mb-10 max-w-2xl mx-auto">
          {'Key government portals, development schemes, and institutional frameworks that guide AIRD’s work towards Gram Swaraj.'}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {IMPORTANT_LINKS.map((link) => {
            const Icon = ICON_MAP[link.icon] ?? Globe2;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group p-5 hover:shadow-md hover:border-saffron-200 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-saffron-100 p-2 text-saffron-600 group-hover:bg-saffron-200 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink group-hover:text-saffron-700 transition-colors">
                      {link.label}
                    </h3>
                    <p className="mt-1 text-xs text-ink/50 leading-relaxed">{link.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
