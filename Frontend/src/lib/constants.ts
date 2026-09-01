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
  { label: 'About', to: '/about' },
  { label: 'Philosophy', to: '/philosophy' },
  { label: 'KRANTI', to: '/kranti' },
  { label: 'Join Us', to: '/membership' },
  { label: 'Support', to: '/donate' },
] as const;

/**
 * Nested navigation tree. Structure mirrors the Website.docx site
 * architecture and powers the government-style mega-menu (desktop) and the
 * collapsible mobile drawer.
 */
export interface NavChild {
  label: string;
  to: string;
  desc?: string;
}
export interface NavItem {
  label: string;
  to?: string; // present when the top-level item is itself a page
  children?: NavChild[];
}

export const NAV_TREE: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    // Information architecture per Website.docx — About Us contains ALL
    // documented sections, in the EXACT order the document lists them.
    // Items map to source docs A–Q as noted. Do not reorder or remove
    // without consulting Website.docx.
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'Trust / In Brief', to: '/about/trust', desc: 'Registration, credentials & legal status' },
      { label: 'Trustee', to: '/trustee/journey', desc: 'Managing Trustee — K. C. Tripathi (A)' },
      { label: 'Journey of the Trustee', to: '/trustee/journey', desc: 'The life & work of the founder (B)' },
      { label: 'Board of Trustees (FY 2020–25)', to: '/trustee/board-2020-2025', desc: 'Previous board roster (C)' },
      { label: 'Board of Trustees (FY 2026–27)', to: '/trustee/board', desc: 'Current governing board (D)' },
      { label: 'Strategy', to: '/strategy', desc: 'Participatory strategy for Gram Swaraj (E)' },
      { label: 'Concept', to: '/concept', desc: 'The case for a demonstration village (F)' },
      { label: 'Development Car', to: '/development-car', desc: 'The journey of the soul (G)' },
      { label: 'Philosophy', to: '/philosophy', desc: 'AIRD’s philosophy: humanity, service & participation (H)' },
      { label: 'Initiation', to: '/initiation', desc: 'How AIRD began (I)' },
      { label: 'Teachings', to: '/teachings', desc: 'Spiritual teachings: Vivekananda, Buddha & the soul (J)' },
      { label: 'History of Rural Development', to: '/history', desc: 'A century of rural development (K)' },
      { label: 'Annual Report', to: '/annual-report', desc: 'Yearly reports (L)' },
      { label: 'Vision', to: '/about/vision', desc: 'Our vision of Gram Swaraj' },
      { label: 'Aim', to: '/about/aim-objectives', desc: 'The aim of AIRD (M)' },
      { label: 'Objectives', to: '/about/aim-objectives', desc: 'The objectives of AIRD (N)' },
      { label: 'KRANTI for Gram Swaraj', to: '/kranti', desc: 'Key to Reform & Adopt Noble Treatment Initiatives (O, P)' },
      { label: 'Development Car — Slideshow', to: '/development-car', desc: 'Slide show on spiritual teachings (Q)' },
    ],
  },
  {
    // Activities group — content also surfaced as homepage sections.
    // (Website.docx documents only About Us; Activities grouping follows
    //  Home page.txt "Home Screen" requirements.)
    label: 'Activities',
    children: [
      { label: 'Activities Calendar', to: '/activities', desc: 'Past & planned events' },
      { label: 'Photo Gallery', to: '/gallery', desc: 'Moments from the field' },
      { label: 'Videos', to: '/videos', desc: 'Documentary & media' },
      { label: 'Donors Directory', to: '/donors', desc: 'Our supporters' },
      { label: 'Village Directory', to: '/village-directory', desc: 'Model village data' },
    ],
  },
  {
    // Get Involved — Membership / Donate / Contact (Home page.txt).
    label: 'Get Involved',
    children: [
      { label: 'Membership', to: '/membership', desc: 'Join as a member or volunteer' },
      { label: 'Support', to: '/donate', desc: 'Support Gram Swaraj' },
      { label: 'Contact Us', to: '/contact', desc: 'Reach AIRD' },
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
