import { ContentPage } from '@/components/shared/ContentPage';
import { WhirlpoolCanvas } from './sections/WhirlpoolCanvas';
import { ARISE_AWAKE, GOAL_OF_SOUL, EHIPASSIKO_HOME } from '@/data/homepage';
import { FACTS_OF_LIFE, HUMANITY_AND_RELIGION } from '@/data/contentVerbatim';

/**
 * Teachings — a section distinct from Philosophy. Sources (all verbatim):
 * "Arise! Awake and Stop not.docx", "Dont believe on God.docx" (Ehipassiko),
 * "Goal of soul.docx" (Whirlpool), "Facts of life.docx" (=j) and
 * "Humanity and Religion.docx". Never merged with /philosophy.
 */
export default function Teachings() {
  return (
    <ContentPage
      title="Teachings"
      subtitle="Spiritual awakening — the thoughts of Swami Vivekananda and Gautama Buddha that inspire AIRD's work."
      gradient="forest"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Teachings' }]}
      sections={[
        {
          heading: 'Arise, Awake, and Stop not till the Goal is reached',
          paragraphs: [ARISE_AWAKE.intro, ...ARISE_AWAKE.body],
        },
        {
          heading: '“Don’t believe on God — come and see”',
          paragraphs: [EHIPASSIKO_HOME.intro, ...EHIPASSIKO_HOME.body],
        },
        {
          heading: 'The Goal of the Soul',
          paragraphs: [GOAL_OF_SOUL.intro, ...GOAL_OF_SOUL.body],
          bullets: GOAL_OF_SOUL.summary,
        },
        {
          heading: 'Facts of Life',
          paragraphs: FACTS_OF_LIFE,
        },
        {
          heading: 'Humanity and Religion',
          paragraphs: HUMANITY_AND_RELIGION,
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
