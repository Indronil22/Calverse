// components/CategoryCard.js
import Link from 'next/link';

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="card p-5 flex flex-col gap-2 hover:border-brand-400/60 hover:-translate-y-0.5 transition-all"
    >
      <span className="text-3xl">{category.emoji}</span>
      <span className="font-semibold text-lg">{category.title}</span>
      <span className="text-sm text-muted">{category.description}</span>
    </Link>
  );
}
