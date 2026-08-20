// components/Header.js
import Link from 'next/link';
import { categories } from '@/lib/calculators';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          the<span className="text-brand-400">Calculate</span>
        </Link>
        <nav className="hidden md:flex gap-5 text-sm text-muted">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="hover:text-fg transition-colors"
            >
              {c.emoji} {c.title}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
