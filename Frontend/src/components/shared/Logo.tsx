import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** Pixel height of the rendered emblem. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Light variant puts a subtle ring around the (dark) emblem for dark backgrounds. */
  variant?: 'default' | 'light';
}

const SIZE_MAP = {
  sm: 'h-9 w-auto max-w-[70px]',
  md: 'h-12 w-auto max-w-[95px]',
  lg: 'h-14 sm:h-16 w-auto max-w-[125px]',
  xl: 'h-20 w-auto max-w-[170px]',
} as const;

/**
 * Official AIRD emblem. Uses the high-resolution logo extracted from official documents
 * (public/aird-logo.png). Rendered with object-contain so the emblem is sharp and proportional.
 */
export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  return (
    <img
      src="/aird-logo.png"
      alt="AIRD — Appropriate Institute of Rural Development official emblem"
      className={cn(
        'shrink-0 object-contain drop-shadow-xs',
        SIZE_MAP[size],
        variant === 'light' && 'rounded-md ring-1 ring-cream/40 bg-white/90 p-1',
        className,
      )}
      loading="eager"
      decoding="async"
      width={120}
      height={70}
    />
  );
}
