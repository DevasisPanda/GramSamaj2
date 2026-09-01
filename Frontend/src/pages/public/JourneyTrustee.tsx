import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { IdCard, Briefcase, UserCheck, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ContentPage } from '@/components/shared/ContentPage';
import { JOURNEY_ROLE_PARAS, JOURNEY_AUTOBIOGRAPHY } from '@/data/journeyFull';
import { TRUSTEE_BIO, TRUSTEE_CAREER } from '@/data/docFull';

/**
 * Combined Trustee Profile & Journey — verbatim from "Trustee.docx" (Doc A)
 * and "Journey of trustee1.docx" (Doc B):
 * 1. Founder & Managing Trustee Biodata + Career Background (Doc A)
 * 2. Role of the Trustee (Doc B)
 * 3. In His Own Words — Complete Autobiography (Doc B)
 */
export default function JourneyTrustee() {
  return (
    <ContentPage
      title="The Trustee — Profile & Journey"
      subtitle="Kamlesh Chandra Tripathi — Founder & Managing Trustee, Appropriate Institute of Rural Development (AIRD)."
      gradient="saffron"
      crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Trustee & Journey' }]}
    >
      <section className="prose-aird mx-auto max-w-3xl space-y-8">
        {/* SECTION 1: BIODATA & CAREER (DOC A) */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-saffron-900 md:text-2xl border-b border-saffron-200 pb-2">
            <IdCard className="h-5 w-5 text-saffron-600" /> Trustee Biodata (Document A)
          </h2>
          <Card className="border-l-4 border-l-saffron-500 bg-white">
            <CardContent className="pt-6">
              <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {TRUSTEE_BIO.map((row) => (
                  <div key={row.k} className="rounded-lg bg-saffron-50/50 px-3 py-2">
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink/45">
                      {row.k}
                    </dt>
                    <dd className="mt-0.5 break-words text-sm font-medium text-ink">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 2: PROFESSIONAL CAREER (DOC A) */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-forest-900 md:text-2xl border-b border-forest-200 pb-2">
            <Briefcase className="h-5 w-5 text-forest-600" /> Background &amp; Professional Journey
          </h2>
          <ol className="space-y-3">
            {TRUSTEE_CAREER.map((c, i) => (
              <li key={i} className="flex gap-3 rounded-xl border border-saffron-100 bg-white p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-100 text-xs font-bold text-forest-700">
                  {i + 1}
                </span>
                <span className="pt-1 leading-relaxed text-ink/80">{c}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* SECTION 3: ROLE OF THE TRUSTEE (DOC B) */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-saffron-900 md:text-2xl border-b border-saffron-200 pb-2">
            <UserCheck className="h-5 w-5 text-saffron-600" /> Role &amp; Philosophy of the Trustee (Document B)
          </h2>
          <p className="mb-5 text-lg font-semibold leading-relaxed text-forest-900 border-l-4 border-l-saffron-500 bg-saffron-50/70 p-4 rounded-r-lg">
            {JOURNEY_ROLE_PARAS[0]}
          </p>
          {JOURNEY_ROLE_PARAS.slice(1, 3).map((p, i) => (
            <p key={i} className="mb-5 leading-relaxed text-ink/85 font-normal">{p}</p>
          ))}

          <Accordion type="single" collapsible className="mb-8 rounded-xl border border-saffron-200 bg-saffron-50/40 px-4">
            <AccordionItem value="role-full" className="border-0">
              <AccordionTrigger className="text-sm font-semibold text-saffron-800 hover:no-underline">
                Read the full description of a trustee&rsquo;s role &raquo;
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                {JOURNEY_ROLE_PARAS.slice(3).map((p, i) => (
                  <p key={i} className="leading-relaxed text-ink/80">{p}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* SECTION 4: AUTOBIOGRAPHY (DOC B) */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-saffron-900 md:text-2xl border-b border-saffron-200 pb-2">
            <BookOpen className="h-5 w-5 text-saffron-600" /> In His Own Words — The Journey (1958 to Present)
          </h2>
          {JOURNEY_AUTOBIOGRAPHY.slice(0, 3).map((p, i) => (
            <p key={i} className="mb-5 leading-relaxed text-ink/85">{p}</p>
          ))}

          <Accordion type="single" collapsible className="rounded-xl border border-saffron-200 bg-saffron-50/40 px-4">
            <AccordionItem value="autobiography-full" className="border-0">
              <AccordionTrigger className="text-sm font-semibold text-saffron-800 hover:no-underline">
                Read the complete journey &mdash; 1958 to the founding of AIRD &raquo;
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                {JOURNEY_AUTOBIOGRAPHY.slice(3).map((p, i) => (
                  <p key={i} className="leading-relaxed text-ink/80">{p}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Next / Previous Navigation */}
        <div className="flex flex-wrap justify-between gap-3 border-t border-saffron-100 pt-6 text-sm">
          <Link to="/about" className="govt-link">
            &larr; About AIRD
          </Link>
          <Link to="/trustee/board" className="govt-link">
            Board of Trustees (FY 2026–27) &rarr;
          </Link>
        </div>
      </section>
    </ContentPage>
  );
}
