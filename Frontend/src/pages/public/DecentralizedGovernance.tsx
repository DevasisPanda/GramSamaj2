import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { DECENTRALISED_GOVERNANCE } from '@/data/homepage';

export default function DecentralizedGovernance() {
  const sections: ContentSection[] = [
    { paragraphs: [DECENTRALISED_GOVERNANCE.intro] },
    { heading: 'Flagship programmes', paragraphs: [DECENTRALISED_GOVERNANCE.programmes] },
    { heading: 'The gap that remains', paragraphs: [DECENTRALISED_GOVERNANCE.gap] },
  ];
  return (
    <ContentPage
      title="Decentralized Process of Governance"
      subtitle="The 73rd Constitutional Amendment, Panchayati Raj, and the unfinished promise of Gram Swaraj."
      gradient="forest"
      crumbs={[{ label: 'KRANTI', to: '/kranti' }, { label: 'Decentralized Governance' }]}
      sections={sections}
    />
  );
}
