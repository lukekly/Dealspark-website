import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ROICalculator from '@/components/ROICalculator';
import PricingPlans from '@/components/PricingPlans';

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
    label: 'Email Follow-Up',
    description: 'Follow-up emails to reinforce calls and keep your pipeline moving between conversations.',
  },
  {
    label: 'Monthly Report',
    description: 'Call outcomes, pipeline activity and market intelligence delivered at the end of each month.',
  },
];

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
              Simple pricing.{' '}
              <span className="gradient-text">Qualified meetings every month.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              One monthly fee covers everything: target lists, cold calling, email follow-up, and a full market report. Meetings delivered to your calendar. Nothing else to manage.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <PricingPlans />

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

      {/* ── Hire vs outsource teaser ── */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 py-4">
        <AnimatedSection delay={0}>
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.07] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white mb-1">Thinking of hiring an SDR instead?</h2>
              <p className="text-white/55 text-sm leading-relaxed">
                A year-one SDR hire costs around €100k before they&apos;re fully productive.
              </p>
            </div>
            <Link
              href="/cost-of-hiring-an-sdr"
              className="text-[#a78bfa] hover:text-white font-semibold text-sm whitespace-nowrap transition-colors"
            >
              See the full breakdown →
            </Link>
          </div>
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
