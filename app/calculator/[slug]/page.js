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

  const title = `${tool.title} Online - Free Calculator`;

  const description =
    `${tool.description} Use this free online ${tool.title.toLowerCase()} ` +
    'with instant results. No login required.';

  return {
    title,

    description,

    keywords: [
      tool.title,
      `${tool.title} online`,
      `free ${tool.title}`,
      `${tool.title} India`,
      `online ${tool.title}`,
      `${tool.title} calculator`,
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
   * Structured data for Google
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
      {/* Calculator structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <Header />

      <main className="max-w-3xl mx-auto px-4">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-muted-2 pt-8 flex items-center gap-2"
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
        <section aria-label={`${tool.title} tool`}>
          <Calculator title={tool.title} />
        </section>

        {/* Advertisement */}
        <AdSlot className="my-12" />

      </main>

      <Footer />
    </>
  );
}