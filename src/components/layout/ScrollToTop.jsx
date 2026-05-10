import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * - Path change without hash: scroll to top of document.
 * - Path or hash change with #section-id: scroll that element into view (in-page and deep links).
 * React Router's <Link to="...#id"> does not always trigger default browser hash scrolling; this
 * effect makes same-page and cross-page hash navigation reliable.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.startsWith('#') ? hash.slice(1) : hash
      if (!id) {
        window.scrollTo(0, 0)
        return
      }
      const scrollToTarget = () => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      scrollToTarget()
      const t = window.setTimeout(scrollToTarget, 0)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
