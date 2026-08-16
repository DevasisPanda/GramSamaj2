import { Link } from 'react-router-dom';
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import { PEOPLES_GOVERNANCE } from '@/data/homepage';

export function GramSwarajSection() {
  const pg = PEOPLES_GOVERNANCE;

  return (
    <div className="bg-white border border-forest-900 mb-2 p-2 sm:p-3">
      {/* Header bar */}
      <div className="govt-header-bar mb-2">
        <span>Gram Swaraj &bull; People's Governance</span>
        <span className="text-[9px] text-saffron-300 font-normal">73rd Amendment</span>
      </div>

      {/* Definition */}
      <div className="text-[11px] text-gray-900 border-l-2 border-forest-800 bg-forest-50/50 p-2 mb-2 leading-tight">
        <span className="font-bold text-forest-900 block mb-0.5 uppercase tracking-wide text-[10px]">
          Institutional Vision
        </span>
        {pg.definition}
      </div>

      {/* 73rd Amendment Box */}
      <div className="border border-saffron-600 bg-saffron-50/80 p-2 mb-2 text-[11px] text-gray-900 leading-tight">
        <div className="font-bold text-saffron-950 uppercase border-b border-saffron-300 pb-0.5 mb-0.5 text-[10px]">
          73rd Constitutional Amendment Act, 1992:
        </div>
        {pg.amendment}
      </div>

      {/* Expandable Portal Accordions */}
      <div className="space-y-1 text-xs">
        {/* Resource Management */}
        <Accordion type="single" collapsible>
          <AccordionItem value="resource" className="border border-forest-800 bg-white">
            <AccordionTrigger className="px-2 py-1 bg-forest-800 text-white font-bold hover:no-underline text-xs">
              <span>Resource Management &bull; {pg.resourceManagement.items.length} Resources</span>
            </AccordionTrigger>
            <AccordionContent className="p-2">
              <p className="mb-1 text-[11px] text-gray-800">{pg.resourceManagement.intro}</p>
              <table className="w-full text-left border-collapse border border-gray-300 mb-1 text-[11px]">
                <tbody>
                  {pg.resourceManagement.items.map((item, i) => (
                    <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-forest-50/30'}>
                      <td className="p-1 border border-gray-300 font-semibold text-forest-900 w-6 text-center">{i + 1}.</td>
                      <td className="p-1 border border-gray-300 text-gray-800">{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Service Delivery */}
        <Accordion type="single" collapsible>
          <AccordionItem value="service" className="border border-forest-800 bg-white">
            <AccordionTrigger className="px-2 py-1 bg-forest-800 text-white font-bold hover:no-underline text-xs">
              <span>Service Delivery &bull; {pg.serviceDelivery.items.length} Schemes</span>
            </AccordionTrigger>
            <AccordionContent className="p-2">
              <p className="mb-1 text-[11px] text-gray-800">{pg.serviceDelivery.intro}</p>
              <ul className="grid gap-1 sm:grid-cols-2 mb-1 text-[11px] font-medium">
                {pg.serviceDelivery.items.map((item) => (
                  <li key={item} className="bg-saffron-50 border border-saffron-200 p-1">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Gram Sabha */}
        <Accordion type="single" collapsible>
          <AccordionItem value="gramsabha" className="border border-forest-800 bg-white">
            <AccordionTrigger className="px-2 py-1 bg-forest-800 text-white font-bold hover:no-underline text-xs">
              <span>Gram Sabha Powers &amp; Functions</span>
            </AccordionTrigger>
            <AccordionContent className="p-2">
              <p className="mb-1 text-[11px] text-gray-800">{pg.gramSabha.intro}</p>
              <table className="w-full text-left border-collapse border border-gray-300 text-[11px]">
                <tbody>
                  {pg.gramSabha.items.map((item, i) => (
                    <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-forest-50/30'}>
                      <td className="p-1 border border-gray-300 font-semibold text-forest-900 w-6 text-center">{i + 1}.</td>
                      <td className="p-1 border border-gray-300 text-gray-800">{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="text-right pt-2 mt-2 border-t border-forest-800">
        <Link to="/kranti/decentralized-governance" className="govt-link">
          Read Detailed Governance Guidelines &rarr;
        </Link>
      </div>
    </div>
  );
}



