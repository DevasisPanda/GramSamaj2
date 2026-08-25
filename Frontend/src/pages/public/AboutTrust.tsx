import {
  ShieldCheck, FileText, Hash, Globe, CreditCard, Building,
  MapPin, Mail, Phone, ScrollText,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { AIRD, SERVICE_PRINCIPLE, TRUST_DEED_AVAILABLE } from '@/lib/constants';

const CREDENTIALS = [
  { icon: FileText, label: 'Registered Under', value: AIRD.registeredUnder },
  { icon: Hash, label: 'Registration No.', value: `${AIRD.registrationNo} (${AIRD.registrationDate})` },
  { icon: Globe, label: 'NGO Darpan ID', value: AIRD.ngoDarpanId },
  { icon: CreditCard, label: 'PAN Card', value: AIRD.pan },
];

export default function AboutTrust() {
  const { copy } = useCopyToClipboard();
  return (
    <>
      <PageHero title="Trust — In Brief" subtitle={SERVICE_PRINCIPLE} gradient="saffron">
        <p className="text-sm font-medium text-saffron-700 italic">
          &ldquo;{AIRD.tagline}&rdquo;
        </p>
      </PageHero>
      <Breadcrumb items={[{ label: 'About Us', to: '/about' }, { label: 'Trust / In Brief' }]} />

      <section className="section-py">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            {/* Credentials card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-saffron-600" /> Trust Credentials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-4 sm:grid-cols-2">
                  {CREDENTIALS.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className="rounded-xl bg-saffron-50/50 p-4">
                        <dt className="flex items-center gap-1.5 text-xs font-semibold text-ink/50">
                          <Icon className="h-3.5 w-3.5 text-saffron-500" /> {c.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">{c.value}</dd>
                      </div>
                    );
                  })}
                </dl>

                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500" />
                    <span className="text-ink/70">
                      <strong className="font-semibold text-ink">Registered office:</strong>{' '}
                      {AIRD.registeredOffice}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500" />
                    <span className="text-ink/70">
                      <strong className="font-semibold text-ink">Field office:</strong>{' '}
                      {AIRD.fieldOffice}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ScrollText className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500" />
                    <span className="text-ink/70">{AIRD.taxStatus}</span>
                  </div>
                  {TRUST_DEED_AVAILABLE && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-saffron-500" />
                      <a
                        href="/trust-deed.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-saffron-700 hover:underline"
                      >
                        Download Trust Deed (PDF)
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-saffron-500" />
                    <a href={`mailto:${AIRD.email}`} className="text-saffron-700 hover:underline">{AIRD.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-saffron-500" />
                    <a href={`tel:+91${AIRD.contactMobile}`} className="text-saffron-700 hover:underline">+91 {AIRD.contactMobile}</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bank details card */}
            <Card className="border-0 bg-gradient-to-br from-forest-700 to-forest-900 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Building className="h-5 w-5" /> Bank Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: 'Bank', value: AIRD.bank.name },
                  { label: 'Account Name', value: AIRD.bank.accountName },
                  { label: 'Account Number', value: AIRD.bank.accountNumberMasked },
                  { label: 'IFSC Code', value: AIRD.bank.ifsc, copyable: true },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                    <span className="text-xs text-white/60">{row.label}</span>
                    <button
                      onClick={() => row.copyable && copy(row.value, row.label)}
                      className="text-sm font-mono font-semibold hover:text-saffron-300 transition-colors"
                    >
                      {row.value} {row.copyable && <span className="text-[10px] text-white/40">[copy]</span>}
                    </button>
                  </div>
                ))}
                <p className="pt-1 text-[11px] text-white/50">
                  Trustee: {AIRD.trustee.name}.{' '}
                  Contact AIRD for verified full account &amp; trustee KYC details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
