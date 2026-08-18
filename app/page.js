// app/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import ToolCard from '@/components/ToolCard';
import AdSlot from '@/components/AdSlot';
import { categories, getPopularCalculators } from '@/lib/calculators';

export default function HomePage() {
  const popular = getPopularCalculators();

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Calculate <span className="text-brand-400">Everything.</span>
          </h1>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            🔍 What do you want to calculate? Pick a category or jump straight
            into a popular tool below.
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-16">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </section>

        <AdSlot className="mb-16" />

        <section className="pb-20">
          <h2 className="text-2xl font-bold mb-6">Popular Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {popular.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
