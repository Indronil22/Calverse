// app/about/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About',
  description:
    'Learn more about theCalculate, a free collection of practical online calculators for everyday calculations.',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold mb-4 text-fg">
          About theCalculate
        </h1>

        <div className="space-y-7 text-muted leading-relaxed">

          <p>
            theCalculate is a free collection of practical online calculators
            designed to make everyday calculations simple, fast and
            accessible.
          </p>

          <p>
            From financial and student calculations to vehicle, health,
            daily-life and India-specific tools, theCalculate brings useful
            calculators together in one place.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-fg mb-3">
              Our Goal
            </h2>

            <p>
              Our goal is simple: make calculations easier without requiring
              complicated software, spreadsheets or registrations. You can
              choose a calculator, enter the required values and get your
              result instantly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-fg mb-3">
              What You Can Calculate
            </h2>

            <p className="mb-3">
              theCalculate provides calculators across several categories,
              including:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Money and finance</li>
              <li>Student and academic calculations</li>
              <li>Vehicle and travel calculations</li>
              <li>Daily-life calculations</li>
              <li>India-specific financial and salary tools</li>
              <li>Health and fitness calculations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-fg mb-3">
              Simple and Fast
            </h2>

            <p>
              theCalculate is designed with simplicity in mind. Our calculators
              are built to provide results quickly with a clean interface
              that works across desktop and mobile devices.
            </p>

            <p className="mt-3">
              Most calculations are performed directly in your browser, so
              you can use the tools without creating an account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-fg mb-3">
              Always Improving
            </h2>

            <p>
              We are continuously working on adding new calculators,
              improving existing tools and making theCalculate more useful.
              Suggestions and feedback from visitors can help us decide what
              to build next.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-fg mb-3">
              Have a Suggestion?
            </h2>

            <p>
              If you find a problem, have an idea for a new calculator or
              simply want to share feedback, we'd love to hear from you.
            </p>

            <p className="mt-3">
              Visit our{' '}
              <a
                href="/contact"
                className="text-purple-400 hover:text-purple-300 hover:underline"
              >
                Contact page
              </a>{' '}
              to get in touch.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}