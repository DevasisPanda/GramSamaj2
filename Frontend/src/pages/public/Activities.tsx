import { Link } from 'react-router-dom';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { ACTIVITIES_SUB_NAV } from '@/lib/subNavTree';
import { ActivitiesCalendar } from './sections/ActivitiesCalendar';

export default function Activities() {
  return (
    <>
      <PageHero
        title="Trust Activities & Programs"
        subtitle="Past milestones, ongoing initiatives, and planned grassroots events of AIRD."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Activities', to: '/activities' }, { label: 'Overview' }]} />
      <div className="container-px max-w-4xl mx-auto pt-8 space-y-6">
        <SubNavPills items={ACTIVITIES_SUB_NAV} />

        {/* Quick navigation to Past & Current Activities */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            to="/activities/past"
            className="group rounded-xl border border-saffron-200 bg-white p-5 shadow-xs hover:border-saffron-400 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-800 bg-saffron-50 px-2.5 py-1 rounded-md">
                2019 &ndash; 2026
              </span>
              <span className="text-xs text-saffron-700 font-semibold group-hover:translate-x-0.5 transition-transform">
                Read Past History &rarr;
              </span>
            </div>
            <h3 className="text-base font-bold text-forest-950 group-hover:text-saffron-800 transition-colors">
              Past Activities
            </h3>
            <p className="text-xs text-ink/70 mt-1 leading-relaxed">
              Identifying issues and evolving practical processes to address rural governance and transparency across 7 years.
            </p>
          </Link>

          <Link
            to="/activities/current"
            className="group rounded-xl border border-forest-200 bg-white p-5 shadow-xs hover:border-forest-400 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-2.5 py-1 rounded-md">
                2026 &ndash; 2027
              </span>
              <span className="text-xs text-forest-700 font-semibold group-hover:translate-x-0.5 transition-transform">
                View 12-Month Plan &rarr;
              </span>
            </div>
            <h3 className="text-base font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
              Current Activities
            </h3>
            <p className="text-xs text-ink/70 mt-1 leading-relaxed">
              Planned for the year 2026&ndash;27 to demonstrate process evolved to develop a village as a live demonstration unit.
            </p>
          </Link>
        </div>
      </div>
      <ActivitiesCalendar />
    </>
  );
}
