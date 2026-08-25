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
 * Every entry is drawn from the official documents: professional rows verbatim
 * from "Trustee.docx" (=A), life events from "Journey of trustee(1).docx" (=B),
 * registration facts from "AIRD in brief.docx" / annual reports.
 * NOTE: Gosianpurwa work is 2005\u201307 per Trustee.docx (not the 1980s).
 */
export const FOUNDER = {
  name: 'Kamlesh Chandra Tripathi',
  role: 'Founder & Managing Trustee',
  born: '2nd February 1958',
  bio: 'A lifelong journey of service, learning, and collective action for rural communities. Inspired by the ideals of Gram Swaraj envisioned by Mahatma Gandhi, and the spiritual teachings of Swami Vivekananda and Gautama Buddha.',
};

export const BIOGRAPHY_TIMELINE: BiographyMilestone[] = [
  {
    year: '1958',
    title: 'Born',
    description: 'Born on 2nd February 1958. Lost his father in 1974 while studying in Class 9, then devoted himself seriously to studies.',
  },
  {
    year: '1977',
    title: 'Meditation practice begins',
    description: 'Learned meditation from Shri Jitendra Bahadur Seth, a disciple of Maharishi Mahesh Yogi; studied the literature of Swami Vivekananda and the teachings of Gautam Buddha. Learned deep meditation at Maharishi Mahesh Yogi\u2019s Rishikesh Ashram in 1981.',
  },
  {
    year: '1982',
    title: 'Joins ATDA, Gandhi Bhawan',
    description: 'Began work on 31st July 1982 as Research Assistant at the Appropriate Technology Development Association (ATDA), Lucknow \u2014 learning Participatory Action Research (PAR) from Shri Varun Vidyarthi.',
  },
  {
    year: '1983\u201396',
    title: 'Research Co-ordinator, ATDA',
    description: 'Conducted PAR on forest management in Almora (1984), where he met Neera Kool, who became his life partner three years later. Initiated environmental education in UP government schools (1989, with Centre for Environmental Education, Ahmedabad) and worked on reclaiming saline wastelands. Blessed with sons in 1990 and 1995.',
  },
  {
    year: '1996\u201397',
    title: 'Executive Officer, ATDA',
    description: 'Served as Executive Officer during ATDA\u2019s difficult period, shouldering responsibility for closing the Mohanlalganj cement unit and settling employees\u2019 dues.',
  },
  {
    year: '1997\u20132003',
    title: 'Research Director, India Development Group (IDG-UK), India Chapter',
    description: 'Prepared a project proposal approved by the National Lottery Charity Board, London (worth Rs. 1.5 crores). Honoured as an expert in participatory management at a workshop in Holland.',
  },
  {
    year: '2003\u201305',
    title: 'General Manager, Sarathi Development Foundation (SDF)',
    description: 'Strengthened SDF and gained direct experience with Self-Help Groups, working with NABARD and UNICEF.',
  },
  {
    year: '2005\u201307',
    title: 'Voluntary researcher, Gosianpurwa (Barabanki)',
    description: 'As an independent researcher pursued \u201cAppropriate technique to execute Bottom to Top approach of rural development\u201d in Gosianpurwa village, Surat Ganj Block, Barabanki \u2014 voluntarily, without any project or salary, supported by the Gram Pradhan and Lions Club Lucknow Maitri.',
  },
  {
    year: '2007\u201309',
    title: 'Director (Pro.), ATDA',
    description: 'Promoted participatory development processes with social-work students of Lucknow University; built a mobile library rickshaw under OXFAM-supported project support.',
  },
  {
    year: '2009\u201314',
    title: 'CEO, Sarvajanik Shikshonnayan Sansthan (SSS)',
    description: 'Organized SSS\u2019s documentation and accounts, facilitated an AIESEC international student study across 14 countries, joined the Anna movement\u2019s fast for Lokpal, launched the \u201cHonesty in Governance\u201d movement from Kakori, and was honoured as an N.G.I. by twenty-one organizations on 12 January 2014.',
  },
  {
    year: '2016\u201317',
    title: 'CEO, ISSS \u00b7 Social Audit LCC (TISS & MoRD)',
    description: 'CEO of the International Society for Spiritual Sciences, Rishikesh (ashram site at Kothar village near Neelkanth). Since 31st July 2016, Lead Course Coordinator for Social Audit and Accountability with TISS & Ministry of Rural Development, Government of India.',
  },
  {
    year: '2019',
    title: 'Founds AIRD',
    description: 'Together with the former village head of Bari Garhi, Self-Help Group representatives and an NREGA mate, established the Appropriate Institute of Rural Development on 3rd December 2019.',
  },
  {
    year: '2020',
    title: 'Trust registered',
    description: 'AIRD registered as a Public Charitable Trust on 31st January 2020 (Reg. 9002139 IV-66/2020); Village Garhi (Malihabad, Lucknow) adopted as the demonstration village; listed on NGO Darpan in 2022 (UP/2022/0303967).',
  },
  {
    year: '2026',
    title: 'Project KRANTI ready',
    description: 'KRANTI (Key to Reform & Adopt Noble Treatment Initiatives) finalized as a comprehensive action project \u2014 launching 25th September 2026 \u2014 to establish the first live model village of participatory governance.',
  },
];
