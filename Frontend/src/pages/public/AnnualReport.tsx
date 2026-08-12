import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { FileText, Download, CalendarDays } from 'lucide-react';

const REPORTS = [
  { year: '2025\u201326', label: 'Annual Report FY 2025\u201326', status: 'upcoming' },
  { year: '2024\u201325', label: 'Annual Report FY 2024\u201325', status: 'upcoming' },
  { year: '2023\u201324', label: 'Annual Report FY 2023\u201324', status: 'upcoming' },
  { year: '2022\u201323', label: 'Annual Report FY 2022\u201323', status: 'upcoming' },
  { year: '2021\u201322', label: 'Annual Report FY 2021\u201322', status: 'upcoming' },
  { year: '2020\u201321', label: 'Annual Report FY 2020\u201321', status: 'available' },
];

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
          {REPORTS.map((r) => (
            <div
              key={r.year}
              className="flex items-center justify-between gap-4 rounded-xl border border-saffron-100 bg-white p-5 transition-shadow hover:shadow-md"
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
              {r.status === 'available' ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
                  <Download className="h-3.5 w-3.5" /> Available
                </span>
              ) : (
                <span className="rounded-full bg-saffron-50 px-3 py-1 text-xs font-medium text-saffron-600">
                  Coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
