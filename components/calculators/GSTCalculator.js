'use client';

import { useEffect, useRef, useState } from 'react';
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

        {/* Inputs */}
        <div className="space-y-4">

          {/* Amount */}
          <label className="block">
            <span className="text-sm text-muted">
              Amount (₹)
            </span>

            <input
              type="number"
              className="input mt-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>

          {/* GST Rate - Custom Dropdown */}
          <div className="block relative z-50">
            <span className="text-sm text-muted">
              GST Rate
            </span>

            <GSTRateDropdown
              value={rate}
              onChange={setRate}
            />
          </div>

          {/* Add / Remove GST */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode('add')}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                mode === 'add'
                  ? 'bg-brand-500'
                  : 'toggle-btn-inactive'
              }`}
            >
              Add GST
            </button>

            <button
              type="button"
              onClick={() => setMode('remove')}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                mode === 'remove'
                  ? 'bg-brand-500'
                  : 'toggle-btn-inactive'
              }`}
            >
              Remove GST
            </button>
          </div>

        </div>

        {/* Results */}
        <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

          <Result
            label="Base Amount"
            value={baseAmount}
          />

          <Result
            label="GST Amount"
            value={gstAmount}
          />

          <Result
            label="Total Amount"
            value={totalAmount}
          />

        </div>
      </div>
    </div>
  );
}


/* =========================================
   GST RATE CUSTOM DROPDOWN
========================================= */

function GSTRateDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);

  // Reference for detecting outside clicks
  const dropdownRef = useRef(null);

  const options = [
    {
      value: 5,
      label: '5%',
    },
    {
      value: 12,
      label: '12%',
    },
    {
      value: 18,
      label: '18%',
    },
    {
      value: 28,
      label: '28%',
    },
  ];

  const selected =
    options.find(
      (option) => option.value === Number(value)
    ) || options[2];


  /* =========================================
     CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  ========================================= */

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);


  return (
    <div
      ref={dropdownRef}
      className="relative mt-1"
    >

      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fd-dropdown-button"
      >
        <span>
          {selected.label}
        </span>

        <span className="text-sm">
          {open ? '▲' : '▼'}
        </span>
      </button>


      {/* Dropdown Menu */}
      {open && (
        <div className="fd-dropdown-menu">

          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`fd-dropdown-option ${
                option.value === Number(value)
                  ? 'selected'
                  : ''
              }`}
            >
              {option.label}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}


/* =========================================
   RESULT
========================================= */

function Result({ label, value }) {
  return (
    <div>
      <p className="text-xs text-muted">
        {label}
      </p>

      <p className="text-2xl font-bold">
        ₹
        {value.toLocaleString('en-IN', {
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}