import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { VISION_FULL } from '@/data/contentVerbatim';

export default function VisionMission() {
  const sections: ContentSection[] = [{ heading: 'Our Vision', paragraphs: VISION_FULL }];
  return (
    <ContentPage
      title="Our Vision"
      subtitle="AIRD envisions rural development where every villager is an active participant, not a passive beneficiary."
      gradient="saffron"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Vision' }]}
      sections={sections}
    />
  );
}
