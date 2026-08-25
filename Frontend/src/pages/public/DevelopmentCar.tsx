import { ContentPage } from '@/components/shared/ContentPage';
import { DevelopmentCarNarrative } from './sections/DevelopmentCarNarrative';
import { DevelopmentCarSlider } from './sections/DevelopmentCarSlider';

/**
 * Development Car — full documented narrative ("Development Car.docx" /
 * "Contents for HP Final") as a slider (client decision D5), plus the
 * interactive blessings-vs-curses metaphor beneath it.
 */
export default function DevelopmentCar() {
  return (
    <ContentPage
      title="Development Car"
      subtitle="The journey of the soul — a spiritual metaphor for selfless service."
      gradient="forest"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Development Car' }]}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <DevelopmentCarNarrative />
        <div>
          <h2 className="mb-4 text-xl font-bold text-saffron-800 md:text-2xl">
            Blessings strengthen the journey
          </h2>
          <p className="mb-5 leading-relaxed text-ink/70">
            Using the metaphor of the Development Car: blessings earned through kindness,
            compassion, honesty, and service strengthen and maintain the vehicle that carries
            the soul &mdash; while harmful intentions weaken it. Try it below.
          </p>
          <DevelopmentCarSlider />
        </div>
      </div>
    </ContentPage>
  );
}
