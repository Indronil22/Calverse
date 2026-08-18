'use client';
import { useState } from 'react';
import { calcFD } from '@/lib/calc-functions';

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [compounding, setCompounding] = useState(4);

  const { maturity, interest } = calcFD(
    Number(principal) || 0,
    Number(rate) || 0,
    Number(years) || 0,
    Number(compounding) || 4
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Principal Amount (₹)" value={principal} onChange={setPrincipal} />
          <Field label="Interest Rate (% per year)" value={rate} onChange={setRate} step="0.1" />
          <Field label="Duration (years)" value={years} onChange={setYears} step="0.1" />
          <label className="block">
            <span className="text-sm text-muted">Compounding Frequency</span>
            <select
              className="input mt-1"
              value={compounding}
              onChange={(e) => setCompounding(e.target.value)}
            >
              <option value={1}>Yearly</option>
              <option value={2}>Half-Yearly</option>
              <option value={4}>Quarterly</option>
              <option value={12}>Monthly</option>
            </select>
          </label>
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
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
