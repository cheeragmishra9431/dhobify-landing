/** Site-wide SEO and conversion defaults (update WhatsApp for your business number). */
export const SITE_ORIGIN = 'https://www.dhobify.in'

export const DEFAULT_SITE_TITLE = 'Dhobify | Laundry & Dry Cleaning Marketplace in Bangalore'

export const DEFAULT_META_DESCRIPTION =
  'Compare laundry and dry cleaning in Bangalore. Book pickup and delivery from trusted stores in HSR Layout, Bellandur, Koramangala and nearby areas with Dhobify.'

/** Served from `/public` — duplicated from hero artwork for stable social crawler URLs. */
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-default.jpg`

/** E.164 digits only (matches Support page). Update if your business number changes. */
export const WHATSAPP_PHONE_DIGITS = '916377229112'

export function getWhatsAppBookingUrl(message = "Hi Dhobify — I'd like to book laundry pickup in Bangalore.") {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${text}`
}
