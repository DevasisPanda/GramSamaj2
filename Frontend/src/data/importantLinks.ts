/**
 * Curated "Important Websites" — the governance framework AIRD operates within.
 * Source: "Important websites.docx" / "Important websites1.docx".
 */
export interface ImportantLink {
  id: string;
  label: string;
  url: string;
  description: string;
  icon: string; // lucide icon name
}

export const IMPORTANT_LINKS: ImportantLink[] = [
  {
    id: 'sird',
    label: 'DDU-SIRD, Uttar Pradesh',
    url: 'https://sird.up.gov.in/',
    description:
      'Deendayal Upadhyaya State Institute of Rural Development \u2014 apex state training & capacity-building institute for rural development & Panchayati Raj. KRANTI Phase II expands across its 17 Regional Institutes (RIRDs).',
    icon: 'Building2',
  },
  {
    id: 'sdg',
    label: 'Sustainable Development Goals (SDGs)',
    url: 'https://en.wikipedia.org/wiki/Sustainable_Development_Goals',
    description:
      'The United Nations Sustainable Development Goals that AIRD\u2019s model villages contribute towards.',
    icon: 'Globe2',
  },
  {
    id: 'rgsa',
    label: 'Gram Swaraj Abhiyan (RGSAPortal)',
    url: 'https://rgsa.gov.in/index.htm',
    description:
      'Rashtriya Gram Swaraj Abhiyan \u2014 central scheme strengthening Panchayati Raj Institutions and Gram Swaraj.',
    icon: 'Landmark',
  },
  {
    id: 'gpdp',
    label: 'GPDP Portal',
    url: 'https://gpdp.nic.in/',
    description:
      'Gram Panchayat Development Plan portal \u2014 participatory village-level development planning.',
    icon: 'ClipboardList',
  },
  {
    id: 'daynrlm',
    label: 'DAY-NRLM',
    url: 'https://www.myscheme.gov.in/schemes/day-nrlm',
    description:
      'Deendayal Antyodaya Yojana \u2013 National Rural Livelihoods Mission: reducing poverty through women-led SHGs.',
    icon: 'Users',
  },
  {
    id: 'mgnrega',
    label: 'MGNREGA / Viksit Bharat',
    url: 'https://www.facebook.com/IndiaRuralDev',
    description:
      'Mahatma Gandhi National Rural Employment Guarantee Act \u2014 social audit & rural employment.',
    icon: 'HardHat',
  },
  {
    id: 'socialaudit',
    label: 'Social Audit, Uttar Pradesh',
    url: 'http://www.socialauditup.in/',
    description:
      'Uttar Pradesh social-audit portal for transparency and accountability of welfare schemes.',
    icon: 'ScrollText',
  },
];
