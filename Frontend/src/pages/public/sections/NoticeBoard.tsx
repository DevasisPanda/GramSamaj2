import { Link } from 'react-router-dom';

const NOTICES = [
  {
    date: '10 Aug 2026',
    title: 'Village Garhi Gram Sabha Meeting Scheduled',
    isNew: true,
    to: '/kranti/decentralized-governance',
  },
  {
    date: '04 Aug 2026',
    title: 'AIRD Trust Annual Activity & Financial Report',
    isNew: true,
    to: '/annual-report',
  },
  {
    date: '28 Jul 2026',
    title: 'Project KRANTI Phase 1 Blueprint Finalized',
    isNew: false,
    to: '/kranti',
  },
  {
    date: '15 Jul 2026',
    title: 'Youth Volunteer Program Registration Open',
    isNew: false,
    to: '/membership',
  },
  {
    date: '01 Jul 2026',
    title: 'Teachings of Vivekananda & Buddha Session',
    isNew: false,
    to: '/teachings',
  },
];

export function NoticeBoard() {
  return (
    <div className="bg-white border border-forest-900 mb-2">
      {/* Header bar */}
      <div className="govt-header-bar">
        <span>What's New / Notices</span>
        <span className="text-[9px] text-saffron-300 font-normal">Live Updates</span>
      </div>

      {/* Scrollable list of announcements in table style */}
      <div className="max-h-[290px] overflow-y-auto p-1.5">
        <table className="w-full text-left text-[11px] border-collapse">
          <tbody>
            {NOTICES.map((n, i) => (
              <tr key={i} className="border-b border-gray-200 hover:bg-forest-50/50">
                <td className="py-1 px-1 align-top w-20 text-[10px] font-bold text-forest-900 shrink-0">
                  {n.date}
                </td>
                <td className="py-1 px-1 align-top">
                  <Link to={n.to} className="text-gray-900 font-semibold hover:text-forest-800 hover:underline leading-snug block">
                    {n.title}
                  </Link>
                  {n.isNew && (
                    <span className="font-bold text-red-600 text-[9px] uppercase">[New]</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer link */}
      <div className="border-t border-forest-800 bg-[#F4F6F0] px-2 py-1 text-right">
        <Link to="/activities" className="govt-link">
          All Notices &rarr;
        </Link>
      </div>
    </div>
  );
}


