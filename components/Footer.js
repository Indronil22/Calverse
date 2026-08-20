// components/Footer.js
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer
      className="border-t mt-20"
      style={{ borderColor: 'var(--card-border)' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        {/* Left side */}
        <div className="text-center md:text-left">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} theCalculate. All calculations are estimates — verify before making financial decisions.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-3 text-sm text-muted">
            <a href="/about" className="hover:text-fg transition-colors">
              About
            </a>

            <a href="/privacy" className="hover:text-fg transition-colors">
              Privacy
            </a>

            <a href="/contact" className="hover:text-fg transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-muted-2">
            Created by Indronil Dey
          </span>

          <SocialLinks />
        </div>

      </div>
    </footer>
  );
}