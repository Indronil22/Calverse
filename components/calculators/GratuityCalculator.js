'use client';
import { useState } from 'react';
import { calcGratuity } from '@/lib/calc-functions';

export default function GratuityCalculator() {
  const [lastSalary, setLastSalary] = useState(50000);
  const [years, setYears] = useState(8);

  const { gratuity } = calcGratuity(Number(lastSalary) || 0, Number(years) || 0);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Last Drawn Salary (Basic + DA, ₹)" value={lastSalary} onChange={setLastSalary} />
          <Field label="Years of Service" value={years} onChange={setYears} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">
          <div>
            <p className="text-xs text-muted">Gratuity Payable</p>
            <p className="text-3xl font-extrabold text-brand-400">
              ₹{gratuity.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        Formula: (Last drawn salary × 15 × years of service) / 26, as per the
        Payment of Gratuity Act, 1972 — applicable to employees covered under
        the Act, capped at the statutory maximum.
      </p>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
      <input
        type="number"
        className="input mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
