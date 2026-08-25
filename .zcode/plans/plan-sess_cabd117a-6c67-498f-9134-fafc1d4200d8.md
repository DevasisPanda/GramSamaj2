# AIRD Website — First Client Preview Implementation Plan

## Scope
A polished **front-page-first** preview centered on **Gram Swaraj**, using the existing React/Vite/Tailwind frontend. No full multi-page rebuild. The existing inner pages (About, Philosophy, KRANTI, Donate, etc.) stay functional; I focus effort on the homepage, header, and the six decisions.

## Source-of-truth documents (confirmed)
- **Homepage content & order** → `Home page final1.txt` (superset) + `Contents for HP Final.txt` (long-form "Read more")
- **Human & Humanity** → `Human life.txt`
- **People's Governance** → `People's governance in development.txt` + `Decentralised process of governance.txt`
- **About AIRD narrative** → `AIRD1.txt`
- **Org identity/registration** → `AIRD in brief.txt` / `Website.txt` (NON-sensitive fields only)
- **Development Car** → `Development Car.txt` (full version)
- **Nav structure** → `Website.txt` (About Us mega-menu)
- **Important links** → `Important websites1.txt` (7 links)
- **Background image** → `Work/Photo for bachground.jpg.jpeg` → copied to `Frontend/public/dandi-march-bg.jpeg`

## Changes

### 1. `lib/constants.ts` — honor decisions #2, #4
- **#4 Sensitive data:** Remove the bank account number and trustee Aadhaar from any value that can reach the public UI. Add a **masked** bank-display string (e.g. `A/C ••••85277`) and a note "Contact AIRD for full account details." Keep IFSC/account name/bank name (those are routinely public). Keep trustee PAN **out** of public-facing constants.
- **#2 KRANTI date:** The `KRANTI` constant in `kranti.ts` hardcodes `launchDate: '2026-09-25'`. I will NOT surface any specific date on the homepage; the KRANTI section will read "AIRD is preparing to launch Project KRANTI" (no date) until the client confirms.

### 2. `lib/constants.ts` — `NAV_TREE` restructure (decision #1, Website.docx)
Rebuild the nav to follow `Website.docx`: a single **About Us** mega-menu containing all documented children (Trust/In Brief, Trustee, Journey of Trustee, Board of Trustee, Strategy, Initiation, Teachings, Annual Report, Vision & Mission, Aim, Objectives, KRANTI for Gram Swaraj, Development Car). Keep top-level: Home, **About Us** (mega), Activities, Get Involved (Membership/Donate/Contact). Existing routes are preserved (no dead links) — I only re-group them under About Us. This preserves the multi-page architecture for later.

### 3. `pages/public/Home.tsx` — full rebuild around Gram Swaraj (Steps 4–8)
New section order telling one coherent story (AIRD → Gram Swaraj → People's Governance → Rural Dev → Philosophy/Dev Car → KRANTI → Action), using documented content:

1. **Hero** — Dandi March/India background image (decision #9), AIRD identity, "Gram Swaraj" as the central theme, rallying cry, CTA. Logo present.
2. **About AIRD** — from `AIRD1.txt` (3 documented paras, "Read more" → /about).
3. **What is Gram Swaraj / People's Governance** — definition + 73rd Amendment from `People's governance in development.txt`; "Read more" (accordion) with Resource Management (11 items) + Service Delivery (11 items) + Gram Sabha functions + participatory tools. This is the centerpiece.
4. **Human and Humanity** (decision #5) — from `Human life.txt`; homepage section, "Read more" accordion, NO separate route.
5. **Spiritual foundations** — Goal of Soul (whirlpool) + Arise Awake (Vivekananda) + Buddha Ehipassiko + Development Car, each as sequential blocks with "Read more" (per `Home page final1.txt`), using existing `philosophy.ts` data.
6. **Development in India / Decentralized Governance** — condensed documented timeline + 73rd Amendment gap, "Read more".
7. **KRANTI for Gram Swaraj** — from `Project KRANTI.txt`; **no launch date** (decision #2); 5 components + 7 phases summary; CTA.
8. **What We Can Do / Model Village** — from `What we can do.txt` + `Contents for HP Final` (demonstration village 7 areas).
9. **Join Hands & Take Action banner** — who can join (Volunteer / PAR Researcher / Institution partner) from `Home page.txt`; Membership + Donate + Contact CTAs.
10. **SloganTicker** (existing, documented slogans).
11. **Activities/Village/Donors/Videos** strips (existing, keep).
12. **Important Links** (existing, 7 documented links).

Each long section uses accordion/modal/"Read more" so **no documented content is silently removed** (decision #13) — but the page stays scannable.

### 4. `components/shared/Header.tsx` — fix bugs (Step 9)
- Fix the header `\u2014` literal bug (line 98 prints `\u2014` as text, not an em-dash).
- Verify dropdown alignment/spacing, z-index, mega-menu for the now-larger About Us menu (scrollable on mobile, capped height).
- Keep the tricolor strip, accessibility bar, font toggle, search, contact, mobile drawer. Logo already correct.

### 5. `pages/public/Donate.tsx` — decision #4
- Replace the full account-number row with the **masked** value and a "Request full bank details" CTA (email/WhatsApp). Keep Bank Name, Account Name, IFSC.

### 6. New small section components (reusable, for later page-split — Step 17)
Extract homepage sections into `pages/public/sections/` so each can later become its own page: `GramSwarajSection.tsx`, `HumanitySection.tsx`, `KrantiPreview.tsx`, `HeroDandi.tsx`. Keeps `Home.tsx` a clean composition, not a giant file.

### 7. Responsive + polish (Step 10)
- Hero image: `object-cover` with object-position tuned, `min-h` per breakpoint, dark scrim overlay for text contrast (no distortion). Test mobile/tablet/desktop.
- Section spacing, card overflow guards (`min-w-0`, `truncate`), consistent typography.

## What I will NOT do (per your instructions)
- No new routes for Human & Humanity / People's Governance.
- No invented statistics, dates, people, or quotes.
- No exposing Aadhaar / full PAN / full bank account.
- No replacing the Dandi March image with stock/AI art.
- No over-engineering the full multi-page site.

## Verification (Step 11)
- `npx tsc -b --noEmit` passes.
- `npm run dev` runs; homepage loads with image, no console errors.
- Manual responsive check of hero, header dropdown, mobile drawer.

## Open items flagged to client (not blocking preview)
- KRANTI launch date (3 conflicting dates in docs) — omitted until confirmed.
- Board term (2020–2025 vs 2020–2026) — not touched in homepage.