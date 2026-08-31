import { ContentPage } from '@/components/shared/ContentPage';
import { AIM_VERBATIM, OBJECTIVES_FULL } from '@/data/contentVerbatim';

export default function AimObjectives() {
  return (
    <ContentPage
      title="Aim &amp; Objectives"
      subtitle={`The ${OBJECTIVES_FULL.length} objectives that guide every activity of AIRD.`}
      gradient="saffron"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Aim & Objectives' }]}
      intro={
        <div className="rounded-xl border border-saffron-200 bg-white/70 p-4 text-base font-medium text-ink/80 backdrop-blur">
          <span className="font-bold text-saffron-700">Our Aim:</span> {AIM_VERBATIM.join(' ')}
        </div>
      }
    >
      <section className="card-surface p-5 sm:p-7 rounded-xl shadow-sm mx-auto max-w-3xl">
        <h2 className="mb-4 text-xl font-bold text-saffron-900 md:text-2xl border-b border-saffron-100 pb-2 break-words">Objectives</h2>
        <ol className="space-y-3">
          {OBJECTIVES_FULL.map((o, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed text-ink/85 text-sm sm:text-base">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-xs sm:text-sm font-bold text-saffron-700 mt-0.5">
                {i + 1}
              </span>
              <span className="pt-0.5 break-words min-w-0">{o}</span>
            </li>
          ))}
        </ol>
      </section>
    </ContentPage>
  );
}
