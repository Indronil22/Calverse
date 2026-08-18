'use client';
import { useState } from 'react';
import { calcDateDifference } from '@/lib/calc-functions';

export default function DateDifferenceCalculator() {
  const [dateA, setDateA] = useState('2024-01-01');
  const [dateB, setDateB] = useState(new Date().toISOString().slice(0, 10));

  const { totalDays, years, months, days } = calcDateDifference(dateA, dateB);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm text-muted">First Date</span>
            <input type="date" className="input mt-1" value={dateA} onChange={(e) => setDateA(e.target.value)} />
          </label>
          <label className="block">
            <span className="text-sm text-muted">Second Date</span>
            <input type="date" className="input mt-1" value={dateB} onChange={(e) => setDateB(e.target.value)} />
          </label>
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-3 text-center">
          <p className="text-3xl font-extrabold text-brand-400">{totalDays.toLocaleString('en-IN')} days</p>
          <p className="text-sm text-muted">{years}y {months}m {days}d approx.</p>
        </div>
      </div>
    </div>
  );
}
