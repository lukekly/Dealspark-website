import type { MetadataRoute } from 'next';

const BASE = 'https://www.dealspark.io';

const SERVICE_SLUGS = [
  'cold-calling-ireland',
  'cold-calling-uk',
  'cold-calling-usa',
  'b2b-lead-generation-ireland',
  'b2b-lead-generation-uk',
  'b2b-lead-generation-usa',
  'appointment-setting-ireland',
  'appointment-setting-uk',
  'appointment-setting-usa',
  'outbound-sales-agency-ireland',
  'outbound-sales-agency-uk',
  'outbound-sales-agency-usa',
  'gtm-engineering-ireland',
  'gtm-engineering-uk',
  'gtm-engineering-usa',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${BASE}/case-study/lennox-academy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...servicePages];
}
