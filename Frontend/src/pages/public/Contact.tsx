import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { AIRD, SOCIAL_LINKS } from '@/lib/constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach AIRD \u2014 we welcome individuals and institutions to join hands for Gram Swaraj."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Get Involved' }, { label: 'Contact Us' }]} />

      <section className="container-px section-py">
        <div className="mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-ink">Contact Information</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-saffron-100 p-2 text-saffron-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">Registered Office</div>
                  <div className="mt-0.5 text-sm text-ink/65">{AIRD.registeredOffice}</div>
                  <div className="mt-3 text-sm font-semibold text-ink">Field Office</div>
                  <div className="mt-0.5 text-sm text-ink/65">{AIRD.fieldOffice}</div>
                  <div className="mt-0.5 text-xs text-ink/45">PIN: 226020</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-saffron-100 p-2 text-saffron-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">Phone</div>
                  <a href={SOCIAL_LINKS.phone} className="mt-0.5 block text-sm text-saffron-700 hover:underline">
                    +91 {AIRD.contactMobile}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-saffron-100 p-2 text-saffron-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">Email</div>
                  <a href={SOCIAL_LINKS.email} className="mt-0.5 block text-sm text-saffron-700 hover:underline break-all">
                    {AIRD.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-forest-100 p-2 text-forest-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">Contact Person</div>
                  <div className="mt-0.5 text-sm text-ink/65">
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
          <div className="rounded-2xl border border-saffron-100 bg-white p-6 shadow-sm md:p-8">
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
                    className="w-full rounded-lg border border-saffron-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-ink/60">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-lg border border-saffron-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-ink/60">Phone</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-saffron-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-ink/60">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-lg border border-saffron-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-100"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-forest-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800"
                >
                  <Send className="h-4 w-4" /> Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
