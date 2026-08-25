import { useState } from 'react';
import { FileText, CalendarDays, ChevronDown, IndianRupee, ListChecks } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ANNUAL_REPORTS } from '@/data/annualReports';
import { cn } from '@/lib/utils';

/**
 * Annual Reports page — surfaces the six documented yearly reports
 * (2020-21 → 2025-26) with activity highlights and the financial figures
 * stated inside them (client decision D12). Download stubs remain until
 * signed PDFs are supplied.
 */
export default function AnnualReport() {
  const [openId, setOpenId] = useState<string | null>(ANNUAL_REPORTS[0]?.id ?? null);

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
          {ANNUAL_REPORTS.map((r) => {
            const open = openId === r.id;
            return (
              <div
                key={r.id}
                className="overflow-hidden rounded-xl border border-saffron-100 bg-white transition-shadow hover:shadow-md"
              >
                {/* Header row */}
                <button
                  onClick={() => setOpenId(open ? null : r.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
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
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={cn(
                        'rounded-full px-3 py-1 text-xs font-semibold',
                        open ? 'bg-saffron-600 text-white' : 'bg-forest-100 text-forest-700',
                      )}
                    >
                      {open ? 'Close' : 'Read report'}
                    </span>
                    <ChevronDown
                      className={cn('h-4 w-4 text-ink/40 transition-transform', open && 'rotate-180')}
                    />
                  </span>
                </button>

                {/* Body */}
                {open && (
                  <div className="border-t border-saffron-100 px-5 pb-5 pt-4">
                    <p className="mb-4 text-sm leading-relaxed text-ink/75">{r.intro}</p>

                    <h4 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-saffron-700">
                      <ListChecks className="h-3.5 w-3.5" /> Activities &amp; progress
                    </h4>
                    <ul className="mb-5 space-y-2">
                      {r.activities.map((a, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    {r.financials.length > 0 && (
                      <>
                        <h4 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-forest-700">
                          <IndianRupee className="h-3.5 w-3.5" /> Financial overview (as reported)
                        </h4>
                        <dl className="grid gap-2 sm:grid-cols-2">
                          {r.financials.map((f) => (
                            <div key={f.label} className="rounded-lg bg-forest-50/60 px-3 py-2">
                              <dt className="text-[11px] font-medium text-ink/50">{f.label}</dt>
                              <dd className="text-sm font-semibold text-forest-800">{f.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </>
                    )}

                    <p className="mt-4 text-[11px] text-ink/35">
                      Signed PDF download will be available once the certified report file is provided.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
