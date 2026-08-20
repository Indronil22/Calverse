'use client';

import { useState } from 'react';
import { calcPensionEstimate } from '@/lib/calc-functions';

export default function PensionCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [returnRate, setReturnRate] = useState(10);
  const [years, setYears] = useState(25);
  const [annuityPct, setAnnuityPct] = useState(40);

  const {
    corpus,
    annuityCorpus,
    lumpSum,
    estimatedMonthlyPension,
  } = calcPensionEstimate(
    Number(monthly) || 0,
    Number(returnRate) || 0,
    Number(years) || 1,
    Number(annuityPct) || 40
  );

  return (
    <div className="space-y-12">

      {/* =========================
          PENSION CALCULATOR
      ========================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}
          <div className="space-y-4">

            <Field
              label="Monthly Contribution (₹)"
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
              label="Years to Retirement"
              value={years}
              onChange={setYears}
            />

            <Field
              label="% of Corpus for Annuity"
              value={annuityPct}
              onChange={setAnnuityPct}
            />

          </div>

          {/* RESULTS */}
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Total Corpus at Retirement"
              value={corpus}
              big
            />

            <Result
              label="Lump Sum Withdrawable"
              value={lumpSum}
            />

            <Result
              label="Est. Monthly Pension"
              value={estimatedMonthlyPension}
            />

          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          Illustrative estimate using an assumed 6% annuity payout rate.
          Actual pension depends on the annuity provider, applicable rules,
          rates and the annuity option selected at retirement.
        </p>

      </div>


      {/* =========================
          WHAT IS PENSION PLANNING
      ========================== */}

      <section className="space-y-4">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is a Pension Calculator?
        </h2>

        <p className="text-muted leading-relaxed">
          A pension calculator helps estimate how much retirement corpus you
          could potentially build through regular contributions over a
          specific period. It can also provide an illustrative estimate of
          the amount that may be available as a lump sum and the potential
          monthly pension from the portion used for an annuity.
        </p>

        <p className="text-muted leading-relaxed">
          This pension calculator uses your monthly contribution, expected
          annual return, years remaining until retirement and the percentage
          of the retirement corpus allocated towards an annuity.
        </p>

      </section>


      {/* =========================
          HOW IT WORKS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How Does the Pension Calculator Work?
        </h2>

        <p className="text-muted leading-relaxed">
          The calculator estimates the future value of your regular
          contributions based on the expected annual return and investment
          duration.
        </p>

        <p className="text-muted leading-relaxed">
          Once the estimated retirement corpus is calculated, the calculator
          separates the corpus according to the percentage entered for the
          annuity. The remaining amount is shown as the estimated lump sum.
        </p>

        <p className="text-muted leading-relaxed">
          The annuity portion is then used to provide an illustrative monthly
          pension estimate based on an assumed annuity payout rate.
        </p>

      </section>


      {/* =========================
          INPUTS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Inputs Used in the Pension Calculator
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="text-lg font-semibold">
              Monthly Contribution
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              This is the amount you plan to contribute towards your
              retirement investment every month.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Expected Return
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              This is the assumed annual rate of return used to estimate the
              future retirement corpus. Actual investment returns can differ
              from the assumed rate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Years to Retirement
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              This represents the number of years for which your contributions
              are expected to grow before retirement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Percentage of Corpus for Annuity
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              This represents the portion of the estimated retirement corpus
              allocated towards an annuity for generating a pension income.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          HOW TO USE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How to Use the Pension Calculator
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Enter your planned monthly retirement contribution.
          </li>

          <li>
            Enter the expected annual rate of return.
          </li>

          <li>
            Enter the number of years remaining until retirement.
          </li>

          <li>
            Enter the percentage of the retirement corpus you plan to use
            for an annuity.
          </li>

          <li>
            View the estimated retirement corpus.
          </li>

          <li>
            Check the estimated lump sum and monthly pension.
          </li>

        </ol>

      </section>


      {/* =========================
          RETIREMENT CORPUS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is a Retirement Corpus?
        </h2>

        <p className="text-muted leading-relaxed">
          A retirement corpus is the amount of money accumulated to support
          your financial needs after you stop working. Building a sufficient
          retirement corpus can help provide financial security during
          retirement.
        </p>

        <p className="text-muted leading-relaxed">
          The amount required depends on factors such as your expected
          retirement age, lifestyle, expenses, inflation, investment returns
          and expected retirement duration.
        </p>

      </section>


      {/* =========================
          ANNUITY
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is an Annuity?
        </h2>

        <p className="text-muted leading-relaxed">
          An annuity is a financial product designed to provide a stream of
          income, typically after retirement. A portion of a retirement corpus
          may be used to purchase an annuity depending on the applicable
          retirement scheme and rules.
        </p>

        <p className="text-muted leading-relaxed">
          The pension generated from an annuity depends on factors including
          the amount used to purchase the annuity, the annuity option selected
          and the applicable annuity rate.
        </p>

      </section>


      {/* =========================
          LUMP SUM
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is a Lump Sum Withdrawal?
        </h2>

        <p className="text-muted leading-relaxed">
          A lump sum withdrawal is the portion of the retirement corpus that
          may be available as a one-time amount, subject to the applicable
          retirement scheme rules and conditions.
        </p>

        <p className="text-muted leading-relaxed">
          The calculator shows an estimated lump sum based on the percentage
          of the corpus that is not allocated to the annuity.
        </p>

      </section>


      {/* =========================
          RETIREMENT PLANNING
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Why is Retirement Planning Important?
        </h2>

        <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Helps prepare for regular expenses after retirement.
          </li>

          <li>
            Provides more time to build a retirement corpus.
          </li>

          <li>
            Helps account for long-term financial goals.
          </li>

          <li>
            Can reduce dependence on employment income after retirement.
          </li>

          <li>
            Helps plan for inflation and changing living expenses.
          </li>

        </ul>

      </section>


      {/* =========================
          PENSION CALCULATOR INDIA
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Pension Calculator in India
        </h2>

        <p className="text-muted leading-relaxed">
          This online pension calculator is designed to provide an
          illustrative estimate of a potential retirement corpus, lump sum
          amount and monthly pension based on the values entered by the user.
        </p>

        <p className="text-muted leading-relaxed">
          Retirement schemes and pension products can have specific rules,
          eligibility requirements and withdrawal conditions. Always check
          the applicable rules and terms before making financial decisions.
        </p>

      </section>


      {/* =========================
          FAQ
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions About Pension
        </h2>

        <div className="space-y-7">

          <div>
            <h3 className="text-lg font-semibold">
              What is a pension calculator?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              A pension calculator estimates a potential retirement corpus
              and provides an illustrative estimate of retirement income
              based on the values entered.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              How is the retirement corpus calculated?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              The estimated corpus is based on regular contributions, the
              expected annual return and the investment duration.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              What is an annuity?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              An annuity is a financial product that can provide regular
              income, commonly used as part of retirement planning.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Is the monthly pension guaranteed?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              The pension shown by this calculator is an illustrative
              estimate. Actual pension depends on the annuity provider,
              applicable rates, selected annuity option and relevant rules.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              How much should I save for retirement?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              The required retirement corpus depends on your current expenses,
              expected future expenses, inflation, retirement age, investment
              returns and expected retirement duration.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Is this pension calculator free?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. This online pension calculator is free to use and does not
              require registration or login.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          DISCLAIMER
      ========================== */}

      <section className="border-t border-border pt-6">

        <p className="text-xs text-muted leading-relaxed">
          <strong>Disclaimer:</strong> The results provided by this pension
          calculator are illustrative estimates for informational purposes
          only. Actual investment returns, retirement corpus, annuity rates
          and pension income may differ. Applicable retirement scheme rules,
          taxes, charges and provider terms may also affect the final amount.
          Consider your individual financial circumstances before making
          investment or retirement decisions.
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