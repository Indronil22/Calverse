// components/Footer.js
export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-white/50 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Calverse. All calculations are estimates — verify before making financial decisions.</p>
        <div className="flex gap-4">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
