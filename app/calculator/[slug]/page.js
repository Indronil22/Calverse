// app/calculator/[slug]/page.js

import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

import {
  calculators,
  getCalculator,
  getCategory,
} from '@/lib/calculators';

import { getCalculatorComponent } from '@/components/calculators/registry';

const SITE_URL = 'https://thecalculate.vercel.app';

export function generateStaticParams() {
  return calculators.map((calculator) => ({
    slug: calculator.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const tool = getCalculator(slug);

  if (!tool) {
    return {};
  }

  const url = `${SITE_URL}/calculator/${tool.slug}`;

  /*
   * Special SEO metadata for EMI Calculator
   */
  if (tool.slug === 'emi') {
    return {
      title:
        'EMI Calculator – Calculate Monthly EMI, Interest & Total Payment',

      description:
        'Calculate your monthly EMI, total interest and total payment instantly with our free EMI calculator. Enter the loan amount, interest rate and tenure to get accurate results.',

      alternates: {
        canonical: url,
      },

      robots: {
        index: true,
        follow: true,
      },

      openGraph: {
        title:
          'EMI Calculator – Monthly EMI, Interest & Total Payment',
        description:
          'Calculate your monthly EMI, total interest and total payment instantly with our free EMI calculator.',
        url,
        siteName: 'theCalculate',
        type: 'website',
        locale: 'en_IN',
      },

      twitter: {
        card: 'summary',
        title:
          'EMI Calculator – Monthly EMI, Interest & Total Payment',
        description:
          'Calculate monthly EMI, total interest and total payment with the free EMI calculator from theCalculate.',
      },
    };
  }

  /*
   * Default metadata for other calculators
   */
  const title = `${tool.title} Online - Free Calculator`;

  const description =
    `${tool.description} Use this free online ${tool.title.toLowerCase()} ` +
    'with instant results. No login required.';

  return {
    title,

    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `${tool.title} | theCalculate`,
      description,
      url,
      siteName: 'theCalculate',
      type: 'website',
      locale: 'en_IN',
    },

    twitter: {
      card: 'summary',
      title: `${tool.title} | theCalculate`,
      description,
    },
  };
}

export default async function CalculatorPage({ params }) {
  const { slug } = await params;

  const tool = getCalculator(slug);

  if (!tool) {
    notFound();
  }

  const category = getCategory(tool.category);

  const Calculator = getCalculatorComponent(tool.slug);

  const calculatorUrl = `${SITE_URL}/calculator/${tool.slug}`;

  /*
   * Related calculators
   */
  const relatedCalculators = calculators
    .filter(
      (calculator) =>
        calculator.slug !== tool.slug &&
        calculator.category === tool.category
    )
    .slice(0, 6);

  /*
   * WebApplication structured data
   */
  const jsonLd = {
    '@context': 'https://schema.org',

    '@type': 'WebApplication',

    name: tool.title,

    url: calculatorUrl,

    description: tool.description,

    applicationCategory: 'UtilitiesApplication',

    applicationSubCategory: 'Calculator',

    operatingSystem: 'Any',

    browserRequirements: 'Requires JavaScript',

    isAccessibleForFree: true,

    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },

    publisher: {
      '@type': 'Organization',
      name: 'theCalculate',
      url: SITE_URL,
    },
  };

  /*
   * Breadcrumb structured data
   */
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',

    '@type': 'BreadcrumbList',

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },

      {
        '@type': 'ListItem',
        position: 2,
        name: category.title,
        item: `${SITE_URL}/category/${category.slug}`,
      },

      {
        '@type': 'ListItem',
        position: 3,
        name: tool.title,
        item: calculatorUrl,
      },
    ],
  };

  return (
    <>
      {/* WebApplication structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />

      <Header />

      <main className="max-w-3xl mx-auto px-4">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-muted-2 pt-8 flex items-center gap-2 flex-wrap"
        >
          <a
            href="/"
            className="hover:text-fg transition-colors"
          >
            Home
          </a>

          <span>/</span>

          <a
            href={`/category/${category.slug}`}
            className="hover:text-fg transition-colors"
          >
            {category.title}
          </a>

          <span>/</span>

          <span className="text-muted">
            {tool.title}
          </span>
        </nav>

        {/* Page heading */}
        <header className="mt-6 mb-8">

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {tool.emoji} {tool.title}
          </h1>

          <p className="text-muted mt-3 max-w-2xl leading-relaxed">
            {tool.description}
          </p>

        </header>

        {/* Calculator */}
        <section
          aria-label={`${tool.title} calculator`}
          id="calculator"
        >
          <Calculator title={tool.title} />
        </section>

        {/* =====================================================
            EMI SEO CONTENT
            ===================================================== */}

        {tool.slug === 'emi' && (
          <article className="mt-12 space-y-10">

            {/* What is EMI */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                What is an EMI?
              </h2>

              <p className="text-muted leading-relaxed">
                EMI stands for Equated Monthly Instalment. It is the
                fixed amount a borrower generally pays every month
                towards a loan. Each EMI consists of a portion of the
                principal amount and the interest charged on the loan.
              </p>

              <p className="text-muted leading-relaxed mt-4">
                The amount of your EMI depends mainly on the loan
                amount, interest rate and repayment tenure. You can use
                this EMI calculator to quickly estimate your monthly
                payment, total interest and total amount payable.
              </p>
            </section>

            {/* How EMI is calculated */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                How is EMI calculated?
              </h2>

              <p className="text-muted leading-relaxed">
                The standard EMI calculation uses the principal loan
                amount, monthly interest rate and total number of
                monthly instalments.
              </p>

              <div className="card p-5 md:p-6 mt-5 overflow-x-auto">
                <p className="text-center font-mono text-base md:text-lg whitespace-nowrap">
                  EMI = P × R × (1 + R)ⁿ / ((1 + R)ⁿ − 1)
                </p>
              </div>

              <div className="mt-5 space-y-2 text-muted leading-relaxed">
                <p>
                  <strong className="text-fg">P</strong> = Principal
                  loan amount
                </p>

                <p>
                  <strong className="text-fg">R</strong> = Monthly
                  interest rate
                </p>

                <p>
                  <strong className="text-fg">n</strong> = Total number
                  of monthly instalments
                </p>
              </div>
            </section>

            {/* How to use */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                How to use this EMI Calculator
              </h2>

              <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">
                <li>
                  Enter the amount you want to borrow.
                </li>

                <li>
                  Enter the annual interest rate charged on the loan.
                </li>

                <li>
                  Enter the loan tenure in months.
                </li>

                <li>
                  The calculator will instantly display your monthly
                  EMI.
                </li>

                <li>
                  Check the total interest and total payment to
                  understand the overall cost of the loan.
                </li>
              </ol>
            </section>

            {/* What affects EMI */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Factors that affect your EMI
              </h2>

              <div className="space-y-5">

                <div>
                  <h3 className="font-semibold text-lg">
                    1. Loan Amount
                  </h3>

                  <p className="text-muted leading-relaxed mt-2">
                    A higher loan amount generally results in a higher
                    monthly EMI, assuming the interest rate and tenure
                    remain unchanged.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    2. Interest Rate
                  </h3>

                  <p className="text-muted leading-relaxed mt-2">
                    A higher interest rate generally increases both the
                    monthly EMI and the total interest payable over the
                    loan period.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    3. Loan Tenure
                  </h3>

                  <p className="text-muted leading-relaxed mt-2">
                    Increasing the repayment tenure can reduce the
                    monthly EMI, but it can also increase the total
                    interest paid over the entire loan period.
                  </p>
                </div>

              </div>
            </section>

            {/* EMI Example */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                EMI Calculation Example
              </h2>

              <p className="text-muted leading-relaxed">
                Suppose you take a loan of ₹5,00,000 at an annual
                interest rate of 9.5% for 60 months. Enter these values
                into the calculator above to see the estimated monthly
                EMI, total interest and total payment.
              </p>

              <div className="overflow-x-auto mt-5">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4">
                        Loan Amount
                      </th>

                      <th className="text-left py-3 pr-4">
                        Interest Rate
                      </th>

                      <th className="text-left py-3">
                        Tenure
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">
                        ₹5,00,000
                      </td>

                      <td className="py-3 pr-4">
                        9.5% per year
                      </td>

                      <td className="py-3">
                        60 months
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold mb-5">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-lg">
                    What does EMI stand for?
                  </h3>

                  <p className="text-muted leading-relaxed mt-2">
                    EMI stands for Equated Monthly Instalment. It is
                    the regular payment made by a borrower towards a
                    loan.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Does a longer loan tenure reduce EMI?
                  </h3>

                  <p className="text-muted leading-relaxed mt-2">
                    Generally, a longer tenure reduces the monthly EMI.
                    However, extending the tenure can increase the
                    total interest paid over the life of the loan.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    What information do I need to calculate EMI?
                  </h3>

                  <p className="text-muted leading-relaxed mt-2">
                    You need the loan amount, annual interest rate and
                    repayment tenure to calculate an estimated EMI.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Is this EMI calculator free?
                  </h3>

                  <p className="text-muted leading-relaxed mt-2">
                    Yes. TheCalculate's EMI calculator is free to use
                    and provides instant calculations without requiring
                    a login.
                  </p>
                </div>

              </div>
            </section>

          </article>
        )}

        {/* Advertisement */}
        <AdSlot className="my-12" />

        {/* =====================================================
            RELATED CALCULATORS
            ===================================================== */}

        {relatedCalculators.length > 0 && (
          <section
            aria-labelledby="related-calculators"
            className="mt-12 mb-12"
          >
            <h2
              id="related-calculators"
              className="text-2xl font-bold mb-5"
            >
              Related Calculators
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">

              {relatedCalculators.map((calculator) => (
                <a
                  key={calculator.slug}
                  href={`/calculator/${calculator.slug}`}
                  className="card p-4 hover:border-brand-400/50 transition-colors"
                >
                  <div className="font-semibold">
                    {calculator.emoji} {calculator.title}
                  </div>

                  <p className="text-sm text-muted mt-1">
                    Use our free {calculator.title.toLowerCase()}.
                  </p>
                </a>
              ))}

            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}