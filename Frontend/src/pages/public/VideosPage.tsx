import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { VideoCarousel } from './sections/VideoCarousel';

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Videos"
        subtitle="Documentary presentations and media coverage of AIRD’s work in rural development."
        gradient="forest"
      />
      <Breadcrumb items={[{ label: 'Activities' }, { label: 'Videos' }]} />
      <VideoCarousel />
    </>
  );
}
