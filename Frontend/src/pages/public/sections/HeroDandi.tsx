import { Link } from 'react-router-dom';
import { AIRD, RALLYING_CRY } from '@/lib/constants';

export function HeroDandi() {
  return (
    <div className="bg-white border border-forest-900 mb-2">
      <div className="govt-header-bar">
        <span>Official Trust Profile &bull; AIRD</span>
        <span className="text-[10px] text-saffron-300 font-normal">Reg. No: 9002139 IV-66/2020</span>
      </div>

      <div className="p-2 sm:p-3 text-xs">
        <div className="border-b border-forest-800 pb-1 mb-2">
          <span className="text-[10px] font-bold text-saffron-800 uppercase tracking-widest block">
            Gram Swaraj Mission
          </span>
          <h1 className="text-base sm:text-lg font-bold text-forest-900">
            {AIRD.name}
          </h1>
        </div>

        <p className="text-[11px] font-semibold italic text-saffron-900 mb-2 bg-saffron-50 border-l-2 border-saffron-600 p-1.5">
          &ldquo;{RALLYING_CRY}&rdquo;
        </p>

        <p className="text-xs text-gray-900 leading-relaxed mb-3">
          {AIRD.tagline} Dedicated to strengthening democratic institutions at the Gram Sabha level through participatory planning, community leadership, and holistic rural development.
        </p>

        {/* Credentials Data Table */}
        <table className="w-full text-left text-[11px] border border-forest-800 border-collapse mb-2">
          <thead className="bg-forest-800 text-white font-bold uppercase text-[9px]">
            <tr>
              <th className="p-1 border border-forest-700">Specification</th>
              <th className="p-1 border border-forest-700">Official Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr className="bg-white">
              <td className="p-1 font-bold border border-gray-300 text-forest-900">Registration</td>
              <td className="p-1 border border-gray-300">Registered Public Charitable Trust (Act 1882)</td>
            </tr>
            <tr className="bg-forest-50/40">
              <td className="p-1 font-bold border border-gray-300 text-forest-900">NITI Aayog</td>
              <td className="p-1 border border-gray-300">NGO Darpan ID: {AIRD.ngoDarpanId}</td>
            </tr>
            <tr className="bg-white">
              <td className="p-1 font-bold border border-gray-300 text-forest-900">Headquarters</td>
              <td className="p-1 border border-gray-300">Lucknow, Uttar Pradesh, India</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-forest-800 text-[11px] font-bold">
          <div className="flex gap-2">
            <Link to="/membership" className="govt-link">
              &raquo; Join / Membership
            </Link>
            <Link to="/donate" className="govt-link">
              &raquo; Support / Donate
            </Link>
          </div>
          <Link to="/about/vision-mission" className="govt-link">
            Read More Trust Mission &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}




