// app/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import ToolCard from '@/components/ToolCard';
import AdSlot from '@/components/AdSlot';
import CalculatorSearch from '@/components/CalculatorSearch';
import { categories, getPopularCalculators } from '@/lib/calculators';

export default function HomePage() {
  const popular = getPopularCalculators();

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <section className="text-center py-16 md:py-20">
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
    Calculate <span className="text-brand-400">Everything.</span>
  </h1>

  <p className="mt-5 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
    Free online calculators for money, students, vehicles, daily life
    and India-specific calculations.
  </p>

  <p className="mt-3 text-sm text-muted-2">
    Simple, fast and easy to use.
  </p>

  <CalculatorSearch />
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
