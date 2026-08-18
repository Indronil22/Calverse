'use client';
import { useState } from 'react';
import { calcLoanVsCash } from '@/lib/calc-functions';

export default function LoanVsCashCalculator() {
  const [price, setPrice] = useState(800000);
  const [downPayment, setDownPayment] = useState(150000);
  const [rate, setRate] = useState(9);
  const [tenure, setTenure] = useState(60);
  const [investReturn, setInvestReturn] = useState(10);

  const { loanAmount, emi, totalInterest, totalPayment, cashOption, loanOptionEffectiveCost } =
    calcLoanVsCash(
      Number(price) || 0,
      Number(downPayment) || 0,
      Number(rate) || 0,
      Number(tenure) || 1,
      Number(investReturn) || 0
    );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Vehicle/Item Price (₹)" value={price} onChange={setPrice} />
          <Field label="Down Payment (₹)" value={downPayment} onChange={setDownPayment} />
          <Field label="Loan Interest Rate (%)" value={rate} onChange={setRate} step="0.1" />
          <Field label="Loan Tenure (months)" value={tenure} onChange={setTenure} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Pay Cash: Total Cost" value={cashOption} />
          <Result label="Take Loan: Monthly EMI" value={emi} />
          <Result label="Take Loan: Total Interest Paid" value={totalInterest} />
          <Result label="Take Loan: Effective Total Cost" value={loanOptionEffectiveCost} big />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        Paying cash avoids interest entirely but ties up your money. Taking a
        loan costs more overall but frees up cash you could invest elsewhere
        — compare the loan interest rate against what you could realistically
        earn investing the difference.
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
