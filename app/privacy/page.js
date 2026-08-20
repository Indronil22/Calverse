// app/privacy/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for theCalculate, including information about calculators, cookies, advertising, analytics, and contact information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-16 text-muted leading-relaxed">
        <h1 className="text-3xl font-extrabold mb-4 text-fg">
          Privacy Policy
        </h1>

        <p className="text-sm mb-8">
          Last updated: August 2026
        </p>

        <div className="space-y-7">

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              1. Introduction
            </h2>

            <p>
              Welcome to theCalculate. We respect your privacy and are committed
              to being transparent about how information may be handled when
              you use our website and calculators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              2. Information We Collect
            </h2>

            <p>
              theCalculate does not require users to create an account to use its
              calculators. We generally do not collect or store the numbers
              or values entered into our calculators. Calculations are
              primarily performed locally in your web browser.
            </p>

            <p className="mt-3">
              If you contact us through our Contact page, we may receive
              information such as your name, email address, subject and
              message. This information is used to respond to your enquiry,
              investigate issues and improve theCalculate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              3. Calculator Data
            </h2>

            <p>
              Most calculators on theCalculate process the information you enter
              directly in your browser. We do not intentionally store your
              calculator inputs on our servers.
            </p>

            <p className="mt-3">
              However, users should avoid entering sensitive personal,
              financial or other confidential information into calculator
              fields unless it is necessary for the calculation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              4. Cookies
            </h2>

            <p>
              theCalculate may use cookies and similar technologies to provide
              website functionality, remember certain preferences, understand
              website usage and support advertising services.
            </p>

            <p className="mt-3">
              You can manage or disable cookies through your browser settings.
              Disabling certain cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              5. Advertising
            </h2>

            <p>
              theCalculate may display advertisements provided by third-party
              advertising services, including Google AdSense.
            </p>

            <p className="mt-3">
              Advertising providers may use cookies or similar technologies
              to display, personalize, measure or improve advertisements.
              These providers may collect information about your visits to
              theCalculate and other websites in accordance with their own
              privacy policies.
            </p>

            <p className="mt-3">
              theCalculate does not directly control the information collected
              by third-party advertising providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              6. Analytics
            </h2>

            <p>
              We may use analytics services to understand how visitors use
              theCalculate. Analytics information can help us identify popular
              calculators, improve website performance and understand general
              traffic patterns.
            </p>

            <p className="mt-3">
              Analytics services may collect information such as pages
              visited, browser type, device information, approximate location,
              referring pages and general usage information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              7. Contact Form
            </h2>

            <p>
              If you submit a message through our Contact page, the
              information you provide may include your name, email address,
              subject and message.
            </p>

            <p className="mt-3">
              We use this information only for purposes such as responding to
              your message, providing support, addressing reported problems
              and considering suggestions.
            </p>

            <p className="mt-3">
              Our contact form may use a third-party email delivery service
              to deliver messages to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              8. Third-Party Services
            </h2>

            <p>
              theCalculate may use third-party services for website hosting,
              email delivery, analytics, advertising and other technical
              functions.
            </p>

            <p className="mt-3">
              These third-party services may process information according to
              their own terms and privacy policies. We recommend reviewing
              their respective policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              9. External Links
            </h2>

            <p>
              theCalculate may contain links to external websites or services.
              We are not responsible for the privacy practices, content or
              security of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              10. Data Security
            </h2>

            <p>
              We take reasonable measures to protect information that is
              handled through theCalculate. However, no method of transmission
              over the internet or method of electronic storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              11. Children's Privacy
            </h2>

            <p>
              theCalculate is a general-purpose website and is not specifically
              directed toward children. We do not knowingly request personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              12. Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time as theCalculate
              develops, new services are introduced, or applicable
              requirements change. Any updated version will be published on
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-2">
              13. Contact Us
            </h2>

            <p>
              If you have any questions about this Privacy Policy or how
              theCalculate handles information, please visit our{' '}
              <a
                href="/contact"
                className="text-purple-400 hover:text-purple-300 hover:underline"
              >
                Contact page
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}