'use client';

import { useEffect, useState } from 'react';
import { calcAge } from '@/lib/calc-functions';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('2000-01-01');
  const [birthTime, setBirthTime] = useState('');
  const [now, setNow] = useState(new Date());

  // Update age every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const {
    years,
    months,
    days,
    hours,
    minutes,
    totalDays,
  } = calcAge(birthDate, birthTime, now);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">

        {/* Inputs */}
        <div className="space-y-4">

          <label className="block">
            <span className="text-sm text-muted">
              Date of Birth
            </span>

            <input
              type="date"
              className="input mt-1"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-sm text-muted">
              Time of Birth{' '}
              <span className="text-muted-2">(optional)</span>
            </span>

            <input
              type="time"
              className="input mt-1"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
            />
          </label>

        </div>

        {/* Result */}
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

          <div>
            <p className="text-xs text-muted">
              Your Age
            </p>

            <p className="text-3xl font-extrabold text-brand-400">
              {years}y {months}m {days}d
            </p>

            {birthTime && (
              <p className="text-lg font-bold text-fg mt-1">
                {hours}h {minutes}m
              </p>
            )}
          </div>

          <p className="text-sm text-muted">
            {totalDays.toLocaleString('en-IN')} total days
          </p>

        </div>
      </div>
    </div>
  );
}