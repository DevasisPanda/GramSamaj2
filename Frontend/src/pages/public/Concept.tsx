import { ContentPage } from '@/components/shared/ContentPage';
import type { ContentSection } from '@/data/content';
import { CONCEPT_PARAS } from '@/data/contentVerbatim';

/** Short standalone lines in Concept.docx act as sub-headings. */
function isHeading(p: string): boolean {
  return p.length < 60 && !p.endsWith('.') && !p.endsWith(',') && !p.endsWith(';');
}

export default function Concept() {
  const sections: ContentSection[] = [];
  for (const p of CONCEPT_PARAS) {
    if (isHeading(p)) sections.push({ heading: p });
    else if (sections.length && !sections[sections.length - 1].paragraphs?.length)
      (sections[sections.length - 1].paragraphs ??= []).push(p);
    else if (sections.length && !sections[sections.length - 1].heading)
      sections[sections.length - 1].paragraphs!.push(p);
    else sections.push({ paragraphs: [p] });
  }
  // merge consecutive paragraph-only sections
  const merged: ContentSection[] = [];
  for (const s of sections) {
    const last = merged[merged.length - 1];
    if (!s.heading && last && last.paragraphs?.length) last.paragraphs.push(...(s.paragraphs ?? []));
    else merged.push(s);
  }

  return (
    <ContentPage
      title="Concept"
      subtitle="The case for a live demonstration village of Gram Swaraj."
      gradient="forest"
      crumbs={[{ label: 'Philosophy', to: '/philosophy' }, { label: 'Concept' }]}
      sections={merged}
    />
  );
}
