import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket, CalendarClock, Moon, CheckSquare, ArrowRight, ExternalLink, MapPin,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useMoonCountdown } from '@/hooks/useMoonCountdown';
import { KRANTI, KRANTI_PHASES, KRANTI_CONTINUOUS } from '@/data/kranti';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

export default function Kranti() {
  const [activePhase, setActivePhase] = useState(1);
  const phase = KRANTI_PHASES.find((p) => p.id === activePhase)!;
  const { nextEvent, countdown } = useMoonCountdown();

  return (
    <>
      <PageHero
        title={`Project ${KRANTI.shortName}`}
        subtitle={`${KRANTI.fullName} — ${KRANTI.tagline}`}
        gradient="forest"
      >
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/70 px-3 py-1.5 font-medium text-forest-800">
            <Rocket className="h-4 w-4" /> Launch: {formatDate(KRANTI.launchDate)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/70 px-3 py-1.5 font-medium text-forest-800">
            <MapPin className="h-4 w-4" /> {KRANTI.location}
          </span>
        </div>
      </PageHero>
      <Breadcrumb items={[{ label: 'KRANTI' }]} />

      {/* Aim */}
      <section className="section-py">
        <div className="container-px">
          <Card className="mx-auto max-w-4xl border-l-4 border-l-forest-600">
            <CardHeader>
              <CardTitle className="text-forest-800">Aim of {KRANTI.shortName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-ink/70 leading-relaxed">{KRANTI.aim}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Participatory Action Project</Badge>
                <Badge variant="default">Village Digitalization</Badge>
                <Badge variant="outline">People&rsquo;s Governance</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7-Phase Timeline */}
      <section className="section-py bg-gradient-to-b from-forest-50/30 to-white">
        <div className="container-px">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient-forest">
              Seven Phases of {KRANTI.shortName}
            </h2>
            <p className="mt-2 text-ink/60">15 August 2026 &mdash; 14 August 2027. Select a phase to explore its activities.</p>
          </div>

          {/* Gantt-style phase selector */}
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max justify-center">
              {KRANTI_PHASES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhase(p.id)}
                  className={cn(
                    'flex flex-col items-center gap-1 rounded-xl border-2 px-4 py-3 transition-all min-w-[110px]',
                    activePhase === p.id
                      ? 'border-forest-600 bg-forest-600 text-white shadow-md scale-105'
                      : 'border-saffron-200 bg-white text-ink/60 hover:border-forest-400',
                  )}
                >
                  <span className={cn('text-lg font-bold', activePhase === p.id ? 'text-white' : 'text-forest-700')}>
                    {p.id}
                  </span>
                  <span className="text-[10px] font-medium text-center leading-tight">
                    {p.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active phase detail */}
          <Card className="mx-auto max-w-4xl">
            <CardHeader>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <CardTitle className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-100 text-forest-700 text-sm">
                    {phase.id}
                  </span>
                  {phase.title}
                </CardTitle>
                <Badge variant="secondary" className="gap-1">
                  <CalendarClock className="h-3 w-3" /> {phase.window}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-ink/70 leading-relaxed">{phase.description}</p>
              <h4 className="mt-5 text-sm font-semibold text-ink/60">Key Deliverables</h4>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {phase.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                    <CheckSquare className="h-4 w-4 text-forest-600 mt-0.5 shrink-0" /> {d}
                  </li>
                ))}
              </ul>

              {/* Phase nav */}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setActivePhase((p) => Math.max(1, p - 1))}
                  disabled={activePhase === 1}
                  className="text-sm text-saffron-600 disabled:opacity-30 hover:underline"
                >
                  &larr; Previous Phase
                </button>
                <button
                  onClick={() => setActivePhase((p) => Math.min(7, p + 1))}
                  disabled={activePhase === 7}
                  className="text-sm text-saffron-600 disabled:opacity-30 hover:underline"
                >
                  Next Phase &rarr;
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Continuous activities */}
          <Card className="mx-auto max-w-4xl mt-6 bg-saffron-50/50">
            <CardContent>
              <h3 className="font-semibold text-saffron-800 mb-3">Continuous Activities</h3>
              <ul className="space-y-2">
                {KRANTI_CONTINUOUS.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className="text-saffron-500 mt-0.5">&#x25C6;</span> {c}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Maitri Bhoj Countdown */}
      <section className="section-py">
        <div className="container-px">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] items-stretch">
            {/* Countdown card */}
            <Card className="bg-gradient-to-br from-saffron-500 to-saffron-700 text-white border-0">
              <CardContent className="flex flex-col items-center justify-center text-center h-full">
                <Moon className="h-10 w-10 mb-3" />
                <h3 className="text-lg font-bold">Maitri Bhoj Countdown</h3>
                <p className="text-xs text-white/80 mt-1">
                  Next gathering: {nextEvent?.label}
                </p>
                {countdown && (
                  <div className="mt-5 grid grid-cols-4 gap-3 w-full max-w-xs">
                    {[
                      { v: countdown.days, l: 'Days' },
                      { v: countdown.hours, l: 'Hrs' },
                      { v: countdown.minutes, l: 'Min' },
                      { v: countdown.seconds, l: 'Sec' },
                    ].map((u) => (
                      <div key={u.l} className="rounded-lg bg-white/20 py-2">
                        <div className="text-2xl font-bold tabular-nums">{String(u.v).padStart(2, '0')}</div>
                        <div className="text-[10px] text-white/70">{u.l}</div>
                      </div>
                    ))}
                  </div>
                )}
                {nextEvent && (
                  <p className="mt-4 text-xs text-white/70">{formatDate(nextEvent.date.toISOString(), { weekday: true })}</p>
                )}
              </CardContent>
            </Card>

            {/* Feedback checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-forest-600" /> Community Feedback Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink/60 mb-4">
                  Maitri Bhoj (community dinners) are held on every Pooranmasi (Full Moon) and Amavasya (New Moon) for feedback and dialogue. Previous gatherings documented:
                </p>
                <ul className="space-y-2.5">
                  {[
                    'State of village resources (water, roads, sanitation)',
                    'Status of MGNREGA works and job card payments',
                    'Functioning of Self-Help Groups (SHGs)',
                    'Gram Sabha participation and social audit findings',
                    'Priority issues raised by women and youth',
                    'Progress on government scheme awareness',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                      <CheckSquare className="h-4 w-4 text-forest-600 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Phase II expansion callout */}
      <section className="pb-20">
        <div className="container-px">
          <Card className="mx-auto max-w-4xl bg-gradient-to-br from-forest-700 to-forest-900 text-white border-0">
            <CardContent className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="inline-flex rounded-xl bg-white/10 p-4 shrink-0">
                <Rocket className="h-8 w-8 text-saffron-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Phase II: Scaling across 17 RIRDs</h3>
                <p className="text-sm text-white/70 mt-1">
                  Following the model village, {KRANTI.shortName} Phase II will replicate best practices across the 17 Regional Institutes of Rural Development (RIRDs) under DDU-SIRD, Uttar Pradesh.
                </p>
              </div>
              <a href="https://sird.up.gov.in/" target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="gap-2 whitespace-nowrap">
                  DDU-SIRD <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Link to="/join">
              <Button size="lg" className="gap-2">
                Become a Change Agent <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
