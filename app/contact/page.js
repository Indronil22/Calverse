// app/contact/page.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold mb-3 text-fg">Contact</h1>
        <p className="text-muted leading-relaxed mb-8">
          Found a bug, or want a calculator that isn&apos;t on the site yet?
          Reach out below — replace the placeholder email and social links
          with your real ones before launch.
        </p>

        <form
          className="card p-6 space-y-4"
          action="mailto:you@example.com"
          method="POST"
          encType="text/plain"
        >
          <label className="block">
            <span className="text-sm text-muted">Your Name</span>
            <input type="text" name="name" required className="input mt-1" placeholder="Jane Doe" />
          </label>
          <label className="block">
            <span className="text-sm text-muted">Your Email</span>
            <input type="email" name="email" required className="input mt-1" placeholder="jane@example.com" />
          </label>
          <label className="block">
            <span className="text-sm text-muted">Message</span>
            <textarea name="message" required rows={5} className="input mt-1" placeholder="What's up?" />
          </label>
          <button type="submit" className="btn-primary">Send Message</button>
          <p className="text-xs text-muted-2">
            This opens your email client with the message pre-filled — for a
            proper in-page submission (no email client needed), connect this
            form to a free service like Formspree or Web3Forms later.
          </p>
        </form>

        <div className="mt-10">
          <p className="text-sm text-muted mb-3">Or find us on social:</p>
          <SocialLinks />
        </div>
      </main>
      <Footer />
    </>
  );
}
