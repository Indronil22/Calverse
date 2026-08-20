// app/layout.js
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://thecalculate.vercel.app'),

  title: {
    default: 'theCalculate — Free Online Calculators',
    template: '%s | theCalculate',
  },

  description:
    'Free online calculators for EMI, GST, SIP, CGPA, SGPA, YGPA, DGPA, DA, HRA, BMI, age, finance and more. Fast, accurate and easy-to-use calculators.',

  keywords: [
    'calculator',
    'online calculator',
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
  },

  twitter: {
    card: 'summary_large_image',
    title: 'theCalculate — Free Online Calculators',
    description:
      'Free online calculators for EMI, GST, SIP, CGPA, SGPA, BMI, age and more.',
  },
};

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

        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="<lLLf187Ol0Va1PBdnH_p2Ozn6GmlXpsxYRScLxB-Zsw />"
        />

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