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
          <Link to="/trustee/profile" className="govt-link">
            View Trustee biodata &amp; career profile &rarr;
          </Link>
        </p>
        {/* Role description — opening paras */}
        <p className="mb-5 text-lg font-medium leading-relaxed text-ink/80">
          {JOURNEY_ROLE_PARAS[0]}
        </p>
        {JOURNEY_ROLE_PARAS.slice(1, 3).map((p, i) => (
          <p key={i} className="mb-5 leading-relaxed text-ink/75">{p}</p>
        ))}

        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="role-full" className="border-saffron-100">
            <AccordionTrigger className="text-sm font-semibold text-saffron-700 hover:no-underline">
              Read the full description of a trustee&rsquo;s role &raquo;
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2">
              {JOURNEY_ROLE_PARAS.slice(3).map((p, i) => (
                <p key={i} className="leading-relaxed text-ink/75">{p}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Autobiography — first paras + full text */}
        <h2 className="mb-4 text-xl font-bold text-saffron-800 md:text-2xl">
          In his own words
        </h2>
        {JOURNEY_AUTOBIOGRAPHY.slice(0, 3).map((p, i) => (
          <p key={i} className="mb-5 leading-relaxed text-ink/75">{p}</p>
        ))}

        <Accordion type="single" collapsible>
          <AccordionItem value="autobiography-full" className="border-saffron-100">
            <AccordionTrigger className="text-sm font-semibold text-saffron-700 hover:no-underline">
              Read the complete journey &mdash; 1958 to the founding of AIRD &raquo;
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2">
              {JOURNEY_AUTOBIOGRAPHY.slice(3).map((p, i) => (
                <p key={i} className="leading-relaxed text-ink/75">{p}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </ContentPage>
  );
}
