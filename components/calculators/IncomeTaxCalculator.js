'use client';
import { useState } from 'react';
import { calcIncomeTaxNewRegime } from '@/lib/calc-functions';

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState(1200000);
  const { tax, cess, totalTax } = calcIncomeTaxNewRegime(Number(income) || 0);
  const takeHome = (Number(income) || 0) - totalTax;

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Taxable Annual Income (₹)" value={income} onChange={setIncome} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Income Tax" value={tax} />
          <Result label="Health & Education Cess (4%)" value={cess} />
          <Result label="Total Tax" value={totalTax} big />
          <Result label="Net Take-Home" value={takeHome} />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        Estimated using illustrative new-regime slabs — always confirm the
        current official slabs for the relevant financial year before filing.
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

function Result({ label, value, big }) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className={big ? 'text-3xl font-extrabold text-brand-400' : 'text-2xl font-bold'}>
        ₹{value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
      </p>
    </div>
  );
}
