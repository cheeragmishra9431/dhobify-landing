import InfoPageLayout from '../components/layout/InfoPageLayout'

function Support() {
  return (
    <InfoPageLayout title="Contact Support">
      <p className="text-lg">
        We&apos;re here to help! Reach out to us through any of the following
        channels:
      </p>

      <section className="rounded-card border border-gray-200 bg-brand-light-grey p-6 md:p-8">
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          WhatsApp (Preferred)
        </h2>
        <p className="mt-3">
          Chat with us on WhatsApp for the fastest response:
        </p>
        <a
          href="https://wa.me/916377229112"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-heading text-sm font-semibold text-white shadow-sm hover:bg-[#1da851] transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
        <p className="mt-3 text-sm text-brand-body-grey">
          Available Monday–Saturday, 9:00 AM – 8:00 PM IST
        </p>
      </section>

      <section className="rounded-card border border-gray-200 bg-brand-light-grey p-6 md:p-8">
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          Email
        </h2>
        <a
          href="mailto:support@dhobify.in"
          className="mt-3 inline-block text-lg font-medium text-brand-black underline hover:text-brand-yellow transition-colors"
        >
          support@dhobify.in
        </a>
        <p className="mt-2 text-sm text-brand-body-grey">
          We respond to emails within 24 hours.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          Common Questions
        </h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: 'How do I track my order?',
              a: 'Open the Dhobify app and check your active orders on the home screen.',
            },
            {
              q: 'How do I change my delivery address?',
              a: 'Go to Profile → Addresses to add or edit your saved addresses.',
            },
            {
              q: 'Can I schedule when my laundry is picked up and delivered?',
              a: 'Yes. When you book, you can choose pickup and delivery time slots based on partner availability. You can reschedule from your order details if something changes.',
            },
            {
              q: 'How do I cancel an order?',
              a: 'You can cancel an order before pickup. Contact us on WhatsApp for assistance.',
            },
            {
              q: 'How do I delete my account?',
              a: 'Go to Profile → Delete My Account. All your data will be permanently removed.',
            },
            {
              q: 'How do I request a refund?',
              a: 'Contact us on WhatsApp within 48 hours of delivery with your order details.',
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-lg border border-gray-200 bg-white p-4 md:p-5"
            >
              <h3 className="font-heading text-base font-semibold text-brand-black">
                {item.q}
              </h3>
              <p className="mt-1.5 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </InfoPageLayout>
  )
}

export default Support
