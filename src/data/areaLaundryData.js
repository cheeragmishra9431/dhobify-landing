/**
 * Local SEO area pages – copy, stores, and FAQs.
 * Add new keys to `areas` as you launch more neighbourhoods.
 */

export const SITE_ORIGIN = 'https://www.dhobify.in'

const servicesDefault = [
  { name: 'Wash & Fold', id: 'wash-fold' },
  { name: 'Dry Clean', id: 'dry-clean' },
  { name: 'Ironing', id: 'ironing' },
]

export const areas = {
  'hsr-layout': {
    path: '/laundry-in-hsr-layout',
    /**
     * SEO title and meta
     */
    title: 'Laundry Services in HSR Layout | Pickup & Delivery | Dhobify',
    metaDescription:
      'Find the best laundry services in HSR Layout with Dhobify. Book doorstep pickup, schedule delivery, compare top laundry stores, and get fast service at affordable prices.',
    /**
     * Display
     */
    name: 'HSR Layout',
    city: 'Bengaluru',
    h1: 'Laundry Services in HSR Layout',
    /**
     * 400+ words, natural use of: laundry in HSR Layout, dry cleaning HSR, laundry pickup HSR, Express Laundry
     */
    introParagraphs: [
      "HSR Layout is one of Bangalore’s busiest residential hubs, and finding a reliable laundry service can often be time-consuming. Whether you are juggling work from home, school runs, or weekend plans, the last thing you want is the hassle of tracking down a good washer or carrying heavy bags to a local shop. Dhobify makes it simple by bringing together the best options for laundry in HSR Layout on a single, easy-to-use platform you can open from your phone in seconds.",
      'We built Dhobify for people who value clarity and convenience. Instead of calling multiple shops for prices or waiting for a neighbour’s recommendation, you can compare service levels, get a feel for what each store offers, and line up a laundry pickup HSR residents actually rely on—right from the same screen. That means less back-and-forth, fewer surprises, and more predictable turnaround when your wardrobe needs a refresh every week.',
      'If you are searching for dry cleaning HSR customers trust for suits, blazers, and delicate party wear, you will find professional partners on Dhobify who know how to treat different fabrics, trims, and linings. From everyday kurtas and work shirts to statement outfits that need a gentle hand, the goal is the same: consistent results without you visiting multiple places across the neighbourhood. When timing matters, you can also lean on Express Laundry and similar partners that prioritise quick cycles so a tight deadline does not throw off your week.',
      'The Dhobify experience is built around the idea of transparent pricing and a predictable flow: choose a trusted partner, schedule a pickup time that works for you, set your delivery window for when you want your clothes back, and track progress in one place. This model works especially well in dense localities where traffic and parking can make quick errands feel anything but quick. By coordinating laundry pickup and delivery HSR customers expect through one hub, you save time, reduce last-minute stress, and keep your home running smoothly even on your busiest days.',
      'As we expand coverage across the city, the same principles apply: curate the best local operators, make expectations visible before you book, and keep the handoff between you, the store, and the field team as smooth as possible. Start with a trusted name like Express Laundry when speed matters, or pick a value-oriented partner for everyday household loads—either way, you stay in control of the schedule and the budget.',
    ],
    cta: 'Book pickup and schedule delivery in HSR Layout with Dhobify today',
    bookPickupHref: '/#book-pickup',
    bookCtaLabel: 'Book pickup & delivery',
    stores: [
      {
        id: 'store-cleanz24',
        name: 'Cleanz24',
        shortDescription:
          'A reliable laundry service known for consistent quality and fast turnaround times. Ideal for everyday laundry and bulk washing when you need dependable volume handling.',
        services: servicesDefault,
      },
      {
        id: 'store-urbanclean-premium',
        name: 'UrbanClean Premium',
        shortDescription:
          'Offers premium fabric care and specialised dry cleaning for delicate garments and formal wear, so office staples and special-occasion pieces stay looking sharp for longer.',
        services: servicesDefault,
      },
      {
        id: 'store-shyam-sundar',
        name: 'Shyam Sundar Laundry',
        shortDescription:
          'A trusted neighbourhood laundry provider in HSR Layout with affordable pricing and dependable day-to-day service for families and working professionals nearby.',
        services: servicesDefault,
      },
      {
        id: 'store-express-laundry',
        name: 'Express Laundry',
        shortDescription:
          'Best for quick service and fast delivery, perfect for urgent needs when you are travelling, heading to an event, or simply running behind on a tight schedule.',
        services: servicesDefault,
      },
    ],
    pricing: {
      headline: 'Laundry pricing in HSR Layout',
      rows: [
        { service: 'Wash & Fold', range: '₹70 – ₹120 per kg' },
        { service: 'Dry Cleaning', range: '₹80 – ₹300 per item' },
        { service: 'Ironing', range: '₹5 – ₹15 per piece' },
      ],
      note: 'Prices may vary based on fabric and service type.',
    },
    howItWorks: {
      headline: 'How Dhobify works',
      steps: [
        { title: 'Choose your laundry service', description: 'Compare partner stores and pick the one that matches your need.' },
        {
          title: 'Schedule pickup and delivery',
          description:
            'Choose collection and return slots that match your day—so you are not waiting around, and you know when to expect your clothes back.',
        },
        { title: 'We collect your clothes', description: 'A rider picks up your bag so you can stay focused on your day.' },
        {
          title: 'Get them cleaned and delivered',
          description: 'Your order is processed and returned on the delivery schedule you pick, ready to wear.',
        },
      ],
    },
    faq: [
      {
        question: 'Do you offer same-day delivery?',
        answer:
          'Yes, select partners such as Express Laundry can offer fast turnaround. Availability depends on the store and the items you need cleaned, which you can confirm when you place your order.',
      },
      {
        question: 'Is pickup free?',
        answer: 'Pickup is free above a minimum order value, so your overall bill stays fair when you book through Dhobify.',
      },
      {
        question: 'Can I schedule when my laundry is delivered back?',
        answer:
          'Yes. When you place an order you can select a delivery window (subject to the store’s operating hours) so your clean clothes arrive when it fits your routine.',
      },
      {
        question: 'Can I choose a specific laundry store?',
        answer:
          'Yes. Dhobify lets you select your preferred store, compare what they offer, and book with the partner you trust for wash & fold, dry clean, or ironing.',
      },
    ],
  },
}

export function getAreaBySlug(slug) {
  if (!slug) return null
  return areas[slug] || null
}

export function getStoreAnchorId(store) {
  return store?.id || ''
}

const ORG_ID = `${SITE_ORIGIN}/#dhobify`

/**
 * JSON-LD: Organization, marketplace Service, and one LocalBusiness per store with Offer catalog.
 */
export function buildAreaJsonLd(area) {
  const place = {
    '@type': 'Place',
    name: `${area.name}, ${area.city}`,
  }

  const graph = [
    {
      '@id': ORG_ID,
      '@type': 'Organization',
      name: 'Dhobify',
      url: SITE_ORIGIN,
    },
    {
      '@type': 'Service',
      name: `Laundry, dry cleaning, and scheduled pickup & delivery in ${area.name}`,
      serviceType: 'Wash and fold; Dry cleaning; Ironing; Scheduled laundry pickup and delivery',
      areaServed: place,
      provider: { '@id': ORG_ID },
      url: `${SITE_ORIGIN}${area.path}`,
    },
    ...area.stores.map((s) => ({
      '@id': `${SITE_ORIGIN}${area.path}#${s.id}`,
      '@type': 'LocalBusiness',
      name: s.name,
      description: s.shortDescription,
      url: `${SITE_ORIGIN}${area.path}#${s.id}`,
      areaServed: place,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: s.services.map((sv) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: sv.name },
        })),
      },
    })),
  ]

  return { '@context': 'https://schema.org', '@graph': graph }
}
