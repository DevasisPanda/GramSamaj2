import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, IndianRupee, ListChecks } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ANNUAL_REPORTS_FULL } from '@/data/annualReportFull';
import { ANNUAL_REPORTS } from '@/data/annualReports';

/**
 * Full-text Annual Report page — renders the COMPLETE verbatim content of one
 * yearly report (auto-generated from Work/*.docx into data/annualReportFull.ts),
 * plus the financial overview chips from data/annualReports.ts.
 */
export default function AnnualReportDetail() {
  const { reportId } = useParams<{ reportId: string }>();
  const report = reportId ? ANNUAL_REPORTS_FULL[reportId] : undefined;

  if (!report) return <Navigate to="/annual-report" replace />;

  const ids = Object.keys(ANNUAL_REPORTS_FULL);
  const idx = ids.indexOf(report.id);
  const newer = idx > 0 ? ANNUAL_REPORTS_FULL[idx - 1] : undefined;
  const older = idx >= 0 && idx < ids.length - 1 ? ANNUAL_REPORTS_FULL[idx + 1] : undefined;
  const summary = ANNUAL_REPORTS.find((r) => r.id === report.id);

  return (
    <>
      <PageHero
        title={report.label}
        subtitle={`Appropriate Institute of Rural Development \u2022 ${report.year}`}
        gradient="saffron"
      >
        <p className="max-w-2xl text-sm font-medium text-saffron-700 italic">
          Complete report text &mdash; as documented in the official annual report.
        </p>
      </PageHero>
      <Breadcrumb
        items={[
          { label: 'Activities' },
          { label: 'Annual Report', to: '/annual-report' },
          { label: report.year },
        ]}
      />

      <article className="container-px section-py">
        <div className="mx-auto max-w-3xl">
          {/* Financial overview (as stated in the reports) */}
          {summary && summary.financials.length > 0 && (
            <div className="mb-8 rounded-2xl border border-forest-100 bg-forest-50/60 p-5">
              <h2 className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-forest-700">
                <IndianRupee className="h-3.5 w-3.5" /> Financial overview (as reported)
              </h2>
              <dl className="grid gap-2 sm:grid-cols-2">
                {summary.financials.map((f) => (
                  <div key={f.label} className="rounded-lg bg-white px-3 py-2">
                    <dt className="text-[11px] font-medium text-ink/50">{f.label}</dt>
                    <dd className="text-sm font-semibold text-forest-800">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Full verbatim report body */}
          {report.sections.map((s, i) => (
            <section key={i} className="card-surface p-5 sm:p-7 rounded-xl shadow-sm mb-6">
              {s.heading && (
                <h2 className="mb-3 text-xl font-bold text-saffron-900 md:text-2xl border-b border-saffron-100 pb-2 break-words">{s.heading}</h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mb-3 leading-relaxed text-ink/85 text-sm sm:text-base break-words">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Prev / Next navigation */}
          <nav className="mt-10 flex flex-col gap-3 border-t border-saffron-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            {older ? (
              <Link
                to={`/annual-report/${older.id}`}
                className="inline-flex items-center gap-2 rounded-lg border border-saffron-200 px-4 py-2 text-sm font-semibold text-saffron-700 transition-colors hover:bg-saffron-50"
              >
                <ArrowLeft className="h-4 w-4" /> {older.label}
              </Link>
            ) : (
              <span />
            )}
            {newer ? (
              <Link
                to={`/annual-report/${newer.id}`}
                className="inline-flex items-center gap-2 rounded-lg border border-saffron-200 px-4 py-2 text-sm font-semibold text-saffron-700 transition-colors hover:bg-saffron-50"
              >
                {newer.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span />
            )}
          </nav>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-ink/40">
            <ListChecks className="h-3 w-3" />
            Source: official AIRD annual report document ({report.year}).
          </div>

          <div className="mt-4 text-center">
            <Link to="/annual-report" className="govt-link text-sm">
              &laquo; All Annual Reports
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
