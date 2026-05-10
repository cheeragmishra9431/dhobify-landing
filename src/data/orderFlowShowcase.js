/**
 * Order-flow showcase images live in /public/order-flow/ (deployed as static assets).
 */
export const orderFlowSteps = [
  {
    id: 'login',
    label: 'Login',
    caption: 'Enter your phone and continue with OTP—or skip to browse.',
    image: '/order-flow/01-login.png',
  },
  {
    id: 'home',
    label: 'Home',
    caption: 'See promos, active orders, and stores near you.',
    image: '/order-flow/02-home.png',
  },
  {
    id: 'stores',
    label: 'Stores',
    caption: 'Compare laundry partners in your area.',
    image: '/order-flow/03-stores.png',
  },
  {
    id: 'store',
    label: 'Store detail',
    caption: 'Menu, offers, and rates before you book.',
    image: '/order-flow/04-store-detail.png',
  },
  {
    id: 'pickup',
    label: 'Schedule pickup',
    caption: 'Pick a day and slot that fit your routine.',
    image: '/order-flow/05-pickup-slot.png',
  },
  {
    id: 'checkout',
    label: 'Checkout',
    caption: 'Address, coupon, and fee breakdown—then confirm.',
    image: '/order-flow/06-checkout.png',
  },
  {
    id: 'delivery',
    label: 'Track & deliver',
    caption: 'When it is ready, schedule doorstep delivery.',
    image: '/order-flow/07-delivery.png',
  },
]

export const orderFlowShowcaseCopy = {
  eyebrow: 'Inside the app',
  title: 'From login to doorstep in a few taps',
  subtitle: 'Real app screens—browse partners, book, pay, and schedule delivery.',
}
