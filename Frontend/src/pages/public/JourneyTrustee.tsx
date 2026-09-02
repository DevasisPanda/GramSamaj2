import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { UserCheck, BookOpen, Compass } from 'lucide-react';
import { ContentPage } from '@/components/shared/ContentPage';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { JOURNEY_ROLE_PARAS, JOURNEY_AUTOBIOGRAPHY } from '@/data/journeyFull';
import { TRUST_SUB_NAV } from '@/lib/subNavTree';

/**
 * Journey of Trustee — Dedicated biographical narrative from
 * "Journey of trustee1.docx" & "Journey of trustee.docx" (Doc B):
 * 1. Role & Philosophy of the Trustee
 * 2. In His Own Words — Complete Autobiography (1958 to Present)
 */
export default function JourneyTrustee() {
  return (
    <ContentPage
      title="Journey of the Trustee"
      subtitle="The inspiring life, spiritual awakening, and lifelong dedication of Kamlesh Chandra Tripathi to Gram Swaraj."
      gradient="saffron"
      crumbs={[
        { label: 'Trust', to: '/about/trust' },
        { label: 'Journey of Trustee' },
      ]}
    >
      <section className="prose-aird mx-auto max-w-4xl space-y-8">
        {/* In-Page Sub-Menu Bar */}
        <SubNavPills items={TRUST_SUB_NAV} />

        {/* Hero Narrative Banner */}
        <div className="card-surface bg-gradient-to-r from-forest-900 to-forest-950 text-white p-6 sm:p-8 rounded-xl shadow-md border border-saffron-300/30 flex flex-col md:flex-row items-center gap-6">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-saffron-500/20 border-2 border-saffron-400 flex items-center justify-center shrink-0">
            <Compass className="h-8 w-8 sm:h-10 sm:w-10 text-saffron-300" />
          </div>
          <div className="space-y-1.5 text-center md:text-left flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              A Lifelong Commitment to Village Empowerment
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
              From early spiritual guidance under disciples of Maharishi Mahesh Yogi and associates of Dr. E.F. Schumacher, to grassroots participatory action research in the villages of Uttar Pradesh.
            </p>
          </div>
          <Link
            to="/trustee/profile"
            className="shrink-0 inline-flex items-center gap-1.5 bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold px-4 py-2 rounded-lg border border-saffron-400 transition-colors shadow-sm"
          >
            <span>View Factual Profile &rarr;</span>
          </Link>
        </div>

        {/* SECTION 1: ROLE OF THE TRUSTEE (DOC B) */}
        <div className="card-surface bg-white p-6 sm:p-8 rounded-xl shadow-md border border-saffron-100">
          <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl font-bold text-forest-950 border-b border-saffron-200 pb-3">
            <UserCheck className="h-6 w-6 text-saffron-600 shrink-0" />
            <span>Role &amp; Philosophy of the Trustee</span>
          </h2>
          <div className="mb-5 border-l-4 border-l-saffron-500 bg-saffron-50/80 p-4 rounded-r-lg">
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-forest-950 break-words">
              {JOURNEY_ROLE_PARAS[0]}
            </p>
          </div>
          <div className="space-y-4 text-xs sm:text-sm text-ink/85 leading-relaxed">
            {JOURNEY_ROLE_PARAS.slice(1, 3).map((p, i) => (
              <p key={i} className="break-words">{p}</p>
            ))}
          </div>

          <Accordion type="single" collapsible className="mt-6 rounded-xl border border-saffron-200 bg-saffron-50/40 px-4">
            <AccordionItem value="role-full" className="border-0">
              <AccordionTrigger className="text-xs sm:text-sm font-bold text-saffron-800 hover:no-underline">
                Read the complete principles &amp; role of a trustee &raquo;
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-3 text-xs sm:text-sm text-ink/80 leading-relaxed border-t border-saffron-200/60">
                {JOURNEY_ROLE_PARAS.slice(3).map((p, i) => (
                  <p key={i} className="break-words">{p}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* SECTION 2: AUTOBIOGRAPHY (DOC B) */}
        <div className="card-surface bg-white p-6 sm:p-8 rounded-xl shadow-md border border-forest-100">
          <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl font-bold text-forest-950 border-b border-forest-200 pb-3">
            <BookOpen className="h-6 w-6 text-forest-600 shrink-0" />
            <span>In His Own Words — The Journey (1958 to Present)</span>
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-ink/85 leading-relaxed">
            {JOURNEY_AUTOBIOGRAPHY.slice(0, 3).map((p, i) => (
              <p key={i} className="break-words">{p}</p>
            ))}
          </div>

          <Accordion type="single" collapsible className="mt-6 rounded-xl border border-forest-200 bg-forest-50/30 px-4">
            <AccordionItem value="autobiography-full" className="border-0">
              <AccordionTrigger className="text-xs sm:text-sm font-bold text-forest-900 hover:no-underline">
                Read the complete autobiography &mdash; 1958 to the founding of AIRD &raquo;
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-3 text-xs sm:text-sm text-ink/80 leading-relaxed border-t border-forest-200/60">
                {JOURNEY_AUTOBIOGRAPHY.slice(3).map((p, i) => (
                  <p key={i} className="break-words">{p}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Navigation Bar */}
        <div className="flex flex-wrap justify-between items-center gap-3 border-t border-saffron-100 pt-6 text-sm">
          <Link to="/trustee/profile" className="govt-link font-bold">
            &larr; Trustee Profile (Factual Biodata)
          </Link>
          <Link to="/trustee/board" className="govt-link font-bold">
            Board of Trustees (2026&ndash;2027) &rarr;
          </Link>
        </div>
      </section>
    </ContentPage>
  );
}
