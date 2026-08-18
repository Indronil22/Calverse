import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold mb-3 text-fg">
          Contact
        </h1>

        <p className="text-muted leading-relaxed mb-8">
          Found a bug, or want a calculator that isn't on the site yet?
          Reach out below.
        </p>

        <ContactForm />

        <div className="mt-10">
          <p className="text-sm text-muted mb-3">
            Or find us on social:
          </p>

          <SocialLinks />
        </div>
      </main>

      <Footer />
    </>
  );
}