/**
 * Long-form page content for AIRD's documented pages.
 * Sourced verbatim / closely from the official project Word documents:
 *   Vision1, Aim and objectives1, Objectives, Strategy1, Concept, Initiation,
 *   Philosophy, Journey of trustee1, Decentralised process of governance,
 *   Development in India1, Contents for HP Final, Home page final1.
 *
 * Keeping copy in a data module (matching the other `data/*.ts` files) keeps
 * JSX clean and makes editorial updates a single-file change.
 */

export interface ContentSection {
  heading?: string;
  /** Paragraph body, or pre-split paragraphs. */
  paragraphs?: string[];
  /** Optional bullet list under this heading. */
  bullets?: string[];
}

/* ------------------------------------------------------------------ */
/* Vision & Mission                                                    */
/* Source: Vision1.docx                                                */
/* ------------------------------------------------------------------ */
export const VISION_SECTIONS: ContentSection[] = [
  {
    heading: 'Our Vision',
    paragraphs: [
      'AIRD envisions rural development where every villager is an active participant, not a passive beneficiary. We believe that sustainable development is possible only when the community participates meaningfully in identifying issues, planning, implementing, managing resources, monitoring progress, conducting social audits, and ensuring transparency and accountability.',
      'Through Project KRANTI, AIRD demonstrates Gram Swaraj as a practical, participatory system of governance — building a replicable live demonstration village that integrates good governance, social accountability, digital transparency, women\u2019s empowerment, and youth leadership to realize Mahatma Gandhi\u2019s vision of Gram Swaraj.',
      'People are the most valuable resource. Government programmes and resources deliver their full benefit only when communities are empowered to use them effectively.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Aim & Objectives                                                    */
/* Source: Aim and objectives1.docx / Objectives.docx                  */
/* ------------------------------------------------------------------ */
export const AIM_STATEMENT =
  'The collective effort of AIRD is to translate Mahatma Gandhi\u2019s vision of "Gram Swaraj" into a living reality in the Gram Panchayats of India.';

export const OBJECTIVES_LIST: string[] = [
  'Conduct courses on spiritual science and meditation \u2014 "Arise! Awake! and Stop not till the goal of soul is reached."',
  'Adopt villages for evaluation and impact studies, and undertake Participatory Action Research (PAR) and Participatory Action Study (PAS) on schemes of Government, Banks, Corporate and NGOs.',
  'Guide students in Participatory Action Research for agriculture and allied sciences to sustain the environment and raise income.',
  'Promote best practices for organising the Gram Sabha, participatory planning, and social audit.',
  'Train youth in participatory planning, implementation, monitoring and evaluation; and certify them as Change Agents (CA).',
  'Facilitate Change Agents to work with Government and research institutions on agriculture, animal husbandry and allied subjects.',
  'Create opportunities for professionals and institutions to use their potential for rural development.',
  'Electronic documentation of welfare and development works on the Gram Panchayat website for stakeholder monitoring.',
  'Promote institutions of women, farmers and youth for production, processing and marketing centres.',
  'Establish an "Appropriate Ashram" to empower the members of the Gram Sabha.',
  'Develop "Appropriate Aanganbaries" (kindergarten) for the children of the rural poor.',
  'Prepare documentaries, newsletters, magazines and books on the development process.',
  'Forge partnerships with Government, Universities, Banks, Corporate, NGOs and R&D organisations.',
  'Take land on lease or donation to demonstrate farming, nurseries, schools, hospitals and similar activities.',
  'Receive funds, grants, donations, membership fees and loans to further these objectives.',
];

/* ------------------------------------------------------------------ */
/* Strategy                                                            */
/* Source: Strategy1.docx                                              */
/* ------------------------------------------------------------------ */
export const STRATEGY_INTRO =
  'AIRD follows a participatory, collaborative strategy to demonstrate Gram Swaraj in a model village. The strategy is built on shared values, multi-stakeholder partnerships, and the development of local Change Agents who can carry the process forward.';
export const STRATEGY_SECTIONS: ContentSection[] = [
  {
    heading: 'Building a foundation of values and service',
    paragraphs: [
      'Our work begins with the call to "Join Hands and Take Action." Inspired by Swami Vivekananda and Gautama Buddha, we hold that selfless service to those in need is the highest form of worship. This spiritual and ethical foundation is the wellspring of all our development work.',
    ],
  },
  {
    heading: 'Promoting multi-stakeholder partnerships',
    paragraphs: [
      'Gram Swaraj cannot be achieved by any single actor. AIRD brings together Self-Help Groups (SHGs), Gram Panchayats, Government departments, Banks, NGOs, Corporate partners, Universities and Research organisations into a common platform for collaborative action.',
    ],
  },
  {
    heading: 'Developing local Change Agents',
    paragraphs: [
      'AIRD trains rural youth on participatory planning, monitoring, evaluation and social accountability. These certified Change Agents become the backbone of the model village \u2014 facilitating the community\u2019s own governance process.',
    ],
  },
  {
    heading: 'Participatory planning and project development',
    paragraphs: [
      'We support community needs assessment and the preparation of Micro Investment Plans (MIPs) and Micro Credit Plans (MCPs), drawing on flagship programmes such as MGNREGA, DAY-NRLM and the Panchayati Raj framework.',
    ],
  },
  {
    heading: 'Strengthening the Gram Sabha and local governance',
    paragraphs: [
      'A strong Gram Sabha is the heart of people\u2019s governance. AIRD works to make Gram Sabha meetings inclusive, well-attended and decision-oriented.',
    ],
  },
  {
    heading: 'Community dialogue and social accountability',
    paragraphs: [
      'AIRD organises Maitri Bhoj (Friendship Dinners) on every Purnima and Amavasya to foster open community dialogue, and maintains electronic documentation of community feedback.',
    ],
  },
  {
    heading: 'Village information and knowledge management',
    paragraphs: [
      'A Village Information Bank is established to collect, organise and share data on village resources, services and development \u2014 the basis for transparency and evidence-based planning.',
    ],
  },
  {
    heading: 'Learning, reflection and process improvement',
    paragraphs: [
      'Each phase concludes with a workshop to reflect on lessons learned and refine a replicable model that other communities and institutions can adopt.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Concept                                                             */
/* Source: Concept.docx                                                */
/* ------------------------------------------------------------------ */
export const CONCEPT_SECTIONS: ContentSection[] = [
  {
    paragraphs: [
      'Rural development ultimately depends on two things: the effectiveness of service delivery, and the sound management of local resources. Both require transparency, accountability and active community participation.',
      'In many villages of Uttar Pradesh, participation in Gram Sabha meetings remains low, trust in institutions has eroded, and errors in the selection of BPL beneficiaries persist. The challenge is no longer the absence of schemes \u2014 it is ensuring their effective, transparent implementation.',
    ],
  },
  {
    heading: 'Opportunities created by DAY-NRLM',
    paragraphs: [
      'The National Rural Livelihoods Mission has created powerful instruments: the Participatory Identification of the Poorest of Poor (PoP), women\u2019s SHGs and their federations, and Micro Investment & Micro Credit Plans that channel resources to those who need them most.',
    ],
  },
  {
    heading: 'Opportunities created by MGNREGA and Social Audit',
    paragraphs: [
      'MGNREGA guarantees 100 days of wage employment and creates durable community assets, with a mandatory Social Audit and digital Management Information System that together enable genuine community oversight.',
    ],
  },
  {
    heading: 'The need for a demonstration village',
    paragraphs: [
      'AIRD\u2019s response is to develop a single village as a live model \u2014 showing the Gram Sabha, SHGs, the MGNREGA\u2013NRLM synergy, Social Audit, local resource management and digital transparency all working together. A working example, more than any report, convinces communities and institutions that Gram Swaraj is achievable.',
    ],
  },
  {
    heading: 'Digital transparency and knowledge sharing',
    paragraphs: [
      'This official website is itself part of the concept \u2014 an electronic window through which stakeholders can monitor development, access documents, and learn from the demonstration model.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Initiation                                                          */
/* Source: Initiation.docx                                             */
/* ------------------------------------------------------------------ */
export const INITIATION_SECTIONS: ContentSection[] = [
  {
    paragraphs: [
      'The initiative was launched on 3 December 2019, on the birthday of an Australian humanitarian living in London who has long supported underprivileged Indian communities.',
    ],
  },
  {
    heading: 'The Development Car (1999)',
    paragraphs: [
      'In 1999, she introduced the "Development Car (DC)" concept \u2014 the idea that service to those in need is itself a form of worship; that material possessions remain on earth while the blessings earned through selfless service accompany the soul on its journey.',
    ],
  },
  {
    heading: 'From research to action',
    paragraphs: [
      'Participatory Action Research (PAR) on Gram Panchayats and SHGs in the Malihabad area of Lucknow revealed both the potential and the gaps in grassroots governance. This field experience shaped a practical, participatory approach.',
    ],
  },
  {
    heading: 'The birth of KRANTI',
    paragraphs: [
      'From this foundation, AIRD formulated KRANTI \u2014 "Key to Reform and Adopt Noble Treatment Initiatives" \u2014 a one-year participatory action project in a village of Bakshi Ka Talab (BKT) Block, Lucknow, designed to establish the first live model of Gram Swaraj.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Teachings                                                           */
/* Source: Home page final1.docx + Philosophy.docx                     */
/* ------------------------------------------------------------------ */
export const TEACHINGS_SECTIONS: ContentSection[] = [
  {
    heading: 'Arise, Awake, and Stop not till the Goal is reached',
    paragraphs: [
      'Swami Vivekananda believed that the mind is the greatest force in human life. According to his philosophy, a person\u2019s life is largely shaped by the thoughts he or she constantly entertains. In this sense, life may be understood as a bundle of thoughts \u2014 because our character, actions, habits and destiny emerge from the continuous flow of our thinking.',
      'Vivekananda emphasised that every thought leaves an impression on the mind. These impressions, known in Indian philosophy as samskaras, gradually shape our personality. Good and noble thoughts strengthen character, while negative and selfish thoughts weaken it. Thus, a person\u2019s present life is the cumulative result of past thoughts, and future life will be determined by present thinking.',
    ],
  },
  {
    heading: '"Don\u2019t believe on God \u2014 come and see"',
    paragraphs: [
      'One of the distinctive features of Gautama Buddha\u2019s teaching is the principle of Ehipassiko, a Pali word meaning "come and see for yourself." This principle reflects the Buddha\u2019s emphasis on direct experience rather than blind faith.',
    ],
  },
  {
    heading: 'The Goal of the Soul',
    paragraphs: [
      'Swami Vivekananda explained the journey of human life through the metaphor of a whirlpool. The individual soul (Atman) is originally free, pure and divine. However, when it comes into contact with the world of name and form (Maya), it becomes caught in the whirlpool of worldly existence. A whirlpool is formed when flowing water begins to revolve around a centre; anything entering it is drawn into its circular motion and appears unable to escape. The soul enters the world and becomes attached to the body, family, wealth, power, desires and ego \u2014 and these attachments create the illusion of separation from the Divine.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* History of Rural Development                                        */
/* Source: Development in India1.docx                                  */
/* ------------------------------------------------------------------ */
export const HISTORY_SECTIONS: ContentSection[] = [
  {
    heading: 'Before Independence',
    paragraphs: [
      'Rural development has been a national priority in India for more than a century. Well before Independence, visionary individuals, voluntary organisations and government agencies experimented with innovative approaches to improve agriculture, livelihoods, education and village institutions.',
    ],
    bullets: [
      '1871 \u2014 Department of Agriculture established.',
      '1882 \u2014 Provincial agriculture departments created.',
      '1905 \u2014 Pusa Agriculture Research Institute, Bihar.',
      '1914 \u2014 Rabindranath Tagore\u2019s Sriniketan.',
      '1921 \u2014 Spencer Hatch\u2019s Marthandam Project (YMCA, Tamil Nadu).',
      '1928 \u2014 F. L. Brayne\u2019s Gurgaon Experiment (Punjab).',
      '1945 \u2014 Indian Village Service (Etawah / Lucknow).',
    ],
  },
  {
    heading: 'After Independence',
    paragraphs: [
      'After Independence, the Government of India introduced a series of policy reforms, development programmes and legal provisions to empower rural communities, reduce poverty and strengthen democratic governance at the village level.',
    ],
    bullets: [
      'Land Reforms \u2014 abolition of Zamindari, tenancy reforms, land ceiling and consolidation.',
      '1948 \u2014 Community Development movement; the Etawah Pilot Project (Albert Mayer); the Sarvodaya Movement (Vinoba Bhave).',
      '1952 \u2014 Nationwide Community Development Programme launched.',
      '1969 \u2014 Nationalisation of banks.',
      '1971 \u2014 Abolition of Privy Purses.',
      '1974 \u2014 Department of Rural Development established.',
      '1978\u201380 \u2014 Integrated Rural Development Programme (IRDP).',
      '1982 \u2014 NABARD founded.',
      '1991 \u2014 Economic liberalisation (LPG reforms).',
      '1993 \u2014 The 73rd Constitutional Amendment grants constitutional status to Panchayati Raj Institutions.',
      '1999 \u2014 SGSY and the Self-Help Group movement.',
    ],
  },
  {
    heading: 'The challenge today',
    paragraphs: [
      'India today possesses one of the world\u2019s most comprehensive rural development systems. The challenge is no longer the absence of schemes but ensuring their effective implementation through transparency, accountability and active community participation.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Decentralized Process of Governance                                 */
/* Source: Decentralised process of governance.docx                    */
/* ------------------------------------------------------------------ */
export const DECENTRALISED_SECTIONS: ContentSection[] = [
  {
    paragraphs: [
      'The 73rd Constitutional Amendment Act, which came into effect in 1993, marked a significant milestone in India\u2019s decentralisation process by granting constitutional status to the Panchayati Raj Institutions (PRIs) and recognising the Gram Sabha as the cornerstone of grassroots democracy. The amendment sought to empower rural communities by promoting participatory decision-making, decentralised planning and local self-governance.',
    ],
  },
  {
    heading: 'Flagship programmes',
    paragraphs: [
      'To operationalise these constitutional provisions, the Government of India has introduced several flagship programmes, including the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), the Deendayal Antyodaya Yojana \u2013 National Rural Livelihoods Mission (DAY-NRLM), and the Gram Panchayat Development Plan (GPDP). These initiatives emphasise community participation in planning, implementation and monitoring of rural development programmes. The Social Audit mechanism, conducted in open meetings of the Gram Sabha, has been institutionalised to promote transparency, strengthen accountability and enable citizens to monitor the use of public resources and the delivery of government services.',
    ],
  },
  {
    heading: 'The gap that remains',
    paragraphs: [
      'Despite this robust institutional and policy framework, the intended level of people\u2019s participation has not been fully realised in many villages. Attendance and meaningful participation in Gram Sabha meetings and Social Audit processes often remain low. Coordination among the Gram Panchayat, Self-Help Groups (SHGs), Village Organisations (VOs), government functionaries and other local institutions is frequently inadequate. Limited public awareness of government programmes, citizens\u2019 rights and entitlements, and participatory planning processes constrains effective community engagement.',
      'As a result, the potential of decentralised governance and Gram Swaraj remains only partially achieved \u2014 highlighting the need for innovative, community-driven approaches of the kind AIRD demonstrates through Project KRANTI.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Development in India (overview page)                                */
/* ------------------------------------------------------------------ */
export const DEVELOPMENT_INDIA_INTRO =
  'India possesses one of the world\u2019s most comprehensive rural development systems. Yet the challenge is no longer the absence of schemes but ensuring their effective implementation through transparency, accountability and active community participation. Explore the full historical timeline on the History of Rural Development page.';

/* ------------------------------------------------------------------ */
/* Development Car                                                     */
/* Source: Home page final1.docx                                       */
/* ------------------------------------------------------------------ */
export const DEVELOPMENT_CAR_SECTIONS: ContentSection[] = [
  {
    paragraphs: [
      'Human beings are a unique combination of body and soul \u2014 two distinct entities existing as one. The body is created through our parents, while the soul is a gift from an invisible, higher power. The body is visible and temporary; the soul is invisible and, according to many spiritual traditions, eternal.',
      'The soul enters the visible world to experience life on Earth. One may imagine that every soul is provided with an invisible Development Car (DC) by the Supreme Power for this journey. This Development Car, together with its invisible driver, accompanies the soul throughout its stay on Earth. Although unseen, the driver remains with the soul until the moment of its return to the invisible realm. The time, date and manner of every soul\u2019s departure from Earth are fixed, yet they remain unknown to human beings.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Journey of the Trustee                                              */
/* Source: Journey of trustee1.docx                                    */
/* ------------------------------------------------------------------ */
export const JOURNEY_INTRO =
  'The role of a trustee is a lifelong commitment to service \u2014 listening to villagers, practising a participatory approach, building a model village alongside SHGs, the Gram Panchayat and young Change Agents, treating every challenge as a lesson, and upholding transparency and moral values at every step.';
export const JOURNEY_PARAGRAPHS: string[] = [
  'Born in 1958, K. C. Tripathi lost his father in 1974. His early spiritual formation drew on the meditation lineage of Neem Karoli Baba, the literature of Swami Vivekananda, and the teachings of Maharishi Mahesh Yogi, whom he met in 1977, later travelling to Rishikesh in 1981.',
  'In 1982 he joined the Appropriate Technology Development Association (ATDA), Gandhi Bhavan, under the mentorship of Varun Vidyarthi, where he learned Participatory Action Research \u2014 the method that would shape his life\u2019s work. He married Neera (n\u00e9e Kool) in 1986.',
  'His field work spans forest management in Almora (1984), environmental education (1989, with the Centre for Environmental Education, Ahmedabad), and the reclamation of saline wastelands. He rose to become ATDA\u2019s Executive Officer and navigated complex institutional challenges, supported by mentors including Col. Man Singh and trade-union leader Shiv Gopal Mishra.',
  'He worked with the India Development Group (UK), volunteered in Gosai Purwa and the Banarki Gram Sabha (Suratganj Block, Barabanki), and participated in the Lions Club Lucknow Maitri, the anti-corruption movement of Anna Hazare, and the "Honesty in Governance" movement launched from Kakori in 2014. On 12 January 2014 he was honoured as a Non-Government Institution (NGI).',
  'He later served as CEO of ISSS with Dr. Manjul Kant Dwivedi in Rishikesh and worked with the State Institute of Rural Development (SIRD) as a national social-audit trainer. This long journey of listening, learning and serving culminated in the founding of AIRD and the design of Project KRANTI.',
];
