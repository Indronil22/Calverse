'use client';
import { useState } from 'react';
import { calcRD } from '@/lib/calc-functions';

export default function RDCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [months, setMonths] = useState(24);

  const { maturity, invested, interest } = calcRD(
    Number(monthly) || 0,
    Number(rate) || 0,
    Number(months) || 1
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Monthly Deposit (₹)" value={monthly} onChange={setMonthly} />
          <Field label="Interest Rate (% per year)" value={rate} onChange={setRate} step="0.1" />
          <Field label="Duration (months)" value={months} onChange={setMonths} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Total Invested" value={invested} />
          <Result label="Interest Earned" value={interest} />
          <Result label="Maturity Value" value={maturity} big />
        </div>
      </div>
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
