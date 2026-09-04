import { useState } from 'react';
import {
  Calendar, Award, Users, ShieldCheck, HeartHandshake,
  Lightbulb, AlertCircle, Compass, Landmark, ArrowRight, CheckCircle2
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { ACTIVITIES_SUB_NAV } from '@/lib/subNavTree';
import { PAST_ACTIVITIES_CHAPTERS } from '@/data/pastActivitiesData';
import { cn } from '@/lib/utils';

export default function PastActivities() {
  const [activeChapterId, setActiveChapterId] = useState<string>('origins');

  const chapterIcons: Record<string, React.ElementType> = {
    'origins': Landmark,
    'community-programs': Calendar,
    'women-shgs': Users,
    'gram-swaraj': ShieldCheck,
    'lessons-learned': Lightbulb,
    'challenges': AlertCircle,
    'strategic-roadmap': Compass,
    'financial-overview': HeartHandshake,
  };

  return (
    <>
      <PageHero
        title="Past Activities (2019–2026)"
        subtitle="Documenting seven years of participatory action research, grassroots mobilization, and institution building by AIRD."
        gradient="forest"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-800/80 px-3.5 py-1 text-xs font-semibold text-saffron-300 border border-forest-600/60">
            <CheckCircle2 className="h-3.5 w-3.5 text-saffron-400" /> 7 Years of Fieldwork
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-800/80 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-forest-600/60">
            Village Garhi Demonstration Unit
          </span>
        </div>
      </PageHero>

      <Breadcrumb
        items={[
          { label: 'Activities', to: '/activities' },
          { label: 'Past Activities (2019–2026)' },
        ]}
      />

      <section className="section-py bg-stone-50/50 min-h-screen">
        <div className="container-px max-w-4xl mx-auto space-y-8">
          <SubNavPills items={ACTIVITIES_SUB_NAV} />

          {/* Quick Chapter Navigation Pill Menu */}
          <div className="card-surface bg-white p-4 sm:p-5 rounded-2xl shadow-xs border border-forest-100">
            <div className="text-xs font-bold uppercase tracking-wider text-forest-800 mb-3 flex items-center gap-2">
              <Compass className="h-4 w-4 text-saffron-600" /> Jump to Chapter
            </div>
            <div className="flex flex-wrap gap-2">
              {PAST_ACTIVITIES_CHAPTERS.map((ch) => {
                const isSelected = activeChapterId === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setActiveChapterId(ch.id);
                      const el = document.getElementById(ch.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={cn(
                      'px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer border select-none',
                      isSelected
                        ? 'bg-forest-800 text-white border-forest-900 shadow-xs'
                        : 'bg-stone-50 text-ink/70 border-stone-200 hover:bg-saffron-50 hover:text-saffron-900'
                    )}
                  >
                    <span className="text-saffron-400 mr-1.5 font-mono">{ch.number}</span>
                    {ch.title.split('(')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chapters Render */}
          <div className="space-y-8">
            {PAST_ACTIVITIES_CHAPTERS.map((chapter) => {
              const Icon = chapterIcons[chapter.id] || Award;
              return (
                <article
                  key={chapter.id}
                  id={chapter.id}
                  className="card-surface bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-forest-100/80 transition-all hover:shadow-lg space-y-6 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 border-b border-forest-100 pb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-900 text-saffron-400 font-mono font-extrabold text-lg shadow-sm">
                      {chapter.number}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-saffron-600" />
                        <span className="text-xs uppercase font-bold tracking-wider text-saffron-700">Documented Record</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-forest-950">
                        {chapter.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-ink/60 font-medium">
                        {chapter.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base text-ink/85 leading-relaxed">
                    {chapter.paragraphs.map((p, pIdx) => {
                      const isShortHighlight = p.length < 90 && (
                        p.includes('celebration') ||
                        p.includes('Day') ||
                        p.includes('Registration') ||
                        p.includes('Approval') ||
                        p.includes('Selection') ||
                        p.includes('competition') ||
                        p.includes('drive')
                      );

                      if (isShortHighlight) {
                        return (
                          <div
                            key={pIdx}
                            className="flex items-center gap-2.5 px-3.5 py-2 bg-saffron-50/70 border-l-4 border-saffron-500 rounded-r-xl text-forest-950 text-xs sm:text-sm font-semibold"
                          >
                            <CheckCircle2 className="h-4 w-4 text-saffron-600 shrink-0" />
                            <span>{p}</span>
                          </div>
                        );
                      }

                      return (
                        <p key={pIdx} className="text-justify">
                          {p}
                        </p>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Footer Callout */}
          <div className="card-surface bg-linear-to-br from-forest-900 to-forest-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-saffron-300 flex items-center gap-2">
              <Compass className="h-5 w-5 text-saffron-400" /> Continuity of the Mission
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              &ldquo;Our mission is not merely to implement projects, but to empower communities to govern their own
              development with dignity, transparency, and collective responsibility.&rdquo;
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/kranti"
                className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                Explore Project KRANTI <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/about/accounts"
                className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-colors border border-forest-600"
              >
                Inspect Audited Accounts
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}