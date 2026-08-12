import {
  Target, Compass,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { AIRD, SERVICE_PRINCIPLE } from '@/lib/constants';
import { AIRD_AIM, AIRD_OBJECTIVES, FOUNDER, BIOGRAPHY_TIMELINE } from '@/data/about';
import { Badge } from '@/components/ui/badge';

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
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Quick links to sub-pages */}
      <section className="container-px -mt-2 mb-6">
        <div className="flex flex-wrap gap-2">
          <Link to="/about/trust" className="rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-700 hover:bg-saffron-200 transition-colors">
            Trust / In Brief
          </Link>
          <Link to="/about/vision-mission" className="rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-700 hover:bg-saffron-200 transition-colors">
            Vision &amp; Mission
          </Link>
          <Link to="/about/aim-objectives" className="rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-700 hover:bg-saffron-200 transition-colors">
            Aim &amp; Objectives
          </Link>
          <Link to="/trustee/board" className="rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700 hover:bg-forest-200 transition-colors">
            Board of Trustees
          </Link>
        </div>
      </section>

      {/* AIRD intro */}
      <section className="container-px mb-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-ink/75 leading-relaxed">
            <strong>{AIRD.name}</strong> ({AIRD.shortName}) was established on 31 January 2020
            under the {AIRD.registeredUnder}, Registration No. {AIRD.registrationNo}.
            AIRD aims to demonstrate an appropriate process of strengthening people&rsquo;s
            governance &ldquo;Gram Swaraj&rdquo; not on paper but in a village, and to develop
            a team of youth to replicate success for accelerating development of rural Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* Aim & Objectives (summary) */}
      <section className="section-py bg-gradient-to-b from-saffron-50/40 to-white">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-700">
                <Target className="h-3.5 w-3.5" /> Our Direction
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gradient-saffron">Aim &amp; Objectives</h2>
              <Card className="mt-5 border-l-4 border-l-saffron-500">
                <CardContent>
                  <p className="text-sm font-medium text-ink leading-relaxed">{AIRD_AIM}</p>
                </CardContent>
              </Card>
            </div>
            <ol className="space-y-3">
              {AIRD_OBJECTIVES.slice(0, 8).map((obj, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest-100 text-xs font-bold text-forest-700">
                    {i + 1}
                  </span>
                  <span className="text-sm text-ink/70 leading-relaxed pt-0.5">{obj}</span>
                </li>
              ))}
            </ol>
            <Link to="/about/aim-objectives" className="mt-4 inline-block text-sm font-semibold text-saffron-700 hover:underline">
              View all 15 objectives &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Biography Timeline */}
      <section className="section-py">
        <div className="container-px">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
              <Compass className="h-3.5 w-3.5" /> Journey of the Trustee
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gradient-forest">{FOUNDER.name}</h2>
            <p className="text-sm text-ink/50 mt-1">{FOUNDER.role} &bull; Born {FOUNDER.born}</p>
            <p className="mt-3 max-w-2xl mx-auto text-ink/60 leading-relaxed">{FOUNDER.bio}</p>
            <Link to="/trustee/journey" className="mt-2 inline-block text-sm font-semibold text-forest-700 hover:underline">
              Read the full journey &rarr;
            </Link>
          </div>

          {/* Vertical timeline */}
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron-200 md:-translate-x-1/2" />
            <div className="space-y-8">
              {BIOGRAPHY_TIMELINE.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row gap-4 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <span className="block h-4 w-4 rounded-full bg-saffron-500 ring-4 ring-cream" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="md:w-1/2 pl-12 md:pl-8">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent>
                        <Badge variant="default" className="mb-2">{m.year}</Badge>
                        <h3 className="font-bold text-ink">{m.title}</h3>
                        <p className="mt-1 text-sm text-ink/60 leading-relaxed">{m.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
