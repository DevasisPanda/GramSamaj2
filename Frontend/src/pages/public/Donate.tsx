import { useState } from 'react';
import { toast } from 'sonner';
import {
  Building2, Copy, Wallet, CreditCard, Mail, Phone, User, Loader2, Heart, ShieldCheck,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useCreateDonor } from '@/hooks/useApi';
import { AIRD, SOCIAL_LINKS } from '@/lib/constants';
import type { DonationPurpose } from '@/lib/types';

const BANK_ROWS = [
  { label: 'Bank Name', value: AIRD.bank.name },
  { label: 'Account Name', value: AIRD.bank.accountName },
  { label: 'Account Number', value: AIRD.bank.accountNumberMasked },
  { label: 'IFSC Code', value: AIRD.bank.ifsc },
];

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

export default function Donate() {
  const { copied, copy } = useCopyToClipboard();
  const createDonor = useCreateDonor();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: 1000,
    purpose: 'Donation' as DonationPurpose,
  });

  function handleRazorpay() {
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill in your name, email, and phone number');
      return;
    }
    if (!form.amount || form.amount <= 0) {
      toast.error('Please enter a valid support amount');
      return;
    }
    const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!key) {
      // Direct registration when Razorpay key is not configured
      createDonor.mutate({
        date: new Date().toISOString(),
        name: form.name,
        amount: form.amount,
        paymentMode: 'RAZORPAY',
        purpose: form.purpose,
      });
      toast.success(`Thank you, ${form.name}! Your support contribution of ₹${form.amount} has been registered.`);
      return;
    }

    if (typeof (window as any).Razorpay === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => handleRazorpay();
      script.onerror = () => toast.error('Unable to load payment gateway. Please use Direct Bank Transfer.');
      document.body.appendChild(script);
      return;
    }

    // Real Razorpay integration
    const rzp = new (window as any).Razorpay({
      key,
      amount: form.amount * 100,
      currency: 'INR',
      name: AIRD.name,
      description: form.purpose,
      prefill: { name: form.name, email: form.email, contact: form.phone },
      handler: (response: { razorpay_payment_id: string }) => {
        createDonor.mutate({
          date: new Date().toISOString(),
          name: form.name,
          amount: form.amount,
          paymentMode: 'RAZORPAY',
          purpose: form.purpose,
        });
        toast.success(`Payment successful! Receipt will be issued. Payment ID: ${response.razorpay_payment_id}`);
      },
    });
    rzp.open();
  }

  return (
    <>
      <PageHero
        title="Support AIRD"
        subtitle="Your contribution is a blessing that strengthens the journey towards Gram Swaraj. Every rupee is accounted for with full transparency."
      >
        <p className="text-sm font-medium text-saffron-700 italic bg-white/60 inline-block rounded-lg px-3 py-1.5">
          &ldquo;Service to Humanity is the Highest Worship.&rdquo;
        </p>
      </PageHero>
      <Breadcrumb items={[{ label: 'Join Hands & Take Action', to: '/membership' }, { label: 'Support' }]} />

      <section className="section-py">
        <div className="container-px grid gap-8 lg:grid-cols-2">
          {/* LEFT — Direct Bank Transfer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-forest-600" /> Direct Bank Transfer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-ink/60 mb-3">
                Transfer directly to AIRD&rsquo;s State Bank of India account. Tap any field to copy.
              </p>
              {BANK_ROWS.map((row) => {
                const isMasked = row.label === 'Account Number';
                return (
                  <button
                    key={row.label}
                    onClick={() => !isMasked && copy(row.value, row.label)}
                    className="flex w-full items-center justify-between gap-3 rounded-xl border border-saffron-100 bg-saffron-50/40 px-4 py-3 text-left hover:border-saffron-300 hover:bg-saffron-50 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium text-ink/40">{row.label}</div>
                      <div className="font-mono text-sm font-semibold text-ink truncate">{row.value}</div>
                    </div>
                    {!isMasked && (
                      <Copy className={`h-4 w-4 shrink-0 transition-colors ${copied === row.value ? 'text-forest-600' : 'text-saffron-400'}`} />
                    )}
                  </button>
                );
              })}
              <div className="mt-3 rounded-lg bg-saffron-50 p-3">
                <p className="text-xs text-ink/60">
                  For verified full account details,{' '}
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="font-semibold text-forest-700 underline">message us on WhatsApp</a>
                  {' '}or{' '}
                  <a href={SOCIAL_LINKS.email} className="font-semibold text-forest-700 underline">email AIRD</a>.
                </p>
              </div>
              <div className="mt-4 rounded-xl bg-forest-50 p-4 flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-forest-600 mt-0.5 shrink-0" />
                <p className="text-xs text-ink/60">
                  AIRD is registered under PCTA 1882 (Reg. {AIRD.registrationNo}) and listed on NGO Darpan ({AIRD.ngoDarpanId}). All donations are received with formal receipts.
                </p>
              </div>
              <p className="text-xs text-ink/40 mt-2">
                After transfer, share details on{' '}
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-forest-700 underline">WhatsApp</a>
                {' '}or{' '}
                <a href={SOCIAL_LINKS.email} className="text-forest-700 underline">email</a> to receive your receipt.
              </p>
            </CardContent>
          </Card>

          {/* RIGHT — Online Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-saffron-600" /> Online Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={User} label="Name">
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </Field>
                <Field icon={Mail} label="Email">
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={Phone} label="Phone">
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })} placeholder="10-digit" inputMode="numeric" />
                </Field>
                <Field icon={CreditCard} label="Purpose">
                  <Select value={form.purpose} onValueChange={(v) => setForm({ ...form, purpose: v as DonationPurpose })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Donation">Donation</SelectItem>
                      <SelectItem value="Membership">Membership Fee</SelectItem>
                      <SelectItem value="KRANTI">Project KRANTI</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div>
                <Label className="mb-1.5 block">Amount (INR)</Label>
                <Input
                  type="number"
                  min={1}
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
                  className="mb-2"
                />
                <div className="flex flex-wrap gap-2">
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setForm({ ...form, amount: amt })}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                        form.amount === amt ? 'bg-saffron-500 text-white' : 'bg-saffron-100 text-saffron-700 hover:bg-saffron-200'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleRazorpay}
                disabled={createDonor.isPending}
                size="lg"
                variant="secondary"
                className="w-full gap-2"
              >
                {createDonor.isPending ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Processing...</>
                ) : (
                  <>Support ₹{form.amount.toLocaleString('en-IN')} <Heart className="h-4 w-4" /></>
                )}
              </Button>
              <p className="text-center text-[11px] text-ink/40">
                {'Secure payment via Razorpay. ' + (import.meta.env.VITE_RAZORPAY_KEY_ID ? 'Live mode.' : 'Demo mode — add VITE_RAZORPAY_KEY_ID to enable live payments.')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function Field({
  icon: Icon, label, children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 text-saffron-500" /> {label}
      </Label>
      {children}
    </div>
  );
}
