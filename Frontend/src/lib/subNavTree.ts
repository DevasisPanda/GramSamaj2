import type { SubNavPillItem } from '@/components/shared/SubNavPills';

/**
 * Standardized Sub-Navigation trees sourced directly from
 * "Work1/Buttons foe cover page.docx".
 */

export const ABOUT_SUB_NAV: SubNavPillItem[] = [
  { label: 'Vision', to: '/about/vision' },
  { label: 'Aim', to: '/about/aim' },
  { label: 'Objectives', to: '/about/objectives' },
  { label: 'Annual report', to: '/annual-report' },
  { label: 'Accounts', to: '/about/accounts' },
];

export const TEACHINGS_SUB_NAV: SubNavPillItem[] = [
  { label: 'Teachings', to: '/teachings' },
  { label: 'Development Car', to: '/development-car' },
  { label: 'Spiritual awakening (Slide show)', to: '/spiritual-awakening' },
];

export const TRUST_SUB_NAV: SubNavPillItem[] = [
  { label: 'In brief', to: '/about/trust' },
  { label: 'Philosophy', to: '/philosophy' },
  { label: 'Trustee', to: '/trustee/profile' },
  { label: 'Journey of trustee', to: '/trustee/journey' },
  { label: 'Board of Trustee 2019-2026', to: '/trustee/board-2020-2025' },
  { label: 'Board of Trustee 2026-2027', to: '/trustee/board' },
];

export const KRANTI_SUB_NAV: SubNavPillItem[] = [
  { label: 'History of rural development', to: '/development-in-india' },
  { label: 'Concept', to: '/concept' },
  { label: 'Strategy', to: '/strategy' },
  { label: 'Initiation', to: '/initiation' },
  { label: 'Adoption of village', to: '/kranti#adoption' },
  { label: 'Launching', to: '/kranti#launching' },
  { label: 'Project KRANTI', to: '/kranti' },
  { label: 'Project Document', to: '/kranti/document' },
];

// Alias for backwards compatibility
export const PROJECT_SUB_NAV: SubNavPillItem[] = KRANTI_SUB_NAV;

export const ACTIVITIES_SUB_NAV: SubNavPillItem[] = [
  { label: 'Overview', to: '/activities' },
  { label: 'Past', to: '/activities/past' },
  { label: 'Current', to: '/activities/current' },
  { label: 'Calendar', to: '/activities#calendar' },
];

export const MODEL_VILLAGE_SUB_NAV: SubNavPillItem[] = [
  { label: 'Village Directory', to: '/village-directory' },
  { label: 'Village development works', to: '/village-development-works' },
  { label: 'Photo gallery', to: '/gallery' },
  { label: 'Video directory', to: '/videos' },
  { label: 'Donors Directory', to: '/donors' },
];