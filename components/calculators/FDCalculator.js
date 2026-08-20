'use client';

import { useState } from 'react';
import { calcFD } from '@/lib/calc-functions';

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [compounding, setCompounding] = useState(4);

  const { maturity, interest } = calcFD(
    Number(principal) || 0,
    Number(rate) || 0,
    Number(years) || 0,
    Number(compounding) || 4
  );

  return (
    <div className="space-y-12">

      {/* Calculator */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

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

            <label className="block">
              <span className="text-sm text-muted">
                Compounding Frequency
              </span>

              <select
                className="input mt-1"
                value={compounding}
                onChange={(e) => setCompounding(e.target.value)}
              >
                <option value={1}>Yearly</option>
                <option value={2}>Half-Yearly</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
              </select>
            </label>

          </div>

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

      {/* What is FD */}
      <section className="space-y-4">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is a Fixed Deposit (FD)?
        </h2>

        <p className="text-muted leading-relaxed">
          A Fixed Deposit (FD) is a savings and investment option where you
          deposit a lump sum amount with a bank or financial institution for
          a fixed period at a predetermined interest rate. At maturity, you
          receive your original deposit along with the interest earned.
        </p>

        <p className="text-muted leading-relaxed">
          The returns from a fixed deposit depend mainly on the principal
          amount, interest rate, investment duration and compounding frequency.
          This FD calculator helps you estimate the interest earned and
          maturity amount before investing.
        </p>

      </section>

      {/* How FD is calculated */}
      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How is FD Interest Calculated?
        </h2>

        <p className="text-muted leading-relaxed">
          For a cumulative fixed deposit, compound interest is generally used
          to calculate the maturity value. The calculation depends on the
          principal amount, annual interest rate, compounding frequency and
          investment duration.
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
            <strong className="text-fg">n</strong> = Number of times interest is compounded per year
          </p>

          <p>
            <strong className="text-fg">t</strong> = Investment duration in years
          </p>

        </div>

        <p className="text-muted leading-relaxed">
          The total interest earned can be calculated by subtracting the
          original principal amount from the maturity amount.
        </p>

      </section>

      {/* How to use */}
      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How to Use This FD Calculator
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Enter the amount you want to invest in the fixed deposit.
          </li>

          <li>
            Enter the annual FD interest rate.
          </li>

          <li>
            Enter the investment duration in years.
          </li>

          <li>
            Select the applicable compounding frequency.
          </li>

          <li>
            The calculator will instantly show the estimated interest earned
            and maturity value.
          </li>

        </ol>

      </section>

      {/* Example */}
      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          FD Calculation Example
        </h2>

        <p className="text-muted leading-relaxed">
          Suppose you invest ₹1,00,000 in a fixed deposit at an annual
          interest rate of 7% for 5 years with quarterly compounding.
          The calculator uses these values to estimate the interest earned
          and the final maturity amount.
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-5">

          <div className="grid sm:grid-cols-2 gap-4 text-sm">

            <div>
              <p className="text-muted">Principal</p>
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

      {/* Factors */}
      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Factors That Affect FD Returns
        </h2>

        <div className="space-y-4">

          <div>
            <h3 className="text-lg font-semibold">
              1. Deposit Amount
            </h3>
            <p className="text-muted leading-relaxed mt-1">
              A higher principal amount generally results in higher interest
              earnings when the interest rate and tenure remain the same.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Interest Rate
            </h3>
            <p className="text-muted leading-relaxed mt-1">
              The interest rate offered by the bank or financial institution
              directly affects the maturity value of the FD.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Investment Tenure
            </h3>
            <p className="text-muted leading-relaxed mt-1">
              A longer investment period can increase the total interest
              earned, depending on the applicable interest rate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              4. Compounding Frequency
            </h3>
            <p className="text-muted leading-relaxed mt-1">
              More frequent compounding can affect the final maturity amount
              because interest is added to the deposit at different intervals.
            </p>
          </div>

        </div>

      </section>

      {/* FD vs Savings */}
      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Fixed Deposit vs Savings Account
        </h2>

        <p className="text-muted leading-relaxed">
          A savings account is primarily designed for regular access to your
          money, while a fixed deposit is designed for keeping a lump sum
          invested for a predetermined period. Fixed deposits may offer a
          higher predetermined interest rate, while savings accounts generally
          provide greater liquidity.
        </p>

      </section>

      {/* FAQ */}
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
              earned and maturity amount of a fixed deposit using the deposit
              amount, interest rate, tenure and compounding frequency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Does FD interest depend on the tenure?
            </h3>
            <p className="text-muted leading-relaxed mt-2">
              Yes. The investment tenure is one of the factors used to
              determine the total interest earned and maturity value.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              What does quarterly compounding mean?
            </h3>
            <p className="text-muted leading-relaxed mt-2">
              Quarterly compounding means interest is calculated and added to
              the deposit four times during a year.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Is the FD calculator free?
            </h3>
            <p className="text-muted leading-relaxed mt-2">
              Yes. You can use this online FD calculator to estimate your
              returns without registration or login.
            </p>
          </div>

        </div>

      </section>

      {/* Disclaimer */}
      <section className="border-t border-border pt-6">

        <p className="text-xs text-muted leading-relaxed">
          <strong>Disclaimer:</strong> The results provided by this FD
          calculator are estimates for informational purposes only. Actual
          fixed deposit returns may vary depending on the interest rate,
          compounding method, tenure, applicable bank or financial institution
          rules and taxes. Always check the applicable terms before making an
          investment decision.
        </p>

      </section>

    </div>
  );
}

function Field({ label, value, onChange, step = '1' }) {
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

function Result({ label, value, big }) {
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