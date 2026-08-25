import { Link } from 'react-router-dom';
import { ArrowRight, HandHeart, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AIRD, RALLYING_CRY } from '@/lib/constants';

const VISION_CARDS = [
  {
    title: "People's Governance in Development",
    body: 'A system in which citizens actively participate in planning, implementation, monitoring, and evaluation of development activities. At the village level it is the practical expression of Gram Swaraj, where the Gram Sabha becomes the central institution for democratic decision-making and accountability.',
    icon: HandHeart,
  },
  {
    title: 'Model Village',
    body: 'Demonstration villages showcasing participatory planning, social accountability, digital transparency, and collaboration among government, community institutions, civil society, and academic organisations — accelerating Gandhi’s vision of Gram Swaraj and the SDGs.',
    icon: Sprout,
  },
  {
    title: 'The Development Car',
    body: 'A symbolic vehicle for the soul’s journey. Every soul is provided an invisible Development Car by the Supreme Power, strengthened by blessings earned through selfless service.',
    icon: ArrowRight,
  },
  {
    title: 'Goal of the Soul',
    body: 'Inspired by Vivekananda’s whirlpool: the soul, originally free and divine, becomes caught in worldly existence through attachment — and is liberated through knowledge, action, devotion, and meditation.',
    icon: Sprout,
  },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container-px relative z-10 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm px-3 py-1 text-xs font-semibold text-saffron-700">
              <span className="h-2 w-2 rounded-full bg-forest-500 animate-pulse" />
              Gram Swaraj &bull; Village Garhi, Malihabad, Lucknow
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-gradient-saffron">{AIRD.name}</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl font-medium text-forest-800 italic">
              &ldquo;{RALLYING_CRY}&rdquo;
            </p>

            <p className="mt-5 max-w-xl text-ink/70 leading-relaxed">
              {AIRD.tagline} A non-profit charitable trust committed to strengthening people&rsquo;s governance &mdash; not on paper, but at the village level.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/join">
                <Button size="lg" className="gap-2">
                  Join Hands &amp; Take Action <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="gap-2">
                  <HandHeart className="h-4 w-4" /> Donate Now
                </Button>
              </Link>
            </div>

            {/* Mini stats */}
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: 'Est.', v: '2020' },
                { k: 'Villagers', v: '120+' },
                { k: 'KRANTI', v: '7 Phases' },
              ].map((s) => (
                <div key={s.k} className="rounded-xl bg-white/70 backdrop-blur px-3 py-2 text-center shadow-sm">
                  <dt className="text-[10px] uppercase tracking-wide text-ink/40">{s.k}</dt>
                  <dd className="text-lg font-bold text-saffron-700">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — decorative panel */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2.5rem] gradient-saffron opacity-90 shadow-2xl" />
              <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-br from-forest-700 to-forest-900 shadow-inner flex items-center justify-center overflow-hidden">
                {/* Stylized village scene */}
                <svg viewBox="0 0 200 200" className="w-full h-full p-6">
                  <circle cx="150" cy="50" r="16" className="fill-saffron-300" />
                  <path d="M0,150 Q50,130 100,150 T200,140 L200,200 L0,200 Z" className="fill-forest-600" />
                  <path d="M0,160 Q60,150 120,160 T200,155 L200,200 L0,200 Z" className="fill-forest-800" />
                  {/* Huts */}
                  <g className="fill-cream">
                    <path d="M40,140 L55,120 L70,140 Z" />
                    <rect x="44" y="135" width="22" height="20" className="fill-saffron-200" />
                  </g>
                  <g className="fill-cream">
                    <path d="M110,145 L125,128 L140,145 Z" />
                    <rect x="114" y="140" width="22" height="20" className="fill-saffron-200" />
                  </g>
                  {/* Tree */}
                  <circle cx="95" cy="125" r="12" className="fill-forest-400" />
                  <rect x="93" y="130" width="4" height="14" className="fill-amber-800" />
                  <text x="100" y="190" textAnchor="middle" className="fill-cream/70" fontSize="8">Gram Swaraj</text>
                </svg>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white shadow-lg px-4 py-3 max-w-[180px]">
                <p className="text-xs font-semibold text-ink">Registered under PCTA 1882</p>
                <p className="text-[10px] text-ink/50 mt-0.5">Reg. No. 9002139 IV-66/2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision cards strip */}
      <div className="container-px relative z-10 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VISION_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="card-surface p-5 group hover:shadow-md transition-all">
                <div className="mb-3 inline-flex rounded-lg bg-saffron-100 p-2 text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-ink mb-1.5">{card.title}</h3>
                <p className="text-xs text-ink/60 leading-relaxed line-clamp-4">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
