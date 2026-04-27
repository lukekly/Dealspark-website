import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'B2B Lead Generation USA',
  description:
    'B2B lead generation for US companies. Qualified pipeline through cold calling, email, and LinkedIn with Clay-powered targeting behind every campaign.',
  alternates: { canonical: 'https://www.dealspark.io/b2b-lead-generation-usa' },
};

const sections = [
  {
    heading: 'B2B Lead Generation Across the USA',
    body: [
      'The US B2B market is large and competitive. Standing out in the inbox is harder than ever. The companies that generate consistent qualified pipeline do so through outreach that is precise, commercially intelligent, and led by people with the judgment to navigate complex buyer conversations.',
      'DealSpark works with B2B companies operating across the US market to build consistent pipeline through cold calling, email, and LinkedIn. Every campaign is built around your ICP, with the commercial judgment required to navigate complex enterprise buying conversations.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial conversations in real time. Email reaches prospects who engage better in writing. LinkedIn maintains visibility across the longer buying cycles common in US enterprise sales.',
      'Each channel reinforces the others. The combination creates multiple points of contact without forcing a rigid outreach order.',
    ],
  },
  {
    heading: 'Clay-Powered Targeting for US Market Precision',
    body: [
      'Targeting the US market requires precision. The range of company sizes, verticals, and buyer profiles means ICP definition is more important, not less. DealSpark builds your ICP with granularity: the right segments, the right titles, and the specific commercial triggers that indicate a ready buyer.',
      'Clay-powered data enrichment validates and enriches the prospect list before outreach begins. Technology stack, growth signals, hiring patterns, and funding activity are all factored in to ensure every contact is a genuine fit.',
    ],
  },
  {
    heading: 'Consistent Outbound for US B2B Companies',
    body: [
      'Junior SDR teams scaled for volume are common in the US market. They generate noise. DealSpark generates qualified conversations by bringing commercial judgment and relevant targeting to every touchpoint.',
      'DealSpark has delivered qualified pipeline for B2B clients across SaaS, professional services, and training sectors. Engagements are built around your US market segments, your buyers, and your close cycle, with full attention throughout.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'B2B Lead Generation USA',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'B2B Lead Generation',
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'B2B lead generation for US companies. Cold calling, email, and LinkedIn outbound to build qualified pipeline.',
  url: 'https://www.dealspark.io/b2b-lead-generation-usa',
};

export default function B2BLeadGenerationUSAPage() {
  return (
    <ServicePage
      h1="B2B Lead Generation USA"
      badge="Lead Generation"
      geo="USA"
      intro="B2B lead generation for companies operating across the USA. DealSpark builds qualified pipeline through cold calling, email, and LinkedIn, with Clay-powered targeting behind every campaign."
      sections={sections}
      schemaJson={schema}
    />
  );
}
