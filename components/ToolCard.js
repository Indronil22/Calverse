import Link from 'next/link';

export default function ToolCard({ tool }) {
  return (
    <Link
      href={`/calculator/${tool.slug}`}
      className="card p-5 flex flex-col gap-2
        hover:border-brand-400/60
        hover:-translate-y-1
        hover:shadow-lg
        transition-all duration-200"
    >
      <span className="text-2xl">{tool.emoji}</span>

      <span className="font-semibold text-fg">
        {tool.title}
      </span>

      <span className="text-xs text-muted line-clamp-2">
        {tool.description}
      </span>
    </Link>
  );
}