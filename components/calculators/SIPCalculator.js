'use client';
import { useState } from 'react';
import { calcSIP } from '@/lib/calc-functions';

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);

  const { futureValue, invested, gains } = calcSIP(
    Number(monthly) || 0,
    Number(returnRate) || 0,
    Number(years) || 1
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Monthly Investment (₹)" value={monthly} onChange={setMonthly} />
          <Field label="Expected Return (% per year)" value={returnRate} onChange={setReturnRate} step="0.1" />
          <Field label="Investment Duration (years)" value={years} onChange={setYears} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Invested Amount" value={invested} />
          <Result label="Estimated Gains" value={gains} />
          <Result label="Future Value" value={futureValue} big />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, step = '1' }) {
  return (
    <label className="block">
      <span className="text-sm text-white/60">{label}</span>
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
      <p className="text-xs text-white/50">{label}</p>
      <p className={big ? 'text-3xl font-extrabold text-brand-400' : 'text-2xl font-bold'}>
        ₹{value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
      </p>
    </div>
  );
}
