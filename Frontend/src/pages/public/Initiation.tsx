import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { INITIATION_PARAS } from '@/data/contentVerbatim';

export default function Initiation() {
  const sections: ContentSection[] = [{ paragraphs: INITIATION_PARAS }];
  return (
    <ContentPage
      title="Initiation"
      subtitle="How AIRD began — from the Development Car to Project KRANTI."
      gradient="forest"
      crumbs={[{ label: 'Philosophy', to: '/philosophy' }, { label: 'Initiation' }]}
      sections={sections}
    />
  );
}
