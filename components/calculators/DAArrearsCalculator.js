'use client';
import { useState } from 'react';

export default function DAArrearsCalculator() {
  const [basicPay, setBasicPay] = useState(30000);
  const [oldDaPct, setOldDaPct] = useState(42);
  const [newDaPct, setNewDaPct] = useState(50);
  const [months, setMonths] = useState(6);

  const oldDA = (Number(basicPay) * Number(oldDaPct)) / 100;
  const newDA = (Number(basicPay) * Number(newDaPct)) / 100;
  const arrearsPerMonth = newDA - oldDA;
  const totalArrears = arrearsPerMonth * (Number(months) || 0);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Basic Pay (₹)" value={basicPay} onChange={setBasicPay} />
          <Field label="Old DA Rate (%)" value={oldDaPct} onChange={setOldDaPct} step="0.1" />
          <Field label="New DA Rate (%)" value={newDaPct} onChange={setNewDaPct} step="0.1" />
          <Field label="Arrear Period (months)" value={months} onChange={setMonths} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Arrears per Month" value={arrearsPerMonth} />
          <Result label="Total Arrears" value={totalArrears} big />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        DA arrears = difference between new and old DA amount, multiplied by
        the number of months the revised rate applies retroactively.
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
