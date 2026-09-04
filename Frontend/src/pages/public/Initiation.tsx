import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { INITIATION_PARAS } from '@/data/contentVerbatim';
import { KRANTI_SUB_NAV } from '@/lib/subNavTree';

export default function Initiation() {
  const sections: ContentSection[] = [{ paragraphs: INITIATION_PARAS }];
  return (
    <ContentPage
      title="Initiation"
      subtitle="Appropriate Institute of Rural Development (AIRD) — from the Development Car to Project KRANTI."
      gradient="forest"
      crumbs={[{ label: 'KRANTI', to: '/kranti' }, { label: 'Initiation' }]}
      subNavItems={KRANTI_SUB_NAV}
      sections={sections}
    />
  );
}
