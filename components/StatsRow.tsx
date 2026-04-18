import AnimatedSection from './AnimatedSection';

const stats = [
  {
    value: '€390k',
    label: 'Pipeline Generated',
    sublabel: 'Qualified revenue opportunities',
  },
  {
    value: '20',
    label: 'Qualified Opportunities',
    sublabel: 'Senior decision-maker meetings',
  },
  {
    value: '4',
    label: 'Months',
    sublabel: 'Time to consistent pipeline',
  },
];

export default function StatsRow() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      aria-label="Key results"
    >
      {/* Subtle gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 120}>
              <div className="stat-card">
                <p className="text-5xl lg:text-6xl font-bold gradient-text mb-2 leading-none">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-white/40">{stat.sublabel}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
