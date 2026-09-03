import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const CALENDLY = 'https://calendly.com/dealspark/strategy-call';

export const metadata: Metadata = {
  title: 'Cold Calling Agency Ireland | B2B Cold Calling | DealSpark',
  description:
    'DealSpark provides professional B2B cold calling services for Irish companies. We speak directly with decision-makers and create qualified sales opportunities.',
  alternates: { canonical: 'https://www.dealspark.io/cold-calling-ireland' },
  openGraph: {
    title: 'Cold Calling Agency Ireland | B2B Cold Calling | DealSpark',
    description:
      'DealSpark provides professional B2B cold calling services for Irish companies. We speak directly with decision-makers and create qualified sales opportunities.',
  },
};

const processSteps = [
  {
    number: '01',
    title: 'Define the target market',
    body: 'We agree the types of companies, decision-makers and commercial situations worth pursuing.',
  },
  {
    number: '02',
    title: 'Build the prospect list',
    body: 'We research and prepare the companies and contacts we want to speak with.',
  },
  {
    number: '03',
    title: 'Make the calls',
    body: 'We speak directly with prospective customers, introduce the reason for the conversation, qualify interest and uncover opportunities.',
  },
  {
    number: '04',
    title: 'Create the opportunity',
    body: 'Where there is genuine commercial interest, we make the introduction and book the appropriate next step with your team.',
  },
  {
    number: '05',
    title: 'Report what we are hearing',
    body: 'You see the conversations, outcomes, opportunities and relevant feedback coming directly from the market.',
  },
];

const sectors = [
  {
    label: 'B2B SaaS and Technology',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: 'IT Services and Managed Services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    label: 'Professional Services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    label: 'Consultancy and Advisory',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: 'Recruitment and Staffing',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Training and Coaching',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'Is cold calling still effective for B2B companies in Ireland?',
    a: "Yes. For B2B companies where winning a new client has real commercial value, cold calling remains one of the most direct ways to open conversations. The Irish market responds well to direct contact when the approach is relevant and professional. Generic, high-volume cold calling does not work. Targeted, well-prepared cold calling does.",
  },
  {
    q: 'What does DealSpark actually do on our behalf?',
    a: "We handle the full cold calling process: we agree the target companies and decision-makers with you, build the prospect list, develop the call approach, make the calls and manage the follow-up. When there is genuine interest, we qualify the opportunity and make the introduction to your team. You see the outcomes and conversations throughout.",
  },
  {
    q: 'Who makes the calls?',
    a: "Luke Kelly, the founder of DealSpark, handles client engagements personally. You are not passed to a call centre or a junior agent. The person representing your business understands B2B sales and treats every conversation accordingly.",
  },
  {
    q: 'How do you decide which companies to contact?',
    a: "Before any calling begins, we agree the profile of the ideal target: the company type, size, sector, geography and the decision-maker role. We then build a prospect list based on that profile. We do not call indiscriminately. Every company on the list is there because it fits what we have agreed.",
  },
  {
    q: 'Do you write the messaging and call approach?',
    a: "Yes. We develop the call approach, messaging and positioning based on your offer and the commercial problems your buyers typically face. The objective is a conversation that is relevant and credible, not a scripted pitch.",
  },
  {
    q: 'What happens when someone is interested?',
    a: "When a prospect shows genuine interest, we qualify the opportunity, understand their situation and book the appropriate next step with your team. We apply commercial judgement before anything reaches your diary.",
  },
  {
    q: 'How do we see what is happening in the campaign?',
    a: "You have visibility into the calls, outcomes, notes and opportunities throughout the campaign. You can see what prospective customers are saying, what objections are coming up and what market intelligence is emerging from the conversations.",
  },
  {
    q: 'Do you work with companies outside Dublin?',
    a: "Yes. DealSpark works with B2B companies across Ireland, including regionally headquartered businesses and companies trading internationally from the Irish market. Location is not a constraint.",
  },
  {
    q: 'What types of B2B companies do you work with?',
    a: "We work with B2B companies where winning a new client has meaningful commercial value. That includes technology companies, professional services firms, recruitment businesses, consultancies, managed services providers and training companies. The common factor is a B2B sale with identifiable decision-makers and enough value to make direct prospecting worthwhile.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cold Calling Agency Ireland',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'B2B Cold Calling',
  areaServed: { '@type': 'Country', name: 'Ireland' },
  description:
    'Professional B2B cold calling services for Irish companies. DealSpark speaks directly with decision-makers and creates qualified sales opportunities.',
  url: 'https://www.dealspark.io/cold-calling-ireland',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function ColdCallingIrelandPage() {
  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/"
              className="section-label hover:border-accent/50 transition-colors"
            >
              &larr; DealSpark
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="section-label">Cold Calling</span>
            <span className="section-label">Ireland</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
            Cold Calling Agency Ireland
          </h1>

          <p className="text-xl text-white/55 leading-relaxed mb-4 max-w-2xl">
            B2B cold calling for Irish companies. We identify the right businesses and decision-makers, speak with them on your behalf and create genuine sales opportunities for your team.
          </p>

          <p className="text-sm text-white/30 mb-8 font-medium tracking-wide">
            Professional conversations. Qualified opportunities. Complete visibility.
          </p>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base py-3.5 px-7"
          >
            Book a Strategy Call
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
      </header>

      {/* Proof strip */}
      <div className="border-y border-white/[0.06]" style={{ background: 'rgba(124,58,237,0.04)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <dl className="grid grid-cols-3 gap-8 sm:gap-12">
              <div>
                <dd className="text-3xl font-bold gradient-text mb-0.5">€390k</dd>
                <dt className="text-xs text-white/40 font-medium">Pipeline Generated</dt>
              </div>
              <div>
                <dd className="text-3xl font-bold text-white mb-0.5">20</dd>
                <dt className="text-xs text-white/40 font-medium">Qualified Opportunities</dt>
              </div>
              <div>
                <dd className="text-2xl font-bold text-white mb-0.5">4 Months</dd>
                <dt className="text-xs text-white/40 font-medium">Time to Results</dt>
              </div>
            </dl>
            <Link
              href="/case-study/lennox-academy"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white transition-colors whitespace-nowrap flex-shrink-0"
            >
              See the case study
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-5 pb-8">
        <div className="space-y-5">

          {/* What we actually do */}
          <AnimatedSection>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Cold calling that represents your business properly.
              </h2>
              <div className="space-y-3 mb-8">
                <p className="text-white/60 leading-relaxed">
                  When you outsource cold calling, you are trusting another company to represent your name in front of potential customers.
                </p>
                <p className="text-white/60 leading-relaxed">
                  That is why we treat every conversation as a business development conversation rather than a scripted telemarketing call. We work with you to understand who you want to reach, why those companies should care and what a genuine opportunity looks like. We then identify the right people, pick up the phone and have the conversations on your behalf.
                </p>
              </div>

              {/* Process steps */}
              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-xs text-white/35 uppercase tracking-wider font-semibold mb-5">
                  How it works
                </p>
                <div className="space-y-5">
                  {processSteps.map((step) => (
                    <div key={step.number} className="flex items-start gap-5">
                      <span
                        className="text-xs font-bold tracking-widest flex-shrink-0 mt-1 tabular-nums"
                        style={{ color: 'rgba(124,58,237,0.7)' }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white mb-0.5">{step.title}</p>
                        <p className="text-sm text-white/50 leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Not a call centre */}
          <AnimatedSection delay={70}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Targeted, relevant calls.
              </h2>
              <div className="space-y-3">
                <p className="text-white/60 leading-relaxed">
                  High dial counts do not automatically create pipeline.
                </p>
                <p className="text-white/60 leading-relaxed">
                  The person making the call is representing your company, often in the first conversation a prospective customer has with your brand. We therefore focus on the quality of the target list, the relevance of the conversation and whether a genuine commercial opportunity exists.
                </p>
                <p className="text-white/60 leading-relaxed">
                  The objective is not to fill your diary with meetings for the sake of hitting a quota. It is to create conversations your sales team is actually interested in continuing.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Market intelligence */}
          <AnimatedSection delay={140}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Every conversation tells you something.
              </h2>
              <div className="space-y-3">
                <p className="text-white/60 leading-relaxed">
                  Cold calling gives you something digital outreach often cannot: immediate feedback from the market.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Prospects tell us why the timing is wrong, what they already use, who they currently work with, what their priorities are, where objections exist and when circumstances might change. We capture that information throughout the campaign so you gain more than booked meetings. You gain a clearer view of how your market is responding.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Transparency */}
          <AnimatedSection delay={210}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                See what is actually happening in the market.
              </h2>
              <div className="space-y-3">
                <p className="text-white/60 leading-relaxed">
                  You should not have to wait for a monthly report to understand what your outbound campaign is producing.
                </p>
                <p className="text-white/60 leading-relaxed">
                  DealSpark gives clients visibility into the conversations taking place, the outcomes, notes, qualified opportunities and meetings being created. That means you can see not only what was booked, but what prospective customers are actually saying.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Proven results */}
          <AnimatedSection delay={280}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(124,58,237,0.03) 100%)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              <div className="p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-white mb-3">Proven results.</h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  For The Lennox Academy, DealSpark generated €390k in qualified sales pipeline and 20 qualified opportunities over four months. The Lennox Academy provides sales training and development programmes for enterprise SaaS companies and had high standards for how their business should be represented in the market.
                </p>

                <blockquote className="quote-block mb-6">
                  <p className="text-white/80 text-sm leading-relaxed italic mb-3">
                    &ldquo;The biggest thing I can say about the relationship is trust. We have 100% trust in Luke. It feels like working with an employee of Lennox Academy, an extension of what we do.&rdquo;
                  </p>
                  <footer>
                    <p className="text-sm font-semibold text-white">Stuart Taylor</p>
                    <p className="text-xs text-white/40">
                      Chief Revenue Officer, The Lennox Academy
                    </p>
                  </footer>
                </blockquote>

                <Link
                  href="/case-study/lennox-academy"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
                >
                  Read the full case study
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Who we work with */}
          <AnimatedSection delay={350}>
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(124,58,237,0.05)',
                border: '1px solid rgba(124,58,237,0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-3">Who we work with</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                The service suits B2B companies where winning a new customer is valuable enough to justify direct, proactive prospecting. The common factor is not the industry. It is a B2B sale with identifiable decision-makers and enough commercial value to make that prospecting worthwhile.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sectors.map((ind) => (
                  <div key={ind.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0"
                      aria-hidden="true"
                    >
                      {ind.icon}
                    </div>
                    <span className="text-sm text-white/60 font-medium">{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-7">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border-b border-white/[0.06] last:border-0 pb-7 last:pb-0"
                  >
                    <h3 className="text-base font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Final CTA */}
          <AnimatedSection className="mb-16">
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Looking to create more sales opportunities?
              </h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
                Tell us who you want to reach and what a good opportunity looks like. We&apos;ll show you how we would approach the market.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-3.5 px-8"
              >
                Book a Strategy Call
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
    </div>
  );
}
