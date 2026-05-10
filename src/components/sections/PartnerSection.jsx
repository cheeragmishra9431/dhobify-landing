import { useState } from 'react'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import InputField from '../ui/InputField'
import SectionEyebrow from '../ui/SectionEyebrow'
import { landingContent } from '../../data/landingContent'
import { supabase } from '../../lib/supabaseClient'

function StatusNotice({ variant, children }) {
  const isOk = variant === 'success'
  return (
    <div
      className={`mt-4 flex gap-3 rounded-lg border px-4 py-3 font-body text-sm leading-snug sm:text-base ${
        isOk
          ? 'border-semantic-success-border bg-semantic-success-bg text-semantic-success'
          : 'border-semantic-error-border bg-semantic-error-bg text-semantic-error'
      }`}
      role={isOk ? 'status' : 'alert'}
    >
      <span className="mt-0.5 shrink-0" aria-hidden>
        {isOk ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </span>
      <span>{children}</span>
    </div>
  )
}

function PartnerSection() {
  const { eyebrow, sectionHeadline, description, benefits, cta, formFields } =
    landingContent.partner

  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  )
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    setStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const { error } = await supabase.from('partner_requests').insert({
      store_name: formData.storeName,
      area: formData.area,
      phone: formData.phone,
      monthly_capacity: formData.monthlyCapacity,
    })

    if (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
      return
    }

    setStatus('success')
    setFormData(formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}))
  }

  return (
    <Section id="partner" background="grey" className="scroll-mt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              {sectionHeadline}
            </h2>
            <p className="mt-5 font-body text-base text-brand-body-grey leading-relaxed sm:mt-6 sm:text-lg">
              {description}
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 font-body text-base text-brand-black"
                >
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-yellow ring-2 ring-brand-yellow/35"
                    aria-hidden
                  />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-card border border-gray-200 bg-white p-5 shadow-md sm:p-7 md:p-8"
            noValidate
          >
            <p className="font-heading text-lg font-bold text-brand-black">Partner application</p>
            <p className="mt-1 font-body text-sm text-brand-body-grey">
              Short form — we usually reply within a few business days.
            </p>
            <div className="mt-6 space-y-5">
              {formFields.map((field) => (
                <InputField
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  hint={field.hint}
                  type={field.type}
                  required={field.required}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ))}
            </div>
            {status === 'success' && (
              <StatusNotice variant="success">
                Thanks — we&apos;ve received your details and we&apos;ll get back to you soon.
              </StatusNotice>
            )}
            {status === 'error' && <StatusNotice variant="error">{errorMessage}</StatusNotice>}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-6 w-full min-h-[48px] sm:min-h-[44px]"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : cta}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default PartnerSection
