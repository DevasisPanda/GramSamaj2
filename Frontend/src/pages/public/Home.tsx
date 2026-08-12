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
import { GramSwarajSection } from './sections/GramSwarajSection';
import { HumanitySection } from './sections/HumanitySection';
import { KrantiPreview } from './sections/KrantiPreview';
import { QuickLinksGrid } from './sections/QuickLinksGrid';
import { NoticeBoard } from './sections/NoticeBoard';
import {
  AIRD_NARRATIVE, DEMO_VILLAGE, DEV_INDIA_HOME, WHO_CAN_JOIN,
} from '@/data/homepage';
import { DEVELOPMENT_CAR } from '@/data/philosophy';
import { HomeHeroSlider } from './sections/HomeHeroSlider';

/* ------------------------------------------------------------------ */
/* About AIRD — Compact Profile Block                                 */
/* ------------------------------------------------------------------ */
function AboutSection() {
  return (
    <div className="bg-white border border-forest-900 mb-1 p-1.5">
      <div className="govt-header-bar mb-1.5">
        <span>About AIRD Trust</span>
        <span className="text-[9px] text-saffron-300 font-normal">Registered 2020</span>
      </div>

      <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-gray-200">
        <img
          src="/aird-logo.png"
          alt="AIRD emblem"
          className="h-10 w-10 object-contain shrink-0"
        />
        <div>
          <h2 className="text-[11px] font-bold text-forest-900 uppercase leading-tight">
            Appropriate Institute of Rural Development
          </h2>
          <span className="text-[9px] text-gray-600 font-semibold">Lucknow, Uttar Pradesh</span>
        </div>
      </div>

      <p className="text-[10px] text-gray-800 leading-snug mb-1">
        {AIRD_NARRATIVE.short[0]}
      </p>

      <Accordion type="single" collapsible>
        <AccordionItem value="about-more" className="border-0">
          <AccordionTrigger className="py-0.5 text-[10px] font-bold uppercase text-saffron-800 hover:no-underline">
            Read Profile &raquo;
          </AccordionTrigger>
          <AccordionContent className="pt-1 text-[10px] text-gray-700 leading-tight space-y-1 border-t">
            {AIRD_NARRATIVE.more.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-1 text-right border-t pt-0.5">
        <Link to="/about" className="govt-link text-[10px]">
          Full Profile &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Spiritual Foundations — Philosophy Block                           */
/* ------------------------------------------------------------------ */
function SpiritualFoundations() {
  const pillars = [
    { title: 'Goal of the Soul', summary: 'The soul is originally free, pure, and divine.', to: '/philosophy' },
    { title: 'Arise, Awake & Stop Not', summary: 'Vivekananda taught that every thought shapes character.', to: '/teachings' },
    { title: 'Ehipassiko', summary: 'Buddha’s principle of direct experience over blind faith.', to: '/teachings' },
    { title: 'Development Car', summary: 'Supreme Power journey & blessings philosophy.', to: '/development-car' },
  ];

  return (
    <div className="bg-white border border-forest-900 mb-1 p-1.5">
      <div className="govt-header-bar mb-1.5">
        <span>Spiritual Foundations</span>
        <span className="text-[9px] text-saffron-300 font-normal">Philosophy</span>
      </div>

      <div className="space-y-1 text-[10px]">
        {pillars.map((p) => (
          <div key={p.title} className="border-b border-gray-200 pb-0.5">
            <div className="font-bold text-forest-900 flex items-center justify-between">
              <span>&bull; {p.title}</span>
              <Link to={p.to} className="text-[9px] text-forest-800 underline">Read &raquo;</Link>
            </div>
            <p className="text-gray-700 leading-tight">{p.summary}</p>
          </div>
        ))}
      </div>

      <div className="mt-1 text-[9px] italic font-semibold text-forest-900 bg-forest-50 p-1 text-center border-t border-forest-800">
        {DEVELOPMENT_CAR.core}
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
    <div className="bg-white border border-forest-900 mb-1 p-1.5">
      <div className="govt-header-bar mb-1.5">
        <span>Development &amp; Governance Timeline</span>
      </div>

      <p className="text-[10px] text-gray-800 leading-tight mb-1">
        {DEV_INDIA_HOME.intro}
      </p>

      <table className="w-full text-left text-[9px] border border-gray-300 border-collapse mb-1">
        <tbody className="divide-y divide-gray-200">
          {keyMilestones.map((m) => (
            <tr key={m.year}>
              <td className="p-0.5 font-bold text-forest-900 bg-forest-50 w-10 border-r border-gray-300 text-center">{m.year}</td>
              <td className="p-0.5 text-gray-800 leading-tight">{m.text}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
/* ------------------------------------------------------------------ */
/* What We Can Do — Checklist                                         */
/* ------------------------------------------------------------------ */
function WhatWeCanDo() {
  return (
    <div className="bg-white border border-forest-900 mb-1 p-1.5">
      <div className="govt-header-bar mb-1.5">
        <span>Model Village Checklist</span>
      </div>
      <p className="text-[10px] text-gray-900 mb-1 bg-forest-50 border-l-2 border-forest-800 p-1 font-medium leading-tight">
        {DEMO_VILLAGE.intro}
      </p>
      <ul className="space-y-0.5 text-[9px] mb-1">
        {DEMO_VILLAGE.areas.slice(0, 6).map((area, i) => (
          <li key={area} className="border-b border-gray-200 pb-0.5 font-semibold text-gray-800 flex items-start gap-1">
            <span className="text-forest-800 font-bold">{i + 1}.</span>
            {area}
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
    <div className="bg-white border border-forest-900 mb-1 p-1.5 text-xs">
      <div className="govt-header-bar mb-1.5">
        <span>Public Participation</span>
      </div>

      <div className="space-y-0.5 mb-1 text-[10px]">
        {WHO_CAN_JOIN.map((role) => (
          <div key={role.title} className="border-b border-gray-200 pb-0.5">
            <span className="font-bold text-forest-900 block">{role.title}</span>
            <span className="text-gray-700 leading-tight block">{role.desc}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-0.5 text-[10px] font-bold pt-0.5 border-t border-forest-800">
        <Link to="/membership" className="govt-link">
          &raquo; Join / Volunteer Membership
        </Link>
        <Link to="/donate" className="govt-link">
          &raquo; Donate to Support AIRD
        </Link>
        <Link to="/contact" className="govt-link">
          &raquo; Contact Lucknow Office
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Event Calendar Block — Center Column                               */
/* ------------------------------------------------------------------ */
function EventCalendarBlock() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 mb-1">
      <div className="govt-header-bar mb-1.5">
        <span>Activities &amp; Event Calendar</span>
      </div>
      <ActivitiesCalendar />
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
    <div className="bg-white border border-forest-900 p-1.5 mb-1">
      <div className="govt-header-bar mb-1.5">
        <span>Videos &amp; Media Gallery</span>
      </div>
      <VideoCarousel />
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
    <div className="bg-white border border-forest-900 p-1.5 mb-1">
      <div className="govt-header-bar mb-1.5">
        <span>Supporters &amp; Donors Roll</span>
      </div>
      <DonorsRoll />
      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/donors" className="govt-link text-[10px]">
          Read More Donors Roll &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Homepage — Uniform Aligned 3-Column Portal Layout                  */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="bg-[#E5EBE0]">
      {/* 1. Top Announcement Marquee Strip */}
      <SloganTicker />

      {/* 2. Main Portal Container */}
      <div className="container-px py-1 space-y-1.5">
        {/* ROW 1: TOP HERO SECTION (Uniform 3-Column Grid: 3 - 6 - 3) */}
        <div className="grid gap-1.5 lg:grid-cols-12 items-stretch">
          {/* Left Column (3 Cols / 25%) */}
          <div className="lg:col-span-3 space-y-1.5">
            <QuickLinksGrid />
            <AboutSection />
          </div>

          {/* Center Column (6 Cols / 50%) */}
          <div className="lg:col-span-6 space-y-1.5">
            <HomeHeroSlider />
            <HeroDandi />
          </div>

          {/* Right Column (3 Cols / 25%) */}
          <div className="lg:col-span-3 space-y-1.5">
            <NoticeBoard />
            <JoinHandsBanner />
          </div>
        </div>

        {/* ROW 2: FULL-WIDTH DEDICATED VILLAGE DIRECTORY (1 Solo Row as content is huge) */}
        <div className="bg-white border border-forest-900 p-1.5 sm:p-2">
          <div className="govt-header-bar mb-1.5">
            <span>Official Village Directory &amp; Supporter Database</span>
            <span className="text-[9px] text-saffron-300 font-normal">Statewise Rural Directory</span>
          </div>
          <VillageDirectory />
          <div className="text-right border-t pt-0.5 mt-1">
            <Link to="/village-directory" className="govt-link text-[10px]">
              Read More Full Village Directory &rarr;
            </Link>
          </div>
        </div>

        {/* ROW 3: GOVERNANCE & ROADMAP SECTION (Uniform 3-Column Grid: 3 - 6 - 3) */}
        <div className="grid gap-1.5 lg:grid-cols-12 items-stretch">
          {/* Left Column (3 Cols / 25%) */}
          <div className="lg:col-span-3 space-y-1.5">
            <SpiritualFoundations />
            <WhatWeCanDo />
          </div>

          {/* Center Column (6 Cols / 50%) */}
          <div className="lg:col-span-6 space-y-1.5">
            <GramSwarajSection />
            <KrantiPreview />
          </div>

          {/* Right Column (3 Cols / 25%) */}
          <div className="lg:col-span-3 space-y-1.5">
            <HumanitySection />
            <DecentralisedSection />
          </div>
        </div>

        {/* ROW 4: MEDIA & ACTIVITIES (50/50 Split: 6 Cols - 6 Cols) */}
        <div className="grid gap-1.5 lg:grid-cols-12 items-stretch">
          {/* Left Half (6 Cols / 50%) */}
          <div className="lg:col-span-6">
            <EventCalendarBlock />
          </div>

          {/* Right Half (6 Cols / 50%) */}
          <div className="lg:col-span-6 space-y-1.5">
            <VideoGalleryBlock />
            <DonorsBlock />
          </div>
        </div>
      </div>
    </div>
  );
}













