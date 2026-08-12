import { useEffect, useState } from 'react';

export interface MoonEvent {
  name: string;
  date: Date;
  /** Hindi label */
  label: string;
}

/**
 * Compute the next Pooranmasi (Full Moon) and Amavasya (New Moon) from now.
 * Uses a simple lunar-cycle approximation (synodic month ≈ 29.53059 days).
 * In production this should call a lunar-calendar API or a precise library
 * like `lunar-javascript`; this approximation keeps the frontend self-contained.
 */
function computeNextMoons(): MoonEvent[] {
  // Known reference: 15 Aug 2026 was a Pooranmasi (Full Moon)
  const REF_POORANMASI = new Date('2026-08-15T00:00:00+05:30').getTime();
  const SYNODIC = 29.53059 * 24 * 60 * 60 * 1000; // ms

  const now = Date.now();
  const moons: MoonEvent[] = [];

  // Find next Pooranmasi
  let pooranmasi = REF_POORANMASI;
  while (pooranmasi < now) pooranmasi += SYNODIC;
  moons.push({
    name: 'Pooranmasi',
    label: 'पूर्णमासी (Full Moon)',
    date: new Date(pooranmasi),
  });

  // Amavasya is ~half a synodic month after each Pooranmasi
  let amavasya = pooranmasi - SYNODIC / 2;
  if (amavasya < now) amavasya += SYNODIC;
  moons.push({
    name: 'Amavasya',
    label: 'अमावस्या (New Moon)',
    date: new Date(amavasya),
  });

  moons.sort((a, b) => a.date.getTime() - b.date.getTime());
  return moons;
}

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  label: string;
}

/** Live countdown to the next Pooranmasi / Amavasya for the Maitri Bhoj component. */
export function useMoonCountdown(): { nextEvent: MoonEvent | null; countdown: CountdownResult | null } {
  const [nextEvent, setNextEvent] = useState<MoonEvent | null>(null);
  const [countdown, setCountdown] = useState<CountdownResult | null>(null);

  useEffect(() => {
    const moons = computeNextMoons();
    const next = moons[0] ?? null;
    setNextEvent(next);

    if (!next) return;

    function tick() {
      const diff = next.date.getTime() - Date.now();
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, label: 'Today!' });
        return;
      }
      const s = Math.floor(diff / 1000);
      setCountdown({
        days: Math.floor(s / 86400),
        hours: Math.floor((s % 86400) / 3600),
        minutes: Math.floor((s % 3600) / 60),
        seconds: s % 60,
        label: '',
      });
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return { nextEvent, countdown };
}
