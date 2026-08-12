/**
 * Core domain types for the AIRD platform.
 * These mirror the tRPC signatures defined in the system prompt (§5) so that
 * swapping the mock API for the real `ngo-management-system` tRPC router is a
 * drop-in change. Keep these field-for-field compatible.
 */

export interface Villager {
  id: string;
  houseNumber: string;
  headOfHousehold: string;
  familyCount: number;
  contactNumber?: string;
  /** Poorest of the Poor */
  isPop: boolean;
  mgnregaJobCard: boolean;
  // Extended census fields (optional, for richer directory detail)
  spouseOf?: string;
  caste?: string;
  age?: number;
  qualification?: string;
  occupation?: string;
  /** Map polygon id linking this house to the SVG village map. */
  mapNodeId: string;
}

export type PaymentMode = 'UPI' | 'NEFT' | 'CHEQUE' | 'RAZORPAY';

export interface Donor {
  id: string;
  date: string; // ISO date
  name: string;
  amount: number; // INR
  paymentMode: PaymentMode;
  purpose?: DonationPurpose;
}

export type EventCategory = 'spiritual' | 'environmental' | 'planning' | 'administrative';

export interface ActivityEvent {
  id: string;
  date: string; // ISO date
  title: string;
  description: string;
  category: EventCategory;
  isCompleted: boolean;
  photos?: string[];
  videos?: string[];
}

export type MembershipCategory = 'GENERAL' | 'SPECIAL' | 'EXECUTIVE' | 'LIFE';
export type MembershipStatus = 'PENDING' | 'ACTIVE';

export interface MembershipRecord {
  id: string;
  name: string;
  aadharNumber: string;
  mobile: string;
  email: string;
  category: MembershipCategory;
  status: MembershipStatus;
  validUntil: string; // ISO date
}

export type DonationPurpose = 'Donation' | 'Membership' | 'KRANTI';

export interface Trustee {
  id: string;
  serial: number;
  name: string;
  particulars: string;
  position: string;
}

export interface VideoAsset {
  id: string;
  title: string;
  description: string;
  /** Cloudinary / S3 playback URL (mock in dev). */
  src: string;
  poster?: string;
  category?: EventCategory;
  date: string;
}

export interface MediaAsset {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'video';
  uploadedAt: string;
}
