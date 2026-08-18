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

export function generateMetadata({ params }) {
  const tool = getCalculator(params.slug);
  if (!tool) return {};
  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical: `/calculator/${tool.slug}` },
  };
}

export default function CalculatorPage({ params }) {
  const tool = getCalculator(params.slug);
  if (!tool) notFound();
  const category = getCategory(tool.category);
  const Calculator = getCalculatorComponent(tool.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.title,
    applicationCategory: 'UtilitiesApplication',
    description: tool.description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-3xl mx-auto px-4">
        <nav className="text-xs text-muted-2 pt-8">
          <a href="/" className="hover:text-fg">Home</a> {' / '}
          <a href={`/category/${category.slug}`} className="hover:text-fg">
            {category.title}
          </a>
        </nav>

        <h1 className="text-3xl font-extrabold mt-3">
          {tool.emoji} {tool.title}
        </h1>
        <p className="text-muted mt-2 mb-8">{tool.description}</p>

        <Calculator title={tool.title} />

        <AdSlot className="my-12" />
      </main>
      <Footer />
    </>
  );
}
