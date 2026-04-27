import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Cold Calling Agency UK',
  description:
    'B2B cold calling agency serving UK companies. Qualified pipeline through calls, email, and LinkedIn across the UK market.',
  alternates: { canonical: 'https://www.dealspark.io/cold-calling-uk' },
};

const sections = [
  {
    heading: 'Cold Calling for B2B Companies Across the UK',
    body: [
      'Cold calling remains the highest-signal channel in B2B outbound. A real conversation with a real decision-maker gives you the ability to qualify, challenge assumptions, and open a commercial relationship that no automated channel can replicate.',
      'DealSpark works with B2B companies across the UK, from London-headquartered businesses to regional and nationally distributed teams. Every call is made by a practitioner who understands UK buyers, UK market dynamics, and how to hold a conversation that earns the next step.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial conversations. Email reaches prospects who engage better in writing. LinkedIn builds context and maintains presence across the buying cycle.',
      'Each channel reinforces the others. The combination creates multiple points of contact without forcing a rigid outreach order.',
    ],
  },
  {
    heading: 'Commercial Judgment, Not Dial Counts',
    body: [
      'Volume-led cold calling services use generic scripts and measure KPIs built around call counts. The result is high activity and low conversion. DealSpark measures the quality and commercial relevance of each conversation.',
      'Every call is handled by a practitioner who understands your offer, your buyer, and the objections that matter. For UK B2B companies selling complex or high-value solutions, the quality of the first conversation is the difference between an open door and a burned contact.',
    ],
  },
  {
    heading: 'ICP-First Targeting with Clay-Powered Data',
    body: [
      'No outreach begins before the Ideal Customer Profile is clearly defined. DealSpark works with you to identify the company types, titles, and commercial triggers that indicate a high-probability buyer for your offer.',
      'Clay-powered data enrichment builds a prospect list that goes beyond basic firmographic data. Technology stack, hiring signals, growth indicators, and recent company activity are all used to confirm fit before the first call is made.',
    ],
  },
  {
    heading: 'Consistent Pipeline for UK B2B Companies',
    body: [
      'DealSpark has delivered consistent qualified pipeline for B2B clients across SaaS, professional services, and training sectors in the UK and internationally.',
      'Engagements are structured around your specific ICP and close cycle. DealSpark works with a select number of clients at any one time to ensure every campaign receives full attention from start to finish.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cold Calling Agency UK',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'B2B Cold Calling',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  description:
    'B2B cold calling for UK companies. Qualified pipeline through calls, email, and LinkedIn.',
  url: 'https://www.dealspark.io/cold-calling-uk',
};

export default function ColdCallingUKPage() {
  return (
    <ServicePage
      h1="Cold Calling Agency UK"
      badge="Cold Calling"
      geo="United Kingdom"
      intro="B2B cold calling for UK companies. DealSpark runs calls, email, and LinkedIn across the right contacts to generate consistent qualified pipeline across the UK market."
      sections={sections}
      schemaJson={schema}
    />
  );
}
