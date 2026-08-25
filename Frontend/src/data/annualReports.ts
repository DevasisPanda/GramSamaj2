/**
 * Annual Reports 2020-21 → 2025-26.
 * Summaries condense ONLY what is written in the official yearly reports
 * (annual report 2020-2021.docx = L2, L3.docx = AR 2021-22, 22-23.docx,
 * 23-24.docx, 24-25.docx, 25-26.docx). Financial figures are those stated
 * inside the reports / the L4-7 accounts notes (client decision D12:
 * report-level figures are public; raw ledgers stay internal).
 */

export interface AnnualReportEntry {
  id: string;
  year: string;
  label: string;
  intro: string;
  activities: string[];
  financials: { label: string; value: string }[];
}

export const ANNUAL_REPORTS: AnnualReportEntry[] = [
  {
    id: 'ar2025-26',
    year: '2025–26',
    label: 'Annual Report FY 2025–26',
    intro:
      'The financial year 2025–26 commenced with a cash balance of ₹120 and no balance in the bank account. Despite severe financial constraints, AIRD continued its commitment to promoting community participation and strengthening the vision of Gram Swaraj in Village Garhi.',
    activities: [
      'Earth Day (22 April): an unannounced Board visit to Village Garhi assessed whether earlier initiatives had continued independently; awareness had increased, but collective activity still required mentoring.',
      'National Panchayati Raj Day: SHGs were encouraged to organize independently; no programme materialized — a lesson on the need for sustained capacity building and local leadership.',
      'A respected supporter and admirer of AIRD passed away in France on 18 September 2025; special prayers were offered on Bank Uncle Day (25 September).',
      'Development Car Day (3 December) was celebrated at the AIRD office with meditation and reflection on serving the needy.',
      'Foundation Day (31 January 2026) was celebrated with meditation at Ramakrishna Math, Nirala Nagar, Lucknow; the Board (2 February 2026) resolved to preserve and refine the KRANTI model while awaiting a suitable institutional partner.',
      'Support to RIRD: analysed data from 200 respondents under the Jal Jeevan Mission and received an honorarium of ₹10,000.',
    ],
    financials: [
      { label: 'Cash in hand (opening)', value: '₹120' },
      { label: 'Honorarium received (RIRD assignment)', value: '₹10,000' },
      { label: 'Bank balance after charges', value: '₹1,677' },
    ],
  },
  {
    id: 'ar2024-25',
    year: '2024–25',
    label: 'Annual Report FY 2024–25',
    intro:
      'The financial year 2024–25 commenced with a cash balance of ₹470, while the bank balance was nil. Despite limited resources, AIRD continued preparing village Garhi as a live model of participatory rural development.',
    activities: [
      'Annual Board planning meeting (2 April 2024): resolved to intensify mobilization through women’s SHGs rather than discontinue the initiative.',
      'Earth Day (22 April 2024) in village Garhi: children’s placard-making competition using previously selected environmental slogans.',
      'National Panchayati Raj Day (25 April 2024): observed in village Garhi with participation of Sarvajani Shikshonnayan Sansthan (SSS).',
      'Partnership with SSS (Dr. S. C. Trivedi “Madhupesh”): SSS contributed ₹20,000 (5 May 2024) towards field preparations.',
      'First Spiritual Camp organized on 21 May 2024, followed by community meetings in May–June on KRANTI objectives.',
      'Field assessments by subject experts (5 and 18 June 2024) and an experience-sharing workshop (27 June 2024) concluded that modest honoraria for local facilitators are essential for sustained participation.',
      'KRANTI Planning Workshop (27 December 2024) finalized the project framework; multimedia educational material was developed with professional designers.',
      'Board review (30 December 2024) finalized KRANTI as a comprehensive action project; the detailed proposal was prepared on 5 January 2025 for submission to government agencies, CSR foundations, universities and NGOs.',
      'Foundation Day (31 January 2025) reaffirmed the long-term commitment to the demonstration village.',
    ],
    financials: [
      { label: 'Cash in hand (opening)', value: '₹470' },
      { label: 'Institutional support (SSS)', value: '₹20,000' },
    ],
  },
  {
    id: 'ar2023-24',
    year: '2023–24',
    label: 'Annual Report FY 2023–24',
    intro:
      'The financial year 2023–24 commenced with a cash balance of ₹2,570 and a bank balance of ₹4,026.07. The year was devoted to organizational review, statutory compliance, strategic planning and continued community engagement.',
    activities: [
      'Annual Board review (2 April 2023): community preparedness for KRANTI still below expectations; resolved to intensify mobilization before launch.',
      'Earth Day (22 April 2023) at the AIRD office, marking the birth anniversary of Prof. M. M. Hoda, pioneer of Appropriate Technology in India.',
      'National Panchayati Raj Day (25 April 2023) celebrated in Village Garhi with SHG members and the KRANTI Project Implementation Team.',
      'Bank Uncle Day (25 September 2023) began with a special prayer at Swami Ramakrishna Math.',
      'Regulatory compliance: on 1 December 2023 the Income Tax Department rejected the application under Sections 12AB and 80G (audited statements unavailable); the Board resolved to complete compliances and reapply.',
      'Development Car Day (3 December 2023) commemorated the founder of the Development Car concept.',
      'Board review (2 February 2024) resolved to temporarily defer large-scale implementation until a committed institutional partner joins.',
      'Foundation Day (31 January 2024) marked the registration anniversary (31 January 2020).',
    ],
    financials: [
      { label: 'Cash in hand (opening)', value: '₹2,570' },
      { label: 'Bank balance (opening)', value: '₹4,026.07' },
      { label: '12A / 80G status', value: 'Renewal rejected 1 Dec 2023; re-application planned' },
    ],
  },
  {
    id: 'ar2022-23',
    year: '2022–23',
    label: 'Annual Report FY 2022–23',
    intro:
      'The financial year 2022–23 commenced with a cash balance of ₹1,350 and a bank balance of ₹16,494.07. It was essentially a year of institutional strengthening and community preparation.',
    activities: [
      'Earth Day (22 April 2022) in Village Garhi: slogan-writing competition for children and distribution of 25 saplings of five species, marking the birth anniversary of Prof. M. M. Hoda.',
      'Health challenge: Convener Mrs. Neera Tripathi was diagnosed with breast cancer (10 May 2022) and underwent successful surgery at Lucknow Cancer Institute (3 June 2022); organizational continuity was maintained by trustees and volunteers.',
      'Preparations for Project KRANTI renewed in July 2022; ₹33,800 received as returnable donations and ₹30,360 spent on field preparations, meetings and planning.',
      'Bank Uncle Day (25 September 2022) celebrated at the AIRD office in honour of Mr. Christopher Baron.',
      'Development Car Day (3 December 2022): following review, returnable donations of ₹38,800 were refunded as the field was not yet ready — reflecting financial discipline and ethical management.',
      'National Youth Day (12 January 2023) meeting with village youth, followed by spiritual camps.',
      'Community meetings and a Maitri Bhoj (February 2023) strengthened Gram Sabha participation and social harmony.',
      'Annual Board review appreciated the AIRD website development and reaffirmed the strategy of community preparedness before implementation.',
    ],
    financials: [
      { label: 'Cash in hand (opening)', value: '₹1,350' },
      { label: 'Bank balance (opening)', value: '₹16,494.07' },
      { label: 'Returnable donations received', value: '₹33,800' },
      { label: 'Preliminary expenditure', value: '₹30,360' },
      { label: 'Returnable donations refunded', value: '₹38,800' },
      { label: 'Closing position', value: 'Cash ₹2,570 · Bank ₹4,026.07' },
    ],
  },
  {
    id: 'ar2021-22',
    year: '2021–22',
    label: 'Annual Report FY 2021–22',
    intro:
      'During 2021–22 AIRD focused on institutional development and refining its strategy for implementing the KRANTI project.',
    activities: [
      'Earth Day (22 April 2021) celebrated as a collective initiative of SHGs of Village Garhi and a tribute to Prof. M. M. Hoda, honoured by India Development Group UK Ltd., London, as the Father of Appropriate Technology in India.',
      'Special SHG meeting on transparency; Mrs. Sudha volunteered to coordinate collection of SHG transaction records (received from five SHGs).',
      'Bank Uncle Day (25 September 2021) celebrated by SHGs in Village Garhi.',
      'Foundation Day (3 December 2021) began with deep meditation at Ramakrishna Math, Lucknow.',
      'Development of the official AIRD website directed by the Board of Trustees.',
      'Swami Vivekananda Jayanti celebrations at Ramakrishna Math with Board participation.',
      'Five-day workshop on people’s governance (26–30 January 2022) at the AIRD office.',
      'Proposal for an Appropriate Ashram discussed with SHG members (2 February 2022); Project Implementation Team of 12 SHG leaders constituted the same day.',
      'KRANTI conceptualized with villagers and experts during a visit to Village Garhi (4 March 2022).',
      'Annual BoT meeting (30 March 2022): NITI Aayog registration obtained; approval under Sections 12A and 80G of the Income Tax Act secured.',
    ],
    financials: [
      { label: 'Closing balance (per FY 2022-23 accounts)', value: 'Cash ₹1,350 · Bank ₹16,494.07' },
      { label: 'Statutory milestones', value: 'NITI Aayog · 12A & 80G approved' },
    ],
  },
  {
    id: 'ar2020-21',
    year: '2020–21',
    label: 'Annual Report FY 2020–21',
    intro:
      'The first year of AIRD, marked by the COVID-19 pandemic, concentrated on strengthening community participation in Village Garhi.',
    activities: [
      'Earth Day (22 April 2020): first environmental awareness campaign with SHGs — slogan writing, poster preparation and family participation in conservation messaging.',
      'Environmental awareness through children: selected slogans used for placards and posters.',
      'Independence Day rally (15 August 2020) with women and children carrying environmental and development messages; open village oath for Gram Swaraj.',
      'Birthday of Mr. Christopher Baron (“Bank Uncle”) celebrated on 25 September 2020 — named decades earlier by MSW students of Lucknow University at ATDA.',
      'Review of expansion efforts in Kannauj (29 November 2020): response not sufficiently encouraging; efforts concentrated on Village Garhi.',
      'First Foundation Day celebrated on 3 December 2020 in the lawns of Ramakrishna Math, Lucknow.',
      'National Youth Day (12 January 2021) meditation programme commemorating Swami Vivekananda.',
      'First Board of Trustees meeting after registration (30 December 2020) finalized core teachings, strategy, conceptual framework and concept note; State Bank of India account had been opened on 30 June 2020.',
    ],
    financials: [
      { label: 'Institutional milestone', value: 'SBI account opened 30 June 2020' },
    ],
  },
];
