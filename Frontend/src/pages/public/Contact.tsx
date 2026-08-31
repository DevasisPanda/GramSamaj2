import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Loader2 } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { AIRD, SOCIAL_LINKS } from '@/lib/constants';
import { trpcClient } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await trpcClient.enquiry.submit.mutate({
        name: formData.name,
        email: formData.email,
        phone: formData.phone.length === 10 ? formData.phone : undefined,
        subject: 'General Website Inquiry',
        message: formData.message,
      });
      toast.success('Your message has been sent successfully!');
      setSubmitted(true);
    } catch (err: any) {
      console.error('Backend enquiry submission failed:', err);
      toast.error(err?.message || 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach AIRD — we welcome individuals and institutions to join hands for Gram Swaraj."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Get Involved' }, { label: 'Contact Us' }]} />

      <section className="container-px section-py">
        <div className="mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="card-surface bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-forest-100">
            <h2 className="mb-6 text-xl font-bold text-ink">Contact Information</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-saffron-100 p-2 text-saffron-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-ink">Registered Office</div>
                  <div className="mt-0.5 text-sm text-ink/65 break-words">{AIRD.registeredOffice}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-saffron-100 p-2 text-saffron-600 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-ink">Phone</div>
                  <a href={SOCIAL_LINKS.phone} className="mt-0.5 block text-sm text-saffron-700 hover:underline">
                    +91 {AIRD.contactMobile}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-saffron-100 p-2 text-saffron-600 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-ink">Email</div>
                  <a href={SOCIAL_LINKS.email} className="mt-0.5 block text-sm text-saffron-700 hover:underline break-all">
                    {AIRD.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-forest-100 p-2 text-forest-700 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-ink">Contact Person</div>
                  <div className="mt-0.5 text-sm text-ink/65 break-words">
                    {AIRD.contactPerson} (Managing Trustee)
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-xl border border-forest-100 bg-forest-50/50 p-5">
              <h3 className="text-sm font-bold text-forest-800">Requesting support</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                AIRD requests individuals and institutions to please join hands and take action
                for establishing the first live model on the process of community empowerment.
              </p>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="card-surface bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-forest-100">
            <h2 className="mb-1 text-xl font-bold text-ink">Inquiry Form</h2>
            <p className="mb-6 text-sm text-ink/55">
              Send us a message and we will get back to you.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-forest-200 bg-forest-50 p-6 text-center">
                <div className="text-3xl font-bold text-forest-700">Thank you!</div>
                <p className="mt-2 text-sm text-ink/60">
                  Your inquiry has been received. We will respond at the earliest.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-ink/60">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full rounded-lg border border-saffron-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-ink/60">Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full rounded-lg border border-saffron-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-ink/60">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="10-digit mobile"
                      className="w-full rounded-lg border border-saffron-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-ink/60">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full rounded-lg border border-saffron-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-lg bg-forest-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {loading ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>

            )}
          </div>
        </div>
      </section>
    </>
  );
}
