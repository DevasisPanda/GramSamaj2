import { Link } from 'react-router-dom';
import { Presentation, Sparkles } from 'lucide-react';
import { ContentPage } from '@/components/shared/ContentPage';
import { DevelopmentCarNarrative } from './sections/DevelopmentCarNarrative';
import { DevelopmentCarSlider } from './sections/DevelopmentCarSlider';
import { TEACHINGS_SUB_NAV } from '@/lib/subNavTree';

export default function DevelopmentCar() {
  return (
    <ContentPage
      title="Development Car"
      subtitle="The journey of the soul — a spiritual metaphor for selfless service."
      gradient="forest"
      crumbs={[{ label: 'Teachings', to: '/teachings' }, { label: 'Development Car' }]}
      subNavItems={TEACHINGS_SUB_NAV}
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Banner linking to dedicated 15-slide presentation page */}
        <div className="bg-linear-to-r from-saffron-50 via-white to-forest-50 border border-saffron-200 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-saffron-600" />
              <span className="font-bold text-xs uppercase tracking-wider text-saffron-800">
                Visual Slide Show Available
              </span>
            </div>
            <h3 className="font-bold text-forest-950 text-sm sm:text-base">
              Spiritual Awakening: 15-Slide Presentation Projection
            </h3>
            <p className="text-xs text-ink/70 max-w-xl">
              View the complete slide-by-slide presentation illustrating the journey of the soul, the Development Car, and the three worlds.
            </p>
          </div>
          <Link
            to="/spiritual-awakening"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-forest-800 hover:bg-forest-700 text-white font-bold text-xs shadow-sm transition-colors"
          >
            <Presentation className="h-4 w-4 text-saffron-300" />
            <span>Open Slide Show &rarr;</span>
          </Link>
        </div>

        {/* Narrative & Blessings Metaphor */}
        <div className="space-y-8">
          <DevelopmentCarNarrative />

          <div className="bg-white rounded-xl border border-saffron-100 p-5 sm:p-6 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-saffron-800 mb-2">
                Blessings strengthen the journey
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-ink/75">
                Using the metaphor of the Development Car: blessings earned through kindness,
                compassion, honesty, and service strengthen and maintain the vehicle that carries
                the soul &mdash; while harmful intentions weaken it. Interact with the slider below to explore the balance of blessings and curses.
              </p>
            </div>
            <DevelopmentCarSlider />
          </div>
        </div>

        {/* Bottom cross-links */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-saffron-100 pt-6 text-xs sm:text-sm">
          <Link to="/teachings" className="govt-link font-bold">
            &larr; Back to Teachings Overview
          </Link>
          <Link to="/spiritual-awakening" className="govt-link font-bold text-forest-800">
            View 15-Slide Spiritual Awakening Presentation &rarr;
          </Link>
        </div>
      </div>
    </ContentPage>
  );
}
