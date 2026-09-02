import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { HUMAN_LIFE_FULL } from '@/data/docFull';
import { TEACHINGS_SUB_NAV } from '@/lib/subNavTree';

/**
 * Complete text of "Human life.docx" — the home Humanity block is an excerpt;
 * this read-more page carries every paragraph verbatim.
 */
export default function HumanLife() {
  return (
    <>
      <PageHero
        title="Human Life &amp; Humanity"
        subtitle="Human life, body and soul, and service as worship — the complete documented note."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Teachings', to: '/teachings' }, { label: 'Human Life' }]} />

      <article className="container-px section-py">
        <div className="mx-auto max-w-4xl space-y-6">
          <SubNavPills items={TEACHINGS_SUB_NAV} />
          {HUMAN_LIFE_FULL.map((s, i) => (
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

          <div className="flex flex-wrap justify-between gap-3 border-t border-saffron-100 pt-6 text-sm">
            <Link to="/" className="govt-link">
              <ArrowLeft className="mr-1 inline h-4 w-4" /> Back to Home
            </Link>
            <Link to="/teachings" className="govt-link">
              Related Teachings &rarr;
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
