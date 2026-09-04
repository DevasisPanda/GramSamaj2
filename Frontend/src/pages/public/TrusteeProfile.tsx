import { Link } from 'react-router-dom';
import { IdCard, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { TRUSTEE_BIO, TRUSTEE_CAREER } from '@/data/docFull';
import { AIRD } from '@/lib/constants';

import { TRUST_SUB_NAV } from '@/lib/subNavTree';

/**
 * Trustee Profile — Standalone factual record from "Trustee.docx" (Doc A).
 * Holds complete personal biodata, educational background, professional career
 * chronology, and official trust credentials.
 */
export default function TrusteeProfile() {
  return (
    <>
      <PageHero
        title="Trustee Profile"
        subtitle="Kamlesh Chandra Tripathi — Founder & Managing Trustee, Appropriate Institute of Rural Development (AIRD)."
        gradient="saffron"
      />
      <Breadcrumb
        items={[
          { label: 'Trust', to: '/about/trust' },
          { label: 'Trustee Profile' },
        ]}
      />

      <section className="container-px section-py">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Sub-menu bar for Trust section */}
          <SubNavPills items={TRUST_SUB_NAV} />

          {/* Top Profile Header Card */}
          <div className="card-surface bg-white p-6 sm:p-8 rounded-xl shadow-md border border-saffron-100 flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="/trustee-kct.jpg"
              alt="Kamlesh Chandra Tripathi"
              className="h-28 w-28 rounded-2xl object-cover shadow-lg shrink-0 border-2 border-saffron-300"
            />
            <div className="space-y-2 text-center md:text-left flex-1">
              <span className="inline-block bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-saffron-300">
                Founder &amp; Managing Trustee
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-forest-950">
                Kamlesh Chandra Tripathi
              </h1>
              <p className="text-sm text-ink/70 max-w-xl leading-relaxed">
                Development Practitioner &bull; Participatory Action Researcher &bull; Rural Economist &bull; Dedicated to Mahatma Gandhi&rsquo;s vision of Gram Swaraj.
              </p>
              <div className="pt-2">
                <Link
                  to="/trustee/journey"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest-800 hover:text-saffron-700 bg-forest-50 hover:bg-saffron-50 px-3.5 py-1.5 rounded-lg border border-forest-200 transition-colors"
                >
                  <span>Read Complete Journey &amp; Autobiography &rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Biodata & Education Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Biodata card */}
            <Card className="border-l-4 border-l-saffron-500 shadow-sm bg-white">
              <CardContent className="pt-6">
                <h2 className="mb-4 flex items-center gap-2 text-base sm:text-lg font-bold text-forest-950 border-b border-saffron-100 pb-2">
                  <IdCard className="h-5 w-5 text-saffron-600" /> Personal Biodata
                </h2>
                <dl className="grid gap-2.5">
                  {TRUSTEE_BIO.map((row) => (
                    <div key={row.k} className="flex justify-between items-start gap-2 rounded-lg bg-stone-50 px-3 py-2 border border-stone-100">
                      <dt className="text-xs font-semibold text-ink/60 shrink-0">
                        {row.k}:
                      </dt>
                      <dd className="break-words text-xs font-bold text-forest-950 text-right">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            {/* Education & Official Credentials */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-forest-600 shadow-sm bg-white">
                <CardContent className="pt-6">
                  <h2 className="mb-3 flex items-center gap-2 text-base sm:text-lg font-bold text-forest-950 border-b border-forest-100 pb-2">
                    <GraduationCap className="h-5 w-5 text-forest-600" /> Educational Background
                  </h2>
                  <div className="p-3 bg-forest-50/60 rounded-lg border border-forest-100">
                    <h3 className="font-bold text-xs sm:text-sm text-forest-900">Post Graduate in Economics (M.A.)</h3>
                    <p className="text-xs text-ink/70 mt-0.5">Lucknow University, Lucknow &bull; 1981&ndash;1982</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-saffron-500 shadow-sm bg-white">
                <CardContent className="pt-6">
                  <h2 className="mb-3 flex items-center gap-2 text-base sm:text-lg font-bold text-forest-950 border-b border-saffron-100 pb-2">
                    <ShieldCheck className="h-5 w-5 text-saffron-600" /> Official Credentials &amp; Registry
                  </h2>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-ink/60">Trust Registration:</span>
                      <span className="font-bold text-forest-950 text-right">{AIRD.registrationNo}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-ink/60">NITI Aayog NGO Darpan:</span>
                      <span className="font-bold text-forest-950 text-right">{AIRD.ngoDarpanId}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-ink/60">Trust PAN:</span>
                      <span className="font-bold text-forest-950 text-right">{AIRD.pan}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-ink/60">Bank Account:</span>
                      <span className="font-bold text-forest-950 text-right">{AIRD.bank.name} &bull; {AIRD.bank.ifsc}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Career Chronology — verbatim from Trustee.docx */}
          <div className="card-surface bg-white p-6 sm:p-8 rounded-xl shadow-md border border-forest-100">
            <h2 className="mb-6 flex items-center gap-2 text-lg sm:text-xl font-bold text-forest-950 border-b border-forest-200 pb-3">
              <Briefcase className="h-5 w-5 text-forest-700" /> Professional Background &amp; Career History (1982&ndash;Present)
            </h2>
            <ol className="space-y-3">
              {TRUSTEE_CAREER.map((c, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-saffron-100 bg-stone-50/50 p-3.5 hover:bg-saffron-50/30 transition-colors">
                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-forest-800 text-[11px] sm:text-xs font-bold text-white mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-ink/85 leading-relaxed break-words">{c}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Navigation link to Journey */}
          <div className="flex flex-wrap justify-between items-center gap-3 border-t border-saffron-100 pt-6 text-sm">
            <Link to="/about/trust" className="govt-link font-bold">
              &larr; Trust &amp; Legal Details
            </Link>
            <Link to="/trustee/journey" className="govt-link font-bold">
              Journey of the Trustee &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
