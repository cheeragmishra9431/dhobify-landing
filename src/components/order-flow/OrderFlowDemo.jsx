import { useCallback, useEffect, useState } from 'react'
import { orderFlowSteps } from '../../data/orderFlowShowcase'

export const ORDER_FLOW_AUTO_MS = 4800

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
 * iPhone-frame crossfade carousel for order-flow screenshots (public/order-flow/*.png).
 * @param {{ variant?: 'default' | 'hero' }} props
 */
function OrderFlowDemo({ variant = 'default' }) {
  const isHero = variant === 'hero'
  const reducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [broken, setBroken] = useState(() =>
    Object.fromEntries(orderFlowSteps.map((s) => [s.id, false]))
  )

  const go = useCallback((i) => {
    setIndex(((i % orderFlowSteps.length) + orderFlowSteps.length) % orderFlowSteps.length)
  }, [])

  useEffect(() => {
    if (reducedMotion || paused) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % orderFlowSteps.length)
    }, ORDER_FLOW_AUTO_MS)
    return () => window.clearInterval(id)
  }, [reducedMotion, paused])

  const step = orderFlowSteps[index]
  const phoneMax = isHero ? 'max-w-[min(100%,260px)]' : 'max-w-[min(100%,280px)]'
  const captionMt = isHero ? 'mt-7' : 'mt-6'

  return (
    <div
      className="flex w-full flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={`relative w-full ${phoneMax}`}>
        <div
          className="pointer-events-none absolute left-0 top-[26%] z-20 flex -translate-x-[2px] flex-col gap-2"
          aria-hidden
        >
          <div className="h-9 w-[3px] rounded-l-[3px] bg-[#3a3a3c] shadow-[inset_-1px_0_0_rgba(0,0,0,0.35)]" />
          <div className="h-9 w-[3px] rounded-l-[3px] bg-[#3a3a3c] shadow-[inset_-1px_0_0_rgba(0,0,0,0.35)]" />
        </div>
        <div className="pointer-events-none absolute right-0 top-[22%] z-20 translate-x-[2px]" aria-hidden>
          <div className="h-16 w-[3px] rounded-r-[3px] bg-[#3a3a3c] shadow-[inset_1px_0_0_rgba(255,255,255,0.06)]" />
        </div>

        <div
          className={`relative rounded-[2.75rem] border border-[#2c2c2e] bg-[#1c1c1e] p-[9px] pb-[10px] pt-[16px] shadow-[0_28px_64px_-28px_rgba(0,0,0,0.48),0_0_0_1px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_36px_72px_-30px_rgba(0,0,0,0.52),0_0_0_1px_rgba(214,71,58,0.15),inset_0_1px_0_0_rgba(255,255,255,0.12)] motion-reduce:hover:translate-y-0 ${isHero ? 'ring-1 ring-[#d6473a]/10' : ''}`}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[10px] z-10 h-[25px] w-[min(32%,84px)] -translate-x-1/2 rounded-[12px] bg-black shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05)]"
            aria-hidden
          />
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.05rem] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
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
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                      decoding="async"
                      draggable={false}
                      width={473}
                      height={1024}
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
              className="pointer-events-none absolute inset-0 rounded-[2.05rem] shadow-[inset_0_1px_3px_rgba(255,255,255,0.06),inset_0_-2px_4px_rgba(0,0,0,0.22)]"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className={`w-full max-w-md text-center ${captionMt}`}>
        <div
          aria-live="polite"
          aria-atomic="true"
          className={isHero ? 'rounded-xl bg-brand-light-grey/40 px-4 py-3.5 ring-1 ring-black/[0.04]' : ''}
        >
          <p
            className={`font-heading text-brand-black ${isHero ? 'text-base font-semibold md:text-lg' : 'text-lg font-bold md:text-xl'}`}
          >
            {isHero && (
              <span className="mr-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6473a] align-middle" aria-hidden />
            )}
            {step.label}
          </p>
          <p className={`mt-1.5 font-body text-brand-body-grey ${isHero ? 'text-sm leading-relaxed md:text-[0.9375rem]' : 'mt-2 text-sm md:text-base'}`}>
            {step.caption}
          </p>
        </div>

        <div
          className={`mt-4 flex max-w-full snap-x snap-mandatory gap-1.5 touch-pan-x overscroll-x-contain overflow-x-auto px-1 pb-0.5 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-2 sm:touch-auto sm:overscroll-auto sm:overflow-visible ${isHero ? 'md:mt-5' : 'mt-5 -mx-2 px-2 pb-1'}`}
          role="tablist"
          aria-label="Order flow steps"
        >
          {orderFlowSteps.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`min-h-[40px] shrink-0 snap-center rounded-full px-3 py-1.5 font-heading text-[10px] font-semibold transition-all duration-300 sm:min-h-[44px] sm:px-3.5 sm:py-2 sm:text-xs ${
                i === index
                  ? 'bg-brand-yellow text-brand-black shadow-sm shadow-brand-yellow/20 ring-2 ring-[#d6473a]/35 ring-offset-2 ring-offset-white'
                  : 'bg-gray-50/90 text-brand-body-grey ring-1 ring-gray-200/90 hover:bg-[rgba(214,71,58,0.06)] hover:text-brand-black hover:ring-[rgba(214,71,58,0.2)]'
              }`}
              onClick={() => go(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderFlowDemo
