import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { TRUSTEES_2020_2025, MANAGING_TRUSTEE } from '@/data/trustees';

const POSITION_COLORS: Record<string, string> = {
  Convener: 'bg-saffron-100 text-saffron-800',
  Director: 'bg-forest-100 text-forest-800',
  Comptroller: 'bg-blue-100 text-blue-800',
  'Finance Controller': 'bg-amber-100 text-amber-800',
  'General Manager': 'bg-purple-100 text-purple-800',
  Manager: 'bg-gray-100 text-gray-700',
  'Chief Executive': 'bg-indigo-100 text-indigo-800',
  Executive: 'bg-gray-100 text-gray-600',
  PRO: 'bg-pink-100 text-pink-700',
};

function posColor(pos: string) {
  return POSITION_COLORS[pos] ?? 'bg-saffron-50 text-saffron-700';
}

export default function BoardTrustees2020() {
  return (
    <>
      <PageHero
        title="Board of Trustees (FY 2020–25)"
        subtitle={`Financial Year 2020–2025 • Managing Trustee: ${MANAGING_TRUSTEE.name}`}
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Trustee' }, { label: 'Board of Trustees (FY 2020–25)' }]} />

      <section className="container-px section-py">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-2xl border-2 border-saffron-300 bg-white shadow-md p-6">
            <h2 className="text-lg font-bold text-saffron-800">Managing Trustee</h2>
            <p className="mt-1 text-2xl font-bold font-display text-ink">{MANAGING_TRUSTEE.name}</p>
            <span className="mt-2 inline-block rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-800 border border-saffron-300">
              {MANAGING_TRUSTEE.role}
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-forest-800 bg-white shadow-md max-w-full">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-forest-700 text-left text-xs font-semibold uppercase tracking-wide text-cream">
                  <th className="px-4 py-3">S. No.</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Particulars</th>
                  <th className="px-4 py-3">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-saffron-100 bg-white">
                {TRUSTEES_2020_2025.map((t, i) => (
                  <tr key={t.id} className={i % 2 === 0 ? "bg-white hover:bg-saffron-50/70 transition-colors" : "bg-forest-50/30 hover:bg-saffron-50/70 transition-colors"}>
                    <td className="px-4 py-3 font-semibold text-ink/70">{t.serial}</td>
                    <td className="px-4 py-3 font-bold text-ink break-words">{t.name}</td>
                    <td className="px-4 py-3 text-ink/80 text-xs break-words">{t.particulars}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${posColor(t.position)}`}>
                        {t.position}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
