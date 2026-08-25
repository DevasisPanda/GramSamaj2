import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PHILOSOPHY_FULL } from '@/data/docFull';

/**
 * Complete text of "Philosophy.docx" — the /philosophy page shows the
 * six-pillar summary; this read-more page holds every paragraph verbatim.
 */
export default function PhilosophyFull() {
  return (
    <>
      <PageHero
        title="Philosophy \u2014 Complete Text"
        subtitle="The full documented philosophy of AIRD, word for word."
        gradient="forest"
      />
      <Breadcrumb
        items={[
          { label: 'About Us', to: '/about' },
          { label: 'Philosophy', to: '/philosophy' },
          { label: 'Complete Text' },
        ]}
      />

      <article className="container-px section-py">
        <div className="mx-auto max-w-3xl">
          {PHILOSOPHY_FULL.map((s, i) => (
            <section key={i} className="prose-aird mb-8">
              {s.heading && (
                <h2 className="mb-3 text-xl font-bold text-saffron-800 md:text-2xl">{s.heading}</h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mb-4 leading-relaxed text-ink/80">{p}</p>
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
