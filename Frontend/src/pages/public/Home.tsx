import { Link } from 'react-router-dom';
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';

import { SloganTicker } from '@/components/shared/SloganTicker';
import { ActivitiesCalendar } from './sections/ActivitiesCalendar';
import { DonorsRoll } from './sections/DonorsRoll';
import { VillageDirectory } from './sections/VillageDirectory';
import { VideoCarousel } from './sections/VideoCarousel';
import { HeroDandi } from './sections/HeroDandi';
import { PastActivities } from './sections/PastActivities';
import { GramSwarajSection } from './sections/GramSwarajSection';
import { HumanitySection } from './sections/HumanitySection';
import { KrantiPreview } from './sections/KrantiPreview';
import { QuickLinksGrid } from './sections/QuickLinksGrid';
import { NoticeBoard } from './sections/NoticeBoard';
import {
  AIRD_NARRATIVE, DEMO_VILLAGE, DEV_INDIA_HOME, WHO_CAN_JOIN,
  GOAL_OF_SOUL, DEV_CAR_HOME,
} from '@/data/homepage';
import { PHILOSOPHY_GUIDING_PRINCIPLE } from '@/data/philosophy';
import { PLANNED_ACTIVITIES } from '@/data/events';

/* ------------------------------------------------------------------ */
/* About AIRD — first major informational section after the hero       */
/* Source: Contents for HP Final.docx / AIRD in brief.docx            */
/* ------------------------------------------------------------------ */
function AboutSection() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 sm:p-2 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>About AIRD Trust</span>
        <span className="text-[9px] text-saffron-300 font-normal">Registered 31 January 2020</span>
      </div>

      <div className="grid gap-2 lg:grid-cols-12 w-full min-w-0">
        {/* Narrative — left */}
        <div className="lg:col-span-8 w-full min-w-0">
          <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-gray-200">
            <img
              src="/aird-logo.png"
              alt="AIRD emblem"
              className="h-11 w-11 object-contain shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h2 className="text-xs sm:text-sm font-bold text-forest-900 uppercase leading-tight break-words">
                Appropriate Institute of Rural Development
              </h2>
              <span className="text-[9px] sm:text-[10px] text-gray-600 font-semibold block break-words">
                Lucknow, Uttar Pradesh &bull; A Public Charitable Trust for Gram Swaraj
              </span>
            </div>
          </div>

          <p className="text-[10px] sm:text-[11px] text-gray-800 leading-snug mb-1 break-words">
            {AIRD_NARRATIVE.short[0]}
          </p>
          <p className="text-[10px] sm:text-[11px] text-gray-800 leading-snug mb-1 break-words">
            {AIRD_NARRATIVE.short[1]}
          </p>

          <Accordion type="single" collapsible>
            <AccordionItem value="about-more" className="border-0">
              <AccordionTrigger className="py-0.5 text-[10px] font-bold uppercase text-saffron-800 hover:no-underline">
                Read Full Profile &raquo;
              </AccordionTrigger>
              <AccordionContent className="pt-1 text-[10px] text-gray-700 leading-tight space-y-1 border-t">
                {AIRD_NARRATIVE.more.map((para, i) => (
                  <p key={i} className="break-words">{para}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Credentials — right */}
        <div className="lg:col-span-4 w-full min-w-0">
          <div className="overflow-x-auto max-w-full">
            <table className="w-full text-left text-[10px] border border-forest-800 border-collapse mb-1.5 min-w-[200px]">
              <thead className="bg-forest-800 text-white font-bold uppercase text-[9px]">
                <tr>
                  <th className="p-1 border border-forest-700">Specification</th>
                  <th className="p-1 border border-forest-700">Official Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr>
                  <td className="p-1 font-bold border border-gray-300 text-forest-900">Registration</td>
                  <td className="p-1 border border-gray-300 break-words">Public Charitable Trust (PCTA 1882) &mdash; 9002139 IV-66/2020</td>
                </tr>
                <tr className="bg-forest-50/40">
                  <td className="p-1 font-bold border border-gray-300 text-forest-900">NITI Aayog</td>
                  <td className="p-1 border border-gray-300 break-words">NGO Darpan: UP/2022/0303967</td>
                </tr>
                <tr>
                  <td className="p-1 font-bold border border-gray-300 text-forest-900">Headquarters</td>
                  <td className="p-1 border border-gray-300 break-words">Lucknow, Uttar Pradesh, India</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-0.5 text-[10px] font-bold pt-1 border-t border-forest-800">
            <Link to="/about" className="govt-link">
              &raquo; Full Profile of AIRD
            </Link>
            <Link to="/about/trust" className="govt-link">
              &raquo; Trust &amp; Registration Details
            </Link>
            <Link to="/about/vision" className="govt-link">
              &raquo; Vision
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Philosophy — separate block (source: Philosophy.docx)               */
/* ------------------------------------------------------------------ */
function PhilosophyBlock() {
  const pillars = [
    { title: 'Belief in a Universal Power', summary: 'One universal, invisible power known by many names.', to: '/philosophy' },
    { title: 'Service as a Path to Wisdom', summary: 'Selfless service to humanity is one of the highest forms of worship.', to: '/philosophy' },
    { title: 'Humanity Before Division', summary: 'Every person is born first as a human being; divisions come later.', to: '/philosophy' },
    { title: 'Gram Swaraj & Collective Responsibility', summary: 'Villages as self-reliant, participatory, accountable communities.', to: '/philosophy' },
  ];

  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Our Philosophy</span>
        <span className="text-[9px] text-saffron-300 font-normal">AIRD</span>
      </div>

      <div className="space-y-1 text-[10px]">
        {pillars.map((p) => (
          <div key={p.title} className="border-b border-gray-200 pb-0.5">
            <div className="font-bold text-forest-900 flex items-center justify-between gap-1">
              <span className="break-words min-w-0">&bull; {p.title}</span>
              <Link to={p.to} className="text-[9px] text-forest-800 underline shrink-0">Read &raquo;</Link>
            </div>
            <p className="text-gray-700 leading-tight break-words">{p.summary}</p>
          </div>
        ))}
      </div>

      <div className="mt-1 text-[9px] italic font-semibold text-forest-900 bg-forest-50 p-1 text-center border-t border-forest-800 break-words">
        &ldquo;{PHILOSOPHY_GUIDING_PRINCIPLE}&rdquo;
      </div>

      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/philosophy" className="govt-link text-[10px]">
          Read More Philosophy &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Teachings — separate block (sources: Arise! Awake and Stop          */
/* not.docx, Dont believe on God.docx, Goal of soul.docx)              */
/* ------------------------------------------------------------------ */
function TeachingsBlock() {
  const teachings = [
    { title: 'Arise, Awake & Stop Not', summary: 'Swami Vivekananda — life is a bundle of thoughts.', to: '/teachings' },
    { title: 'Ehipassiko — Come & See', summary: 'Gautama Buddha — direct experience over blind faith.', to: '/teachings' },
    { title: 'The Goal of the Soul', summary: 'Vivekananda’s whirlpool metaphor of the soul’s journey.', to: '/teachings' },
  ];

  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Spiritual Teachings</span>
        <span className="text-[9px] text-saffron-300 font-normal">Awakening</span>
      </div>

      <div className="space-y-1 text-[10px]">
        {teachings.map((t) => (
          <div key={t.title} className="border-b border-gray-200 pb-0.5">
            <div className="font-bold text-forest-900 flex items-center justify-between gap-1">
              <span className="break-words min-w-0">&bull; {t.title}</span>
              <Link to={t.to} className="text-[9px] text-forest-800 underline shrink-0">Read &raquo;</Link>
            </div>
            <p className="text-gray-700 leading-tight break-words">{t.summary}</p>
          </div>
        ))}
      </div>

      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/teachings" className="govt-link text-[10px]">
          Read More Teachings &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Development in India — Milestones Block                            */
/* ------------------------------------------------------------------ */
function DecentralisedSection() {
  const keyMilestones = DEV_INDIA_HOME.milestones.filter((m) =>
    ['1871', '1948', '1969', '1982', '1993', '2005'].includes(m.year),
  );

  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Development &amp; Governance Timeline</span>
      </div>

      <p className="text-[10px] text-gray-800 leading-tight mb-1 break-words">
        {DEV_INDIA_HOME.intro}
      </p>

      <div className="overflow-x-auto max-w-full">
        <table className="w-full text-left text-[9px] border border-gray-300 border-collapse mb-1 min-w-[200px]">
          <tbody className="divide-y divide-gray-200">
            {keyMilestones.map((m) => (
              <tr key={m.year}>
                <td className="p-0.5 font-bold text-forest-900 bg-forest-50 w-10 border-r border-gray-300 text-center">{m.year}</td>
                <td className="p-0.5 text-gray-800 leading-tight break-words">{m.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right border-t pt-0.5">
        <Link to="/development-in-india" className="govt-link text-[10px]">
          Full Timeline &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* What We Can Do — Checklist                                         */
/* ------------------------------------------------------------------ */
function WhatWeCanDo() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Model Village Checklist</span>
      </div>
      <p className="text-[10px] text-gray-900 mb-1 bg-forest-50 border-l-2 border-forest-800 p-1 font-medium leading-tight break-words">
        {DEMO_VILLAGE.intro}
      </p>
      <ul className="space-y-0.5 text-[9px] mb-1">
        {DEMO_VILLAGE.areas.slice(0, 6).map((area, i) => (
          <li key={area} className="border-b border-gray-200 pb-0.5 font-semibold text-gray-800 flex items-start gap-1">
            <span className="text-forest-800 font-bold shrink-0">{i + 1}.</span>
            <span className="break-words min-w-0">{area}</span>
          </li>
        ))}
      </ul>
      <div className="text-right border-t pt-0.5">
        <Link to="/kranti/concept" className="govt-link text-[10px]">
          Read More Model Village &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Join Hands — Action Block                                           */
/* ------------------------------------------------------------------ */
function JoinHandsBanner() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 text-xs w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Public Participation</span>
      </div>

      <div className="space-y-0.5 mb-1 text-[10px]">
        {WHO_CAN_JOIN.map((role) => (
          <div key={role.title} className="border-b border-gray-200 pb-0.5">
            <span className="font-bold text-forest-900 block break-words">{role.title}</span>
            <span className="text-gray-700 leading-tight block break-words">{role.desc}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-0.5 text-[10px] font-bold pt-0.5 border-t border-forest-800">
        <Link to="/membership" className="govt-link">
          &raquo; Join / Volunteer Membership
        </Link>
        <Link to="/donate" className="govt-link">
          &raquo; Support AIRD
        </Link>
        <Link to="/contact" className="govt-link">
          &raquo; Contact Lucknow Office
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Upcoming / Planned Activities — KRANTI calendar (distinct from      */
/* the Past Activities section)                                        */
/* ------------------------------------------------------------------ */
function EventCalendarBlock() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Upcoming / Planned Activities</span>
        <span className="text-[9px] text-saffron-300 font-normal">KRANTI 2026&ndash;27</span>
      </div>
      <ActivitiesCalendar variant="compact" />
      <Accordion type="single" collapsible className="mt-1">
        <AccordionItem value="planned" className="border border-forest-800">
          <AccordionTrigger className="px-2 py-1 bg-forest-800 text-white font-bold hover:no-underline text-[10px]">
            {PLANNED_ACTIVITIES.heading}
          </AccordionTrigger>
          <AccordionContent className="p-1.5">
            <div className="overflow-x-auto max-w-full">
              <table className="w-full text-left text-[9px] border border-gray-300 border-collapse min-w-[200px]">
                <thead className="bg-forest-800 text-white font-bold uppercase text-[9px]">
                  <tr>
                    <th className="p-1 border border-forest-700">Proposed Activity</th>
                    <th className="p-1 border border-forest-700 w-36">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {PLANNED_ACTIVITIES.items.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-forest-50/30'}>
                      <td className="p-1 text-gray-800 leading-tight break-words">{row.activity}</td>
                      <td className="p-1 font-semibold text-forest-900 leading-tight break-words">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/activities" className="govt-link text-[10px]">
          Read More Event Calendar &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Videos & Media Gallery Block — Right Column                        */
/* ------------------------------------------------------------------ */
function VideoGalleryBlock() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Videos &amp; Media Gallery</span>
      </div>
      <VideoCarousel variant="compact" />
      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/videos" className="govt-link text-[10px]">
          Read More Video Gallery &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Donors Roll Block — Right Column                                   */
/* ------------------------------------------------------------------ */
function DonorsBlock() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Supporters &amp; Donors Roll</span>
      </div>
      <DonorsRoll variant="compact" />
      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/donors" className="govt-link text-[10px]">
          Read More Donors Roll &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Goal of the Soul — documented homepage section #4 (Home page        */
/* final1). Verbatim excerpt; full text on /teachings.                 */
/* ------------------------------------------------------------------ */
function GoalOfSoulBlock() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Goal of Soul</span>
        <span className="text-[9px] text-saffron-300 font-normal">Whirlpool</span>
      </div>
      <p className="text-[10px] text-gray-800 leading-tight mb-1 break-words">
        {GOAL_OF_SOUL.intro}
      </p>
      <p className="text-[10px] text-gray-700 leading-tight break-words">
        {GOAL_OF_SOUL.body[0]}
      </p>
      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/teachings" className="govt-link text-[10px]">
          Read More Goal of Soul &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Development Car — documented homepage section #11 (Home page        */
/* final1). Verbatim excerpt; full narrative slider on /development-car.*/
/* ------------------------------------------------------------------ */
function DevCarStrip() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Development Car</span>
        <span className="text-[9px] text-saffron-300 font-normal">Spiritual</span>
      </div>
      {DEV_CAR_HOME.intro.slice(0, 2).map((p, i) => (
        <p key={i} className="text-[10px] text-gray-800 leading-tight mb-1 break-words">{p}</p>
      ))}
      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/development-car" className="govt-link text-[10px]">
          Read More Development Car &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Homepage — hero first, then About AIRD, Gram Swaraj, Human &        */
/* Humanity, then the remaining documented sections.                   */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      {/* 1. Top Announcement Marquee Strip */}
      <SloganTicker />

      {/* 2. Main Portal Container */}
      <div className="container-px py-1 space-y-1.5 w-full max-w-full min-w-0">
        {/* ROW 1: FULL-WIDTH HERO — Dandi March background */}
        <HeroDandi />

        {/* ROW 2: ABOUT AIRD — first major informational section */}
        <AboutSection />

        {/* ROW 3: GRAM SWARAJ / PEOPLE'S GOVERNANCE + HUMAN & HUMANITY */}
        <div className="grid gap-1.5 lg:grid-cols-12 items-stretch w-full min-w-0">
          <div className="lg:col-span-8 w-full min-w-0">
            <GramSwarajSection />
          </div>
          <div className="lg:col-span-4 w-full min-w-0">
            <HumanitySection />
          </div>
        </div>

        {/* ROW 4: FULL-WIDTH DEDICATED VILLAGE DIRECTORY */}
        <div className="bg-white border border-forest-900 p-1.5 sm:p-2 w-full min-w-0 overflow-hidden box-border">
          <div className="govt-header-bar mb-1.5">
            <span>Official Village Directory &amp; Supporter Database</span>
            <span className="text-[9px] text-saffron-300 font-normal">Statewise Rural Directory</span>
          </div>
          <VillageDirectory variant="compact" />
          <div className="text-right border-t pt-0.5 mt-1">
            <Link to="/village-directory" className="govt-link text-[10px]">
              Read More Full Village Directory &rarr;
            </Link>
          </div>
        </div>

        {/* ROW 5: GOVERNANCE & ROADMAP (3-6-3) */}
        <div className="grid gap-1.5 lg:grid-cols-12 items-stretch w-full min-w-0">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-1.5 w-full min-w-0">
            <QuickLinksGrid />
            <NoticeBoard />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-6 space-y-1.5 w-full min-w-0">
            <KrantiPreview />
            <DecentralisedSection />
          </div>

          {/* Right Column — Philosophy, Teachings, Goal of Soul, Dev Car, Model Village */}
          <div className="lg:col-span-3 space-y-1.5 w-full min-w-0">
            <PhilosophyBlock />
            <TeachingsBlock />
            <GoalOfSoulBlock />
            <DevCarStrip />
            <WhatWeCanDo />
          </div>
        </div>

        {/* ROW 6: PAST ACTIVITIES + UPCOMING/PLANNED (50/50) */}
        <div className="grid gap-1.5 lg:grid-cols-12 items-start w-full min-w-0">
          <div className="lg:col-span-6 w-full min-w-0">
            <PastActivities />
          </div>
          <div className="lg:col-span-6 w-full min-w-0">
            <EventCalendarBlock />
          </div>
        </div>

        {/* ROW 7: PUBLIC PARTICIPATION (left) + MEDIA & DONORS (right) */}
        <div className="grid gap-1.5 lg:grid-cols-12 items-stretch w-full min-w-0">
          {/* Left Half — Public Participation first, then Videos */}
          <div className="lg:col-span-6 space-y-1.5 w-full min-w-0">
            <JoinHandsBanner />
            <VideoGalleryBlock />
          </div>

          {/* Right Half */}
          <div className="lg:col-span-6 w-full min-w-0">
            <DonorsBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
