import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { DEV_INDIA_HOME } from '@/data/homepage';

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
      heading: 'Rural Development Milestones (1871 \u2013 2019)',
      bullets: DEV_INDIA_HOME.milestones.map((m) => `${m.year} \u2014 ${m.text}`),
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
      subtitle="A century of rural development in India \u2014 from the 1870s to today."
      gradient="saffron"
      crumbs={[{ label: 'Philosophy', to: '/philosophy' }, { label: 'History of Rural Development' }]}
      sections={sections}
    />
  );
}
