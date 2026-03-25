import { useState } from 'react'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import InputField from '../ui/InputField'
import { landingContent } from '../../data/landingContent'
import { supabase } from '../../lib/supabaseClient'

function PartnerSection() {
  const { sectionHeadline, description, benefits, cta, formFields } =
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
    <Section id="partner" background="grey" className="scroll-mt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Content column */}
          <div>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              {sectionHeadline}
            </h2>
            <p className="mt-6 font-body text-lg text-brand-body-grey leading-relaxed">
              {description}
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 font-body text-base text-brand-black"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow"
                    aria-hidden
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Form column */}
          <form
            onSubmit={handleSubmit}
            className="rounded-card border border-gray-200 bg-white p-6 shadow-sm lg:p-8"
          >
            <div className="space-y-4">
              {formFields.map((field) => (
                <InputField
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  required={field.required}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ))}
            </div>
            {status === 'success' && (
              <p className="mt-4 font-body text-base text-green-600" role="status">
                Thanks! We&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 font-body text-base text-red-600" role="alert">
                {errorMessage}
              </p>
            )}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting…' : cta}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default PartnerSection
