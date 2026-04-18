import AnimatedSection from './AnimatedSection';

const industries = [
  {
    label: 'SaaS & Technology',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    description: 'Cloud software, developer tools, and enterprise tech',
  },
  {
    label: 'IT Services',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    description: 'Managed services, consultancies, and system integrators',
  },
  {
    label: 'Consultants & Advisory',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    description: 'Strategy, management, and specialist advisory firms',
  },
  {
    label: 'Training & Coaching',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    description: 'B2B learning, leadership development, and skills programmes',
  },
  {
    label: 'Marketing & Media',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    description: 'Agencies, content studios, and media businesses',
  },
];

export default function Industries() {
  return (
    <section
      className="py-24 lg:py-28 border-t border-white/[0.05]"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <span className="section-label">Industries We Serve</span>
          </div>
          <h2
            id="industries-heading"
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          >
            Built for{' '}
            <span className="gradient-text">B2B businesses</span>
            <br className="hidden sm:block" /> that sell to other businesses.
          </h2>
        </AnimatedSection>

        {/* Industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.label} delay={index * 80}>
              <div className="card p-7 flex items-start gap-5">
                <div
                  className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0"
                  aria-hidden="true"
                >
                  {industry.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1.5">
                    {industry.label}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* "Your industry" placeholder card */}
          <AnimatedSection delay={industries.length * 80}>
            <div
              className="p-7 rounded-2xl flex items-center justify-center h-full min-h-[100px]"
              style={{
                border: '1px dashed rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.01)',
              }}
            >
              <p className="text-sm text-white/30 text-center">
                Don&apos;t see your industry?
                <br />
                <span className="text-accent/70">Let&apos;s talk.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
