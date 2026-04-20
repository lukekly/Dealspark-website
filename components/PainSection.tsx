import AnimatedSection from './AnimatedSection';

const standards = [
  {
    id: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
    title: 'Precision over volume',
    description:
      'Every prospect is selected for a reason. We build your Ideal Customer Profile from the ground up and target the exact companies, titles, and buying signals that match your offer. No spray and pray.',
  },
  {
    id: 2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Commercially grounded execution',
    description:
      'Every targeting decision, every message, and every follow-up is handled by people who understand your buyer and your market. Not handed off after an initial briefing.',
  },
  {
    id: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Problem-Based Prospecting',
    description:
      'We build messaging around real commercial problems your prospects are trying to solve. Every call, email, and LinkedIn touchpoint is rooted in a specific trigger or pain, not a generic pitch.',
  },
  {
    id: 4,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Pipeline that compounds',
    description:
      'We build a repeatable system, not a one-off campaign. Month on month, the engine improves: better data, sharper targeting, higher conversion. Revenue visibility you can actually forecast from.',
  },
];

export default function PainSection() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="standard-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <span className="section-label">The DealSpark Standard</span>
          </div>
          <h2
            id="standard-heading"
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight max-w-2xl mx-auto"
          >
            What great outbound{' '}
            <span className="gradient-text">actually looks like.</span>
          </h2>
          <p className="mt-5 text-white/55 max-w-xl mx-auto text-lg">
            The standard we hold ourselves to on every engagement.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {standards.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 90}>
              <article className="card h-full p-8 flex gap-6">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
