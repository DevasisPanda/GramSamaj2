import { ContentPage } from '@/components/shared/ContentPage';
import { TEACHINGS_SECTIONS } from '@/data/content';

export default function Teachings() {
  return (
    <ContentPage
      title="Teachings"
      subtitle="Spiritual awakening \u2014 the foundation of AIRD's work."
      gradient="forest"
      crumbs={[{ label: 'Philosophy', to: '/philosophy' }, { label: 'Teachings' }]}
      sections={TEACHINGS_SECTIONS}
    />
  );
}
