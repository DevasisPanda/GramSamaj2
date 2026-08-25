import { Link } from 'react-router-dom';
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import { PAST_ACTIVITIES } from '@/data/events';

/**
 * Past Activities — completed activities of AIRD (2019–2026), sourced from
 * "Activity in past1.docx". Deliberately distinct from the upcoming /
 * planned KRANTI activity calendar.
 */
export function PastActivities() {
  const pa = PAST_ACTIVITIES;

  return (
    <div className="bg-white border border-forest-900 p-1.5 sm:p-2 mb-1">
      <div className="govt-header-bar mb-1.5">
        <span>Past Activities</span>
        <span className="text-[9px] text-saffron-300 font-normal">2019 &ndash; 2026</span>
      </div>

      <p className="text-[10px] text-gray-800 leading-snug mb-1.5">
        {pa.intro}
      </p>

      {/* Milestone timeline */}
      <table className="w-full text-left text-[9px] border border-gray-300 border-collapse mb-1.5">
        <thead className="bg-forest-800 text-white font-bold uppercase text-[9px]">
          <tr>
            <th className="p-1 border border-forest-700 w-28 sm:w-36">Period</th>
            <th className="p-1 border border-forest-700">Completed Activity</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {pa.milestones.map((m, i) => (
            <tr key={m.period} className={i % 2 === 0 ? 'bg-white' : 'bg-forest-50/30'}>
              <td className="p-1 font-bold text-forest-900 border-r border-gray-300 align-top leading-tight">{m.period}</td>
              <td className="p-1 text-gray-800 leading-tight">{m.text}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Expandable detail accordions */}
      <div className="space-y-1 text-[10px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="earth-day" className="border border-forest-800 bg-white">
            <AccordionTrigger className="px-2 py-1 bg-forest-800 text-white font-bold hover:no-underline text-[10px]">
              {pa.flagship.heading}
            </AccordionTrigger>
            <AccordionContent className="p-1.5">
              <ul className="grid gap-0.5 sm:grid-cols-2 text-[10px] font-medium">
                {pa.flagship.items.map((item) => (
                  <li key={item} className="bg-forest-50/50 border border-gray-200 px-1 py-0.5">
                    &bull; {item}
                  </li>
                ))}
              </ul>
              <p className="mt-1 text-[9px] text-gray-700 italic">{pa.flagship.note}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="shg" className="border border-forest-800 bg-white">
            <AccordionTrigger className="px-2 py-1 bg-forest-800 text-white font-bold hover:no-underline text-[10px]">
              {pa.shg.heading}
            </AccordionTrigger>
            <AccordionContent className="p-1.5">
              <p className="mb-1 text-[10px] text-gray-800 leading-tight">{pa.shg.intro}</p>
              <ul className="grid gap-0.5 sm:grid-cols-2 text-[10px] font-medium">
                {pa.shg.items.map((item) => (
                  <li key={item} className="bg-forest-50/50 border border-gray-200 px-1 py-0.5">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="gram-swaraj" className="border border-forest-800 bg-white">
            <AccordionTrigger className="px-2 py-1 bg-forest-800 text-white font-bold hover:no-underline text-[10px]">
              {pa.gramSwaraj.heading}
            </AccordionTrigger>
            <AccordionContent className="p-1.5">
              <p className="mb-1 text-[10px] text-gray-800 leading-tight">{pa.gramSwaraj.intro}</p>
              <ul className="grid gap-0.5 sm:grid-cols-2 text-[10px] font-medium">
                {pa.gramSwaraj.items.map((item) => (
                  <li key={item} className="bg-forest-50/50 border border-gray-200 px-1 py-0.5">
                    &bull; {item}
                  </li>
                ))}
              </ul>
              <p className="mt-1 text-[9px] text-gray-700 italic">{pa.gramSwaraj.closing}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="kranti" className="border border-forest-800 bg-white">
            <AccordionTrigger className="px-2 py-1 bg-forest-800 text-white font-bold hover:no-underline text-[10px]">
              Preparation of Project KRANTI
            </AccordionTrigger>
            <AccordionContent className="p-1.5">
              <p className="text-[10px] text-gray-800 leading-tight">{pa.kranti}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-1 text-[9px] italic font-semibold text-forest-900 bg-forest-50 p-1 text-center border-t border-forest-800">
        &ldquo;{pa.quote}&rdquo;
      </div>

      <div className="text-right border-t pt-0.5 mt-1">
        <Link to="/activities" className="govt-link text-[10px]">
          Read More Activities &amp; Event Calendar &rarr;
        </Link>
      </div>
    </div>
  );
}
