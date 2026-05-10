/**
 * Landing page content – headlines, paragraphs, lists, FAQ
 * Sections import content from this file to avoid hardcoding strings in components.
 * Source: landing-page-content.md
 */

export const landingContent = {
  hero: {
    headline: 'Why Stick to One Laundry Store?',
    subheadline:
      'Tired of random laundry choices? Compare stores in HSR, pick times for pickup and delivery, and get your clothes back when you need them.',
    supportingLine: 'HSR Layout Bengaluru',
    secondaryCtas: ['Become a Partner'],
  },

  problem: {
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
    sectionHeadline: 'Compare. Tap. Done.',
    steps: [
      {
        title: 'Choose Your Store',
        description:
          'Browse and compare laundry stores near you. Check pricing and services before you decide.',
      },
      {
        title: 'Schedule Pickup & Delivery',
        description:
          "Choose collection and return times that work for you—we pick up and bring your clothes back on your schedule.",
      },
      {
        title: 'Get Fresh Clothes Back',
        description:
          'Sit back while your clothes are professionally cleaned and returned in the window you set—often within 24–48 hours unless you choose a different slot.',
      },
    ],
  },

  services: {
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
    sectionHeadline: 'Why Dhobify?',
    items: [
      'Multiple laundry brands in one app',
      'Schedule pickup and delivery when it works for you',
      'Transparent pricing before you book',
      'Hyperlocal focus in HSR Layout',
      'Secure digital payments',
      'Quality-controlled processing',
    ],
    closingLine: 'Laundry, upgraded for modern city life.',
  },

  partner: {
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
      { name: 'storeName', label: 'Store Name', type: 'text', required: true },
      { name: 'area', label: 'Area', type: 'text', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      {
        name: 'monthlyCapacity',
        label: 'Monthly Order Capacity',
        type: 'text',
        required: true,
      },
    ],
  },

  investor: {
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
    sectionHeadline: 'Frequently Asked Questions',
    items: [
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
    headline: 'Ready to Simplify Laundry?',
    subheadline: 'Compare stores. Schedule pickup and delivery. Get it when you need it.',
    listStoreCta: 'List Your Store',
  },

  navbar: {
    navLinks: [],
  },

  footer: {
    about:
      'Dhobify is a hyperlocal laundry marketplace connecting customers with trusted laundry partners in HSR Layout.',
    location: 'Currently serving HSR Layout, Bengaluru.',
    contactEmail: 'support@dhobify.in',
    links: [
      { text: 'Laundry in HSR Layout', href: '/laundry-in-hsr-layout' },
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
