// app/layout.js
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://calverse.example.com'),
  title: {
    default: 'Calverse — Calculate Everything',
    template: '%s | Calverse',
  },
  description:
    'Free online calculators for money, students, vehicles, daily life and India-specific finance — EMI, GST, SIP, CGPA, DA, HRA, BMI and more.',
  keywords: [
    'calculator',
    'EMI calculator',
    'GST calculator',
    'SIP calculator',
    'CGPA calculator',
    'DA calculator',
    'online calculator India',
  ],
  openGraph: {
    title: 'Calverse — Calculate Everything',
    description:
      'Free online calculators for money, students, vehicles, daily life and India-specific finance.',
    type: 'website',
  },
};

// Inline script runs before paint so the correct theme applies immediately
// (no flash of the wrong theme on load).
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('calverse-theme');
    var dark = stored ? stored === 'dark' : true;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* AdSense: replace ca-pub-XXXXXXXXXXXXXXX with your real publisher ID once approved */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script> */}
      </head>
      <body className="bg-[var(--bg)] text-[var(--fg)] min-h-screen">{children}</body>
    </html>
  );
}
