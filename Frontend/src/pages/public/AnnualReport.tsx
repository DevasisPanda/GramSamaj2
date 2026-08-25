import { Link } from 'react-router-dom';
import { FileText, CalendarDays, ArrowRight, IndianRupee } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ANNUAL_REPORTS } from '@/data/annualReports';

/**
 * Annual Reports index — one card per documented yearly report
 * (2020-21 → 2025-26). Each card links to the FULL verbatim report page at
 * /annual-report/:reportId (content auto-generated from Work/*.docx).
 */
export default function AnnualReport() {
  return (
    <>
      <PageHero
        title="Annual Reports"
        subtitle="Yearly reports documenting AIRD's activities, progress, and financial statements."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Activities' }, { label: 'Annual Report' }]} />

      <section className="container-px section-py">
        <div className="mx-auto max-w-3xl space-y-4">
          {ANNUAL_REPORTS.map((r) => (
            <div
              key={r.id}
              className="rounded-xl border border-saffron-100 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-saffron-100 p-2.5 text-saffron-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">{r.label}</div>
                    <div className="flex items-center gap-1.5 text-xs text-ink/50">
                      <CalendarDays className="h-3 w-3" /> {r.year}
                    </div>
                  </div>
                </div>
              </div>

              {/* Intro excerpt (verbatim opening of the report) */}
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/65">{r.intro}</p>

              {/* Financial chips preview */}
              {r.financials.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.financials.slice(0, 3).map((f) => (
                    <span
                      key={f.label}
                      className="inline-flex max-w-full items-center gap-1 rounded-full bg-forest-50 px-2.5 py-0.5 text-[11px] font-medium text-forest-700"
                    >
                      <IndianRupee className="h-3 w-3 shrink-0" />
                      <span className="truncate">{f.label}: {f.value}</span>
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-saffron-50 pt-3">
                <Link
                  to={`/annual-report/${r.id}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-saffron-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-saffron-700"
                >
                  Read Full Report <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-[11px] text-ink/35">
                  Signed PDF download available once the certified file is provided.
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
