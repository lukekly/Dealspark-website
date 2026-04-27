import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Appointment Setting UK',
  description:
    'B2B appointment setting for UK companies. Cold calling, email, and LinkedIn outreach that creates qualified sales conversations across the UK.',
  alternates: { canonical: 'https://www.dealspark.io/appointment-setting-uk' },
};

const sections = [
  {
    heading: 'Appointment Setting for B2B Companies Across the UK',
    body: [
      'Appointment setting done well creates commercial conversations with the right buyers at the right time. Appointment setting done poorly fills a calendar with noise and wastes your sales team\'s time.',
      'DealSpark works with UK B2B companies to create consistent, qualified buyer conversations through cold calling, email, and LinkedIn. Every conversation that reaches your team has been assessed and pre-qualified on authority, fit, and commercial relevance.',
    ],
  },
  {
    heading: 'Quality Conversations, Not Vanity Metrics',
    body: [
      'Many appointment setting agencies report on meetings booked. DealSpark focuses on the commercial quality of each conversation created. A meeting with a non-decision-maker who is outside your ICP is not a win.',
      'For UK B2B companies selling complex or high-value solutions, the quality of each conversation drives pipeline far more than meeting count. DealSpark is built around that principle.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial conversations. Email reaches prospects who engage better in writing. LinkedIn maintains presence and builds familiarity across the buying cycle.',
      'Every touchpoint is commercially grounded and specific to the prospect. The goal is always a qualified conversation worth having.',
    ],
  },
  {
    heading: 'ICP-First Targeting with Clay-Powered Data',
    body: [
      'The Ideal Customer Profile is agreed in detail before any outreach begins. The right company profile, the right decision-maker titles, and the commercial triggers that indicate a buyer is ready to engage.',
      'Clay-powered data enrichment validates and enriches every contact on the prospect list. Technology signals, growth indicators, and company activity all confirm fit before the first touchpoint is made.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Appointment Setting UK',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'B2B Appointment Setting',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  description:
    'B2B appointment setting for UK companies. Cold calling and multichannel outreach to create qualified sales conversations.',
  url: 'https://www.dealspark.io/appointment-setting-uk',
};

export default function AppointmentSettingUKPage() {
  return (
    <ServicePage
      h1="Appointment Setting UK"
      badge="Appointment Setting"
      geo="United Kingdom"
      intro="B2B appointment setting for UK companies. DealSpark creates qualified commercial conversations through cold calling, email, and LinkedIn."
      sections={sections}
      schemaJson={schema}
    />
  );
}
