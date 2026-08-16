import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** Pixel height of the rendered emblem. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Light variant puts a subtle ring around the (dark) emblem for dark backgrounds. */
  variant?: 'default' | 'light';
}

const SIZE_MAP = {
  sm: 'h-9 w-9',
  md: 'h-12 w-12',
  lg: 'h-14 w-14',
  xl: 'h-20 w-20',
} as const;

/**
 * Official AIRD emblem. Uses the logo extracted from Logo.docx
 * (public/aird-logo.png). Rendered with object-contain so the circular
 * emblem is never cropped, regardless of size.
 */
export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  return (
    <img
      src="/aird-logo.png"
      alt="AIRD \u2014 Appropriate Institute of Rural Development official emblem"
      className={cn(
        'shrink-0 object-contain',
        SIZE_MAP[size],
        variant === 'light' && 'rounded-full ring-2 ring-cream/40 bg-forest-800/30 p-0.5',
        className,
      )}
      loading="eager"
      decoding="async"
      width={80}
      height={80}
    />
  );
}
