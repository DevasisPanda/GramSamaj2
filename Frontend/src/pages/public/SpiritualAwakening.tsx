import { Link } from 'react-router-dom';
import { ArrowLeft, Car, Sparkles, BookOpen } from 'lucide-react';
import { ContentPage } from '@/components/shared/ContentPage';
import { PptPresentationViewer } from '@/components/teachings/PptPresentationViewer';
import { TEACHINGS_SUB_NAV } from '@/lib/subNavTree';

export default function SpiritualAwakening() {
  return (
    <ContentPage
      title="Spiritual awakening (Slide show)"
      subtitle="15-slide presentation on the journey of the soul and spiritual awakening."
      gradient="forest"
      crumbs={[
        { label: 'Teachings', to: '/teachings' },
        { label: 'Spiritual awakening (Slide show)' },
      ]}
      subNavItems={TEACHINGS_SUB_NAV}
    >
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Intro banner */}
        <div className="bg-forest-50/80 border border-forest-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-saffron-600 shrink-0" />
              <h2 className="font-bold text-forest-950 text-base sm:text-lg">
                The Journey of the Soul &bull; Slide Show Presentation
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink/75 max-w-2xl leading-relaxed">
              Explore the 15-slide presentation illustrating the spiritual vehicle (Development Car), the fitness of the driver, and how selfless service and blessings determine the journey of the soul across visible and invisible worlds.
            </p>
          </div>
          <Link
            to="/development-car"
            className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-forest-300 text-forest-900 font-bold text-xs shadow-xs hover:bg-forest-100 transition-colors"
          >
            <Car className="h-4 w-4 text-saffron-600" />
            <span>Read Development Car Philosophy &rarr;</span>
          </Link>
        </div>

        {/* 15-Slide Presentation Projection */}
        <PptPresentationViewer />

        {/* Context & Related Links */}
        <div className="bg-white rounded-xl border border-saffron-100 p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-forest-950 text-sm sm:text-base flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-saffron-600" />
            Key Teachings &amp; Spiritual Science
          </h3>
          <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
            According to the philosophy of AIRD, we are a combination of a physical body and an immortal soul. While material achievements remain bound to earthly life, the blessings earned from heartfelt service to the poor accompany the soul. Use the presentation controls above to navigate the slides, switch between presentation and grid view, or launch fullscreen mode.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-saffron-100 pt-4 text-xs sm:text-sm">
            <Link to="/teachings" className="govt-link font-bold">
              <ArrowLeft className="h-3.5 w-3.5 inline mr-1" /> Back to Teachings
            </Link>
            <Link to="/development-car" className="govt-link font-bold text-forest-800">
              Explore Development Car &amp; Interactive Blessings Slider &rarr;
            </Link>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
