import { ContentPage } from '@/components/shared/ContentPage';
import { DEVELOPMENT_CAR_SECTIONS } from '@/data/content';
import { DevelopmentCarSlider } from './sections/DevelopmentCarSlider';

export default function DevelopmentCar() {
  return (
    <ContentPage
      title="Development Car"
      subtitle="The journey of the soul \u2014 a spiritual metaphor for selfless service."
      gradient="forest"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Development Car' }]}
      sections={DEVELOPMENT_CAR_SECTIONS}
      aside={
        <div className="mt-2">
          <DevelopmentCarSlider />
        </div>
      }
    />
  );
}
