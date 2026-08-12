import type { ReactNode } from 'react';
import { PageHero } from './PageHero';
import { Breadcrumb } from './Breadcrumb';
import type { Crumb } from './Breadcrumb';
import type { ContentSection } from '@/data/content';

interface ContentPageProps {
  title: string;
  subtitle?: string;
  gradient?: 'saffron' | 'forest';
  crumbs: Crumb[];
  /** Optional node rendered at the top of the body (e.g. a callout). */
  intro?: ReactNode;
  /** Structured content sections rendered as readable prose. */
  sections?: ContentSection[];
  /** Optional footer-of-page CTA / children. */
  children?: ReactNode;
  /** Optional sidebar / extra blocks rendered after sections. */
  aside?: ReactNode;
}

/**
 * Standard content-page layout for AIRD's documented pages:
 * hero banner + breadcrumb + accessible prose body. Keeps every page
 * visually consistent and reduces per-page boilerplate.
 */
export function ContentPage({
  title,
  subtitle,
  gradient = 'saffron',
  crumbs,
  intro,
  sections,
  children,
  aside,
}: ContentPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} gradient={gradient}>
        {intro}
      </PageHero>
      <Breadcrumb items={crumbs} />

      <article className="container-px section-py">
        <div className="mx-auto max-w-3xl">
          {sections?.map((s, i) => (
            <section key={i} className="prose-aird mb-8">
              {s.heading && (
                <h2 className="mb-3 text-xl font-bold text-saffron-800 md:text-2xl">{s.heading}</h2>
              )}
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="mb-4 leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mb-4 space-y-2">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2.5 leading-relaxed text-ink/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {aside}
          {children}
        </div>
      </article>
    </>
  );
}
