import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { PHILOSOPHY_FULL } from '@/data/docFull';
import { TRUST_SUB_NAV } from '@/lib/subNavTree';

/**
 * Complete text of "Philosophy.docx" — the /philosophy page shows the
 * six-pillar summary; this read-more page holds every paragraph verbatim.
 */
export default function PhilosophyFull() {
  return (
    <>
      <PageHero
        title="Philosophy — Complete Text"
        subtitle="The full documented philosophy of AIRD, word for word."
        gradient="forest"
      />
      <Breadcrumb
        items={[
          { label: 'Trust', to: '/about/trust' },
          { label: 'Philosophy', to: '/philosophy' },
          { label: 'Complete Text' },
        ]}
      />

      <article className="container-px section-py">
        <div className="mx-auto max-w-4xl space-y-6">
          <SubNavPills items={TRUST_SUB_NAV} />
          {PHILOSOPHY_FULL.map((s, i) => (
            <section key={i} className="card-surface bg-white p-5 sm:p-7 rounded-xl shadow-md border border-forest-100">
              {s.heading && (
                <h2 className="mb-3 text-xl font-bold text-saffron-900 md:text-2xl border-b border-saffron-100 pb-2 break-words">
                  {s.heading}
                </h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mb-3 leading-relaxed text-ink/85 text-sm sm:text-base break-words">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="border-t border-saffron-100 pt-6 text-sm">
            <Link to="/philosophy" className="govt-link">
              <ArrowLeft className="mr-1 inline h-4 w-4" /> Back to Philosophy (six pillars)
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
