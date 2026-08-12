import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { DonorsRoll } from './sections/DonorsRoll';

export default function DonorsPage() {
  return (
    <>
      <PageHero
        title="Donors Directory"
        subtitle="We are grateful to every supporter who contributes to the mission of Gram Swaraj."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Activities' }, { label: 'Donors Directory' }]} />
      <DonorsRoll />
    </>
  );
}
