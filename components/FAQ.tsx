'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'Engagements typically range from €5,000 to €20,000. We will give you a clear breakdown on the strategy call.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients start seeing qualified conversations booked within the first 4 to 6 weeks. The first 30 days are about building the foundation, targeting, messaging, infrastructure. From week five onwards, the pipeline starts moving.',
  },
  {
    q: 'How involved do I need to be?',
    a: 'Minimal. We run the outbound, research, sequencing, calling, follow-up. You show up to the meetings we book. That is the whole point.',
  },
  {
    q: 'What does the first 30 days look like?',
    a: 'We start with a strategy session to align on your ICP, positioning, and target markets. From there we build the targeting lists, set up the infrastructure, and launch. By the end of month one, the system is live and generating activity.',
  },
  {
    q: 'Who do you work with?',
    a: 'B2B companies typically selling into mid-market or enterprise, with a deal size that makes outbound worth the investment. We work across Ireland, the UK, and the USA. If we do not think we are the right fit, we will tell you on the call.',
  },
  {
    q: 'What channels do you use?',
    a: 'Cold calling, cold email, and LinkedIn. We identify the right channel for your market and run a focused campaign rather than spreading thin across all three at once.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <span className="section-label">FAQ</span>
          </div>
          <h2
            id="faq-heading"
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          >
            Common questions.{' '}
            <span className="gradient-text">Straight answers.</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 60}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${open === index ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.07)'}`,
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                  aria-expanded={open === index}
                >
                  <span className="text-base font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: open === index ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
                      color: open === index ? '#a78bfa' : 'rgba(255,255,255,0.4)',
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: open === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: open === index ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p className="px-7 pb-6 text-white/55 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
