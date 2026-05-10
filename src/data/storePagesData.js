import { SITE_ORIGIN } from '../lib/seoConstants'

/**
 * Dedicated store landing pages (/store/:slug).
 * Expand this map as you onboard more outlets.
 */

export const storesBySlug = {
  'cleanz24-hsr': {
    slug: 'cleanz24-hsr',
    path: '/store/cleanz24-hsr',
    title: 'Cleanz24 HSR Layout | Laundry & Dry Cleaning | Dhobify Partner',
    metaDescription:
      'Cleanz24 offers dependable wash & fold and dry cleaning in HSR Layout, Bangalore. Compare services, indicative pricing and book pickup via Dhobify.',
    name: 'Cleanz24',
    areaLabel: 'HSR Layout, Bengaluru',
    linkedAreaPaths: ['/laundry-in-hsr-layout', '/dry-cleaning-in-hsr-layout'],
    heroTagline: 'Consistent everyday laundry with quick turnaround.',
    descriptions: [
      'Cleanz24 is a dependable neighbourhood laundry focused on predictable quality for busy households in HSR Layout. Whether it is weekday workwear, workout gear, or home linens, batches are tracked carefully so whites stay bright and colours fade evenly over time—not after a single harsh cycle.',
      'From Dhobify you can line up laundry pickup Bangalore customers already use for convenience, choose a return window, and keep both everyday wash and occasional dry cleaning on one schedule. If you are comparing laundry near me options before you commit, Cleanz24 is a strong pick when you want volume handled calmly without surprises.',
    ],
    services: [
      { id: 'wash-fold', name: 'Wash & fold', detail: 'Per-kg household loads with fabric-safe detergents.' },
      { id: 'dry-clean', name: 'Dry cleaning', detail: 'Formal wear, silks, and structured garments.' },
      { id: 'iron', name: 'Ironing / steam press', detail: 'Crisp shirts, trousers, and cottons.' },
      { id: 'stain', name: 'Stain treatment', detail: 'Targeted pre-treatment where fabric allows.' },
    ],
    pickup: {
      headline: 'Pickup availability',
      lines: [
        'Doorstep collection and return in HSR Layout when you book through Dhobify.',
        'Free pickup typically applies above the platform minimum order—confirm in app at checkout.',
        'Same-day and express slots may be available on select days; choose your slot when you book.',
      ],
    },
    pricing: {
      headline: 'Indicative pricing',
      rows: [
        { service: 'Wash & fold', range: '₹70 – ₹110 / kg' },
        { service: 'Shirt dry clean', range: 'from ₹80 / piece' },
        { service: 'Ironing', range: '₹5 – ₹12 / piece' },
      ],
      note: 'Final price depends on fabric, stain work, and partner promotions—always confirmed before payment.',
    },
    reviews: [
      {
        author: 'Aditi R.',
        rating: 5,
        text: 'Turnaround was clear upfront and whites came back without that grey tinge you get from rush jobs.',
      },
      {
        author: 'Karthik M.',
        rating: 5,
        text: 'Pickup was on time; good option when I do not have bandwidth to run two different shops for wash vs dry clean.',
      },
    ],
  },
  'urbanclean-premium': {
    slug: 'urbanclean-premium',
    path: '/store/urbanclean-premium',
    title: 'UrbanClean Premium | Dry Cleaning & Fabric Care | Dhobify Partner',
    metaDescription:
      'UrbanClean Premium specialises in premium dry cleaning and delicate fabrics in Bangalore. View services, pricing bands and book pickup on Dhobify.',
    name: 'UrbanClean Premium',
    areaLabel: 'HSR Layout & nearby, Bengaluru',
    linkedAreaPaths: ['/laundry-in-hsr-layout', '/dry-cleaning-in-hsr-layout'],
    heroTagline: 'Premium care for suits, occasion wear, and delicate fabrics.',
    descriptions: [
      'UrbanClean Premium is built for pieces that need a lighter touch: structured blazers, silk blends, embroidered kurtas, and statement outfits you would rather not hand to a generic bulk line. Garments are assessed for trims, lining, and colour fastness before solvent or wet-cleaning routes are chosen.',
      'If you are searching dry cleaning Bangalore wide and want a partner that respects fabric labels, this is the profile to compare on Dhobify. Pair it with laundry pickup Bangalore slots so formal pieces and everyday loads do not require two separate trips across town.',
    ],
    services: [
      { id: 'dry-clean', name: 'Premium dry cleaning', detail: 'Suits, coats, dresses, and delicate synthetics.' },
      { id: 'wet-clean', name: 'Wet cleaning for delicates', detail: 'Lower-impact cleaning where dry solvent is not ideal.' },
      { id: 'finish', name: 'Hand finishing', detail: 'Pressed to shape with attention to lapels and pleats.' },
      { id: 'repairs', name: 'Minor finishing requests', detail: 'Loose buttons or simple adjustments when agreed in advance.' },
    ],
    pickup: {
      headline: 'Pickup availability',
      lines: [
        'Scheduled collection through Dhobify with protective bags for premium pieces.',
        'Return windows you select at booking—helpful before events and travel.',
        'Fragile garments may add handling time; you will see expectations before you confirm.',
      ],
    },
    pricing: {
      headline: 'Indicative pricing',
      rows: [
        { service: 'Two-piece suit', range: '₹350 – ₹650' },
        { service: 'Silk / designer kurta', range: '₹180 – ₹400' },
        { service: 'Dress / gown', range: 'from ₹300' },
      ],
      note: 'Designer trims, beadwork, or heavy stains may be quoted after inspection.',
    },
    reviews: [
      {
        author: 'Neha S.',
        rating: 5,
        text: 'Wedding guest outfit came back with structure intact—no shiny patches on the lapel.',
      },
      {
        author: 'Rahul V.',
        rating: 4,
        text: 'Premium pricing but worth it for my travel suits; pickup through Dhobify saved a trip.',
      },
    ],
  },
  'shyam-sundar-hsr': {
    slug: 'shyam-sundar-hsr',
    path: '/store/shyam-sundar-hsr',
    title: 'Shyam Sundar Laundry HSR | Affordable Wash & Iron | Dhobify',
    metaDescription:
      'Shyam Sundar Laundry in HSR Layout offers affordable wash, iron and dry cleaning. Book pickup and delivery through Dhobify.',
    name: 'Shyam Sundar Laundry',
    areaLabel: 'HSR Layout, Bengaluru',
    linkedAreaPaths: ['/laundry-in-hsr-layout'],
    heroTagline: 'Neighbourhood pricing for families and professionals.',
    descriptions: [
      'Shyam Sundar Laundry focuses on approachable rates for recurring household loads—the kind of laundry in HSR Layout families run every week when kids, guests, and work travel stack up. Expect straightforward handling for cottons, poly-blends, and daily office wear.',
      'Use Dhobify to lock a pickup slot instead of hauling bags across sectors, and keep delivery aligned with when someone is home to receive clean clothes.',
    ],
    services: [
      { id: 'wash-fold', name: 'Wash & fold', detail: 'High-volume weekly loads.' },
      { id: 'iron', name: 'Ironing', detail: 'Shirts, trousers, school uniforms.' },
      { id: 'dry-clean', name: 'Dry cleaning', detail: 'Select pieces; confirm availability when booking.' },
    ],
    pickup: {
      headline: 'Pickup availability',
      lines: ['HSR Layout coverage via Dhobify riders.', 'Minimum order rules apply for free pickup—see checkout.'],
    },
    pricing: {
      headline: 'Indicative pricing',
      rows: [
        { service: 'Wash & fold', range: '₹65 – ₹100 / kg' },
        { service: 'Ironing', range: '₹5 – ₹10 / piece' },
      ],
      note: 'Promotional bundles may appear seasonally inside the Dhobify app.',
    },
    reviews: [
      { author: 'Family in Sector 2', rating: 5, text: 'Solid for weekly bundles—easy to plan around school timings.' },
    ],
  },
  'express-laundry-hsr': {
    slug: 'express-laundry-hsr',
    path: '/store/express-laundry-hsr',
    title: 'Express Laundry HSR | Fast Laundry & Rush Orders | Dhobify',
    metaDescription:
      'Express Laundry supports faster cycles for urgent laundry in HSR Layout. Check services and book rush-friendly pickup with Dhobify.',
    name: 'Express Laundry',
    areaLabel: 'HSR Layout, Bengaluru',
    linkedAreaPaths: ['/laundry-in-hsr-layout'],
    heroTagline: 'Built for tight deadlines and travel weeks.',
    descriptions: [
      'Express Laundry prioritises speed for travellers, event weeks, and that moment when your backup shirt is still in the bag. While not every fabric can be rushed safely, everyday cottons and many mixed loads can be turned around quickly when slots are open.',
      'Pair with Dhobify when you need laundry pickup Bangalore timing to be precise—choose collection and return windows that match your calendar instead of guessing shop hours.',
    ],
    services: [
      { id: 'express-wash', name: 'Express wash & fold', detail: 'Where safe for fabric type—confirm at booking.' },
      { id: 'dry-clean', name: 'Select dry clean', detail: 'Limited rush capacity for eligible garments.' },
      { id: 'iron', name: 'Express press', detail: 'Shirts and trousers when volume allows.' },
    ],
    pickup: {
      headline: 'Pickup availability',
      lines: [
        'Express slots are limited; book early in the day when possible.',
        'Fees may apply for premium-speed handling—shown before you pay.',
      ],
    },
    pricing: {
      headline: 'Indicative pricing',
      rows: [
        { service: 'Express wash & fold', range: '₹90 – ₹140 / kg' },
        { service: 'Same-day surcharge', range: 'as quoted in app' },
      ],
      note: 'Rush timing depends on rain, load, and fabric—partner will confirm accept/decline.',
    },
    reviews: [
      { author: 'Vikram P.', rating: 5, text: 'Saved me before a Monday flight—clear about what could and could not be rushed.' },
    ],
  },
}

export function getStoreBySlug(slug) {
  if (!slug) return null
  return storesBySlug[slug] || null
}

const ORG_ID = `${SITE_ORIGIN}/#organization`

export function buildStoreJsonLd(store) {
  const url = `${SITE_ORIGIN}${store.path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@id': ORG_ID, '@type': 'Organization', name: 'Dhobify', url: SITE_ORIGIN },
      {
        '@type': 'LocalBusiness',
        '@id': `${url}#store`,
        name: store.name,
        url,
        description: store.descriptions.join(' '),
        image: `${SITE_ORIGIN}/og-default.jpg`,
        parentOrganization: { '@id': ORG_ID },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        areaServed: { '@type': 'Place', name: store.areaLabel },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue:
            Math.round((store.reviews.reduce((s, r) => s + r.rating, 0) / store.reviews.length) * 10) / 10,
          reviewCount: store.reviews.length,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: store.services.map((sv) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: sv.name, description: sv.detail },
          })),
        },
      },
    ],
  }
}
