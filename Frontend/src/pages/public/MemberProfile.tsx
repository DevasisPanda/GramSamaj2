import { useState, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AdminContext';
import { trpc } from '@/lib/trpc';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  Mail, 
  Phone, 
  ShieldCheck, 
  CreditCard, 
  Download, 
  Printer, 
  Heart, 
  Calendar, 
  Award, 
  ExternalLink, 
  LogOut, 
  QrCode 
} from 'lucide-react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

export default function MemberProfile() {
  const { user, isAdmin, logout } = useAuth();
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  if (!user) {
    return <Navigate to="/login" replace state={{ from: { pathname: '/profile' } }} />;
  }

  // Query member details from backend
  const { data: memberInfo } = trpc.membership.getMyMembership.useQuery(undefined, {
    retry: false,
  });

  const memberNo = memberInfo?.membershipNumber || `AIRD-${String(user.id || '001').padStart(4, '0')}`;
  const memberType = memberInfo?.membershipType || user.role === 'admin' ? 'Executive Trustee' : 'General Member';
  const memberStatus = memberInfo?.status || (user.status === 'active' ? 'active' : 'pending');

  async function handleDownloadIdCard() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [85.6, 53.98], // Standard CR80 ID Card dimensions
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 85.6, 53.98);
      pdf.save(`AIRD_ID_Card_${memberNo}.pdf`);
      toast.success('Digital ID Card downloaded successfully');
    } catch (err) {
      console.error('ID Card download error:', err);
      toast.error('Failed to download ID card');
    } finally {
      setDownloading(false);
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <>
      <PageHero
        title="Member Portal"
        subtitle={`Welcome, ${user.name}. Manage your trust membership and credentials.`}
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Member Profile' }]} />

      <section className="section-py container-px">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Top user summary bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-saffron-100 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-700 font-bold text-xl sm:text-2xl shadow-inner border border-saffron-200">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold text-ink break-words">{user.name}</h2>
                  <Badge variant={memberStatus === 'active' ? 'default' : 'secondary'} className="capitalize shrink-0">
                    {memberStatus}
                  </Badge>
                  {isAdmin && (
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200 shrink-0">Admin</Badge>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-ink/60 mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="flex items-center gap-1 break-all"><Mail className="h-3.5 w-3.5 shrink-0" /> {user.email}</span>
                  {user.phone && <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5 shrink-0" /> {user.phone}</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    <ShieldCheck className="mr-1.5 h-4 w-4" /> Admin Panel
                  </Button>
                </Link>
              )}
              <Button variant="ghost" onClick={logout} className="text-ink/60 hover:text-red-600">
                <LogOut className="mr-1.5 h-4 w-4" /> Logout
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Col: Digital ID Card Preview */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-ink flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-saffron-600" /> Official Digital ID Card
                </h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={handleDownloadIdCard} disabled={downloading}>
                    <Download className="mr-1 h-3.5 w-3.5" /> {downloading ? 'Exporting...' : 'PDF'}
                  </Button>
                  <Button size="sm" variant="outline" onClick={handlePrint}>
                    <Printer className="mr-1 h-3.5 w-3.5" /> Print
                  </Button>
                </div>
              </div>

              {/* ID Card Visual */}
              <div
                ref={cardRef}
                className="w-full aspect-[85.6/53.98] rounded-2xl p-5 bg-gradient-to-br from-saffron-700 via-saffron-800 to-ink text-white shadow-xl flex flex-col justify-between relative overflow-hidden select-none border-2 border-saffron-400/40"
              >
                {/* Background watermark badge */}
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                  <Award className="w-56 h-56" />
                </div>

                {/* Top header */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white p-1 shadow flex items-center justify-center">
                      <img src="/aird-logo.png" alt="AIRD" className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs tracking-wider uppercase leading-none text-saffron-200">
                        Appropriate Institute of Rural Development
                      </h4>
                      <p className="text-[10px] text-white/70 mt-0.5">Gram Samaj &amp; Project KRANTI</p>
                    </div>
                  </div>
                  <Badge className="bg-saffron-400/20 text-saffron-200 border-saffron-300/30 text-[10px]">
                    ID CARD
                  </Badge>
                </div>

                {/* Middle member details */}
                <div className="flex items-center justify-between gap-4 my-auto relative z-10">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-saffron-300 font-semibold">Member Name</p>
                    <p className="text-base font-bold text-white tracking-wide">{user.name}</p>
                    <p className="text-xs text-white/80 capitalize">{memberType}</p>
                  </div>

                  {/* Self-contained QR Code block */}
                  <div className="flex flex-col items-center bg-white/95 p-2 rounded-xl text-ink shadow-sm">
                    <QrCode className="h-12 w-12 text-ink" />
                    <span className="text-[8px] font-mono font-bold mt-0.5">{memberNo}</span>
                  </div>
                </div>

                {/* Bottom footer */}
                <div className="flex items-center justify-between text-[10px] border-t border-white/20 pt-2 relative z-10 text-white/70 font-mono">
                  <span>ID: <strong className="text-white">{memberNo}</strong></span>
                  <span>STATUS: <strong className="text-emerald-300 uppercase">{memberStatus}</strong></span>
                  <span>AIRD TRUST</span>
                </div>
              </div>

              <p className="text-xs text-ink/50 text-center">
                This digital ID card is issued by Appropriate Institute of Rural Development (AIRD).
              </p>
            </div>

            {/* Right Col: Membership Overview & Quick Actions */}
            <div className="md:col-span-6 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold">Membership Information</CardTitle>
                  <CardDescription>Official registration details with AIRD</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-ink/60">Membership Number</span>
                    <span className="font-mono font-semibold text-ink">{memberNo}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-ink/60">Membership Type</span>
                    <span className="font-semibold text-ink capitalize">{memberType}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-ink/60">Status</span>
                    <Badge variant={memberStatus === 'active' ? 'default' : 'secondary'} className="capitalize">
                      {memberStatus}
                    </Badge>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-ink/60">Registered Email</span>
                    <span className="font-medium text-ink">{user.email}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions Card */}
              <Card className="bg-gradient-to-br from-saffron-50 to-white border-saffron-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-saffron-900">Engage with AIRD</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <Link to="/donate">
                    <Button className="w-full bg-saffron-600 hover:bg-saffron-700 text-white justify-start" size="sm">
                      <Heart className="mr-2 h-4 w-4" /> Donate Now
                    </Button>
                  </Link>
                  <Link to="/activities">
                    <Button variant="outline" className="w-full justify-start border-saffron-200" size="sm">
                      <Calendar className="mr-2 h-4 w-4" /> Activities
                    </Button>
                  </Link>
                  <Link to="/membership">
                    <Button variant="outline" className="w-full justify-start border-saffron-200" size="sm">
                      <Award className="mr-2 h-4 w-4" /> Upgrade Member
                    </Button>
                  </Link>
                  <Link to="/gallery">
                    <Button variant="outline" className="w-full justify-start border-saffron-200" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" /> Photo Gallery
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
