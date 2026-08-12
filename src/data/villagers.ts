import type { Villager } from '@/lib/types';

/**
 * Sample "House-wise Villager Directory" entries for village Barhi Garhi,
 * Malihabad, Lucknow. The schema mirrors the official "Village information.xlsx"
 * template (S.No | House No. | Name | S/D/W of | Caste | Age | Qualification |
 * Occupation). These are representative records the admin grid and the public
 * directory consume; full data is uploaded via the admin Media/Villager tools.
 */
export const VILLAGERS: Villager[] = [
  { id: 'v1', houseNumber: 'A-1', headOfHousehold: 'Kehar Singh Yadev', spouseOf: 'Vimla Devi', familyCount: 6, contactNumber: '9000000001', isPop: false, mgnregaJobCard: true, caste: 'OBC', age: 58, qualification: 'Inter', occupation: 'Farmer', mapNodeId: 'h1' },
  { id: 'v2', houseNumber: 'A-2', headOfHousehold: 'Anil Singh', spouseOf: 'Sunita Devi', familyCount: 5, contactNumber: '9000000002', isPop: true, mgnregaJobCard: true, caste: 'OBC', age: 44, qualification: 'High School', occupation: 'Agriculture Labour', mapNodeId: 'h2' },
  { id: 'v3', houseNumber: 'A-3', headOfHousehold: 'Ram Ashish', familyCount: 4, isPop: true, mgnregaJobCard: true, caste: 'SC', age: 39, qualification: 'Middle', occupation: 'MGNREGA Worker', mapNodeId: 'h3' },
  { id: 'v4', houseNumber: 'A-4', headOfHousehold: 'Munni Devi', spouseOf: 'Late Ram Narayan', familyCount: 3, isPop: true, mgnregaJobCard: false, caste: 'OBC', age: 52, qualification: 'Literate', occupation: 'SHG Member', mapNodeId: 'h4' },
  { id: 'v5', houseNumber: 'B-1', headOfHousehold: 'Jitendra Shukla', spouseOf: 'Geeta Devi', familyCount: 7, contactNumber: '9000000005', isPop: false, mgnregaJobCard: true, caste: 'General', age: 49, qualification: 'Graduate', occupation: 'Service', mapNodeId: 'h5' },
  { id: 'v6', houseNumber: 'B-2', headOfHousehold: 'Vimla Devi', familyCount: 5, isPop: false, mgnregaJobCard: true, caste: 'OBC', age: 47, qualification: 'Middle', occupation: 'SHG Leader', mapNodeId: 'h6' },
  { id: 'v7', houseNumber: 'B-3', headOfHousehold: 'Suresh Kumar', familyCount: 6, contactNumber: '9000000007', isPop: false, mgnregaJobCard: true, caste: 'OBC', age: 41, qualification: 'Inter', occupation: 'Farmer', mapNodeId: 'h7' },
  { id: 'v8', houseNumber: 'B-4', headOfHousehold: 'Rajni Kaur', familyCount: 2, isPop: true, mgnregaJobCard: false, caste: 'General', age: 28, qualification: 'Graduate', occupation: 'PRO / Volunteer', mapNodeId: 'h8' },
  { id: 'v9', houseNumber: 'C-1', headOfHousehold: 'Dinesh Yadav', familyCount: 8, contactNumber: '9000000009', isPop: false, mgnregaJobCard: true, caste: 'OBC', age: 55, qualification: 'High School', occupation: 'Farmer', mapNodeId: 'h9' },
  { id: 'v10', houseNumber: 'C-2', headOfHousehold: 'Phoolmati', familyCount: 4, isPop: true, mgnregaJobCard: true, caste: 'SC', age: 60, qualification: 'Literate', occupation: 'MGNREGA Worker', mapNodeId: 'h10' },
  { id: 'v11', houseNumber: 'C-3', headOfHousehold: 'Amit Kumar', spouseOf: 'Pooja', familyCount: 5, contactNumber: '9000000011', isPop: false, mgnregaJobCard: true, caste: 'OBC', age: 33, qualification: 'Graduate', occupation: 'Youth Change Agent', mapNodeId: 'h11' },
  { id: 'v12', houseNumber: 'C-4', headOfHousehold: 'Kamleshwari', familyCount: 3, isPop: true, mgnregaJobCard: false, caste: 'SC', age: 45, qualification: 'Middle', occupation: 'SHG Member', mapNodeId: 'h12' },
];

/** Village demographic summary used by the dashboard PieChart. */
export const VILLAGE_DEMOGRAPHICS = [
  { name: 'Own Land', value: 58 },
  { name: 'Landless', value: 42 },
  { name: 'MGNREGA Job Card', value: 67 },
  { name: 'SHG Members', value: 38 },
  { name: 'Poorest of Poor', value: 41 },
];
