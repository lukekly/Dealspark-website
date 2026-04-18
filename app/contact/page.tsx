import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 0%, rgba(124,58,237,0.08) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="pt-8">
            <div className="mb-6">
              <span className="section-label">Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
              Book a{' '}
              <span className="gradient-text">discovery call.</span>
            </h1>
            <p className="text-white/55 leading-relaxed mb-10 text-lg">
              We work with a select group of clients. Tell us where you are
              and we will give you an honest view of whether DealSpark is the
              right move.
            </p>

            {/* What to expect */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h2 className="text-base font-semibold text-white mb-5">
                What to expect
              </h2>
              <ul className="space-y-4">
                {[
                  'An honest conversation about your current go-to-market',
                  'A clear view of whether outbound is the right move for you right now',
                  'A proposed approach if there is a fit',
                  'If there is not, we will tell you',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="flex-shrink-0 mt-0.5"
                      width="15"
                      height="15"
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
                    <span className="text-sm text-white/60 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-xs text-white/30">
              By submitting your details you agree to our{' '}
              <Link
                href="/privacy"
                className="text-accent/60 hover:text-accent transition-colors underline underline-offset-2"
              >
                Privacy and Cookie Policy
              </Link>
              .
            </p>
          </div>

          {/* Right: custom dark form */}
          <div className="pt-8">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
