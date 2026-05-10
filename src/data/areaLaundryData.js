/**
 * Local SEO area pages – copy, stores, FAQs, and JSON-LD (@graph).
 * Add keys to `areas` to launch more neighbourhoods.
 */

import { SITE_ORIGIN } from '../lib/seoConstants'

export { SITE_ORIGIN }

export const ORG_SCHEMA_ID = `${SITE_ORIGIN}/#organization`

const servicesDefault = [
  { name: 'Wash & Fold', id: 'wash-fold' },
  { name: 'Dry Clean', id: 'dry-clean' },
  { name: 'Ironing', id: 'ironing' },
]

export const areas = {
  'hsr-layout': {
    slug: 'hsr-layout',
    path: '/laundry-in-hsr-layout',
    title: 'Laundry Services in HSR Layout | Pickup & Delivery | Dhobify Bangalore',
    metaDescription:
      'Compare laundry and dry cleaning in HSR Layout with Dhobify. Book laundry pickup Bangalore slots, see trusted partners like Cleanz24 & UrbanClean Premium, and schedule doorstep delivery.',
    name: 'HSR Layout',
    city: 'Bengaluru',
    h1: 'Laundry Services in HSR Layout, Bangalore',
    introParagraphs: [
      'HSR Layout stays busy with young families, professionals, and founders sharing the same roads, cafes, and weekends. That pace is exactly why “laundry near me” searches spike on Sunday nights: you want a predictable partner, not another errand that eats an hour in traffic. Dhobify brings the best laundry stores in HSR Layout onto one screen so you can compare how each team handles everyday wash, ironing, and speciality dry cleaning before you book.',
      'When people look for laundry services Bangalore wide, what they usually mean is a reliable rhythm—pickups that arrive in the slot you chose, detergents suited to allergy-prone households, and clear communication when a stain needs extra time. Dhobify is built around that rhythm. You choose a partner, confirm indicative pricing for wash & fold or piece-rate dry cleaning, and lock laundry pickup Bangalore timings through the app rather than juggling phone calls.',
      'Dry cleaning Bangalore customers care about fabrics that do not tolerate a standard drum cycle—wool jackets, embroidered kurtas, silk blends, bandhgalas, and pleated skirts. Listing those items with Dhobify means your order card travels with handling notes, and partners like UrbanClean Premium can apply the correct solvent or gentle wet-cleaning route instead of rushing a delicate garment through a bulk line.',
      'If Express Laundry fits your week because travel or events compress your timeline, you can prioritise turnaround while still skipping the storefront queue. Prefer Cleanz24 for steady household loads? Keep that relationship and simply let Dhobify coordinate collection and doorstep delivery—your clothes still go to the same trained pressers.',
      'We also combine local intent keywords naturally because they reflect how neighbours actually search: laundry in HSR Layout for sector-level discovery, laundry pickup Bangalore for mobility-minded users, and dry cleaning Bangalore when the wardrobe shifts toward occasion wear. Underneath those searches is the same promise—transparent options, respectful handling, and the ability to plan returns when you will be home to receive fresh clothes.',
      'Ready to shorten your weekly chores? Browse partner cards below, skim typical price bands, read quick FAQs, then tap Book pickup & delivery to schedule your first Dhobify handoff.',
    ],
    cta: 'Schedule laundry pickup & delivery in HSR Layout today with Dhobify.',
    bookPickupHref: '/#book-pickup',
    bookCtaLabel: 'Book pickup',
    dryCleaning: {
      path: '/dry-cleaning-in-hsr-layout',
      title: 'Dry Cleaning HSR Layout | Suits, Silks & Delicates | Dhobify',
      metaDescription:
        'Book dry cleaning in HSR Layout with Dhobify. Compare premium fabric care partners, schedule pickup across Bangalore corridors, and get suits, sarees & delicates professionally finished.',
      h1: 'Dry Cleaning in HSR Layout',
      introParagraphs: [
        'Dry cleaning in HSR Layout is rarely “just pressing a shirt.” Neighbours stash occasion wear for weddings, product launches, and interviews across Koramangala and Bellandur catchments, plus international travel wardrobes that spend more time folded than worn. Dhobify helps you translate that closet reality into clear orders—garment counts, timelines, solvent vs wet-clean notes, and the delivery window where someone can inspect cuffs and lapels.',
        'When users type dry cleaning Bangalore, they typically need two assurances: the operator understands trims (beading, fused collars, tonal stitching) and the logistics layer will not strand delicate pieces on a bike without cover. Dhobify’s marketplace model keeps both visible. You still pick a specialist such as UrbanClean Premium for premium finishing, but pickup and return move through coordinated slots so humidity and monsoon drizzle are less of a gamble.',
        'Many households pair frequent wash & fold loads with occasional dry clean-only pieces. That is why laundry pickup Bangalore bookings on Dhobify let you batch different service types in one journey—drop everyday cottons with Cleanz24 or Shyam Sundar Laundry while routing designer kurtas to a premium line. You spend less time explaining repeat instructions because your profile stores preferences between orders.',
        'Pricing conversations stay grounded. Dry cleaning quotes depend on linings, ornamentation, and stain work. Dhobify surfaces typical ranges on area pages, then locks the final number after partner inspection—no surprise “₹50 extra” moments at your door. If a piece cannot be safely processed, you hear why before chemicals touch the fabric.',
        'Finally, local SEO is not an abstract checkbox for us—it mirrors how people talk. Someone near Sector 19 might still say laundry near me while standing in HSR; someone commuting from Sarjapur Road thinks in terms of laundry services Bangalore that cover multiple exits. Dhobify’s copy stays natural so those intents meet useful detail: who serves your block, what they specialise in, and how soon a rider can meet you.',
        'Scroll to compare partner expertise, review pricing guardrails, and book the dry cleaning run that matches your week.',
      ],
    },
    stores: [
      {
        id: 'store-cleanz24',
        storePageSlug: 'cleanz24-hsr',
        name: 'Cleanz24',
        shortDescription:
          'A reliable laundry service known for consistent quality and fast turnaround times. Ideal for everyday laundry and bulk washing when you need dependable volume handling.',
        services: servicesDefault,
      },
      {
        id: 'store-urbanclean-premium',
        storePageSlug: 'urbanclean-premium',
        name: 'UrbanClean Premium',
        shortDescription:
          'Offers premium fabric care and specialised dry cleaning for delicate garments and formal wear, so office staples and special-occasion pieces stay looking sharp for longer.',
        services: servicesDefault,
      },
      {
        id: 'store-shyam-sundar',
        storePageSlug: 'shyam-sundar-hsr',
        name: 'Shyam Sundar Laundry',
        shortDescription:
          'A trusted neighbourhood laundry provider in HSR Layout with affordable pricing and dependable day-to-day service for families and working professionals nearby.',
        services: servicesDefault,
      },
      {
        id: 'store-express-laundry',
        storePageSlug: 'express-laundry-hsr',
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
      note: 'Prices may vary based on fabric and service type. Confirm in app before paying.',
    },
    howItWorks: {
      headline: 'How Dhobify works',
      steps: [
        { title: 'Choose store', description: 'Compare partner stores and select the team that fits your load and timeline.' },
        { title: 'Schedule pickup', description: 'Pick a collection slot that works with your building access and traffic reality.' },
        { title: 'Clothes cleaned', description: 'Your order is processed with the service notes you added for stains or delicates.' },
        { title: 'Delivered back', description: 'Riders return garments in the delivery window you chose—no surprise knock.' },
      ],
    },
    faq: [
      {
        question: 'How much does laundry cost in Bangalore?',
        answer:
          'Most households see wash & fold between roughly ₹65–₹120 per kg depending on the partner and finishing level, while dry cleaning is quoted per garment after fabric review. Dhobify shows indicative ranges early and confirms pricing before payment.',
      },
      {
        question: 'Is pickup free?',
        answer:
          'Pickup is free when you meet the platform’s minimum order value. If you are below that threshold a small logistics fee may apply—check the checkout screen for the exact amount before you confirm.',
      },
      {
        question: 'Do you offer same-day delivery?',
        answer:
          'Select partners such as Express Laundry can support faster cycles when fabrics allow. Availability depends on rain, rider capacity, and how many rush orders are already booked, so you will see a clear yes/no before you pay.',
      },
      {
        question: 'Can I schedule when my laundry is delivered back?',
        answer:
          'Yes. Choose a delivery window during booking so someone is home to receive pressed shirts, heavy bedding, or dry-cleaned coats without hallway handoffs.',
      },
      {
        question: 'Can I pick a specific laundry store?',
        answer:
          'Absolutely—Dhobify is a marketplace. You can route new orders to Cleanz24, UrbanClean Premium, Shyam Sundar Laundry, or Express Laundry depending on the job.',
      },
    ],
  },
  bellandur: {
    slug: 'bellandur',
    path: '/laundry-in-bellandur',
    title: 'Laundry in Bellandur | Pickup & Dry Cleaning Near ORR | Dhobify',
    metaDescription:
      'Laundry services in Bellandur, Bangalore: compare partners, book laundry pickup Bangalore slots along the Outer Ring Road corridor, and schedule dry cleaning delivery with Dhobify.',
    name: 'Bellandur',
    city: 'Bengaluru',
    h1: 'Laundry Services in Bellandur, Bangalore',
    introParagraphs: [
      'Bellandur sits at the intersection of tech parks, newer apartment towers, and the daily crawl along the Outer Ring Road. Residents rarely lack laundry options—what they lack is time to compare them fairly. Dhobify lists vetted partners in one flow so you can answer laundry near me with facts, not guesses: who covers your society gate, how they price per kg, and whether they can take dry cleaning Bangalore loads the same week you travel.',
      'Apartment clusters around Kaikondrahalli and surrounding blocks often search laundry services Bangalore while actually needing hyperlocal handoffs. That is why Dhobify foregrounds Bellandur-specific logistics—pickup points near main exits, rain-friendly packaging, and communication if security delays a rider. You are not forced into a call center script; you see the store you chose and the slot you locked.',
      'Wash & fold remains the weekly backbone. Families stack school uniforms, gym clothes, and bed linens that all need different water temperatures. Listing those preferences once inside Dhobify means partners like Cleanz24 or Shyam Sundar Laundry repeat the formula every Monday without reinventing instructions. Dry cleaning pickups can ride along in the same order when you segregate garments in labelled bags.',
      'Professionals commuting toward EGL or Sarjapur may still phrase intent as laundry in HSR Layout or laundry pickup Bangalore because mental maps overlap. Listing Bellandur explicitly keeps those users from bouncing to irrelevant shops. Dhobify’s marketplace model scales by postcode and road reality, not vague “city-wide” banners that hide fulfilment gaps.',
      'Premium pieces still deserve premium lanes. UrbanClean Premium remains available for embellished kurtas, structured dresses, or winter layers that should never see agitation. Booking through Dhobify simply removes the scooter trip across mud lanes during monsoon—you hand off indoors, tracking updates tell you when finishing is complete, and delivery aligns with meetings or school pickup runs.',
      'Down the page you will find partner snapshots, indicative rate bands, FAQs tuned to ORR renters, and a Book pickup button that anchors straight to Dhobify’s scheduling flow.',
    ],
    cta: 'Book Bellandur laundry pickup & delivery today on Dhobify.',
    bookPickupHref: '/#book-pickup',
    bookCtaLabel: 'Book pickup',
    dryCleaning: {
      path: '/dry-cleaning-in-bellandur',
      title: 'Dry Cleaning Bellandur | Premium Garment Care | Dhobify Bangalore',
      metaDescription:
        'Dry cleaning in Bellandur with scheduled pickup along the Outer Ring Road. Dhobify partners handle suits, sarees & delicates with clear pricing and doorstep return.',
      h1: 'Dry Cleaning in Bellandur',
      introParagraphs: [
        'Bellandur’s wardrobe mix blends startup casual with heavy traditional calendars—annual day performances, rooftop weddings, and client dinners all land on the same Google Calendar as school recitals. Dry cleaning Bellandur customers therefore need specialists who inspect pleats and shoulder pads instead of stamping every item with identical solvents.',
        'Bangalore humidity also means sweat salts sit on collar bands longer than residents realise. Express spot treatments work best when Dhobify order notes spell out fabric content and prior washing attempts—information UrbanClean Premium and peer specialists use before touching beadwork.',
        'Logistics-wise, Outer Ring Road traffic turns a fifteen-minute scooter hop into unpredictable delays. Coordinating laundry pickup Bangalore style through Dhobify gives you live status, rain delays, and reschedules without losing your place in the partner’s production queue. You are not asking a single shop to improvise last-mile; the marketplace layer handles handoffs.',
        'Many Bellandur renters still compare dry cleaning Bangalore prices by walking store to store. Area pages centralise those ranges so you understand what “per piece” includes—pressing, minor repairs, hanger upgrades—before you commit. If a quote must change after inspection, you approve it digitally.',
        'Pair everyday volume with occasional premium care: route cotton kurtas with Shyam Sundar Laundry or Cleanz24 while isolating occasion wear for premium finishing. Dhobify keeps both legs visible in order history so repeat visits feel faster.',
        'Review partner cards, understand pricing guardrails, and tap Book pickup to line up your next dry cleaning run without another ORR detour.',
      ],
    },
    stores: [
      {
        id: 'store-cleanz24-bellandur',
        storePageSlug: 'cleanz24-hsr',
        name: 'Cleanz24',
        shortDescription:
          'High-volume wash & fold for Bellandur apartments with predictable finishing—great when your building generates constant gym and school laundry.',
        services: servicesDefault,
      },
      {
        id: 'store-urbanclean-bellandur',
        storePageSlug: 'urbanclean-premium',
        name: 'UrbanClean Premium',
        shortDescription:
          'Premium dry cleaning and gentle finishing for ORR professionals who need boardroom-ready suits and occasion wear without fabric stress.',
        services: servicesDefault,
      },
      {
        id: 'store-shyam-bellandur',
        storePageSlug: 'shyam-sundar-hsr',
        name: 'Shyam Sundar Laundry',
        shortDescription:
          'Budget-friendly everyday laundry with reliable ironing—ideal for families balancing tuition classes and long commutes.',
        services: servicesDefault,
      },
      {
        id: 'store-express-bellandur',
        storePageSlug: 'express-laundry-hsr',
        name: 'Express Laundry',
        shortDescription:
          'Faster cycles when your calendar suddenly adds a flight or keynote—subject to fabric safety and partner capacity.',
        services: servicesDefault,
      },
    ],
    pricing: {
      headline: 'Laundry pricing in Bellandur',
      rows: [
        { service: 'Wash & Fold', range: '₹70 – ₹125 per kg' },
        { service: 'Dry Cleaning', range: '₹90 – ₹320 per item' },
        { service: 'Ironing', range: '₹5 – ₹15 per piece' },
      ],
      note: 'ORR societies may see small surcharges for ultra-late-night slots—always confirmed in app.',
    },
    howItWorks: {
      headline: 'How Dhobify works',
      steps: [
        { title: 'Choose store', description: 'Match a partner to your household volume and fabric mix.' },
        { title: 'Schedule pickup', description: 'Pick a slot that respects your society’s gate policy and peak traffic.' },
        { title: 'Clothes cleaned', description: 'Stores process items with the notes you added for stains or delicates.' },
        { title: 'Delivered back', description: 'Delivery aligns with the window you selected—great for WFO days.' },
      ],
    },
    faq: [
      {
        question: 'How much does laundry cost in Bangalore if I live on the ORR?',
        answer:
          'Bellandur generally tracks city-wide bands: wash & fold near ₹70–₹125 per kg and dry cleaning quoted per garment. Premium finishing or rush fees may add to that, but Dhobify shows numbers before you pay.',
      },
      {
        question: 'Is pickup free in Bellandur?',
        answer:
          'Yes, when you meet the Dhobify minimum order value. Smaller trial loads may include a modest pickup fee that is visible at checkout.',
      },
      {
        question: 'Can I get same-day dry cleaning before a flight?',
        answer:
          'Sometimes. Express Laundry and select premium partners may accept rush jobs if the fabric allows. You will see availability and surcharges before confirming.',
      },
      {
        question: 'Do you serve societies near Sarjapur Road?',
        answer:
          'Dhobify is expanding along the ORR corridor; Bellandur listings focus on partners who already understand those access patterns. Mention your tower name in notes so riders find the right gate.',
      },
    ],
  },
}

/**
 * @param {'laundry' | 'dry-cleaning'} variant
 */
export function resolveAreaPage(areaKey, variant = 'laundry') {
  const base = areas[areaKey]
  if (!base) return null
  if (variant === 'laundry') {
    return {
      ...base,
      pageVariant: 'laundry',
      breadcrumbCurrentLabel: `Laundry in ${base.name}`,
    }
  }
  if (variant === 'dry-cleaning') {
    const dc = base.dryCleaning
    if (!dc) return null
    return {
      ...base,
      ...dc,
      pageVariant: 'dry-cleaning',
      breadcrumbCurrentLabel: `Dry cleaning in ${base.name}`,
      stores: base.stores,
      pricing: base.pricing,
      howItWorks: base.howItWorks,
      faq: base.faq,
      cta: base.cta,
      bookPickupHref: base.bookPickupHref,
      bookCtaLabel: base.bookCtaLabel,
      city: base.city,
      name: base.name,
      slug: base.slug,
    }
  }
  return null
}

export function getAreaBySlug(slug) {
  if (!slug) return null
  return areas[slug] || null
}

export function getStoreAnchorId(store) {
  return store?.id || ''
}

/**
 * JSON-LD graph: Organization, WebPage, BreadcrumbList, FAQPage, Service, LocalBusiness per partner.
 */
export function buildAreaJsonLd(area) {
  const pageUrl = `${SITE_ORIGIN}${area.path}`
  const isDry = area.pageVariant === 'dry-cleaning'
  const serviceName = isDry
    ? `Dry cleaning, delicates, and scheduled laundry pickup in ${area.name}`
    : `Laundry, dry cleaning, and scheduled pickup & delivery in ${area.name}`

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: area.breadcrumbCurrentLabel || area.h1,
        item: pageUrl,
      },
    ],
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: area.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const place = {
    '@type': 'Place',
    name: `${area.name}, ${area.city}`,
  }

  const graph = [
    {
      '@id': ORG_SCHEMA_ID,
      '@type': 'Organization',
      name: 'Dhobify',
      url: SITE_ORIGIN,
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: area.title,
      description: area.metaDescription,
      isPartOf: { '@id': ORG_SCHEMA_ID },
      about: serviceName,
    },
    breadcrumb,
    faqPage,
    {
      '@type': 'Service',
      name: serviceName,
      serviceType: isDry
        ? 'Dry cleaning; Delicate garment care; Scheduled pickup and delivery; Ironing referral'
        : 'Wash and fold; Dry cleaning; Ironing; Scheduled laundry pickup and delivery',
      areaServed: place,
      provider: { '@id': ORG_SCHEMA_ID },
      url: pageUrl,
    },
    ...area.stores.map((s) => {
      const storeUrl = s.storePageSlug ? `${SITE_ORIGIN}/store/${s.storePageSlug}` : `${pageUrl}#${s.id}`
      return {
        '@id': `${pageUrl}#${s.id}`,
        '@type': 'LocalBusiness',
        name: s.name,
        description: s.shortDescription,
        url: storeUrl,
        areaServed: place,
        parentOrganization: { '@id': ORG_SCHEMA_ID },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: s.services.map((sv) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: sv.name },
          })),
        },
      }
    }),
  ]

  return { '@context': 'https://schema.org', '@graph': graph }
}
