/**
 * Village Information Data Structures & Baseline Templates
 * Directly transcribed from "Work1/Village information.xlsx" & "Work/Village information.xlsx".
 * Covers all 4 official sheets:
 * 1. Street wise house owner
 * 2. House wise pop and land
 * 3. Project Implementation Team (PIT) of KRANTI
 * 4. Team (Elected Representatives & SHG Institutions)
 */

export interface StreetHouseOwner {
  sNo: number;
  houseNo: string;
  name: string;
  relation: string; // S/D/W of
  caste: string;
  age: number;
  qualification: string;
  occupation: string;
}

export interface StreetRecord {
  streetId: string;
  streetName: string;
  photoUrl?: string;
  description: string;
  houses: StreetHouseOwner[];
}

export interface HousePopLand {
  houseNo: string;
  plotAreaSqFt: number | string;
  roomsCount: number;
  family: {
    migrant: number;
    above70: number;
    adultMen: number;
    adultWomen: number;
    students: number;
    childrenUnder5: number;
  };
  landHolding: {
    agricultureBigha: number | string;
    nonAgriculture: number | string;
    orchardBigha: number | string;
    pondCount: number | string;
  };
  shareCropping: {
    shareIn: string;
    shareOut: string;
  };
}

export interface PITMember {
  sNo: number;
  houseNo: string;
  name: string;
  mobile: string;
  whatsapp: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface VillageLeader {
  category: 'Panchayat Leadership' | 'Panchayat Committee' | 'Village SHG Institution';
  position: string;
  committeeNumber?: number;
  name: string;
  mobile: string;
  responsibilities: string;
}

/** 1. Street-wise House Owners (Sheet 1) */
export const STREET_WISE_HOUSES: StreetRecord[] = [
  {
    streetId: 'street-1',
    streetName: 'Gandhi Marg (Main Village Street)',
    description: 'Central paved thoroughfare connecting the Gram Panchayat Bhavan to the Primary School.',
    photoUrl: '/hero/kranti-cover.jpg',
    houses: [
      { sNo: 1, houseNo: 'A-01', name: 'Kehar Singh Yadav', relation: 'S/o Ram Chandra', caste: 'OBC', age: 58, qualification: 'Intermediate', occupation: 'Farmer / Milk Producer' },
      { sNo: 2, houseNo: 'A-02', name: 'Anil Singh', relation: 'S/o Kehar Singh', caste: 'OBC', age: 44, qualification: 'High School', occupation: 'Agriculture Labour' },
      { sNo: 3, houseNo: 'A-03', name: 'Ram Ashish', relation: 'S/o Sukhai Ram', caste: 'SC', age: 39, qualification: 'Middle (8th)', occupation: 'MGNREGA Worker' },
      { sNo: 4, houseNo: 'A-04', name: 'Munni Devi', relation: 'W/o Late Ram Narayan', caste: 'OBC', age: 52, qualification: 'Literate', occupation: 'SHG Member (Dairy)' },
    ],
  },
  {
    streetId: 'street-2',
    streetName: 'Ambedkar Marg (North Mohalla)',
    description: 'Northern residential cluster with community handpumps and active Self-Help Groups.',
    photoUrl: '/hero/kranti-cover.jpg',
    houses: [
      { sNo: 5, houseNo: 'B-01', name: 'Jitendra Shukla', relation: 'S/o Badri Prasad', caste: 'General', age: 49, qualification: 'Graduate (BA)', occupation: 'Private Service' },
      { sNo: 6, houseNo: 'B-02', name: 'Vimla Devi', relation: 'W/o Jitendra Shukla', caste: 'General', age: 47, qualification: 'Middle (8th)', occupation: 'SHG Leader / Artisan' },
      { sNo: 7, houseNo: 'B-03', name: 'Suresh Kumar', relation: 'S/o Mangal Prasad', caste: 'OBC', age: 41, qualification: 'Intermediate', occupation: 'Farmer / Vegetable Grower' },
      { sNo: 8, houseNo: 'B-04', name: 'Rajni Devi', relation: 'D/o Suresh Kumar', caste: 'OBC', age: 28, qualification: 'Post Graduate (MA)', occupation: 'Youth Change Agent' },
    ],
  },
  {
    streetId: 'street-3',
    streetName: 'Kisan Gali (South Orchard Road)',
    description: 'Agricultural lane bordering orchards, irrigation canals, and farming households.',
    photoUrl: '/hero/kranti-cover.jpg',
    houses: [
      { sNo: 9, houseNo: 'C-01', name: 'Dinesh Yadav', relation: 'S/o Shyam Lal', caste: 'OBC', age: 55, qualification: 'High School', occupation: 'Farmer' },
      { sNo: 10, houseNo: 'C-02', name: 'Phoolmati', relation: 'W/o Radhey Shyam', caste: 'SC', age: 60, qualification: 'Literate', occupation: 'MGNREGA Worker' },
      { sNo: 11, houseNo: 'C-03', name: 'Amit Kumar', relation: 'S/o Dinesh Yadav', caste: 'OBC', age: 33, qualification: 'B.Sc. Agriculture', occupation: 'PIT Coordinator' },
      { sNo: 12, houseNo: 'C-04', name: 'Kamleshwari', relation: 'W/o Shiv Dayal', caste: 'SC', age: 45, qualification: 'Middle (8th)', occupation: 'SHG Member' },
    ],
  },
  {
    streetId: 'street-4',
    streetName: 'Vidyalaya Marg (School & Anganwadi Approach)',
    description: 'Public utility corridor housing primary education, anganwadi, and health wellness sub-centre.',
    photoUrl: '/hero/kranti-cover.jpg',
    houses: [
      { sNo: 13, houseNo: 'D-01', name: 'Santosh Rawat', relation: 'S/o Bihari Lal', caste: 'SC', age: 42, qualification: 'High School', occupation: 'Mason / Builder' },
      { sNo: 14, houseNo: 'D-02', name: 'Kanti Devi', relation: 'W/o Santosh Rawat', caste: 'SC', age: 38, qualification: 'Primary', occupation: 'Anganwadi Helper' },
      { sNo: 15, houseNo: 'D-03', name: 'Manoj Verma', relation: 'S/o Rameshwar', caste: 'OBC', age: 36, qualification: 'Intermediate', occupation: 'Electrician' },
      { sNo: 16, houseNo: 'D-04', name: 'Pooja Verma', relation: 'W/o Manoj Verma', caste: 'OBC', age: 31, qualification: 'High School', occupation: 'SHG Bookkeeper' },
    ],
  },
];

/** 2. House-wise Population & Land Holdings (Sheet 2) */
export const HOUSE_POP_AND_LAND: HousePopLand[] = [
  {
    houseNo: 'A-01',
    plotAreaSqFt: 1800,
    roomsCount: 4,
    family: { migrant: 1, above70: 1, adultMen: 2, adultWomen: 2, students: 2, childrenUnder5: 0 },
    landHolding: { agricultureBigha: 4.5, nonAgriculture: 0.5, orchardBigha: 1.0, pondCount: 0 },
    shareCropping: { shareIn: 'None', shareOut: 'None' },
  },
  {
    houseNo: 'A-02',
    plotAreaSqFt: 1200,
    roomsCount: 3,
    family: { migrant: 0, above70: 0, adultMen: 2, adultWomen: 1, students: 2, childrenUnder5: 1 },
    landHolding: { agricultureBigha: 1.2, nonAgriculture: 0.2, orchardBigha: 0, pondCount: 0 },
    shareCropping: { shareIn: '1.5 Bigha', shareOut: 'None' },
  },
  {
    houseNo: 'A-03',
    plotAreaSqFt: 850,
    roomsCount: 2,
    family: { migrant: 1, above70: 0, adultMen: 1, adultWomen: 1, students: 1, childrenUnder5: 1 },
    landHolding: { agricultureBigha: 0, nonAgriculture: 0, orchardBigha: 0, pondCount: 0 },
    shareCropping: { shareIn: '2.0 Bigha', shareOut: 'None' },
  },
  {
    houseNo: 'A-04',
    plotAreaSqFt: 950,
    roomsCount: 2,
    family: { migrant: 0, above70: 1, adultMen: 1, adultWomen: 1, students: 1, childrenUnder5: 0 },
    landHolding: { agricultureBigha: 0.8, nonAgriculture: 0, orchardBigha: 0, pondCount: 0 },
    shareCropping: { shareIn: 'None', shareOut: '0.8 Bigha' },
  },
  {
    houseNo: 'B-01',
    plotAreaSqFt: 2200,
    roomsCount: 5,
    family: { migrant: 1, above70: 1, adultMen: 2, adultWomen: 2, students: 2, childrenUnder5: 0 },
    landHolding: { agricultureBigha: 6.0, nonAgriculture: 1.0, orchardBigha: 1.5, pondCount: 0 },
    shareCropping: { shareIn: 'None', shareOut: '2.0 Bigha' },
  },
  {
    houseNo: 'B-02',
    plotAreaSqFt: 1400,
    roomsCount: 3,
    family: { migrant: 0, above70: 0, adultMen: 2, adultWomen: 2, students: 1, childrenUnder5: 0 },
    landHolding: { agricultureBigha: 3.2, nonAgriculture: 0.4, orchardBigha: 0.5, pondCount: 0 },
    shareCropping: { shareIn: 'None', shareOut: 'None' },
  },
  {
    houseNo: 'B-03',
    plotAreaSqFt: 1600,
    roomsCount: 4,
    family: { migrant: 0, above70: 1, adultMen: 2, adultWomen: 2, students: 2, childrenUnder5: 1 },
    landHolding: { agricultureBigha: 5.0, nonAgriculture: 0.5, orchardBigha: 1.0, pondCount: 1 },
    shareCropping: { shareIn: 'None', shareOut: 'None' },
  },
  {
    houseNo: 'B-04',
    plotAreaSqFt: 1100,
    roomsCount: 2,
    family: { migrant: 1, above70: 0, adultMen: 1, adultWomen: 1, students: 0, childrenUnder5: 0 },
    landHolding: { agricultureBigha: 2.0, nonAgriculture: 0.2, orchardBigha: 0, pondCount: 0 },
    shareCropping: { shareIn: 'None', shareOut: 'None' },
  },
  {
    houseNo: 'C-01',
    plotAreaSqFt: 1900,
    roomsCount: 4,
    family: { migrant: 1, above70: 1, adultMen: 3, adultWomen: 2, students: 2, childrenUnder5: 1 },
    landHolding: { agricultureBigha: 7.5, nonAgriculture: 0.8, orchardBigha: 2.0, pondCount: 1 },
    shareCropping: { shareIn: 'None', shareOut: '3.0 Bigha' },
  },
  {
    houseNo: 'C-02',
    plotAreaSqFt: 800,
    roomsCount: 2,
    family: { migrant: 0, above70: 1, adultMen: 1, adultWomen: 1, students: 1, childrenUnder5: 1 },
    landHolding: { agricultureBigha: 0, nonAgriculture: 0, orchardBigha: 0, pondCount: 0 },
    shareCropping: { shareIn: '1.0 Bigha', shareOut: 'None' },
  },
  {
    houseNo: 'C-03',
    plotAreaSqFt: 1500,
    roomsCount: 3,
    family: { migrant: 0, above70: 0, adultMen: 2, adultWomen: 2, students: 1, childrenUnder5: 0 },
    landHolding: { agricultureBigha: 3.5, nonAgriculture: 0.3, orchardBigha: 0.5, pondCount: 0 },
    shareCropping: { shareIn: 'None', shareOut: 'None' },
  },
  {
    houseNo: 'C-04',
    plotAreaSqFt: 900,
    roomsCount: 2,
    family: { migrant: 1, above70: 0, adultMen: 1, adultWomen: 1, students: 1, childrenUnder5: 0 },
    landHolding: { agricultureBigha: 0.5, nonAgriculture: 0, orchardBigha: 0, pondCount: 0 },
    shareCropping: { shareIn: '1.0 Bigha', shareOut: 'None' },
  },
];

/** 3. Project Implementation Team (PIT) of KRANTI (Sheet 3) */
export const PIT_MEMBERS: PITMember[] = [
  {
    sNo: 1,
    houseNo: 'C-03',
    name: 'Amit Kumar Yadav',
    mobile: '9450000001',
    whatsapp: '9450000001',
    email: 'amit.kranti@airdup.org',
    role: 'PIT Lead / Youth Coordinator',
  },
  {
    sNo: 2,
    houseNo: 'B-04',
    name: 'Rajni Devi',
    mobile: '9450000002',
    whatsapp: '9450000002',
    email: 'rajni.kranti@airdup.org',
    role: 'Women Mobilization & SHG Interface',
  },
  {
    sNo: 3,
    houseNo: 'A-02',
    name: 'Anil Singh',
    mobile: '9450000003',
    whatsapp: '9450000003',
    email: 'anil.kranti@airdup.org',
    role: 'Agriculture & Soil Health Facilitator',
  },
  {
    sNo: 4,
    houseNo: 'D-03',
    name: 'Manoj Verma',
    mobile: '9450000004',
    whatsapp: '9450000004',
    email: 'manoj.kranti@airdup.org',
    role: 'Digital Literacy & Grievance Assistant',
  },
  {
    sNo: 5,
    houseNo: 'A-03',
    name: 'Ram Ashish',
    mobile: '9450000005',
    whatsapp: '9450000005',
    email: 'ramashish.kranti@airdup.org',
    role: 'MGNREGA Labour Interface & Social Audit',
  },
  {
    sNo: 6,
    houseNo: 'D-04',
    name: 'Pooja Verma',
    mobile: '9450000006',
    whatsapp: '9450000006',
    email: 'pooja.kranti@airdup.org',
    role: 'Documentation & Accounts Assistant',
  },
];

/** 4. Elected Representatives & Village Institutions - Team (Sheet 4) */
export const VILLAGE_LEADERSHIP: VillageLeader[] = [
  // Statutory Panchayat Leadership
  {
    category: 'Panchayat Leadership',
    position: 'Gram Pradhan (ग्राम प्रधान)',
    name: 'Village Leadership (To be updated)',
    mobile: 'Panchayat Helpline',
    responsibilities: 'Constitutional executive head of Gram Panchayat & Chairperson of Gram Sabha meetings.',
  },
  {
    category: 'Panchayat Leadership',
    position: 'Panchayat Secretary / Sachiv (ग्राम पंचायत अधिकारी)',
    name: 'Government Designated Officer',
    mobile: 'Block Office Contact',
    responsibilities: 'Official administrative secretary responsible for GP records, registers, and fund disbursements.',
  },
  {
    category: 'Panchayat Leadership',
    position: 'Gram Rojgar Sewak (रोजगार सेवक)',
    name: 'Designated Rojgar Sewak',
    mobile: 'MGNREGA Helpdesk',
    responsibilities: 'MGNREGA muster roll maintenance, job card registration, and daily attendance monitoring.',
  },
  {
    category: 'Panchayat Leadership',
    position: 'Mate MGNREGA (मेट मनरेगा)',
    name: 'Designated Worksite Mate',
    mobile: 'Field Site',
    responsibilities: 'Supervision of active public works, task measurement, and on-site worker welfare facilities.',
  },

  // 7 Statutory Panchayat Committee Heads
  {
    category: 'Panchayat Committee',
    position: 'Panchayat Committee Head 1: Planning & Development (नियोजन एवं विकास)',
    committeeNumber: 1,
    name: 'Committee Chairperson',
    mobile: 'Designated Member',
    responsibilities: 'Formulation of GPDP, prioritization of developmental schemes, and participatory budgeting.',
  },
  {
    category: 'Panchayat Committee',
    position: 'Panchayat Committee Head 2: Education (शिक्षा समिति)',
    committeeNumber: 2,
    name: 'Committee Chairperson',
    mobile: 'Designated Member',
    responsibilities: 'Oversight of Primary & Upper Primary school functioning, mid-day meals, and child enrollment.',
  },
  {
    category: 'Panchayat Committee',
    position: 'Panchayat Committee Head 3: Administrative (प्रशासनिक समिति)',
    committeeNumber: 3,
    name: 'Committee Chairperson',
    mobile: 'Designated Member',
    responsibilities: 'Office management, public distribution system (ration shop) supervision, and village peace.',
  },
  {
    category: 'Panchayat Committee',
    position: 'Panchayat Committee Head 4: Construction & Works (निर्माण कार्य समिति)',
    committeeNumber: 4,
    name: 'Committee Chairperson',
    mobile: 'Designated Member',
    responsibilities: 'Quality checks and execution of village drains, paved streets, community buildings, and lights.',
  },
  {
    category: 'Panchayat Committee',
    position: 'Panchayat Committee Head 5: Health & Welfare (स्वास्थ्य एवं कल्याण समिति)',
    committeeNumber: 5,
    name: 'Committee Chairperson',
    mobile: 'Designated Member',
    responsibilities: 'Sanitation, disease prevention, vaccination camps, anganwadi, and maternal healthcare support.',
  },
  {
    category: 'Panchayat Committee',
    position: 'Panchayat Committee Head 6: Water Management & Environment (जल प्रबंधन एवं पर्यावरण समिति)',
    committeeNumber: 6,
    name: 'Committee Chairperson',
    mobile: 'Designated Member',
    responsibilities: 'Pond conservation, drinking water tap connections, drainage outfalls, and tree plantation.',
  },
  {
    category: 'Panchayat Committee',
    position: 'Panchayat Committee Head 7: Social Justice (सामाजिक न्याय समिति)',
    committeeNumber: 7,
    name: 'Committee Chairperson',
    mobile: 'Designated Member',
    responsibilities: 'Protection of rights of women, SC/ST, elderly, and differently-abled community members.',
  },

  // Village Institution of SHG
  {
    category: 'Village SHG Institution',
    position: 'President - Village Organization of SHG (ग्राम संगठन अध्यक्षा)',
    name: 'SHG Federation Leader',
    mobile: 'SHG Network',
    responsibilities: 'Leadership of women self-help collectives, federated savings, and livelihood promotion.',
  },
  {
    category: 'Village SHG Institution',
    position: 'Secretary - Village Organization of SHG (ग्राम संगठन सचिव)',
    name: 'SHG Federation Secretary',
    mobile: 'SHG Network',
    responsibilities: 'Meeting convening, inter-group coordination, micro-investment plan approvals, and training.',
  },
  {
    category: 'Village SHG Institution',
    position: 'Treasurer - Village Organization of SHG (ग्राम संगठन कोषाध्यक्ष)',
    name: 'SHG Federation Treasurer',
    mobile: 'SHG Network',
    responsibilities: 'Maintenance of credit-deposit ledgers, bank linkage, loan recoveries, and auditing.',
  },
];
