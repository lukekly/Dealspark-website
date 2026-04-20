import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function FinalCTA() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Orbs */}
      <div
        className="orb w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <span className="section-label">Get Started</span>
          </div>

          {/* Headline */}
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            Let&apos;s see if we&apos;re{' '}
            <span className="gradient-text">a good fit.</span>
          </h2>

          <p className="text-lg text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
            DealSpark works with a select number of clients at any one time.
            Every engagement gets full attention, and we only take on
            work where we know we can deliver. Book a call to find out if
            it is the right fit.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/dealspark/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-4 px-8"
            >
              Book a Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <Link
              href="/case-studies"
              className="btn-outline text-base py-4 px-8"
            >
              Read Case Studies
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              'No long-term lock-in',
              'Execution-focused',
              'Results-focused approach',
            ].map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 text-sm text-white/40"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {signal}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
