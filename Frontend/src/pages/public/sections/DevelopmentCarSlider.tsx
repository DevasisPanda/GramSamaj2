import { useState } from 'react';
import { Car, Heart, Skull } from 'lucide-react';
import { DEVELOPMENT_CAR } from '@/data/philosophy';
import { cn } from '@/lib/utils';

/**
 * The Development Car interactive metaphor.
 * A slider lets the user move between Curses (damaging the car) and Blessings
 * (strengthening it). The car's health and the driver's mood react live.
 */
export function DevelopmentCarSlider() {
  const [score, setScore] = useState(50); // 0 = all curses, 100 = all blessings

  const carHealth = score; // %
  const isBlessed = score > 50;
  const isCursed = score < 50;

  return (
    <div className="card-surface p-4 sm:p-6 max-w-full overflow-hidden">
      <h3 className="font-bold text-base sm:text-lg text-gradient-saffron flex items-center gap-2 break-words">
        <Car className="h-5 w-5 shrink-0" /> <span className="break-words min-w-0">{DEVELOPMENT_CAR.title}</span>
      </h3>
      <p className="text-xs sm:text-sm text-ink/50 break-words">{DEVELOPMENT_CAR.subtitle}</p>

      <p className="mt-3 text-xs sm:text-sm text-ink/70 leading-relaxed break-words">{DEVELOPMENT_CAR.intro}</p>

      {/* Visual car + health */}
      <div className="mt-6 rounded-2xl bg-gradient-to-br from-saffron-50 to-forest-50 p-4 sm:p-6 max-w-full overflow-hidden">
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {/* Driver mood */}
          <div className="text-center">
            <div className={cn(
              'grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full text-2xl sm:text-3xl transition-all',
              isBlessed ? 'bg-forest-100 scale-105' : isCursed ? 'bg-red-100' : 'bg-saffron-100',
            )}>
              {isBlessed ? '😊' : isCursed ? '😟' : '😐'}
            </div>
            <p className="mt-1 text-[11px] font-medium text-ink/50">Driver</p>
          </div>

          {/* Car */}
          <div className="relative">
            <svg viewBox="0 0 120 70" className="w-32 sm:w-40 max-w-full">
              {/* body */}
              <rect
                x="15" y="25" width="90" height="25" rx="6"
                className={cn('transition-all', isBlessed ? 'fill-forest-600' : isCursed ? 'fill-red-500' : 'fill-saffron-500')}
                opacity={0.4 + (carHealth / 100) * 0.6}
              />
              {/* roof */}
              <path d="M35,25 L45,10 L75,10 L85,25 Z" className={cn('transition-all', isBlessed ? 'fill-forest-700' : isCursed ? 'fill-red-600' : 'fill-saffron-600')} />
              {/* windows */}
              <rect x="48" y="13" width="24" height="10" className="fill-sky-200" opacity="0.7" />
              {/* wheels */}
              <circle cx="35" cy="52" r="9" className="fill-ink" />
              <circle cx="35" cy="52" r="4" className="fill-cream" />
              <circle cx="85" cy="52" r="9" className="fill-ink" />
              <circle cx="85" cy="52" r="4" className="fill-cream" />
              {/* soul glow */}
              <circle cx="60" cy="20" r="3" className="fill-white">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <p className="text-center text-[11px] font-medium text-ink/50">Development Car</p>
          </div>
        </div>

        {/* Health bar */}
        <div className="mt-4">
          <div className="flex justify-between text-[11px] font-medium mb-1">
            <span className={cn(isCursed ? 'text-red-600' : 'text-ink/40')}>Curses (-)</span>
            <span className="text-ink/60">Car Health: {carHealth}%</span>
            <span className={cn(isBlessed ? 'text-forest-700' : 'text-ink/40')}>Blessings (+)</span>
          </div>
          <div className="relative h-3 rounded-full bg-gradient-to-r from-red-400 via-saffron-400 to-forest-500">
            <div
              className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white bg-white shadow-md transition-all"
              style={{ left: `calc(${score}% - 10px)` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="mt-2 w-full accent-saffron-500 cursor-pointer"
            aria-label="Blessings vs Curses"
          />
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-forest-50 p-3 flex gap-2">
          <Heart className="h-4 w-4 text-forest-600 shrink-0 mt-0.5" />
          <p className="text-xs text-ink/70 break-words">{DEVELOPMENT_CAR.blessing}</p>
        </div>
        <div className="rounded-xl bg-red-50 p-3 flex gap-2">
          <Skull className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
          <p className="text-xs text-ink/70 break-words">{DEVELOPMENT_CAR.curse}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5">
        {DEVELOPMENT_CAR.facts.map((f, i) => (
          <li key={i} className="text-xs text-ink/60 leading-relaxed flex items-start gap-2">
            <span className="text-saffron-500 mt-0.5 shrink-0">&#x25C6;</span> <span className="break-words min-w-0">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
