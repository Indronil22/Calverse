'use client';
import { useState } from 'react';
import { calcInHandSalary } from '@/lib/calc-functions';

export default function SalaryCalculator() {
  const [ctc, setCtc] = useState(1200000);
  const [pfPct, setPfPct] = useState(12);
  const [profTax, setProfTax] = useState(200);
  const [otherDed, setOtherDed] = useState(0);

  const { grossMonthly, employeePF, inHand } = calcInHandSalary(
    Number(ctc) || 0,
    Number(pfPct) || 0,
    Number(profTax) || 0,
    Number(otherDed) || 0
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Annual CTC (₹)" value={ctc} onChange={setCtc} />
          <Field label="PF Contribution (%)" value={pfPct} onChange={setPfPct} step="0.1" />
          <Field label="Professional Tax (per month, ₹)" value={profTax} onChange={setProfTax} />
          <Field label="Other Monthly Deductions (₹)" value={otherDed} onChange={setOtherDed} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Gross Monthly (after employer PF)" value={grossMonthly} />
          <Result label="Your PF Deduction" value={employeePF} />
          <Result label="Estimated In-Hand (monthly)" value={inHand} big />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        Simplified estimate — actual take-home varies with your exact salary
        structure, HRA, allowances and applicable income tax deducted at
        source (TDS).
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
