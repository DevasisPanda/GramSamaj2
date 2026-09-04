/**
 * AIRD trust credentials & global constants.
 * All values are sourced verbatim from the official trust documents
 * (PCTA 1882 registration, NGO Darpan, PAN, SBI account). Do not edit
 * without a corresponding legal document update.
 */

export const AIRD = {
  name: 'Appropriate Institute of Rural Development',
  shortName: 'AIRD',
  tagline: "A trust committed to strengthen people's governance “Gram Swaraj” not on paper but at village level.",
  motto: 'Join Hands • Learn Together • Serve Together • Build Gram Swaraj',
  registeredUnder: 'Public Charitable Trust Act (PCTA) 1882',
  registrationNo: '9002139 IV-66/2020',
  registrationDate: '31.01.2020',
  ngoDarpanId: 'UP/2022/0303967',
  pan: 'AAHTA8244M',
  registeredOffice: '46-A, Nai Basti Babu Ganj, Lucknow, Uttar Pradesh, India – 226020',
  email: 'aird.up.india@gmail.com',
  contactPerson: 'K. C. Tripathi',
  contactMobile: '9169888444',
  bank: {
    name: 'State Bank of India',
    accountName: 'AIRD.INDIA',
    // Full account number is intentionally NOT published on the public site.
    // Visitors are asked to contact AIRD directly for verified transfer details.
    accountNumberMasked: '••••••85277',
    ifsc: 'SBIN0003813',
  },
  trustee: {
    name: 'K. C. Tripathi',
    // Sensitive identifiers (Aadhaar / PAN) are withheld from the public site
    // pending explicit client authorization for publication.
    mobile: '9169888444',
    email: 'aird.up.india@gmail.com',
  },
  /**
   * Honest 12A/80G status (client-approved wording, decision D11).
   * Approved in FY 2021-22; renewal application rejected 1 Dec 2023 and is
   * pending re-application. Source: Annual Report 2023-24 ("Regulatory
   * compliance") + Activity in past1.docx.
   */
  taxStatus:
    'Registered under Sections 12A and 80G of the Income Tax Act in FY 2021–22; renewal application pending since December 2023.',
} as const;

/**
 * Trust deed download. Flip to true once the client places the signed PDF at
 * `Frontend/public/trust-deed.pdf` (decision D10). No dead link until then.
 */
export const TRUST_DEED_AVAILABLE = false;

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Teachings', to: '/teachings' },
  { label: 'Trust', to: '/about/trust' },
  { label: 'KRANTI', to: '/kranti' },
  { label: 'Activities', to: '/activities' },
  { label: 'Model village', to: '/village-directory' },
  { label: 'Join Hands and Take Action', to: '/membership' },
] as const;

/**
 * Nested navigation tree. Structured in exact accordance with
 * Buttons foe cover page.docx and client specifications.
 */
export interface NavChild {
  label: string;
  to: string;
  desc?: string;
}
export interface NavItem {
  label: string;
  to?: string;
  children?: NavChild[];
}

export const NAV_TREE: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About us',
    to: '/about',
    children: [
      { label: 'Vision', to: '/about/vision', desc: 'Our vision of Gram Swaraj' },
      { label: 'Aim', to: '/about/aim-objectives', desc: 'The foundational aim of AIRD' },
      { label: 'Objectives', to: '/about/aim-objectives', desc: '15 Key Objectives of AIRD' },
      { label: 'Annual report', to: '/annual-report', desc: 'Audited yearly reports (2020–2026)' },
      { label: 'Accounts', to: '/about/accounts', desc: 'Audited multi-year financial statements & ledgers' },
    ],
  },
  {
    label: 'Teachings',
    to: '/teachings',
    children: [
      { label: 'Teachings', to: '/teachings', desc: 'Spiritual foundation & moral education' },
      { label: 'Development Car', to: '/development-car', desc: 'Philosophy of selfless service & blessings' },
      { label: 'Spiritual awakening (Slide show)', to: '/spiritual-awakening', desc: '15-slide presentation on the journey of the soul' },
    ],
  },
  {
    label: 'Trust',
    to: '/about/trust',
    children: [
      { label: 'In brief', to: '/about/trust', desc: 'Trust registration & legal credentials' },
      { label: 'Philosophy', to: '/philosophy', desc: 'Universal human values & spiritual science' },
      { label: 'Trustee', to: '/trustee/profile', desc: 'Kamlesh Chandra Tripathi biodata & career' },
      { label: 'Journey of trustee', to: '/trustee/journey', desc: 'Role of trustee & complete autobiography' },
      { label: 'Board of Trustee 2019-2026', to: '/trustee/board-2020-2025', desc: 'Founding board members' },
      { label: 'Board of Trustee 2026-2027', to: '/trustee/board', desc: 'Current governing board' },
    ],
  },
  {
    label: 'KRANTI',
    to: '/kranti',
    children: [
      { label: 'History of rural development', to: '/development-in-india', desc: 'A century of rural governance & Panchayati Raj' },
      { label: 'Concept', to: '/concept', desc: 'Demonstration model village concept' },
      { label: 'Strategy', to: '/strategy', desc: 'Operational strategy & youth mobilization' },
      { label: 'Initiation', to: '/initiation', desc: 'Community initiation process' },
      { label: 'Adoption of village', to: '/kranti#adoption', desc: 'Village Manpur Lala adopted 15th August 2026' },
      { label: 'Launching', to: '/kranti#launching', desc: 'KRANTI launch 25th September (Bank Uncle’s Day)' },
      { label: 'Project KRANTI', to: '/kranti', desc: 'Overview & 12-month phased roadmap' },
      { label: 'Project Document (English)', to: '/kranti/document', desc: 'Full English project blueprint' },
      { label: 'परियोजना क्रांति (हिन्दी)', to: '/kranti/hindi', desc: 'Complete Hindi project document' },
    ],
  },
  {
    label: 'Activities',
    to: '/activities',
    children: [
      { label: 'Overview', to: '/activities', desc: 'Past & planned events' },
      { label: 'Past', to: '/activities/past', desc: 'Identifying issues & evolving process to address (2019–2026)' },
      { label: 'Current', to: '/activities/current', desc: 'Planned for 2026–27 demonstration village' },
      { label: 'Calendar', to: '/activities#calendar', desc: 'Activities schedule & observances' },
    ],
  },
  {
    label: 'Model village',
    to: '/village-directory',
    children: [
       { label: 'Village Directory', to: '/village-directory', desc: 'Census & household database' },
       { label: 'Village Development Works', to: '/village-development-works', desc: 'Pillars & register of village development works' },
       { label: 'Photo gallery', to: '/gallery', desc: 'Moments from the field' },
       { label: 'Video directory', to: '/videos', desc: 'Documentary & media' },
       { label: 'Donors Directory', to: '/donors', desc: 'Roll of supporters & contributions' },
    ],
  },
  {
    label: 'Join Hands and Take Action',
    to: '/membership',
    children: [
      { label: 'Membership', to: '/membership', desc: 'Volunteer & member registration' },
      { label: 'Support', to: '/donate', desc: 'Support Gram Swaraj initiatives' },
      { label: 'Contact Us', to: '/contact', desc: 'Reach AIRD Lucknow headquarters' },
    ],
  },
];

/** Verification root for membership QR codes. */
export const VERIFY_URL =
  import.meta.env.VITE_VERIFY_URL?.replace(/\/$/, '') ?? 'https://airdup.com/verify/member';

/** The five historical slogans shown in the scrolling ticker (prompt §2). */
export const SLOGANS: { hi: string; en: string }[] = [
  {
    hi: '\u0928\u093e\u0930\u0940 \u0936\u0915\u094d\u0924\u093f \u091c\u093e\u0917\u0940 \u0939\u0948, \u0905\u092c \u092a\u0941\u0930\u0941\u0937\u094b\u0902 \u0915\u0940 \u092c\u093e\u0930\u0940 \u0939\u0948\u0964',
    en: "Women's power has awakened, now it's the men's turn.",
  },
  {
    hi: '\u0915\u093f\u0938\u093e\u0928 \u091c\u092c \u092c\u0928 \u091c\u093e\u090f\u0917\u093e, \u091c\u0917 \u092e\u0947\u0902 \u0916\u0941\u0936\u093f\u092f\u093e\u0901 \u0932\u093e\u090f\u0917\u093e\u0964',
    en: 'When the farmer is empowered, happiness will spread across the world.',
  },
  {
    hi: '\u0927\u0930\u0924\u0940 \u092e\u093e\u0901 \u0915\u094b \u092c\u091a\u093e\u0928\u093e \u0939\u0948, \u092e\u093f\u091f\u094d\u091f\u0940 \u091c\u093e\u0901\u091a \u0915\u0930\u093e\u0928\u093e \u0939\u0948\u0964',
    en: 'We must save Mother Earth, soil testing is a must.',
  },
  {
    hi: '\u091c\u0948\u0935\u093f\u0915 \u0915\u0943\u0937\u093f \u0905\u092a\u0928\u093e\u0928\u093e \u0939\u0948, \u091c\u0928 \u091c\u0928 \u0915\u094b \u0938\u094d\u0935\u0938\u094d\u0925 \u092c\u0928\u093e\u0928\u093e \u0939\u0948\u0964',
    en: 'Adopt organic farming, make everyone healthy.',
  },
  {
    hi: '\u092a\u0948\u0938\u093e \u0905\u092c \u0905\u0915\u0947\u0932\u0947 \u0928\u0939\u0940\u0902 \u0915\u092e\u093e\u090f\u0902\u0917\u0947, \u0938\u092c \u092e\u093f\u0932 \u0930\u0941\u092a\u092f\u094b\u0902 \u0915\u093e \u092a\u0947\u0921\u093c \u0932\u0917\u093e\u090f\u0902\u0917\u0947\u0964',
    en: "We will not earn money alone anymore; together we will plant a tree of wealth.",
  },
];

/** The signature Vivekananda call, used across the hero & philosophy sections. */
export const RALLYING_CRY = 'Arise, Awake, and Stop not till the Goal is reached';
export const SERVICE_PRINCIPLE = 'Service to Humanity is the Highest Worship.';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/IndiaRuralDev',
  email: `mailto:${AIRD.email}`,
  phone: `tel:+91${AIRD.contactMobile}`,
  whatsapp: `https://wa.me/91${AIRD.contactMobile}`,
} as const;
