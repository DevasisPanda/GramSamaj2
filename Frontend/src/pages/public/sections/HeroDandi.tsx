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
    <section className="relative overflow-hidden border border-forest-900 mb-1.5">
      {/* Background image — fixed identity of the homepage hero */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/dandi-march-bg.jpeg)' }}
        role="img"
        aria-label="Dandi March — Mahatma Gandhi's march to Dandi"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/60 to-forest-950/85" />

      <div className="relative flex min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] flex-col items-center justify-center text-center px-4 sm:px-8 py-8 sm:py-12">
        <img
          src="/aird-logo.png"
          alt="AIRD emblem"
          className="h-14 w-14 sm:h-16 sm:w-16 object-contain mb-3 drop-shadow-lg"
        />

        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide drop-shadow-md leading-tight">
          Appropriate Institute
          <span className="block">of Rural Development</span>
        </h1>

        <p className="mt-2 text-[11px] sm:text-sm font-semibold text-saffron-300 uppercase tracking-[0.2em] drop-shadow">
          Gram Swaraj &bull; People&rsquo;s Governance
        </p>

        <p className="mt-3 max-w-2xl text-xs sm:text-sm text-white/90 leading-relaxed drop-shadow">
          {AIRD.tagline}
        </p>

        <p className="mt-4 max-w-xl text-[11px] sm:text-xs font-medium italic text-cream/90 bg-forest-950/50 border-l-2 border-saffron-400 px-3 py-1.5">
          &ldquo;{RALLYING_CRY}&rdquo;
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold">
          <Link
            to="/membership"
            className="bg-saffron-600 text-white px-4 py-2 border border-saffron-500 hover:bg-saffron-700 transition-colors"
          >
            &raquo; Join / Membership
          </Link>
          <Link
            to="/donate"
            className="bg-forest-800/90 text-white px-4 py-2 border border-forest-600 hover:bg-forest-700 transition-colors"
          >
            &raquo; Support / Donate
          </Link>
          <Link
            to="/about"
            className="text-white underline decoration-saffron-400 hover:text-saffron-200 transition-colors px-2 py-2"
          >
            About AIRD &rarr;
          </Link>
        </div>

        <p className="mt-4 text-[9px] sm:text-[10px] text-white/70 font-semibold tracking-wide">
          Registered Public Charitable Trust (PCTA 1882) &nbsp;|&nbsp; Reg. No: 9002139 IV-66/2020 &nbsp;|&nbsp; NGO Darpan: {AIRD.ngoDarpanId}
        </p>
      </div>
    </section>
  );
}
