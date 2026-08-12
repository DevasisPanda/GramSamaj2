import type { Donor } from '@/lib/types';

/**
 * Donors Roll of Honor — transcribed from "Donors directory.xlsx".
 * (Initials shown on the public roll honor privacy; full names retained in
 * the data layer for the admin view.)
 */
export const DONORS: Donor[] = [
  { id: 'd1', date: '2026-04-03', name: 'K. C. Tripathi', amount: 1000, paymentMode: 'NEFT', purpose: 'Donation' },
  { id: 'd2', date: '2026-04-03', name: 'Neera Tripathi', amount: 4000, paymentMode: 'NEFT', purpose: 'Donation' },
  { id: 'd3', date: '2026-04-03', name: 'Atul Verma', amount: 4000, paymentMode: 'NEFT', purpose: 'Donation' },
  { id: 'd4', date: '2026-04-03', name: 'Pranshu Tripathi', amount: 4000, paymentMode: 'NEFT', purpose: 'Donation' },
  { id: 'd5', date: '2026-04-03', name: 'Gaurav Pandey', amount: 1000, paymentMode: 'UPI', purpose: 'Donation' },
  { id: 'd6', date: '2026-04-04', name: 'Anand Singh', amount: 4000, paymentMode: 'NEFT', purpose: 'Donation' },
  { id: 'd7', date: '2026-04-04', name: 'Dhananjay Tripathi', amount: 5000, paymentMode: 'NEFT', purpose: 'KRANTI' },
  { id: 'd8', date: '2026-04-05', name: 'V. K. Awasthi', amount: 3000, paymentMode: 'NEFT', purpose: 'Donation' },
  { id: 'd9', date: '2026-05-10', name: 'Atul Verma', amount: 1000, paymentMode: 'UPI', purpose: 'Donation' },
  { id: 'd10', date: '2026-05-28', name: 'Bhavna Saxena', amount: 6000, paymentMode: 'CHEQUE', purpose: 'Donation' },
];

export const DONATION_TOTAL = DONORS.reduce((sum, d) => sum + d.amount, 0);

/** Mask a name to initials for the public roll of honor, e.g. "K. C. Tripathi" -> "K. C. T." */
export function maskDonorName(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return name;
  return parts
    .map((p, i) => (i === parts.length - 1 ? `${p[0]}.` : p))
    .join(' ');
}
