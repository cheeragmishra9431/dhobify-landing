import InfoPageLayout from '../components/layout/InfoPageLayout'

function RefundPolicy() {
  return (
    <InfoPageLayout
      title="Refund Policy"
      lastUpdated="March 29, 2026"
      seo={{
        title: 'Refund Policy | Dhobify',
        description:
          'Refund and resolution policy for Dhobify laundry and dry cleaning bookings in Bangalore.',
        path: '/refund',
      }}
    >
      <p>
        At Dhobify, we want you to be satisfied with every order. This policy
        outlines when and how refunds are handled.
      </p>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          1. Eligibility for Refunds
        </h2>
        <p className="mt-3">
          You may be eligible for a full or partial refund in the following
          cases:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-brand-black">Order not picked up</strong> —
            If your scheduled pickup was missed and not rescheduled, you will
            receive a full refund of any amount charged.
          </li>
          <li>
            <strong className="text-brand-black">Order not delivered</strong> —
            If your cleaned laundry was not delivered, you will receive a full
            refund.
          </li>
          <li>
            <strong className="text-brand-black">Damaged items</strong> — If
            your garments were damaged during the cleaning process, you may be
            eligible for a partial or full refund based on assessment.
          </li>
          <li>
            <strong className="text-brand-black">Missing items</strong> — If
            items are missing from your returned order, we will investigate and
            issue an appropriate refund.
          </li>
          <li>
            <strong className="text-brand-black">Quality issues</strong> — If
            the cleaning quality is significantly below acceptable standards,
            you may request a re-wash or partial refund.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          2. Non-Refundable Situations
        </h2>
        <p className="mt-3">Refunds are generally not provided for:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Orders cancelled after pickup has been completed</li>
          <li>
            Normal wear and tear or pre-existing damage to garments
          </li>
          <li>Issues not reported within 48 hours of delivery</li>
          <li>
            Dissatisfaction with pricing that was clearly displayed before order
            placement
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          3. How to Request a Refund
        </h2>
        <p className="mt-3">To request a refund:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Contact us via WhatsApp at{' '}
            <a
              href="https://wa.me/916377229112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-black underline hover:text-brand-yellow transition-colors"
            >
              +91 6377229112
            </a>{' '}
            within 48 hours of delivery
          </li>
          <li>Provide your order details and describe the issue</li>
          <li>
            Include photos if applicable (damaged or missing items)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          4. Refund Processing
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Refund requests are reviewed within 2–3 business days.
          </li>
          <li>
            Approved refunds will be processed to your original payment method
            within 5–7 business days.
          </li>
          <li>
            In some cases, we may offer app credits instead of a monetary
            refund, with your consent.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          5. Contact Us
        </h2>
        <p className="mt-3">For any refund-related queries:</p>
        <ul className="mt-3 list-none space-y-2 pl-0">
          <li>
            <strong className="text-brand-black">WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/916377229112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-black underline hover:text-brand-yellow transition-colors"
            >
              +91 6377229112
            </a>
          </li>
          <li>
            <strong className="text-brand-black">Email:</strong>{' '}
            <a
              href="mailto:support@dhobify.in"
              className="text-brand-black underline hover:text-brand-yellow transition-colors"
            >
              support@dhobify.in
            </a>
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  )
}

export default RefundPolicy
