# theCalculate — Calculate Everything

A free calculator hub built with Next.js + Tailwind CSS: money, student,
vehicle, daily-life, India-specific and health calculators, organized under
the category-tree homepage you designed.

## Structure

```
app/
  page.js                  → homepage (category tree + popular tools)
  category/[slug]/page.js  → category listing page
  calculator/[slug]/page.js→ individual calculator page (SEO meta + schema)
  sitemap.js, robots.js    → auto-generated SEO files
  about/, privacy/, contact/ → pages AdSense typically wants to see

lib/
  calculators.js   → registry: every category + calculator's metadata
  calc-functions.js→ pure calculation logic, framework-free

components/
  calculators/      → one UI component per calculator
  calculators/registry.js → maps a calculator's slug to its component
```

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying

This is a standard Next.js app — it deploys for free on **Vercel**
(the company that makes Next.js): push this folder to a GitHub repo, then
import it at vercel.com. No server to manage.

## Adding a new calculator

You listed ~30 calculators — 10 are fully built (EMI, GST, SIP, CGPA,
Attendance, Fuel Cost, Age, DA, BMI, Discount). The rest show a
"Coming soon" placeholder so the site never breaks or 404s. To add one:

1. Add its math to `lib/calc-functions.js` (pure function, no UI).
2. Copy an existing file in `components/calculators/` as a template and
   wire it to your new function.
3. Register it in `components/calculators/registry.js`.

The entry already exists in `lib/calculators.js` for every calculator in
your original list, so category pages and the homepage will start showing
the new tool automatically once you register it — nothing else to update.

## Before you apply for AdSense

- Replace `https://calverse.example.com` with your real domain in
  `app/layout.js` and `app/sitemap.js`.
- Fill in real content on `/privacy` and `/contact` (Google checks these).
- Get a decent number of calculators live (10+ is a reasonable start) and
  let the site sit with some organic traffic first — brand-new sites with
  thin content are commonly rejected on first application.
- Once approved, uncomment the AdSense script tag in `app/layout.js` and
  swap the placeholder `<AdSlot />` components for real
  `<ins class="adsbygoogle">` ad units.

## SEO notes already built in

- Every calculator page has its own `<title>`, meta description, canonical
  URL, and JSON-LD `WebApplication` schema.
- `sitemap.xml` and `robots.txt` are generated automatically from the same
  registry — add a calculator once, it appears in the sitemap too.
- Static generation (`generateStaticParams`) means every calculator and
  category page is pre-rendered at build time — fast loads, good for
  ranking.

## Ideas for next steps

- Add a search bar on the homepage for jumping straight to a calculator
- Add related-calculators links at the bottom of each calculator page
  (great for internal linking / SEO)
- Add a blog section ("How is EMI calculated?") — long-form content around
  each calculator tends to perform very well in search for this niche
