import AnimatedSection from './AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Define Your Ideal Customer',
    description:
      'We start with a focused conversation about exactly who you want to reach. The right industry, company size, and decision-maker title. From there we build the list and source the contact data. Every prospect is selected with intent.',
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
    title: 'We Make the Calls',
    description:
      'We contact your prospects directly to uncover relevance fast. We\'re not reading from a script, we\'re having real conversations, qualifying interest, and handling objections. Every call is logged and you get full market intel on what we\'re hearing.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'You Get the Outcome',
    description:
      'A completed conversation, an activated lead, or a meeting booked into your diary. We track every interaction. You know exactly what\'s happening in your market and who\'s ready to talk.',
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
            Real Conversations With{' '}
            <span className="gradient-text">Your Ideal Customers.</span>
          </h2>
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
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
