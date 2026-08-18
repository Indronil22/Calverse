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

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const category = getCategory(slug);

  if (!category) return {};

  return {
    title: `${category.title} Calculators`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = getCategory(slug);

  if (!category) notFound();

  const tools = getCalculatorsByCategory(slug);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <section className="py-12">
          <h1 className="text-3xl font-extrabold">
            {category.emoji} {category.title} Calculators
          </h1>
          <p className="text-muted mt-2 max-w-2xl">{category.description}</p>
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
