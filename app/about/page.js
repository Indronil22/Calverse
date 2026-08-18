// app/about/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold mb-4">About Calverse</h1>
        <p className="text-white/70 leading-relaxed">
          Calverse is a free collection of everyday calculators — money, student,
          vehicle, health and India-specific tools — built to give quick,
          accurate estimates without clutter. Every result is computed instantly
          in your browser; nothing you type is sent anywhere.
        </p>
      </main>
      <Footer />
    </>
  );
}
