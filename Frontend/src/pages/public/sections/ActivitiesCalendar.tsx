import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CalendarDays, CheckCircle2, Circle, Sprout, Users, Landmark, FileText } from 'lucide-react';
import { useEvents } from '@/hooks/useApi';
import type { EventCategory } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn, formatDate } from '@/lib/utils';

const CATEGORY_META: Record<EventCategory, { label: string; icon: React.ComponentType<{ className?: string }>; color: string }> = {
  spiritual: { label: 'Spiritual', icon: Sprout, color: 'bg-saffron-100 text-saffron-700' },
  planning: { label: 'Planning', icon: Users, color: 'bg-forest-100 text-forest-700' },
  environmental: { label: 'Environmental', icon: Landmark, color: 'bg-emerald-100 text-emerald-700' },
  administrative: { label: 'Administrative', icon: FileText, color: 'bg-blue-100 text-blue-700' },
};

const FILTERS: { value: EventCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'spiritual', label: 'Spiritual' },
  { value: 'planning', label: 'Planning' },
  { value: 'environmental', label: 'Environmental' },
  { value: 'administrative', label: 'Administrative' },
];

/**
 * Interactive Activities Calendar — date-wise grid with category filtering
 * via URL query params (`?type=spiritual`).
 *
 * variant="page"    — full-page layout with header + filter chips (/activities).
 * variant="compact" — slim single-column rows for embedding inside homepage
 *                     boxes; nothing overflows its container.
 */
export function ActivitiesCalendar({ variant = 'page' }: { variant?: 'page' | 'compact' }) {
  const { data: events = [], isLoading } = useEvents();
  const [params, setParams] = useSearchParams();
  const activeFilter = (params.get('type') as EventCategory | 'all') ?? 'all';

  const filtered = useMemo(() => {
    const list = activeFilter === 'all' ? events : events.filter((e) => e.category === activeFilter);
    return [...list].sort((a, b) => +new Date(a.date) - +new Date(b.date));
  }, [events, activeFilter]);

  function setFilter(value: EventCategory | 'all') {
    if (value === 'all') params.delete('type');
    else params.set('type', value);
    setParams(params, { replace: true });
  }

  /* ---------------- COMPACT (embedded) ---------------- */
  if (variant === 'compact') {
    return (
      <div className="max-h-[26rem] space-y-1.5 overflow-y-auto pr-0.5">
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-12 animate-pulse rounded-lg bg-saffron-100/60" />
          ))}
        {!isLoading &&
          filtered.map((event) => {
            const meta = CATEGORY_META[event.category];
            const Icon = meta.icon;
            return (
              <div
                key={event.id}
                className="flex min-w-0 items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-2.5 py-2"
              >
                {/* Date chip */}
                <div className="w-14 shrink-0 rounded-md bg-saffron-50 px-1 py-1 text-center">
                  <div className="text-[10px] font-bold leading-none text-saffron-800">
                    {formatDate(event.date).split(' ')[0]}
                  </div>
                  <div className="mt-0.5 text-[9px] uppercase leading-none text-ink/45">
                    {formatDate(event.date).split(' ')[1]}
                  </div>
                </div>

                {/* Title + category — truncates, never overflows */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <Icon className="h-3 w-3 shrink-0 text-saffron-600" />
                    <span className="truncate text-[11px] font-semibold text-gray-900">
                      {event.title}
                    </span>
                  </div>
                  <span className={cn('mt-0.5 inline-block rounded px-1 py-px text-[8px] font-bold uppercase', meta.color)}>
                    {meta.label}
                  </span>
                </div>

                {/* Status — pinned inside the row */}
                <span
                  className={cn(
                    'flex shrink-0 items-center gap-0.5 text-[9px] font-semibold',
                    event.isCompleted ? 'text-forest-600' : 'text-saffron-600',
                  )}
                >
                  {event.isCompleted ? (
                    <>
                      <CheckCircle2 className="h-3 w-3" /> Done
                    </>
                  ) : (
                    <>
                      <Circle className="h-3 w-3" /> Upcoming
                    </>
                  )}
                </span>
              </div>
            );
          })}
      </div>
    );
  }

  /* ---------------- FULL PAGE ---------------- */
  return (
    <section className="section-py bg-gradient-to-b from-white to-saffron-50/40">
      <div className="container-px">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-700">
            <CalendarDays className="h-3.5 w-3.5" /> Activities Calendar
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gradient-saffron">
            Past Milestones &amp; Upcoming Schedule
          </h2>
          <p className="mt-2 text-ink/60 max-w-2xl mx-auto">
            Tracking our journey — from Foundation Day and National Panchayati Raj Day to the KRANTI launch and beyond.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                'rounded-full px-4 py-1.5 text-xs font-medium transition-all',
                activeFilter === f.value
                  ? 'bg-saffron-500 text-white shadow-sm'
                  : 'bg-white border border-saffron-200 text-ink/60 hover:border-saffron-400',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline grid */}
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 rounded-2xl bg-saffron-100/50 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => {
              const meta = CATEGORY_META[event.category];
              const Icon = meta.icon;
              return (
                <article
                  key={event.id}
                  className="card-surface group flex min-w-0 flex-col p-5 transition-all hover:shadow-md"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <Badge variant="secondary" className={cn('gap-1', meta.color)}>
                      <Icon className="h-3 w-3" /> {meta.label}
                    </Badge>
                    {event.isCompleted ? (
                      <span className="flex shrink-0 items-center gap-1 text-xs text-forest-600">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Done
                      </span>
                    ) : (
                      <span className="flex shrink-0 items-center gap-1 text-xs text-saffron-600">
                        <Circle className="h-3.5 w-3.5" /> Upcoming
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-ink transition-colors group-hover:text-saffron-700">
                    {event.title}
                  </h3>
                  <time className="mt-1 text-xs text-ink/40">{formatDate(event.date, { weekday: true })}</time>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{event.description}</p>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
