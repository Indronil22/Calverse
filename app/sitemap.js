// app/sitemap.js

import { categories, calculators } from '@/lib/calculators';

export default function sitemap() {
  const base = 'https://thecalculate.vercel.app';

  const staticRoutes = [
    {
      url: `${base}/`,
      priority: 1,
    },
  ];

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/category/${c.slug}`,
    priority: 0.8,
  }));

  const calculatorRoutes = calculators.map((c) => ({
    url: `${base}/calculator/${c.slug}`,
    priority: 0.9,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...calculatorRoutes,
  ];
}