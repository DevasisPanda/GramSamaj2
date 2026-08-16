import { ContentPage } from '@/components/shared/ContentPage';
import { AIM_STATEMENT, OBJECTIVES_LIST } from '@/data/content';

export default function AimObjectives() {
  return (
    <ContentPage
      title="Aim &amp; Objectives"
      subtitle="The fifteen objectives that guide every activity of AIRD."
      gradient="saffron"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Aim & Objectives' }]}
      intro={
        <div className="rounded-xl border border-saffron-200 bg-white/70 p-4 text-base font-medium text-ink/80 backdrop-blur">
          <span className="font-bold text-saffron-700">Our Aim:</span> {AIM_STATEMENT}
        </div>
      }
    >
      <section className="prose-aird mx-auto max-w-3xl">
        <h2 className="mb-4 text-xl font-bold text-saffron-800 md:text-2xl">Objectives</h2>
        <ol className="space-y-3">
          {OBJECTIVES_LIST.map((o, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-ink/80">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-sm font-bold text-saffron-700">
                {i + 1}
              </span>
              <span className="pt-0.5">{o}</span>
            </li>
          ))}
        </ol>
      </section>
    </ContentPage>
  );
}
