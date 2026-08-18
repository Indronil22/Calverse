'use client';
import { useState } from 'react';
import { calcDA } from '@/lib/calc-functions';

export default function DRCalculator() {
  const [pension, setPension] = useState(20000);
  const [drPct, setDrPct] = useState(50);

  const { daAmount, totalPay } = calcDA(Number(pension) || 0, Number(drPct) || 0);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Basic Pension (₹)" value={pension} onChange={setPension} />
          <Field label="DR Rate (%)" value={drPct} onChange={setDrPct} step="0.1" />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="DR Amount" value={daAmount} />
          <Result label="Total Pension (with DR)" value={totalPay} big />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        Dearness Relief is DA&apos;s pensioner equivalent, revised periodically —
        check the latest notified rate before relying on this figure.
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
