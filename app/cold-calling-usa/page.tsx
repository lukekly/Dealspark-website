import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Cold Calling Agency USA',
  description:
    'B2B cold calling for US companies. DealSpark builds qualified pipeline through cold calling, email, and LinkedIn across the US market.',
  alternates: { canonical: 'https://www.dealspark.io/cold-calling-usa' },
};

const sections = [
  {
    heading: 'Cold Calling for B2B Companies Across the USA',
    body: [
      'In a US market saturated with automated outreach, cold calling stands out. A real conversation in real time, with the ability to qualify a buyer, address concerns, and move a deal forward in a single interaction.',
      'DealSpark works with B2B companies operating across the US market, targeting the right decision-makers at the right time. Every call is made by a practitioner who understands enterprise buyers, complex sales cycles, and what a high-quality opening conversation looks like.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial conversations. Email reaches prospects who engage better in writing. LinkedIn builds context and maintains visibility across longer US enterprise buying cycles.',
      'Each channel reinforces the others. The combination creates multiple points of contact without forcing a rigid outreach order.',
    ],
  },
  {
    heading: 'Precision Over Activity',
    body: [
      'High-volume outbound models rely on SDRs working from scripts, measured on dials per day. The US market is saturated with this approach. DealSpark measures the quality and commercial relevance of each conversation, not how many calls were made.',
      'Every call is handled by a practitioner who understands your offer, your buyer profile, and how to navigate a real B2B conversation. For companies selling complex solutions to US enterprise buyers, that preparation and credibility is essential.',
    ],
  },
  {
    heading: 'ICP-First Targeting with Clay-Powered Data',
    body: [
      'Before any outreach begins, DealSpark defines your Ideal Customer Profile precisely. The right company size, the right verticals, the right decision-maker titles, and the commercial triggers that indicate a high-probability buyer at the right stage.',
      'Clay-powered data enrichment builds and validates the prospect list before the first call is made. Technology stack, growth signals, hiring patterns, and recent company activity are all used to confirm fit and sharpen targeting.',
    ],
  },
  {
    heading: 'Consistent Pipeline for US B2B Companies',
    body: [
      'DealSpark has delivered consistent qualified pipeline for B2B clients across SaaS, professional services, and training sectors. Calls, email, and LinkedIn run across the right contacts to maximise the conversion opportunity.',
      'Engagements are built around your ICP, your US market segments, and your close cycle. DealSpark works with a select number of clients at any one time to ensure full attention on every campaign.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cold Calling Agency USA',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'B2B Cold Calling',
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'B2B cold calling for US companies. Qualified pipeline through calls, email, and LinkedIn across the US market.',
  url: 'https://www.dealspark.io/cold-calling-usa',
};

export default function ColdCallingUSAPage() {
  return (
    <ServicePage
      h1="Cold Calling Agency USA"
      badge="Cold Calling"
      geo="USA"
      intro="B2B cold calling for companies operating across the US market. DealSpark runs calls, email, and LinkedIn across the right contacts to generate consistent qualified pipeline."
      sections={sections}
      schemaJson={schema}
    />
  );
}
