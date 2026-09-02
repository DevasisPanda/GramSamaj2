import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { STRATEGY_BLOCKS } from '@/data/contentVerbatim';
import { KRANTI_SUB_NAV } from '@/lib/subNavTree';

export default function Strategy() {
  // Strategy1.docx: inline headings introduce one or two plain paragraphs.
  // Group consecutive heading-less blocks under the preceding heading.
  const sections: ContentSection[] = [];
  for (const b of STRATEGY_BLOCKS) {
    if (b.heading) sections.push({ heading: b.heading, paragraphs: [b.body] });
    else if (sections.length) sections[sections.length - 1].paragraphs!.push(b.body);
    else sections.push({ paragraphs: [b.body] });
  }

  return (
    <ContentPage
      title="Operational Strategy"
      subtitle="AIRD adopted a participatory and collaborative strategy for demonstrating Gram Swaraj in Village Garhi."
      gradient="forest"
      crumbs={[{ label: 'KRANTI', to: '/concept' }, { label: 'Strategy' }]}
      subNavItems={KRANTI_SUB_NAV}
      sections={sections}
    />
  );
}
