import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { INITIATION_PARAS } from '@/data/contentVerbatim';
import { KRANTI_SUB_NAV } from '@/lib/subNavTree';

export default function Initiation() {
  const sections: ContentSection[] = [{ paragraphs: INITIATION_PARAS }];
  return (
    <ContentPage
      title="Community Initiation"
      subtitle="How AIRD began — from the Development Car to Project KRANTI."
      gradient="forest"
      crumbs={[{ label: 'KRANTI', to: '/concept' }, { label: 'Initiation' }]}
      subNavItems={KRANTI_SUB_NAV}
      sections={sections}
    />
  );
}
