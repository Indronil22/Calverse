'use client';
import { useState } from 'react';
import { calcGST } from '@/lib/calc-functions';

export default function GSTCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(18);
  const [mode, setMode] = useState('add');

  const { baseAmount, gstAmount, totalAmount } = calcGST(
    Number(amount) || 0,
    Number(rate) || 0,
    mode
  );

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm text-white/60">Amount (₹)</span>
            <input
              type="number"
              className="input mt-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-sm text-white/60">GST Rate</span>
            <select
              className="input mt-1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            >
              {[5, 12, 18, 28].map((r) => (
                <option key={r} value={r}>{r}%</option>
              ))}
            </select>
          </label>

          <div className="flex gap-2">
            <button
              onClick={() => setMode('add')}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${mode === 'add' ? 'bg-brand-500' : 'bg-white/10'}`}
            >
              Add GST
            </button>
            <button
              onClick={() => setMode('remove')}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${mode === 'remove' ? 'bg-brand-500' : 'bg-white/10'}`}
            >
              Remove GST
            </button>
          </div>
        </div>

        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="Base Amount" value={baseAmount} />
          <Result label="GST Amount" value={gstAmount} />
          <Result label="Total Amount" value={totalAmount} />
        </div>
      </div>
    </div>
  );
}

function Result({ label, value }) {
  return (
    <div>
      <p className="text-xs text-white/50">{label}</p>
      <p className="text-2xl font-bold">
        ₹{value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
      </p>
    </div>
  );
}
