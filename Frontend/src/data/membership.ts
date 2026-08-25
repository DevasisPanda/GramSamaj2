import type { MembershipCategory } from '@/lib/types';

export interface MembershipTier {
  id: MembershipCategory;
  name: string;
  eligibility: string;
  annual: number | null; // INR, null = not applicable
  life: number | null; // INR, null = not applicable
  highlight?: boolean;
}

/** Membership categories & subscription — verbatim from "Types of member and membership fee.docx". */
export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'GENERAL',
    name: 'General Member',
    eligibility: 'Students, villagers, volunteers, and individuals interested in rural development.',
    annual: 10,
    life: null,
  },
  {
    id: 'SPECIAL',
    name: 'Special Member',
    eligibility: 'Professionals, teachers, researchers, development practitioners, and supporters.',
    annual: 100,
    life: 500,
    highlight: true,
  },
  {
    id: 'EXECUTIVE',
    name: 'Executive Member',
    eligibility:
      'Individuals willing to actively guide, support, and participate in AIRD\u2019s programmes and institutional development.',
    annual: 1000,
    life: 5000,
  },
];

export const MEMBERSHIP_MOTTO =
  'Join Hands \u2022 Learn Together \u2022 Serve Together \u2022 Build Gram Swaraj';

/**
 * Client ruling (D2): both fee documents stand. The General member annual fee
 * of Rs. 10 (Types of member and membership fee.docx) is a MINIMUM DONATION
 * entry point; the higher slabs are the standard rates per
 * "Membership and fee.docx".
 */
export const MEMBERSHIP_MIN_DONATION_NOTE =
  'The General Member annual contribution of \u20b910 is a minimum donation \u2014 an entry point for students, villagers, and volunteers. Standard contributions are as per the Special and Executive slabs above.';

/** Benefits of membership — complete content from "Benefits of memeber.docx". */
export const MEMBERSHIP_INTRO =
  'AIRD believes that every member is not merely a supporter but a partner in building a live model of Gram Swaraj. Membership offers opportunities for learning, service, research, networking, and active participation in community-led rural development. Members may contribute according to their interests, expertise, and availability while working alongside rural communities.';

export const MEMBERSHIP_CLOSING =
  'AIRD is committed to providing its members with an enriching platform where learning is combined with service, research is combined with action, and personal growth is combined with social responsibility. Every member is encouraged to become a catalyst for positive change and contribute to building stronger, self-reliant, and participatory rural communities.';

/** Benefits specific to each membership category — "Benefits of memeber.docx". */
export const MEMBERSHIP_CATEGORY_BENEFITS: { id: MembershipCategory; title: string; body: string }[] = [
  {
    id: 'GENERAL',
    title: 'General Members',
    body: 'General Members receive regular updates on AIRD\u2019s activities and are encouraged to participate in field visits, community meetings, research, and volunteer activities. They will receive quarterly reports highlighting the achievements of KRANTI, along with the constraints, facilitating factors, lessons learned, and future plans.',
  },
  {
    id: 'SPECIAL',
    title: 'Special Members',
    body: 'Special Members enjoy all the benefits of General Membership and are invited to participate in Maitri Bhoj (Community Dinner) organized on every Pooranmasi (Full Moon) and Amavasya (New Moon) in the model village. These gatherings provide opportunities for dialogue with villagers, sharing experiences, strengthening social harmony, and promoting community participation.',
  },
  {
    id: 'EXECUTIVE',
    title: 'Executive Members',
    body: 'Executive Members are invited to participate in meetings of the Board of Trustees to provide strategic guidance and professional advice for strengthening AIRD\u2019s programmes. Their experience and expertise contribute to achieving AIRD\u2019s vision of demonstrating Gram Swaraj through a live village model rather than only through theoretical discussions or documents.',
  },
];

/** Opportunities open to every member — "Benefits of memeber.docx". */
export const MEMBERSHIP_BENEFITS: { title: string; body: string }[] = [
  { title: 'Participate in Community Development', body: 'Take part in village meetings, Gram Sabha discussions, and Maitri Bhoj to understand local issues, promote social harmony, strengthen public service delivery, and support sustainable management of village resources.' },
  { title: 'Build Meaningful Relationships', body: 'Develop direct friendships with villagers through one-to-one interaction, enabling mutual learning, exchange of ideas, and collaborative action for community development.' },
  { title: 'Experience Rural Life', body: 'Members wishing to stay in the village will be welcomed as guests by local families, providing a unique opportunity to experience rural hospitality, traditional food, local culture, and everyday village life.' },
  { title: 'Work with Village Institutions', body: 'Collaborate directly with Self-Help Groups (SHGs), Gram Panchayats, Village Organizations, youth groups, farmers\u2019 groups, and other community institutions to strengthen participatory governance and local development.' },
  { title: 'Participate in Research and Action Learning', body: 'Engage in village studies, Participatory Action Research (PAR), social audits, impact assessments, and documentation of best practices to better understand rural development challenges and practical solutions.' },
  { title: 'Practical Training', body: 'Gain hands-on experience in community mobilization, participatory planning, project implementation, monitoring, evaluation, digital documentation, and social accountability systems.' },
  { title: 'Apply Professional Skills', body: 'Professionals, researchers, students, and volunteers can contribute their expertise in agriculture, livelihoods, education, health, environment, governance, information technology, finance, communication, research, and other development sectors.' },
  { title: 'Networking and Collaboration', body: 'Interact with government departments, universities, research institutions, NGOs, corporate organizations, financial institutions, and development professionals working towards sustainable rural development.' },
  { title: 'Recognition and Certification', body: 'Members who make significant contributions to the implementation of Project KRANTI may receive certificates of participation, appreciation, or recognition. Outstanding volunteers may also be considered for future opportunities as project associates.' },
  { title: 'Learn from a Live Demonstration Model', body: 'Observe and participate in the planning, implementation, monitoring, and social audit of development programmes in a real village setting — valuable practical exposure beyond classroom teaching and conventional training programmes.' },
  { title: 'Contribute to Gram Swaraj', body: 'Become part of a collective movement to establish a live model of Gram Swaraj, demonstrating transparency, accountability, people\u2019s participation, women\u2019s empowerment, youth leadership, and sustainable management of local resources.' },
];

/** Declaration groups from the official "Membership form.docx". */
export const MEMBERSHIP_DECLARATIONS = {
  agree: {
    heading: 'I Agree',
    items: [
      'to participate in meetings of KRANTI.',
      'to participate in village level activities of KRANTI.',
    ],
  },
  wish: {
    heading: 'I Wish to work from home',
    items: [
      'to support village information management system.',
      'to support in office management / event management.',
    ],
  },
  may: {
    heading: 'I May',
    items: [
      'visit village to work and enjoy rural environment.',
      'stay in village to learn development process existing in village.',
      'work from home to contribute in working and presentation of KRANTI.',
    ],
  },
  lookingForward: {
    heading: 'I am looking forward',
    items: [
      'to plan and implement income generating activity in partnership with self help group of women.',
      'to conduct study on attempt for Gram Swaraj through KRANTI and publish paper.',
    ],
  },
} as const;

export const JOIN_ROLES = ['Volunteer', 'Learner', 'Researcher', 'Partner'] as const;
export type JoinRole = (typeof JOIN_ROLES)[number];
