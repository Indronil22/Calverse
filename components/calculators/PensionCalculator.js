'use client';
import { useState } from 'react';
import { calcPensionEstimate } from '@/lib/calc-functions';

export default function PensionCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [returnRate, setReturnRate] = useState(10);
  const [years, setYears] = useState(25);
  const [annuityPct, setAnnuityPct] = useState(40);

  const { corpus, annuityCorpus, lumpSum, estimatedMonthlyPension } = calcPensionEstimate(
    Number(monthly) || 0,
    Number(returnRate) || 0,
    Number(years) || 1,
    Number(annuityPct) || 40
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Monthly Contribution (₹)" value={monthly} onChange={setMonthly} />
          <Field label="Expected Return (% per year)" value={returnRate} onChange={setReturnRate} step="0.1" />
          <Field label="Years to Retirement" value={years} onChange={setYears} />
          <Field label="% of Corpus for Annuity" value={annuityPct} onChange={setAnnuityPct} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Total Corpus at Retirement" value={corpus} big />
          <Result label="Lump Sum Withdrawable" value={lumpSum} />
          <Result label="Est. Monthly Pension" value={estimatedMonthlyPension} />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        Illustrative estimate using an assumed 6% annuity payout rate —
        actual pension depends on the annuity provider and rates at
        retirement.
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
