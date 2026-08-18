'use client';
import { useState } from 'react';
import { calcDiscount } from '@/lib/calc-functions';

export default function DiscountCalculator() {
  const [price, setPrice] = useState(1999);
  const [discount, setDiscount] = useState(20);

  const { discountAmount, finalPrice } = calcDiscount(Number(price) || 0, Number(discount) || 0);

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Original Price (₹)" value={price} onChange={setPrice} />
          <Field label="Discount (%)" value={discount} onChange={setDiscount} />
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="You Save" value={discountAmount} />
          <Result label="Final Price" value={finalPrice} big />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-white/60">{label}</span>
      <input
        type="number"
        className="input mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function Result({ label, value, big }) {
  return (
    <div>
      <p className="text-xs text-white/50">{label}</p>
      <p className={big ? 'text-3xl font-extrabold text-brand-400' : 'text-2xl font-bold'}>
        ₹{value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
      </p>
    </div>
  );
}
