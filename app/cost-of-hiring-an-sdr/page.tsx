import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import SDRCostCalculator from '@/components/SDRCostCalculator';

const CALENDLY = 'https://calendly.com/dealspark/strategy-call';
const PAGE_URL = 'https://www.dealspark.io/cost-of-hiring-an-sdr';
const TITLE = 'Cost of Hiring an SDR in Ireland & the UK | DealSpark';
const DESCRIPTION =
  'What an in-house SDR really costs in year one: salary, PRSI/NI, pension, recruitment, tools, ramp time and management. Compare it with outsourcing to DealSpark.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const SYSTEM = [
  { t: 'ICP and market mapping', d: 'Which companies, which titles, and why now. Get this wrong and every call afterwards is wasted.' },
  { t: 'List building and data', d: 'Data sourcing, enrichment and validation, so every call goes to the right person on a working number.' },
  { t: 'Dialler and number setup', d: "Local numbers, number rotation and call recording, set up so your calls aren't flagged as spam." },
  { t: 'Script and objection handling', d: "An opener that earns the call, and answers to the objections you'll hear every day." },
  { t: 'Email follow-up', d: 'Domains, mailbox warm-up, deliverability, and copy that gets read after the call.' },
  { t: 'CRM and reporting', d: "Clean records, call outcomes logged, and a weekly view of what's working." },
  { t: 'Coaching and call review', d: 'Listening back, fixing the pitch, keeping someone motivated through hundreds of dials a week.' },
  { t: 'Performance management', d: "Targets, one-to-ones, and the hard conversation if it isn't working by month four." },
];

const MARKETS = [
  {
    flag: 'Ireland',
    h: "You're hiring against big tech",
    items: [
      ['A small talent pool.', "Dublin's experienced SDRs get a steady stream of offers from the big tech companies based here, many paying €70–80k on-target earnings for language roles."],
      ['Employer PRSI is 11.4%', 'since October 2026, on top of salary and commission.'],
      ['Pension auto-enrolment', 'started in January 2026. Employers pay 1.5% now, rising to 6% by 2035.'],
      ['A small market remembers.', "Burn through your best prospects with a weak pitch and there's no next list to move on to."],
    ],
  },
  {
    flag: 'United Kingdom',
    h: 'A bigger pool, a higher bill',
    items: [
      ['Employer National Insurance is 15%', 'on earnings above £5,000, since April 2025.'],
      ['Workplace pension', 'adds at least 3% employer contribution.'],
      ['London runs £8–10k higher', 'than the UK average at every level, and recruiters there typically charge 20–25%.'],
      ['Less time to decide.', "From January 2027, unfair dismissal protection starts after 6 months instead of 2 years. That's about when a slow ramp becomes obvious."],
    ],
  },
];

const HIRE_WHEN = [
  'You already know outbound works for your market and have a playbook to hand over.',
  "There's a sales leader with time to coach, review calls and manage performance.",
  'You want a team of several reps and a long-term path from SDR to AE.',
];

const DS_WHEN = [
  'You need meetings this quarter, not next year.',
  "You haven't proved yet that your buyers will take a cold call.",
  'You want to see what a working playbook looks like before you hire someone to run it.',
];

function Arrow() {
  return (
    <span className="text-accent flex-shrink-0 mt-[1px]" aria-hidden="true">→</span>
  );
}

function SectionHead({ label, id, title, lede }: { label: string; id: string; title: string; lede?: string }) {
  return (
    <div className="max-w-3xl mb-10">
      <span className="section-label">{label}</span>
      <h2 id={id} className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-5">
        {title}
      </h2>
      {lede && <p className="text-lg text-white/60 leading-relaxed mt-4">{lede}</p>}
    </div>
  );
}

export default function CostOfHiringAnSDRPage() {
  return (
    <main className="pt-24 pb-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-glow pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <AnimatedSection delay={0} className="max-w-4xl">
            <span className="section-label">Thinking of hiring an SDR instead?</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-6 mb-6 leading-[1.1]">
              An SDR&apos;s salary is{' '}
              <span className="gradient-text">only part of what they cost.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
              Hiring an SDR means paying for recruitment, tools, training and months of ramp before you find out whether your market picks up the phone. Here&apos;s what it really costs in Ireland and the UK, with figures you can change.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Calculator + timeline ── */}
      <SDRCostCalculator />

      {/* ── What you're really hiring for ── */}
      <section aria-labelledby="sys-h" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AnimatedSection delay={0}>
          <SectionHead
            label="What you're really hiring for"
            id="sys-h"
            title="An SDR makes calls. Someone still has to build the machine."
            lede="A rep with two years' experience can run a call block well. Very few can build everything around it on their own. If they can't, that work lands on you."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 border-t border-white/[0.07]">
            {SYSTEM.map((s) => (
              <div key={s.t} className="py-5 border-b border-white/[0.07] min-w-0">
                <h3 className="text-white font-semibold mb-1">{s.t}</h3>
                <p className="text-white/50 text-[0.95rem] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="stat-card !text-left mt-10 !p-7 sm:!p-8">
            <h3 className="text-xl font-bold text-white mb-3">With DealSpark, all of this is already built.</h3>
            <p className="text-white/60 leading-relaxed max-w-3xl">
              The data, the dialler, the scripts, the email follow-up and the reporting are in place before your campaign starts. You agree the target market and the message with us, and calls begin in the first weeks. There&apos;s no hiring, no ramp and nobody to manage.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Markets ── */}
      <section aria-labelledby="mk-h" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AnimatedSection delay={0}>
          <SectionHead label="Ireland and the UK are different markets" id="mk-h" title="Where you hire changes the maths" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MARKETS.map((m) => (
              <div key={m.flag} className="card-static p-6 sm:p-7 min-w-0">
                <span className="text-white/35 text-xs font-semibold uppercase tracking-widest">{m.flag}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-5">{m.h}</h3>
                <ul className="flex flex-col gap-3">
                  {m.items.map(([b, rest]) => (
                    <li key={b} className="flex gap-3 text-white/55 text-[0.95rem] leading-relaxed">
                      <Arrow />
                      <span>
                        <strong className="text-white font-semibold">{b}</strong> {rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── When hiring is the right call ── */}
      <section aria-labelledby="when-h" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AnimatedSection delay={0}>
          <SectionHead label="When hiring is the right call" id="when-h" title="Sometimes you should hire in-house" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { h: 'Hire an SDR when', items: HIRE_WHEN, accent: false },
              { h: 'Start with DealSpark when', items: DS_WHEN, accent: true },
            ].map((col) => (
              <div
                key={col.h}
                className={`rounded-2xl p-6 sm:p-7 border ${
                  col.accent ? 'border-accent/25 bg-accent/[0.07]' : 'border-white/[0.07] bg-surface'
                }`}
              >
                <h3 className="text-lg font-bold text-white mb-4">{col.h}</h3>
                <ul className="flex flex-col gap-3">
                  {col.items.map((t) => (
                    <li key={t} className="flex gap-3 text-white/60 leading-relaxed">
                      <Arrow />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection delay={0}>
          <div className="relative overflow-hidden card-static p-8 sm:p-14">
            <div className="absolute inset-0 bg-purple-glow pointer-events-none" />
            <div className="relative max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Find out if outbound works before you hire for it
              </h2>
              <p className="text-white/55 mb-8 text-base sm:text-lg leading-relaxed">
                On a 30-minute call we&apos;ll look at your market, your average deal size and what you&apos;ve tried before. You&apos;ll get a straight answer on whether calling will work for you.
              </p>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                Book a strategy call
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Method ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <details className="group max-w-3xl text-sm text-white/45">
          <summary className="cursor-pointer text-white/70 font-semibold w-fit hover:text-white transition-colors">
            How we calculated this
          </summary>
          <p className="mt-3 leading-relaxed">
            Salary figures from the Morgan McKinley Salary Guide 2026 (Ireland) and UK market data, 2026. Totals include employer PRSI or NI, pension, recruiter fees, tools, equipment and your management time. Every figure can be changed in the calculator above.
          </p>
        </details>
      </section>

    </main>
  );
}
