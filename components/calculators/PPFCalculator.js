'use client';
import { useState } from 'react';
import { calcPPF } from '@/lib/calc-functions';

export default function PPFCalculator() {
  const [yearly, setYearly] = useState(150000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(7.1);

  const { maturity, invested, interest } = calcPPF(
    Number(yearly) || 0,
    Number(years) || 1,
    Number(rate) || 7.1
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Yearly Investment (₹)" value={yearly} onChange={setYearly} />
          <Field label="Duration (years)" value={years} onChange={setYears} />
          <Field label="Interest Rate (% per year)" value={rate} onChange={setRate} step="0.1" />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Total Invested" value={invested} />
          <Result label="Interest Earned" value={interest} />
          <Result label="Maturity Value" value={maturity} big />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        PPF interest rate is set by the government each quarter — check the
        current official rate before relying on this estimate.
      </p>
    </div>
  );
}

function Field({ label, value, onChange, step = '1' }) {
  return (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
      <input
        type="number"
        step={step}
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
