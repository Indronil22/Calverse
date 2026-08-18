'use client';
export default function ComingSoon({ title }) {
  return (
    <div className="card p-8 text-center">
      <p className="text-lg font-semibold">{title} is coming soon</p>
      <p className="text-muted text-sm mt-2">
        This calculator hasn&apos;t been built yet — add its logic in
        lib/calc-functions.js and a UI component in components/calculators/.
      </p>
    </div>
  );
}
