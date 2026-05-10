import { useEffect } from 'react'
import {
  SITE_ORIGIN,
  DEFAULT_SITE_TITLE,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_OG_IMAGE,
} from './seoConstants'

function setMetaByName(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setPropertyMeta(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkCanonical(href) {
  const existing = document.querySelector('link[rel="canonical"]')
  if (!href) {
    existing?.remove()
    return
  }
  let el = existing
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setMetaByPropertyName(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Client-side document head for SPA SEO (title, description, Open Graph, Twitter, canonical, robots).
 * Crawlers that execute JavaScript (including Google) will see updated values.
 */
function SeoHead({
  title = DEFAULT_SITE_TITLE,
  description = DEFAULT_META_DESCRIPTION,
  path,
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}) {
  const canonical =
    path != null ? `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}` : null

  useEffect(() => {
    document.title = title

    if (noIndex) {
      setMetaByName('robots', 'noindex, nofollow')
      setLinkCanonical(null)
    } else {
      setMetaByName('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
      if (canonical) {
        setLinkCanonical(canonical)
        setPropertyMeta('og:url', canonical)
      } else {
        setLinkCanonical(null)
      }
    }

    setMetaByName('description', description)

    setPropertyMeta('og:title', title)
    setPropertyMeta('og:description', description)
    setPropertyMeta('og:type', ogType)
    setPropertyMeta('og:site_name', 'Dhobify')
    setPropertyMeta('og:locale', 'en_IN')
    setPropertyMeta('og:image', ogImage)
    setPropertyMeta('og:image:alt', 'Dhobify — laundry and dry cleaning in Bangalore')

    setMetaByPropertyName('twitter:card', 'summary_large_image')
    setMetaByPropertyName('twitter:title', title)
    setMetaByPropertyName('twitter:description', description)
    setMetaByPropertyName('twitter:image', ogImage)
  }, [title, description, canonical, noIndex, ogImage, ogType])

  return null
}

export default SeoHead
export { SITE_ORIGIN }
