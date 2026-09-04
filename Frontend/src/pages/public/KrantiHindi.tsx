import { Link } from 'react-router-dom';
import { FileText, Languages, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { KRANTI_HINDI_PARAS } from '@/data/krantiHindiData';
import { PROJECT_SUB_NAV } from '@/lib/subNavTree';

export default function KrantiHindi() {
  return (
    <>
      <PageHero
        title="परियोजना क्रांति — संपूर्ण दस्तावेज़ (हिन्दी)"
        subtitle="Key to Reform & Adopt Noble Treatment Initiatives {KRANTI} — 'ग्राम स्वराज' प्रक्रिया को कागज़ों पर नहीं बल्कि गाँव में प्रदर्शित करने के लिए संयुक्त उद्यम।"
        gradient="forest"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <Link
            to="/kranti/document"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/90 hover:bg-white text-forest-950 px-3.5 py-1 text-xs font-bold transition-all shadow-xs"
          >
            <Languages className="h-3.5 w-3.5 text-saffron-600" /> Switch to English Document
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-800/80 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-forest-600/60">
            <FileText className="h-3.5 w-3.5 text-emerald-400" /> संपूर्ण 180 परिच्छेद
          </span>
        </div>
      </PageHero>

      <Breadcrumb
        items={[
          { label: 'KRANTI', to: '/kranti' },
          { label: 'परियोजना क्रांति (हिन्दी)' },
        ]}
      />

      <section className="section-py bg-stone-50/50 min-h-screen">
        <div className="container-px max-w-4xl mx-auto space-y-8">
          <SubNavPills items={PROJECT_SUB_NAV} />

          {/* Language Switch Banner */}
          <div className="flex items-center justify-between p-4 bg-saffron-50/80 border border-saffron-200 rounded-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-forest-950">
              <Languages className="h-4 w-4 text-saffron-600" />
              <span>भाषा विकल्प (Language Option): <strong>हिन्दी (सक्रिय)</strong></span>
            </div>
            <Link
              to="/kranti/document"
              className="text-xs font-bold text-saffron-800 hover:text-saffron-950 bg-white px-3 py-1.5 rounded-xl border border-saffron-300 shadow-2xs transition-colors"
            >
              Read in English &rarr;
            </Link>
          </div>

          {/* Hindi Content Card */}
          <article className="card-surface bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-forest-100 space-y-6">
            <div className="border-b border-forest-100 pb-5 space-y-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="inline-block text-[11px] uppercase font-bold tracking-wider text-saffron-700 bg-saffron-50 px-2.5 py-1 rounded-md border border-saffron-200">
                    अधिकृत परियोजना प्रारूप
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-forest-950 mt-2">
                    Key to Reform &amp; Adopt Noble Treatment Initiatives &#123;KRANTI&#125;
                  </h1>
                  <p className="text-lg font-bold text-saffron-700">
                    संशोधनीय पहल और नवीन उपचार अपनाने की कुंजी &#123;क्रांति&#125;
                  </p>
                  <p className="text-sm font-semibold text-forest-800 mt-1">
                    Appropriate Institute of Rural Development (AIRD) &bull; लखनऊ, उत्तर प्रदेश
                  </p>
                </div>
                <img
                  src="/kranti-logo.png"
                  alt="क्रांति — KRANTI Emblem"
                  className="h-24 sm:h-28 w-auto object-contain shrink-0 drop-shadow-md bg-white p-1 rounded-xl border border-saffron-200"
                />
              </div>
            </div>

            <div className="space-y-4 text-ink/85 leading-relaxed text-sm sm:text-base">
              {KRANTI_HINDI_PARAS.map((p, idx) => {
                const isHeading = p.length < 80 && (
                  p.includes(':') ||
                  p.startsWith('परिचय') ||
                  p.startsWith('उद्देश्य') ||
                  p.startsWith('घटक') ||
                  p.startsWith('कार्यप्रणाली') ||
                  p.startsWith('संशोधनीय') ||
                  p.startsWith('Key to Reform') ||
                  p.startsWith('{क्रांति}')
                );

                if (isHeading) {
                  return (
                    <h3
                      key={idx}
                      className="text-lg sm:text-xl font-bold text-forest-950 pt-4 pb-1 border-b border-stone-100 flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4 text-saffron-600 shrink-0" />
                      <span>{p}</span>
                    </h3>
                  );
                }

                return (
                  <p key={idx} className="text-justify">
                    {p}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}