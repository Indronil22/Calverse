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

const SITE_URL = 'https://calverse-psi.vercel.app';

export function generateStaticParams() {
  return calculators.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const tool = getCalculator(slug);

  if (!tool) {
    return {};
  }

  const url = `${SITE_URL}/calculator/${tool.slug}`;

  return {
    title: tool.title,

    description: tool.description,

    keywords: [
      tool.title,
      `${tool.title} online`,
      `free ${tool.title}`,
      `${tool.title} India`,
      'online calculator',
      'free calculator',
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
      description: tool.description,
      url,
      siteName: 'theCalculate',
      type: 'website',
      locale: 'en_IN',
    },

    twitter: {
      card: 'summary',
      title: `${tool.title} | theCalculate`,
      description: tool.description,
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.title,
    url: calculatorUrl,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    description: tool.description,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
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
        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {tool.emoji} {tool.title}
          </h1>

          <p className="text-muted mt-3 max-w-2xl leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Calculator */}
        <Calculator title={tool.title} />

        {/* Advertisement */}
        <AdSlot className="my-12" />
      </main>

      <Footer />
    </>
  );
}