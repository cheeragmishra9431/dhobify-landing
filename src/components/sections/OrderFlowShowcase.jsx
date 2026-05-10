import { useCallback, useEffect, useState } from 'react'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { orderFlowSteps, orderFlowShowcaseCopy } from '../../data/orderFlowShowcase'

const AUTO_MS = 4800

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return reduced
}

/**
 * Auto-playing crossfade between order-flow screenshots (see orderFlowShowcase.js).
 * Place PNGs in public/order-flow/ — same aspect ratio (e.g. iPhone capture) looks best.
 */
function OrderFlowShowcase() {
  const reducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [broken, setBroken] = useState(() => Object.fromEntries(orderFlowSteps.map((s) => [s.id, false])))

  const go = useCallback((i) => {
    setIndex(((i % orderFlowSteps.length) + orderFlowSteps.length) % orderFlowSteps.length)
  }, [])

  useEffect(() => {
    if (reducedMotion || paused) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % orderFlowSteps.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [reducedMotion, paused])

  const step = orderFlowSteps[index]

  return (
    <Section id="order-flow" background="grey" className="scroll-mt-20 border-y border-gray-200/80">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>{orderFlowShowcaseCopy.eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
            {orderFlowShowcaseCopy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-brand-body-grey md:text-lg">
            {orderFlowShowcaseCopy.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-10 md:mt-14" delay={80}>
          <div
            className="mx-auto flex max-w-lg flex-col items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {/* Device frame — matches hero phone feel */}
            <div className="relative w-full max-w-[min(100%,300px)]">
              <div
                className="pointer-events-none absolute left-0 top-[26%] z-20 flex -translate-x-[2px] flex-col gap-2"
                aria-hidden
              >
                <div className="h-9 w-[3px] rounded-l-[3px] bg-[#3a3a3c] shadow-[inset_-1px_0_0_rgba(0,0,0,0.35)]" />
                <div className="h-9 w-[3px] rounded-l-[3px] bg-[#3a3a3c] shadow-[inset_-1px_0_0_rgba(0,0,0,0.35)]" />
              </div>
              <div
                className="pointer-events-none absolute right-0 top-[22%] z-20 translate-x-[2px]"
                aria-hidden
              >
                <div className="h-16 w-[3px] rounded-r-[3px] bg-[#3a3a3c] shadow-[inset_1px_0_0_rgba(255,255,255,0.06)]" />
              </div>

              <div className="relative rounded-[2.85rem] border border-[#2c2c2e] bg-[#1c1c1e] p-[10px] pb-[11px] pt-[18px] shadow-[0_36px_72px_-20px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.12)]">
                <div
                  className="pointer-events-none absolute left-1/2 top-[11px] z-10 h-[27px] w-[min(34%,88px)] -translate-x-1/2 rounded-[13px] bg-black shadow-[inset_0_-1px_2px_rgba(255,255,255,0.06)]"
                  aria-hidden
                />
                <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.2rem] bg-[#0a0a0a]">
                  {orderFlowSteps.map((s, i) => {
                    const active = i === index
                    const showFallback = broken[s.id]
                    return (
                      <div
                        key={s.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          active ? 'z-[1] opacity-100' : 'z-0 opacity-0'
                        }`}
                        aria-hidden={!active}
                      >
                        {!showFallback ? (
                          <img
                            src={s.image}
                            alt={active ? `${s.label}: ${s.caption}` : ''}
                            className="h-full w-full object-cover object-top"
                            loading={i === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            draggable={false}
                            onError={() => setBroken((prev) => ({ ...prev, [s.id]: true }))}
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-brand-light-grey to-gray-200 px-6 text-center">
                            <span className="font-heading text-4xl font-bold text-brand-black/20">{i + 1}</span>
                            <span className="font-heading text-sm font-bold text-brand-black">{s.label}</span>
                            <span className="text-xs text-brand-body-grey">Add {s.image.replace(/^\//, '')}</span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[2.2rem] shadow-[inset_0_1px_3px_rgba(255,255,255,0.06),inset_0_-2px_4px_rgba(0,0,0,0.25)]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 w-full max-w-md text-center">
              <div aria-live="polite" aria-atomic="true">
                <p className="font-heading text-lg font-bold text-brand-black md:text-xl">{step.label}</p>
                <p className="mt-2 font-body text-sm text-brand-body-grey md:text-base">{step.caption}</p>
              </div>

              <div
                className="mt-6 -mx-2 flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto px-2 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible"
                role="tablist"
                aria-label="Order flow steps"
              >
                {orderFlowSteps.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    className={`min-h-[44px] shrink-0 snap-center rounded-full px-3.5 py-2 font-heading text-[11px] font-semibold transition-all duration-300 sm:px-4 sm:text-sm ${
                      i === index
                        ? 'bg-brand-yellow text-brand-black shadow-md shadow-brand-yellow/20'
                        : 'bg-white text-brand-body-grey ring-1 ring-gray-200 hover:bg-brand-light-grey'
                    }`}
                    onClick={() => go(i)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

export default OrderFlowShowcase
