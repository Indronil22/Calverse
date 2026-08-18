'use client';
import { useState } from 'react';
import { calcDGPA } from '@/lib/calc-functions';

export default function DGPACalculator() {
  const [years, setYears] = useState([
    { ygpa: '', credits: '' },
    { ygpa: '', credits: '' },
    { ygpa: '', credits: '' },
    { ygpa: '', credits: '' },
  ]);

  const dgpa = calcDGPA(years);

  function update(index, field, value) {
    const next = [...years];
    next[index] = { ...next[index], [field]: value };
    setYears(next);
  }

  function addYear() {
    setYears([...years, { ygpa: 8, credits: 46 }]);
  }

  function removeYear(index) {
    setYears(years.filter((_, i) => i !== index));
  }

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {years.map((y, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="number"
                className="input"
                placeholder="YGPA"
                step="0.01"
                value={y.ygpa}
                onChange={(e) => update(i, 'ygpa', e.target.value)}
              />
              <input
                type="number"
                className="input"
                placeholder="Credits"
                value={y.credits}
                onChange={(e) => update(i, 'credits', e.target.value)}
              />
              <button
                onClick={() => removeYear(i)}
                className="text-muted-2 hover:text-red-400 px-2"
                aria-label="Remove year"
              >
                ✕
              </button>
            </div>
          ))}
          <button onClick={addYear} className="text-brand-400 text-sm font-semibold">
            + Add Year
          </button>
        </div>

        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center">
          <p className="text-xs text-muted">DGPA (Degree Grade Point Average)</p>
          <p className="text-3xl font-extrabold text-brand-400">{dgpa.toFixed(2)}</p>
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        DGPA is the credit-weighted average of every year&apos;s YGPA across
        the full degree — your final cumulative grade point average on
        graduation.
      </p>
    </div>
  );
}
