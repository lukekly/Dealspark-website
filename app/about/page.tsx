import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: { absolute: 'About DealSpark | B2B Outbound Partner' },
  description:
    'DealSpark is a B2B business development partner that runs the outbound function for a select number of companies. Cold calling, email, and LinkedIn underpinned by GTM Engineering.',
  alternates: { canonical: 'https://dealspark.io/about' },
};

const CALENDLY = 'https://calendly.com/dealspark/strategy-call';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <header className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="grid-texture absolute inset-0 opacity-30" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <span className="section-label">About</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            A B2B outbound partner.{' '}
            <span className="gradient-text">Not an agency.</span>
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-24">
        <div className="space-y-5">

          <AnimatedSection delay={0}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">What DealSpark Is</h2>
              <p className="text-white/60 leading-relaxed">
                DealSpark is a B2B business development partner that runs the outbound
                function for a select number of companies at any one time. Cold calling
                leads every engagement, supported by email and LinkedIn run to the right
                contacts through the right channels. GTM Engineering principles underpin
                the targeting.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={70}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">Who It Works With</h2>
              <p className="text-white/60 leading-relaxed">
                Works best with established B2B companies that have a clear offer, a
                defined market, and a team ready to close when qualified conversations
                are created. Not built for companies looking for a quick fix.
              </p>
            </div>
          </AnimatedSection>

        </div>

        {/* CTA */}
        <AnimatedSection className="mt-5">
          <div className="pt-8 text-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-3.5 px-8"
            >
              Book a Call
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
