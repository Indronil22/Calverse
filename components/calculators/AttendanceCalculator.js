'use client';
import { useState } from 'react';
import { calcAttendance, calcRequiredAttendance } from '@/lib/calc-functions';

export default function AttendanceCalculator() {
  const [attended, setAttended] = useState(42);
  const [total, setTotal] = useState(50);
  const [target, setTarget] = useState(75);

  const pct = calcAttendance(Number(attended) || 0, Number(total) || 1);
  const req = calcRequiredAttendance(Number(attended) || 0, Number(total) || 1, Number(target) || 75);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Classes Attended" value={attended} onChange={setAttended} />
          <Field label="Total Classes Held" value={total} onChange={setTotal} />
          <Field label="Target Attendance (%)" value={target} onChange={setTarget} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <div>
            <p className="text-xs text-muted">Current Attendance</p>
            <p className="text-3xl font-extrabold text-brand-400">{pct.toFixed(2)}%</p>
          </div>
          <div>
            {req.status === 'ahead' ? (
              <p className="text-sm text-fg">
                You&apos;re above target — you can skip{' '}
                <span className="font-bold text-fg">{req.classesCanSkip}</span> more class(es)
                and stay at or above {target}%.
              </p>
            ) : (
              <p className="text-sm text-fg">
                You need to attend the next{' '}
                <span className="font-bold text-fg">{req.classesNeeded}</span> class(es) in a
                row to reach {target}%.
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
