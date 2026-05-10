import { SITE_ORIGIN } from '../lib/seoConstants'

const ORG_ID = `${SITE_ORIGIN}/#organization`

export function buildHomeJsonLd(faqItems) {
  const faqEntity =
    faqItems?.length > 0
      ? {
          '@type': 'FAQPage',
          '@id': `${SITE_ORIGIN}/#faq`,
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null

  const graph = [
    {
      '@id': ORG_ID,
      '@type': 'Organization',
      name: 'Dhobify',
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/og-default.jpg`,
      description:
        'Dhobify is a laundry and dry-cleaning marketplace in Bangalore. Compare nearby stores, book pickup, and schedule delivery.',
      areaServed: [
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'Place', name: 'HSR Layout, Bengaluru' },
        { '@type': 'Place', name: 'Bellandur, Bengaluru' },
        { '@type': 'Place', name: 'Koramangala, Bengaluru' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: 'Dhobify',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_ORIGIN}/#local-business`,
      name: 'Dhobify',
      image: `${SITE_ORIGIN}/og-default.jpg`,
      url: SITE_ORIGIN,
      priceRange: '₹₹',
      description: 'Marketplace for laundry pickup, wash & fold, dry cleaning and ironing across Bangalore.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9352',
        longitude: '77.6245',
      },
      parentOrganization: { '@id': ORG_ID },
    },
    {
      '@type': 'Service',
      name: 'Bangalore laundry pickup and delivery',
      serviceType: 'Laundry marketplace; Scheduled pickup and delivery; Wash and fold; Dry cleaning; Ironing',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'City', name: 'Bengaluru' },
      url: SITE_ORIGIN,
    },
    ...(faqEntity ? [faqEntity] : []),
  ]

  return { '@context': 'https://schema.org', '@graph': graph }
}
