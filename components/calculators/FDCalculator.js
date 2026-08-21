'use client';

import { useEffect, useRef, useState } from 'react';
import { calcFD } from '@/lib/calc-functions';

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [compounding, setCompounding] = useState(4);
  const [isOpen, setIsOpen] = useState(false);

  // Click-outside reference
  const dropdownRef = useRef(null);

  const { maturity, interest } = calcFD(
    Number(principal) || 0,
    Number(rate) || 0,
    Number(years) || 0,
    Number(compounding) || 4
  );

  const options = [
    { value: 1, label: 'Yearly' },
    { value: 2, label: 'Half-Yearly' },
    { value: 4, label: 'Quarterly' },
    { value: 12, label: 'Monthly' },
  ];

  const selectedOption = options.find(
    (option) => option.value === Number(compounding)
  );

  /* =========================================
     CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  ========================================= */

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="space-y-12">

      {/* =========================
          FD CALCULATOR
      ========================== */}

      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}
          <div className="space-y-4">

            <Field
              label="Principal Amount (₹)"
              value={principal}
              onChange={setPrincipal}
            />

            <Field
              label="Interest Rate (% per year)"
              value={rate}
              onChange={setRate}
              step="0.1"
            />

            <Field
              label="Duration (years)"
              value={years}
              onChange={setYears}
              step="0.1"
            />

            {/* COMPOUNDING FREQUENCY */}
            <div className="block">

              <span className="text-sm text-muted">
                Compounding Frequency
              </span>

              <div
                ref={dropdownRef}
                className="relative mt-1"
              >

                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="fd-dropdown-button"
                >
                  <span>
                    {selectedOption?.label}
                  </span>

                  <svg
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="fd-dropdown-menu">

                    {options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setCompounding(option.value);
                          setIsOpen(false);
                        }}
                        className={`fd-dropdown-option ${
                          Number(compounding) === option.value
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
            </div>

          </div>

          {/* RESULTS */}
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Interest Earned"
              value={interest}
            />

            <Result
              label="Maturity Value"
              value={maturity}
              big
            />

          </div>

        </div>
      </div>


      {/* =========================
          WHAT IS FD
      ========================== */}

      <section className="space-y-4">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is a Fixed Deposit (FD)?
        </h2>

        <p className="text-muted leading-relaxed">
          A Fixed Deposit (FD) is a financial investment in which you deposit
          a lump sum amount with a bank or financial institution for a
          predetermined period at a specified interest rate. At maturity,
          you receive the principal amount along with the interest earned.
        </p>

        <p className="text-muted leading-relaxed">
          The maturity value of an FD depends on factors such as the deposit
          amount, interest rate, investment tenure and compounding frequency.
          This FD calculator helps you estimate the interest earned and
          maturity amount based on these inputs.
        </p>

      </section>


      {/* =========================
          HOW FD CALCULATOR WORKS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How Does an FD Calculator Work?
        </h2>

        <p className="text-muted leading-relaxed">
          An FD calculator uses the principal amount, annual interest rate,
          investment duration and compounding frequency to estimate the
          maturity value of a fixed deposit.
        </p>

        <p className="text-muted leading-relaxed">
          When interest is compounded, the interest earned during each
          compounding period is added to the deposit. Future interest is then
          calculated on the increased balance.
        </p>

      </section>


      {/* =========================
          FD FORMULA
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          FD Interest Calculation Formula
        </h2>

        <p className="text-muted leading-relaxed">
          The compound interest formula commonly used to calculate the
          maturity value of a fixed deposit is:
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-6 text-center overflow-x-auto">

          <p className="text-lg md:text-xl font-semibold">
            A = P × (1 + R / n)<sup>nt</sup>
          </p>

        </div>

        <div className="space-y-3 text-muted leading-relaxed">

          <p>
            <strong className="text-fg">A</strong> = Maturity amount
          </p>

          <p>
            <strong className="text-fg">P</strong> = Principal deposit amount
          </p>

          <p>
            <strong className="text-fg">R</strong> = Annual interest rate in decimal form
          </p>

          <p>
            <strong className="text-fg">n</strong> = Number of compounding periods per year
          </p>

          <p>
            <strong className="text-fg">t</strong> = Investment duration in years
          </p>

        </div>

        <p className="text-muted leading-relaxed">
          The interest earned can then be estimated by subtracting the
          original principal from the maturity amount.
        </p>

      </section>


      {/* =========================
          HOW TO USE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How to Use the FD Calculator
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Enter the amount you want to invest in the fixed deposit.
          </li>

          <li>
            Enter the annual interest rate offered on the deposit.
          </li>

          <li>
            Enter the investment duration in years.
          </li>

          <li>
            Select the compounding frequency.
          </li>

          <li>
            The calculator will instantly estimate your interest earned and
            maturity value.
          </li>

        </ol>

      </section>


      {/* =========================
          EXAMPLE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          FD Calculation Example
        </h2>

        <p className="text-muted leading-relaxed">
          Suppose you invest ₹1,00,000 in an FD at an annual interest rate of
          7% for 5 years with quarterly compounding. Enter these values into
          the calculator to estimate the interest earned and maturity amount.
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-5">

          <div className="grid sm:grid-cols-2 gap-4 text-sm">

            <div>
              <p className="text-muted">Principal Amount</p>
              <p className="font-semibold">₹1,00,000</p>
            </div>

            <div>
              <p className="text-muted">Interest Rate</p>
              <p className="font-semibold">7% per year</p>
            </div>

            <div>
              <p className="text-muted">Duration</p>
              <p className="font-semibold">5 years</p>
            </div>

            <div>
              <p className="text-muted">Compounding</p>
              <p className="font-semibold">Quarterly</p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FACTORS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Factors That Affect FD Returns
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="text-lg font-semibold">
              1. Principal Amount
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The principal is the amount initially deposited into the fixed
              deposit. A larger deposit can result in greater interest
              earnings when other factors remain unchanged.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Interest Rate
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The interest rate offered by the bank or financial institution
              directly affects the amount of interest earned on the deposit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Investment Tenure
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The duration for which the money remains invested affects the
              total interest accumulated over the FD period.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              4. Compounding Frequency
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              Interest can be compounded at different intervals, such as
              yearly, half-yearly, quarterly or monthly. The compounding
              frequency affects the final maturity amount.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          FD VS SAVINGS ACCOUNT
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Fixed Deposit vs Savings Account
        </h2>

        <p className="text-muted leading-relaxed">
          A savings account is generally designed for keeping money accessible
          for everyday transactions, while a fixed deposit is designed for
          investing a lump sum for a predetermined period. An FD generally
          provides a predetermined interest rate for the selected tenure,
          while a savings account offers greater liquidity.
        </p>

      </section>


      {/* =========================
          FAQ
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions About FD
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">
              What is an FD calculator?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              An FD calculator is an online tool that estimates the interest
              earned and maturity value of a fixed deposit using the deposit
              amount, interest rate, tenure and compounding frequency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              How is FD maturity calculated?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              FD maturity is calculated using the principal amount, applicable
              interest rate, investment tenure and compounding frequency.
              Compound interest calculations can be used when the FD uses
              periodic compounding.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              What does quarterly compounding mean?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Quarterly compounding means that interest is compounded four
              times in a year.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Can I use this FD calculator for different interest rates?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. You can enter different principal amounts, interest rates,
              durations and compounding frequencies to compare estimated FD
              maturity values.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Is this FD calculator free?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. The calculator is free to use and does not require an
              account or login.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          DISCLAIMER
      ========================== */}

      <section className="border-t border-border pt-6">

        <p className="text-xs text-muted leading-relaxed">
          <strong>Disclaimer:</strong> The results provided by this FD
          calculator are estimates for informational purposes only. Actual
          fixed deposit returns may vary depending on the applicable interest
          rate, compounding method, tenure, bank or financial institution
          terms and taxes. Check the applicable terms before making an
          investment decision.
        </p>

      </section>

    </div>
  );
}


/* =========================================
   INPUT FIELD
========================================= */

function Field({
  label,
  value,
  onChange,
  step = '1',
}) {
  return (
    <label className="block">

      <span className="text-sm text-muted">
        {label}
      </span>

      <input
        type="number"
        step={step}
        className="input mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </label>
  );
}


/* =========================================
   RESULT
========================================= */

function Result({
  label,
  value,
  big,
}) {
  return (
    <div>

      <p className="text-xs text-muted">
        {label}
      </p>

      <p
        className={
          big
            ? 'text-3xl font-extrabold text-brand-400'
            : 'text-2xl font-bold'
        }
      >
        ₹
        {value.toLocaleString('en-IN', {
          maximumFractionDigits: 0,
        })}
      </p>

    </div>
  );
}