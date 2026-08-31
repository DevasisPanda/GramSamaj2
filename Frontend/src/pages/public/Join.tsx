import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  UserCircle, IdCard, GraduationCap, Phone, MessageCircle, Mail, Sparkles, Heart,
  CheckCircle2, FileText, CreditCard, ArrowRight, ArrowLeft, Download, Loader2,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useMembershipTiers, useCreateMember } from '@/hooks/useApi';
import {
  JOIN_ROLES, MEMBERSHIP_BENEFITS, MEMBERSHIP_TIERS, MEMBERSHIP_MOTTO,
  MEMBERSHIP_INTRO, MEMBERSHIP_CLOSING, MEMBERSHIP_CATEGORY_BENEFITS,
  MEMBERSHIP_DECLARATIONS, MEMBERSHIP_MIN_DONATION_NOTE,
} from '@/data/membership';
import { formatINR, cn } from '@/lib/utils';
import { generateCertificatePDF, generateMembershipCardPNG } from '@/utils/documentEngine';
import type { MembershipCategory, MembershipRecord } from '@/lib/types';

// ---- Zod schema (client-side validation, prompt §5) ----
const joinSchema = z.object({
  salutation: z.string().optional(),
  name: z.string().min(3, 'Please enter your full name (min 3 characters)'),
  aadharNumber: z
    .string()
    .length(12, 'Aadhar must be 12 digits')
    .regex(/^\d{12}$/, 'Aadhar must contain only digits'),
  education: z.string().min(2, 'Please enter your educational qualification'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit WhatsApp number'),
  email: z.string().email('Enter a valid email address'),
  expertise: z.string().optional(),
  hobbies: z.string().optional(),
  role: z.enum(JOIN_ROLES),
  category: z.enum(['GENERAL', 'SPECIAL', 'EXECUTIVE']),
  isLife: z.boolean(),
  agree: z.literal(true, { message: 'You must agree to the declaration' }),
});

type JoinForm = z.infer<typeof joinSchema>;

const STEPS = ['Details', 'Membership', 'Review'] as const;

export default function Join() {
  const { data: tiers = [] } = useMembershipTiers();
  const createMember = useCreateMember();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<MembershipRecord | null>(null);

  const [form, setForm] = useState<JoinForm>({
    salutation: 'Shri',
    name: '',
    aadharNumber: '',
    education: '',
    mobile: '',
    whatsapp: '',
    email: '',
    expertise: '',
    hobbies: '',
    role: 'Volunteer',
    category: 'SPECIAL',
    isLife: false,
    agree: false as unknown as true,
  });

  function update<K extends keyof JoinForm>(key: K, value: JoinForm[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  }

  function validateStep(): boolean {
    const fieldsPerStep: (keyof JoinForm)[][] = [
      ['name', 'aadharNumber', 'education', 'mobile', 'whatsapp', 'email', 'role'],
      ['category', 'isLife'],
      ['agree'],
    ];
    const fields = fieldsPerStep[step] ?? [];
    const partial = Object.fromEntries(fields.map((f) => [f, form[f]]));
    const schema = joinSchema.pick(Object.fromEntries(fields.map((f) => [f, true])) as never);
    const parsed = schema.safeParse(partial);
    if (parsed.success) {
      setErrors({});
      return true;
    }
    const next: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      next[issue.path[0] as string] = issue.message;
    }
    setErrors(next);
    return false;
  }

  function next() {
    if (!validateStep()) {
      toast.error('Please fix the highlighted fields');
      return;
    }
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function submit() {
    if (!validateStep()) {
      toast.error('Please complete the declaration');
      return;
    }
    try {
      const formattedName = `${form.salutation ? form.salutation + ' ' : ''}${form.name.trim()}`.trim();
      const member = await createMember.mutateAsync({
        name: formattedName,
        aadharNumber: form.aadharNumber,
        mobile: form.mobile,
        email: form.email,
        category: form.isLife ? 'LIFE' as MembershipCategory : form.category as MembershipCategory,
        isLife: form.isLife,
      });
      setResult(member as unknown as MembershipRecord);
      toast.success('Welcome to the AIRD family!');
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  }

  const selectedTier = tiers.find((t) => t.id === form.category);

  // ---- Success / document screen ----
  if (result) {
    return (
      <>
        <PageHero title="Welcome to AIRD!" subtitle="Your membership has been recorded. Generate your documents below." />
        <section className="section-py">
          <div className="container-px max-w-3xl">
            <Card className="border-l-4 border-l-forest-600">
              <CardContent className="text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-forest-100">
                  <CheckCircle2 className="h-9 w-9 text-forest-600" />
                </div>
                <h2 className="text-xl font-bold text-ink">{result.name}</h2>
                <p className="text-sm text-ink/50 mt-1">Membership No: <span className="font-mono font-semibold text-saffron-700">{result.id}</span></p>
                <div className="mt-2 flex justify-center gap-2">
                  <Badge variant="secondary">{result.category} Member</Badge>
                  <Badge variant="success">{result.status}</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <button
                onClick={() => generateCertificatePDF(result)}
                className="card-surface p-6 text-center hover:shadow-md hover:border-saffron-300 transition-all group"
              >
                <FileText className="mx-auto h-10 w-10 text-saffron-600 group-hover:scale-110 transition-transform" />
                <h3 className="mt-3 font-semibold text-ink">Membership Certificate</h3>
                <p className="text-xs text-ink/50 mt-1">Print-ready PDF with QR validation</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-saffron-700">
                  <Download className="h-3 w-3" /> Download PDF
                </span>
              </button>

              <button
                onClick={() => generateMembershipCardPNG(result)}
                className="card-surface p-6 text-center hover:shadow-md hover:border-saffron-300 transition-all group"
              >
                <CreditCard className="mx-auto h-10 w-10 text-forest-600 group-hover:scale-110 transition-transform" />
                <h3 className="mt-3 font-semibold text-ink">Identity Card</h3>
                <p className="text-xs text-ink/50 mt-1">High-resolution PNG with barcode</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest-700">
                  <Download className="h-3 w-3" /> Download PNG
                </span>
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-ink/40">
              Verification URL: <span className="font-mono">https://airdup.com/verify/member/{result.id}</span>
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Join Us" subtitle="Become part of a movement for Gram Swaraj — as a Volunteer, Learner, Researcher, or Partner." gradient="forest">
        <p className="text-sm font-medium text-forest-800 italic">{MEMBERSHIP_MOTTO}</p>
      </PageHero>
      <Breadcrumb items={[{ label: 'Get Involved' }, { label: 'Membership' }]} />

      {/* ---- Documented membership information (source: Work/ documents) ---- */}
      <section className="section-py">
        <div className="container-px max-w-5xl">
          <div className="card-surface bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-forest-100 mb-8">
            {/* Intro */}
            <p className="mb-4 text-sm leading-relaxed text-ink/80">{MEMBERSHIP_INTRO}</p>

            {/* Categories & fees table */}
            <h2 className="mb-3 text-xl font-bold text-saffron-800 md:text-2xl break-words">
              Membership Categories &amp; Subscription
            </h2>
            <div className="mb-2 overflow-x-auto max-w-full">
              <table className="w-full min-w-[540px] border-collapse text-left text-sm">
                <thead className="bg-forest-800 text-white">
                  <tr className="text-xs font-bold uppercase tracking-wide">
                    <th className="border border-forest-700 p-2">Category</th>
                    <th className="border border-forest-700 p-2">Eligibility</th>
                    <th className="border border-forest-700 p-2">Annual (Rs.)</th>
                    <th className="border border-forest-700 p-2">Life (Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  {MEMBERSHIP_TIERS.map((tier, i) => (
                    <tr key={tier.id} className={i % 2 === 0 ? 'bg-white' : 'bg-saffron-50/60'}>
                      <td className="border border-gray-300 p-2 font-semibold text-ink">{tier.name}</td>
                      <td className="border border-gray-300 p-2 text-ink/70 leading-snug">{tier.eligibility}</td>
                      <td className="border border-gray-300 p-2 font-bold text-saffron-700">
                        {tier.annual != null ? formatINR(tier.annual) : '—'}
                      </td>
                      <td className="border border-gray-300 p-2 font-bold text-forest-700">
                        {tier.life != null ? formatINR(tier.life) : 'Not Applicable'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-2 text-xs leading-relaxed text-ink/70 break-words">
              {MEMBERSHIP_MIN_DONATION_NOTE}
            </p>
            <p className="mb-6 text-center text-sm font-semibold italic text-saffron-800 break-words">
              &ldquo;{MEMBERSHIP_MOTTO}&rdquo;
            </p>

            {/* Benefits by category */}
            <h2 className="mb-3 text-xl font-bold text-saffron-800 md:text-2xl break-words">
              Benefits by Membership Category
            </h2>
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              {MEMBERSHIP_CATEGORY_BENEFITS.map((cb) => (
                <Card key={cb.id} className="border-l-4 border-l-forest-600 max-w-full">
                  <CardContent>
                    <h3 className="font-bold text-ink break-words">{cb.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70 break-words">{cb.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Opportunities for all members */}
            <h2 className="mb-3 text-xl font-bold text-saffron-800 md:text-2xl break-words">
              Opportunities for All Members
            </h2>
            <p className="mb-4 text-sm text-ink/70 break-words">
              Regardless of membership category, every member has the opportunity to become an active
              partner in AIRD&rsquo;s mission:
            </p>
            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {MEMBERSHIP_BENEFITS.map((b) => (
                <div key={b.title} className="card-surface p-4 max-w-full">
                  <div className="flex items-start gap-2 min-w-0">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" />
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-ink break-words">{b.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink/60 break-words">{b.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Official membership form declarations */}
            <h2 className="mb-3 text-xl font-bold text-saffron-800 md:text-2xl">
              The Official Membership Form
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-ink/70">
              The official AIRD membership form records the applicant&rsquo;s details (name, Aadhar
              number, educational qualification, mobile / WhatsApp number, e-mail, expertise, and
              joining role) together with the following declarations:
            </p>
            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {[
                MEMBERSHIP_DECLARATIONS.agree,
                MEMBERSHIP_DECLARATIONS.wish,
                MEMBERSHIP_DECLARATIONS.may,
                MEMBERSHIP_DECLARATIONS.lookingForward,
              ].map((group) => (
                <div key={group.heading} className="rounded-xl bg-saffron-50/60 p-4">
                  <h3 className="text-sm font-bold text-saffron-800">{group.heading}:</h3>
                  <ul className="mt-2 space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-xs leading-relaxed text-ink/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mb-2 rounded-xl bg-forest-50 p-4 text-sm leading-relaxed text-ink/80">
              {MEMBERSHIP_CLOSING}
            </p>
          </div>
        </div>
      </section>

      {/* ---- Membership application wizard ---- */}
      <section className="section-py pt-0">
        <div className="container-px max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gradient-saffron">
            Apply for Membership
          </h2>
          {/* Stepper */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className={cn(
                  'grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-colors',
                  i === step ? 'bg-saffron-500 text-white' : i < step ? 'bg-forest-600 text-white' : 'bg-saffron-100 text-saffron-600',
                )}>
                  {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                </div>
                <span className={cn('text-xs font-medium hidden sm:block', i === step ? 'text-saffron-700' : 'text-ink/40')}>
                  {label}
                </span>
                {i < STEPS.length - 1 && <div className="h-0.5 w-8 bg-saffron-200" />}
              </div>
            ))}
          </div>

          <Card>
            <CardContent>
              {/* STEP 1 — Details */}
              {step === 0 && (
                <div className="space-y-4">
                  <FormField icon={UserCircle} label="Full Name" error={errors.name}>
                    <div className="flex gap-2">
                      <select
                        value={form.salutation}
                        onChange={(e) => update('salutation', e.target.value)}
                        className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shrink-0 font-medium text-ink cursor-pointer hover:border-saffron-400 transition-colors"
                        aria-label="Salutation"
                      >
                        <option value="Shri">Shri</option>
                        <option value="Smt.">Smt.</option>
                        <option value="Sushri">Sushri</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof.">Prof.</option>
                      </select>
                      <Input
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="flex-1"
                      />
                    </div>
                  </FormField>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField icon={IdCard} label="Aadhar Number" error={errors.aadharNumber}>
                      <Input value={form.aadharNumber} onChange={(e) => update('aadharNumber', e.target.value.replace(/\D/g, '').slice(0, 12))} placeholder="12-digit number" inputMode="numeric" />
                    </FormField>
                    <FormField icon={GraduationCap} label="Educational Qualification" error={errors.education}>
                      <Input value={form.education} onChange={(e) => update('education', e.target.value)} placeholder="e.g. Graduate, M.A." />
                    </FormField>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField icon={Phone} label="Mobile Number" error={errors.mobile}>
                      <Input value={form.mobile} onChange={(e) => update('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10-digit" inputMode="numeric" />
                    </FormField>
                    <FormField icon={MessageCircle} label="WhatsApp Number" error={errors.whatsapp}>
                      <Input value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10-digit" inputMode="numeric" />
                    </FormField>
                  </div>
                  <FormField icon={Mail} label="Email Address" error={errors.email}>
                    <Input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
                  </FormField>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField icon={Sparkles} label="Expertise (optional)">
                      <Input value={form.expertise} onChange={(e) => update('expertise', e.target.value)} placeholder="e.g. Agriculture, Social Work" />
                    </FormField>
                    <FormField icon={Heart} label="Hobbies (optional)">
                      <Input value={form.hobbies} onChange={(e) => update('hobbies', e.target.value)} placeholder="e.g. Reading, Farming" />
                    </FormField>
                  </div>
                  <div>
                    <Label className="mb-2 block">I wish to join AIRD as</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {JOIN_ROLES.map((role) => (
                        <button
                          key={role}
                          onClick={() => update('role', role)}
                          className={cn(
                            'rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-all',
                            form.role === role ? 'border-saffron-500 bg-saffron-50 text-saffron-700' : 'border-saffron-200 text-ink/60 hover:border-saffron-400',
                          )}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 — Membership selection */}
              {step === 1 && (
                <div>
                  <h3 className="font-semibold text-ink mb-4">Choose your membership category</h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {tiers.map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => update('category', tier.id as typeof form.category)}
                        className={cn(
                          'relative rounded-2xl border-2 p-5 text-left transition-all',
                          form.category === tier.id ? 'border-saffron-500 bg-saffron-50 shadow-md' : 'border-saffron-200 hover:border-saffron-400',
                        )}
                      >
                        {tier.highlight && (
                          <span className="absolute -top-2.5 left-4 rounded-full bg-saffron-500 px-2 py-0.5 text-[10px] font-bold text-white">POPULAR</span>
                        )}
                        <h4 className="font-bold text-ink">{tier.name}</h4>
                        <p className="mt-1 text-[11px] text-ink/50 leading-snug">{tier.eligibility}</p>
                        <div className="mt-3 space-y-0.5">
                          <div className="text-sm font-bold text-saffron-700">
                            {tier.annual != null ? formatINR(tier.annual) : '—'} <span className="text-[10px] font-normal text-ink/40">/ year</span>
                          </div>
                          <div className="text-xs text-forest-700">
                            Life: {tier.life != null ? formatINR(tier.life) : 'N/A'}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Life toggle */}
                  {selectedTier?.life != null && (
                    <label className="mt-4 flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.isLife}
                        onChange={(e) => update('isLife', e.target.checked)}
                        className="h-4 w-4 rounded accent-saffron-500"
                      />
                      <span className="text-sm text-ink/70">
                        I want <strong>Life Membership</strong> ({formatINR(selectedTier.life!)})
                      </span>
                    </label>
                  )}

                  {/* Benefits preview */}
                  <div className="mt-6 rounded-xl bg-saffron-50/50 p-4">
                    <h4 className="text-sm font-semibold text-saffron-800 mb-2">Membership Benefits</h4>
                    <div className="grid gap-1.5 sm:grid-cols-2">
                      {MEMBERSHIP_BENEFITS.slice(0, 6).map((b) => (
                        <div key={b.title} className="flex items-start gap-1.5 text-xs text-ink/60">
                          <CheckCircle2 className="h-3 w-3 text-forest-600 mt-0.5 shrink-0" /> {b.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 — Review */}
              {step === 2 && (
                <div>
                  <h3 className="font-semibold text-ink mb-4">Review &amp; Confirm</h3>
                  <dl className="grid gap-3 sm:grid-cols-2 text-sm">
                    {[
                      ['Name', `${form.salutation ? form.salutation + ' ' : ''}${form.name}`],
                      ['Aadhar', `XXXX-XXXX-${form.aadharNumber.slice(-4)}`],
                      ['Education', form.education],
                      ['Mobile', form.mobile],
                      ['WhatsApp', form.whatsapp],
                      ['Email', form.email],
                      ['Role', form.role],
                      ['Category', `${form.category} ${form.isLife ? '(Life)' : '(Annual)'}`],
                      ['Fee', selectedTier ? formatINR(form.isLife ? selectedTier.life! : selectedTier.annual!) : '—'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-saffron-50 pb-1.5">
                        <dt className="text-ink/40">{k}</dt>
                        <dd className="font-medium text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <label className="mt-5 flex items-start gap-2 cursor-pointer rounded-lg bg-forest-50 p-3">
                    <input
                      type="checkbox"
                      checked={form.agree as boolean}
                      onChange={(e) => update('agree', e.target.checked as never)}
                      className="h-4 w-4 mt-0.5 rounded accent-forest-600"
                    />
                    <span className="text-xs text-ink/70 leading-relaxed">
                      I have read and understood the vision, philosophy, and objectives of AIRD. I agree to work with honesty, respect all communities, and contribute to strengthening Gram Swaraj through community participation, transparency, and sustainable rural development.
                    </span>
                  </label>
                  {errors.agree && <p className="mt-1 text-xs text-red-600">{errors.agree}</p>}
                </div>
              )}

              {/* Navigation */}
              <div className="mt-6 flex justify-between">
                <Button variant="ghost" onClick={back} disabled={step === 0} className="gap-1">
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                {step < STEPS.length - 1 ? (
                  <Button onClick={next} className="gap-1">
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={submit} disabled={createMember.isPending} variant="secondary" className="gap-2">
                    {createMember.isPending ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
                    ) : (
                      <>Complete Membership <CheckCircle2 className="h-4 w-4" /></>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function FormField({
  icon: Icon, label, error, children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 text-saffron-500" /> {label}
      </Label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
