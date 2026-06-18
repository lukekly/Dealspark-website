import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Cold Calling Agency Ireland',
  description:
    'B2B cold calling for Irish companies. DealSpark generates qualified pipeline and market intelligence through cold calling, email, and LinkedIn.',
  alternates: { canonical: 'https://www.dealspark.io/cold-calling-ireland' },
};

const sections = [
  {
    heading: 'Cold Calling for B2B Companies in Ireland',
    body: [
      'Cold calling is the most direct form of B2B outbound. A real conversation with a real decision-maker, in real time, with the ability to qualify, handle objections, and open a commercial relationship in a single interaction.',
      'DealSpark works with B2B companies across Ireland, including Dublin-based firms, regionally headquartered businesses, and companies trading internationally from the Irish market. Every call is made by a practitioner who understands the buyer, the context, and what a productive conversation looks like.',
    ],
  },
  {
    heading: 'Every Conversation Tells You Something',
    body: [
      'Most cold calling agencies treat a call that does not convert as a missed call. DealSpark treats it as a data point. When your market picks up the phone and engages with a skilled caller, they share things that no survey or desk research can replicate.',
      'Objections reveal buying barriers. Timing signals reveal budget cycles and internal priorities. Competitor mentions tell you who else is in the conversation and what they are leading with. Across a campaign, these signals build into a clear picture of how your market thinks, what they care about, and when they are ready to move.',
      'Every DealSpark engagement includes structured market intelligence reporting alongside pipeline activity. You leave with more than meetings. You leave with a sharper understanding of your market.',
    ],
  },
  {
    heading: 'Quality Over Volume',
    body: [
      'Most cold calling services are built on volume. High dial counts, templated scripts, and dashboards that measure activity rather than commercial outcomes. DealSpark measures the quality and relevance of each conversation.',
      'Every call is handled by a practitioner who understands your buyer, your market, and what a productive conversation looks like. In the Irish B2B market, where trust and reputation carry weight, the quality of the first conversation matters.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial openings. Email reaches prospects who engage better in writing. LinkedIn builds context and maintains visibility across the buying cycle.',
      'Each channel reinforces the others. The combination creates multiple points of contact without forcing a rigid outreach order.',
    ],
  },
  {
    heading: 'Proven Results in the Irish Market',
    body: [
      'DealSpark has delivered consistent qualified pipeline for B2B clients across SaaS, professional services, and training sectors. For The Lennox Academy, a revenue enablement firm working with some of the world\'s leading SaaS companies, DealSpark generated €390k in pipeline in four months.',
      'Engagements are built around your ICP, your market, and your close cycle. DealSpark works with a select number of clients at any one time to ensure every engagement receives full attention.',
    ],
  },
];

const faqs = [
  {
    q: 'Is cold calling still effective for B2B companies in Ireland?',
    a: 'Yes. Cold calling remains one of the most effective B2B outbound channels, particularly in the Irish market where relationships and direct conversation carry weight. The key is quality of execution: a problem-based approach, proper ICP targeting, and a caller who understands your market. Generic volume-based calling does not work. Commercially grounded cold calling does.',
  },
  {
    q: 'Do you write the call scripts?',
    a: 'Yes. DealSpark develops all call scripts based on your ICP, your offer, and the commercial problems your buyers are trying to solve. Scripts are built around the buyer\'s world, not a pitch. They are reviewed and refined throughout the engagement as the market responds.',
  },
  {
    q: 'How quickly will we start seeing results?',
    a: 'Most clients start seeing qualified conversations and booked meetings within the first four to six weeks. The first two weeks are spent on ICP definition, list build, and script development. Calling begins in week three, and pipeline activity typically follows shortly after.',
  },
  {
    q: 'Do you work with companies outside of Dublin?',
    a: 'Yes. DealSpark works with B2B companies across Ireland, including regionally headquartered businesses and companies trading internationally from the Irish market. Location is not a constraint for the engagement.',
  },
  {
    q: 'What sectors do you work with?',
    a: 'DealSpark has experience across B2B SaaS, professional services, recruitment, training, consultancy, and managed services. The common factor is a B2B offer with a defined decision-maker and a deal size that makes outbound commercially viable.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cold Calling Agency Ireland',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'B2B Cold Calling',
  areaServed: { '@type': 'Country', name: 'Ireland' },
  description:
    'B2B cold calling for Irish companies. DealSpark generates qualified pipeline through cold calling, email, and LinkedIn.',
  url: 'https://www.dealspark.io/cold-calling-ireland',
};

export default function ColdCallingIrelandPage() {
  return (
    <ServicePage
      h1="Cold Calling Agency Ireland"
      badge="Cold Calling"
      geo="Ireland"
      intro="B2B cold calling for Irish companies. DealSpark runs calls, email, and LinkedIn across the right contacts to generate consistent qualified pipeline and real market intelligence."
      sections={sections}
      faqs={faqs}
      schemaJson={schema}
    />
  );
}
