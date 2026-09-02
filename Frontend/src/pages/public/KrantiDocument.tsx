import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronDown, ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { KRANTI_DOCUMENT, type DocSection } from '@/data/docFull';
import { cn } from '@/lib/utils';
import { PROJECT_SUB_NAV } from '@/lib/subNavTree';

/** Pretty chip labels for the numbered document sections. */
function shortLabel(h?: string): string {
  if (!h) return 'Overview';
  return h.replace(/:$/, '');
}

const COLLAPSE_AFTER = 8;

/**
 * Full Project KRANTI document ("Project KRANTI.docx" =O) — complete verbatim
 * text with sticky section navigation and collapsible long sections
 * (client-approved UI). The existing /kranti page stays untouched.
 */
export default function KrantiDocument() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const ids = useMemo(
    () => KRANTI_DOCUMENT.map((_, i) => `sec-${i}`),
    [],
  );

  return (
    <>
      <PageHero
        title="Project KRANTI — Full Document"
        subtitle="Key to Reform & Adopt Noble Treatment Initiatives — complete project document."
        gradient="forest"
      >
        <p className="inline-flex items-center gap-1.5 rounded-lg bg-white/70 px-3 py-1.5 text-sm font-medium text-forest-800">
          <FileText className="h-4 w-4" /> Complete verbatim text &bull; {KRANTI_DOCUMENT.length} sections
        </p>
      </PageHero>
      <Breadcrumb items={[{ label: 'Project', to: '/kranti' }, { label: 'Project Blueprint & Document' }]} />

      <div className="container-px pt-4 max-w-4xl mx-auto">
        <SubNavPills items={PROJECT_SUB_NAV} />
      </div>

      {/* Sticky section chip-nav */}
      <div className="sticky top-16 z-30 border-b border-saffron-100 bg-[#FDF8F0]/95 backdrop-blur">
        <div className="container-px flex gap-1.5 overflow-x-auto py-2">
          {KRANTI_DOCUMENT.map((s, i) => (
            <a
              key={ids[i]}
              href={`#${ids[i]}`}
              className={cn(
                'shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors',
                i % 2 === 0
                  ? 'bg-saffron-100 text-saffron-800 hover:bg-saffron-200'
                  : 'bg-forest-50 text-forest-700 hover:bg-forest-100',
              )}
            >
              {shortLabel(s.heading)}
            </a>
          ))}
        </div>
      </div>

      <article className="container-px section-py">
        <div className="mx-auto max-w-3xl space-y-8">
          {KRANTI_DOCUMENT.map((s: DocSection, i) => {
            const isOpen = expanded[i];
            const shown = isOpen ? s.paragraphs : s.paragraphs.slice(0, COLLAPSE_AFTER);
            return (
              <section key={i} id={ids[i]} className="prose-aird scroll-mt-36">
                <div className="card-surface p-4 sm:p-6">
                  <h2 className="mb-4 flex items-start gap-2 text-lg sm:text-xl font-bold text-saffron-800 md:text-2xl">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-saffron-100 text-xs font-bold text-saffron-700 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="break-words min-w-0">{shortLabel(s.heading)}</span>
                  </h2>
                  {shown.map((p, j) => {
                    // Numbered/bulleted lines inside a section render as list rows
                    const isListItem = /^(\d+\.|[a-z]\)|\u2022|-)/.test(p) || /^[A-Z][^.!?]{0,80}:$/.test(p);
                    return isListItem ? (
                      <p key={j} className="mb-2 flex items-start gap-2 leading-relaxed text-ink/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                        <span className="break-words min-w-0">{p}</span>
                      </p>
                    ) : (
                      <p key={j} className="mb-4 leading-relaxed text-ink/80 break-words">{p}</p>
                    );
                  })}
                  {s.paragraphs.length > COLLAPSE_AFTER && (
                    <button
                      onClick={() => setExpanded((e) => ({ ...e, [i]: !e[i] }))}
                      className="mt-2 inline-flex items-center gap-1 rounded-lg border border-saffron-200 px-3 py-1.5 text-xs font-semibold text-saffron-700 transition-colors hover:bg-saffron-50"
                    >
                      <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', isOpen && 'rotate-180')} />
                      {isOpen ? 'Show less' : `Show all ${s.paragraphs.length} paragraphs`}
                    </button>
                  )}
                </div>
              </section>
            );
          })}

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-saffron-100 pt-6 text-sm">
            <Link to="/kranti" className="govt-link">
              <ArrowLeft className="mr-1 inline h-4 w-4" /> Back to KRANTI overview
            </Link>
            <Link to="/annual-report" className="govt-link">
              Annual Reports
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
