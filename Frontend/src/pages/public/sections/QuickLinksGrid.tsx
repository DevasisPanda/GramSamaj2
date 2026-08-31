import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { title: 'Gram Swaraj Framework', desc: "People's Governance & 73rd Amendment", to: '/kranti/decentralized-governance' },
  { title: 'Project KRANTI Blueprint', desc: '7-Phase Village Action Plan', to: '/kranti' },
  { title: 'Village Directory & Data', desc: 'Garhi & Model Village Insights', to: '/village-directory' },
  { title: 'Development Car', desc: "Soul's Journey & Blessings", to: '/development-car' },
  { title: 'Core Philosophy', desc: 'Humanity, Service & Six Pillars', to: '/philosophy' },
  { title: 'Spiritual Teachings', desc: 'Vivekananda & Buddha Guidance', to: '/teachings' },
  { title: 'Volunteer / Membership', desc: 'Gram Swaraj Youth Forum', to: '/membership' },
  { title: 'Donate / Support AIRD', desc: 'Support Rural Governance', to: '/donate' },
  { title: 'Contact Headquarters', desc: 'Lucknow Office & Enquiries', to: '/contact' },
];

export function QuickLinksGrid() {
  return (
    <div className="bg-white border border-forest-900 w-full min-w-0 box-border">
      <div className="govt-header-bar">
        <span>Quick Navigation</span>
        <span className="text-[10px] text-saffron-300 font-normal">Direct Links</span>
      </div>

      <div className="divide-y divide-gray-200">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.title}
            to={link.to}
            className="block p-2 hover:bg-forest-50 transition-colors"
          >
            <div className="font-bold text-xs text-forest-900 flex items-start gap-1">
              <span className="text-saffron-600 font-bold shrink-0 mt-0.5">&raquo;</span>
              <span className="break-words min-w-0">{link.title}</span>
            </div>
            <p className="text-[10px] text-gray-700 leading-tight pl-3 break-words">
              {link.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}


