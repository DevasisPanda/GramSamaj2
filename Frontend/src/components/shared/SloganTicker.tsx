import { SLOGANS } from '@/lib/constants';

/**
 * Slogan Marquee — classic government portal announcement ticker banner.
 * Solid green background, sharp edges, pure text marquee.
 */
export function SloganTicker() {
  return (
    <div className="bg-forest-900 border-b-2 border-saffron-500 flex items-center overflow-hidden text-xs">
      {/* Fixed announcement tag badge */}
      <div className="shrink-0 z-10 bg-forest-950 px-3 py-1.5 font-bold uppercase tracking-wider text-saffron-400 flex items-center gap-1 border-r border-saffron-500">
        <span>ANNOUNCEMENTS &amp; SLOGANS:</span>
      </div>

      {/* Marquee viewport */}
      <div className="flex-1 overflow-hidden py-1.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex items-center gap-6 px-4">
              {SLOGANS.map((s, i) => (
                <span key={`${dup}-${i}`} className="inline-flex items-center gap-2 text-xs font-semibold text-white devanagari">
                  <span className="text-saffron-400 font-bold">&bull;</span>
                  {s.hi}
                  <span className="text-saffron-300">({s.en})</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


