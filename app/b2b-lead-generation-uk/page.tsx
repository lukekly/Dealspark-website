import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'B2B Lead Generation UK',
  description:
    'B2B lead generation for UK companies. Qualified pipeline through cold calling, email, and LinkedIn with Clay-powered targeting behind every campaign.',
  alternates: { canonical: 'https://www.dealspark.io/b2b-lead-generation-uk' },
};

const sections = [
  {
    heading: 'B2B Lead Generation Across the UK',
    body: [
      'B2B lead generation in the UK market demands precision. With buyers inundated by automated outreach, the companies that win pipeline are the ones whose outbound is commercially intelligent, well-targeted, and led by people who can hold a real conversation.',
      'DealSpark works with UK-based B2B companies to build consistent qualified pipeline through cold calling, email, and LinkedIn. From London to regional hubs, we target the right buyers at the right time with outreach that earns the conversation.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial conversations. Email reaches prospects who engage better in writing. LinkedIn builds context and maintains visibility across the buying cycle.',
      'Each channel reinforces the others. The combination creates multiple points of contact without forcing a rigid outreach order.',
    ],
  },
  {
    heading: 'Clay-Powered Targeting and ICP Definition',
    body: [
      'Every DealSpark engagement starts with ICP definition. The right company profile, the right buyer titles, the right commercial triggers. Clay-powered data enrichment validates and enriches the prospect list before any outreach begins.',
      'The result is a list of contacts who have been selected with intent: firmographic fit, technology signals, growth indicators, and recent company activity all factored in. The targeting is what makes the outreach relevant.',
    ],
  },
  {
    heading: 'Consistent Execution Across the Full Outbound Cycle',
    body: [
      'DealSpark does not operate a junior SDR team. Every call, every follow-up, and every decision in the outbound cycle is handled by a practitioner who understands your buyer, your market, and what a productive conversation looks like.',
      'DealSpark has built qualified pipeline for B2B clients across SaaS, professional services, and training sectors in the UK and internationally. Engagements are structured around your ICP and close cycle, with full attention from start to finish.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'B2B Lead Generation UK',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'B2B Lead Generation',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  description:
    'B2B lead generation for UK companies. Cold calling, email, and LinkedIn outbound to build qualified pipeline.',
  url: 'https://www.dealspark.io/b2b-lead-generation-uk',
};

export default function B2BLeadGenerationUKPage() {
  return (
    <ServicePage
      h1="B2B Lead Generation UK"
      badge="Lead Generation"
      geo="United Kingdom"
      intro="B2B lead generation for UK companies. DealSpark builds qualified pipeline through cold calling, email, and LinkedIn, with Clay-powered targeting behind every campaign."
      sections={sections}
      schemaJson={schema}
    />
  );
}
