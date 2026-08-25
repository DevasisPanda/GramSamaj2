import {
  Heart, Sparkles, Brain, Users, Leaf, Compass, Sun, Wind, Droplets,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import {
  PHILOSOPHY_INTRO, PHILOSOPHY_GUIDING_PRINCIPLE, PHILOSOPHY_PILLARS, THREE_WORLDS,
} from '@/data/philosophy';

const PILLAR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, Sparkles, HandHeart: Heart, Brain, Users, Leaf,
};

const WORLD_ICONS = [Sun, Wind, Droplets];

/**
 * Philosophy — AIRD's own philosophy, sourced from "Philosophy.docx".
 * Spiritual Teachings are a separate section (/teachings) with their own
 * source documents; the two are intentionally never merged here.
 */
export default function Philosophy() {
  return (
    <>
      <PageHero title="Philosophy" subtitle={PHILOSOPHY_INTRO} gradient="forest">
        <p className="text-sm font-medium text-forest-800 italic bg-white/60 inline-block rounded-lg px-3 py-1.5">
          &ldquo;{PHILOSOPHY_GUIDING_PRINCIPLE}&rdquo;
        </p>
      </PageHero>
      <Breadcrumb items={[{ label: 'About Us', to: '/about' }, { label: 'Philosophy' }]} />

      {/* Six pillars */}
      <section className="section-py">
        <div className="container-px">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gradient-saffron">
            Six Pillars of Our Philosophy
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PHILOSOPHY_PILLARS.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.icon] ?? Heart;
              return (
                <Card key={pillar.id} className="hover:shadow-md transition-shadow">
                  <CardContent>
                    <div className="mb-3 inline-flex rounded-xl bg-saffron-100 p-3 text-saffron-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-ink">{pillar.title}</h3>
                    <p className="mt-1 text-sm font-medium text-saffron-700">{pillar.summary}</p>
                    <Accordion type="single" collapsible className="mt-2">
                      <AccordionItem value={pillar.id} className="border-0">
                        <AccordionTrigger className="py-2 text-xs">Read more</AccordionTrigger>
                        <AccordionContent>
                          {pillar.body.map((p, i) => (
                            <p key={i} className="mb-2 text-xs text-ink/60 leading-relaxed">{p}</p>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Three Worlds */}
      <section className="section-py bg-gradient-to-b from-saffron-50/40 to-white">
        <div className="container-px">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-saffron-100 px-3 py-1 text-xs font-semibold text-saffron-700">
              <Compass className="h-3.5 w-3.5" /> Three Worlds of Life
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gradient-saffron">Life in Three Dimensions</h2>
            <p className="mt-2 text-ink/60 max-w-2xl mx-auto">
              {'Life progresses through three interconnected worlds \u2014 each sustaining the next.'}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {THREE_WORLDS.map((world, i) => {
              const Icon = WORLD_ICONS[i] ?? Sun;
              return (
                <Card key={world.id} className="text-center hover:shadow-md transition-shadow">
                  <CardContent>
                    <div className="mx-auto mb-3 inline-flex rounded-full bg-gradient-to-br from-saffron-100 to-forest-100 p-4">
                      <Icon className="h-8 w-8 text-saffron-600" />
                    </div>
                    <h3 className="font-bold text-ink">{world.name}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{world.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
