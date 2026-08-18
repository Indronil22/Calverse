// components/Header.js
import Link from 'next/link';
import { categories } from '@/lib/calculators';

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          Cal<span className="text-brand-400">verse</span>
        </Link>
        <nav className="hidden md:flex gap-5 text-sm text-white/70">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="hover:text-white transition-colors"
            >
              {c.emoji} {c.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
