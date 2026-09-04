import { Calendar, CheckCircle2, Clock, Sparkles, MapPin, Rocket } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ACTIVITIES_SUB_NAV } from '@/lib/subNavTree';

interface PlannedActivityItem {
  id: number;
  activity: string;
  duration: string;
  type: 'phased' | 'continuous' | 'milestone';
  highlight?: boolean;
}

const PLANNED_ACTIVITIES_2026_2027: PlannedActivityItem[] = [
  {
    id: 1,
    activity:
      'Selection of model village, community consultations, formation of Project Implementation Team (PIT), baseline village information collection',
    duration: '15th August 2026 onwards',
    type: 'phased',
    highlight: true,
  },
  {
    id: 2,
    activity:
      'Organization of spiritual camps, community meetings, introduce Maitri Bhoj gatherings, awareness on Gram Swaraj and participatory governance',
    duration: '1st September 2026 – 2nd October 2026',
    type: 'phased',
  },
  {
    id: 3,
    activity:
      'Launching of KRANTI. Practical training of rural youth, preparation of social maps, resource maps, and problem maps, awareness on government schemes, establishment of e-information bank',
    duration: '25th September 2026 – 30th November 2026',
    type: 'phased',
    highlight: true,
  },
  {
    id: 4,
    activity:
      'Study and documentation of functioning of Gram Sabha, Gram Panchayat committees, SHGs, MGNREGA activities, and social audit processes',
    duration: '15th November 2026 – 2nd February 2027',
    type: 'phased',
  },
  {
    id: 5,
    activity:
      'Identification of priority village issue, formation of working groups, interface meetings with government departments, development of action plan, strengthening collaboration between SHGs and Gram Panchayat',
    duration: '3rd December 2026 – 2nd February 2027',
    type: 'phased',
  },
  {
    id: 6,
    activity:
      'Implementation of community action initiatives, regular Gram Sabha, documentation of progress, updates on project website and presentation of findings in open meetings with community and Govt. officials',
    duration: '2nd October 2026 onwards',
    type: 'phased',
  },
  {
    id: 7,
    activity:
      'Monitoring activities of SHG and MGNREGA. Planning for involving people and institution to join hands in developing a village as live model on process.',
    duration: 'Continuous activities throughout the project period',
    type: 'continuous',
  },
  {
    id: 8,
    activity:
      'Maitri Bhoj (Community dinners) on every Pooranmasi and Amawasya for feedback and dialogue to document state of village electronically.',
    duration: 'Continuous activities throughout the project period',
    type: 'continuous',
  },
  {
    id: 9,
    activity: 'Open meeting of community (Gram Sabha)',
    duration: 'Continuous activities throughout the project period',
    type: 'continuous',
  },
  {
    id: 10,
    activity: 'Website updates and digital record keeping',
    duration: 'Continuous activities throughout the project period',
    type: 'continuous',
  },
  {
    id: 11,
    activity:
      'Final evaluation workshop, presentation of project reports, documentation of best practices, preparation for KRANTI Phase II for replication of best practices.',
    duration: '11th – 15th August 2027',
    type: 'milestone',
    highlight: true,
  },
];

export default function CurrentActivities() {
  return (
    <>
      <PageHero
        title="Current Activities (2026–2027)"
        subtitle="Proposed activity of project KRANTI (15th August 2026 – 14th August 2027) — Planned for the year 2026-27 to demonstrate process evolved to develop a village as demonstration unit of participatory process."
        gradient="saffron"
      >
        <div className="flex flex-wrap gap-2 pt-1 text-xs">
          <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2.5 py-1 font-semibold text-forest-900">
            <Calendar className="h-3.5 w-3.5" /> Project Duration: 15 Aug 2026 – 14 Aug 2027
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2.5 py-1 font-semibold text-forest-900">
            <MapPin className="h-3.5 w-3.5" /> Village Manpur Lala, BKT, Lucknow
          </span>
        </div>
      </PageHero>

      <Breadcrumb
        items={[
          { label: 'Activities', to: '/activities' },
          { label: 'Current Activities (2026–27)' },
        ]}
      />

      <div className="container-px max-w-5xl mx-auto py-8 space-y-8">
        <SubNavPills items={ACTIVITIES_SUB_NAV} />

        {/* Overview Header Card */}
        <div className="rounded-2xl border-2 border-saffron-200 bg-linear-to-br from-amber-50/50 via-white to-forest-50/50 p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="bg-forest-800 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
              Work Plan 2026–2027
            </span>
            <span className="text-xs font-bold text-saffron-800 bg-white px-3 py-1 rounded-full border border-saffron-200">
              Verbatim from Official Schedule
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-forest-950 mb-2">
            Proposed Activity of Project KRANTI (15th August 2026 &ndash; 14th August 2027)
          </h2>
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed max-w-3xl">
            Planned for the year 2026&ndash;27 to demonstrate the process evolved to develop a village as a live demonstration unit of participatory process (&ldquo;Gram Swaraj&rdquo;), digital governance, and community leadership in Village Manpur Lala, Block Bakshi Ka Talab, Lucknow.
          </p>
        </div>

        {/* Schedule Table */}
        <div className="overflow-hidden rounded-xl border border-saffron-200 bg-white shadow-md">
          <div className="bg-forest-800 px-4 py-3 text-white flex items-center justify-between">
            <span className="font-bold text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-saffron-300" />
              12-Month Phased Activities &amp; Timeline
            </span>
            <span className="text-xs text-saffron-200 font-medium">11 Strategic Work Items</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-saffron-50 text-forest-950 font-bold uppercase text-[11px] border-b border-saffron-200">
                <tr>
                  <th className="p-3.5 w-12 text-center">#</th>
                  <th className="p-3.5">Activity Description</th>
                  <th className="p-3.5 w-64 sm:w-72">Duration / Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-saffron-100">
                {PLANNED_ACTIVITIES_2026_2027.map((item) => (
                  <tr
                    key={item.id}
                    className={
                      item.highlight
                        ? 'bg-amber-50/50 hover:bg-amber-50/80 transition-colors font-medium'
                        : 'hover:bg-forest-50/30 transition-colors'
                    }
                  >
                    <td className="p-3.5 text-center font-bold text-forest-900 align-top">
                      {item.id}
                    </td>
                    <td className="p-3.5 text-ink/90 leading-relaxed align-top">
                      <div className="space-y-1">
                        <div>{item.activity}</div>
                        {item.type === 'continuous' && (
                          <Badge variant="outline" className="text-[10px] text-forest-700 border-forest-300 bg-forest-50">
                            Continuous Activity
                          </Badge>
                        )}
                        {item.type === 'milestone' && (
                          <Badge variant="default" className="text-[10px] bg-saffron-600 text-white">
                            Project Milestone
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-3.5 align-top">
                      <div className="flex items-start gap-1.5 text-xs font-semibold text-forest-900 bg-white/80 p-2 rounded-lg border border-saffron-100">
                        {item.type === 'continuous' ? (
                          <Clock className="h-4 w-4 text-forest-600 shrink-0 mt-0.5" />
                        ) : item.type === 'milestone' ? (
                          <Rocket className="h-4 w-4 text-saffron-600 shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        )}
                        <span className="leading-snug">{item.duration}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Milestone Callout */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="border-forest-200 bg-forest-50/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-forest-900 flex items-center gap-2">
                <Rocket className="h-4 w-4 text-forest-700" />
                Launch of KRANTI
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-ink/80 space-y-1">
              <p>
                <strong>Date:</strong> 25th September 2026 (Bank Uncle&rsquo;s Day)
              </p>
              <p>
                Youth mobilization, participatory mapping, and establishment of the village e-information bank.
              </p>
            </CardContent>
          </Card>

          <Card className="border-saffron-200 bg-saffron-50/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-saffron-900 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-saffron-700" />
                Final Evaluation Workshop
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-ink/80 space-y-1">
              <p>
                <strong>Date:</strong> 11th &ndash; 15th August 2027
              </p>
              <p>
                Presentation of project reports, best practice documentation, and preparation for KRANTI Phase II replication.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
