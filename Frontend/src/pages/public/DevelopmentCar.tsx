import { ContentPage } from '@/components/shared/ContentPage';
import { DEVELOPMENT_CAR_SECTIONS } from '@/data/content';

export default function DevelopmentCar() {
  return (
    <ContentPage
      title="Development Car"
      subtitle="The journey of the soul \u2014 a spiritual metaphor for selfless service."
      gradient="forest"
      crumbs={[{ label: 'Philosophy', to: '/philosophy' }, { label: 'Development Car' }]}
      sections={DEVELOPMENT_CAR_SECTIONS}
    />
  );
}
