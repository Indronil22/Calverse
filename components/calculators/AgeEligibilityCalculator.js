'use client';
import { useState } from 'react';
import { calcAgeEligibility } from '@/lib/calc-functions';

export default function AgeEligibilityCalculator() {
  const [birthDate, setBirthDate] = useState('2005-06-15');
  const [cutoffDate, setCutoffDate] = useState(new Date().toISOString().slice(0, 10));
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(25);

  const { years, months, days, eligible } = calcAgeEligibility(
    birthDate,
    cutoffDate,
    Number(minAge) || 0,
    Number(maxAge) || null
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm text-muted">Date of Birth</span>
            <input type="date" className="input mt-1" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          </label>
          <label className="block">
            <span className="text-sm text-muted">Eligibility Cutoff Date</span>
            <input type="date" className="input mt-1" value={cutoffDate} onChange={(e) => setCutoffDate(e.target.value)} />
          </label>
          <Field label="Minimum Age Required" value={minAge} onChange={setMinAge} />
          <Field label="Maximum Age Allowed (0 = none)" value={maxAge} onChange={setMaxAge} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-3 items-center text-center">
          <p className="text-2xl font-bold">{years}y {months}m {days}d</p>
          <p className={`text-lg font-semibold ${eligible ? 'text-green-400' : 'text-red-400'}`}>
            {eligible ? '✅ Eligible' : '❌ Not Eligible'}
          </p>
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
