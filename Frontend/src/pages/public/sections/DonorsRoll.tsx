import { HandCoins } from 'lucide-react';
import { useDonors } from '@/hooks/useApi';
import { maskDonorName } from '@/data/donors';
import { formatDate, formatINR } from '@/lib/utils';

/**
 * Donors Roll of Honor — vertical auto-scrolling marquee of
 * Date | Donor Initials | Amount (INR). Pauses on hover.
 */
export function DonorsRoll() {
  const { data: donors = [], isLoading } = useDonors();

  // Duplicate the list so the `marquee-y` loop is seamless.
  const loop = [...donors, ...donors];

  return (
    <section className="section-py">
      <div className="container-px">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-700">
              <HandCoins className="h-3.5 w-3.5" /> Roll of Honor
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gradient-saffron">
              Our Cherished Donors
            </h2>
            <p className="mt-3 text-ink/60 leading-relaxed">
              Every contribution, large or small, is a blessing that strengthens the journey towards Gram Swaraj. We honour those who have joined hands with AIRD through their generous support.
            </p>
            <p className="mt-3 text-xs text-ink/40 italic">
              Names are shown as initials to respect donor privacy.
            </p>
          </div>

          {/* Vertical marquee */}
          <div className="relative h-[360px] overflow-hidden marquee-mask card-surface p-0">
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <span className="text-sm text-ink/40 animate-pulse">Loading donors...</span>
              </div>
            ) : (
              <div className="flex flex-col animate-marquee-y hover:[animation-play-state:paused]">
                {loop.map((donor, i) => (
                  <div
                    key={`${donor.id}-${i}`}
                    className="flex items-center justify-between gap-4 border-b border-saffron-50 px-5 py-3"
                  >
                    <span className="text-xs text-ink/40 w-20">{formatDate(donor.date)}</span>
                    <span className="flex-1 text-sm font-medium text-ink/80">
                      {maskDonorName(donor.name)}
                    </span>
                    <span className="text-sm font-bold text-forest-700">{formatINR(donor.amount)}</span>
                  </div>
                ))}
              </div>
            )}
            {/* gradient fades handled by marquee-mask */}
          </div>
        </div>
      </div>
    </section>
  );
}
