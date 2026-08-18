// components/AdSlot.js
// Placeholder ad container. Once you're approved for AdSense, replace the
// inner div with your real <ins class="adsbygoogle"> unit and call
// (adsbygoogle = window.adsbygoogle || []).push({}) in a useEffect.
export default function AdSlot({ label = 'Advertisement', className = '' }) {
  return (
    <div
      className={`card flex items-center justify-center text-xs text-muted-2 py-6 ${className}`}
    >
      {label}
    </div>
  );
}
