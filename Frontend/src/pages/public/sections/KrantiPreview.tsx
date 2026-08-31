import { Link } from 'react-router-dom';
import { CalendarClock } from 'lucide-react';
import { KRANTI_HOME } from '@/data/homepage';
import { KRANTI, KRANTI_PHASES } from '@/data/kranti';
import { cn, formatDate } from '@/lib/utils';

export function KrantiPreview() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 sm:p-2.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-2">
        <span>Project KRANTI &bull; 7-Phase Action Roadmap</span>
        <span className="text-[9px] text-saffron-300 font-normal">Blueprint</span>
      </div>

      <div className="text-[11px] text-gray-900 border-l-2 border-saffron-600 bg-saffron-50 p-2 mb-2 leading-tight break-words">
        <span className="font-bold text-saffron-950 block mb-0.5 text-[10px]">
          Key to Reform and Adopt Noble Treatment Initiatives (KRANTI)
        </span>
        {KRANTI_HOME.aim}
        <span className="mt-1 flex flex-wrap items-center gap-1 font-semibold text-forest-800">
          <CalendarClock className="h-3 w-3 shrink-0" />
          <span>Launching {formatDate(KRANTI.launchDate)} &bull; {KRANTI.location}</span>
        </span>
      </div>

      {/* 5 Core Pillars Table */}
      <div className="mb-2">
        <div className="govt-title text-xs">Five Core Pillars</div>
        <div className="grid gap-1 grid-cols-2 sm:grid-cols-5 text-[10px] text-center font-bold">
          {KRANTI_HOME.components.map((comp, i) => (
            <div key={comp} className={cn("bg-forest-800 text-white p-1 border border-forest-900", i === 4 ? "col-span-2 sm:col-span-1" : "")}>
              <span className="text-[9px] block text-saffron-300">Pillar {i + 1}</span>
              <span className="break-words">{comp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7 Phases Matrix Table */}
      <div className="mb-2">
        <div className="govt-title text-xs">7-Phase Implementation Matrix</div>
        <div className="overflow-x-auto max-w-full border border-forest-800">
          <table className="w-full text-left text-[10px] border-collapse min-w-[260px]">
            <thead className="bg-forest-800 text-white uppercase text-[9px] font-bold">
              <tr>
                <th className="p-1 border border-forest-700 w-12 text-center">Phase</th>
                <th className="p-1 border border-forest-700 w-36">Title</th>
                <th className="p-1 border border-forest-700">Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {KRANTI_PHASES.map((phase, idx) => (
                <tr key={phase.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-forest-50/40'}>
                  <td className="p-1 border border-gray-300 text-center font-bold text-forest-900 bg-saffron-50">
                    Phase {phase.id}
                  </td>
                  <td className="p-1 border border-gray-300 font-bold text-gray-900 break-words">
                    {phase.title}
                  </td>
                  <td className="p-1 border border-gray-300 text-gray-800 leading-tight break-words">
                    {phase.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-right pt-1.5 border-t border-forest-800">
        <Link to="/kranti" className="govt-link">
          Explore Complete KRANTI Blueprint &rarr;
        </Link>
      </div>
    </div>
  );
}


