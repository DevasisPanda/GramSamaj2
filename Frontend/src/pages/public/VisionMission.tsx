import { ContentPage } from '@/components/shared/ContentPage';
import { VISION_SECTIONS } from '@/data/content';

export default function VisionMission() {
  return (
    <ContentPage
      title="Vision &amp; Mission"
      subtitle="AIRD envisions rural development where every villager is an active participant, not a passive beneficiary."
      gradient="saffron"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Vision & Mission' }]}
      sections={VISION_SECTIONS}
    />
  );
}
