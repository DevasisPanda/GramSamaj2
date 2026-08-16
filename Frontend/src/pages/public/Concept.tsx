import { ContentPage } from '@/components/shared/ContentPage';
import { CONCEPT_SECTIONS } from '@/data/content';

export default function Concept() {
  return (
    <ContentPage
      title="Concept"
      subtitle="The case for a live demonstration village of Gram Swaraj."
      gradient="forest"
      crumbs={[{ label: 'Philosophy', to: '/philosophy' }, { label: 'Concept' }]}
      sections={CONCEPT_SECTIONS}
    />
  );
}
