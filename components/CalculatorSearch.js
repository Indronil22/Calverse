'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { calculators } from '@/lib/calculators';

export default function CalculatorSearch() {
  const [query, setQuery] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const examples = [
    'Search CGPA Calculator...',
    'Search SGPA Calculator...',
    'Search YGPA Calculator...',
    'Search DGPA Calculator...',
    'Search EMI Calculator...',
    'Search GST Calculator...',
    'Search SIP Calculator...',
    'Search Age Calculator...',
  ];

  useEffect(() => {
    if (query || isFocused) {
      setDisplayText('');
      return;
    }

    let sentenceIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timer;

    const animate = () => {
      const sentence = examples[sentenceIndex];

      if (!deleting) {
        // TYPE
        characterIndex += 1;
        setDisplayText(sentence.substring(0, characterIndex));

        if (characterIndex >= sentence.length) {
          // Finished typing — pause
          timer = setTimeout(() => {
            deleting = true;
            animate();
          }, 1800);

          return;
        }

        timer = setTimeout(animate, 70);
      } else {
        // DELETE
        characterIndex -= 1;
        setDisplayText(sentence.substring(0, characterIndex));

        if (characterIndex <= 0) {
          setDisplayText('');

          // Wait while completely empty
          timer = setTimeout(() => {
            deleting = false;
            sentenceIndex =
              (sentenceIndex + 1) % examples.length;
            animate();
          }, 800);

          return;
        }

        timer = setTimeout(animate, 45);
      }
    };

    timer = setTimeout(animate, 600);

    return () => clearTimeout(timer);
  }, [query, isFocused]);

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

          const matchedCategories = [
            ...new Set(matches.map((tool) => tool.category)),
          ];

          const related = calculators.filter(
            (tool) =>
              matchedCategories.includes(tool.category) &&
              !matches.some(
                (match) => match.slug === tool.slug
              )
          );

          return [...matches, ...related].slice(0, 6);
        })()
      : [];

  return (
    <div className="relative max-w-2xl mx-auto mt-8">
      {/* SEARCH BOX */}
      <div className="relative">
        {/* Search icon */}
        <span
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-muted
            text-lg
            pointer-events-none
            z-10
          "
        >
          🔍
        </span>

        {/* Animated text */}
        {!query && !isFocused && (
          <div
            className="
              absolute
              left-12
              top-1/2
              -translate-y-1/2
              text-muted
              text-base
              pointer-events-none
              whitespace-nowrap
              overflow-hidden
            "
          >
            {displayText}
          </div>
        )}

        {/* Actual input */}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            input
            w-full
            h-14
            pl-12
            pr-4
            text-base
            rounded-2xl
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-brand-400/30
          "
          aria-label="Search calculators"
        />
      </div>

      {/* SEARCH RESULTS */}
      {results.length > 0 && (
        <div className="absolute z-20 w-full mt-3 card p-2 text-left shadow-xl rounded-2xl">
          {results.map((tool) => (
            <Link
              key={tool.slug}
              href={`/calculator/${tool.slug}`}
              onClick={() => setQuery('')}
              className="
                flex
                items-center
                gap-3
                p-3
                rounded-xl
                hover:bg-brand-500/10
                transition-colors
              "
            >
              <span className="text-xl shrink-0">
                {tool.emoji}
              </span>

              <div className="min-w-0">
                <p className="font-semibold">
                  {tool.title}
                </p>

                <p className="text-xs text-muted line-clamp-1">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* NO RESULTS */}
      {query.trim().length > 0 &&
        results.length === 0 && (
          <div className="absolute z-20 w-full mt-3 card p-4 text-center text-sm text-muted rounded-2xl shadow-xl">
            No calculators found.
          </div>
        )}
    </div>
  );
}