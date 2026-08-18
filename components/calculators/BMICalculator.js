'use client';
import { useState } from 'react';
import { calcBMI } from '@/lib/calc-functions';

export default function BMICalculator() {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(170);

  const { bmi, category } = calcBMI(Number(weight) || 0, Number(height) || 1);

  const colors = {
    Underweight: 'text-yellow-400',
    Normal: 'text-green-400',
    Overweight: 'text-orange-400',
    Obese: 'text-red-400',
  };

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Weight (kg)" value={weight} onChange={setWeight} />
          <Field label="Height (cm)" value={height} onChange={setHeight} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <p className="text-3xl font-extrabold">{bmi.toFixed(1)}</p>
          <p className={`text-lg font-semibold ${colors[category]}`}>{category}</p>
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        BMI is a general screening tool, not a diagnosis — talk to a doctor
        for a full picture of your health.
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
