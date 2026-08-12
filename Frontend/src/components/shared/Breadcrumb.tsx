import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface Crumb {
  label: string;
  to?: string;
}

/**
 * Government-style breadcrumb trail. The last crumb is the current page
 * (rendered as plain text, no link).
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-px pt-5">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-ink/55">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-saffron-700">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3 text-ink/30" />
              {item.to && !last ? (
                <Link to={item.to} className="hover:text-saffron-700">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-saffron-800" aria-current="page">
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
