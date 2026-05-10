/**
 * Landing page content – headlines, paragraphs, lists, FAQ
 * Sections import content from this file to avoid hardcoding strings in components.
 * Source: landing-page-content.md
 */

export const landingContent = {
  hero: {
    headline: 'Compare the Best Laundry & Dry Cleaning Services in Bangalore',
    subheadline:
      'Book pickup & delivery from trusted laundry stores near you. Compare laundry services Bangalore residents rely on—with clear pricing before you confirm.',
    supportingLine: 'HSR Layout · Bellandur · Koramangala · Bengaluru',
    primaryCta: { label: 'Book Pickup', href: '#book-pickup' },
    secondaryCta: { label: 'I run a laundry store', href: '#partner' },
  },

  homepageSeo: {
    eyebrow: 'For Bengaluru',
    trustPoints: [
      {
        title: 'Verified partners',
        body: 'We onboard stores against clear service and handling standards.',
      },
      {
        title: 'Pricing upfront',
        body: 'See indicative rates and offers before you confirm an order.',
      },
      {
        title: 'City rollout',
        body: 'HSR Layout and Bellandur live next; Koramangala expansion follows the same playbook.',
      },
    ],
  },

  problem: {
    eyebrow: 'The friction',
    sectionHeadline: 'Still Managing Laundry the Old Way?',
    painPoints: [
      'No time to wash & iron every week',
      'No doorstep pickup from local stores',
      'No price transparency',
      'No order tracking or updates',
    ],
    transitionStatement:
      'Dhobify connects you to verified laundry partners with doorstep pickup, the option to schedule your delivery, transparent pricing, and reliable handoffs — all in one app.',
  },

  howItWorks: {
    eyebrow: 'How it works',
    sectionHeadline: 'From compare to clean clothes—in four steps',
    steps: [
      {
        title: 'Choose store',
        description:
          'Browse Cleanz24, UrbanClean Premium, Shyam Sundar Laundry, Express Laundry, and other vetted partners. See services and indicative rates before you book.',
      },
      {
        title: 'Schedule pickup',
        description:
          'Pick collection times that suit your lobby or gate policies. Laundry pickup Bangalore orders stay transparent—slot changes surface in-app where possible.',
      },
      {
        title: 'Clothes cleaned',
        description:
          'Your bag is processed with the handling notes you added for stains or delicates—from everyday wash & fold to dry cleaning Bangalore orders that need specialist care.',
      },
      {
        title: 'Delivered back',
        description:
          'Choose a return window so someone is home for pressed shirts, bedding, or dry-cleaned coats. Most routes finish within 24–48 hours unless you pick a different slot.',
      },
    ],
  },

  services: {
    eyebrow: 'What we handle',
    sectionHeadline: 'Everything Your Laundry Needs',
    servicesList: [
      { name: 'Wash & Fold', icon: 'shirt' },
      { name: 'Wash & Iron', icon: 'iron' },
      { name: 'Dry Cleaning', icon: 'droplets' },
      { name: 'Steam Iron', icon: 'steam' },
    ],
    highlightLine: 'Free pickup on orders above ₹300. Schedule your delivery at checkout when you book.',
  },

  benefits: {
    eyebrow: 'Your edge',
    sectionHeadline: 'Why Dhobify?',
    items: [
      'Multiple laundry brands in one app',
      'Schedule pickup and delivery when it works for you',
      'Transparent pricing before you book',
      'Hyperlocal focus across HSR Layout, Bellandur, and expanding Koramangala corridors',
      'Secure digital payments',
      'Quality-controlled processing',
    ],
    closingLine: 'Laundry, upgraded for modern city life.',
  },

  partner: {
    eyebrow: 'For laundry owners',
    sectionHeadline: 'Own a Laundry Shop? Grow With Dhobify.',
    description:
      'Join Dhobify and increase your daily orders while we handle customer acquisition, delivery coordination, and digital operations.',
    benefits: [
      'Increase order volume',
      'Delivery handled by Dhobify',
      'Tech-enabled billing system',
      'Marketing and customer reach',
    ],
    cta: 'Become a Partner',
    formFields: [
      {
        name: 'storeName',
        label: 'Store name',
        hint: 'As on your shop board or Google Maps listing',
        type: 'text',
        required: true,
      },
      {
        name: 'area',
        label: 'Primary area',
        hint: 'e.g. HSR Layout Sector 2',
        type: 'text',
        required: true,
      },
      {
        name: 'phone',
        label: 'WhatsApp or phone',
        hint: 'We’ll reach out on this number',
        type: 'tel',
        required: true,
      },
      {
        name: 'monthlyCapacity',
        label: 'Rough monthly orders',
        hint: 'Approximate orders you process today',
        type: 'text',
        required: true,
      },
    ],
  },

  investor: {
    eyebrow: 'Investors',
    sectionHeadline: 'Built for Hyperlocal Scale',
    visionPoints: [
      'Launching in HSR Layout in MAY 2026',
      'Targeting 500+ households in Phase 1',
      'Asset-light marketplace model',
      'Designed to expand pincode by pincode',
    ],
    closingStatement:
      'Dhobify is building the operating layer for hyperlocal laundry services.',
  },

  faq: {
    eyebrow: 'Questions',
    sectionHeadline: 'Frequently Asked Questions',
    items: [
      {
        id: 'cost-bangalore',
        question: 'How much does laundry cost in Bangalore?',
        answer:
          'Wash & fold typically lands around ₹65–₹125 per kg depending on the partner and finishing, while dry cleaning is quoted per garment after fabric checks. Dhobify surfaces those bands on each area and store page, then locks the final amount at checkout.',
      },
      {
        id: 'same-day',
        question: 'Do you offer same-day laundry or dry cleaning?',
        answer:
          'Select partners like Express Laundry may offer faster cycles when fabrics and weather allow. Availability shows up before you pay so you are never guessing about rush surcharges.',
      },
      {
        id: 'min-order',
        question: 'What is the minimum order amount?',
        answer:
          'There is no strict minimum, but free pickup is available on orders above ₹300.',
      },
      {
        id: 'free-pickup',
        question: 'Is pickup really free?',
        answer:
          'Yes, pickup is free for orders above ₹300 within our service area.',
      },
      {
        id: 'delivery-time',
        question: 'How long does delivery take?',
        answer:
          'Most orders are delivered within 24–48 hours, depending on the store and the slots you select. You can schedule your return delivery when you place your order.',
      },
      {
        id: 'schedule-delivery',
        question: 'Can I pick when my clothes are delivered?',
        answer:
          'Yes. When you book, you can choose a delivery window (based on the partner’s availability) so you are home—or pick a time that fits your routine.',
      },
      {
        id: 'damaged-clothes',
        question: 'What if clothes are damaged?',
        answer:
          'All partner stores follow professional cleaning standards. In case of issues, our support team will assist you promptly.',
      },
      {
        id: 'different-stores',
        question: 'Can I choose different stores for different services?',
        answer:
          'Yes. You can compare and select stores based on your needs for each order.',
      },
    ],
  },

  finalCTA: {
    eyebrow: 'Get started',
    headline: 'Ready to Simplify Laundry?',
    subheadline: 'Compare stores. Schedule pickup and delivery. Get it when you need it.',
    listStoreCta: 'List Your Store',
  },

  navbar: {
    navLinks: [],
  },

  footer: {
    about:
      'Dhobify is a laundry and dry-cleaning marketplace in Bangalore—compare stores, book pickup, and schedule delivery from one app.',
    location: 'Serving HSR Layout, Bellandur, Koramangala (rolling out), and nearby Bengaluru neighbourhoods.',
    contactEmail: 'support@dhobify.in',
    links: [
      { text: 'Laundry in HSR Layout', href: '/laundry-in-hsr-layout' },
      { text: 'Laundry in Bellandur', href: '/laundry-in-bellandur' },
      { text: 'Dry cleaning in HSR Layout', href: '/dry-cleaning-in-hsr-layout' },
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Service', href: '/terms' },
      {
        text: 'Delete saved data',
        href: '/data-deletion',
        native: true,
      },
      { text: 'Account deletion', href: '/account-deletion', native: true },
      { text: 'Refund Policy', href: '/refund' },
      { text: 'Support', href: '/support' },
    ],
  },
}
