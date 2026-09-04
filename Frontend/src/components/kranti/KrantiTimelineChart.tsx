import { useState } from 'react';
import { Calendar, CheckCircle2, Clock, Activity, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhaseItem {
  phase: string;
  title: string;
  monthRange: string;
  startMonth: number;
  durationMonths: number;
  color: string;
  activities: string;
}

const PHASES: PhaseItem[] = [
  {
    phase: 'Phase 1',
    title: 'Preliminary Preparation',
    monthRange: 'M1 – M2',
    startMonth: 1,
    durationMonths: 2,
    color: 'from-amber-500 to-amber-600',
    activities: 'Selection of model village, community consultations, formation of Project Implementation Team (PIT), baseline village information collection.'
  },
  {
    phase: 'Phase 2',
    title: 'Mobilization & Ethics',
    monthRange: 'M2 – M3',
    startMonth: 2,
    durationMonths: 2,
    color: 'from-orange-500 to-orange-600',
    activities: 'Organization of spiritual camps, community meetings, introduce Maitri Bhoj gatherings, awareness on Gram Swaraj and participatory governance.'
  },
  {
    phase: 'Phase 3',
    title: 'Capacity Building & Mapping',
    monthRange: 'M3 – M4',
    startMonth: 3,
    durationMonths: 2,
    color: 'from-emerald-500 to-emerald-600',
    activities: 'Practical training of rural youth, preparation of social maps, resource maps, and problem maps, awareness on government schemes, establishment of e-information bank.'
  },
  {
    phase: 'Phase 4',
    title: 'Participatory Action Study (PAS)',
    monthRange: 'M4 – M6',
    startMonth: 4,
    durationMonths: 3,
    color: 'from-teal-600 to-teal-700',
    activities: 'Study and documentation of functioning of Gram Sabha, Gram Panchayat committees, SHGs, MGNREGA activities, and social audit processes.'
  },
  {
    phase: 'Phase 5',
    title: 'Collective Action & Planning',
    monthRange: 'M6 – M8',
    startMonth: 6,
    durationMonths: 3,
    color: 'from-sky-600 to-sky-700',
    activities: 'Identification of priority village issues, formation of working groups, interface meetings with government departments, development of action plan, strengthening SHG-Panchayat collaboration.'
  },
  {
    phase: 'Phase 6',
    title: 'Implementation & Oversight',
    monthRange: 'M8 – M11',
    startMonth: 8,
    durationMonths: 4,
    color: 'from-indigo-600 to-indigo-700',
    activities: 'Implementation of community action initiatives, regular Gram Sabha, documentation of progress, updates on project website, and presentation of findings in open community/Govt. meetings.'
  },
  {
    phase: 'Phase 7',
    title: 'Evaluation & Knowledge Sharing',
    monthRange: 'M11 – M12',
    startMonth: 11,
    durationMonths: 2,
    color: 'from-purple-600 to-purple-700',
    activities: 'Final evaluation workshop, presentation of project reports, documentation of best practices, preparation for KRANTI Phase II replication.'
  }
];

const CONTINUOUS_ACTIVITIES = [
  'Monitoring activities of SHGs and MGNREGA throughout the project period.',
  'Maitri Bhoj (Community dinners) on every Purnima (Full Moon) and Amavasya (New Moon) for dialogue and community bonding.',
  'Open meetings of the community (Gram Sabha) and institutional transparency.',
  'Real-time website updates and electronic documentation of village indicators.'
];

export function KrantiTimelineChart() {
  const [selectedPhase, setSelectedPhase] = useState<PhaseItem>(PHASES[0]);

  return (
    <div className="card-surface bg-white rounded-2xl shadow-md border border-forest-100 p-5 sm:p-7 space-y-6 my-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-forest-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-saffron-100 text-saffron-800 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
              Interactive Gantt Chart
            </span>
            <span className="text-xs text-ink/60 font-medium">12-Month Phased Roadmap</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-forest-950 mt-1 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-forest-700" /> Phased Timeline for Project KRANTI
          </h3>
        </div>
        <div className="text-xs text-ink/60 italic">
          Click any phase bar to inspect its planned activities
        </div>
      </div>

      {/* Visual Gantt Chart Grid */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[650px] space-y-2.5">
          {/* Month Header Row */}
          <div className="grid grid-cols-12 gap-1 text-center text-[11px] font-bold text-ink/50 uppercase border-b border-stone-100 pb-1.5 font-mono">
            <div>M1</div>
            <div>M2</div>
            <div>M3</div>
            <div>M4</div>
            <div>M5</div>
            <div>M6</div>
            <div>M7</div>
            <div>M8</div>
            <div>M9</div>
            <div>M10</div>
            <div>M11</div>
            <div>M12</div>
          </div>

          {/* Phase Bars */}
          {PHASES.map((p) => {
            const isSelected = selectedPhase.phase === p.phase;
            const colStart = p.startMonth;
            const colSpan = p.durationMonths;

            return (
              <div
                key={p.phase}
                onClick={() => setSelectedPhase(p)}
                className={cn(
                  'group flex items-center gap-3 p-1.5 rounded-xl transition-all cursor-pointer border',
                  isSelected
                    ? 'bg-forest-50/70 border-forest-300 shadow-xs'
                    : 'hover:bg-stone-50 border-transparent'
                )}
              >
                {/* Phase Label */}
                <div className="w-40 shrink-0">
                  <div className="text-xs font-bold text-forest-950 flex items-center gap-1.5">
                    <span className={cn('h-2 w-2 rounded-full', isSelected ? 'bg-forest-700' : 'bg-stone-400')} />
                    {p.phase}
                  </div>
                  <div className="text-[11px] text-ink/60 truncate" title={p.title}>
                    {p.title}
                  </div>
                </div>

                {/* 12-col Gantt Bar Container */}
                <div className="flex-1 grid grid-cols-12 gap-1 items-center h-8 bg-stone-100/60 rounded-lg p-1 relative">
                  <div
                    style={{
                      gridColumnStart: colStart,
                      gridColumnEnd: `span ${colSpan}`,
                    }}
                    className={cn(
                      'h-6 rounded-md bg-linear-to-r flex items-center justify-between px-2 text-white text-[11px] font-bold transition-all shadow-xs select-none',
                      p.color,
                      isSelected ? 'ring-2 ring-forest-800 scale-[1.01]' : 'opacity-90 group-hover:opacity-100'
                    )}
                  >
                    <span className="truncate">{p.monthRange}</span>
                    <ArrowRight className="h-3 w-3 opacity-80 shrink-0 ml-1 hidden sm:inline" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Phase Detail Callout */}
      <div className="rounded-xl border border-forest-200 bg-forest-50/40 p-4 sm:p-5 space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-xs bg-forest-800 text-white px-2.5 py-1 rounded-lg">
              {selectedPhase.phase}
            </span>
            <h4 className="font-bold text-forest-950 text-sm sm:text-base">
              {selectedPhase.title}
            </h4>
          </div>
          <span className="text-xs font-semibold text-forest-700 flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-forest-200">
            <Clock className="h-3.5 w-3.5 text-saffron-600" />
            Duration: {selectedPhase.monthRange}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-ink/80 leading-relaxed pt-1">
          {selectedPhase.activities}
        </p>
      </div>

      {/* Continuous Activities Section */}
      <div className="rounded-xl border border-stone-200 bg-stone-50/60 p-4 space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center gap-1.5">
          <Activity className="h-3.5 w-3.5 text-saffron-600" /> Continuous Cross-Cutting Activities Throughout the 12 Months
        </div>
        <div className="grid sm:grid-cols-2 gap-2 text-xs text-ink/75 pt-1">
          {CONTINUOUS_ACTIVITIES.map((act, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-white p-2 rounded-lg border border-stone-200/70">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{act}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}