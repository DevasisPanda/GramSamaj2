import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { HUMAN_LIFE_FULL } from '@/data/docFull';

/**
 * Complete text of "Human life.docx" — the home Humanity block is an excerpt;
 * this read-more page carries every paragraph verbatim.
 */
export default function HumanLife() {
  return (
    <>
      <PageHero
        title="Human &amp; Humanity \u2014 Full Text"
        subtitle="Human life, body and soul, and service as worship \u2014 the complete documented note."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Human & Humanity' }]} />

      <article className="container-px section-py">
        <div className="mx-auto max-w-3xl">
          {HUMAN_LIFE_FULL.map((s, i) => (
            <section key={i} className="prose-aird mb-8">
              {s.heading && (
                <h2 className="mb-3 text-xl font-bold text-saffron-800 md:text-2xl">{s.heading}</h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mb-4 leading-relaxed text-ink/80">{p}</p>
              ))}
            </section>
          ))}

          <div className="flex flex-wrap justify-between gap-3 border-t border-saffron-100 pt-6 text-sm">
            <Link to="/" className="govt-link">
              <ArrowLeft className="mr-1 inline h-4 w-4" /> Back to Home
            </Link>
            <Link to="/teachings" className="govt-link">
              Related Teachings
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
