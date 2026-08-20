// app/layout.js

import './globals.css';

export const metadata = {
  metadataBase: new URL('https://thecalculate.vercel.app'),

  // Google Search Console verification
  verification: {
    google: 'lLLf187Ol0Va1PBdnH_p2Ozn6GmlXpsxYRScLxB-Zsw',
  },

  title: {
    default: 'theCalculate — Free Online Calculators',
    template: '%s | theCalculate',
  },

  description:
    'Free online calculators for EMI, GST, SIP, CGPA, SGPA, YGPA, DGPA, DA, HRA, BMI, age, finance and more. Fast, accurate and easy-to-use calculators.',

  keywords: [
    'calculator',
    'online calculator',
    'free online calculator',
    'free calculator',
    'calculators',
    'EMI calculator',
    'GST calculator',
    'SIP calculator',
    'CGPA calculator',
    'SGPA calculator',
    'YGPA calculator',
    'DGPA calculator',
    'GPA calculator',
    'percentage calculator',
    'attendance calculator',
    'DA calculator',
    'DR calculator',
    'HRA calculator',
    'gratuity calculator',
    'EPF calculator',
    'salary calculator',
    'BMI calculator',
    'age calculator',
    'calculator India',
  ],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: 'https://thecalculate.vercel.app/',
    siteName: 'theCalculate',
    title: 'theCalculate — Free Online Calculators',
    description:
      'Free online calculators for finance, students, vehicles, daily life and India-specific calculations.',
    locale: 'en_IN',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'theCalculate — Free Online Calculators',
    description:
      'Free online calculators for EMI, GST, SIP, CGPA, SGPA, BMI, age and more.',
  },
};

// Runs before the page paints so the correct theme loads immediately.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('calverse-theme');
    var dark = stored ? stored === 'dark' : true;

    if (dark) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />
      </head>

      <body className="bg-[var(--bg)] text-[var(--fg)] min-h-screen">
        {children}
      </body>
    </html>
  );
}