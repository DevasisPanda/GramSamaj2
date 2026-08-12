import { ContentPage } from '@/components/shared/ContentPage';
import { JOURNEY_INTRO, JOURNEY_PARAGRAPHS } from '@/data/content';

export default function JourneyTrustee() {
  return (
    <ContentPage
      title="Journey of the Trustee"
      subtitle="The life and work of K. C. Tripathi \u2014 from meditation to Participatory Action Research to Gram Swaraj."
      gradient="saffron"
      crumbs={[{ label: 'Trustee', to: '/trustee/board' }, { label: 'Journey of the Trustee' }]}
    >
      <section className="prose-aird mx-auto max-w-3xl">
        <p className="mb-6 text-lg font-medium leading-relaxed text-ink/80">{JOURNEY_INTRO}</p>
        {JOURNEY_PARAGRAPHS.map((p, i) => (
          <p key={i} className="mb-5 leading-relaxed text-ink/75">
            {p}
          </p>
        ))}
      </section>
    </ContentPage>
  );
}
