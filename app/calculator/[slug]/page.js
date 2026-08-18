// app/calculator/[slug]/page.js
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import { calculators, getCalculator, getCategory } from '@/lib/calculators';
import { getCalculatorComponent } from '@/components/calculators/registry';

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getCalculator(slug);

  if (!tool) return {};

  return {
    title: tool.title,
    description: tool.description,
    alternates: {
      canonical: `/calculator/${tool.slug}`,
    },
  };
}

export default async function CalculatorPage({ params }) {
  const { slug } = await params;

  const tool = getCalculator(slug);

  if (!tool) notFound();

  const category = getCategory(tool.category);
  const Calculator = getCalculatorComponent(tool.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.title,
    applicationCategory: 'UtilitiesApplication',
    description: tool.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
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
        <nav className="text-xs text-muted-2 pt-8 flex items-center gap-2">
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

        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {tool.emoji} {tool.title}
          </h1>

          <p className="text-muted mt-3 max-w-2xl leading-relaxed">
            {tool.description}
          </p>
        </div>

        <Calculator title={tool.title} />

        <AdSlot className="my-12" />
      </main>

      <Footer />
    </>
  );
}