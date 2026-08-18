'use client';
import { useState } from 'react';
import { calcHRAExemption } from '@/lib/calc-functions';

export default function HRACalculator() {
  const [basicSalary, setBasicSalary] = useState(30000);
  const [hraReceived, setHraReceived] = useState(15000);
  const [rentPaid, setRentPaid] = useState(18000);
  const [isMetro, setIsMetro] = useState(true);

  const { exemption, taxableHRA } = calcHRAExemption({
    basicSalary: Number(basicSalary) || 0,
    hraReceived: Number(hraReceived) || 0,
    rentPaid: Number(rentPaid) || 0,
    isMetro,
  });

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Basic Salary (per month, ₹)" value={basicSalary} onChange={setBasicSalary} />
          <Field label="HRA Received (per month, ₹)" value={hraReceived} onChange={setHraReceived} />
          <Field label="Rent Paid (per month, ₹)" value={rentPaid} onChange={setRentPaid} />
          <div className="flex gap-2">
            <button
              onClick={() => setIsMetro(true)}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${isMetro ? 'bg-brand-500' : 'toggle-btn-inactive'}`}
            >
              Metro City
            </button>
            <button
              onClick={() => setIsMetro(false)}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${!isMetro ? 'bg-brand-500' : 'toggle-btn-inactive'}`}
            >
              Non-Metro
            </button>
          </div>
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="HRA Exemption (per month)" value={exemption} big />
          <Result label="Taxable HRA (per month)" value={taxableHRA} />
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        Exemption = minimum of: HRA received, 50%/40% of basic (metro/non-metro),
        or rent paid minus 10% of basic — as per Indian income tax rules.
      </p>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
      <input
        type="number"
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
