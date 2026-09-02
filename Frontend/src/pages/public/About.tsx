import {
  Target, Compass,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Link } from 'react-router-dom';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { AIRD, SERVICE_PRINCIPLE } from '@/lib/constants';
import { AIRD_AIM, AIRD_OBJECTIVES, FOUNDER, BIOGRAPHY_TIMELINE } from '@/data/about';
import { Badge } from '@/components/ui/badge';
import { ABOUT_SUB_NAV } from '@/lib/subNavTree';

export default function About() {
  return (
    <>
      <PageHero
        title="About AIRD"
        subtitle="A trust committed to strengthening people's governance 'Gram Swaraj' — not on paper, but at the village level."
        gradient="saffron"
      >
        <p className="text-sm font-medium text-saffron-700 italic">&ldquo;{SERVICE_PRINCIPLE}&rdquo;</p>
      </PageHero>
      <Breadcrumb items={[{ label: 'About us' }]} />

      {/* Quick links to sub-pages */}
      <section className="container-px pt-6 pb-0">
        <SubNavPills items={ABOUT_SUB_NAV} />
      </section>

      {/* AIRD intro */}
      <section className="container-px mb-6">
        <div className="mx-auto max-w-3xl card-surface bg-white p-5 sm:p-7 rounded-xl shadow-md border border-forest-100">
          <p className="text-ink/85 text-sm sm:text-base leading-relaxed break-words">
            <strong className="text-forest-900 font-bold">{AIRD.name}</strong> ({AIRD.shortName}) was established on 31 January 2020
            under the {AIRD.registeredUnder}, Registration No. {AIRD.registrationNo}.
            AIRD aims to demonstrate an appropriate process of strengthening people&rsquo;s
            governance &ldquo;Gram Swaraj&rdquo; not on paper but in a village, and to develop
            a team of youth to replicate success for accelerating development of rural Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* Aim & Objectives (summary) */}
      <section className="section-py mb-4">
        <div className="container-px">
          <div className="card-surface bg-white p-5 sm:p-7 rounded-xl shadow-md border border-forest-100">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-800">
                  <Target className="h-3.5 w-3.5" /> Our Direction
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-saffron-900">Aim &amp; Objectives</h2>
                <div className="mt-4 border-l-4 border-l-saffron-500 bg-saffron-50/90 p-4 rounded-r-lg">
                  <p className="text-sm font-medium text-ink/90 leading-relaxed break-words">{AIRD_AIM}</p>
                </div>
              </div>
              <div>
                <ol className="space-y-2.5">
                  {AIRD_OBJECTIVES.slice(0, 8).map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-100 text-xs font-bold text-forest-800 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-ink/80 leading-relaxed break-words min-w-0">{obj}</span>
                    </li>
                  ))}
                </ol>
                <Link to="/about/aim-objectives" className="mt-4 inline-block text-sm font-bold text-saffron-700 hover:underline">
                  View all 15 objectives &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Biography Timeline */}
      <section className="section-py mb-6">
        <div className="container-px">
          <div className="card-surface bg-white p-5 sm:p-7 rounded-xl shadow-md border border-forest-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-800">
                <Compass className="h-3.5 w-3.5" /> Journey of the Trustee
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-forest-950">{FOUNDER.name}</h2>
              <p className="text-sm text-ink/60 mt-1">{FOUNDER.role} &bull; Born {FOUNDER.born}</p>
              <p className="mt-3 max-w-2xl mx-auto text-ink/80 leading-relaxed text-sm sm:text-base break-words">{FOUNDER.bio}</p>
              <Link to="/trustee/journey" className="mt-2 inline-block text-sm font-bold text-forest-700 hover:underline">
                Read the full journey &rarr;
              </Link>
            </div>

            {/* Vertical timeline */}
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron-200 md:-translate-x-1/2" />
              <div className="space-y-6">
                {BIOGRAPHY_TIMELINE.map((m, i) => (
                  <div
                    key={m.year}
                    className={`relative flex flex-col md:flex-row gap-4 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <span className="block h-4 w-4 rounded-full bg-saffron-500 ring-4 ring-cream" />
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="md:w-1/2 pl-10 md:pl-6">
                      <div className="bg-white/95 border border-saffron-100 p-4 rounded-xl shadow-sm">
                        <Badge variant="default" className="mb-1.5">{m.year}</Badge>
                        <h3 className="font-bold text-ink text-sm sm:text-base break-words">{m.title}</h3>
                        <p className="mt-1 text-xs sm:text-sm text-ink/70 leading-relaxed break-words">{m.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
