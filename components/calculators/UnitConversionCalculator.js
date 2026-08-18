'use client';
import { useState } from 'react';
import { calcUnitConversion } from '@/lib/calc-functions';

const unitOptions = {
  length: ['m', 'km', 'cm', 'mm', 'mile', 'yard', 'foot', 'inch'],
  weight: ['kg', 'g', 'mg', 'tonne', 'pound', 'ounce'],
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
  volume: ['liter', 'ml', 'gallon', 'cup', 'tablespoon', 'teaspoon'],
};

export default function UnitConversionCalculator() {
  const [category, setCategory] = useState('length');
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState('km');
  const [toUnit, setToUnit] = useState('m');

  const { result } = calcUnitConversion(Number(value) || 0, category, fromUnit, toUnit);

  function handleCategoryChange(cat) {
    setCategory(cat);
    setFromUnit(unitOptions[cat][0]);
    setToUnit(unitOptions[cat][1]);
  }

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm text-muted">Category</span>
            <select className="input mt-1" value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
              {Object.keys(unitOptions).map((c) => (
                <option key={c} value={c}>{c[0].toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm text-muted">Value</span>
            <input type="number" className="input mt-1" value={value} onChange={(e) => setValue(e.target.value)} />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm text-muted">From</span>
              <select className="input mt-1" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                {unitOptions[category].map((u) => <option key={u} value={u}>{u}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-muted">To</span>
              <select className="input mt-1" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                {unitOptions[category].map((u) => <option key={u} value={u}>{u}</option>)}
              </select>
            </label>
          </div>
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center text-center">
          <p className="text-2xl font-bold">
            {value} {fromUnit} = <span className="text-brand-400 font-extrabold">{result.toLocaleString('en-IN', { maximumFractionDigits: 4 })}</span> {toUnit}
          </p>
        </div>
      </div>
    </div>
  );
}
