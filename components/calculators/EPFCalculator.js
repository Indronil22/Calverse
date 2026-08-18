'use client';
import { useState } from 'react';
import { calcEPF } from '@/lib/calc-functions';

export default function EPFCalculator() {
  const [basicDA, setBasicDA] = useState(25000);
  const [empPct, setEmpPct] = useState(12);
  const [emprPct, setEmprPct] = useState(3.67);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8.25);

  const { monthlyEmployee, monthlyEmployer, futureValue, invested, interest } = calcEPF(
    Number(basicDA) || 0,
    Number(empPct) || 0,
    Number(emprPct) || 0,
    Number(years) || 1,
    Number(rate) || 8.25
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Basic Salary + DA (per month, ₹)" value={basicDA} onChange={setBasicDA} />
          <Field label="Employee Contribution (%)" value={empPct} onChange={setEmpPct} step="0.1" />
          <Field label="Employer Contribution (%)" value={emprPct} onChange={setEmprPct} step="0.01" />
          <Field label="Years to Retirement" value={years} onChange={setYears} />
          <Field label="Expected EPF Interest Rate (%)" value={rate} onChange={setRate} step="0.01" />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Your Monthly Contribution" value={monthlyEmployee} />
          <Result label="Employer's Monthly Contribution" value={monthlyEmployer} />
          <Result label="Total Invested" value={invested} />
          <Result label="Interest Earned" value={interest} />
          <Result label="Maturity Value" value={futureValue} big />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        EPF interest rate is announced annually by EPFO — this is an estimate
        assuming a constant rate over the full period.
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
