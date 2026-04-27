import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Outbound Sales Agency UK',
  description:
    'B2B outbound sales agency serving UK companies. Cold calling, email, and LinkedIn to generate qualified pipeline.',
  alternates: { canonical: 'https://www.dealspark.io/outbound-sales-agency-uk' },
};

const sections = [
  {
    heading: 'What an Outbound Sales Agency Should Do',
    body: [
      'A genuine outbound sales partner extends your commercial capacity without adding internal management overhead. It brings commercial judgment to your outbound motion, operates to your brand standards, and generates pipeline that your sales team can actually close.',
      'Too many outbound agencies in the UK market are built on volume, junior execution, and short-term activity metrics. The result is high cost, low conversion, and a pipeline that cannot be relied upon.',
    ],
  },
  {
    heading: 'DealSpark as Your Outbound Partner in the UK',
    body: [
      'DealSpark works with UK B2B companies as a commercial outbound partner. Every engagement covers the full outbound cycle: ICP definition, Clay-powered prospect targeting, cold calling, email, and LinkedIn execution.',
      'DealSpark works with a select number of clients at any one time. That selectivity ensures every engagement receives full attention and is built around the specific commercial context of the client.',
    ],
  },
  {
    heading: 'Commercially Grounded Execution Across the UK Market',
    body: [
      'Junior SDR models are common in the UK outbound market. High turnover, inconsistent quality, and performance that typically peaks early and declines. DealSpark operates without a junior team.',
      'Every call made on your behalf is made by a practitioner with the commercial experience to qualify properly, handle objections with intelligence, and represent your business to the standard UK enterprise buyers expect.',
    ],
  },
  {
    heading: 'GTM Engineering Behind Every Campaign',
    body: [
      'Outbound performance is determined before the first call is made. DealSpark applies GTM Engineering principles to every engagement: Clay-powered data enrichment, signal-based targeting, and ICP mapping that confirms commercial fit before outreach begins.',
      'The precision of the targeting is what makes the outreach relevant. And relevance is what earns the conversation.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outbound Sales Agency UK',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'Outbound Sales',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  description:
    'Outbound sales agency for UK B2B companies. Cold calling, email, and LinkedIn to generate qualified pipeline.',
  url: 'https://www.dealspark.io/outbound-sales-agency-uk',
};

export default function OutboundSalesAgencyUKPage() {
  return (
    <ServicePage
      h1="Outbound Sales Agency UK"
      badge="Outbound Sales"
      geo="United Kingdom"
      intro="Outbound sales for UK B2B companies. DealSpark operates your full outbound motion across cold calling, email, and LinkedIn as a trusted commercial partner."
      sections={sections}
      schemaJson={schema}
    />
  );
}
