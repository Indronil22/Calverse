'use client';

import { useState } from 'react';
import Link from 'next/link';
import { calculators } from '@/lib/calculators';

export default function CalculatorSearch() {
  const [query, setQuery] = useState('');

  const results =
  query.trim().length > 0
    ? (() => {
        const search = query.toLowerCase().trim();

        const matches = calculators.filter((tool) => {
          const searchText = `
            ${tool.title}
            ${tool.description}
            ${tool.category}
          `.toLowerCase();

          return searchText.includes(search);
        });

        // If there is an exact/strong match, also show related calculators
        // from the same category.
        const matchedCategories = [
          ...new Set(matches.map((tool) => tool.category)),
        ];

        const related = calculators.filter(
          (tool) =>
            matchedCategories.includes(tool.category) &&
            !matches.some((match) => match.slug === tool.slug)
        );

        return [...matches, ...related].slice(0, 6);
      })()
    : [];

  return (
    <div className="relative max-w-2xl mx-auto mt-8">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-lg">
  
</span>

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 Search calculators..."
          className="input pl-11 pr-4 text-base"
          aria-label="Search calculators"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute z-20 w-full mt-2 card p-2 text-left shadow-xl">
          {results.map((tool) => (
            <Link
              key={tool.slug}
              href={`/calculator/${tool.slug}`}
              onClick={() => setQuery('')}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-500/10 transition-colors"
            >
              <span className="text-xl">{tool.emoji}</span>

              <div className="min-w-0">
                <p className="font-semibold">{tool.title}</p>
                <p className="text-xs text-muted line-clamp-1">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {query.trim().length > 0 && results.length === 0 && (
        <div className="absolute z-20 w-full mt-2 card p-4 text-center text-sm text-muted">
          No calculators found.
        </div>
      )}
    </div>
  );
}