import { ContentPage } from '@/components/shared/ContentPage';
import { HISTORY_SECTIONS } from '@/data/content';

export default function History() {
  return (
    <ContentPage
      title="History of Rural Development"
      subtitle="A century of rural development in India \u2014 from the 1870s to today."
      gradient="saffron"
      crumbs={[{ label: 'Philosophy', to: '/philosophy' }, { label: 'History of Rural Development' }]}
      sections={HISTORY_SECTIONS}
    />
  );
}
