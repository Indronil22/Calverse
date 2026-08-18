'use client';
import { useState } from 'react';
import { calcBMR } from '@/lib/calc-functions';

export default function BMRCalculator() {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('moderate');

  const { bmr, tdee } = calcBMR({
    weightKg: Number(weight) || 0,
    heightCm: Number(height) || 0,
    age: Number(age) || 0,
    gender,
    activityLevel: activity,
  });

  return (
    <div className="card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Field label="Weight (kg)" value={weight} onChange={setWeight} />
          <Field label="Height (cm)" value={height} onChange={setHeight} />
          <Field label="Age" value={age} onChange={setAge} />
          <div className="flex gap-2">
            <button onClick={() => setGender('male')} className={`flex-1 rounded-xl py-2 text-sm font-semibold ${gender === 'male' ? 'bg-brand-500' : 'toggle-btn-inactive'}`}>Male</button>
            <button onClick={() => setGender('female')} className={`flex-1 rounded-xl py-2 text-sm font-semibold ${gender === 'female' ? 'bg-brand-500' : 'toggle-btn-inactive'}`}>Female</button>
          </div>
          <label className="block">
            <span className="text-sm text-muted">Activity Level</span>
            <select className="input mt-1" value={activity} onChange={(e) => setActivity(e.target.value)}>
              <option value="sedentary">Sedentary (little/no exercise)</option>
              <option value="light">Light (1-3 days/week)</option>
              <option value="moderate">Moderate (3-5 days/week)</option>
              <option value="active">Active (6-7 days/week)</option>
              <option value="veryActive">Very Active (physical job)</option>
            </select>
          </label>
        </div>
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
          <Result label="BMR (calories at rest)" value={bmr} />
          <Result label="Daily Calories Needed (TDEE)" value={tdee} big />
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

function Result({ label, value, big }) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className={big ? 'text-3xl font-extrabold text-brand-400' : 'text-2xl font-bold'}>
        {value.toFixed(0)} kcal
      </p>
    </div>
  );
}
