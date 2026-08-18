'use client';
import { useState } from 'react';
import { calcTimeDuration } from '@/lib/calc-functions';

export default function TimeCalculator() {
  const [start, setStart] = useState('09:00');
  const [end, setEnd] = useState('17:30');

  const { hours, minutes, totalMinutes } = calcTimeDuration(start, end);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm text-muted">Start Time</span>
            <input type="time" className="input mt-1" value={start} onChange={(e) => setStart(e.target.value)} />
          </label>
          <label className="block">
            <span className="text-sm text-muted">End Time</span>
            <input type="time" className="input mt-1" value={end} onChange={(e) => setEnd(e.target.value)} />
          </label>
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-3xl font-extrabold text-brand-400">{hours}h {minutes}m</p>
          <p className="text-sm text-muted">{totalMinutes} total minutes</p>
        </div>
      </div>
    </div>
  );
}
