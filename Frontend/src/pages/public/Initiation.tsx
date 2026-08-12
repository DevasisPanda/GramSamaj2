import { ContentPage } from '@/components/shared/ContentPage';
import { INITIATION_SECTIONS } from '@/data/content';

export default function Initiation() {
  return (
    <ContentPage
      title="Initiation"
      subtitle="How AIRD began \u2014 from the Development Car to Project KRANTI."
      gradient="forest"
      crumbs={[{ label: 'Philosophy', to: '/philosophy' }, { label: 'Initiation' }]}
      sections={INITIATION_SECTIONS}
    />
  );
}
