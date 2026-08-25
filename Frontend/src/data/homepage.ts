/**
 * Homepage-specific content blocks.
 *
 * Sources (verbatim / closely from official documents):
 *  - Contents for HP Final.docx       -> AIRD_NARRATIVE, PEOPLES_GOVERNANCE,
 *                                       DECENTRALISED_GOVERNANCE, DEV_CAR_HOME,
 *                                       KRANTI_HOME, DEV_INDIA_HOME, ARISE_AWAKE,
 *                                       GOAL_OF_SOUL, EHIPASSIKO_HOME,
 *                                       DEMO_VILLAGE
 *  - People's governance in development.docx -> PEOPLES_GOVERNANCE
 *  - Decentralised process of governance.docx -> DECENTRALISED_GOVERNANCE
 *  - Development Car.docx             -> DEV_CAR_HOME
 *  - Project KRANTI.docx              -> KRANTI_HOME
 *  - Arise! Awake and Stop not.docx  -> ARISE_AWAKE
 *  - Goal of soul.docx               -> GOAL_OF_SOUL
 *  - Dont believe on God.docx        -> EHIPASSIKO_HOME
 *  - Human life.docx                  -> HUMAN_HUMANITY
 *  - Development in India1.docx      -> DEV_INDIA_HOME
 *  - Home page.docx                  -> WHO_CAN_JOIN
 *
 * This module holds the long-form "Read more" content so the homepage JSX
 * stays readable. No content here is invented; all of it is drawn from the
 * supplied AIRD documents.
 */

/* ------------------------------------------------------------------ */
/* AIRD narrative (About intro) — Contents for HP Final lines 1-7       */
/* ------------------------------------------------------------------ */
export const AIRD_NARRATIVE = {
  short: [
    'The Appropriate Institute for Rural Development (AIRD), a non-profit charitable trust committed to strengthening people\u2019s governance (Gram Swaraj), was established on the birthday of an Australian humanitarian living in London, whose philosophy of the Development Car (DC) inspired the organization. The DC enhances spiritual values and motivates to earn the blessings of those in need through compassion and community service.',
    'Drawing upon years of participatory action research and field experience, AIRD has evolved an innovative community-based process for improving transparency, accountability, and participatory management of local resources and public services at the Gram Panchayat level.',
  ],
  more: [
    'To demonstrate this approach, the need is to develop a village as a live demonstration model on the process of strengthening Gram Swaraj. The initiative aims to strengthen Self-Help Groups (SHGs), Gram Panchayats, and village institutions while building the capacity of rural youth and women as Change Agents capable of facilitating participatory planning, implementation, monitoring, and social audit of development programmes.',
    'The demonstration village will serve as a learning and training centre where government agencies, non-profit organizations, universities, researchers, development practitioners, and community leaders can observe and learn practical approaches of participatory management of local resources and services at village level for positive gain to all.',
    'AIRD also seeks to collaborate with Non-Profit Organizations (NPOs), academic institutions, government agencies, banks, and corporate partners to replicate this model in other rural communities. Through knowledge sharing, capacity building, and technical support, AIRD aims to help partner organizations establish similar demonstration villages in their project areas.',
    'By creating practical, community-owned models of participatory governance, AIRD aspires to contribute to realizing Mahatma Gandhi\u2019s vision of Gram Swaraj not merely as a concept or policy, but as a living reality in India\u2019s villages.',
  ],
};

/* ------------------------------------------------------------------ */
/* People's Governance — People's governance in development.docx        */
/* (Contents for HP Final lines 12-110)                                */
/* ------------------------------------------------------------------ */
export const PEOPLES_GOVERNANCE = {
  definition:
    'People\u2019s governance refers to a system in which citizens actively participate in planning, implementation, monitoring, and evaluation of development activities that affect their lives. At the village level, it is the practical expression of Gram Swaraj, where the Gram Sabha becomes the central institution for democratic decision-making and accountability.',
  amendment:
    'The 73rd Constitutional Amendment Act, 1992 strengthened decentralized governance by granting constitutional status to Panchayati Raj Institutions (PRIs). The Gram Panchayats, Gram Sabhas, and various village-level committees are expected to manage local resources and oversee the delivery of public services with active participation from the community.',
  resourceManagement: {
    heading: 'People\u2019s Governance in Resource Management',
    intro:
      'Natural and community resources are the foundation of rural livelihoods. Sustainable management of these resources requires not only government intervention but also active participation of local communities. Important village resources include:',
    items: [
      'Agricultural land',
      'Village ponds and water bodies',
      'Grazing land',
      'Community forests',
      'Irrigation systems',
      'Village roads',
      'Schools',
      'Anganwadi centres',
      'Health Sub-Centres',
      'Panchayat Bhawan',
      'Common property resources',
    ],
    outcomes:
      'People\u2019s governance ensures that these resources are properly identified and mapped, protected from encroachment and misuse, developed according to community priorities, equitably shared among all sections of society, and maintained through collective responsibility.',
    closing:
      'The Gram Sabha plays a vital role by identifying village needs, approving development priorities, and monitoring the utilization of public resources.',
  },
  serviceDelivery: {
    heading: 'People\u2019s Governance in Service Delivery',
    intro:
      'Effective service delivery is essential for improving the quality of life in rural areas. Government departments provide numerous services, but their effectiveness depends on transparency, accountability and community participation. Major services include:',
    items: [
      'Drinking water supply',
      'Sanitation',
      'Rural roads',
      'MGNREGA employment',
      'Public Distribution System (PDS)',
      'Primary education',
      'Health services',
      'Nutrition services through Anganwadi',
      'Pension schemes',
      'Housing schemes',
      'Livelihood promotion under DAY-NRLM',
      'Agricultural extension services',
    ],
    outcomes:
      'People\u2019s governance enables villagers to know their rights and entitlements, participate in planning village development, monitor service delivery, report deficiencies, demand corrective action, conduct Social Audit, and hold service providers accountable. When communities participate actively, service delivery becomes more efficient, transparent, and responsive.',
  },
  gramSabha: {
    heading: 'The Gram Sabha',
    intro:
      'The Gram Sabha is the foundation of people\u2019s governance. Its major functions include:',
    items: [
      'Identifying village needs',
      'Approving Gram Panchayat Development Plan (GPDP)',
      'Prioritizing development works',
      'Monitoring implementation of government schemes',
      'Reviewing village accounts',
      'Conducting Social Audit',
      'Ensuring inclusion of marginalized groups',
      'Promoting transparency and accountability',
    ],
    note: 'A strong Gram Sabha transforms beneficiaries into active partners in development.',
  },
  /** Women SHGs — Contents for HP Final lines 68-76 */
  womenSHGs: {
    heading: 'Women Self-Help Groups (SHGs)',
    intro:
      'Women Self-Help Groups (SHGs) under DAY-NRLM have emerged as important institutions of community governance. They contribute by:',
    items: [
      'Mobilizing women',
      'Promoting financial inclusion',
      'Supporting livelihood activities',
      'Participating in GPDP preparation',
      'Creating awareness about government schemes',
      'Monitoring nutrition, sanitation, and social development programmes',
      'Supporting vulnerable households',
    ],
    closing:
      'Partnership between SHGs and Gram Panchayats significantly strengthens people\u2019s governance.',
  },
  /** Participatory Tools — Contents for HP Final lines 77-86 */
  participatoryTools: [
    'Social Mapping',
    'Resource Mapping',
    'Problem Mapping',
    'Seasonal Calendar',
    'Wealth Ranking',
    'Transect Walk',
    'Focus Group Discussions',
    'Village Development Planning',
  ],
  participatoryToolsClosing:
    'These tools enable communities to identify problems, analyse causes, and prepare practical action plans.',
  /** Digital Transparency — Contents for HP Final lines 87-98 */
  digitalTransparency: {
    heading: 'Digital Transparency',
    intro:
      'Digital Transparency has become an important instrument for strengthening people\u2019s governance. Village-level digital platforms can provide information on:',
    items: [
      'Village profile',
      'Local resources',
      'Government schemes',
      'Gram Sabha resolutions',
      'GPDP',
      'MGNREGA works',
      'SHG activities',
      'Social Audit reports',
      'Village budgets',
      'Progress of development works',
    ],
    closing:
      'Public access to information enhances transparency and reduces opportunities for corruption.',
  },
  /** Challenges in UP — Contents for HP Final lines 99-110 */
  challengesUP: {
    heading: 'Challenges in Uttar Pradesh',
    intro:
      'Despite constitutional provisions, several challenges continue:',
    items: [
      'Low participation in Gram Sabha meetings',
      'Limited awareness of citizens\u2019 rights',
      'Weak coordination among village institutions',
      'Inadequate transparency',
      'Poor record management',
      'Elite domination in decision-making',
      'Limited participation of youth',
      'Weak monitoring mechanisms',
      'Insufficient use of digital platforms',
    ],
    closing:
      'Addressing these challenges requires continuous community mobilization and institutional strengthening.',
  },
};

/* ------------------------------------------------------------------ */
/* Decentralised Governance — Contents for HP Final lines 8-11          */
/* ------------------------------------------------------------------ */
export const DECENTRALISED_GOVERNANCE = {
  intro:
    'The 73rd Constitutional Amendment Act, which came into effect in 1993, marked a significant milestone in India\u2019s decentralization process by granting constitutional status to the Panchayati Raj Institutions (PRIs) and recognizing the Gram Sabha as the cornerstone of grassroots democracy. The amendment sought to empower rural communities by promoting participatory decision-making, decentralized planning, and local self-governance.',
  programmes:
    'To operationalize these constitutional provisions, the Government of India has introduced several flagship programmes, including the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), the Deendayal Antyodaya Yojana \u2013 National Rural Livelihoods Mission (DAY-NRLM), and the Gram Panchayat Development Plan (GPDP). These initiatives emphasize community participation in planning, implementation, and monitoring of rural development programmes. In addition, the Social Audit mechanism, conducted in open meetings of the Gram Sabha, has been institutionalized to promote transparency, strengthen accountability, and enable citizens to monitor the utilization of public resources and the delivery of government services.',
  gap:
    'Despite this robust institutional and policy framework, the intended level of people\u2019s participation has not been fully realized in many villages. Attendance and meaningful participation in Gram Sabha meetings and Social Audit processes often remain low. Coordination among the Gram Panchayat, Self-Help Groups (SHGs), Village Organizations (VOs), government functionaries, and other local institutions is frequently inadequate. Furthermore, limited public awareness of government programmes, citizens\u2019 rights and entitlements, and participatory planning processes constrains effective community engagement. As a result, the potential of decentralized governance and Gram Swaraj remains only partially achieved, highlighting the need for innovative, community-driven approaches to strengthen people\u2019s governance, transparency, and accountability at the village level.',
};

/* ------------------------------------------------------------------ */
/* Human & Humanity — Human life.docx                                   */
/* ------------------------------------------------------------------ */
export const HUMAN_HUMANITY = {
  intro:
    'Human life has always inspired people to ask fundamental questions: Who are we? Where do we come from? Why are we born? What happens after death? Every religion attempts to answer these questions. Although religions differ in names, rituals, and traditions, their central message is remarkably similar \u2014 to live a righteous life, serve others, and seek the highest truth.',
  bodyAndSoul:
    'A human being is a unique combination of a visible body and an invisible soul. The body is created through our parents, while the soul is a gift from an invisible, higher power. The body is visible and temporary; the soul is invisible and, according to many spiritual traditions, eternal.',
  humanityBeforeReligion:
    'Humanity existed before organized religions. While respecting diversity, the values that unite all people are truth, compassion, love, self-discipline, service, and respect for life. Differences of religion, caste, ethnicity, and language arise later through social and cultural influences \u2014 humanity is greater than all divisions.',
  universalPower:
    'AIRD believes the universe is governed by one universal and invisible power known by different names in different traditions \u2014 God, Allah, Ishwar, Bhagwan, Waheguru. Understanding the deeper realities of life requires self-reflection, inquiry, and personal experience rather than blind acceptance of inherited beliefs.',
  closing:
    'Serve the needy as worship of the Almighty, spread happiness wherever you go, and recognize the unity of humanity beyond all divisions.',
};

/* ------------------------------------------------------------------ */
/* Development Car — Contents for HP Final lines 112-121 (FULL text)    */
/* ------------------------------------------------------------------ */
export const DEV_CAR_HOME = {
  intro: [
    'Human beings are a unique combination of body and soul\u2014two distinct entities existing as one. The body is created through our parents, while the soul is a gift from an invisible, higher power. The body is visible and temporary; the soul is invisible.',
    'The soul enters the visible world to experience life on Earth. One may imagine that every soul is provided with an invisible Development Car (DC) by the Supreme Power for this journey. This Development Car, together with its invisible driver, accompanies the soul throughout its stay on Earth. Although unseen, the driver remains with the soul until the moment of its return to the invisible realm.',
    'The time, date, and manner of every soul\u2019s departure from Earth are fixed, yet they remain unknown to human beings.',
  ],
  more: [
    'The uncertainty of life reminds us of this reality. A soul may leave while still in the mother\u2019s womb, at the time of birth, during childhood, or at any stage of life. History provides countless examples of miscarriage, stillbirth, illness, accidents, and untimely death. At the same time, one universal truth remains unchanged: everyone who is born will eventually die. Death is therefore not an exception but a natural part of life\u2019s journey.',
    'There are also situations where a person longs for death because of unbearable suffering, yet life continues. This reminds us that the departure of the soul is not entirely under human control. A peaceful and timely death may therefore be regarded as one of life\u2019s greatest blessings.',
    'The thoughts behind our actions shape the quality of our journey through life. Every act of kindness, compassion, honesty, and service earns the blessings of others. Every act motivated by hatred, selfishness, injustice, or cruelty may invite sorrow or resentment.',
    'Using the metaphor of the Development Car, we may imagine that blessings strengthen and maintain the vehicle that carries the soul, while negative actions weaken it. Likewise, the invisible driver becomes stronger through a life guided by truth, love, and selfless service, and weaker through a life dominated by harmful intentions.',
    'When the soul\u2019s appointed time on Earth comes to an end, it begins its return to the invisible realm. If the Development Car is strong and the driver is healthy\u2014symbolizing a life enriched by good thoughts and noble deeds\u2014the return journey is peaceful. If, however, the vehicle has been weakened by a life filled with negativity, the journey may be more difficult.',
    'Whether understood literally or as a spiritual metaphor, this reflection reminds us that the purpose of life is not merely to accumulate wealth, power, or possessions. The true measure of a meaningful life lies in the blessings we earn through our thoughts, words, and actions.',
    'If we strive to spread kindness rather than hatred, serve rather than exploit, and earn blessings rather than curses, we enrich not only our lives in this visible world but also prepare ourselves for whatever lies beyond it.',
  ],
};

/* ------------------------------------------------------------------ */
/* Arise, Awake — Contents for HP Final lines 249-257 (FULL text)     */
/* ------------------------------------------------------------------ */
export const ARISE_AWAKE = {
  intro:
    'Swami Vivekananda believed that the mind is the greatest force in human life. According to his philosophy, a person\u2019s life is largely shaped by the thoughts he or she constantly entertains. In this sense, life may be understood as a bundle of thoughts because our character, actions, habits, and destiny emerge from the continuous flow of our thinking.',
  body: [
    'Vivekananda emphasized that every thought leaves an impression on the mind. These impressions, known in Indian philosophy as samskaras, gradually shape our personality. Good and noble thoughts strengthen character, while negative and selfish thoughts weaken it. Thus, a person\u2019s present life is the cumulative result of past thoughts, and future life will be determined by present thinking.',
    'One of Vivekananda\u2019s most inspiring teachings is: \u201cWe are what our thoughts have made us; so take care about what you think.\u201d This statement highlights the immense creative power of thought. Thoughts are not merely mental activities; they are forces that influence our words, actions, habits, and ultimately our destiny. Therefore, if we wish to transform our lives, we must first transform our thinking.',
    'Vivekananda urged people to cultivate thoughts of strength, courage, fearlessness, purity, and self-confidence. He believed that weakness begins in the mind. Fear, doubt, jealousy, hatred, and pessimism prevent individuals from realizing their true potential. On the other hand, positive and constructive thoughts awaken the inner strength that already exists within every human being. His famous call, \u201cArise, awake, and stop not till the goal is reached,\u201d reflects the power of determined and disciplined thinking.',
    'According to Vedanta, which Vivekananda popularized throughout the world, every individual possesses an infinite divine potential. However, this potential remains hidden when the mind is clouded by ignorance and negative thoughts. Through self-discipline, meditation, right knowledge, and selfless service, the mind becomes pure and focused, enabling a person to realize his or her true nature.',
    'Modern psychology also supports this principle. Research shows that our thoughts influence our emotions, behavior, decision-making, and overall well-being. Positive thinking enhances resilience and confidence, while persistent negative thinking often leads to stress, anxiety, and poor decision-making. Thus, Vivekananda\u2019s teachings remain highly relevant in contemporary life.',
    'The practical message of this philosophy is clear. We should consciously guard our thoughts, read uplifting literature, associate with noble people, practise meditation, maintain self-confidence, and engage in constructive work. By doing so, we create positive mental impressions that shape a noble character and a meaningful life.',
    'In conclusion, the idea that life is a bundle of thoughts expresses one of Swami Vivekananda\u2019s central teachings: our thoughts are the architects of our character and destiny. While external circumstances influence life, it is the quality of our thinking that determines how we respond to them. Therefore, by cultivating pure, fearless, and positive thoughts, we can build a life of strength, wisdom, service, and spiritual fulfillment.',
  ],
};

/* ------------------------------------------------------------------ */
/* Goal of Soul — Contents for HP Final lines 258-269 (FULL text)      */
/* ------------------------------------------------------------------ */
export const GOAL_OF_SOUL = {
  intro:
    'Swami Vivekananda explained the journey of human life through the metaphor of a whirlpool. According to him, the individual soul (Atman) is originally free, pure, and divine. However, when it comes into contact with the world of name and form (Maya), it becomes caught in the whirlpool of worldly existence.',
  body: [
    'A whirlpool is formed when flowing water begins to revolve around a center. Anything entering it is drawn into its circular motion and appears unable to escape. Vivekananda compared this to human life. The soul enters the world and becomes attached to the body, family, wealth, power, desires, and ego. These attachments create the illusion that the individual is separate from others and from the Divine.',
    'Within the whirlpool, a person experiences repeated cycles of pleasure and pain, success and failure, hope and disappointment, birth and death. Ignorance (Avidya) and attachment (Moha) keep the individual revolving in this cycle, just as an object continues to revolve inside a whirlpool.',
    'According to Vivekananda, the purpose of life is not to remain trapped in this whirlpool but to realize one\u2019s true nature. Through knowledge (Jnana Yoga), selfless action (Karma Yoga), devotion (Bhakti Yoga), and meditation (Raja Yoga), the mind becomes purified and attachment gradually disappears. As ignorance is removed, the soul recognizes its identity with the Universal spirit (Brahman) and is liberated (Moksha).',
    'The whirlpool analogy teaches that the world itself is not the problem; rather, it is our attachment and ignorance that bind us. Just as an object eventually escapes a whirlpool and rejoins the free-flowing river, the soul can attain freedom by overcoming ignorance and realizing its inherent divinity.',
    'Thus, Vivekananda\u2019s Whirlpool theory symbolizes the soul\u2019s temporary entanglement in worldly life and its ultimate journey toward freedom, self-realization, and union with the Infinite.',
  ],
  summary: [
    'The whirlpool represents Maya (worldly illusion) and Samsara (cycle of worldly existence).',
    'The soul is divine and inherently free, but appears bound by ignorance and attachment.',
    'Attachment to ego, desires, and possessions keeps the individual trapped.',
    'The four Yogas\u2014Jnana, Karma, Bhakti, and Raja\u2014provide the path to liberation.',
    'Moksha is attained when the soul realizes its oneness with Brahman and escapes the whirlpool of worldly bondage.',
  ],
};

/* ------------------------------------------------------------------ */
/* Ehipassiko — Contents for HP Final lines 270-274 (FULL text)        */
/* ------------------------------------------------------------------ */
export const EHIPASSIKO_HOME = {
  intro:
    'One of the distinctive features of Gautama Buddha\u2019s teaching is the principle of Ehipassiko, a Pali word meaning come and see for yourself. This principle reflects the Buddha\u2019s emphasis on direct experience rather than blind faith.',
  body: [
    'The Buddha encouraged people not to accept any teaching merely because it was ancient, written in scripture, taught by a respected teacher, or followed by the majority. Instead, he advised them to examine, question, and verify the truth through their own experience and understanding. According to the Buddha, true wisdom arises from investigation, meditation, and lived experience, not from unquestioning belief. His path invites every individual to practice the teachings, observe their effects, and discover for themselves whether they lead to the reduction of suffering and the cultivation of compassion, peace, and wisdom.',
    'The message of Ehipassiko remains highly relevant today. In an age of abundant information and diverse beliefs, it reminds us to cultivate an open yet discerning mind\u2014to question honestly, examine carefully, and accept only what proves true and beneficial through experience and wisdom.',
    'Buddha\u2019s teaching, \u201cCome and see for yourself,\u201d is an invitation to discover truth through personal inquiry and practice rather than through blind belief. It encourages every individual to become a seeker of truth, guided by wisdom, compassion, and direct experience.',
  ],
};

/* ------------------------------------------------------------------ */
/* KRANTI — Contents for HP Final line 122-123 + Project KRANTI.docx    */
/* (No launch date — pending client confirmation per decision #2.)       */
/* ------------------------------------------------------------------ */
export const KRANTI_HOME = {
  name: 'KRANTI \u2014 Key to Reform and Adopt Noble Treatment Initiatives',
  aim:
    'To develop a village as a live model that demonstrates the process of strengthening people\u2019s governance and participatory development \u2014 not only in theory but through real community participation and action at the village level.',
  intro:
    'The AIRD is planning to launch Project KRANTI on 25th September 2026 for establishing the first live model on the process of strengthening Gram Swaraj \u2014 not only on paper but in a village of Bakshi ka Talab block of Lucknow.',
  components: [
    'Spiritual awareness camps',
    'Capacity building of rural youth & e-information bank',
    'Participatory study of Gram Sabha, Gram Panchayat, SHGs & MGNREGA',
    'Demonstration of people\u2019s governance in action',
    'Dissemination through open village meetings and workshops',
  ],
  benefits: [
    'A live, working demonstration of Gram Swaraj',
    'Strengthened local institutions & digital transparency',
    'Local youth trained as Change Agents',
    'Greater community participation & accountability',
    'A replicable model for other villages',
  ],
};

/* ------------------------------------------------------------------ */
/* Development in India — Contents for HP Final lines 124-248          */
/* Full timeline + sub-sections for Read More                          */
/* ------------------------------------------------------------------ */
export const DEV_INDIA_HOME = {
  intro:
    'Rural development has been a national priority in India for more than a century. Before Independence, several visionary individuals, voluntary organizations, and government agencies experimented with innovative approaches to improve agriculture, livelihoods, education, and village institutions. After Independence, the Government of India introduced a series of policy reforms, development programmes, and legal provisions to empower rural communities, reduce poverty, and strengthen democratic governance at the village level.',
  summary:
    'Today, India possesses one of the world\u2019s most comprehensive rural development systems. However, the challenge is no longer the absence of schemes but ensuring their effective implementation through transparency, accountability, and active community participation.',
  milestones: [
    { year: '1871', text: 'Department of Agriculture established by the Government of India.' },
    { year: '1882', text: 'Agricultural Departments established in most provinces.' },
    { year: '1905', text: 'Agricultural Research Institute established at Pusa, Bihar.' },
    { year: '1914', text: 'Rabindranath Tagore initiated the Sriniketan Rural Reconstruction Programme in Bengal.' },
    { year: '1921', text: 'Dr. Spencer Hatch launched the Marthandam Project under the YMCA in present-day Tamil Nadu.' },
    { year: '1928', text: 'F. L. Brayne introduced the Gurgaon Experiment in Punjab (now Haryana).' },
    { year: '1945', text: 'Indian Village Service (IVS) established by A. T. Mosher and B. N. Gupta in Etawah and Lucknow, UP.' },
    { year: '1948', text: 'Community Development movement; Etawah Pilot Project led by Albert Mayer.' },
    { year: '1952', text: 'Government established the Community Projects Administration for nationwide Community Development Programme.' },
    { year: '1969', text: 'Nationalisation of 14 major commercial banks.' },
    { year: '1971', text: 'Abolition of Privy Purses granted to former princely states.' },
    { year: '1974', text: 'Department of Rural Development established under Ministry of Food and Agriculture.' },
    { year: '1978\u201380', text: 'Integrated Rural Development Programme (IRDP) introduced.' },
    { year: '1982', text: 'NABARD established.' },
    { year: '1991', text: 'Liberalisation, Privatisation, Globalisation (LPG) reforms.' },
    { year: '1993', text: '73rd Constitutional Amendment \u2014 Panchayati Raj Institutions.' },
    { year: '1999', text: 'Swarna Jayanti Gram Swarozgar Yojana (SGSY) \u2014 SHG-based strategy.' },
    { year: '2000', text: 'India became a signatory to the UN Millennium Development Goals.' },
    { year: '2005', text: 'Right to Information Act.' },
    { year: '2006', text: 'NREGA \u2014 100 days of wage employment (MGNREGA from 2009).' },
    { year: '2009', text: 'Right of Children to Free and Compulsory Education Act (RTE).' },
    { year: '2011', text: 'National Rural Livelihood Mission (NRLM).' },
    { year: '2013', text: 'NRLM implementation began nationwide; National Food Security Act (NFSA).' },
    { year: '2015', text: 'NITI Aayog replaced Planning Commission; India adopted 17 SDGs.' },
    { year: '2016', text: 'Start-up India Initiative; DAY-NRLM renamed; Demonetisation of \u20b9500/\u20b91,000 notes.' },
    { year: '2017', text: 'Goods and Services Tax (GST) unified indirect taxation.' },
    { year: '2018\u201319', text: 'Gram Panchayat Development Plan (GPDP) \u2014 \u201cSabki Yojana Sabka Vikas.\u201d' },
  ],
  challenges: [
    'Limited participation in Gram Sabha meetings',
    'Weak functioning of Panchayat committees',
    'Inadequate convergence among departments',
    'Poor transparency in local governance',
    'Limited community ownership',
    'Weak social audit practices',
    'Underutilisation of digital governance tools',
    'Insufficient capacity of local institutions',
  ],
  actionsRequired: [
    'Strengthen Gram Sabha participation through regular awareness and capacity-building programmes.',
    'Build the leadership and management capacity of elected Panchayat representatives, SHGs, and youth.',
    'Ensure that all seven statutory committees of the Gram Panchayat function effectively.',
    'Integrate MGNREGA, DAY-NRLM, agriculture, health, education, water conservation, and livelihood programmes through convergence planning.',
    'Strengthen social audit as a continuous community-led accountability mechanism.',
    'Promote digital governance by maintaining village-level information systems.',
    'Develop local youth as trained Change Agents.',
    'Encourage universities, research institutions, NGOs, banks, corporate organisations, and government departments to work in partnership.',
    'Develop demonstration villages as live models.',
    'Promote environmental sustainability through watershed development, climate-resilient agriculture, biodiversity conservation, and renewable energy.',
    'Strengthen women\u2019s institutions and Self-Help Groups as key partners.',
    'Establish village knowledge and information centres.',
  ],
  conclusion:
    'India has developed a comprehensive framework for rural development through progressive policies, constitutional reforms, financial inclusion, employment guarantees, livelihood programmes, and decentralised governance. The next phase of rural transformation depends less on introducing new schemes and more on improving implementation through transparency, community ownership, institutional convergence, and accountable local governance.',
};

/* ------------------------------------------------------------------ */
/* What We Can Do — Contents for HP Final lines 233-248                */
/* ------------------------------------------------------------------ */
export const DEMO_VILLAGE = {
  intro:
    'We may develop a village as a demonstration unit that showcases effective participatory planning, social accountability, digital transparency, and collaboration among government, community institutions, civil society, and academic organisations. Such an approach can significantly accelerate the realization of Mahatma Gandhi\u2019s vision of Gram Swaraj while contributing to the achievement of the Sustainable Development Goals (SDGs).',
  areas: [
    'Gram Sabha participation can be strengthened.',
    'SHGs can become agents of social and economic change.',
    'MGNREGA and NRLM can complement each other.',
    'Social Audit can enhance transparency and accountability.',
    'Local resources can be managed more effectively.',
    'Community institutions can collaborate for sustainable development.',
    'Digital technologies can improve access to information and public oversight.',
  ],
};

/* ------------------------------------------------------------------ */
/* Who can join us — Home page.docx                                     */
/* ------------------------------------------------------------------ */
export const WHO_CAN_JOIN = [
  {
    title: 'Volunteer',
    desc: 'An individual as a volunteer to learn meditation and the development process.',
  },
  {
    title: 'Participatory Action Researcher',
    desc: 'A researcher to document and strengthen community participation in the governance of local resources and services of the Government, Banks and Corporate.',
  },
  {
    title: 'Institution as Partner',
    desc: 'An institution as a partner in establishing a live model on the process of development at village level.',
  },
];
