'use client';

import { useState } from 'react';
import { calcPPF } from '@/lib/calc-functions';

export default function PPFCalculator() {
  const [yearly, setYearly] = useState(150000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(7.1);

  const { maturity, invested, interest } = calcPPF(
    Number(yearly) || 0,
    Number(years) || 1,
    Number(rate) || 7.1
  );

  return (
    <div className="space-y-12">

      {/* =========================
          PPF CALCULATOR
      ========================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}
          <div className="space-y-4">

            <Field
              label="Yearly Investment (₹)"
              value={yearly}
              onChange={setYearly}
            />

            <Field
              label="Duration (years)"
              value={years}
              onChange={setYears}
            />

            <Field
              label="Interest Rate (% per year)"
              value={rate}
              onChange={setRate}
              step="0.1"
            />

          </div>

          {/* RESULTS */}
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Total Invested"
              value={invested}
            />

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

        <p className="text-xs text-muted-2 mt-4">
          PPF interest rates are determined by the Government of India and
          may change periodically. Check the applicable official rate before
          relying on this estimate.
        </p>

      </div>


      {/* =========================
          WHAT IS PPF
      ========================== */}

      <section className="space-y-4">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is a PPF?
        </h2>

        <p className="text-muted leading-relaxed">
          PPF stands for Public Provident Fund. It is a long-term savings
          scheme designed to help individuals build savings over an extended
          period while earning interest on their deposits.
        </p>

        <p className="text-muted leading-relaxed">
          A PPF account allows eligible individuals to make contributions
          during the investment period. The maturity amount depends on the
          amount invested, applicable interest rate and investment duration.
        </p>

      </section>


      {/* =========================
          HOW PPF CALCULATOR WORKS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How Does the PPF Calculator Work?
        </h2>

        <p className="text-muted leading-relaxed">
          The PPF calculator estimates the total amount invested, interest
          earned and maturity value based on your yearly investment, selected
          tenure and applicable interest rate.
        </p>

        <p className="text-muted leading-relaxed">
          Enter your expected annual contribution, investment duration and
          interest rate to get an estimated PPF maturity value instantly.
        </p>

      </section>


      {/* =========================
          PPF CALCULATION
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How is PPF Interest Calculated?
        </h2>

        <p className="text-muted leading-relaxed">
          PPF interest is calculated according to the applicable rules of the
          Public Provident Fund scheme. The interest rate is notified by the
          Government of India and may change from time to time.
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-6">

          <p className="text-muted leading-relaxed">
            For an estimate, this calculator uses the interest rate entered
            by the user along with the yearly investment and selected
            duration. The actual maturity amount may differ depending on
            contribution timing, applicable PPF rules and changes in the
            notified interest rate.
          </p>

        </div>

      </section>


      {/* =========================
          HOW TO USE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How to Use the PPF Calculator
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Enter the amount you plan to invest every year.
          </li>

          <li>
            Enter the investment duration in years.
          </li>

          <li>
            Enter the applicable PPF interest rate.
          </li>

          <li>
            The calculator will estimate your total investment, interest
            earned and maturity value.
          </li>

        </ol>

      </section>


      {/* =========================
          EXAMPLE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          PPF Calculation Example
        </h2>

        <p className="text-muted leading-relaxed">
          Suppose you invest ₹1,50,000 every year for 15 years at an assumed
          interest rate of 7.1%. Enter these values into the calculator to
          estimate the total amount invested, interest earned and maturity
          value.
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-5">

          <div className="grid sm:grid-cols-3 gap-4 text-sm">

            <div>
              <p className="text-muted">
                Yearly Investment
              </p>

              <p className="font-semibold">
                ₹1,50,000
              </p>
            </div>

            <div>
              <p className="text-muted">
                Interest Rate
              </p>

              <p className="font-semibold">
                7.1% per year
              </p>
            </div>

            <div>
              <p className="text-muted">
                Duration
              </p>

              <p className="font-semibold">
                15 years
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FACTORS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Factors That Affect PPF Maturity
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="text-lg font-semibold">
              1. Annual Investment
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The amount you contribute each year directly affects your total
              investment and the potential maturity value.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Interest Rate
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The applicable PPF interest rate affects the interest earned
              throughout the investment period.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Investment Duration
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              A longer investment period generally allows contributions to
              remain invested for a longer time and can increase the
              accumulated interest.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              4. Timing of Contributions
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The timing of deposits can affect the interest calculation under
              the applicable PPF rules. Actual returns may therefore differ
              from a simple estimate.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          PPF BENEFITS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Benefits of Using a PPF Calculator
        </h2>

        <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Estimate the potential PPF maturity value.
          </li>

          <li>
            Calculate the total amount invested over the selected period.
          </li>

          <li>
            Estimate the interest component of your investment.
          </li>

          <li>
            Compare different annual investment amounts.
          </li>

          <li>
            Plan long-term savings more easily.
          </li>

        </ul>

      </section>


      {/* =========================
          PPF VS FD
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          PPF vs Fixed Deposit
        </h2>

        <p className="text-muted leading-relaxed">
          PPF and Fixed Deposits are different savings and investment
          products. PPF is a government-backed long-term savings scheme with
          specific rules regarding contributions, tenure and withdrawals,
          while a Fixed Deposit generally involves investing a lump sum with
          a bank or financial institution for a selected period.
        </p>

        <p className="text-muted leading-relaxed">
          The right option depends on your financial goals, investment
          horizon, liquidity requirements and applicable terms.
        </p>

      </section>


      {/* =========================
          FAQ
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions About PPF
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">
              What is a PPF calculator?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              A PPF calculator is an online tool that estimates the total
              investment, interest earned and maturity value of a Public
              Provident Fund investment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              What interest rate is used for PPF?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              The PPF interest rate is notified by the Government of India and
              may change periodically. Enter the applicable rate in the
              calculator to obtain an estimate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              How long can I invest in PPF?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              PPF is designed as a long-term savings scheme. The applicable
              scheme rules determine the account tenure, extension options
              and withdrawal conditions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Can I calculate PPF maturity online?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. Enter your annual investment, duration and applicable
              interest rate to estimate the maturity value using this
              calculator.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Is the PPF calculator free?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. This PPF calculator is free to use and does not require
              registration or login.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          DISCLAIMER
      ========================== */}

      <section className="border-t border-border pt-6">

        <p className="text-xs text-muted leading-relaxed">
          <strong>Disclaimer:</strong> The results provided by this PPF
          calculator are estimates for informational purposes only. Actual
          returns may vary based on the applicable PPF interest rate,
          contribution timing, government notifications and scheme rules.
          Verify the current applicable rules and rates before making an
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