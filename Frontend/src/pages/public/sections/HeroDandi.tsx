import { Link } from 'react-router-dom';
import { AIRD, RALLYING_CRY } from '@/lib/constants';

/**
 * Homepage hero — the Dandi March / India photograph is used as a stable
 * background image (never a carousel slide), with a dark overlay for
 * text readability. Content: institute name, Gram Swaraj mission, the
 * signature call to action, and the primary CTAs.
 */
export function HeroDandi() {
  return (
    <section className="relative overflow-hidden border-2 border-forest-900 mb-1.5 bg-transparent shadow-sm">
      {/* Tricolor top indicator */}
      <div className="flex h-1 w-full" aria-hidden>
        <div className="flex-1 bg-saffron-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-forest-700" />
      </div>

      <div className="relative flex min-h-[14rem] sm:min-h-[17rem] md:min-h-[19rem] flex-col items-center justify-center text-center px-3 sm:px-8 py-4 sm:py-8">
        <img
          src="/aird-logo.png"
          alt="AIRD emblem"
          className="h-12 w-12 sm:h-16 sm:w-16 object-contain mb-2 drop-shadow"
        />

        <h1 className="text-lg sm:text-2xl md:text-4xl font-extrabold text-forest-900 uppercase tracking-wide leading-tight max-w-full break-words">
          Appropriate Institute
          <span className="block text-forest-800 mt-0.5">
            <span className="bg-forest-900 text-white px-2 sm:px-2.5 py-0.5 rounded-sm inline-block shadow-sm text-sm sm:text-2xl md:text-3xl">
              of Rural Development
            </span>
          </span>
        </h1>

        <div className="mt-2 inline-block bg-forest-800 text-saffron-300 px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider border-l-2 border-r-2 border-saffron-400 shadow-sm max-w-full">
          Gram Swaraj &bull; People&rsquo;s Governance
        </div>

        <p className="mt-2 max-w-2xl text-[11px] sm:text-sm font-semibold text-forest-950 leading-relaxed px-1">
          {AIRD.tagline}
        </p>

        <p className="mt-2.5 max-w-xl text-[10px] sm:text-xs font-semibold italic text-forest-900 bg-forest-50 border-l-4 border-forest-800 px-3 py-1.5 shadow-sm">
          &ldquo;{RALLYING_CRY}&rdquo;
        </p>

        <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold">
          <Link
            to="/membership"
            className="bg-saffron-600 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 border border-saffron-600 hover:bg-saffron-700 transition-colors shadow-sm"
          >
            &raquo; Join / Membership
          </Link>
          <Link
            to="/donate"
            className="bg-forest-800 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 border border-forest-900 hover:bg-forest-900 transition-colors shadow-sm"
          >
            &raquo; Support / Donate
          </Link>
          <Link
            to="/about"
            className="bg-forest-100 text-forest-900 px-3 py-1.5 sm:px-3 sm:py-2 border border-forest-300 hover:bg-forest-200 transition-colors font-bold"
          >
            About AIRD &rarr;
          </Link>
        </div>

        <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-forest-100/90 border border-forest-300 px-2.5 py-1 rounded text-[9px] sm:text-[10px] text-forest-900 font-bold tracking-wide max-w-full">
          <span>Registered Public Charitable Trust (PCTA 1882)</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Reg. No: 9002139 IV-66/2020</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>NGO Darpan: {AIRD.ngoDarpanId}</span>
        </div>
      </div>
    </section>
  );
}
