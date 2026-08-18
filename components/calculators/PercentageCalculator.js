'use client';
import { useState } from 'react';

export default function PercentageCalculator() {
  const [value, setValue] = useState(50);
  const [total, setTotal] = useState(200);

  const [oldVal, setOldVal] = useState(100);
  const [newVal, setNewVal] = useState(150);

  const percentOf = total ? (Number(value) / Number(total)) * 100 : 0;
  const change = oldVal ? ((Number(newVal) - Number(oldVal)) / Number(oldVal)) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="card p-6 md:p-8">
        <h3 className="font-semibold mb-4">What % is X of Y?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Field label="Value (X)" value={value} onChange={setValue} />
            <Field label="Total (Y)" value={total} onChange={setTotal} />
          </div>
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">
            <p className="text-3xl font-extrabold text-brand-400">{percentOf.toFixed(2)}%</p>
          </div>
        </div>
      </div>

      <div className="card p-6 md:p-8">
        <h3 className="font-semibold mb-4">Percentage Change</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Field label="Old Value" value={oldVal} onChange={setOldVal} />
            <Field label="New Value" value={newVal} onChange={setNewVal} />
          </div>
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">
            <p className={`text-3xl font-extrabold ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {change >= 0 ? '+' : ''}{change.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
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
