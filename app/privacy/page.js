// app/privacy/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 space-y-4 text-muted leading-relaxed">
        <h1 className="text-3xl font-extrabold mb-4 text-fg">Privacy Policy</h1>
        <p>
          Calverse does not require an account and does not store the numbers
          you enter into any calculator — all calculations run locally in
          your browser.
        </p>
        <p>
          This site may use third-party advertising (such as Google AdSense)
          and analytics services, which can use cookies to serve relevant ads
          and measure traffic. You can control cookie preferences through
          your browser settings or, where applicable, Google&apos;s Ad
          Settings.
        </p>
        <p>
          Replace this page with your actual policy — including any specific
          ad network and analytics disclosures — before submitting your site
          for AdSense review.
        </p>
      </main>
      <Footer />
    </>
  );
}
