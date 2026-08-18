// app/layout.js
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://calverse-psi.vercel.app'),

  title: {
    default: 'Calverse — Free Online Calculators',
    template: '%s | Calverse',
  },

  description:
    'Free online calculators for money, students, vehicles, daily life, health and India-specific calculations. Calculate EMI, GST, SIP, CGPA, DA, HRA, BMI and more.',

  keywords: [
    'online calculator',
    'free calculator',
    'calculator India',
    'EMI calculator',
    'GST calculator',
    'SIP calculator',
    'CGPA calculator',
    'SGPA calculator',
    'YGPA calculator',
    'DGPA calculator',
    'DA calculator',
    'HRA calculator',
    'BMI calculator',
    'salary calculator',
  ],

  authors: [
    {
      name: 'Indronil Dey',
    },
  ],

  creator: 'Indronil Dey',

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
    title: 'Calverse — Free Online Calculators',
    description:
      'Free online calculators for money, students, vehicles, daily life, health and India-specific calculations.',
    type: 'website',
    siteName: 'Calverse',
    locale: 'en_IN',
    url: 'https://calverse-psi.vercel.app',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Calverse — Free Online Calculators',
    description:
      'Free online calculators for money, students, vehicles, daily life, health and India-specific calculations.',
  },
};

// Runs before paint so the correct theme applies immediately.
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