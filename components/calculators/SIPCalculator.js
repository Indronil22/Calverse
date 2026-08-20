'use client';

import { useState } from 'react';
import { calcSIP } from '@/lib/calc-functions';

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);

  const { futureValue, invested, gains } = calcSIP(
    Number(monthly) || 0,
    Number(returnRate) || 0,
    Number(years) || 1
  );

  return (
    <div className="space-y-12">

      {/* =========================
          SIP CALCULATOR
      ========================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}
          <div className="space-y-4">

            <Field
              label="Monthly Investment (₹)"
              value={monthly}
              onChange={setMonthly}
            />

            <Field
              label="Expected Return (% per year)"
              value={returnRate}
              onChange={setReturnRate}
              step="0.1"
            />

            <Field
              label="Investment Duration (years)"
              value={years}
              onChange={setYears}
            />

          </div>

          {/* RESULTS */}
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Invested Amount"
              value={invested}
            />

            <Result
              label="Estimated Gains"
              value={gains}
            />

            <Result
              label="Future Value"
              value={futureValue}
              big
            />

          </div>

        </div>

      </div>


      {/* =========================
          WHAT IS SIP
      ========================== */}

      <section className="space-y-4">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is a SIP?
        </h2>

        <p className="text-muted leading-relaxed">
          SIP stands for Systematic Investment Plan. It is a method of
          investing a fixed amount regularly, usually every month, into a
          mutual fund or other investment scheme.
        </p>

        <p className="text-muted leading-relaxed">
          SIP investing allows you to invest regularly instead of investing
          a large amount at one time. Over a longer period, regular
          investments can potentially benefit from compounding and market
          growth.
        </p>

        <p className="text-muted leading-relaxed">
          The potential future value of a SIP depends on factors such as the
          monthly investment amount, expected rate of return and investment
          duration.
        </p>

      </section>


      {/* =========================
          HOW SIP CALCULATOR WORKS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How Does a SIP Calculator Work?
        </h2>

        <p className="text-muted leading-relaxed">
          A SIP calculator estimates the potential future value of your
          regular investments using your monthly investment amount, expected
          annual return and investment period.
        </p>

        <p className="text-muted leading-relaxed">
          Enter the amount you plan to invest every month, your expected
          annual return and the number of years you want to remain invested.
          The calculator then estimates your invested amount, potential gains
          and future value.
        </p>

      </section>


      {/* =========================
          SIP FORMULA
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          SIP Calculation Formula
        </h2>

        <p className="text-muted leading-relaxed">
          A commonly used formula for estimating the future value of a
          monthly SIP is:
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-6 text-center overflow-x-auto">

          <p className="font-mono text-sm md:text-base">
            FV = P × [((1 + r)ⁿ − 1) / r] × (1 + r)
          </p>

        </div>

        <div className="space-y-2 text-muted text-sm md:text-base">

          <p>
            <strong>P</strong> = Monthly investment amount
          </p>

          <p>
            <strong>r</strong> = Monthly expected rate of return
          </p>

          <p>
            <strong>n</strong> = Total number of monthly investments
          </p>

        </div>

        <p className="text-muted leading-relaxed">
          The actual return from a SIP is not guaranteed because investment
          returns depend on the performance of the underlying investment.
          The calculator therefore provides an estimate based on the expected
          return entered by the user.
        </p>

      </section>


      {/* =========================
          HOW TO USE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How to Use the SIP Calculator
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Enter the amount you want to invest every month.
          </li>

          <li>
            Enter your expected annual rate of return.
          </li>

          <li>
            Enter the investment duration in years.
          </li>

          <li>
            The calculator will estimate your total invested amount.
          </li>

          <li>
            View the estimated gains and future value of your investment.
          </li>

        </ol>

      </section>


      {/* =========================
          SIP EXAMPLE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          SIP Calculation Example
        </h2>

        <p className="text-muted leading-relaxed">
          Suppose you invest ₹5,000 every month for 10 years and assume an
          expected annual return of 12%. Enter these values into the
          calculator to estimate your total investment, potential gains and
          future value.
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-5">

          <div className="grid sm:grid-cols-3 gap-4 text-sm">

            <div>
              <p className="text-muted">
                Monthly Investment
              </p>

              <p className="font-semibold">
                ₹5,000
              </p>
            </div>

            <div>
              <p className="text-muted">
                Expected Return
              </p>

              <p className="font-semibold">
                12% per year
              </p>
            </div>

            <div>
              <p className="text-muted">
                Duration
              </p>

              <p className="font-semibold">
                10 years
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          BENEFITS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Benefits of SIP Investment
        </h2>

        <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Encourages disciplined and regular investing.
          </li>

          <li>
            Allows investors to invest a fixed amount periodically.
          </li>

          <li>
            Can make long-term investing easier to manage.
          </li>

          <li>
            Long-term investments can potentially benefit from compounding.
          </li>

          <li>
            Regular investing can help spread purchases across different
            market conditions.
          </li>

        </ul>

      </section>


      {/* =========================
          FACTORS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Factors That Affect SIP Returns
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="text-lg font-semibold">
              1. Monthly Investment
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The amount invested every month affects the total amount
              invested and the potential future value of the SIP.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Expected Rate of Return
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              A higher assumed rate of return can produce a higher estimated
              future value. However, actual investment returns can be higher
              or lower than the assumed rate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Investment Duration
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              A longer investment duration gives your contributions more time
              to potentially grow and benefit from compounding.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              4. Market Performance
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              SIP investments linked to market-based investments are subject
              to market fluctuations, so actual returns are not guaranteed.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          SIP VS LUMP SUM
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          SIP vs Lump Sum Investment
        </h2>

        <p className="text-muted leading-relaxed">
          SIP involves investing a fixed amount regularly, while a lump sum
          investment involves investing a larger amount at one time.
        </p>

        <p className="text-muted leading-relaxed">
          SIP can be useful for investors who prefer regular investments from
          their income, while lump sum investing may be suitable when an
          investor already has a significant amount available for investment.
        </p>

      </section>


      {/* =========================
          SIP IN INDIA
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          SIP Calculator in India
        </h2>

        <p className="text-muted leading-relaxed">
          This online SIP calculator can be used by investors in India to
          estimate the potential value of regular monthly investments.
        </p>

        <p className="text-muted leading-relaxed">
          Enter the monthly investment amount, expected annual return and
          investment duration to get an estimate of your invested amount,
          potential gains and future value.
        </p>

      </section>


      {/* =========================
          FAQ
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions About SIP
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">
              What is a SIP?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              SIP stands for Systematic Investment Plan. It allows an
              investor to invest a fixed amount regularly, commonly every
              month.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              How is SIP return calculated?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              SIP return estimates are based on the monthly investment,
              expected rate of return and investment duration. Actual returns
              depend on the performance of the underlying investment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Can I calculate SIP returns online?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. Enter your monthly investment, expected annual return and
              investment duration in this calculator to estimate your
              potential future value and gains.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Are SIP returns guaranteed?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              No. SIP returns are not guaranteed. The actual return depends on
              the performance of the underlying investment and market
              conditions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              How long should I invest through SIP?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              The appropriate investment period depends on your financial
              goals, risk tolerance and investment strategy. A longer
              investment horizon can provide more time for potential
              compounding.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Is this SIP calculator free?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. This SIP calculator is free to use and does not require
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
          <strong>Disclaimer:</strong> The results provided by this SIP
          calculator are estimates for informational purposes only. SIP
          returns are not guaranteed and actual investment performance may
          differ from the estimated return entered into the calculator.
          Consider your financial goals, risk tolerance and applicable
          investment terms before making an investment decision.
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