'use client';
import { useState } from 'react';
import { calcGPA4Scale } from '@/lib/calc-functions';

export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
    { credits: 3, gradePoint: 4.0 },
    { credits: 3, gradePoint: 3.7 },
    { credits: 4, gradePoint: 3.3 },
  ]);

  const gpa = calcGPA4Scale(subjects);

  function updateSubject(index, field, value) {
    const next = [...subjects];
    next[index] = { ...next[index], [field]: value };
    setSubjects(next);
  }

  function addSubject() {
    setSubjects([...subjects, { credits: 3, gradePoint: 3.0 }]);
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
                step="0.1"
                max="4"
                className="input"
                placeholder="Grade Point (0-4)"
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

        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">
          <div>
            <p className="text-xs text-muted">GPA (4.0 scale)</p>
            <p className="text-3xl font-extrabold text-brand-400">{gpa.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
