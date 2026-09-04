import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Globe, ShieldCheck } from 'lucide-react';
import { AIRD as AIRD_CONST, NAV_TREE, SOCIAL_LINKS } from '@/lib/constants';
import { ImportantLinksStrip } from './ImportantLinks';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80">
      {/* Tricolor top edge */}
      <div className="flex h-1 w-full" aria-hidden>
        <div className="flex-1 bg-saffron-500" />
        <div className="flex-1 bg-white/90" />
        <div className="flex-1 bg-forest-500" />
      </div>

      {/* Important Websites strip */}
      <ImportantLinksStrip variant="dark" />

      {/* Main footer */}
      <div className="container-px py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Col 1 — About / brand & Key Movement Logos */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Logo size="md" variant="light" />
              <div>
                <div className="font-bold text-cream">{AIRD_CONST.shortName}</div>
                <div className="text-[10px] text-cream/50">Gram Swaraj &bull; Rural Development</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">{AIRD_CONST.tagline}</p>
            <p className="mt-3 text-xs font-medium text-saffron-400">{AIRD_CONST.motto}</p>

            {/* Key Movements & Insignia */}
            <div className="mt-6 pt-5 border-t border-cream/10 space-y-3">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-saffron-400">
                Key Movements &amp; Insignia
              </h5>
              <div className="space-y-2.5">
                {/* Logo 1: Project KRANTI Emblem */}
                <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-2 rounded-lg border border-white/10 transition-colors">
                  <img
                    src="/kranti-logo.png"
                    alt="क्रांति — Project KRANTI"
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-md bg-white p-1 shrink-0 shadow-xs"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-cream leading-snug">परियोजना क्रांति</div>
                    <div className="text-[10px] text-saffron-300 font-medium">Project KRANTI Emblem</div>
                  </div>
                </div>

                {/* Logo 2: Bharat Nirman */}
                <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-2 rounded-lg border border-white/10 transition-colors">
                  <img
                    src="/bharat-nirman.jpg"
                    alt="भारत निर्माण"
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-md bg-white p-1 shrink-0 shadow-xs"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-cream leading-snug">भारत निर्माण</div>
                    <div className="text-[10px] text-cream/70 font-medium">चलें नयी आज़ादी की ओर</div>
                  </div>
                </div>

                {/* Logo 3: Digital India */}
                <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-2 rounded-lg border border-white/10 transition-colors">
                  <img
                    src="/digital-india.jpg"
                    alt="Digital India"
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-md bg-white p-1 shrink-0 shadow-xs"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-cream leading-snug">Digital India</div>
                    <div className="text-[10px] text-saffron-300 font-medium">Power To Empower</div>
                  </div>
                </div>

                {/* Logo 4: VB-GRAM G Act */}
                <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-2 rounded-lg border border-white/10 transition-colors">
                  <img
                    src="/vb-gram-g-act.png"
                    alt="VB-GRAM G Act"
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-md bg-white p-1 shrink-0 shadow-xs"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-cream leading-snug">VB-GRAM G Act</div>
                    <div className="text-[10px] text-saffron-300 font-medium">Viksit Bharat 2047</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cols 2-3 — nav map mirroring the site tree */}
          <nav className="lg:col-span-2" aria-label="Footer">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {NAV_TREE.filter((n) => n.label !== 'Home').map((item) => (
                <div key={item.label}>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-saffron-400">
                    {item.label}
                  </h4>
                  <ul className="space-y-1.5">
                    {item.to && (
                      <li>
                        <Link
                          to={item.to}
                          className="text-xs text-cream/60 transition-colors hover:text-saffron-300"
                        >
                          Overview
                        </Link>
                      </li>
                    )}
                    {(item.children ?? []).slice(0, 6).map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          className="text-xs text-cream/60 transition-colors hover:text-saffron-300"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Col 4 — Contact + credentials */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-saffron-400">
              Contact &amp; Credentials
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-saffron-400" />
                <span>{AIRD_CONST.registeredOffice}</span>
              </li>
              <li>
                <a href={SOCIAL_LINKS.phone} className="flex items-center gap-2 hover:text-saffron-300">
                  <Phone className="h-3.5 w-3.5 text-saffron-400" /> +91 {AIRD_CONST.contactMobile}
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.email} className="flex items-center gap-2 break-all hover:text-saffron-300">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-saffron-400" /> {AIRD_CONST.email}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-saffron-300"
                >
                  <Facebook className="h-3.5 w-3.5 text-saffron-400" /> IndiaRuralDev
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-cream/45">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest-400" />
                <span>
                  Reg. {AIRD_CONST.registrationNo} ({AIRD_CONST.registrationDate}) &bull; NGO Darpan {AIRD_CONST.ngoDarpanId} &bull; PAN {AIRD_CONST.pan}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 bg-black/20">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-4 text-xs text-cream/40 sm:flex-row">
          <span>
            &copy; {year} {AIRD_CONST.name}. All Rights Reserved.
          </span>
          <span className="flex items-center gap-1.5">
            <Globe className="h-3 w-3" /> Last Updated: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
            <span className="mx-1 text-cream/20">|</span>
            <span>Designed for accessibility</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
