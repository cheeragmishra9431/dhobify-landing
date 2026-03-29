import InfoPageLayout from '../components/layout/InfoPageLayout'

function PrivacyPolicy() {
  return (
    <InfoPageLayout title="Privacy Policy" lastUpdated="March 29, 2026">
      <p>
        Dhobify (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the
        Dhobify mobile application. This Privacy Policy explains how we collect,
        use, store, and protect your personal information when you use our app.
      </p>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          1. Information We Collect
        </h2>
        <p className="mt-3">
          We collect the following personal information when you use Dhobify:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-brand-black">Phone Number</strong> — Used
            for account creation, login via OTP verification, and order-related
            communication.
          </li>
          <li>
            <strong className="text-brand-black">Name</strong> — Used to
            personalize your experience and identify your account.
          </li>
          <li>
            <strong className="text-brand-black">Delivery Address(es)</strong>{' '}
            — Used to schedule pickups and deliveries for your laundry orders.
          </li>
          <li>
            <strong className="text-brand-black">Order History</strong> —
            Records of your past orders including items, service type, pricing,
            and order status.
          </li>
          <li>
            <strong className="text-brand-black">Payment Information</strong> —
            Payment method details processed through our third-party payment
            gateway. We do not store your full card or UPI details on our
            servers.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          2. How We Use Your Information
        </h2>
        <p className="mt-3">We use your personal information to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Create and manage your account</li>
          <li>Authenticate you via OTP-based login</li>
          <li>Process and fulfill your laundry orders</li>
          <li>Schedule pickups and deliveries to your saved addresses</li>
          <li>Send order status updates and notifications</li>
          <li>Provide customer support</li>
          <li>Improve our app and services</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          3. Data Storage and Security
        </h2>
        <p className="mt-3">
          Your data is stored securely using Supabase, a cloud-hosted database
          platform with industry-standard encryption. We use secure token-based
          authentication and do not store passwords. Access tokens are stored on
          your device using secure storage mechanisms.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          4. Data Sharing
        </h2>
        <p className="mt-3">
          We do not sell, rent, or trade your personal data. We may share your
          information only with:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-brand-black">
              Laundry service partners
            </strong>{' '}
            — Your name, address, and order details are shared with the store
            fulfilling your order.
          </li>
          <li>
            <strong className="text-brand-black">Payment processors</strong> —
            Payment data is handled by third-party payment gateways that comply
            with PCI-DSS standards.
          </li>
          <li>
            <strong className="text-brand-black">Law enforcement</strong> — If
            required by applicable Indian law.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          5. Data Retention
        </h2>
        <p className="mt-3">
          We retain your personal data for as long as your account is active. If
          you delete your account, we will permanently remove your personal data,
          order history, saved addresses, and account information from our
          systems within 30 days.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          6. Your Rights
        </h2>
        <p className="mt-3">You have the right to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Access your personal data through the app&apos;s Profile section
          </li>
          <li>Update your name and address information at any time</li>
          <li>
            Delete your account and all associated data by using the &quot;Delete
            My Account&quot; option in the app&apos;s Profile screen. Upon
            deletion, all your personal data, order history, and saved addresses
            will be permanently removed.
          </li>
          <li>
            Contact us to request a copy of your data or ask any
            privacy-related questions
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          7. Children&apos;s Privacy
        </h2>
        <p className="mt-3">
          Dhobify is not intended for use by anyone under the age of 13. We do
          not knowingly collect data from children.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          8. Changes to This Policy
        </h2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-brand-black md:text-2xl">
          9. Contact Us
        </h2>
        <p className="mt-3">
          If you have any questions about this Privacy Policy, contact us at:
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

export default PrivacyPolicy
