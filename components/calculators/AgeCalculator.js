'use client';
import { useState } from 'react';
import { calcAge } from '@/lib/calc-functions';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('2000-01-01');
  const { years, months, days, totalDays } = calcAge(birthDate);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm text-muted">Date of Birth</span>
            <input
              type="date"
              className="input mt-1"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </label>
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <p className="text-3xl font-extrabold text-brand-400">
            {years}y {months}m {days}d
          </p>
          <p className="text-sm text-muted">{totalDays.toLocaleString('en-IN')} total days</p>
        </div>
      </div>
    </div>
  );
}
