import InfoPageLayout from '../components/layout/InfoPageLayout'

function TermsOfService() {
  return (
    <InfoPageLayout
      title="Terms of Service"
      lastUpdated="March 29, 2026"
      seo={{
        title: 'Terms of Service | Dhobify',
        description:
          'Terms governing use of the Dhobify app and laundry marketplace services in Bangalore.',
        path: '/terms',
      }}
    >
      <p>
        Welcome to Dhobify. By downloading, installing, or using the Dhobify
        mobile application, you agree to be bound by these Terms of Service. If
        you do not agree, please do not use the app.
      </p>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          1. About Dhobify
        </h2>
        <p className="mt-3">
          Dhobify is a mobile platform that connects customers with local
          laundry and dry-cleaning service providers. We act as an intermediary
          to facilitate laundry pickup, cleaning, and delivery services.
        </p>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          2. Eligibility
        </h2>
        <p className="mt-3">
          You must be at least 13 years of age to use Dhobify. By creating an
          account, you confirm that you meet this requirement.
        </p>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          3. Account Registration
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            You register using your phone number and OTP verification.
          </li>
          <li>
            You are responsible for maintaining the security of your account.
          </li>
          <li>
            You must provide accurate and complete information (name, address,
            phone number).
          </li>
          <li>
            You may not create multiple accounts or use another person&apos;s
            account.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          4. Services
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Dhobify connects you with laundry service providers
            (&quot;stores&quot;) in your area.
          </li>
          <li>
            Pricing, availability, and turnaround times are set by individual
            stores and may vary.
          </li>
          <li>
            We strive to ensure accurate pricing displayed in the app, but final
            charges are determined by the store based on the actual items
            received.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          5. Orders and Payments
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Once an order is placed, a pickup will be scheduled at your provided
            address.
          </li>
          <li>
            Payment is collected as per the payment method available in the app.
          </li>
          <li>You agree to pay the full amount for services rendered.</li>
        </ul>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          6. Cancellations
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            You may cancel an order before pickup has been completed.
          </li>
          <li>
            Once your laundry has been picked up, cancellation may not be
            possible, and charges may apply.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          7. User Conduct
        </h2>
        <p className="mt-3">You agree not to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Use the app for any unlawful purpose</li>
          <li>Provide false or misleading information</li>
          <li>Interfere with or disrupt the app&apos;s operation</li>
          <li>Attempt to gain unauthorized access to our systems</li>
        </ul>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          8. Account Deletion
        </h2>
        <p className="mt-3">
          You may delete your account at any time from the Profile screen in the
          app. Upon deletion, all your personal data, order history, and saved
          addresses will be permanently removed from our systems.
        </p>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          9. Limitation of Liability
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Dhobify acts as a platform connecting customers with service
            providers. We are not directly responsible for the quality of
            laundry services provided by stores.
          </li>
          <li>
            We are not liable for any damage, loss, or shrinkage of garments
            during the laundry process, though we will work with the store to
            resolve disputes.
          </li>
          <li>
            Our total liability to you shall not exceed the amount paid for the
            specific order in question.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          10. Modifications
        </h2>
        <p className="mt-3">
          We reserve the right to modify these terms at any time. Continued use
          of the app after changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          11. Governing Law
        </h2>
        <p className="mt-3">
          These terms are governed by the laws of India. Any disputes shall be
          subject to the exclusive jurisdiction of the courts in Rajasthan,
          India.
        </p>
      </section>

      <section>
        <h2 className="border-l-[3px] border-brand-warm-orange pl-4 font-heading text-xl font-semibold text-brand-black md:text-2xl">
          12. Contact Us
        </h2>
        <p className="mt-3">
          For questions about these Terms, contact us at:
        </p>
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

export default TermsOfService
