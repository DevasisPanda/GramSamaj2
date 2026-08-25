# AIRD Content Mapping

**Master content reference — `Work/` folder → Frontend pages.**

- Source of truth: `F:\VS Code\NGOWork3\Work\` (99 files).
- Plain-text extractions of every `.docx` live in `.zcode\docs_txt\` (used for reading; the `.docx` in `Work/` remains canonical).
- Every document was read. Duplicate files were verified by MD5 hash, not assumed.
- **Rule: no invented content.** Where the UI needs a short preview, it must be a truncation/condensation of the documented text, never a rewrite.

---

## 0. The Letter-Code System (from `Website.docx`)

`Website.docx` assigns letters A–Q to site sections. Confirmed by content + MD5:

| Letter | Document (`Work/`) | Content |
|--------|--------------------|---------|
| A | `Trustee.docx` | K. C. Tripathi biodata (DOB 2 Feb 1958, career timeline ATDA → IDG → SDF → SSS → ISSS → AIRD) |
| B | `Journey of trustee.docx` | First-person autobiography (1958 → founding of AIRD 2020) |
| C | `Board of Trustee 2020-2026.docx` | Board roster (in-document heading says "financial year 2020-2025") |
| D | `Board of Trustee 2026-2027.docx` | Current board roster (some slots blank) |
| E | `Strategy.docx` | Strategy for Achieving Gram Swaraj |
| F | `Concept.docx` | Concept & rationale for demonstration village |
| G | `Development Car.docx` | Short DC concept + thoughts + three dimensions + core message |
| H | `Phisolophy.docx` | SHORT philosophy (3 paragraphs only) |
| I | `Initiation.docx` | Origin: 3 Dec 2019, Development Car (1999), KRANTI formulation |
| J | Teachings set (see below) — letter file `j.docx` = `Facts of life.docx` | Spiritual teachings |
| K | `K.docx` = "History of rural development in India" | Timeline 1871–2019 (ends with open question "Action required...?") |
| L | Annual reports: `annual report 2020-2021.docx` (=L2), `L3.docx` (= AR 2021-22), plus `22-23 / 23-24 / 24-25 / 25-26.docx`; `L4, 5, 6,7.docx` = FY22-23→26-27 accounts notes | Yearly reports |
| M | `AIM.docx` | One-line AIM (per Website.docx, "Vision & Mission / Aim" — Vision itself has NO letter code) |
| N | `Objectives.docx` | 16 objectives |
| O | `Project KRANTI.docx` | Full project document (intro, aim, 5 components, activities, methodology 5.1–5.10, 4 presentations/reports, benefits, 7-phase/12-month timeline). No launch date inside. |
| P | `KRANTI in Hindi.docx` | Hindi translation of Project KRANTI |
| Q | `Q.ppt` | "Development Car (Slide show on spiritual teachings)" — legacy image slide deck (contains aird logo + "…believe on God come and see it" slide) |

### Homepage letter-reference markers (verified in raw XML)

`Home page final.docx` AND `Home page final1.docx` both contain plain-text letter markers that reference the Website.docx A–Q codes. They are NOT hyperlinks — they are placement markers:

| Marker | Position in document | Interpretation |
|--------|---------------------|----------------|
| `I` | Immediately after the Ehipassiko ("Don't believe on God come and see") block, just before "Join hands & take action" | Likely marks where **Initiation** (doc I) content/link belongs on the homepage |
| `H G F E D C B A` | Final lines of the document, after "Development in India" | Likely an About-Us strip / footer link row to documents A–H (Trustee, Journey, Boards C&D, Strategy, Concept, Dev Car, Philosophy) — pasted in reverse order |

These markers are the reason the trailing letters appear in both homepage drafts. The intended UI treatment (link strip vs embedded sections vs paste artifact) is **unconfirmed** — see §6 #15.

A single-letter run found in `Contents for HP Final.docx` was verified to be part of the word "AIRD" (split XML runs), not a marker.

### Verified exact duplicates (do NOT treat as separate sources)

**Website.docx reference notes (verified against raw XML):**
- Section list inside Website.docx is literal: `Trustee→A, Journey of trustee→B, Board of Trustee→C+D, Strategy→E, Concept→F, Development Cat[typo for Car]→G, Philosophy→H, Initiation→I, Teachings→J, History of rural development→K, Annual report→L, Vision & Mission (no letter) / Aim→M, Objectives→N, KRANTI for Gram Swaraj→O+P, Development Car slideshow→Q`.
- **L-series numbering:** there is no `L1`. `L2` = Annual Report 2020-21, `L3` = Annual Report 2021-22, `L4–L7` = the file "L4, 5, 6,7.docx" (event-wise accounts FY 2022-23 → 2026-27). Named files 22-23/23-24/24-25/25-26 are the narrative reports for those years.
- The only hyperlink in Website.docx is `mailto:aird.up.india@gmail.com`; the trust-deed "link" is a local file path (PDF not supplied).

| Group | Identical files |
|-------|-----------------|
| Trustee | `Trustee.docx` == `A.docx`; `Trustee1.docx` = same + "Trustee" heading |
| Journey | `Journey of trustee.docx` == `B.docx` |
| Boards | `Board of Trustee 2020-2026.docx` == `C.docx`; `Board of Trustee 2026-2027.docx` == `D.docx` |
| Strategy | `Strategy.docx` == `E.docx` (Strategy1 = same text, inline headings) |
| Concept | `Concept.docx` == `F.docx` |
| Dev Car | `Development Car.docx` == `G.docx` |
| Philosophy | `Phisolophy.docx` == `H.docx` (SHORT); `Philosophy.docx` is the FULL version |
| Initiation | `Initiation.docx` == `I.docx` |
| Teachings | `Facts of life.docx` == `Facts of life1.docx` == `j.docx` |
| Aim/Objectives | `AIM.docx` == `M.txt`; `Objectives.docx` == `N.docx`; `Aim and objectives.docx` == `Aim and objectives1.docx` (M+N combined) |
| KRANTI | `Project KRANTI.docx` == `O.docx`; `KRANTI in Hindi.docx` == `P.docx` |
| Vision | `Vision.docx` == `Vision1.docx` |
| AIRD narrative | `AIRD.docx` == `AIRD2.docx`; `AIRD1.docx` = same with "Read more" break |
| In brief | `AIRD in brief.docx` ≈ `Brief.txt` (same fields) |
| Donate UI | `Donate.docx` == `Donate1.docx` (UI labels only) |
| Activity planned | `Activity planned for 2026-2027.docx` == `Activity planned for 2026-20271.docx` |

---

## 1. Homepage

Documented section ORDER comes from **`Home page final1.docx`** (latest superset).
Long-form "Read more" text comes from **`Contents for HP Final.docx`**.
Functional widgets come from **`Home page.docx`** (home screen spec).

| # | Section (per Home page final1) | Source File | Status in docs |
|---|-------------------------------|-------------|----------------|
| 1 | Title + tagline ("A trust committed to strengthen people's governance 'Gram Swaraj' not on paper but at village level.") | Home page final1 (lines 1–2) | ✅ verbatim |
| 2 | About AIRD intro + Read more | AIRD1 / Contents for HP Final lines 1–7 | ✅ complete |
| 3 | Human and Humanity (+Read more) | Human life.docx | ✅ complete |
| 4 | Goal of Soul — whirlpool (+Read more) | Goal of soul.docx | ✅ complete |
| 5 | Slide show "Spiritual awakening": Arise, Awake (+Read more) | Arise! Awake and Stop not.docx | ✅ complete |
| 6 | "Don't believe on God come and see" — Ehipassiko (+Read more) | Dont believe on God.docx | ✅ complete |
| 7 | Join hands & take action | Home page.docx ("Who can join us": Volunteer / PAR Researcher / Institution partner) | ✅ complete |
| 8 | People's governance in development (+Read more) | People;s governance in development.docx (+ Contents for HP Final lines 12–110) | ✅ complete |
| 9 | What we can do / Model village | What we can do.docx + Contents for HP Final (demonstration village 7 areas) | ✅ complete |
| 10 | Banner | (visual element — no text doc) | ⚠️ asset only |
| 11 | Development Car (+Read more) | Development Car1.docx / Contents for HP Final lines 111–121 (full version); G = short version | ✅ complete (2 variants exist — see §6) |
| 12 | Slogans | Selected slogans from annual report 2020-2021 (Hindi slogans list) | ✅ 5 slogans |
| 13 | KRANTI for Gram Swaraj (+Read more, links to project) | KRANTI.docx (blurb) + Project KRANTI.docx (full) | ⚠️ launch-date conflict (see §6) |
| 14 | Decentralized process of governance (+Read more) | Decentralised process of governance.docx | ✅ complete |
| 15 | Development in India (+Read more) | Development in India1.docx (long form also in Contents for HP Final lines 124–248) | ✅ complete |

### Homepage functional widgets (Home page.docx spec)
| Widget | Requirement (verbatim intent) | Data source |
|--------|-------------------------------|-------------|
| Village photos | Homepage complemented with village photos | Photos.docx template (Date / Activity / Photo) |
| Activity calendar | Past & future activities, date-wise calendar | annual reports L2/L3/22-23…25-26 + Activity planned for 2026-2027 |
| Donors directory | Date, Name, Donated amount | Donors directory.xlsx / Donors directory1.xlsx |
| Villager info | House-wise information of villagers (Excel sheet) | Village information.xlsx / Village information1.xlsx |
| Model village map | House-wise numbered map, enlargable | Village information.xlsx (no map file supplied) |
| Videos | Date-wise activity videos, min 3/month, admin-managed | Vedios.docx template (Date / Activity / Video) |
| About Us menu | Trust, Managing Trustee, Journey, Board, Strategy, Initiation, Teachings, Annual report, Vision & Mission, Aim, Objectives, KRANTI, Development Car slideshow | Website.docx (superset) |
| Contact Us | Person, Address, Phone, Pin-code | AIRD in brief.docx / Website.docx |
| Donate Now | Payment gateway / direct bank / inquiry form | Donate.docx + Receipt.docx + bank fields in AIRD in brief |
| Membership form | Form + submit | Membership form.docx / Membership Form1.docx |

---

## 2. Website Navigation

Master structure: **`Website.docx`**. It defines one top group **About Us** containing, in order:
Trust (In brief) → Trustee (A) → Journey of trustee (B) → Board of Trustee (C, D) → Strategy (E) → Concept (F) → Development Car (G) → Philosophy (H) → Initiation (I) → Teachings (J) → History of rural development (K) → Annual report (L) → Vision & Mission / Aim (M) → Objectives (N) → KRANTI for Gram Swaraj (O, P) → Development Car slideshow (Q).

Additional groups are supported by `Home page.docx`: Activities (calendar/gallery/videos/donors/village data), Get Involved (Membership / Donate / Contact), Important website.

`For consideration.docx` contains an alternative draft menu (About Us, Teachings, Activities, Model Village, Projects, Annual Report, Accounts, Important website, Quarry, Join hand & take action) — treat as superseded draft unless client says otherwise.

---

## 3. Individual Pages

Legend: **Complete** = full documented text available & usable; **Partial** = only part used or doc incomplete.

| Page | Route | Primary Doc | Supporting Docs | Status |
|------|-------|-------------|-----------------|--------|
| Home | `/` | Home page final1 | Contents for HP Final, Home page, AIRD1, What we can do | Complete (order per §1) |
| About (hub) | `/about` | AIRD1 + AIM (M) + Objectives (N) | Journey of trustee (bio), Website | Partial (hub page) |
| Trust / In Brief | `/about/trust` | AIRD in brief | Brief, Website | Complete (**sensitive**: Aadhaar/PAN/full A/C must stay masked) |
| Vision & Mission | `/about/vision-mission` | Vision (=Vision1) | — | Complete |
| Aim & Objectives | `/about/aim-objectives` | AIM (M) + Objectives (N) | Aim and objectives (=M+N) | Complete |
| Trustee profile | (inside journey/about) | Trustee (=A) | Website | Complete |
| Journey of Trustee | `/trustee/journey` | Journey of trustee1 (role intro paras 1–12 + autobiography) | Journey of trustee (=B, autobiography only) | Complete (long-form; UI may preview) |
| Board of Trustees current | `/trustee/board` | Board of Trustee 2026-2027 (=D) | — | Complete (doc has blank slots 13–17) |
| Board of Trustees previous | `/trustee/board-2020-2026` | Board of Trustee 2020-2026 (=C) | — | Complete (heading inside says FY 2020-2025 — see §6) |
| Strategy | `/strategy` | Strategy1 (== Strategy/E) | annual report 2020-2021 (same text embedded) | Complete |
| KRANTI | `/kranti` | Project KRANTI (=O) | KRANTI (blurb), KRANTI in Hindi (=P), Activity planned for 2026-2027 | Complete (date conflict §6) |
| Decentralized Governance | `/kranti/decentralized-governance` | Decentralised process of governance | Contents for HP Final lines 8–11 | Complete |
| Development in India | `/development-in-india` | Development in India1 | Contents for HP Final lines 124–248 | Complete |
| Philosophy | `/philosophy` | Philosophy (FULL version) | Phisolophy (=H short), Humanity and Religion, annual report 2020-2021 philosophy section | Complete |
| Concept | `/concept` | Concept (=F) | annual report 2020-2021 (same text embedded) | Complete |
| Initiation | `/initiation` | Initiation (=I) | Activity in past | Complete |
| Teachings | `/teachings` | Arise! Awake + Dont believe on God + Goal of soul | Facts of life (=j), Human life, Humanity and Religion | Partial — Facts of life & Humanity and Religion currently unused |
| Development Car | `/development-car` | Development Car1 (full narrative) | Development Car (=G short), Q.ppt (slideshow) | Complete (variant choice §6) |
| History of Rural Development | `/history` | Development in India1 (complete version) | K.docx (older draft ending in "?" question) | Complete |
| Activities | `/activities` | Activity planned for 2026-2027 + past reports | Activity in past1 (2019–2026 summary), L4,5,6,7 (accounts/events), annual reports | Complete |
| Past Activities | (section/page) | Activity in past1 (complete) | Activity in past (older, ends "Still writing……") | Use **past1** (superset) |
| Gallery | `/gallery` | Photos.docx (template only: Date/Activity/Photo) | annual reports (event names/dates) | Placeholder — no photos supplied in Work/ except background image |
| Videos | `/videos` | Vedios.docx (template only: Date/Activity/Video) | Home page spec (min 3/month) | Placeholder — no video files supplied |
| Donors | `/donors` | Donors directory1.xlsx | Donors directory.xlsx | Complete (names match xlsx) |
| Village Directory | `/village-directory` | Village information.xlsx / …1.xlsx (schema) | Home page spec | Sample rows only — real household data not yet provided |
| Annual Report | `/annual-report` | annual report 2020-2021 (=L2), L3 (=AR 2021-22), 22-23, 23-24, 24-25, 25-26 | L4,5,6,7 (accounts notes), AIRD Accounts.xlsx | Docs EXIST for all years — frontend stub wrongly shows "Coming soon" |
| Membership / Join | `/membership` | Types of member and membership fee | Benefits of memeber (category benefits + opportunities), Benefits (short variant), Membership Form1, Membership form, Certificate, Identity card | Complete (fee conflict §6) |
| Donate | `/donate` | AIRD in brief (bank fields) | Donate (UI labels), Receipt (receipt layout), Certificate | Complete (mask A/C no.) |
| Contact | `/contact` | AIRD in brief / Website (address, mobile, email) | Home page spec (person/address/phone/pincode) | Complete |

### Admin pages (`/admin/*`)
No source documents exist for admin functionality itself. Admin manages: villagers (Village information.xlsx schema), calendar (activity dates from reports + Activity planned), media (Photos/Vedios templates). Auth is a stub pending backend.

---

## 4. Supporting Documents (not pages)

| Document | Role |
|----------|------|
| `Website.docx` | Master navigation/structure + registration & contact fields |
| `AIRD in brief.docx`, `Brief.docx` | Legal identity fields (Reg no, NGO Darpan, PAN, bank, trustee contact) |
| `Certificate.docx` | Membership certificate layout (for member PDF generation) |
| `Identity card.docx` | Member ID card layout (General/Special/Executive/Life checkboxes) |
| `Receipt.docx` | Donation/membership receipt layout (purpose & payment-mode checkboxes) |
| `Donate.docx` / `Donate1.docx` | Donate page UI labels: Download receipt / Download membership certificate |
| `Membership form.docx` / `Membership Form1.docx` | Membership form fields & declarations (Form1 adds Hobbies, Introduced by, Declaration) |
| `Important websites.docx` | 6 external links (SDG, Gram Swaraj Abhiyan, GPDP, DAY-NRLM, MGNREGA FB, Social audit UP) |
| `Important websites1.docx` | Same 6 + DDU-SIRD (7 links) — superset, use this |
| `Photos.docx`, `Vedios.docx` | Column templates for gallery/videos (Date / Activity / Photo|Video) |
| `Village development works.txt`(docx) | 5 topics: Gram Panchayat & Sabha, GPDP, MGNREGA, SHG, Social Audit |
| `Village development works1.docx` | Work log template (Date / Work / Description) |
| `For consideration.docx` | Draft homepage/nav concept (superseded draft) |
| `AIRD Accounts.xlsx` | Financial ledger (not extracted to txt) |
| `L4, 5, 6,7.docx` | FY22-23→FY26-27 cash/bank event-wise accounts |
| `KRANTI in Hindi.docx` | Hindi version of Project KRANTI (future Hindi mode) |
| `Q.ppt` | Legacy DC spiritual-teaching slide deck (source of "come and see" line) |
| `Logo.docx` | Text extraction empty because it is image-only: contains the official AIRD logo PNG (`word/media/image1.png`) — the brand asset source |

---

## 5. Assets

| Asset | Purpose | Location |
|-------|---------|----------|
| Dandi March background photo | Homepage hero background (per plan: "Photo of Gandhi March on background" in For consideration.docx) | `Work\Photo for bachground.jpg.jpeg` (+ byte-identical duplicate `Work\Photo for bachground.jpg1.jpeg`), copied to `Frontend/public/dandi-march-bg.jpeg` |
| AIRD logo | Branding (header/footer/certificates) | **`Work\Logo.docx` contains the actual logo** (`word/media/image1.png`, 11.4 KB) — extracted to `.zcode\docs_txt\_logo_from_Logo.docx.png`. Frontend currently uses `public/aird-logo.png`; verify it matches this source. Also referenced inside Q.ppt as `aird-logoup.png`. |
| Village photos | Gallery/homepage | ❌ none supplied yet (admin uploads) |
| Videos | Activities videos | ❌ none supplied yet |
| Village map | Model village house-wise map | ❌ none supplied yet |
| Trust deed PDF | Referenced in Website.docx/AIRD in brief (local download path only) | ❌ not in repo |

---

## 6. Missing / Ambiguous Mapping — NEED CONFIRMATION (do not guess)

> **Status update:** Client rulings received — see **§8 Resolved Decisions**. Items marked ✅ below are closed; remaining open items are listed at the end of this section.

| # | Issue | Details | Need Confirmation |
|-----|-------|---------|-------------------|
| 1 | ✅ **KRANTI launch date conflict** | RESOLVED → **25 Sep 2026** (`KRANTI.docx` canonical). "15 Aug" refs in Home page final/final1 + Activity planned header superseded; "15 Aug 2016" in Contents for HP* = typo. `Activity planned` 15-Aug windows remain valid as PHASE schedules, not the launch date. | Closed |
| 2 | ✅ **Membership fee conflict** | RESOLVED → **Both tables stand**: `Types of member` table is the category structure (General/Special/Executive); its General **₹10 = minimum donation** (entry point, students/villagers). Higher slabs (₹100/₹500, ₹1000/₹5000) are the standard rates per `Membership and fee`. Exact UI wording of the "minimum donation" note to be shown to client at build time. | Closed (wording TBC) |
| 3 | ✅ **Board roster C label** | RESOLVED → **FY 2020–2025 is correct** (filename "2020-2026" wrong). Client will supply a new/updated board document as years advance. Route `/trustee/board-2020-2026` and nav labels must be renamed to 2020–2025. | Closed |
| 4 | ⚠️ **Nav order/labels C & D** | Labels now fixed by #3 (C = 2020–2025 board, D = 2026–2027 board). Website.docx order lists C before D; current menu shows D first. Assume document order unless client objects. | Low risk |
| 5 | ⚠️ **Philosophy version** | FULL `Philosophy.docx` in use; short `Phisolophy`(=H) treated as excerpt. | Assumed OK |
| 6 | ⚠️ **History source** | `Development in India1` (complete) used; `K.docx` treated as earlier draft. | Assumed OK |
| 7 | ✅ **Development Car variant** | RESOLVED → use the **full narrative (`Development Car1` / Contents for HP Final text) presented as a SLIDER** for better explanation (existing `DevelopmentCarSlider` component fits). Short G version may serve as intro/summary only. | Closed |
| 8 | ✅ **Teachings scope (J)** | RESOLVED → All existing teaching texts are true as-is and must always be present verbatim; `Facts of life` (=j) and `Humanity and Religion` join the Teachings page alongside Arise Awake / Ehipassiko / Goal of soul. No self-written additions — client will supply extra content if wanted. (`Humanity and Religion` ends mid-thought; publish as-is until client extends.) | Closed |
| 9 | ✅ **Slogans placement / homepage order** | RESOLVED → Current homepage layout is FINE (markers were an old header idea). Documented order in §1 remains the content reference, but visual representation has creative freedom (see #6-ruling). Slogan ticker may stay at top. | Closed |
| 10 | **Annual report address** | L3 = "Annual Report 2021-22" office address differs (Sitapur Road) vs registered office (Nai Basti Babu Ganj). Which address is public-facing? | YES |
| 11 | **Trust deed PDF** | Only a local `C:/Users/.../Downloads/....pdf` path is documented; file not provided. | YES — provide file or drop link |
| 12 | **80G/12A status** | Approved 2021-22, rejected/cancelled 1 Dec 2023 (23-24 report, L4). Any public claim of tax exemption must reflect this. | YES — wording approval |
| 13 | **Bank Uncle Day description** | Docs define it as birthday/memorial of Mr. Christopher Baron (London supporter), 25 Sept — NOT a "bank awareness day". Frontend invented the latter. Fix per docs. | NO — docs are clear |
| 14 | ✅ **Q.ppt usage** | RESOLVED → Rebuild the spiritual-teachings slideshow as a web slider from the written narrative (creative freedom). Legacy `Q.ppt` need not be published. | Closed |
| 15 | ✅ **Homepage letter markers `I` + `H..A`** | RESOLVED → Believed to have been a header concept; **current layout is fine**, markers treated as artifacts. No reorder mandated. | Closed |
| 16 | ✅ **Privacy of public directories** | RESOLVED → **Mask for now** (donor contacts, village personal fields never public; donor roll shows masked names as already implemented). Proper privacy policy to be decided later by client. | Closed |
| 17 | ✅ **AIRD Accounts.xlsx / L4,5,6,7 accounts** | RESOLVED → Raw ledgers stay internal; only polished annual reports are public (consistent with masking ruling). | Closed |
| 18 | **`Human life.docx` vs homepage Humanity block** | Homepage HumanitySection uses condensed extracts; full doc available. Confirm full text goes in Read-more expansion. | Low risk |

---

## 7. Documentation Audit (vs current frontend, Aug 2026 state)

### 7.1 Homepage Audit
| Requirement (documented) | Status |
|------------|--------|
| Hero with tagline + Dandi March background | ✅ present |
| About AIRD directly after hero (AIRD1) | ✅ present |
| Human & Humanity section (Human life) | ✅ present (right column row 3) |
| Goal of Soul as own homepage block | ❌ missing (only inside /teachings) |
| Arise Awake "slide show" block | ⚠️ only link-list in TeachingsBlock, no slideshow |
| Ehipassiko block | ⚠️ same as above |
| Join hands & take action after teachings (#7) | ❌ placed at bottom instead |
| People's Governance centerpiece | ✅ GramSwarajSection |
| What we can do / Model village | ✅ present |
| Banner | ❌ n/a |
| **Development Car homepage block (#11)** | ❌ MISSING from homepage (component exists: DevelopmentCarSlider — unused) |
| Slogans after Development Car (#12) | ⚠️ ticker at top instead |
| KRANTI block | ✅ KrantiPreview (date omitted pending confirmation — OK) |
| Decentralized governance (#14) | ✅ present |
| Development in India (#15) | ✅ present |
| Donors directory widget | ✅ DonorsRoll |
| Activity calendar widget | ✅ ActivitiesCalendar + PLANNED_ACTIVITIES |
| Villager info / village map | ⚠️ directory table present; map absent |
| Videos date-wise min 3/month | ⚠️ carousel present but placeholder sample videos |

Documented order deviation: current order = Hero → About → GramSwaraj/Humanity → VillageDir → [QuickLinks|Kranti+Decentralised|Philosophy+Teachings+WhatWeCanDo] → Past+Planned → Videos+Donors+JoinHands. Documented order differs (see §1). Needs decision: strict document order vs current grid.

### 7.2 Navigation Audit
| Item | Status |
|------|--------|
| About Us mega-menu matches Website.docx children | ⚠️ all items present, but C/D swapped & mislabeled (audit item #4) |
| Trustee and Journey both point to `/trustee/journey` | ⚠️ Trustee (A biodata) has no distinct route |
| Aim and Objectives both point to `/about/aim-objectives` | ⚠️ acceptable (combined doc exists) but Website lists them separately under M/N |
| Development Car slideshow (Q) distinct from Development Car (G) | ❌ both point to `/development-car` |
| Important website links | ✅ 7 links match Important websites1 |
| Legacy redirect `/join` → `/membership` | ✅ |

### 7.3 Content Audit — wrong/placeholder/rewritten content found
| Location | Problem | Correct source |
|----------|---------|----------------|
| `data/events.ts` e4 "Bank Uncle Day 2026-05-01" | Wrong date (docs: 25 September) AND invented description ("villager-bank interface… financial inclusion"). Actual: birthday of Mr. Christopher Baron, London supporter | Bank Uncle Day entries in annual reports 2020-21…25-26 |
| `data/events.ts` e2 Earth Day 2026 | Description invented ("soil testing, organic farming…"); actual FY25-26 Earth Day was a surprise Board visit to assess sustainability | 25-26.docx |
| `data/events.ts` e3 Panchayati Raj Day dated Apr 24 | Docs use 25 April; FY25-26 edition: SHGs did not organize the programme | 25-26.docx |
| `data/events.ts` recurring days | Missing Development Car Day (3 Dec), Foundation Day (31 Jan), National Youth Day (12 Jan), Independence Day rally | annual reports series |
| `data/about.ts` BIOGRAPHY_TIMELINE | Summarized/inferred, partly WRONG: "1980s Research in Gosianpurwa" contradicts Journey (Gosai Purwa voluntary work c. 2005–07); "1993 witnessed amendment" is narrative invention | Journey of trustee(1), Trustee |
| `data/content.ts` VISION_SECTIONS | Paraphrased rewrite of Vision.docx (not verbatim) | Vision.docx |
| `data/content.ts` STRATEGY_SECTIONS | Condensed rewrites of each Strategy heading paragraph | Strategy1.docx |
| `data/content.ts` CONCEPT_SECTIONS | Condensed rewrites | Concept.docx |
| `data/content.ts` OBJECTIVES_LIST | Rewritten summaries (a near-verbatim copy already exists in `data/about.ts AIRD_OBJECTIVES`) | Objectives.docx |
| `data/content.ts` HISTORY_SECTIONS | Heavy condensation of Development in India1 | Development in India1.docx |
| `data/content.ts` TEACHINGS_SECTIONS | Truncated intros only although full texts exist in homepage.ts | Arise Awake / Dont believe on God / Goal of soul |
| `data/content.ts` INITIATION_SECTIONS | Rewritten | Initiation.docx |
| `data/content.ts` DEVELOPMENT_CAR_SECTIONS | Only first 3 paragraphs; full text exists in homepage.ts DEV_CAR_HOME | Development Car1 / Contents for HP Final |
| `pages/public/DevelopmentInIndia.tsx` | Imports DEVELOPMENT_CAR_SECTIONS (unrelated content) used only in hidden span — dead/wrong import | remove |
| `pages/public/AnnualReport.tsx` | Shows 2021-22…2025-26 as "Coming soon" though documents EXIST in Work/ | L2/L3/22-23/23-24/24-25/25-26 |
| `pages/public/Gallery.tsx` | Pure placeholder grid | needs admin/photos |
| `data/videos.ts` | Royalty-free sample videos + Unsplash posters (placeholders, acknowledged) | Vedios template; await real assets |
| `data/villagers.ts` | Representative sample rows (acknowledged in comment) | Village information.xlsx |
| `data/kranti.ts` launchDate `2026-09-25` | Uses KRANTI.docx date while other docs say 15 Aug 2026 — blocked on confirmation (#1) | TBD |
| `lib/constants.ts` NAV_TREE | C/D labels swapped vs Website.docx letter codes | Website.docx |
| `pages/public/Home.tsx` AboutSection credit table | Says "Headquarters: Lucknow" — fine, but omits masked-bank note; OK otherwise | — |
| Sensitive data handling | ✅ Aadhaar/PAN/trustee-PAN withheld; bank A/C masked — complies with plan decisions | keep |

### 7.4 Compliance summary
- Verbatim-faithful modules: `homepage.ts` (most blocks), `membership.ts`, `trustees.ts`, `events.ts PAST_ACTIVITIES/PLANNED_ACTIVITIES`, `philosophy.ts` (mostly), `importantLinks.ts`, `donors.ts`.
- Rewrite-heavy modules needing restoration to documented text: `content.ts` (Vision, Strategy, Concept, Initiation, Objectives, History, Teachings, Journey, DevCar), `about.ts` (timeline), `events.ts` EVENTS array.

---

## 8. Resolved Decisions — client sign-off (Aug 2026)

| # | Decision |
|---|----------|
| D1 | **KRANTI launch date = 25 Sep 2026** (`KRANTI.docx`). "15 Aug" mentions are phase-schedule references; "15 Aug 2016" is a typo. Surface the date publicly now (remove "date to be confirmed"). |
| D2 | **Membership**: both fee tables valid. Category structure per `Types of member and membership fee.docx`; General ₹10 annual = **minimum donation** entry point; ₹100/₹500 & ₹1000/₹5000 are standard Special/Executive rates. |
| D3 | **Old board = FY 2020–2025** (filename's "2026" is wrong). Client will provide updated board docs in future. Rename route/labels accordingly. |
| D4 | **Homepage letter markers** were an old header concept → artifacts. Current homepage layout approved; creative freedom granted for visual representation as long as content comes from the documents. |
| D5 | **Development Car page** = full narrative (`Development Car1`) rendered as a slider for better explanation. |
| D6 | **Teachings**: all existing texts verbatim & always present; add `Facts of life` + `Humanity and Religion` to Teachings. No self-invented additions; client may supply more later. |
| D7 | **Privacy**: mask donor contacts & village personal data now; formal privacy policy later. Raw ledgers (`AIRD Accounts.xlsx`, `L4,5,6,7`) internal only. |
| D8 | `For consideration.docx` = latest of the draft family; representation is our creativity. |

Still open → now closed by follow-up rulings (same session):

| # | Decision |
|---|----------|
| D9 | **Contact addresses**: show BOTH — registered office (46-A, Nai Basti Babu Ganj, Lucknow) AND field office (1/58 Priyadarshani Colony, Sector D, Sitapur Road, Lucknow – 226020, per AR 2020-21/2021-22). |
| D10 | **Trust deed PDF**: client will provide the file; link it once placed in `Frontend/public/` (until then no dead link). |
| D11 | **80G/12A**: state honest status publicly — "approved 2021–22; renewal application pending since rejection of 1 Dec 2023". No claim of current tax exemption beyond that. |
| D12 | **Annual Reports page**: publish FULL yearly reports including the financial figures written inside them (cash/bank balances, donations). Raw ledgers (`AIRD Accounts.xlsx`, `L4,5,6,7`) remain internal-only. |
| D13 | **Board URL**: rename slug to `/trustee/board-2020-2025`; old path `/trustee/board-2020-2026` gets a redirect. |

**Nothing remains blocking. All mapping decisions are signed off.**
