import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { WHIRLPOOL } from '@/data/philosophy';
import { cn } from '@/lib/utils';

interface Particle {
  angle: number;
  radius: number;
  speed: number;
  type: 'attachment' | 'purifier';
  label: string;
  id: string;
  escaping: boolean;
  escaped: boolean;
  opacity: number;
}

const ATTACHMENT_COLOR = '#D97706'; // saffron-600 — trapped
const PURIFIER_COLOR = '#15803D'; // forest-700 — liberating

/**
 * Vivekananda's Whirlpool Theory — interactive canvas.
 * Attachment particles orbit the center (Samsara); purifier particles
 * (the four Yogas) help an attachment escape the whirlpool toward Moksha
 * (the river at the edge). Click a purifier to "release" an attachment.
 */
export function WhirlpoolCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const [, setPurified] = useState(0);

  // Initialize particles once
  useEffect(() => {
    const attachments = WHIRLPOOL.attachments.map((a, i) => ({
      id: a.id,
      label: a.label,
      angle: (i / WHIRLPOOL.attachments.length) * Math.PI * 2,
      radius: 60 + (i % 3) * 22,
      speed: 0.012 + (i % 3) * 0.004,
      type: 'attachment' as const,
      escaping: false,
      escaped: false,
      opacity: 1,
    }));
    const purifiers = WHIRLPOOL.purifiers.map((p, i) => ({
      id: p.id,
      label: p.label,
      angle: (i / WHIRLPOOL.purifiers.length) * Math.PI * 2,
      radius: 150,
      speed: 0.006,
      type: 'purifier' as const,
      escaping: false,
      escaped: false,
      opacity: 1,
    }));
    particlesRef.current = [...attachments, ...purifiers];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 360;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);
    const cx = size / 2;
    const cy = size / 2;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, size, size);

      // River (outer ring)
      ctx.beginPath();
      ctx.arc(cx, cy, 165, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.35)';
      ctx.lineWidth = 14;
      ctx.stroke();
      ctx.font = '10px sans-serif';
      ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
      ctx.fillText('Free-flowing River (Moksha)', cx - 60, 18);

      // Whirlpool rings
      for (let r = 30; r <= 130; r += 25) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(217, 119, 6, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Center (Maya)
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 18);
      grad.addColorStop(0, '#FBB126');
      grad.addColorStop(1, '#D97706');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Maya', cx, cy + 3);

      // Particles
      particlesRef.current.forEach((p) => {
        if (p.escaped) {
          p.opacity = Math.max(0, p.opacity - 0.01);
        } else {
          if (p.escaping) {
            // Drift outward toward the river
            p.radius += 1.6;
            p.angle += p.speed * 0.5;
            if (p.radius > 160) {
              p.escaped = true;
            }
          } else {
            p.angle += p.speed;
            // Gentle inward pull for attachments
            if (p.type === 'attachment') {
              p.radius += Math.sin(p.angle * 3) * 0.15;
            }
          }
        }

        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(x, y, p.type === 'purifier' ? 6 : 5, 0, Math.PI * 2);
        ctx.fillStyle = p.type === 'purifier' ? PURIFIER_COLOR : ATTACHMENT_COLOR;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.8)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        ctx.globalAlpha = p.opacity * 0.8;
        ctx.fillStyle = '#1F2937';
        ctx.font = '8px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(p.label.split(' ')[0], x, y - 8);
        ctx.globalAlpha = 1;
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function purify() {
    // Find a trapped attachment and set it escaping
    const list = particlesRef.current;
    const trapped = list.filter((p) => p.type === 'attachment' && !p.escaping && !p.escaped);
    if (trapped.length === 0) return;
    const target = trapped[Math.floor(Math.random() * trapped.length)];
    target.escaping = true;
    setPurified((n) => n + 1);
  }

  function reset() {
    particlesRef.current.forEach((p) => {
      if (p.type === 'attachment') {
        p.escaping = false;
        p.escaped = false;
        p.opacity = 1;
        p.radius = 60 + (Number(p.id.replace(/[^0-9]/g, '')) % 3) * 22;
      }
    });
    setPurified(0);
  }

  const escapedCount = particlesRef.current.filter((p) => p.escaped).length;

  return (
    <div className="card-surface p-6">
      <div className="grid gap-6 md:grid-cols-[auto_1fr] items-center">
        <div className="flex justify-center">
          <canvas ref={canvasRef} className="rounded-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gradient-saffron flex items-center gap-2">
            <Sparkles className="h-5 w-5" /> The Whirlpool of Worldly Existence
          </h3>
          <p className="mt-2 text-sm text-ink/60 leading-relaxed">{WHIRLPOOL.intro}</p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-saffron-50 p-2">
              <p className="text-[11px] font-semibold text-saffron-700">Attachments (trapped)</p>
              <ul className="mt-1 space-y-0.5">
                {WHIRLPOOL.attachments.map((a) => (
                  <li key={a.id} className="text-[10px] text-ink/50">{a.label}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-forest-50 p-2">
              <p className="text-[11px] font-semibold text-forest-700">Paths to Liberation</p>
              <ul className="mt-1 space-y-0.5">
                {WHIRLPOOL.purifiers.map((p) => (
                  <li key={p.id} className="text-[10px] text-ink/50">{p.label}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={purify}
              className="rounded-lg bg-forest-700 px-4 py-2 text-xs font-semibold text-white hover:bg-forest-800 transition-colors"
            >
              Practice a Yoga &rarr; Liberate a soul
            </button>
            <button
              onClick={reset}
              className="rounded-lg border border-saffron-300 px-4 py-2 text-xs font-semibold text-saffron-700 hover:bg-saffron-50 transition-colors"
            >
              Reset
            </button>
            <span className={cn('text-xs font-medium', escapedCount >= WHIRLPOOL.attachments.length ? 'text-forest-700' : 'text-ink/40')}>
              {escapedCount}/{WHIRLPOOL.attachments.length} liberated
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs italic text-ink/50 border-t border-saffron-100 pt-3">{WHIRLPOOL.salvation}</p>
    </div>
  );
}
