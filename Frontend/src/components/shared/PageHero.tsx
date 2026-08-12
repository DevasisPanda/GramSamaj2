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
        'relative overflow-hidden py-20 md:py-28',
        gradient === 'saffron' ? 'gradient-hero' : 'bg-gradient-to-br from-forest-50 to-forest-100',
      )}
    >
      <div className="container-px relative z-10">
        <h1 className={cn(
          'text-3xl md:text-5xl font-extrabold leading-tight',
          gradient === 'saffron' ? 'text-gradient-saffron' : 'text-gradient-forest',
        )}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-ink/60 leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-saffron-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-forest-200/20 blur-3xl pointer-events-none" />
    </section>
  );
}
