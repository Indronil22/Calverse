// components/Footer.js
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Calverse. All calculations are estimates — verify before making financial decisions.
          </p>
          <div className="flex gap-4 mt-3 text-sm text-muted">
            <a href="/about" className="hover:text-fg">About</a>
            <a href="/privacy" className="hover:text-fg">Privacy</a>
            <a href="/contact" className="hover:text-fg">Contact</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start md:items-end">
          <span className="text-xs text-muted-2">Built by Indronil Dey</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
