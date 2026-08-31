import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { ContentPage } from '@/components/shared/ContentPage';
import { JOURNEY_ROLE_PARAS, JOURNEY_AUTOBIOGRAPHY } from '@/data/journeyFull';

/**
 * Journey of the Trustee — verbatim from "Journey of trustee1.docx":
 * the trustee-role description (paras 1-12) followed by the founder's
 * first-person autobiography (B/B1). Long texts expand in-place so no
 * documented content is dropped.
 */
export default function JourneyTrustee() {
  return (
    <ContentPage
      title="Journey of the Trustee"
      subtitle="The life and work of K. C. Tripathi — from meditation to Participatory Action Research to Gram Swaraj."
      gradient="saffron"
      crumbs={[{ label: 'Trustee', to: '/trustee/board' }, { label: 'Journey of the Trustee' }]}
    >
      <section className="prose-aird mx-auto max-w-3xl">
        <p className="mb-6 text-sm">
          <Link to="/trustee/profile" className="govt-link inline-flex items-center gap-1 bg-saffron-100 px-3 py-1.5 rounded-lg border border-saffron-300">
            View Trustee biodata &amp; career profile &rarr;
          </Link>
        </p>
        {/* Role description — opening paras */}
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

        {/* Autobiography — first paras + full text */}
        <h2 className="mb-4 text-xl font-bold text-saffron-900 md:text-2xl border-b border-saffron-200 pb-2">
          In his own words
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
      </section>
    </ContentPage>
  );
}
