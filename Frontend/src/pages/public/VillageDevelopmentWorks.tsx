import { useState, useMemo } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Hammer, FileSpreadsheet, Search, Calendar, Building2,
  Users2, ClipboardCheck, Sparkles
} from 'lucide-react';
import { MODEL_VILLAGE_SUB_NAV } from '@/lib/subNavTree';
import { cn } from '@/lib/utils';

interface DevWorkItem {
  id: string;
  date: string;
  category: 'Gram Panchayat & Sabha' | 'GPDP' | 'MGNREGA' | 'SHG' | 'Social Audit';
  work: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned';
}

/**
 * Initial records derived from Village development works.docx (Work & Work1)
 * and KRANTI methodology. Additional entries can be added by administrators.
 */
const INITIAL_WORKS: DevWorkItem[] = [
  {
    id: '1',
    date: '15.08.2026',
    category: 'Gram Panchayat & Sabha',
    work: 'Adoption of Village Manpur Lala & Open Consultation',
    description: 'Formal adoption of Village Manpur Lala for live demonstration of Gram Swaraj and initiation of village development consultations.',
    status: 'Completed',
  },
  {
    id: '2',
    date: '01.09.2026',
    category: 'Gram Panchayat & Sabha',
    work: 'Gram Sabha Open Dialogue & Spiritual Camp',
    description: 'Community gathering introducing Maitri Bhoj and participatory discussion on village development priorities.',
    status: 'Completed',
  },
  {
    id: '3',
    date: '25.09.2026',
    category: 'GPDP',
    work: 'Launch of KRANTI & Participatory Mapping',
    description: 'Preparation of village social map, resource map, and problem map with youth Change Agents to feed into the annual GPDP.',
    status: 'Planned',
  },
  {
    id: '4',
    date: '15.11.2026',
    category: 'SHG',
    work: 'SHG Digital Bookkeeping & Micro Investment Planning',
    description: 'Computerized documentation of women Self-Help Group accounts and preparation of household Micro Investment Plans (MIPs).',
    status: 'Planned',
  },
  {
    id: '5',
    date: '03.12.2026',
    category: 'MGNREGA',
    work: 'MGNREGA Labor Survey & Annual Work Proposal',
    description: 'Facilitating job card holders to propose rural pond deepening, plantation, and community infrastructure works.',
    status: 'Planned',
  },
  {
    id: '6',
    date: '15.01.2027',
    category: 'Social Audit',
    work: 'Social Audit in Open Meeting of Gram Sabha',
    description: 'Public verification of scheme expenditures, beneficiary entitlements, and community asset records to ensure 100% transparency.',
    status: 'Planned',
  },
];



export default function VillageDevelopmentWorks() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorks = useMemo(() => {
    return INITIAL_WORKS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.work.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.date.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <PageHero
        title="Village Development Works"
        subtitle="Chronological register and participatory documentation of public works, GPDP, MGNREGA, SHG initiatives, and social audits in Village Manpur Lala."
        gradient="forest"
      >
        <div className="flex flex-wrap gap-2 text-xs pt-1">
          <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2.5 py-1 font-semibold text-forest-900">
            <Building2 className="h-3.5 w-3.5" /> Gram Panchayat Manpur Lala
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2.5 py-1 font-semibold text-forest-900">
            <ClipboardCheck className="h-3.5 w-3.5" /> 5 Core Development Domains
          </span>
        </div>
      </PageHero>

      <Breadcrumb
        items={[
          { label: 'Model village', to: '/village-directory' },
          { label: 'Village Development Works' },
        ]}
      />

      <div className="container-px max-w-5xl mx-auto py-8 space-y-8">
        <SubNavPills items={MODEL_VILLAGE_SUB_NAV} />

        {/* 5 Domains from Work/Village development works.docx */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { label: 'Gram Panchayat & Sabha', icon: Building2, desc: 'Decentralized local democracy' },
            { label: 'GPDP', icon: FileSpreadsheet, desc: 'Panchayat Development Plan' },
            { label: 'MGNREGA', icon: Hammer, desc: 'Livelihood & asset creation' },
            { label: 'SHG', icon: Users2, desc: 'Women empowerment & credit' },
            { label: 'Social Audit', icon: ClipboardCheck, desc: 'Public accountability' },
          ].map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(selectedCategory === cat.label ? 'All' : cat.label)}
              className={cn(
                'p-3.5 rounded-xl border text-left transition-all',
                selectedCategory === cat.label
                  ? 'bg-forest-800 text-white border-forest-900 shadow-md ring-2 ring-forest-600'
                  : 'bg-white text-ink/80 border-saffron-100 hover:border-saffron-300 hover:bg-saffron-50/40 shadow-xs'
              )}
            >
              <cat.icon className={cn('h-5 w-5 mb-1.5', selectedCategory === cat.label ? 'text-saffron-300' : 'text-forest-700')} />
              <div className="font-bold text-xs leading-tight">{cat.label}</div>
              <div className={cn('text-[10px] mt-1 line-clamp-1', selectedCategory === cat.label ? 'text-forest-200' : 'text-ink/50')}>
                {cat.desc}
              </div>
            </button>
          ))}
        </div>

        {/* Works Register Table Card */}
        <div className="card-surface bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-forest-100 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-saffron-100 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-forest-950 flex items-center gap-2">
                <Hammer className="h-6 w-6 text-saffron-600" /> Development Works Register
              </h2>
              <p className="text-xs text-ink/60 mt-1">
                Structured log of development interventions (Date, Work, Description) as specified in official trust records.
              </p>
            </div>

            {/* Search filter */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search works..."
                className="pl-9 text-xs"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-2xs">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead className="bg-forest-900 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3 w-28 whitespace-nowrap">Date</th>
                  <th className="p-3 w-36 whitespace-nowrap">Category</th>
                  <th className="p-3">Work / Initiative</th>
                  <th className="p-3">Description</th>
                  <th className="p-3 w-24 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredWorks.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-xs text-ink/50">
                      No development works match the selected criteria.
                    </td>
                  </tr>
                ) : (
                  filteredWorks.map((item, idx) => (
                    <tr
                      key={item.id}
                      className={cn(
                        'transition-colors hover:bg-saffron-50/50',
                        idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/60'
                      )}
                    >
                      <td className="p-3 font-semibold text-forest-950 whitespace-nowrap align-top">
                        <span className="inline-flex items-center gap-1 font-mono text-xs">
                          <Calendar className="h-3.5 w-3.5 text-forest-600" />
                          {item.date}
                        </span>
                      </td>
                      <td className="p-3 align-top whitespace-nowrap">
                        <Badge variant="outline" className="text-[10px] font-semibold border-forest-300 text-forest-800 bg-forest-50/60">
                          {item.category}
                        </Badge>
                      </td>
                      <td className="p-3 font-bold text-forest-900 align-top leading-snug">
                        {item.work}
                      </td>
                      <td className="p-3 text-ink/80 align-top leading-relaxed text-xs">
                        {item.description}
                      </td>
                      <td className="p-3 align-top text-center">
                        <Badge
                          variant={item.status === 'Completed' ? 'default' : 'secondary'}
                          className={cn(
                            'text-[10px]',
                            item.status === 'Completed' && 'bg-emerald-600 text-white',
                            item.status === 'In Progress' && 'bg-amber-500 text-white',
                            item.status === 'Planned' && 'bg-stone-200 text-stone-700'
                          )}
                        >
                          {item.status}
                        </Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl bg-amber-50/70 border border-amber-200 p-4 text-xs text-amber-900 flex items-start gap-2">
            <Sparkles className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Live Community Record:</strong> This register documents ongoing village development works in partnership with the Gram Panchayat, Self Help Groups, and Government line departments under Project KRANTI.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
