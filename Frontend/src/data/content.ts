/**
 * Shared section type for documented content pages.
 *
 * NOTE: the paraphrased page-content constants that used to live here have
 * been retired in favour of VERBATIM modules generated from Work/*.docx:
 *   - data/contentVerbatim.ts  (Vision, Strategy, Concept, Initiation, Aim,
 *                               Objectives, Facts of Life, Humanity & Religion)
 *   - data/journeyFull.ts      (Journey of Trustee role + autobiography)
 *   - data/homepage.ts         (People's Governance, Decentralised Governance,
 *                               Development Car, Arise Awake, Goal of Soul,
 *                               Ehipassiko, Development in India)
 * Regenerate verbatim arrays with:  python .zcode/gen_verbatim.py
 */
export interface ContentSection {
  heading?: string;
  /** Paragraph body, or pre-split paragraphs. */
  paragraphs?: string[];
  /** Optional bullet list under this heading. */
  bullets?: string[];
}
