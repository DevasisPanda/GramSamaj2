import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { MODEL_VILLAGE_SUB_NAV } from '@/lib/subNavTree';
import { DonorsRoll } from './sections/DonorsRoll';

export default function DonorsPage() {
  return (
    <>
      <PageHero
        title="Donors Directory"
        subtitle="We are grateful to every supporter who contributes to the mission of Gram Swaraj."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Donors Directory' }]} />
      <div className="container-px max-w-4xl mx-auto pt-8">
        <SubNavPills items={MODEL_VILLAGE_SUB_NAV} />
      </div>
      <DonorsRoll />
    </>
  );
}
