import { ContentPage } from '@/components/shared/ContentPage';
import { DECENTRALISED_SECTIONS } from '@/data/content';

export default function DecentralizedGovernance() {
  return (
    <ContentPage
      title="Decentralized Process of Governance"
      subtitle="The 73rd Constitutional Amendment, Panchayati Raj, and the unfinished promise of Gram Swaraj."
      gradient="forest"
      crumbs={[{ label: 'KRANTI', to: '/kranti' }, { label: 'Decentralized Governance' }]}
      sections={DECENTRALISED_SECTIONS}
    />
  );
}
