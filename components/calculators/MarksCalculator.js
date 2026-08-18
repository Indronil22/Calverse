'use client';
import { useState } from 'react';
import { calcMarksNeeded } from '@/lib/calc-functions';

export default function MarksCalculator() {
  const [currentTotal, setCurrentTotal] = useState(320);
  const [currentMax, setCurrentMax] = useState(400);
  const [remainingMax, setRemainingMax] = useState(200);
  const [targetPct, setTargetPct] = useState(85);

  const { needed, possible } = calcMarksNeeded(
    Number(currentTotal) || 0,
    Number(currentMax) || 0,
    Number(remainingMax) || 0,
    Number(targetPct) || 0
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Marks Scored So Far" value={currentTotal} onChange={setCurrentTotal} />
          <Field label="Max Marks So Far" value={currentMax} onChange={setCurrentMax} />
          <Field label="Max Marks Remaining" value={remainingMax} onChange={setRemainingMax} />
          <Field label="Target Overall %" value={targetPct} onChange={setTargetPct} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xs text-muted">Marks Needed in Remaining Exams</p>
            <p className="text-3xl font-extrabold text-brand-400">{needed.toFixed(1)}</p>
            {!possible && (
              <p className="text-xs text-red-400 mt-2">
                Not achievable — exceeds max remaining marks.
              </p>
            )}
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
