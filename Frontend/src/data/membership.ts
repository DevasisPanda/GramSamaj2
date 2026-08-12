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

/** Benefits of membership — from "Benefits.docx". */
export const MEMBERSHIP_BENEFITS: { title: string; body: string }[] = [
  { title: 'Participate in Village Development Meetings', body: 'Join community meetings and Maitri Bhoj on every Pooranmasi and Amavasya to discuss local issues, strengthen social harmony, and improve public service delivery.' },
  { title: 'Meaningful Interaction with Rural Communities', body: 'Develop one-to-one relationships with villagers to understand their aspirations, exchange knowledge, and identify opportunities for mutual learning.' },
  { title: 'Experience Rural Life', body: 'Members who wish to stay in the village are welcomed as guests by local families \u2014 experiencing traditional rural hospitality, food, culture, and community life.' },
  { title: 'Work with Community Institutions', body: 'Collaborate directly with Self-Help Groups, Gram Panchayats, youth groups, and farmer groups to strengthen local governance.' },
  { title: 'Research and Field Learning', body: 'Undertake village studies, impact assessments, Participatory Action Research, and social audits.' },
  { title: 'Practical Training in Rural Development', body: 'Hands-on experience in participatory planning, implementation, monitoring, evaluation, and social accountability.' },
  { title: 'Contribute Professional Expertise', body: 'Apply your skills in agriculture, livelihoods, education, health, environment, governance, or digital documentation.' },
  { title: 'Networking Opportunities', body: 'Interact with government departments, universities, NGOs, corporates, financial institutions, and community-based organizations.' },
];

export const JOIN_ROLES = ['Volunteer', 'Learner', 'Researcher', 'Partner'] as const;
export type JoinRole = (typeof JOIN_ROLES)[number];
