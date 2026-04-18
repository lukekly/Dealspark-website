import AnimatedSection from './AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Precision Targeting',
    description:
      'Every engagement starts with a clearly defined ICP. The right companies, the right titles, the right commercial triggers. Clay-powered data means every prospect is selected with intent, not volume.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Messaging That Resonates',
    description:
      'People don\'t buy products; they buy solutions to problems. Every call, email, and LinkedIn touchpoint is grounded in the commercial challenges your prospects actually face, not a templated script. The conversation has to be earned before it can be had.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Predictable Pipeline',
    description:
      'The goal is not to fill a calendar. It is to generate consistent, high-quality conversations with buyers you can actually close, month after month. Revenue visibility you can plan around.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32"
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <span className="section-label">How It Works</span>
          </div>
          <h2
            id="hiw-heading"
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          >
            Three principles.{' '}
            <span className="gradient-text">One approach.</span>
          </h2>
          <p className="mt-5 text-white/55 max-w-xl mx-auto text-lg">
            DealSpark works with a select group of clients as a GTM partner.
            Precise targeting, commercially grounded outreach, and consistent
            execution, held to the standard you&apos;d expect of your best
            internal hire.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 130}>
              <article className="card p-8 relative">
                {/* Number badge */}
                <span className="absolute top-6 right-6 text-xs font-bold tracking-widest text-white/20">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {step.description}
                </p>
                {step.number === '01' && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-white/30 font-medium"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                    Clay-powered prospecting
                  </div>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
