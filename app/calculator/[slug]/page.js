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

import { getCalculatorSEO } from '@/lib/calculator-seo';

const SITE_URL = 'https://thecalculate.vercel.app';


// =========================================================
// STATIC PARAMS
// =========================================================

export function generateStaticParams() {
  return calculators.map((calculator) => ({
    slug: calculator.slug,
  }));
}


// =========================================================
// METADATA
// =========================================================

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const tool = getCalculator(slug);

  if (!tool) {
    return {};
  }

  const seo = getCalculatorSEO(slug, tool);

  const url = `${SITE_URL}/calculator/${tool.slug}`;

  return {
    title: seo.title,

    description: seo.description,

    keywords: [
      tool.title,
      `${tool.title} online`,
      `free ${tool.title}`,
      `${tool.title} calculator`,
      `online ${tool.title}`,
      `${tool.title} India`,
      'free online calculator',
      'online calculator',
    ],

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: 'TheCalculate',
      type: 'website',
      locale: 'en_IN',
    },

    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  };
}


// =========================================================
// PAGE
// =========================================================

export default async function CalculatorPage({ params }) {
  const { slug } = await params;

  const tool = getCalculator(slug);

  if (!tool) {
    notFound();
  }

  const category = getCategory(tool.category);

  const Calculator = getCalculatorComponent(tool.slug);

  const seo = getCalculatorSEO(tool.slug, tool);

  const calculatorUrl =
    `${SITE_URL}/calculator/${tool.slug}`;


  // =======================================================
  // RELATED CALCULATORS
  // =======================================================

  const relatedCalculators = calculators
    .filter(
      (calculator) =>
        calculator.slug !== tool.slug &&
        calculator.category === tool.category
    )
    .slice(0, 6);


  // =======================================================
  // WEB APPLICATION SCHEMA
  // =======================================================

  const jsonLd = {
    '@context': 'https://schema.org',

    '@type': 'WebApplication',

    name: tool.title,

    url: calculatorUrl,

    description: seo.description,

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
      name: 'TheCalculate',
      url: SITE_URL,
    },
  };


  // =======================================================
  // BREADCRUMB SCHEMA
  // =======================================================

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


  // =======================================================
  // FAQ SCHEMA
  // =======================================================

  const faqJsonLd =
    seo.faqs && seo.faqs.length > 0
      ? {
          '@context': 'https://schema.org',

          '@type': 'FAQPage',

          mainEntity: seo.faqs.map(([question, answer]) => ({
            '@type': 'Question',

            name: question,

            acceptedAnswer: {
              '@type': 'Answer',
              text: answer,
            },
          })),
        }
      : null;


  return (
    <>
      {/* =================================================
          WEB APPLICATION SCHEMA
          ================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />


      {/* =================================================
          BREADCRUMB SCHEMA
          ================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd
          ).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />


      {/* =================================================
          FAQ SCHEMA
          ================================================= */}

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              faqJsonLd
            ).replace(
              /</g,
              '\\u003c'
            ),
          }}
        />
      )}


      <Header />


      <main className="max-w-3xl mx-auto px-4">


        {/* =================================================
            BREADCRUMB
            ================================================= */}

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


        {/* =================================================
            PAGE HEADING
            ================================================= */}

        <header className="mt-6 mb-8">

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {tool.emoji} {tool.title}
          </h1>

          <p className="text-muted mt-3 max-w-2xl leading-relaxed">
            {seo.intro}
          </p>

        </header>


        {/* =================================================
            CALCULATOR
            ================================================= */}

        <section
          aria-label={`${tool.title} calculator`}
          id="calculator"
        >

          <Calculator title={tool.title} />

        </section>


        {/* =================================================
            SEO CONTENT
            ================================================= */}

        {seo.sections &&
          seo.sections.length > 0 && (

            <article className="mt-12 space-y-10">

              {seo.sections.map(
                (section, index) => (

                  <section
                    key={`${tool.slug}-section-${index}`}
                  >

                    <h2 className="text-2xl font-bold mb-4">
                      {section.heading}
                    </h2>


                    {/* Paragraphs */}

                    {section.paragraphs &&
                      section.paragraphs.map(
                        (paragraph, paragraphIndex) => (

                          <p
                            key={paragraphIndex}
                            className="text-muted leading-relaxed mb-4"
                          >
                            {paragraph}
                          </p>

                        )
                      )}


                    {/* Formula */}

                    {section.formula && (

                      <div className="card p-5 md:p-6 mt-5 overflow-x-auto">

                        <p className="text-center font-mono text-base md:text-lg whitespace-pre-line">
                          {section.formula}
                        </p>

                      </div>

                    )}


                    {/* Variables */}

                    {section.variables && (

                      <div className="mt-5 space-y-2">

                        {section.variables.map(
                          (variable, variableIndex) => (

                            <p
                              key={variableIndex}
                              className="text-muted leading-relaxed"
                            >
                              {variable}
                            </p>

                          )
                        )}

                      </div>

                    )}


                    {/* Steps */}

                    {section.steps && (

                      <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

                        {section.steps.map(
                          (step, stepIndex) => (

                            <li key={stepIndex}>
                              {step}
                            </li>

                          )
                        )}

                      </ol>

                    )}


                    {/* Items */}

                    {section.items && (

                      <div className="space-y-5">

                        {section.items.map(
                          ([heading, text], itemIndex) => (

                            <div key={itemIndex}>

                              <h3 className="font-semibold text-lg">
                                {heading}
                              </h3>

                              <p className="text-muted leading-relaxed mt-2">
                                {text}
                              </p>

                            </div>

                          )
                        )}

                      </div>

                    )}

                  </section>

                )
              )}


              {/* =================================================
                  FAQ
                  ================================================= */}

              {seo.faqs &&
                seo.faqs.length > 0 && (

                  <section>

                    <h2 className="text-2xl font-bold mb-5">
                      Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">

                      {seo.faqs.map(
                        ([question, answer], index) => (

                          <div key={index}>

                            <h3 className="font-semibold text-lg">
                              {question}
                            </h3>

                            <p className="text-muted leading-relaxed mt-2">
                              {answer}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </section>

                )}

            </article>

          )}


        {/* =================================================
            ADVERTISEMENT
            ================================================= */}

        <AdSlot className="my-12" />


        {/* =================================================
            RELATED CALCULATORS
            ================================================= */}

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

              {relatedCalculators.map(
                (calculator) => (

                  <a
                    key={calculator.slug}
                    href={`/calculator/${calculator.slug}`}
                    className="card p-4 hover:border-brand-400/50 transition-colors"
                  >

                    <div className="font-semibold">
                      {calculator.emoji}{' '}
                      {calculator.title}
                    </div>

                    <p className="text-sm text-muted mt-1">
                      Use our free{' '}
                      {calculator.title.toLowerCase()}.
                    </p>

                  </a>

                )
              )}

            </div>

          </section>

        )}

      </main>


      <Footer />

    </>
  );
}