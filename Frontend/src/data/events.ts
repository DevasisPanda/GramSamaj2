import type { ActivityEvent } from '@/lib/types';

/**
 * Activities Calendar entries. Past milestones (Earth Day, National Panchayati
 * Raj Day, Bank Uncle Day, Foundation Day) and the proposed KRANTI schedule
 * from "Activity planned for 2026-2027.docx". `isCompleted` distinguishes
 * history from upcoming.
 */
export const EVENTS: ActivityEvent[] = [
  // ---- Historical milestones ----
  { id: 'e1', date: '2020-01-31', title: 'AIRD Foundation Day', description: 'Appropriate Institute of Rural Development registered under Public Charitable Trust Act (PCTA) 1882 (Reg. 9002139 IV-66/2020).', category: 'administrative', isCompleted: true },
  { id: 'e2', date: '2026-04-22', title: 'Earth Day', description: 'Community awareness on protecting Mother Earth \u2014 soil testing, organic farming, and tree plantation drives in Barhi Garhi.', category: 'environmental', isCompleted: true },
  { id: 'e3', date: '2026-04-24', title: 'National Panchayati Raj Day', description: 'Celebrating grassroots democracy. Strengthening Gram Sabha participation and social accountability.', category: 'planning', isCompleted: true },
  { id: 'e4', date: '2026-05-01', title: 'Bank Uncle Day', description: 'Villager-bank interface to spread awareness on accounts, loans, and financial inclusion schemes.', category: 'planning', isCompleted: true },

  // ---- Proposed KRANTI 2026-2027 schedule ----
  { id: 'e5', date: '2026-08-15', title: 'KRANTI Phase 1 \u2014 Launch & Baseline', description: 'Selection of model village, community consultations, formation of Project Implementation Team (PIT), and baseline village information collection.', category: 'planning', isCompleted: false },
  { id: 'e6', date: '2026-09-25', title: 'KRANTI Formal Launch', description: 'Official launch of Key to Reform & Adopt Noble Treatment Initiatives (KRANTI) at Bakshi ka Talab block, Lucknow.', category: 'administrative', isCompleted: false },
  { id: 'e7', date: '2026-09-01', title: 'Spiritual Activation & Maitri Bhoj', description: 'Spiritual camps, community meetings, introduction of Maitri Bhoj gatherings on Pooranmasi & Amavasya, awareness on Gram Swaraj.', category: 'spiritual', isCompleted: false },
  { id: 'e8', date: '2026-09-25', title: 'Youth Change Agent Capacity Training', description: 'Practical training of rural youth, preparation of social/resource/problem maps, e-information bank establishment.', category: 'planning', isCompleted: false },
  { id: 'e9', date: '2026-11-15', title: 'Participatory Action Study (PAS)', description: 'Study and documentation of Gram Sabha, Gram Panchayat committees, SHGs, MGNREGA activities, and social audit processes.', category: 'planning', isCompleted: false },
  { id: 'e10', date: '2026-12-03', title: 'Collective Action & Department Interfacing', description: 'Identification of priority village issue, formation of working groups, interface meetings with government departments, action plan.', category: 'planning', isCompleted: false },
  { id: 'e11', date: '2027-02-02', title: 'Implementation & Web Updates', description: 'Implementation of community action initiatives, regular Gram Sabha, documentation of progress, project website updates.', category: 'administrative', isCompleted: false },
  { id: 'e12', date: '2027-08-11', title: 'Final Evaluation & Phase II Planning', description: 'Evaluation workshop, presentation of project reports, documentation of best practices, preparation for KRANTI Phase II across DDU-SIRD\u2019s 17 RIRDs.', category: 'administrative', isCompleted: false },
];
