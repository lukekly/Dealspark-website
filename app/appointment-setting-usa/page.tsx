import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Appointment Setting USA',
  description:
    'B2B appointment setting for US companies. Cold calling, email, and LinkedIn outreach that creates qualified sales conversations across the USA.',
  alternates: { canonical: 'https://dealspark.io/appointment-setting-usa' },
};

const sections = [
  {
    heading: 'Appointment Setting for B2B Companies Across the USA',
    body: [
      'B2B appointment setting in the US market is often reduced to an activity metric. Dials per day. Emails sent. Meetings booked regardless of quality. None of that reliably fills a pipeline.',
      'DealSpark works with US B2B companies to create consistent, high-quality buyer conversations through cold calling, email, and LinkedIn. Every conversation is pre-qualified on authority, fit, and commercial relevance, not passed through after meeting a daily quota.',
    ],
  },
  {
    heading: 'Quality Over Quantity in the US Market',
    body: [
      'The US market has no shortage of appointment setting services built on volume. Junior diallers, offshore teams, and high dial counts with low conversion are common. DealSpark operates differently.',
      'Every prospect in the outreach cycle has been selected for commercial fit. Every conversation that reaches your sales team has been qualified on authority, budget, and relevance. For US companies with high deal values and complex sales cycles, that selectivity is essential.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial openings with real qualification built in. Email reaches prospects who engage better in writing. LinkedIn builds familiarity and maintains presence across longer US enterprise buying cycles.',
      'Each channel reinforces the others. Every touchpoint is commercially grounded and specific to the prospect.',
    ],
  },
  {
    heading: 'Clay-Powered Targeting for US Precision',
    body: [
      'Targeting the US market requires a clearly defined ICP. DealSpark agrees the right company segments, titles, and commercial triggers before any outreach begins.',
      'Clay-powered data enrichment validates every contact against firmographic data, technology stack, growth signals, and recent company activity. The prospect list reflects fit and intent before the first call is made.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Appointment Setting USA',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://dealspark.io' },
  serviceType: 'B2B Appointment Setting',
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'B2B appointment setting for US companies. Cold calling and multichannel outreach to create qualified sales conversations.',
  url: 'https://dealspark.io/appointment-setting-usa',
};

export default function AppointmentSettingUSAPage() {
  return (
    <ServicePage
      h1="Appointment Setting USA"
      badge="Appointment Setting"
      geo="USA"
      intro="B2B appointment setting for companies operating across the USA. DealSpark creates qualified commercial conversations through cold calling, email, and LinkedIn."
      sections={sections}
      schemaJson={schema}
    />
  );
}
