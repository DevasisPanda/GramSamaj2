import { Link } from 'react-router-dom';
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import { HUMAN_HUMANITY } from '@/data/homepage';

const CARDS = [
  {
    id: 'intro',
    title: 'Fundamental Questions',
    summary: 'Every religion attempts to answer the fundamental questions of human life.',
    body: HUMAN_HUMANITY.intro,
  },
  {
    id: 'body-soul',
    title: 'Body & Soul',
    summary: 'A human being is a unique combination of a visible body and an invisible soul.',
    body: HUMAN_HUMANITY.bodyAndSoul,
  },
  {
    id: 'before-religion',
    title: 'Humanity Before Religion',
    summary: 'Humanity existed before organized religions. Unity beyond all divisions.',
    body: HUMAN_HUMANITY.humanityBeforeReligion,
  },
  {
    id: 'universal',
    title: 'Universal Power',
    summary: 'One universal and invisible power known by different names.',
    body: HUMAN_HUMANITY.universalPower,
  },
];

export function HumanitySection() {
  return (
    <div className="bg-white border border-forest-900 p-1.5 sm:p-2.5 w-full min-w-0 box-border">
      <div className="govt-header-bar mb-1.5">
        <span>Human &amp; Humanity &bull; Essence</span>
      </div>

      <p className="text-[10px] text-gray-800 mb-1.5 leading-snug break-words">
        AIRD recognises that every person is born first as a human being. Divisions come later. Service to the needy is worship of the Almighty.
      </p>

      <div className="space-y-1 mb-1.5 text-[10px]">
        {CARDS.map((card) => (
          <div key={card.id} className="border-b border-gray-200 pb-1">
            <div className="font-bold text-forest-900 flex items-center justify-between gap-1">
              <span className="break-words min-w-0">&bull; {card.title}</span>
            </div>
            <p className="text-gray-700 leading-tight mb-0.5 break-words">{card.summary}</p>
            <Accordion type="single" collapsible>
              <AccordionItem value={card.id} className="border-0">
                <AccordionTrigger className="py-0 text-[9px] text-saffron-800 font-bold hover:no-underline">
                  Read detail &raquo;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[9px] text-gray-700 leading-tight border-t pt-0.5 mt-0.5 break-words">{card.body}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-saffron-600 bg-saffron-50 p-1 text-[9px] italic font-semibold text-saffron-950 mb-1.5 break-words">
        &ldquo;{HUMAN_HUMANITY.closing}&rdquo;
      </div>

      <div className="text-right border-t pt-0.5">
        <Link to="/human-and-humanity" className="govt-link text-[10px] block">
          Read Full Human &amp; Humanity Text &rarr;
        </Link>
        <Link to="/philosophy" className="govt-link text-[10px]">
          Read More Philosophy &amp; Humanity &rarr;
        </Link>
      </div>
    </div>
  );
}


