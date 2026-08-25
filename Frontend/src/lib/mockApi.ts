/**
 * Standalone typed mock data layer.
 *
 * This mirrors the tRPC procedures defined in the system prompt (§5) so the
 * frontend is fully functional without a backend. Each function returns a
 * Promise with simulated latency; consumed via @tanstack/react-query hooks in
 * `hooks/useApi.ts`. When `ngo-management-system` is wired, swap these hooks
 * for `trpc.<proc>.useQuery/useMutation` — the call sites stay identical.
 */
import { DONORS } from '@/data/donors';
import { EVENTS } from '@/data/events';
import { MEMBERSHIP_TIERS } from '@/data/membership';
import { VILLAGERS, VILLAGE_DEMOGRAPHICS } from '@/data/villagers';
import { VIDEOS } from '@/data/videos';
import type {
  ActivityEvent,
  Donor,
  EventCategory,
  MembershipCategory,
  MembershipRecord,
  Villager,
} from '@/lib/types';
import { sleep } from '@/lib/utils';

const LATENCY = 350;

// ---- Mutable in-memory stores (so admin mutations feel real) ----
let villagers: Villager[] = [...VILLAGERS];
let events: ActivityEvent[] = [...EVENTS];
let donors: Donor[] = [...DONORS];
let members: MembershipRecord[] = [];

// ---- Queries ----
export async function listVillagers(): Promise<Villager[]> {
  await sleep(LATENCY);
  return [...villagers];
}

export async function listEvents(): Promise<ActivityEvent[]> {
  await sleep(LATENCY);
  return [...events];
}

export async function listDonors(): Promise<Donor[]> {
  await sleep(LATENCY);
  return [...donors];
}

export async function listVideos() {
  await sleep(LATENCY);
  return [...VIDEOS];
}

export async function getVillageDemographics() {
  await sleep(LATENCY);
  return [...VILLAGE_DEMOGRAPHICS];
}

export async function getMembershipTiers() {
  await sleep(LATENCY);
  return [...MEMBERSHIP_TIERS];
}

export interface DashboardMetrics {
  totalDonations: number;
  totalMembershipFees: number;
  memberCounts: { month: string; general: number; special: number; executive: number }[];
  monthlyFlow: { month: string; donations: number; fees: number }[];
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  await sleep(LATENCY);
  const totalDonations = donors.reduce((s, d) => s + d.amount, 0);
  const totalMembershipFees = members.length * 100; // illustrative
  return {
    totalDonations,
    totalMembershipFees,
    memberCounts: [
      { month: 'Mar', general: 8, special: 3, executive: 1 },
      { month: 'Apr', general: 12, special: 5, executive: 2 },
      { month: 'May', general: 15, special: 6, executive: 2 },
      { month: 'Jun', general: 18, special: 7, executive: 3 },
      { month: 'Jul', general: 21, special: 8, executive: 3 },
      { month: 'Aug', general: 25, special: 10, executive: 4 },
    ],
    monthlyFlow: [
      { month: 'Mar', donations: 4000, fees: 200 },
      { month: 'Apr', donations: 21000, fees: 500 },
      { month: 'May', donations: 7000, fees: 300 },
      { month: 'Jun', donations: 9000, fees: 800 },
      { month: 'Jul', donations: 12000, fees: 1000 },
      { month: 'Aug', donations: 15000, fees: 1200 },
    ],
  };
}

// ---- Mutations ----
export interface NewVillagerInput {
  houseNumber: string;
  headOfHousehold: string;
  familyCount: number;
  contactNumber?: string;
  isPop: boolean;
  mgnregaJobCard: boolean;
}

export async function createVillager(input: NewVillagerInput): Promise<Villager> {
  await sleep(LATENCY);
  const v: Villager = {
    id: `v${Date.now()}`,
    mapNodeId: `h${villagers.length + 1}`,
    ...input,
  };
  villagers = [v, ...villagers];
  return v;
}

export async function updateVillager(id: string, patch: Partial<Villager>): Promise<Villager> {
  await sleep(LATENCY);
  villagers = villagers.map((v) => (v.id === id ? { ...v, ...patch } : v));
  return villagers.find((v) => v.id === id)!;
}

export async function deleteVillager(id: string): Promise<{ id: string }> {
  await sleep(LATENCY);
  villagers = villagers.filter((v) => v.id !== id);
  return { id };
}

export interface NewEventInput {
  date: string;
  title: string;
  description: string;
  category: EventCategory;
  isCompleted: boolean;
}

export async function createEvent(input: NewEventInput): Promise<ActivityEvent> {
  await sleep(LATENCY);
  const e: ActivityEvent = { id: `e${Date.now()}`, ...input };
  events = [e, ...events];
  return e;
}

export interface NewDonorInput {
  date: string;
  name: string;
  amount: number;
  paymentMode: Donor['paymentMode'];
  purpose?: Donor['purpose'];
}

export async function createDonor(input: NewDonorInput): Promise<Donor> {
  await sleep(LATENCY);
  const d: Donor = { id: `d${Date.now()}`, ...input };
  donors = [d, ...donors];
  return d;
}

export interface NewMemberInput {
  name: string;
  aadharNumber: string;
  mobile: string;
  email: string;
  category: MembershipCategory;
  isLife: boolean;
}

export async function createMember(input: NewMemberInput): Promise<MembershipRecord> {
  await sleep(LATENCY);
  const now = new Date();
  const validUntil = new Date(now);
  validUntil.setFullYear(now.getFullYear() + (input.isLife ? 99 : 1));
  const seq = String(members.length + 1).padStart(4, '0');
  const m: MembershipRecord = {
    id: `AIRD/2026/${seq}`,
    name: input.name,
    aadharNumber: input.aadharNumber,
    mobile: input.mobile,
    email: input.email,
    category: input.isLife ? 'LIFE' : input.category,
    status: 'ACTIVE',
    validUntil: validUntil.toISOString(),
  };
  members = [m, ...members];
  return m;
}
