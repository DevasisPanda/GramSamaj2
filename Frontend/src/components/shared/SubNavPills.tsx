import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface SubNavPillItem {
  label: string;
  to: string;
}

interface SubNavPillsProps {
  items: SubNavPillItem[];
  className?: string;
}

export function SubNavPills({ items, className }: SubNavPillsProps) {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Section Sub Navigation"
      className={cn('w-full max-w-4xl mx-auto mb-8 px-1', className)}
    >
      <div className="bg-stone-50/90 p-1.5 sm:p-2 rounded-2xl shadow-xs border border-saffron-200/70 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
        {items.map((item) => {
          const isActive =
            pathname === item.to ||
            (item.to !== '/' && pathname.startsWith(item.to + '/'));

          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                'inline-flex items-center justify-center text-center px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-bold rounded-xl transition-all duration-200 select-none border min-h-[38px]',
                isActive
                  ? 'bg-saffron-600 text-white border-saffron-600 shadow-sm font-extrabold ring-2 ring-saffron-300/40'
                  : 'bg-white text-forest-950 border-stone-200/90 hover:bg-saffron-50 hover:border-saffron-300 hover:text-saffron-900 shadow-2xs'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

