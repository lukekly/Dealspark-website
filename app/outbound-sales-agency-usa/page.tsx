import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Outbound Sales Agency USA',
  description:
    'B2B outbound sales agency serving US companies. Cold calling, email, and LinkedIn to generate qualified pipeline.',
  alternates: { canonical: 'https://dealspark.io/outbound-sales-agency-usa' },
};

const sections = [
  {
    heading: 'What an Outbound Sales Agency Should Deliver',
    body: [
      'The US outbound sales agency market is crowded. Most agencies promise pipeline and deliver activity reports. The gap between the two is where revenue is lost.',
      'DealSpark works with US B2B companies as a commercial outbound partner. The focus is on commercial outcomes: qualified conversations with the right buyers, generated through cold calling, email, and LinkedIn, executed with the judgment required to navigate complex enterprise sales.',
    ],
  },
  {
    heading: 'DealSpark as Your Outbound Partner in the USA',
    body: [
      'DealSpark works with B2B companies operating across the US market. Engagements cover the full outbound cycle: ICP definition, Clay-powered targeting, and cold calling, email, and LinkedIn across the right contacts.',
      'DealSpark works with a select number of clients at any one time. That structure ensures every engagement receives full attention and is built specifically around your US market segments and buyers.',
    ],
  },
  {
    heading: 'Commercially Grounded Execution in a Junior-Heavy Market',
    body: [
      'The US outbound market is dominated by scaled SDR operations. High headcount, high churn, and a model built on replacing volume with more volume. DealSpark is a different proposition entirely.',
      'Every element of the outbound motion is executed with the commercial judgment required to navigate real enterprise conversations. For US B2B companies selling complex solutions to enterprise buyers, that expertise is what creates conversations worth having.',
    ],
  },
  {
    heading: 'GTM Engineering for US Market Targeting',
    body: [
      'Targeting the US market requires the right data. DealSpark applies GTM Engineering principles to every campaign: Clay-powered data enrichment, signal-based prospecting, and ICP mapping built around your specific US buyer profile.',
      'The targeting precision is what makes the outreach land. Every contact has been selected based on firmographic fit, growth indicators, technology signals, and commercial intent. The outbound starts from a position of relevance.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outbound Sales Agency USA',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://dealspark.io' },
  serviceType: 'Outbound Sales',
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'Outbound sales agency for US B2B companies. Cold calling, email, and LinkedIn to generate qualified pipeline.',
  url: 'https://dealspark.io/outbound-sales-agency-usa',
};

export default function OutboundSalesAgencyUSAPage() {
  return (
    <ServicePage
      h1="Outbound Sales Agency USA"
      badge="Outbound Sales"
      geo="USA"
      intro="Outbound sales for B2B companies operating across the USA. DealSpark runs your full outbound motion across cold calling, email, and LinkedIn as a trusted commercial partner."
      sections={sections}
      schemaJson={schema}
    />
  );
}
