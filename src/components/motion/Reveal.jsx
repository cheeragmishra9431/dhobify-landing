import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-triggered fade / lift (IntersectionObserver). Respects prefers-reduced-motion.
 * Inspired by common product-site motion patterns — customised for Dhobify, not a clone of any third-party site.
 */
function Reveal({ children, className = '', delay = 0, rootMargin = '-10%', threshold = 0.06 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: `0px 0px ${rootMargin} 0px`, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return (
    <div
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`reveal-scope ${visible ? 'reveal-scope--visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}

export default Reveal
