import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ROICalculator from '@/components/ROICalculator';
import PortalPreview from '@/components/PortalPreview';

const CALENDLY = 'https://calendly.com/dealspark/strategy-call';

export const metadata: Metadata = {
  title: { absolute: 'Pricing | B2B Cold Calling & Appointment Setting | DealSpark' },
  description: 'Transparent pricing for B2B cold calling and appointment setting in Ireland. Qualified appointments guaranteed. No hidden fees, no ambiguity.',
  alternates: { canonical: 'https://www.dealspark.io/pricing' },
  openGraph: {
    title: 'Pricing | DealSpark',
    description: 'Transparent pricing for B2B cold calling and appointment setting in Ireland.',
    url: 'https://www.dealspark.io/pricing',
  },
};

const tiers = [
  {
    name: 'Starter',
    monthly: '€3,000',
    appointments: 4,
    quarterly: 12,
    description: 'Ideal for founder-led teams supplementing inbound and referrals with a consistent outbound channel.',
    highlight: false,
  },
  {
    name: 'Growth',
    monthly: '€3,600',
    appointments: 5,
    quarterly: 15,
    description: 'Built for companies with a full-time sales person handling inbound, referrals and structured outbound.',
    highlight: true,
  },
  {
    name: 'Partner',
    monthly: '€4,250',
    appointments: 6,
    quarterly: 18,
    description: 'For teams running active pipelines who need consistent, high-quality new opportunity flow every quarter.',
    highlight: false,
  },
];

const features = [
  {
    label: 'Qualified Appointments',
    description: 'Confirmed meetings with decision-makers who match your ICP. Delivered to your calendar each month.',
  },
  {
    label: 'Prospect Research',
    description: 'Target lists built from scratch. ICP-matched companies and contacts, verified before dialling.',
  },
  {
    label: 'Cold Calling',
    description: 'Direct outreach handled by a B2B sales professional. Not a call centre, not a junior agent.',
  },
  {
    label: 'Campaign Setup',
    description: 'Strategy, messaging and call frameworks developed before the first dial goes out.',
  },
  {
    label: 'LinkedIn & Email Follow-Up',
    description: 'Multi-touch outreach to reinforce calls and keep your pipeline moving between conversations.',
  },
  {
    label: 'Monthly Report',
    description: 'Call outcomes, pipeline activity and market intelligence delivered at the end of each month.',
  },
];

const CheckIcon = () => (
  <svg className="check-icon w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M6.5 11.5L3 8l1.5-1.5 2 2 5-5L13 5l-6.5 6.5z" />
  </svg>
);

export default function PricingPage() {
  return (
    <main className="pt-24 pb-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-glow pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <AnimatedSection delay={0}>
            <span className="section-label mb-6">Transparent Pricing</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-6 mb-6 leading-[1.1]">
              Know exactly what you are{' '}
              <span className="gradient-text">getting into.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              No retainer arrangements that obscure what you are paying for. Here is exactly what DealSpark costs, what is included, and what to expect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Capacity framing ── */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 pt-4 pb-8">
        <AnimatedSection delay={100}>
          <p className="text-center text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">
            How many active deals can you manage each quarter?
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`text-center rounded-2xl p-5 border ${
                  tier.highlight
                    ? 'border-accent/40 bg-accent/10'
                    : 'border-white/[0.06] bg-surface'
                }`}
              >
                <p className={`text-3xl sm:text-4xl font-bold mb-1 ${tier.highlight ? 'gradient-text' : 'text-white'}`}>
                  {tier.quarterly}
                </p>
                <p className="text-white/40 text-xs sm:text-sm">per quarter</p>
                <p className="text-white/50 text-xs sm:text-sm mt-1">{tier.appointments}/month</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Pricing cards ── */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 80}>
              <div
                className={`relative flex flex-col h-full rounded-2xl p-8 border ${
                  tier.highlight
                    ? 'border-accent/50 bg-gradient-to-b from-accent/10 to-surface'
                    : 'card-static'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="section-label text-xs">Most Popular</span>
                  </div>
                )}
                <div className="mb-5">
                  <h2 className="text-xl font-bold text-white mb-2">{tier.name}</h2>
                  <p className="text-white/50 text-sm leading-relaxed">{tier.description}</p>
                </div>
                <div className="mb-7">
                  <p className={`text-4xl font-bold ${tier.highlight ? 'gradient-text' : 'text-white'}`}>
                    {tier.monthly}
                  </p>
                  <p className="text-white/40 text-sm mt-1">per month</p>
                </div>
                <ul className="mb-8 space-y-3 flex-1">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-white/70 text-sm">
                      <strong className="text-white font-semibold">{tier.appointments} qualified appointments</strong> per month
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-white/70 text-sm">Prospect research &amp; target lists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-white/70 text-sm">Cold calling &amp; campaign setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-white/70 text-sm">LinkedIn &amp; email follow-up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-white/70 text-sm">Monthly performance report</span>
                  </li>
                </ul>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tier.highlight ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                >
                  Book a Call
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 py-8">
        <AnimatedSection delay={0}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Work out the numbers</h2>
            <p className="text-white/50">Plug in your deal size and close rate to see what the pipeline is worth.</p>
          </div>
          <ROICalculator />
        </AnimatedSection>
      </section>

      {/* ── Portal preview ── */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <AnimatedSection delay={0}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Your live client portal</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Every conversation logged. AI summary on every call. Full market intelligence — who said what, what competitors came up, what the next step is.
            </p>
          </div>
          <PortalPreview />
        </AnimatedSection>
      </section>

      {/* ── What's included ── */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <AnimatedSection delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              What&apos;s included in every plan
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              All packages include the same core service. Volume is the only variable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div key={feature.label} className="card-static p-6">
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M6.5 11.5L3 8l1.5-1.5 2 2 5-5L13 5l-6.5 6.5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-8 text-center">
        <AnimatedSection delay={0}>
          <div className="card-static p-10 sm:p-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to see if it&apos;s a fit?
            </h2>
            <p className="text-white/50 mb-8 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Book a call and we&apos;ll walk through your market, your ICP, and what a realistic pipeline looks like for your business.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              Book a Strategy Call
            </a>
          </div>
        </AnimatedSection>
      </section>

    </main>
  );
}
