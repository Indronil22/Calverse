'use client';
import { useState } from 'react';
import { calcYGPA } from '@/lib/calc-functions';

export default function YGPACalculator() {
  const [semesters, setSemesters] = useState([
    { sgpa: '', credits: '' },
    { sgpa: '', credits: '' },
  ]);

  const ygpa = calcYGPA(semesters);

  function update(index, field, value) {
    const next = [...semesters];
    next[index] = { ...next[index], [field]: value };
    setSemesters(next);
  }

  function addSemester() {
    setSemesters([...semesters, { sgpa: 8, credits: 22 }]);
  }

  function removeSemester(index) {
    setSemesters(semesters.filter((_, i) => i !== index));
  }

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {semesters.map((s, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="number"
                className="input"
                placeholder="SGPA"
                step="0.01"
                value={s.sgpa}
                onChange={(e) => update(i, 'sgpa', e.target.value)}
              />
              <input
                type="number"
                className="input"
                placeholder="Credits"
                value={s.credits}
                onChange={(e) => update(i, 'credits', e.target.value)}
              />
              <button
                onClick={() => removeSemester(i)}
                className="text-muted-2 hover:text-red-400 px-2"
                aria-label="Remove semester"
              >
                ✕
              </button>
            </div>
          ))}
          <button onClick={addSemester} className="text-brand-400 text-sm font-semibold">
            + Add Semester
          </button>
        </div>

        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center">
          <p className="text-xs text-muted">YGPA (Year Grade Point Average)</p>
          <p className="text-3xl font-extrabold text-brand-400">{ygpa.toFixed(2)}</p>
        </div>
      </div>
      <p className="text-xs text-muted-2 mt-4">
        YGPA is the credit-weighted average of the SGPA of both semesters in
        one academic year — used by universities like GTU that grade
        year-wise rather than only semester-wise.
      </p>
    </div>
  );
}
