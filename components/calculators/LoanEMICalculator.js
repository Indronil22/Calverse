'use client';
import { useState } from 'react';
import { calcEMI } from '@/lib/calc-functions';

export default function LoanEMICalculator({ defaultPrincipal = 800000, defaultRate = 9, defaultTenure = 60 }) {
  const [principal, setPrincipal] = useState(defaultPrincipal);
  const [rate, setRate] = useState(defaultRate);
  const [tenure, setTenure] = useState(defaultTenure);

  const { emi, totalPayment, totalInterest } = calcEMI(
    Number(principal) || 0,
    Number(rate) || 0,
    Number(tenure) || 1
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Loan Amount (₹)" value={principal} onChange={setPrincipal} />
          <Field label="Interest Rate (% per year)" value={rate} onChange={setRate} step="0.1" />
          <Field label="Tenure (months)" value={tenure} onChange={setTenure} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Monthly EMI" value={emi} big />
          <Result label="Total Interest" value={totalInterest} />
          <Result label="Total Payment" value={totalPayment} />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, step = '1' }) {
  return (
    <label className="block">
      <span className="text-sm text-muted dark:text-muted">{label}</span>
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
