'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const CALENDLY = 'https://calendly.com/dealspark/strategy-call';

type Tier = {
  id: 'starter' | 'growth' | 'custom';
  name: string;
  quarterly: string;
  perMonth: string;
  price: string;
  priceNote: string;
  appointments: string;
  description: string;
  extraFeatures: string[];
  cta: string;
  popular: boolean;
};

const tiers: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    quarterly: '12–18',
    perMonth: '4–6/month',
    price: '€3,500',
    priceNote: 'per month',
    appointments: '4–6 qualified appointments',
    description: 'For founder-led teams adding a consistent outbound channel alongside referrals and inbound.',
    extraFeatures: [],
    cta: 'Book a Call',
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    quarterly: '24–30',
    perMonth: '8–10/month',
    price: '€5,500',
    priceNote: 'per month',
    appointments: '8–10 qualified appointments',
    description: 'For teams with a salesperson in place who need more pipeline than inbound and referrals can deliver.',
    extraFeatures: [],
    cta: 'Book a Call',
    popular: true,
  },
  {
    id: 'custom',
    name: 'Custom',
    quarterly: 'Custom',
    perMonth: '12+/month',
    price: 'Custom',
    priceNote: "Let's talk",
    appointments: '12+ qualified appointments',
    description: 'For teams that need higher volume or multiple markets. Built around your targets.',
    extraFeatures: ['Bi-weekly strategy calls'],
    cta: 'Speak to Sales',
    popular: false,
  },
];

const sharedFeatures = [
  'Prospect research & target lists',
  'Cold calling & campaign setup',
  'Email follow-up',
  'Monthly performance report',
];

const CheckIcon = () => (
  <svg className="check-icon w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M6.5 11.5L3 8l1.5-1.5 2 2 5-5L13 5l-6.5 6.5z" />
  </svg>
);

export default function PricingPlans() {
  const [selected, setSelected] = useState<Tier['id']>('growth');

  return (
    <>
      {/* ── Capacity framing ── */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 pt-4 pb-8">
        <AnimatedSection delay={100}>
          <p className="text-center text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">
            How many active deals can you manage each quarter?
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {tiers.map((tier) => {
              const active = tier.id === selected;
              return (
                <button
                  key={tier.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(tier.id)}
                  className={`text-center rounded-2xl px-2 py-5 sm:p-5 border transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    active
                      ? 'border-accent/40 bg-accent/10'
                      : 'border-white/[0.06] bg-surface hover:border-white/20'
                  }`}
                >
                  <p className={`text-xl sm:text-4xl font-bold mb-1 whitespace-nowrap ${active ? 'gradient-text' : 'text-white'}`}>
                    {tier.quarterly}
                  </p>
                  <p className="text-white/40 text-xs sm:text-sm">per quarter</p>
                  <p className="text-white/50 text-xs sm:text-sm mt-1">{tier.perMonth}</p>
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Pricing cards ── */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const active = tier.id === selected;
            return (
              <AnimatedSection key={tier.id} delay={i * 80}>
                <div
                  className={`relative flex flex-col h-full rounded-2xl p-8 border transition-colors ${
                    active
                      ? 'border-accent/50 bg-gradient-to-b from-accent/10 to-surface'
                      : 'card-static'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="section-label text-xs">Most Popular</span>
                    </div>
                  )}
                  <div className="mb-5">
                    <h2 className="text-xl font-bold text-white mb-2">{tier.name}</h2>
                    <p className="text-white/50 text-sm leading-relaxed">{tier.description}</p>
                  </div>
                  <div className="mb-7">
                    <p className={`text-4xl font-bold ${active ? 'gradient-text' : 'text-white'}`}>
                      {tier.price}
                    </p>
                    <p className="text-white/40 text-sm mt-1">{tier.priceNote}</p>
                  </div>
                  <ul className="mb-8 space-y-3 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-white/70 text-sm">
                        <strong className="text-white font-semibold">{tier.appointments}</strong> per month
                      </span>
                    </li>
                    {[...sharedFeatures, ...tier.extraFeatures].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={active ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                  >
                    {tier.cta}
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </>
  );
}
