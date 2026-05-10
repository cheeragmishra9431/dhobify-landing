import { useEffect } from 'react'

const SITE_ORIGIN = 'https://www.dhobify.in'

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
  if (!existing) {
    const el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', href)
}

/**
 * Client-side document head for SPA SEO (title, description, Open Graph, canonical).
 * Crawlers that execute JavaScript (including Google) will see updated values.
 */
function SeoHead({ title, description, path, noIndex = false }) {
  const canonical = path != null ? `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}` : null

  useEffect(() => {
    if (title) {
      document.title = title
    }
    if (noIndex) {
      setMetaByName('robots', 'noindex, nofollow')
      setLinkCanonical(null)
    } else {
      setMetaByName('robots', 'index, follow')
      if (canonical) {
        setLinkCanonical(canonical)
        setPropertyMeta('og:url', canonical)
      }
    }
    if (description) {
      setMetaByName('description', description)
    }
    if (title) {
      setPropertyMeta('og:title', title)
    }
    if (description) {
      setPropertyMeta('og:description', description)
    }
    setPropertyMeta('og:type', 'website')
    setPropertyMeta('og:locale', 'en_IN')
  }, [title, description, canonical, noIndex])

  return null
}

export default SeoHead
export { SITE_ORIGIN }
