import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lennox Academy Case Study | €390k Pipeline in 4 Months',
  description:
    'How The Lennox Academy extended their GTM with a trusted outbound partner, generating €390k pipeline and 20 qualified opportunities in 4 months.',
  openGraph: {
    title: 'Lennox Academy Case Study | €390k Pipeline in 4 Months | DealSpark',
    description:
      'How The Lennox Academy extended their GTM with a trusted outbound partner, generating €390k pipeline and 20 qualified opportunities in 4 months.',
    type: 'article',
  },
};

const heroStats = [
  { value: '€390k', label: 'Pipeline Generated', sub: 'In the first 4 months' },
  { value: '20', label: 'Qualified Opportunities', sub: 'High-quality, ICP-aligned' },
  { value: '4', label: 'Months', sub: 'From kick-off to consistent pipeline' },
  { value: '100%', label: 'Client Trust', sub: '"Feels like an employee of Lennox Academy"' },
];

const principles = [
  {
    number: '01',
    title: 'Precision Targeting',
    body: 'A clearly defined ICP was agreed before any outreach began. No spray-and-pray activity. No off-brand accounts. Every prospect was selected because they matched the exact profile of a buyer Lennox Academy could genuinely serve, ensuring every conversation started with credibility rather than cold volume.',
  },
  {
    number: '02',
    title: 'Messaging That Resonates',
    body: 'People don\'t buy products; they buy solutions to problems. Every call, email, and LinkedIn touchpoint was built around the real commercial challenges that founders and revenue leaders at SaaS companies actually care about. Not a generic outbound sequence. Commercially grounded messaging that earned the right to a conversation.',
  },
  {
    number: '03',
    title: 'Predictable Pipeline Over Calendar Filling',
    body: 'The goal was never to maximise booked calls. It was to create consistent, high-quality conversations with ICP-aligned buyers, alongside structured long-term nurture. As Stuart noted: "Luke\'s trying to generate opportunities now, but he\'s also nurturing opportunities for the future. That\'s often what gets overlooked."',
  },
];

export default function LennoxAcademyCaseStudy() {
  return (
    <article className="min-h-screen pt-20">
      {/* Hero */}
      <header className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="grid-texture absolute inset-0 opacity-40" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Link href="/" className="section-label hover:border-accent/50 transition-colors">
              ← Back to DealSpark
            </Link>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-base font-bold"
              style={{
                background: 'rgba(124,58,237,0.2)',
                border: '1px solid rgba(124,58,237,0.3)',
                color: '#a78bfa',
              }}
            >
              LA
            </div>
            <div className="text-left">
              <p className="text-xs text-white/40 uppercase tracking-wider">Case Study</p>
              <p className="font-semibold text-white">The Lennox Academy</p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            How The Lennox Academy Extended Their GTM With a{' '}
            <span className="gradient-text">Trusted Outbound Partner</span>
          </h1>
          <p className="text-xl text-white/55 leading-relaxed max-w-2xl mx-auto">
            €390k pipeline and 20 qualified opportunities in the first 4 months,
            with oversight requirements that were minimal once live.
          </p>
        </div>
      </header>

      {/* Stats bar */}
      <div
        className="border-y border-white/[0.06]"
        style={{ background: 'rgba(124,58,237,0.04)' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-xs text-white/35 uppercase tracking-wider mb-1">
                  {stat.label}
                </dt>
                <dd className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </dd>
                <p className="text-xs text-white/35 leading-snug">{stat.sub}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

        {/* Client overview */}
        <div className="prose-dark">
          <h2>Client Overview</h2>
          <p>
            The Lennox Academy exists for one reason: to help salespeople build
            long, successful careers by giving them the training, coaching, and
            support they rarely receive.
          </p>
          <p>
            They work with fast-scaling and established SaaS companies,
            including Salesforce, Gong, and LinkedIn, delivering revenue
            enablement and GTM training programmes to some of the most
            commercially demanding organisations in the market.
          </p>
          <p>
            Outbound is a critical growth channel for Lennox Academy, but it is
            also their first shop window. For a company built around revenue
            excellence, outbound execution is inseparable from credibility.
          </p>
        </div>

        {/* Client details card */}
        <div
          className="my-10 rounded-2xl p-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div>
            <p className="text-xs text-white/30 uppercase tracking-wider font-semibold mb-2">Industry</p>
            <p className="text-white font-medium">B2B SaaS / Technology</p>
          </div>
          <div>
            <p className="text-xs text-white/30 uppercase tracking-wider font-semibold mb-2">Engagement</p>
            <ul className="space-y-1">
              {[
                'Commercially grounded outbound execution',
                'ICP definition and targeting',
                'Multi-channel outreach (calls, email, LinkedIn)',
                'Predictable pipeline and long-term nurture',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                  <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The challenge */}
        <div className="prose-dark">
          <h2>The Challenge: Growth Was Working. Predictability Wasn&apos;t.</h2>
          <p>
            The Lennox Academy is a small, senior team. Like many
            high-performing consultancies, leadership owns GTM, delivers client
            work, builds partnerships, and closes deals — simultaneously.
          </p>
          <p>
            Their own outbound was already converting well. Close rates were
            strong. Conversations were high quality. But the top of the funnel
            wasn&apos;t predictable enough, and balancing outbound execution
            alongside everything else was becoming increasingly difficult.
          </p>
        </div>

        <blockquote className="quote-block my-8">
          <p className="text-white/75 leading-relaxed italic">
            &ldquo;We wanted to build a repeatable, scalable model where we knew
            how many opportunities were coming in at the top of the funnel.&rdquo;
          </p>
        </blockquote>

        <div className="prose-dark">
          <p>
            The issue wasn&apos;t strategy. It was execution capacity, without
            lowering standards.
          </p>

          <h2>The Risk: Time, Focus, and Trust</h2>
          <p>
            Before DealSpark, Lennox Academy had tried external outbound support
            twice.
          </p>
        </div>

        {/* Two failed providers */}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              label: '1. A volume-led email provider',
              points: ['Drifted off-brand', 'Created deliverability issues', 'Damaged confidence'],
            },
            {
              label: '2. A traditional cold-calling agency',
              points: ['Promising early results', 'Declining quality and consistency', 'Meetings dropped over time'],
            },
          ].map((provider) => (
            <div
              key={provider.label}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-sm font-semibold text-white/70 mb-4">{provider.label}</p>
              <ul className="space-y-2">
                {provider.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-white/45">
                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="prose-dark">
          <p>Both engagements ended quickly.</p>
        </div>

        <blockquote className="quote-block my-8">
          <p className="text-white/75 leading-relaxed italic">
            &ldquo;What we do is we live by our brand. That&apos;s priority
            number one for us.&rdquo;
          </p>
        </blockquote>

        <div className="prose-dark">
          <p>They didn&apos;t need more activity. They needed trusted execution.</p>

          <h2>Why DealSpark</h2>
          <p>
            DealSpark came in as a GTM partner, not a lead generation
            vendor. An extension of the internal revenue function,
            accountable for outbound end-to-end.
          </p>
        </div>

        {/* Why DealSpark pillars */}
        <div
          className="my-8 rounded-2xl p-7"
          style={{
            background: 'rgba(124,58,237,0.05)',
            border: '1px solid rgba(124,58,237,0.15)',
          }}
        >
          <p className="text-sm text-white/50 mb-5 font-medium">What mattered most:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Clear ICP definition before any outreach',
              'Commercially grounded messaging, not scripts',
              'Multi-channel execution across calls, email, and LinkedIn',
              'Commercial judgment applied before anything reached the calendar',
              'Proactive, weekly communication',
              'A focus on both immediate opportunities and long-term nurture',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm text-white/65 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="quote-block my-8">
          <p className="text-white/75 leading-relaxed italic">
            &ldquo;Once we were up and running, really, in truth, very little.&rdquo;
          </p>
          <footer className="mt-3">
            <p className="text-xs text-white/35">Stuart Taylor, on oversight requirements once live</p>
          </footer>
        </blockquote>

        {/* Approach section */}
        <section className="my-16" aria-labelledby="approach-heading">
          <h2
            id="approach-heading"
            className="text-3xl font-bold text-white mb-3"
          >
            The Approach
          </h2>
          <p className="text-white/55 mb-10 leading-relaxed">
            Outbound execution was built around three principles.
          </p>

          <div className="space-y-6">
            {principles.map((p) => (
              <div
                key={p.number}
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-xs font-bold tracking-widest flex-shrink-0 mt-1"
                    style={{ color: 'rgba(124,58,237,0.6)' }}
                  >
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="my-16" aria-labelledby="results-heading">
          <h2 id="results-heading" className="text-3xl font-bold text-white mb-3">
            The Results
          </h2>
          <p className="text-white/55 mb-10 leading-relaxed">
            Within the first 4 months of working together:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: '20', label: 'High-quality opportunities created', colour: false },
              { value: '€390k', label: 'Pipeline generated', colour: true },
              { value: 'Several', label: 'Active deals progressed', colour: false },
              { value: '~12mo', label: 'First close projected to cover DealSpark fees', colour: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: stat.colour
                    ? 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.06) 100%)'
                    : 'rgba(255,255,255,0.03)',
                  border: stat.colour
                    ? '1px solid rgba(124,58,237,0.25)'
                    : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p
                  className={`text-3xl font-bold mb-2 leading-none ${
                    stat.colour ? 'gradient-text' : 'text-white'
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-white/40 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 mb-8">
            <blockquote className="quote-block">
              <p className="text-white/75 leading-relaxed italic">
                &ldquo;Our first customer will pretty much pay for a year of
                Luke&apos;s services.&rdquo;
              </p>
            </blockquote>
            <blockquote className="quote-block">
              <p className="text-white/75 leading-relaxed italic">
                &ldquo;These are real deals that have been created.&rdquo;
              </p>
            </blockquote>
          </div>

          <div className="prose-dark">
            <p>
              These were real, commercially relevant conversations, aligned to
              ICP and stage. Not inflated meeting counts or low-quality
              introductions. Every opportunity represented a genuine buyer with
              the authority, budget, and need to invest in Lennox
              Academy&apos;s programmes.
            </p>
          </div>
        </section>

        {/* Long-term partnership */}
        <div className="prose-dark">
          <h2>From Initial Engagement to Long-Term Partner</h2>
          <p>
            DealSpark was initially seen as a way to extend outbound execution
            without adding internal headcount. That perspective changed.
          </p>
        </div>

        <blockquote className="quote-block my-8">
          <p className="text-white/75 leading-relaxed italic">
            &ldquo;It&apos;s actually changed my outlook... using an external
            provider will be a real consideration rather than bringing this
            in-house.&rdquo;
          </p>
        </blockquote>

        <div className="prose-dark mb-12">
          <p>
            For founders and CROs, this is the inflection point. When execution
            quality matches internal standards, external support stops feeling
            like outsourcing. It becomes a long-term GTM partnership.
          </p>
          <p>
            Predictable growth doesn&apos;t come from more activity. It comes
            from trusted execution.
          </p>
        </div>

        {/* Final quote */}
        <blockquote
          className="my-16 rounded-2xl p-10 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(124,58,237,0.04) 100%)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          <div
            className="absolute top-6 left-8 text-7xl leading-none text-accent/20 font-serif select-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <div className="relative z-10 pt-4">
            <p className="text-xl text-white/85 leading-relaxed italic mb-6 font-light">
              The biggest thing I can say about the relationship is trust. We
              have 100% trust in Luke. It feels like working with an employee of
              Lennox Academy, an extension of what we do.
            </p>
            <footer className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: 'rgba(124,58,237,0.2)',
                  color: '#a78bfa',
                }}
                aria-hidden="true"
              >
                ST
              </div>
              <div>
                <p className="font-semibold text-white">Stuart Taylor</p>
                <p className="text-sm text-white/40">Chief Revenue Officer, The Lennox Academy</p>
              </div>
            </footer>
          </div>
        </blockquote>

        {/* What this means */}
        <div
          className="my-12 rounded-2xl p-8"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <h2 className="text-xl font-bold text-white mb-5">
            Is this the right fit for you?
          </h2>
          <p className="text-white/55 text-sm leading-relaxed mb-5">
            This engagement is built for founders and revenue leaders who are:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Personally owning pipeline',
              'Protective of their brand and standards',
              'Frustrated by volume-led agencies',
              'Not ready to hire and manage an SDR team',
              'Looking for a predictable outbound motion they can rely on',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm text-white/65">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-white/40 italic">
            This isn&apos;t a fit for teams looking to outsource SDR work or
            chase volume. It&apos;s built for those who want commercially
            grounded outbound execution that protects their time and standards.
          </p>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to build your pipeline?
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Book a no-obligation discovery call and let&apos;s see if DealSpark
            is the right fit for your business.
          </p>
          <a
            href="https://calendly.com/dealspark/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base py-3.5 px-8"
          >
            Book a Discovery Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* More case studies */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <p className="text-xs text-white/25 uppercase tracking-wider font-medium mb-5">More Case Studies</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              initials: 'SR',
              sector: 'Digital Marketing Agency',
              headline: 'Qualified Pipeline for a Growing Agency',
              description:
                'A digital marketing agency had strong creative output but no structured outbound. DealSpark built and ran their outbound from scratch, targeting B2B decision-makers in need of agency services.',
            },
            {
              initials: 'TR',
              sector: 'Technical Recruitment',
              headline: 'Consistent Client Pipeline',
              description:
                'A technical recruitment firm needed to reach both hiring managers and senior engineering talent simultaneously. DealSpark built separate outbound tracks for each persona, running independent multichannel campaigns to each audience.',
            },
          ].map((cs) => (
            <div
              key={cs.initials}
              className="rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #111118 0%, #16161f 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Top accent bar — muted */}
              <div
                className="h-1 w-full"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(124,58,237,0.3), rgba(124,58,237,0.15), rgba(124,58,237,0.3))',
                }}
                aria-hidden="true"
              />

              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                  {/* Left: content */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.25)',
                          }}
                        >
                          {cs.initials}
                        </div>
                        <div>
                          <p className="text-xs text-white/25 uppercase tracking-wider font-medium">
                            Client hidden
                          </p>
                          <p className="text-sm font-semibold text-white/35">
                            {cs.sector}
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: 'rgba(124,58,237,0.1)',
                          border: '1px solid rgba(124,58,237,0.2)',
                          color: 'rgba(167,139,250,0.7)',
                        }}
                      >
                        Coming Soon
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white/50 mb-3 leading-snug">
                      {cs.headline}
                    </h3>

                    <p className="text-sm text-white/30 leading-relaxed">
                      {cs.description}
                    </p>
                  </div>

                  {/* Right: blurred stats placeholder */}
                  <div
                    className="flex flex-col gap-3 pointer-events-none select-none"
                    style={{ filter: 'blur(4px)', opacity: 0.35 }}
                    aria-hidden="true"
                  >
                    {[
                      { value: '—', label: 'Pipeline Generated' },
                      { value: '—', label: 'Qualified Opportunities' },
                      { value: '—', label: 'Time to Results' },
                    ].map((stat, i) => (
                      <div
                        key={stat.label}
                        className="p-5 rounded-2xl"
                        style={{
                          background:
                            i === 0
                              ? 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.06) 100%)'
                              : 'rgba(255,255,255,0.03)',
                          border:
                            i === 0
                              ? '1px solid rgba(124,58,237,0.2)'
                              : '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        <p className="text-3xl font-bold mb-1 text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs text-white/40 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
