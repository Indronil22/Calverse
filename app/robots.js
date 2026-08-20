// app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://thecalculate.vercel.app/sitemap.xml',
  };
}