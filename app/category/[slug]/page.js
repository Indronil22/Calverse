// app/category/[slug]/page.js
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import AdSlot from '@/components/AdSlot';
import { categories, getCategory, getCalculatorsByCategory } from '@/lib/calculators';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategory(params.slug);
  if (!category) return {};
  return {
    title: `${category.title} Calculators`,
    description: `${category.description} Free, fast and accurate ${category.title.toLowerCase()} calculators on Calverse.`,
  };
}

export default function CategoryPage({ params }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const tools = getCalculatorsByCategory(params.slug);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <section className="py-12">
          <h1 className="text-3xl font-extrabold">
            {category.emoji} {category.title} Calculators
          </h1>
          <p className="text-white/60 mt-2 max-w-2xl">{category.description}</p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-16">
          {tools.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </section>

        <AdSlot className="mb-16" />
      </main>
      <Footer />
    </>
  );
}
