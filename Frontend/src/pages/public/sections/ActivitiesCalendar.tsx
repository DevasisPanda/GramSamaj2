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
 * Interactive Activities Calendar — date-wise scrollable grid with
 * category filtering via URL query params (`?type=spiritual`).
 */
export function ActivitiesCalendar() {
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
                  className="card-surface group p-5 hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className={cn('gap-1', meta.color)}>
                      <Icon className="h-3 w-3" /> {meta.label}
                    </Badge>
                    {event.isCompleted ? (
                      <span className="flex items-center gap-1 text-xs text-forest-600">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Done
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-saffron-600">
                        <Circle className="h-3.5 w-3.5" /> Upcoming
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-ink group-hover:text-saffron-700 transition-colors">
                    {event.title}
                  </h3>
                  <time className="text-xs text-ink/40 mt-1">{formatDate(event.date, { weekday: true })}</time>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">{event.description}</p>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
