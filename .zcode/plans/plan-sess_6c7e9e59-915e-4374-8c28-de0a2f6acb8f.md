# AIRD Website Refactor — Government-Style Portal + Full Documentation Compliance

## What I found

**Documents reviewed completely:** Website.docx (site architecture), Home page final1.docx + Contents for HP Final.docx (homepage spec), Home page.docx (homepage + nav), Important websites.docx (7 gov portals), Logo.docx (official emblem extracted → `public/aird-logo.png`), and 19 supporting content docs. Plus an audit of the entire existing codebase.

**The core problem:** The docs define a **large multi-level government-portal navigation with ~15 content pages** (Trust → Trustee/Aim/Objectives/Vision, Strategy, Concept, Philosophy, Initiation, Teachings, History of Rural Dev, Annual Report, KRANTI, Development Car, Decentralized Governance, Development in India, Membership, Contact, Activities, Gallery, Videos, Donors, Village Directory). The current site has only **6 flat routes** (Home, About, Philosophy, KRANTI, Join, Donate), a placeholder logo, and a modern-but-not-government look.

**What I'll keep (real, high-quality existing work):** the Tailwind v3 design system (saffron/forest/cream/ink), `constants.ts` (all credentials), all `data/*.ts` files (real content), `PageHero`, `ImportantLinks`, `TranslateWidget`, `SloganTicker`, `ScrollToTop`, the shadcn UI primitives, Join wizard + PDF certificate engine, Donate/Razorpay, the interactive Philosophy sections (DevelopmentCarSlider, WhirlpoolCanvas), and the admin area.

---

## Phase 1 — Branding & Design System

1. **Official logo** — replace the placeholder "A" badge in `Header`, `Footer`, `AdminLayout`, `PublicLayout` loader, and `HomeHero` with `<img src="/aird-logo.png">` in a properly-sized responsive container (h-12/h-14, object-contain, alt). Add a new `src/components/shared/Logo.tsx` (sizes prop) so branding is consistent everywhere.
2. **Favicon + index.html** — point `<link rel="icon">` at a PNG favicon generated from the logo (or keep SVG but restyle to match). Update `<title>`/meta to match gov-portal convention ("Government of …" style → "Official Website of AIRD | Gram Swaraj"). Add the tricolor `theme-color` handling.
3. **New content-data module** — create `src/data/content.ts` housing the extracted real copy for the new pages (Vision, Aim & Objectives, Strategy, Concept, Initiation, Teachings, History of Rural Development, Decentralized Governance, Development in India, Development Car, Journey of Trustee) as typed constants — keeps content out of JSX and matches the existing `data/*.ts` convention.

## Phase 2 — Government-Style Header & Navigation (Authentic gov portal)

Rebuild `src/components/shared/Header.tsx` into the authentic Indian-gov-portal layout:

- **Tricolor top strip** (saffron / white / green, thin) — the instantly-recognizable gov signal.
- **Accessibility + utility bar:** "Skip to Main Content" link, screen-reader note, font-size toggle (A− A A+), and the **EN/हिन्दी toggle** (reuse existing `TranslateWidget`). Implement the font-size toggle via a small `useTheme`-free `useReducedMotion`-style hook that sets a `data-fontsize` attribute / root font-size.
- **Emblem header row:** official logo + org name + tagline + "Reg. under PCTA 1882 | NGO Darpan UP/2022/0303967" credibility line, with a search `<Input>` on the right.
- **Mega-menu primary nav** (saffron→white→green) with dropdowns and **active-page highlighting** (`useLocation`). Restructure `NAV_LINKS` in `constants.ts` into a nested tree matching the Website.docx hierarchy:

```
Home
About ▾        → About (overview) | In Brief/Trust | Vision & Mission | Aim & Objectives
Trustee ▾      → Journey of Trustee | Board of Trustees (current) | Board of Trustees (2020-26) | Strategy
KRANTI ▾       → KRANTI Project | Decentralized Governance | Development in India
Philosophy ▾   → Philosophy | Concept | Initiation | Teachings | Development Car | History of Rural Dev
Activities ▾   → Activities Calendar | Photo Gallery | Videos | Donors | Village Directory | Annual Report
Get Involved ▾ → Join Us / Membership | Donate | Contact Us
```

- **Mobile:** hamburger → full-screen accordion drawer with collapsible sub-sections, active highlight, logo at top.
- Reusable `MegaMenu` / `MobileNav` sub-components for cleanliness.

## Phase 3 — Routing

Update `src/App.tsx` to register every documented route under `PublicLayout`. New pages added; existing ones (`/`, `/about`, `/philosophy`, `/kranti`, `/join`, `/donate`) kept. New routes:
`/about/trust`, `/about/vision-mission`, `/about/aim-objectives`, `/trustee/journey`, `/trustee/board`, `/trustee/board-2020-2026`, `/strategy`, `/concept`, `/initiation`, `/teachings`, `/development-car`, `/history`, `/kranti/decentralized-governance`, `/development-in-india`, `/activities`, `/gallery`, `/videos`, `/donors`, `/village-directory`, `/annual-report`, `/membership`, `/contact`.

## Phase 4 — Homepage Rebuild (per Home page final1.docx)

Rebuild `Home.tsx` to follow the documented section order with real content:
1. **Hero** — AIRD name, tagline, "Arise, Awake…" rallying cry, Join/Donate CTAs, KRANTI-launch announcement strip (15 Aug 2026).
2. **About AIRD** (intro paragraph + Read more → /about).
3. **Human & Humanity** card → links to Philosophy.
4. **Goal of Soul** (Vivekananda whirlpool excerpt) → Philosophy.
5. **Slide show — Spiritual awakening** (Arise/Awake + Ehipassiko excerpts) → Development Car/Teachings.
6. **Join hands & take action** CTA banner.
7. **People's governance in development** + **What we can do** → KRANTI.
8. **Development Car** banner.
9. **Slogans** ticker (reuse `SloganTicker`).
10. **KRANTI for Gram Swaraj** → /kranti.
11. **Decentralized process of governance** + **Development in India** summary cards.
12. **Activities Calendar / Donors / Village Directory / Videos** quick-access strips (reuse existing sections, condensed).
13. **Important Websites** (reuse `ImportantLinksSection`) + **Contact/Inquiry** preview + **Footer**.

## Phase 5 — New Content Pages (full real content)

Create clean, reusable page templates (`ContentPage` layout with `PageHero` + breadcrumb + prose) and build each documented page using the extracted Word-doc content:
- **Vision & Mission**, **Aim & Objectives**, **Strategy**, **Concept**, **Initiation**, **Teachings**, **History of Rural Development**, **Decentralized Governance**, **Development in India**, **Development Car**, **Journey of Trustee** — all from `data/content.ts`.
- **Board of Trustees** — split current tabbed view into `/trustee/board` (2026-27) and `/trustee/board-2020-2026` (real data already exists in `trustees.ts`).
- **Annual Report** — listing of report years (2020-21 … 2025-26) with download-style cards.
- **Activities Calendar** — promote existing `ActivitiesCalendar` section to a full page.
- **Gallery**, **Videos**, **Donors**, **Village Directory** — promote existing sections to full pages.
- **Contact Us** — full contact + inquiry form (Name/Email/Phone/Message) per Home page.docx, plus person/address/pin-code block + Donate-now link.
- Refactor existing **About**, **Philosophy**, **KRANTI**, **Join**→**Membership**, **Donate** to use the new header/footer/logo and sit correctly in the nav tree.

## Phase 6 — Government-Style Footer

Rebuild `Footer.tsx`: tricolor top edge, logo + org block, **multi-column link map mirroring the nav tree** (About / Trustee / KRANTI / Philosophy / Activities / Get Involved), Trust Credentials column, Important Websites strip (reuse `ImportantLinksStrip`), Contact column, and a bottom bar with copyright + "Last Updated" + accessibility note.

## Phase 7 — Code Quality & Cleanup

- Remove/replace the placeholder "A" badge usage everywhere.
- Deduplicate nav definitions (single source `NAV_LINKS` tree in `constants.ts`).
- Add a `Breadcrumb` shared component used on inner pages.
- Keep existing admin area & API layer untouched.
- Ensure `cn`, existing UI primitives, and design tokens are reused (no new color systems).

## Phase 8 — Verification

- Run `npm run build` (tsc + vite) and fix all type/build errors.
- Verify every documented route resolves, nav dropdowns work on desktop + mobile, active states highlight, logo shows everywhere, no broken links, and the design is responsive (sm/md/lg).
- Cross-check homepage section order against Home page final1.docx and nav against Website.docx.

---

## Out of scope (not changing)
- Admin pages/auth, `mockApi`/tRPC layer, Join PDF engine, Razorpay logic, interactive Philosophy widgets (reused as-is). The `villagers`/`videos` placeholder data stays (clearly marked, intended for backend swap).

## Notes / flags
- The org name is consistently "Appropriate Institute of Rural Development" (one old draft, Initiation.docx, says "Association for…") — I'll use the official registered name throughout.
- Where docs reference photos/PDFs not provided, I'll use tasteful, clearly-marked placeholders so no route or section is missing, as instructed.