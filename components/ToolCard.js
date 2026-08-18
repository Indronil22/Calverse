// components/ToolCard.js
import Link from 'next/link';

export default function ToolCard({ tool }) {
  return (
    <Link
      href={`/calculator/${tool.slug}`}
      className="card p-5 flex flex-col gap-1.5 hover:border-brand-400/60 hover:-translate-y-0.5 transition-all"
    >
      <span className="text-2xl">{tool.emoji}</span>
      <span className="font-semibold">{tool.title}</span>
      <span className="text-xs text-white/50 line-clamp-2">{tool.description}</span>
    </Link>
  );
}
