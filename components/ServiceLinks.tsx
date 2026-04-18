import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const geos = [
  {
    label: 'Ireland',
    services: [
      { name: 'Cold Calling', href: '/cold-calling-ireland' },
      { name: 'B2B Lead Generation', href: '/b2b-lead-generation-ireland' },
      { name: 'Appointment Setting', href: '/appointment-setting-ireland' },
      { name: 'Outbound Sales Agency', href: '/outbound-sales-agency-ireland' },
      { name: 'GTM Engineering', href: '/gtm-engineering-ireland' },
    ],
  },
  {
    label: 'United Kingdom',
    services: [
      { name: 'Cold Calling', href: '/cold-calling-uk' },
      { name: 'B2B Lead Generation', href: '/b2b-lead-generation-uk' },
      { name: 'Appointment Setting', href: '/appointment-setting-uk' },
      { name: 'Outbound Sales Agency', href: '/outbound-sales-agency-uk' },
      { name: 'GTM Engineering', href: '/gtm-engineering-uk' },
    ],
  },
  {
    label: 'USA',
    services: [
      { name: 'Cold Calling', href: '/cold-calling-usa' },
      { name: 'B2B Lead Generation', href: '/b2b-lead-generation-usa' },
      { name: 'Appointment Setting', href: '/appointment-setting-usa' },
      { name: 'Outbound Sales Agency', href: '/outbound-sales-agency-usa' },
      { name: 'GTM Engineering', href: '/gtm-engineering-usa' },
    ],
  },
];

export default function ServiceLinks() {
  return (
    <section
      className="py-16 border-t border-white/[0.04]"
      aria-labelledby="service-links-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-label">Services</span>
          </div>
          <h2
            id="service-links-heading"
            className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight"
          >
            Outbound services across{' '}
            <span className="gradient-text">Ireland, UK, and USA.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {geos.map((geo, i) => (
            <AnimatedSection key={geo.label} delay={i * 80}>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                  {geo.label}
                </p>
                <ul className="space-y-2">
                  {geo.services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="text-sm text-white/55 hover:text-accent transition-colors leading-relaxed flex items-center gap-2 group"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
