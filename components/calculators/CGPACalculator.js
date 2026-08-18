'use client';
import { useState } from 'react';
import { calcCGPAFromGrades, calcCGPAToPercentage } from '@/lib/calc-functions';

export default function CGPACalculator() {
  const [subjects, setSubjects] = useState([
    { credits: '', gradePoint: '' },
    { credits: '', gradePoint: '' },
  ]);

  const cgpa = calcCGPAFromGrades(subjects);
  const percentage = calcCGPAToPercentage(cgpa);

  function updateSubject(index, field, value) {
    const next = [...subjects];
    next[index] = { ...next[index], [field]: value };
    setSubjects(next);
  }

  function addSubject() {
    setSubjects([...subjects, { credits: 3, gradePoint: 8 }]);
  }

  function removeSubject(index) {
    setSubjects(subjects.filter((_, i) => i !== index));
  }

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {subjects.map((s, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="number"
                className="input"
                placeholder="Credits"
                value={s.credits}
                onChange={(e) => updateSubject(i, 'credits', e.target.value)}
              />
              <input
                type="number"
                className="input"
                placeholder="Grade Point"
                value={s.gradePoint}
                onChange={(e) => updateSubject(i, 'gradePoint', e.target.value)}
              />
              <button
                onClick={() => removeSubject(i)}
                className="text-muted-2 hover:text-red-400 px-2"
                aria-label="Remove subject"
              >
                ✕
              </button>
            </div>
          ))}
          <button onClick={addSubject} className="text-brand-400 text-sm font-semibold">
            + Add Subject
          </button>
        </div>

        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <div>
            <p className="text-xs text-muted">CGPA</p>
            <p className="text-3xl font-extrabold text-brand-400">{cgpa.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xs text-muted">Equivalent Percentage</p>
            <p className="text-2xl font-bold">{percentage.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
