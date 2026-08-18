// app/contact/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold mb-4">Contact</h1>
        <p className="text-white/70 leading-relaxed">
          Found a bug or want a calculator that isn&apos;t on the site yet?
          Replace this text with your real contact email before launch —
          AdSense review typically expects a working way to reach you.
        </p>
      </main>
      <Footer />
    </>
  );
}
