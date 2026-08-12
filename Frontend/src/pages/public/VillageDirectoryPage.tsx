import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { VillageDirectory } from './sections/VillageDirectory';

export default function VillageDirectoryPage() {
  return (
    <>
      <PageHero
        title="Village Directory"
        subtitle="House-wise information of the model village \u2014 demographics, livelihoods, and participation."
        gradient="forest"
      />
      <Breadcrumb items={[{ label: 'Activities' }, { label: 'Village Directory' }]} />
      <VillageDirectory />
    </>
  );
}
