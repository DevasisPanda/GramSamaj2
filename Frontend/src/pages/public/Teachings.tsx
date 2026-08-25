import { ContentPage } from '@/components/shared/ContentPage';
import { WhirlpoolCanvas } from './sections/WhirlpoolCanvas';
import { ARISE_AWAKE, GOAL_OF_SOUL, EHIPASSIKO_HOME } from '@/data/homepage';

/**
 * Teachings — a section distinct from Philosophy, with its own source
 * documents: "Arise! Awake and Stop not.docx" (Swami Vivekananda),
 * "Dont believe on God.docx" (Gautama Buddha's Ehipassiko) and
 * "Goal of soul.docx" (the Whirlpool). Never merged with /philosophy.
 */
export default function Teachings() {
  return (
    <ContentPage
      title="Teachings"
      subtitle="Spiritual awakening \u2014 the thoughts of Swami Vivekananda and Gautama Buddha that inspire AIRD's work."
      gradient="forest"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Teachings' }]}
      sections={[
        {
          heading: 'Arise, Awake, and Stop not till the Goal is reached',
          paragraphs: [ARISE_AWAKE.intro, ...ARISE_AWAKE.body],
        },
        {
          heading: '\u201cDon\u2019t believe on God \u2014 come and see\u201d',
          paragraphs: [EHIPASSIKO_HOME.intro, ...EHIPASSIKO_HOME.body],
        },
        {
          heading: 'The Goal of the Soul',
          paragraphs: [GOAL_OF_SOUL.intro, ...GOAL_OF_SOUL.body],
          bullets: GOAL_OF_SOUL.summary,
        },
      ]}
      aside={
        <div className="mt-2">
          <WhirlpoolCanvas />
        </div>
      }
    />
  );
}
