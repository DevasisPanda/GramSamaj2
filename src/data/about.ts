/** About-page content: Aim, Objectives, and the Founder's biography timeline. */

export const AIRD_AIM =
  'Attempt to make collective effort of people and institutions for translating the pending dream of Mahatma Gandhi \u201cGram Swaraj\u201d into reality, not only on paper but really in Gram Panchayat/s.';

export const AIRD_OBJECTIVES: string[] = [
  'Organize courses on spiritual science and meditation to let the people Arise! Awake! and Stop not till the goal of soul is reached.',
  'Adopt village/s to conduct evaluation study, impact study, Participatory Action Research (PAR) and Participatory Action studies (PAS) on various schemes, projects and campaigns of the Govt., Banks, Corporate and Non Govt. Organizations.',
  'Guide students for conducting participatory action research in adopted villages to evolve and demonstrate appropriate practices of agriculture and allied sciences that may sustain environment and provide higher income to people.',
  'Evolve and promote best practices of organizing community for Gram Sabha to make appropriate plan for their betterment and conduct social audit of developmental interventions.',
  'Organize courses for youth on appropriate process of participatory planning, implementation, monitoring and evaluation of rural development interventions and certify them as Change Agent (CA).',
  'Facilitate CAs to work with Govt. departments/agencies and research institutions for promotion of appropriate practices of agriculture and animal husbandry to regenerate village eco system.',
  'Create opportunities for professionals, individuals and institutions to utilize their potential optimally for modifying the process of planning, implementing, monitoring and evaluating village level interventions.',
  'Promote and present electronic documentation of community welfare and village development activities in the website of Gram Panchayat.',
  'Promote institutions of women, farmers and youth to establish production, processing and marketing centers for an increase in income of rural poor and betterment of environment.',
  'Establish Appropriate Ashram to demonstrate the process of empowering members of Gram Sabha to address local specific issues in a collaborative manner.',
  'Develop and demonstrate Appropriate Aaganbaries (Kindergarten) for better grooming of rural poor children.',
  'Develop documentaries, publish newsletters, papers, magazines and books on the process of development with achievements and activities of AIRD.',
  'Establish partnerships with Government, Universities, Banks, Corporate, NGOs, CBOs, R&D Organizations, Foundations and Funding Organizations.',
  'Take land on lease, donation and fee to demonstrate appropriate farming systems, establish nurseries, agriculture input production units, schools, and hospitals in rural India.',
  'Receive funds, grants, donations, membership fees and loans to achieve the objectives mentioned above.',
];

export interface BiographyMilestone {
  year: string;
  title: string;
  description: string;
}

/**
 * Founder biography timeline — Kamlesh Chandra Tripathi (born 2 Feb 1958).
 * Condensed from the trust documents covering the 40+ year journey.
 */
export const FOUNDER = {
  name: 'Kamlesh Chandra Tripathi',
  role: 'Founder & Managing Trustee',
  born: '2nd February 1958',
  bio: 'A lifelong journey of service, learning, and collective action for rural communities. Inspired by the ideals of Gram Swaraj envisioned by Mahatma Gandhi, and the spiritual teachings of Swami Vivekananda and Gautama Buddha.',
};

export const BIOGRAPHY_TIMELINE: BiographyMilestone[] = [
  { year: '1958', title: 'Birth', description: 'Born on 2nd February 1958.' },
  { year: '1982', title: 'ATDA, Gandhi Bhawan', description: 'Began the journey in rural development at ATDA, Gandhi Bhawan.' },
  { year: '1980s', title: 'Research in Gosianpurwa', description: 'Participatory action research in and around village Gosianpurwa, developing a community-based mobilization approach.' },
  { year: '1993', title: '73rd Constitutional Amendment', description: 'Witnessed the landmark amendment granting constitutional status to Panchayati Raj Institutions and the Gram Sabha.' },
  { year: '2010s', title: 'Field Experience in Barhi Garhi', description: 'Years of Participatory Action Research in Barhi Garhi, Malihabad, Lucknow, evolving the participatory governance approach.' },
  { year: '2019', title: 'Creation of AIRD', description: 'Conceptualized and established the Appropriate Institute of Rural Development to formalize decades of field learning.' },
  { year: '2020', title: 'Trust Registered', description: 'AIRD registered under the Public Charitable Trust Act (PCTA) 1882 on 31st January 2020 (Reg. 9002139 IV-66/2020).' },
  { year: '2022', title: 'NGO Darpan Recognition', description: 'Listed on NGO Darpan (UP/2022/0303967), enabling formal partnerships.' },
  { year: '2026', title: 'Project KRANTI', description: 'Planning the launch of KRANTI \u2014 a live model village demonstrating participatory governance, expanding across DDU-SIRD\u2019s 17 RIRDs.' },
];
