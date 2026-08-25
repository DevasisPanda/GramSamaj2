# AIRD Frontend — Content Connection Instructions

**Purpose:** How to connect every piece of frontend content to its official source document in `Work/`. Read together with `CONTENT_MAP.md` (the master mapping). These rules are binding for any code or content change.

---

## 1. Golden Rules (non-negotiable)

1. **Never invent content.** Every sentence shown on the site must exist in a `Work/` document. No AI-generated paragraphs, no filler statistics, no invented dates, names, or quotes.
2. **Source of truth is `Work/*.docx|.xlsx`, not the extracted `.txt` files.** The plain-text extractions in `.zcode\docs_txt\` are reading aids only; if they disagree with the docx, the docx wins.
3. **Previews allowed, rewrites forbidden.** The UI may show a truncated opening paragraph plus a "Read more" that expands to the FULL documented text. Paraphrasing documented text into "nicer" prose is NOT allowed.
4. **When two documents could feed one section, STOP and ask the client which filename to use.** Do not guess. Known open conflicts are listed in `CONTENT_MAP.md §6`.
5. **Never merge documents that are separate by design.** Philosophy ≠ Teachings. Development Car (G) ≠ Facts of life. Strategy ≠ Concept. Homepage content comes from homepage documents, not from page documents.
6. **Sensitive data stays masked** on public pages: trustee Aadhaar, trustee PAN, full bank account number. Show masked forms (`••••••85277`) + "contact AIRD" note, exactly as in `lib/constants.ts`.
7. **Every data module must document its source filename(s)** in the header comment, including line/section references where practical.

---

## 2. Where content lives in the frontend

| Layer | Path | Rule |
|-------|------|------|
| Long-form text modules | `Frontend/src/data/*.ts` | ALL documented text goes here, verbatim, typed and exported. Pages import from here; pages never hardcode body copy. |
| Global constants | `Frontend/src/lib/constants.ts` | Registration no., NGO Darpan, PAN (org), address, email, mobile, masked bank, slogans, NAV_TREE. |
| Pages | `Frontend/src/pages/public/*.tsx` | Layout/JSX only; pull copy from `data/`. |
| Homepage sections | `Frontend/src/pages/public/sections/*.tsx` | One component per documented homepage block. |

Workflow for any content change:
```
Work/<Document>.docx  →  src/data/<module>.ts (verbatim)  →  page/section renders it
        ▲                                                    │
        └────────── update map: CONTENT_MAP.md ←─────────────┘
```

---

## 3. Page → Document wiring (authoritative)

Use `CONTENT_MAP.md` §3 for the full table. Quick reference:

| Route | Data module | Source document(s) |
|-------|-------------|--------------------|
| `/` Home | `data/homepage.ts`, `data/events.ts`, `data/kranti.ts`, `data/donors.ts`, `data/videos.ts`, `data/villagers.ts` | Home page final1 (order), Contents for HP Final (long form), Home page (widgets) |
| `/about/trust` | inline via `lib/constants.ts AIRD` | AIRD in brief (+ Website) — mask sensitive fields |
| `/about/vision-mission` | `data/content.ts VISION_SECTIONS` | Vision.docx (**currently paraphrased — restore verbatim**) |
| `/about/aim-objectives` | `data/about.ts AIRD_AIM/AIRD_OBJECTIVES` | AIM.docx, Objectives.docx (about.ts copy is near-verbatim — prefer it over content.ts rewrite) |
| `/trustee/journey` | `data/content.ts JOURNEY_*` | Journey of trustee1 (role intro paras 1–12 = preview; autobiography = full) |
| `/trustee/board` | `data/trustees.ts TRUSTEES_2026_2027` | Board of Trustee 2026-2027.docx |
| `/trustee/board-2020-2026` | `data/trustees.ts TRUSTEES_2020_2025` | Board of Trustee 2020-2026.docx |
| `/strategy` | `data/content.ts STRATEGY_*` | Strategy1.docx (restore full paragraphs per heading) |
| `/concept` | `data/content.ts CONCEPT_SECTIONS` | Concept.docx |
| `/initiation` | `data/content.ts INITIATION_SECTIONS` | Initiation.docx |
| `/philosophy` | `data/philosophy.ts` | Philosophy.docx (full version) |
| `/teachings` | `data/homepage.ts ARISE_AWAKE / GOAL_OF_SOUL / EHIPASSIKO_HOME` | Arise! Awake…, Dont believe on God, Goal of soul (+ pending: Facts of life, Humanity and Religion — see CONTENT_MAP §6 #8) |
| `/development-car` | `data/homepage.ts DEV_CAR_HOME` (full text already here) | Development Car1.docx / Contents for HP Final lines 111–121 |
| `/history` | `data/homepage.ts DEV_INDIA_HOME` + `data/content.ts HISTORY_SECTIONS` | Development in India1.docx (K.docx is an older draft — confirmed usage pending) |
| `/kranti` | `data/kranti.ts` | Project KRANTI.docx (components, methodology, benefits, timeline); launch date BLOCKED — see below |
| `/kranti/decentralized-governance` | `data/homepage.ts DECENTRALISED_GOVERNANCE` | Decentralised process of governance.docx |
| `/development-in-india` | `data/homepage.ts DEV_INDIA_HOME` | Development in India1.docx |
| `/activities` | `data/events.ts PAST_ACTIVITIES / PLANNED_ACTIVITIES / EVENTS` | Activity in past1 (past), Activity planned for 2026-2027 (planned), annual reports (calendar events) |
| `/annual-report` | needs new `data/annualReports.ts` | annual report 2020-2021, L3 (=AR 2021-22), 22-23, 23-24, 24-25, 25-26 — all EXIST; remove "Coming soon" |
| `/membership` | `data/membership.ts` | Types of member and membership fee + Benefits of memeber + Membership Form1 (fee table conflict pending) |
| `/donate` | `lib/constants.ts AIRD.bank` (masked) + receipt/certificate PDFs later | Donate.docx UI labels; Receipt.docx; Certificate.docx |
| `/contact` | `lib/constants.ts AIRD` | AIRD in brief / Website |
| `/donors` | `data/donors.ts` | Donors directory1.xlsx (names verified) |
| `/village-directory` | `data/villagers.ts` | Village information.xlsx schema (sample rows flagged as samples) |
| `/gallery`, `/videos` | placeholders | Photos.docx / Vedios.docx templates; await real assets |

---

## 4. Conflicts — STATUS (client rulings locked; see CONTENT_MAP.md §8)

| # | Conflict | Status | Blocks |
|---|----------|--------|--------|
| 1 | KRANTI launch date | ✅ **25 Sep 2026** — surface it (remove "date to be confirmed" from KRANTI_HOME intro) | kranti.ts, KrantiPreview, EVENTS e6 |
| 2 | Membership fees | ✅ Both valid: `Types of member` categories + General **₹10 = minimum donation** note; standard rates ₹100/₹500 & ₹1000/₹5000 | Join page pricing copy |
| 3 | Old board end-year | ✅ **FY 2020–2025** correct → rename route `/trustee/board-2020-2026`, nav label, trustees.ts roster label if needed | NAV_TREE, BoardTrustees2020 |
| 4 | Nav C/D order+labels | Labels fixed by #3; keep Website.docx order (C then D) unless client objects | NAV_TREE |
| 5 | Dev Car variant | ✅ Full narrative as a **slider** on `/development-car` | DevelopmentCar page |
| 6 | Teachings scope | ✅ Existing texts verbatim always; ADD `Facts of life` + `Humanity and Religion` to `/teachings`; never self-write additions | Teachings page + data module |
| 7 | Slogans/homepage order | ✅ Current layout approved (markers were an old header idea); creative freedom in representation, content must stay sourced | Home layout |
| 8 | 80G/12A wording | ✅ State honest status: "12A & 80G approved 2021–22; renewal pending since Dec 2023 rejection" | AboutTrust, Donate |
| 9 | Public contact address | ✅ Show BOTH offices (registered: Nai Basti Babu Ganj; field: 1/58 Priyadarshani Colony, Sitapur Road) | Contact/Footer |
| 10 | Privacy | ✅ Mask donor contacts + village personal fields now; privacy policy later. Annual-report-internal financial figures ARE public (D12); raw ledgers internal-only | donors.ts, villagers.ts rendering |
| 11 | Trust deed PDF | ⏳ Client will provide file → link from `Frontend/public/` when it arrives; no dead link meanwhile | AboutTrust |
| 12 | Board slug | ✅ Rename to `/trustee/board-2020-2025` + redirect old path | App.tsx routes, NAV_TREE |

---

## 5. Mandatory fixes queue (unblocked — all sourced; run in order)

1. **events.ts EVENTS array** — fix Bank Uncle Day (25 Sept, birthday/memorial of Mr. Christopher Baron — NOT a bank-awareness day), Earth Day/Panchayati Raj Day descriptions per 25-26.docx; add Development Car Day (3 Dec), Foundation Day (31 Jan), National Youth Day (12 Jan).
2. **KRANTI date** — set launch 25 Sep 2026 everywhere: `kranti.ts` (already correct), `KRANTI_HOME.intro` (remove "(Launch date to be confirmed)"), keep phase windows from `Activity planned` as-is.
3. **Board labels** — rename to FY 2020–2025 everywhere (route `/trustee/board-2020-2025` + redirect from old `/trustee/board-2020-2026`, NAV_TREE desc, roster label); order C(2020–25) before D(2026–27) per Website.docx.
4. **about.ts BIOGRAPHY_TIMELINE** — rebuild strictly from Trustee.docx career rows + Journey of trustee(1); remove invented entries ("1980s Gosianpurwa", "1993 witnessed amendment").
5. **content.ts** — replace paraphrased sections with verbatim document text (Vision, Strategy, Concept, Initiation, Objectives, History, Teachings, Journey). Keep previews short; full text in read-more.
6. **Teachings page** — add Facts of life + Humanity and Religion (verbatim, as-is) alongside the existing three teachings.
7. **DevelopmentCar page** — render full narrative (`DEV_CAR_HOME.more`) as a slider (reuse/extend DevelopmentCarSlider).
8. **Membership page copy** — add "₹10 minimum donation" note for General members; keep Types-of-member table canonical.
9. **AnnualReport page** — surface the six existing yearly reports as expandable on-page content (docs exist); downloads stay stubbed until PDFs provided.
10. **DevelopmentInIndia.tsx** — remove dead DEVELOPMENT_CAR_SECTIONS import.
11. **Homepage** — layout approved as-is; only content-level fixes above apply. No reorder required.

---

## 6. Verification checklist (run after any content change)

```powershell
cd Frontend
npm run typecheck   # tsc -b --noEmit
npm run lint
npm run build
```

Plus manual checks:
- Every new/changed string can be traced to a named Work/ document (spot-check against `.zcode/docs_txt/<name>.txt`).
- No Aadhaar / PAN / full account number rendered publicly (`grep -r "39452085277\|820392104155\|BFLPT1664J" src/` must return nothing outside comments/constants that are never rendered).
- Update `CONTENT_MAP.md` status column whenever a source/page wiring changes.

---

## 7. Reading aids

- Extracted text of all docx: `.zcode\docs_txt\*.txt`
- Re-extract or extract new docs: `python .zcode\extract_docx.py "Work\<file>.docx"`
- Duplicate detection already done (MD5): see CONTENT_MAP.md §0 — don't create separate content entries for duplicates.
