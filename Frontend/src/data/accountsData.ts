/**
 * Official Financial Statements & Transaction Ledgers
 * Sourced directly from "Work1/AIRD Accounts.xlsx" (verbatim data across 8 financial years).
 */

export interface MultiYearSummaryRecord {
  year: string;
  donationForActivities: number;
  returnableDonation: number;
  totalReceipts: number;
  activitiesExpenditure: number;
  donationReturned: number;
  totalExpenditure: number;
  liability: number;
}

export interface VillageAdoptionFinancialPosition {
  period: string;
  asOn: string;
  note: string;
  donationForActivities: number;
  returnableDonation: number;
  totalReceipts: number;
  activitiesExpenditure: number;
  donationReturned: number;
  totalExpenditure: number;
  liability: number;
  cashInHand: number;
  depositInBank: number;
}

export interface AccountTransaction {
  date: string;
  receivedFrom?: string;
  income?: number;
  cashIncome?: number;
  bankIncome?: number;
  purpose?: string;
  expenditure?: number;
  cashInHand?: number;
  bankBalance?: number;
}

export interface YearAccountStatement {
  id: string;
  yearLabel: string;
  periodLabel: string;
  summary: {
    totalIncome: number;
    totalExpenditure: number;
    closingCashInHand: number;
    closingBankBalance: number;
  };
  transactions: AccountTransaction[];
}

export const FINANCIAL_POSITION_SUMMARY: MultiYearSummaryRecord[] = [
  {
    "year": "FY 2019\u201320",
    "donationForActivities": 11800.0,
    "returnableDonation": 0.0,
    "totalReceipts": 11800.0,
    "activitiesExpenditure": 11660.0,
    "donationReturned": 0.0,
    "totalExpenditure": 11660.0,
    "liability": 0.0
  },
  {
    "year": "FY 2020\u201321",
    "donationForActivities": 14285.0,
    "returnableDonation": 11000.0,
    "totalReceipts": 25285.0,
    "activitiesExpenditure": 12822.0,
    "donationReturned": 0.0,
    "totalExpenditure": 12822.0,
    "liability": 11000.0
  },
  {
    "year": "FY 2021\u201322",
    "donationForActivities": 9200.0,
    "returnableDonation": 5000.0,
    "totalReceipts": 14200.0,
    "activitiesExpenditure": 7959.0,
    "donationReturned": 5000.0,
    "totalExpenditure": 12959.0,
    "liability": 11000.0
  },
  {
    "year": "FY 2022\u201323",
    "donationForActivities": 23881.0,
    "returnableDonation": 33800.0,
    "totalReceipts": 57681.0,
    "activitiesExpenditure": 29480.0,
    "donationReturned": 38800.0,
    "totalExpenditure": 68280.0,
    "liability": 6000.0
  },
  {
    "year": "FY 2023\u201324",
    "donationForActivities": 14600.0,
    "returnableDonation": 10000.0,
    "totalReceipts": 24600.0,
    "activitiesExpenditure": 16700.0,
    "donationReturned": 10000.0,
    "totalExpenditure": 26700.0,
    "liability": 6000.0
  },
  {
    "year": "FY 2024\u201325",
    "donationForActivities": 23605.0,
    "returnableDonation": 0.0,
    "totalReceipts": 23605.0,
    "activitiesExpenditure": 20950.0,
    "donationReturned": 0.0,
    "totalExpenditure": 20950.0,
    "liability": 6000.0
  },
  {
    "year": "FY 2025\u201326",
    "donationForActivities": 13100.0,
    "returnableDonation": 6000.0,
    "totalReceipts": 19100.0,
    "activitiesExpenditure": 7700.0,
    "donationReturned": 0.0,
    "totalExpenditure": 7700.0,
    "liability": 12000.0
  }
];

export const FINANCIAL_POSITION_ADOPTION_2026: VillageAdoptionFinancialPosition = {
  "period": "FY 2026\u201327",
  "asOn": "15.08.2026",
  "note": "Financial position of AIRD at the time of adopting village Manpur Lala to demonstrate process",
  "donationForActivities": 20000.0,
  "returnableDonation": 13000.0,
  "totalReceipts": 33000.0,
  "activitiesExpenditure": 3580.0,
  "donationReturned": 0.0,
  "totalExpenditure": 3580.0,
  "liability": 25000.0,
  "cashInHand": 940.0,
  "depositInBank": 32868.9
};

export const YEARLY_ACCOUNT_STATEMENTS: YearAccountStatement[] = [
  {
    "id": "19-20",
    "yearLabel": "FY 2019\u20132020",
    "periodLabel": "02.12.2019 till 31.03.2020",
    "summary": {
      "totalIncome": 11800.0,
      "totalExpenditure": 11660.0,
      "closingCashInHand": 140.0,
      "closingBankBalance": 0.0
    },
    "transactions": [
      {
        "date": "03.12.2019",
        "receivedFrom": "K. C. Tripathi",
        "income": 1100.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1100.0,
        "bankBalance": 0.0
      },
      {
        "date": "03.12.2019",
        "receivedFrom": "Mrs. Neera Tripathi",
        "income": 1000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 2100.0,
        "bankBalance": 0.0
      },
      {
        "date": "03.12.2019",
        "receivedFrom": "Atul Verma",
        "income": 500.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 2600.0,
        "bankBalance": 0.0
      },
      {
        "date": "03.12.2019",
        "receivedFrom": "",
        "income": 0.0,
        "purpose": "Birth day of Development Car founder",
        "expenditure": 1450.0,
        "cashInHand": 1150.0,
        "bankBalance": 0.0
      },
      {
        "date": "05.12.2019",
        "receivedFrom": "Pranshu Tripathi",
        "income": 1500.0,
        "purpose": "Meetings with like mided people to establish an appropriate instute",
        "expenditure": 900.0,
        "cashInHand": 1750.0,
        "bankBalance": 0.0
      },
      {
        "date": "23.12.2019",
        "receivedFrom": "",
        "income": 0.0,
        "purpose": "Meetings with memers of Self Help Group",
        "expenditure": 1500.0,
        "cashInHand": 250.0,
        "bankBalance": 0.0
      },
      {
        "date": "25.12.2019",
        "receivedFrom": "Mrs. Neera Tripathi",
        "income": 2000.0,
        "purpose": "Meetings with villagers to explore opportunity",
        "expenditure": 2110.0,
        "cashInHand": 140.0,
        "bankBalance": 0.0
      },
      {
        "date": "13 .01.2020",
        "receivedFrom": "K. C. Tripathi",
        "income": 2000.0,
        "purpose": "Meeting with villagers to slect local people to provide position in management of trust",
        "expenditure": 890.0,
        "cashInHand": 1250.0,
        "bankBalance": 0.0
      },
      {
        "date": "14 .01.2020",
        "receivedFrom": "",
        "income": 0.0,
        "purpose": "Meeting to finalise objectives of trust and members of BoT",
        "expenditure": 160.0,
        "cashInHand": 1090.0,
        "bankBalance": 0.0
      },
      {
        "date": "26 .01.2019",
        "receivedFrom": "Pranshu Tripathi",
        "income": 2100.0,
        "purpose": "Participatory planning to develop village as live model on process of development",
        "expenditure": 350.0,
        "cashInHand": 2840.0,
        "bankBalance": 0.0
      },
      {
        "date": "31.01.2020",
        "receivedFrom": "",
        "income": 0.0,
        "purpose": "Registration of Trust",
        "expenditure": 2600.0,
        "cashInHand": 240.0,
        "bankBalance": 0.0
      },
      {
        "date": "02.02.2020",
        "receivedFrom": "Neera Tripathu",
        "income": 1100.0,
        "purpose": "Planning KRANTI for Swaraj",
        "expenditure": 170.0,
        "cashInHand": 1170.0,
        "bankBalance": 0.0
      },
      {
        "date": "08.03.2020",
        "receivedFrom": "",
        "income": 0.0,
        "purpose": "PAC card",
        "expenditure": 250.0,
        "cashInHand": 920.0,
        "bankBalance": 0.0
      },
      {
        "date": "12.03.2020",
        "receivedFrom": "Mrs. Neera Tripathi",
        "income": 500.0,
        "purpose": "Meeting with villagers on Transperancy and Devlopment",
        "expenditure": 900.0,
        "cashInHand": 520.0,
        "bankBalance": 0.0
      },
      {
        "date": "30.03.2020",
        "receivedFrom": "",
        "income": 0.0,
        "purpose": "Review meeting",
        "expenditure": 380.0,
        "cashInHand": 140.0,
        "bankBalance": 0.0
      }
    ]
  },
  {
    "id": "20-21",
    "yearLabel": "FY 2020\u20132021",
    "periodLabel": "01.04.2020 till 31.03.2021",
    "summary": {
      "totalIncome": 14285.0,
      "totalExpenditure": 12821.93,
      "closingCashInHand": 0.0,
      "closingBankBalance": 11143.07
    },
    "transactions": [
      {
        "date": "01.04.2020",
        "receivedFrom": "BF",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 140.0,
        "bankBalance": 0.0
      },
      {
        "date": "22.04.2020",
        "receivedFrom": "K. C. Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Earth Day",
        "expenditure": 780.0,
        "cashInHand": 360.0,
        "bankBalance": 0.0
      },
      {
        "date": "05.05.2020",
        "receivedFrom": "Pranshu Tripathi",
        "income": 500.0,
        "cashIncome": 500.0,
        "bankIncome": 0.0,
        "purpose": "Environment Day",
        "expenditure": 210.0,
        "cashInHand": 650.0,
        "bankBalance": 0.0
      },
      {
        "date": "30.06.2020",
        "receivedFrom": "Neera Tripathi (RD)",
        "income": 11000.0,
        "cashIncome": 11000.0,
        "bankIncome": 0.0,
        "purpose": "A/C opening in SBI",
        "expenditure": 10000.0,
        "cashInHand": 1650.0,
        "bankBalance": 10000.0
      },
      {
        "date": "01.07.2020",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Cheque book issue charges",
        "expenditure": 177.0,
        "cashInHand": 0.0,
        "bankBalance": 9823.0
      },
      {
        "date": "04.7.2020",
        "receivedFrom": "K. C. Tripathi",
        "income": 1100.0,
        "cashIncome": 1100.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 0.0,
        "bankBalance": 10923.0
      },
      {
        "date": "25.09.2020",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Birth day of Bank Uncle",
        "expenditure": 240.0,
        "cashInHand": 1410.0,
        "bankBalance": 10923.0
      },
      {
        "date": "12.10.2020",
        "receivedFrom": "BRP",
        "income": 120.0,
        "cashIncome": 0.0,
        "bankIncome": 120.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 0.0,
        "bankBalance": 11043.0
      },
      {
        "date": "13.10.2020",
        "receivedFrom": "BRP",
        "income": 121.0,
        "cashIncome": 0.0,
        "bankIncome": 121.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 0.0,
        "bankBalance": 11164.0
      },
      {
        "date": "13.10.2020",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Bank charges",
        "expenditure": 10.0,
        "cashInHand": 0.0,
        "bankBalance": 11154.0
      },
      {
        "date": "15.10.2020",
        "receivedFrom": "BRP",
        "income": 333.0,
        "cashIncome": 0.0,
        "bankIncome": 333.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 0.0,
        "bankBalance": 11487.0
      },
      {
        "date": "05.11.2020",
        "receivedFrom": "BRP",
        "income": 111.0,
        "cashIncome": 0.0,
        "bankIncome": 111.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 0.0,
        "bankBalance": 11598.0
      },
      {
        "date": "03.12.2020",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Foundation day of AIRD",
        "expenditure": 480.0,
        "cashInHand": 930.0,
        "bankBalance": 11598.0
      },
      {
        "date": "12.01.2021",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Vivaknada Jayanti",
        "expenditure": 470.0,
        "cashInHand": 460.0,
        "bankBalance": 11598.0
      },
      {
        "date": "12.03.2021",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "A/C keeping charges",
        "expenditure": 454.93,
        "cashInHand": 0.0,
        "bankBalance": 11143.07
      }
    ]
  },
  {
    "id": "21-22",
    "yearLabel": "FY 2021\u20132022",
    "periodLabel": "01.04.2021 till 31.03.2022",
    "summary": {
      "totalIncome": 14200.0,
      "totalExpenditure": 7959.0,
      "closingCashInHand": 1350.0,
      "closingBankBalance": 16494.07
    },
    "transactions": [
      {
        "date": "B/F",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 460.0,
        "bankBalance": 11143.07
      },
      {
        "date": "20.09/21",
        "receivedFrom": "K. C. Tripathi",
        "income": 1100.0,
        "cashIncome": 1100.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1560.0,
        "bankBalance": 11143.07
      },
      {
        "date": "25.09.21",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Birthday of Bank uncle",
        "expenditure": 660.0,
        "cashInHand": 900.0,
        "bankBalance": 11143.07
      },
      {
        "date": "22.12.21",
        "receivedFrom": "Razor pay",
        "income": 1.0,
        "cashIncome": 0.0,
        "bankIncome": 1.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 900.0,
        "bankBalance": 11144.07
      },
      {
        "date": "29.12.21",
        "receivedFrom": "Razor pay",
        "income": 1.0,
        "cashIncome": 0.0,
        "bankIncome": 1.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 900.0,
        "bankBalance": 11145.07
      },
      {
        "date": "03.01.22",
        "receivedFrom": "Ankur (RD)",
        "income": 1000.0,
        "cashIncome": 0.0,
        "bankIncome": 1000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 900.0,
        "bankBalance": 12145.07
      },
      {
        "date": "04.01.22",
        "receivedFrom": "Bhawana (RD)",
        "income": 1000.0,
        "cashIncome": 0.0,
        "bankIncome": 1000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 900.0,
        "bankBalance": 13145.07
      },
      {
        "date": "o4.01.22",
        "receivedFrom": "Neera Tripathi",
        "income": 2100.0,
        "cashIncome": 2100.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 3000.0,
        "bankBalance": 13145.07
      },
      {
        "date": "12.01.22",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Vivekananda Jayanti",
        "expenditure": 1650.0,
        "cashInHand": 1350.0,
        "bankBalance": 13145.07
      },
      {
        "date": "17.01.22",
        "receivedFrom": "K. C. Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 14145.07
      },
      {
        "date": "17.01.22",
        "receivedFrom": "Neera Tripathi (RD)",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 15145.07
      },
      {
        "date": "01.02.22",
        "receivedFrom": "Razor pay",
        "income": 1.0,
        "cashIncome": 0.0,
        "bankIncome": 1.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 15146.07
      },
      {
        "date": "17.02.22",
        "receivedFrom": "Peanshu Tripathi (RD)",
        "income": 2000.0,
        "cashIncome": 2000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 17146.07
      },
      {
        "date": "08.3.22",
        "receivedFrom": "Razor pay",
        "income": 1.0,
        "cashIncome": 0.0,
        "bankIncome": 1.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 17147.07
      },
      {
        "date": "08.03.22",
        "receivedFrom": "Kutumbh",
        "income": 101.0,
        "cashIncome": 0.0,
        "bankIncome": 101.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 17248.07
      },
      {
        "date": "08.03.22",
        "receivedFrom": "Kutumbh",
        "income": 101.0,
        "cashIncome": 0.0,
        "bankIncome": 101.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 17349.07
      },
      {
        "date": "11.03.22",
        "receivedFrom": "Kutumbh",
        "income": 101.0,
        "cashIncome": 0.0,
        "bankIncome": 101.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 17450.07
      },
      {
        "date": "12.03.22",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "A/C keeping charges",
        "expenditure": 649.0,
        "cashInHand": 1350.0,
        "bankBalance": 16801.07
      },
      {
        "date": "17.03.22",
        "receivedFrom": "Ravi",
        "income": 3990.0,
        "cashIncome": 0.0,
        "bankIncome": 3990.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 20791.07
      },
      {
        "date": "17.03.22",
        "receivedFrom": "Kutumbh",
        "income": 101.0,
        "cashIncome": 0.0,
        "bankIncome": 101.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 20892.07
      },
      {
        "date": "19.03.22",
        "receivedFrom": "Kutumbh",
        "income": 101.0,
        "cashIncome": 0.0,
        "bankIncome": 101.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 20993.07
      },
      {
        "date": "21.03.22",
        "receivedFrom": "",
        "income": 501.0,
        "cashIncome": 0.0,
        "bankIncome": 501.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 21494.07
      },
      {
        "date": "31.03.22",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "DR",
        "expenditure": 5000.0,
        "cashInHand": 1350.0,
        "bankBalance": 16494.07
      }
    ]
  },
  {
    "id": "22-23",
    "yearLabel": "FY 2022\u20132023",
    "periodLabel": "01.04.2022 till 31.03.2023",
    "summary": {
      "totalIncome": 57681.0,
      "totalExpenditure": 68280.0,
      "closingCashInHand": 2570.0,
      "closingBankBalance": 4026.07
    },
    "transactions": [
      {
        "date": "B/F",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1350.0,
        "bankBalance": 16494.07
      },
      {
        "date": "21.04.22",
        "receivedFrom": "K. C. Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 2350.0,
        "bankBalance": 16494.07
      },
      {
        "date": "22.04.22",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Earth Day",
        "expenditure": 890.0,
        "cashInHand": 1460.0,
        "bankBalance": 16494.07
      },
      {
        "date": "18.05.22",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Donation returned (RD) to repay loan of last financial year",
        "expenditure": 5000.0,
        "cashInHand": 1460.0,
        "bankBalance": 11494.07
      },
      {
        "date": "13.07.22",
        "receivedFrom": "Shriya",
        "income": 2700.0,
        "cashIncome": 0.0,
        "bankIncome": 2700.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1460.0,
        "bankBalance": 14194.07
      },
      {
        "date": "16.07.22",
        "receivedFrom": "Neera Tripathi Returnable donation (RD)",
        "income": 11000.0,
        "cashIncome": 11000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1460.0,
        "bankBalance": 25194.07
      },
      {
        "date": "16.07.23",
        "receivedFrom": "Pranshu Tripathi (RD)",
        "income": 11000.0,
        "cashIncome": 11000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1460.0,
        "bankBalance": 36194.07
      },
      {
        "date": "17.07.22",
        "receivedFrom": "Atul Verma (RD)",
        "income": 7800.0,
        "cashIncome": 7800.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1460.0,
        "bankBalance": 43994.07
      },
      {
        "date": "31.07.23",
        "receivedFrom": "Pranshu Tripathi",
        "income": 500.0,
        "cashIncome": 500.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1960.0,
        "bankBalance": 43994.07
      },
      {
        "date": "25.9.23",
        "receivedFrom": "K.C. Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Bank Uncle Day",
        "expenditure": 1240.0,
        "cashInHand": 1720.0,
        "bankBalance": 43994.07
      },
      {
        "date": "14.11.22",
        "receivedFrom": "Shriya",
        "income": 3296.0,
        "cashIncome": 0.0,
        "bankIncome": 3296.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1720.0,
        "bankBalance": 47290.07
      },
      {
        "date": "29.11.22",
        "receivedFrom": "Rajiv",
        "income": 110.0,
        "cashIncome": 0.0,
        "bankIncome": 110.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1720.0,
        "bankBalance": 47400.07
      },
      {
        "date": "01.12.22",
        "receivedFrom": "Shriya",
        "income": 3000.0,
        "cashIncome": 0.0,
        "bankIncome": 3000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1720.0,
        "bankBalance": 50400.07
      },
      {
        "date": "3.12.22",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Development Car Day",
        "expenditure": 870.0,
        "cashInHand": 850.0,
        "bankBalance": 50400.07
      },
      {
        "date": "05.12.22",
        "receivedFrom": "Rajiv",
        "income": 415.0,
        "cashIncome": 0.0,
        "bankIncome": 415.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 850.0,
        "bankBalance": 50815.07
      },
      {
        "date": "12.12.22",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "DR",
        "expenditure": 11000.0,
        "cashInHand": 850.0,
        "bankBalance": 39815.07
      },
      {
        "date": "14.12.22",
        "receivedFrom": "Rajiv",
        "income": 100.0,
        "cashIncome": 0.0,
        "bankIncome": 100.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 850.0,
        "bankBalance": 39915.07
      },
      {
        "date": "28.12.22",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "DR",
        "expenditure": 11000.0,
        "cashInHand": 850.0,
        "bankBalance": 28915.07
      },
      {
        "date": "30.12.22",
        "receivedFrom": "Neera Tripathi",
        "income": 3000.0,
        "cashIncome": 3000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 3850.0,
        "bankBalance": 28915.07
      },
      {
        "date": "12.01.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Vivekananda Jayanti",
        "expenditure": 1800.0,
        "cashInHand": 2050.0,
        "bankBalance": 28915.07
      },
      {
        "date": "14.01.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Spritual science and development",
        "expenditure": 880.0,
        "cashInHand": 1170.0,
        "bankBalance": 28915.07
      },
      {
        "date": "17.01.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Website development",
        "expenditure": 3000.0,
        "cashInHand": 1170.0,
        "bankBalance": 25915.07
      },
      {
        "date": "27.01.23",
        "receivedFrom": "Rajiv (RD)",
        "income": 4000.0,
        "cashIncome": 0.0,
        "bankIncome": 4000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1170.0,
        "bankBalance": 29915.07
      },
      {
        "date": "27.01.23",
        "receivedFrom": "Shriya",
        "income": 3160.0,
        "cashIncome": 0.0,
        "bankIncome": 3160.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1170.0,
        "bankBalance": 33075.07
      },
      {
        "date": "31/1/23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Foundation Day",
        "expenditure": 760.0,
        "cashInHand": 410.0,
        "bankBalance": 33075.07
      },
      {
        "date": "14.02.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 17410.0,
        "bankBalance": 16075.07
      },
      {
        "date": "16.02.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Old laptop",
        "expenditure": 12000.0,
        "cashInHand": 5410.0,
        "bankBalance": 16075.07
      },
      {
        "date": "18.02.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Community dinner",
        "expenditure": 1400.0,
        "cashInHand": 4010.0,
        "bankBalance": 16075.07
      },
      {
        "date": "22.02.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Medical support to Archna",
        "expenditure": 2600.0,
        "cashInHand": 1410.0,
        "bankBalance": 16075.07
      },
      {
        "date": "26.02.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Community meet",
        "expenditure": 560.0,
        "cashInHand": 850.0,
        "bankBalance": 16075.07
      },
      {
        "date": "28.02.23",
        "receivedFrom": "Archna returned support",
        "income": 2600.0,
        "cashIncome": 0.0,
        "bankIncome": 2600.0,
        "purpose": "Spirirual camp",
        "expenditure": 180.0,
        "cashInHand": 670.0,
        "bankBalance": 18675.07
      },
      {
        "date": "03.03.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 17670.0,
        "bankBalance": 1675.07
      },
      {
        "date": "05.03.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "DR",
        "expenditure": 7800.0,
        "cashInHand": 9870.0,
        "bankBalance": 1675.07
      },
      {
        "date": "05.03.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "DR",
        "expenditure": 4000.0,
        "cashInHand": 5870.0,
        "bankBalance": 1675.07
      },
      {
        "date": "05.03.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Office assistance",
        "expenditure": 1300.0,
        "cashInHand": 4570.0,
        "bankBalance": 1675.07
      },
      {
        "date": "06.03.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Website development",
        "expenditure": 2000.0,
        "cashInHand": 2570.0,
        "bankBalance": 1675.07
      },
      {
        "date": "12.03.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 2570.0,
        "bankBalance": 1026.07
      },
      {
        "date": "18.3.23",
        "receivedFrom": "Shriya",
        "income": 3000.0,
        "cashIncome": 0.0,
        "bankIncome": 3000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 2570.0,
        "bankBalance": 4026.07
      }
    ]
  },
  {
    "id": "23-24",
    "yearLabel": "FY 2023\u20132024",
    "periodLabel": "01.04.2023 till 31.03.2024",
    "summary": {
      "totalIncome": 24600.0,
      "totalExpenditure": 26700.0,
      "closingCashInHand": 470.0,
      "closingBankBalance": 0.0
    },
    "transactions": [
      {
        "date": "",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "B/F",
        "expenditure": 0.0,
        "cashInHand": 2570.0,
        "bankBalance": 4026.07
      },
      {
        "date": "2.4.23",
        "receivedFrom": "K.C. Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Meeting with Bord of Directors",
        "expenditure": 2170.0,
        "cashInHand": 1400.0,
        "bankBalance": 4026.07
      },
      {
        "date": "22.4.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Eqarth Day",
        "expenditure": 980.0,
        "cashInHand": 420.0,
        "bankBalance": 4026.07
      },
      {
        "date": "25.4.23",
        "receivedFrom": "Atul Verma",
        "income": 1100.0,
        "cashIncome": 1100.0,
        "bankIncome": 0.0,
        "purpose": "Panchaayt Diwas",
        "expenditure": 1230.0,
        "cashInHand": 290.0,
        "bankBalance": 4026.07
      },
      {
        "date": "31.5.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 290.0,
        "bankBalance": 3436.07
      },
      {
        "date": "30.6.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 290.0,
        "bankBalance": 2846.07
      },
      {
        "date": "31.7.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 290.0,
        "bankBalance": 2256.07
      },
      {
        "date": "18.8.23",
        "receivedFrom": "RD",
        "income": 10000.0,
        "cashIncome": 10000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 290.0,
        "bankBalance": 12256.07
      },
      {
        "date": "29.8.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "DR",
        "expenditure": 5000.0,
        "cashInHand": 290.0,
        "bankBalance": 7256.07
      },
      {
        "date": "13.9.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 290.0,
        "bankBalance": 7286.07
      },
      {
        "date": "19.9.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 290.0,
        "bankBalance": 7656.07
      },
      {
        "date": "25.9.23",
        "receivedFrom": "K.C. Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Ban Uncle Day",
        "expenditure": 760.0,
        "cashInHand": 530.0,
        "bankBalance": 7656.07
      },
      {
        "date": "27.9.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "DR",
        "expenditure": 5000.0,
        "cashInHand": 530.0,
        "bankBalance": 2656.07
      },
      {
        "date": "31.10.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 530.0,
        "bankBalance": 2066.07
      },
      {
        "date": "30.11.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 530.0,
        "bankBalance": 1476.07
      },
      {
        "date": "3.12.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Development Car Day",
        "expenditure": 180.0,
        "cashInHand": 350.0,
        "bankBalance": 1476.07
      },
      {
        "date": "31.12.23",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 350.0,
        "bankBalance": 886.07
      },
      {
        "date": "2.1.24",
        "receivedFrom": "K.C. Tripathi",
        "income": 500.0,
        "cashIncome": 500.0,
        "bankIncome": 0.0,
        "purpose": "Bord meeting",
        "expenditure": 770.0,
        "cashInHand": 80.0,
        "bankBalance": 886.07
      },
      {
        "date": "5.1.24",
        "receivedFrom": "Poonam RD",
        "income": 10000.0,
        "cashIncome": 0.0,
        "bankIncome": 10000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 80.0,
        "bankBalance": 10886.07
      },
      {
        "date": "18.1.24",
        "receivedFrom": "Poonam DR",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "DR",
        "expenditure": 10000.0,
        "cashInHand": 80.0,
        "bankBalance": 886.07
      },
      {
        "date": "31.1.24",
        "receivedFrom": "Neera Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Foundation Day",
        "expenditure": 610.0,
        "cashInHand": 470.0,
        "bankBalance": 886.07
      },
      {
        "date": "29.2.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 470.0,
        "bankBalance": 296.07
      },
      {
        "date": "12.3.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 470.0,
        "bankBalance": 0.0
      }
    ]
  },
  {
    "id": "24-25",
    "yearLabel": "FY 2024\u20132025",
    "periodLabel": "01.04.2024 till 31.03.2025",
    "summary": {
      "totalIncome": 23605.0,
      "totalExpenditure": 20950.0,
      "closingCashInHand": 120.0,
      "closingBankBalance": 0.0
    },
    "transactions": [
      {
        "date": "",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "B/F",
        "expenditure": 0.0,
        "cashInHand": 470.0,
        "bankBalance": 0.0
      },
      {
        "date": "2.4.24",
        "receivedFrom": "Atul Verma",
        "income": 1100.0,
        "cashIncome": 1100.0,
        "bankIncome": 0.0,
        "purpose": "Bord meeting",
        "expenditure": 780.0,
        "cashInHand": 790.0,
        "bankBalance": 0.0
      },
      {
        "date": "22.4.24",
        "receivedFrom": "Neera Tripathi",
        "income": 500.0,
        "cashIncome": 500.0,
        "bankIncome": 0.0,
        "purpose": "Earth Day",
        "expenditure": 870.0,
        "cashInHand": 420.0,
        "bankBalance": 0.0
      },
      {
        "date": "25.4.24",
        "receivedFrom": "K. C. Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Panchayat Diwas",
        "expenditure": 1120.0,
        "cashInHand": 300.0,
        "bankBalance": 0.0
      },
      {
        "date": "5.5.24",
        "receivedFrom": "SSS",
        "income": 5.0,
        "cashIncome": 0.0,
        "bankIncome": 5.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 300.0,
        "bankBalance": 5.0
      },
      {
        "date": "5.5.24",
        "receivedFrom": "SSS",
        "income": 20000.0,
        "cashIncome": 0.0,
        "bankIncome": 20000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 300.0,
        "bankBalance": 20005.0
      },
      {
        "date": "5.5.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 300.0,
        "bankBalance": 19652.07
      },
      {
        "date": "6.5.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 300.0,
        "bankBalance": 18472.07
      },
      {
        "date": "21.5.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Spiritual camps",
        "expenditure": 970.0,
        "cashInHand": 4330.0,
        "bankBalance": 13472.07
      },
      {
        "date": "26.5.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Community meet",
        "expenditure": 1120.0,
        "cashInHand": 3210.0,
        "bankBalance": 0.0
      },
      {
        "date": "29.5.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Community meet",
        "expenditure": 1210.0,
        "cashInHand": 2000.0,
        "bankBalance": 0.0
      },
      {
        "date": "5.6.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Community meet",
        "expenditure": 1130.0,
        "cashInHand": 870.0,
        "bankBalance": 0.0
      },
      {
        "date": "18.6.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Community meet",
        "expenditure": 760.0,
        "cashInHand": 110.0,
        "bankBalance": 0.0
      },
      {
        "date": "27.6.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Experience sharing meet",
        "expenditure": 1760.0,
        "cashInHand": 1350.0,
        "bankBalance": 10472.07
      },
      {
        "date": "",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Community meet",
        "expenditure": 970.0,
        "cashInHand": 380.0,
        "bankBalance": 0.0
      },
      {
        "date": "25.9.24",
        "receivedFrom": "Gaurav Pandey",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Ban Uncle Day",
        "expenditure": 540.0,
        "cashInHand": 840.0,
        "bankBalance": 0.0
      },
      {
        "date": "3.12.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Development Car Day",
        "expenditure": 570.0,
        "cashInHand": 270.0,
        "bankBalance": 0.0
      },
      {
        "date": "27.12.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Workshop to develop action plan",
        "expenditure": 3660.0,
        "cashInHand": 5610.0,
        "bankBalance": 1472.07
      },
      {
        "date": "29.12.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Development of educational material",
        "expenditure": 2980.0,
        "cashInHand": 2630.0,
        "bankBalance": 0.0
      },
      {
        "date": "30.12.24",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Meeting of Bord Directors",
        "expenditure": 1480.0,
        "cashInHand": 1150.0,
        "bankBalance": 0.0
      },
      {
        "date": "5.1.25",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Formulation of project",
        "expenditure": 780.0,
        "cashInHand": 370.0,
        "bankBalance": 0.0
      },
      {
        "date": "31.1.25",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Foundation Day",
        "expenditure": 250.0,
        "cashInHand": 120.0,
        "bankBalance": 0.0
      },
      {
        "date": "31.1.25",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 120.0,
        "bankBalance": 882.07
      },
      {
        "date": "28.2.25",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 120.0,
        "bankBalance": 292.07
      },
      {
        "date": "12.3.25",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Account keeping charges",
        "expenditure": 0.0,
        "cashInHand": 120.0,
        "bankBalance": 0.0
      }
    ]
  },
  {
    "id": "25-26",
    "yearLabel": "FY 2025\u20132026",
    "periodLabel": "01.04.2025 till 31.03.2026",
    "summary": {
      "totalIncome": 19100.0,
      "totalExpenditure": 7700.0,
      "closingCashInHand": 1520.0,
      "closingBankBalance": 1677.0
    },
    "transactions": [
      {
        "date": "",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 120.0,
        "bankBalance": 0.0
      },
      {
        "date": "22.4.25",
        "receivedFrom": "Pranshu Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Earth Day",
        "expenditure": 380.0,
        "cashInHand": 740.0,
        "bankBalance": 0.0
      },
      {
        "date": "25.4.25",
        "receivedFrom": "K. C. Tripathi",
        "income": 1100.0,
        "cashIncome": 1100.0,
        "bankIncome": 0.0,
        "purpose": "Panchayat Dawas",
        "expenditure": 1270.0,
        "cashInHand": 570.0,
        "bankBalance": 0.0
      },
      {
        "date": "25.9.25",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Bank Uncle Day",
        "expenditure": 210.0,
        "cashInHand": 360.0,
        "bankBalance": 0.0
      },
      {
        "date": "3.12.25",
        "receivedFrom": "Neera Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Development Car Day",
        "expenditure": 370.0,
        "cashInHand": 990.0,
        "bankBalance": 0.0
      },
      {
        "date": "31.1.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Foundaton Day",
        "expenditure": 280.0,
        "cashInHand": 710.0,
        "bankBalance": 0.0
      },
      {
        "date": "2.2.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Directors meet",
        "expenditure": 190.0,
        "cashInHand": 520.0,
        "bankBalance": 0.0
      },
      {
        "date": "15.3.26",
        "receivedFrom": "Neera RD",
        "income": 6000.0,
        "cashIncome": 6000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 6520.0,
        "bankBalance": 0.0
      },
      {
        "date": "16.3.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Honorarium of experts",
        "expenditure": 5000.0,
        "cashInHand": 1520.0,
        "bankBalance": 0.0
      },
      {
        "date": "23.3.26",
        "receivedFrom": "Jajeevan mission report",
        "income": 10000.0,
        "cashIncome": 0.0,
        "bankIncome": 10000.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1520.0,
        "bankBalance": 10000.0
      },
      {
        "date": "23.3.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Bank charges",
        "expenditure": 0.0,
        "cashInHand": 1520.0,
        "bankBalance": 9347.0
      },
      {
        "date": "24.3.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Bank charges",
        "expenditure": 0.0,
        "cashInHand": 1520.0,
        "bankBalance": 2267.0
      },
      {
        "date": "31.3.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Bank charges",
        "expenditure": 0.0,
        "cashInHand": 1520.0,
        "bankBalance": 1677.0
      }
    ]
  },
  {
    "id": "26-27",
    "yearLabel": "FY 2026\u20132027",
    "periodLabel": "01.04.2026 till 15.08.2026 (Ongoing)",
    "summary": {
      "totalIncome": 33000.0,
      "totalExpenditure": 3580.0,
      "closingCashInHand": 940.0,
      "closingBankBalance": 32868.9
    },
    "transactions": [
      {
        "date": "B/F",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1520.0,
        "bankBalance": 1677.0
      },
      {
        "date": "3.4.26",
        "receivedFrom": "Neera Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "Directors meet",
        "expenditure": 1110.0,
        "cashInHand": 1410.0,
        "bankBalance": 1677.0
      },
      {
        "date": "3.4.26",
        "receivedFrom": "Dhananjay",
        "income": 4000.0,
        "cashIncome": 4000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 5410.0,
        "bankBalance": 1677.0
      },
      {
        "date": "3.4.26",
        "receivedFrom": "Prandhu",
        "income": 4000.0,
        "cashIncome": 4000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 9410.0,
        "bankBalance": 1677.0
      },
      {
        "date": "3.4.26",
        "receivedFrom": "Atul Verma",
        "income": 4000.0,
        "cashIncome": 4000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 13410.0,
        "bankBalance": 1677.0
      },
      {
        "date": "3.4.26",
        "receivedFrom": "Gaurav Pandey RD",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 17410.0,
        "bankBalance": 1677.0
      },
      {
        "date": "4.4.26",
        "receivedFrom": "Rajeev Saxena RD",
        "income": 4000.0,
        "cashIncome": 4000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 18410.0,
        "bankBalance": 1677.0
      },
      {
        "date": "4.4.26",
        "receivedFrom": "Raghvebdra Mathur RD",
        "income": 5000.0,
        "cashIncome": 5000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 22410.0,
        "bankBalance": 1677.0
      },
      {
        "date": "5.4.26",
        "receivedFrom": "Pragya RD",
        "income": 3000.0,
        "cashIncome": 3000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 27410.0,
        "bankBalance": 1677.0
      },
      {
        "date": "6.4.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 2410.0,
        "bankBalance": 26677.0
      },
      {
        "date": "22.4.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Earth Day",
        "expenditure": 310.0,
        "cashInHand": 2100.0,
        "bankBalance": 0.0
      },
      {
        "date": "24.4.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "Panchayat Diwas",
        "expenditure": 1160.0,
        "cashInHand": 940.0,
        "bankBalance": 0.0
      },
      {
        "date": "10.5.26",
        "receivedFrom": "Neera Tripathi",
        "income": 1000.0,
        "cashIncome": 1000.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1940.0,
        "bankBalance": 0.0
      },
      {
        "date": "11.5.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1940.0,
        "bankBalance": 26772.95
      },
      {
        "date": "12.5.26",
        "receivedFrom": "",
        "income": 0.0,
        "cashIncome": 0.0,
        "bankIncome": 0.0,
        "purpose": "",
        "expenditure": 0.0,
        "cashInHand": 1940.0,
        "bankBalance": 26868.9
      },
      {
        "date": "15.8.26",
        "receivedFrom": "Bhawana SaxenaRD",
        "income": 6000.0,
        "cashIncome": 0.0,
        "bankIncome": 6000.0,
        "purpose": "Website",
        "expenditure": 1000.0,
        "cashInHand": 940.0,
        "bankBalance": 32868.9
      }
    ]
  }
];
