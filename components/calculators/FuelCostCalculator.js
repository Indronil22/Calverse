'use client';
import { useState } from 'react';
import { calcFuelCost } from '@/lib/calc-functions';

export default function FuelCostCalculator() {
  const [distance, setDistance] = useState(100);
  const [mileage, setMileage] = useState(15);
  const [price, setPrice] = useState(100);

  const { litersNeeded, cost, costPerKm } = calcFuelCost(
    Number(distance) || 0,
    Number(mileage) || 1,
    Number(price) || 0
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Trip Distance (km)" value={distance} onChange={setDistance} />
          <Field label="Vehicle Mileage (km/l)" value={mileage} onChange={setMileage} />
          <Field label="Fuel Price (₹/l)" value={price} onChange={setPrice} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Fuel Needed" value={`${litersNeeded.toFixed(2)} L`} />
          <Result label="Cost per km" value={`₹${costPerKm.toFixed(2)}`} />
          <Result label="Total Trip Cost" value={`₹${cost.toFixed(0)}`} big />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-white/60">{label}</span>
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
      <p className="text-xs text-white/50">{label}</p>
      <p className={big ? 'text-3xl font-extrabold text-brand-400' : 'text-2xl font-bold'}>
        {value}
      </p>
    </div>
  );
}
