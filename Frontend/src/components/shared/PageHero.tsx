import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  gradient?: 'saffron' | 'forest';
}

/** Reusable hero banner for the top of each page section. */
export function PageHero({ title, subtitle, children, gradient = 'saffron' }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-6 sm:py-10 md:py-14 border-b',
        gradient === 'saffron' 
          ? 'gradient-hero' 
          : 'bg-gradient-to-r from-forest-50/95 via-emerald-50/90 to-teal-50/95 border-forest-200 backdrop-blur-sm',
      )}
    >
      <div className="container-px relative z-10">
        <h1 className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight break-words',
          gradient === 'saffron' ? 'text-saffron-950' : 'text-forest-950',
        )}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-ink/80 leading-relaxed break-words">{subtitle}</p>
        )}
        {children && <div className="mt-3 sm:mt-4">{children}</div>}
      </div>
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-saffron-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-forest-200/20 blur-3xl pointer-events-none" />
    </section>
  );
}
