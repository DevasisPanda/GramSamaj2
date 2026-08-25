import { Link } from 'react-router-dom';
import { ArrowLeft, IdCard, Briefcase } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { TRUSTEE_BIO, TRUSTEE_CAREER } from '@/data/docFull';

/**
 * Trustee profile — the complete biodata table and professional career rows
 * from "Trustee.docx" (=A). The journey page tells the story; this page holds
 * the factual record.
 */
export default function TrusteeProfile() {
  return (
    <>
      <PageHero
        title="The Trustee \u2014 Profile"
        subtitle="Kamlesh Chandra Tripathi \u2014 Founder & Managing Trustee, AIRD."
        gradient="saffron"
      />
      <Breadcrumb
        items={[
          { label: 'Trustee', to: '/trustee/board' },
          { label: 'Trustee Profile' },
        ]}
      />

      <section className="container-px section-py">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Biodata card */}
          <Card className="border-l-4 border-l-saffron-500">
            <CardContent className="pt-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-ink">
                <IdCard className="h-5 w-5 text-saffron-600" /> Biodata
              </h2>
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

          {/* Career rows — verbatim from Trustee.docx */}
          <div>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-ink">
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

          <div className="flex flex-wrap justify-between gap-3 border-t border-saffron-100 pt-6 text-sm">
            <Link to="/trustee/journey" className="govt-link">
              <ArrowLeft className="mr-1 inline h-4 w-4" /> Journey of the Trustee
            </Link>
            <Link to="/trustee/board" className="govt-link">
              Board of Trustees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
