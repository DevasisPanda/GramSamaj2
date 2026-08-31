import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface Crumb {
  label: string;
  to?: string;
  href?: string;
}

/**
 * Government-style breadcrumb trail. The last crumb is the current page
 * (rendered as plain text, no link).
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-px pt-3 pb-1">
      <ol className="inline-flex flex-wrap items-center gap-1.5 text-xs text-ink/75 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-saffron-200/70 shadow-sm">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-saffron-700 font-semibold text-forest-900">
            <Home className="h-3.5 w-3.5 text-forest-800" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          const target = item.to || item.href;
          return (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-ink/40" />
              {target && !last ? (
                <Link to={target} className="hover:text-saffron-700 font-medium text-ink/80">
                  {item.label}
                </Link>
              ) : (
                <span className="font-bold text-saffron-900" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
