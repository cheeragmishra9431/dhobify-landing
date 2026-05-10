import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionEyebrow from '../ui/SectionEyebrow'
import { landingContent } from '../../data/landingContent'

const HSR_PATH = '/laundry-in-hsr-layout'
const BELLANDUR_PATH = '/laundry-in-bellandur'
const DC_HSR_PATH = '/dry-cleaning-in-hsr-layout'

function ChevronRight({ className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const areaLinks = [
  { to: HSR_PATH, label: 'Laundry in HSR Layout', hint: 'Stores · pickups · FAQs' },
  { to: BELLANDUR_PATH, label: 'Laundry in Bellandur', hint: 'ORR routing notes' },
  { to: DC_HSR_PATH, label: 'Dry cleaning in HSR Layout', hint: 'Delicates & suits' },
]

/**
 * Homepage SEO editorial block — modern layout, readable type, motion-safe animations.
 */
function HomepageSeoSection() {
  const { homepageSeo } = landingContent
  const { eyebrow, trustPoints } = homepageSeo

  return (
    <Section
      id="book-pickup"
      background="white"
      className="seo-book-pickup scroll-mt-20 relative overflow-hidden border-y border-gray-200/70 !bg-gradient-to-br from-slate-50 via-white to-brand-gold/[0.08]"
    >
      {/* Decorative layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-[min(28%,420px)] -top-[min(18%,200px)] h-[min(560px,90vw)] w-[min(560px,90vw)] rounded-full bg-gradient-to-br from-brand-yellow/[0.22] via-brand-glow-orange/15 to-brand-coral/[0.08] blur-3xl motion-safe:animate-seo-float" />
        <div className="absolute -bottom-[30%] -left-[15%] h-[min(400px,70vw)] w-[min(400px,70vw)] rounded-full bg-gradient-to-tr from-brand-coral/[0.06] via-slate-200/35 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35] motion-safe:opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(17,17,17,0.06) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-warm-orange/40 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="motion-safe:animate-seo-in delay-75 motion-reduce:animate-none">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </div>

        <h2 className="motion-safe:animate-seo-in delay-100 motion-reduce:animate-none mt-2 max-w-[min(100%,42rem)] font-heading text-3xl font-bold tracking-tight text-brand-black sm:text-4xl md:mt-1 md:text-[2.35rem] md:leading-[1.15] lg:text-[2.5rem]">
          Laundry services Bangalore commuters actually finish on time
        </h2>
        <p className="motion-safe:animate-seo-fade delay-200 motion-reduce:animate-none mt-4 max-w-2xl text-base font-medium text-brand-warm-orange/90 md:text-lg">
          Clear choices, honest logistics, and neighbourhood pages built for how you search.
        </p>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-start">
          {/* Prose column */}
          <div className="motion-safe:animate-seo-in delay-150 motion-reduce:animate-none space-y-6 rounded-2xl border border-brand-coral/18 bg-white/50 p-6 shadow-sm shadow-brand-coral/[0.06] ring-1 ring-brand-coral/10 backdrop-blur-[2px] sm:p-8 md:space-y-7">
            <p className="max-w-prose text-[17px] leading-[1.75] text-brand-body-grey md:text-lg md:leading-relaxed">
              When someone types <strong className="font-semibold text-brand-black">laundry near me</strong>, they
              rarely want another tab of random listings—they want a calm decision. Dhobify is a laundry and dry-cleaning
              marketplace built for that moment: see which partner covers your gate, what they charge for wash & fold,
              how they treat dry cleaning Bangalore orders with delicate trims, and when a rider can actually reach you
              during peak traffic.
            </p>
            <p className="max-w-prose text-[17px] leading-[1.75] text-brand-body-grey md:text-lg md:leading-relaxed">
              <strong className="font-semibold text-brand-black">Laundry services Bangalore</strong> experiences often
              break on logistics, not washing. A store might clean beautifully but still leave you stuck carrying double
              bags across ORR during rain. Dhobify keeps the operational layer visible—scheduled{' '}
              <strong className="font-semibold text-brand-black">laundry pickup Bangalore</strong> slots, delivery windows
              you choose, and partner notes that follow your garments from collection to hanger.
            </p>
            <p className="max-w-prose text-[17px] leading-[1.75] text-brand-body-grey md:text-lg md:leading-relaxed">
              <strong className="font-semibold text-brand-black">Dry cleaning Bangalore</strong> searches usually spike
              before events: interviews, weddings, festive weekends. Those loads need solvent discipline, cautious
              pressing, and honest timelines. Listing them through Dhobify means your instructions travel digitally
              alongside the bag, and you can still route bulk cottons through value partners while sending couture trims to
              premium finishers—all without opening five different chats.
            </p>
          </div>

          {/* Sidebar: area card + trust */}
          <div className="flex flex-col gap-6 lg:gap-7">
            <div className="motion-safe:animate-seo-in delay-200 motion-reduce:animate-none group/card relative overflow-hidden rounded-2xl border border-brand-coral/18 bg-white/85 p-1 shadow-[0_20px_50px_-24px_rgba(17,17,17,0.22)] ring-1 ring-brand-coral/12 backdrop-blur-md">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.07] via-transparent to-slate-100/50 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
              <div className="relative rounded-[0.9rem] bg-white/95 p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand-yellow via-brand-warm-orange to-brand-coral shadow-sm shadow-brand-coral/25" />
                  <p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-brand-black/45">
                    Local guides
                  </p>
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-brand-black md:text-2xl">
                  Explore by neighbourhood
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-body-grey sm:text-[15px] sm:leading-relaxed">
                  Deep-dive copy, FAQs, indicative pricing bands, and partner cards live on hyperlocal URLs so Google can
                  match intent precisely.
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 p-0">
                  {areaLinks.map(({ to, label, hint }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gradient-to-r from-gray-50/90 to-white px-4 py-3.5 text-left shadow-sm transition-all duration-300 hover:border-brand-warm-orange/40 hover:shadow-md hover:shadow-brand-coral/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block font-heading text-[15px] font-bold text-brand-black transition-colors group-hover:text-brand-black md:text-base">
                            {label}
                          </span>
                          <span className="mt-0.5 block text-xs text-brand-body-grey/90">{hint}</span>
                        </span>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light-grey/90 text-brand-black transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-yellow group-hover:to-brand-glow-orange group-hover:text-brand-black group-hover:shadow-md group-hover:shadow-brand-coral/15">
                          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li className="rounded-xl border border-dashed border-gray-200/90 bg-slate-50/50 px-4 py-3.5 text-sm leading-relaxed text-brand-body-grey">
                    <span className="font-heading font-bold text-brand-black">Koramangala</span>
                    <span className="block pt-1">
                      Area pages ship next — join the waitlist via{' '}
                      <Link
                        to="/#partner"
                        className="font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-[3px] transition-colors hover:text-brand-body-grey"
                      >
                        partner enquiries
                      </Link>{' '}
                      if you operate there.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <ul
              className="motion-safe:animate-seo-in delay-300 motion-reduce:animate-none grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
              role="list"
            >
              {trustPoints.map((item, i) => (
                <li
                  key={item.title}
                  className={[
                    'motion-safe:animate-seo-in-fast motion-reduce:animate-none rounded-xl border border-gray-200/60 bg-white/70 px-4 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-yellow/35 hover:shadow-md motion-reduce:hover:translate-y-0 sm:min-h-[104px]',
                    i === 0 ? 'delay-300' : i === 1 ? 'delay-[340ms]' : 'delay-[380ms]',
                  ].join(' ')}
                >
                  <p className="font-heading text-sm font-bold text-brand-black">{item.title}</p>
                  <p className="mt-1.5 font-body text-sm leading-snug text-brand-body-grey">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="motion-safe:animate-seo-in delay-200 motion-reduce:animate-none relative mt-12 max-w-4xl space-y-6 border-t border-gray-200/60 pt-10 md:mt-14 md:pt-12">
          <div className="absolute inset-x-0 -top-px mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-brand-glow-orange/45 to-transparent" aria-hidden />
          <p className="text-[17px] leading-[1.75] text-brand-body-grey md:text-lg md:leading-relaxed">
            We also surface dedicated{' '}
            <Link
              to="/store/cleanz24-hsr"
              className="font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-[3px] transition-colors hover:text-brand-black/80"
            >
              Cleanz24
            </Link>
            ,{' '}
            <Link
              to="/store/urbanclean-premium"
              className="font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-[3px] transition-colors hover:text-brand-black/80"
            >
              UrbanClean Premium
            </Link>
            ,{' '}
            <Link
              to="/store/shyam-sundar-hsr"
              className="font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-[3px] transition-colors hover:text-brand-black/80"
            >
              Shyam Sundar Laundry
            </Link>
            , and{' '}
            <Link
              to="/store/express-laundry-hsr"
              className="font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-[3px] transition-colors hover:text-brand-black/80"
            >
              Express Laundry
            </Link>{' '}
            pages so branded searches resolve to factual service lists instead of scraped aggregators repeating the wrong
            phone numbers.
          </p>
          <p className="text-[17px] leading-[1.75] text-brand-body-grey md:text-lg md:leading-relaxed">
            Whether you searched <strong className="font-semibold text-brand-black">laundry in HSR Layout</strong>{' '}
            specifically or the broader Bangalore head terms, Dhobify keeps wording human: short sentences, tangible
            promises, no keyword stuffing—just routes you can crawl, internals you can ship, and a booking path that
            respects mobile bandwidth on slower networks.
          </p>
        </div>

        <div className="motion-safe:animate-seo-in delay-300 motion-reduce:animate-none mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center md:mt-14">
          <Button href="/#book-pickup" variant="primary" size="lg" className="w-full min-h-[52px] shadow-lg shadow-brand-yellow/20 transition hover:shadow-xl sm:w-auto">
            Book Pickup
          </Button>
          <Button href={HSR_PATH} variant="secondary" size="lg" className="w-full min-h-[52px] transition hover:bg-brand-black/5 sm:w-auto">
            Open HSR area guide
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default HomepageSeoSection
