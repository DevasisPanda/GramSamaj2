import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { DEV_INDIA_HOME } from '@/data/homepage';
import { KRANTI_SUB_NAV } from '@/lib/subNavTree';

/**
 * History of Rural Development — full documented timeline from
 * "Development in India1.docx" (structured data in data/homepage.ts).
 */
export default function History() {
  const sections: ContentSection[] = [
    {
      paragraphs: [DEV_INDIA_HOME.intro, DEV_INDIA_HOME.summary],
    },
    {
      heading: 'Rural Development Milestones (1871 – 2019)',
      bullets: DEV_INDIA_HOME.milestones.map((m) => `${m.year} — ${m.text}`),
    },
    {
      heading: 'Current Challenges',
      bullets: DEV_INDIA_HOME.challenges,
    },
    {
      heading: 'Actions Required to Accelerate Rural Development',
      bullets: DEV_INDIA_HOME.actionsRequired,
    },
    {
      heading: 'Conclusion',
      paragraphs: [DEV_INDIA_HOME.conclusion],
    },
  ];

  return (
    <ContentPage
      title="History of Rural Development"
      subtitle="A century of rural development in India — from the 1870s to today."
      gradient="saffron"
      crumbs={[{ label: 'KRANTI', to: '/concept' }, { label: 'History of rural development' }]}
      subNavItems={KRANTI_SUB_NAV}
      sections={sections}
    />
  );
}
