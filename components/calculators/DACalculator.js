'use client';
import { useState } from 'react';
import { calcDA } from '@/lib/calc-functions';

export default function DACalculator() {
  const [basicPay, setBasicPay] = useState(30000);
  const [daPct, setDaPct] = useState(50);

  const { daAmount, totalPay } = calcDA(Number(basicPay) || 0, Number(daPct) || 0);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Basic Pay (₹)" value={basicPay} onChange={setBasicPay} />
          <Field label="DA Rate (%)" value={daPct} onChange={setDaPct} step="0.1" />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="DA Amount" value={daAmount} />
          <Result label="Basic Pay + DA" value={totalPay} big />
        </div>
      </div>
      <p className="text-xs text-white/40 mt-4">
        DA rates are revised periodically by the government — check the latest
        notified rate for your pay commission before relying on this figure.
      </p>
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
