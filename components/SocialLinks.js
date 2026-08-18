// components/SocialLinks.js
// Simple generic icon glyphs — swap the href values below for your real
// profile URLs before deploying.
export default function SocialLinks({ className = '' }) {
  const links = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/yourhandle',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/yourpage',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.6.4-1 1-1h1.5V8Z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <line x1="7.5" y1="10" x2="7.5" y2="17" />
          <circle cx="7.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
          <path d="M11.5 17v-4.2c0-1.5 1-2.3 2.2-2.3s2.1.8 2.1 2.3V17" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.name}
          className="w-9 h-9 rounded-full flex items-center justify-center toggle-btn-inactive hover:opacity-70 transition-opacity"
        >
          <span className="w-4.5 h-4.5" style={{ width: 18, height: 18 }}>{l.icon}</span>
        </a>
      ))}
    </div>
  );
}
