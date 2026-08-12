import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ActivitiesCalendar } from './sections/ActivitiesCalendar';

export default function Activities() {
  return (
    <>
      <PageHero
        title="Activities Calendar"
        subtitle="Past milestones and planned events of AIRD and Project KRANTI."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Activities' }, { label: 'Activities Calendar' }]} />
      <ActivitiesCalendar />
    </>
  );
}
