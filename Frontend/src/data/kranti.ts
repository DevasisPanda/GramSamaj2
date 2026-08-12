/**
 * Project KRANTI phases — from "Project KRANTI.docx" and
 * "Activity planned for 2026-2027.docx".
 * Launch: 25th September 2026 (Bakshi ka Talab block, Lucknow).
 */

export interface KrantiPhase {
  id: number;
  title: string;
  window: string;
  description: string;
  deliverables: string[];
}

export const KRANTI = {
  fullName: 'Key to Reform & Adopt Noble Treatment Initiatives',
  shortName: 'KRANTI',
  tagline: 'Participatory Action Project to demonstrate process of village digitalization and strengthening people\u2019s governance \u2014 not on paper but in village.',
  launchDate: '2026-09-25',
  location: 'Bakshi ka Talab block, Lucknow, Uttar Pradesh',
  aim: 'To develop a village as a live model that demonstrates the process of strengthening people\u2019s governance and participatory development \u2014 not only in theory but through real community participation and action at the village level.',
} as const;

export const KRANTI_PHASES: KrantiPhase[] = [
  {
    id: 1,
    title: 'Baseline & PIT Formation',
    window: '15 Aug 2026',
    description:
      'Selection of the model village, community consultations, formation of the Project Implementation Team (PIT), and baseline village information collection.',
    deliverables: ['Model village selected', 'PIT constituted', 'Baseline census captured'],
  },
  {
    id: 2,
    title: 'Spiritual Activation & Maitri Bhoj',
    window: '1 Sep \u2013 2 Oct 2026',
    description:
      'Organization of spiritual camps, community meetings, introduction of Maitri Bhoj gatherings, and awareness on Gram Swaraj and participatory governance.',
    deliverables: ['Spiritual camps held', 'Maitri Bhoj initiated on Pooranmasi/Amavasya', 'Gram Swaraj awareness drive'],
  },
  {
    id: 3,
    title: 'Youth Change Agent Capacity Training',
    window: '25 Sep \u2013 30 Nov 2026',
    description:
      'Practical training of rural youth, preparation of social maps, resource maps, and problem maps, awareness on government schemes, and establishment of the e-information bank.',
    deliverables: ['Youth certified as Change Agents', 'Social/resource/problem maps', 'e-Information bank live'],
  },
  {
    id: 4,
    title: 'Participatory Action Study (PAS)',
    window: '15 Nov 2026 \u2013 2 Feb 2027',
    description:
      'Study and documentation of the functioning of Gram Sabha, Gram Panchayat committees, SHGs, MGNREGA activities, and social audit processes.',
    deliverables: ['PAS report drafted', 'Social audit documented', 'Institutional mapping done'],
  },
  {
    id: 5,
    title: 'Collective Action & Department Interfacing',
    window: '3 Dec 2026 \u2013 2 Feb 2027',
    description:
      'Identification of the priority village issue, formation of working groups, interface meetings with government departments, development of an action plan, and strengthening collaboration between SHGs and the Gram Panchayat.',
    deliverables: ['Priority issue identified', 'Working groups formed', 'Govt. department interfaces held', 'Action plan approved'],
  },
  {
    id: 6,
    title: 'Implementation, Monitoring & Web Updates',
    window: '2 Oct 2026 \u2013 ongoing',
    description:
      'Implementation of community action initiatives, regular Gram Sabha, documentation of progress, updates on the project website, and presentation of findings in open meetings with community and government officials.',
    deliverables: ['Community action implemented', 'Gram Sabha regularized', 'Progress on project website', 'Open findings meetings'],
  },
  {
    id: 7,
    title: 'Final Evaluation & Phase II Expansion',
    window: '11\u201315 Aug 2027',
    description:
      'Final evaluation workshop, presentation of project reports, documentation of best practices, and preparation for KRANTI Phase II \u2014 replication across DDU-SIRD\u2019s 17 RIRDs.',
    deliverables: ['Evaluation workshop held', 'Best practices documented', 'Phase II replication plan ready'],
  },
];

/** Ongoing KRANTI activities that run continuously through the project. */
export const KRANTI_CONTINUOUS = [
  'Maitri Bhoj (community dinners) on every Pooranmasi and Amavasya for feedback, dialogue, and electronic documentation of the state of the village.',
  'Open meetings of the community (Gram Sabha).',
  'Monitoring of SHG and MGNREGA activities.',
  'Planning to involve people and institutions to join hands in developing the village as a live model.',
  'Regular website updates.',
];
