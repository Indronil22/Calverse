'use client';

import { useState } from 'react';
import { calcRD } from '@/lib/calc-functions';

export default function RDCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [months, setMonths] = useState(24);

  const { maturity, invested, interest } = calcRD(
    Number(monthly) || 0,
    Number(rate) || 0,
    Number(months) || 1
  );

  return (
    <div className="space-y-12">

      {/* =========================
          RD CALCULATOR
      ========================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}
          <div className="space-y-4">

            <Field
              label="Monthly Deposit (₹)"
              value={monthly}
              onChange={setMonthly}
            />

            <Field
              label="Interest Rate (% per year)"
              value={rate}
              onChange={setRate}
              step="0.1"
            />

            <Field
              label="Duration (months)"
              value={months}
              onChange={setMonths}
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

      </div>


      {/* =========================
          WHAT IS RD
      ========================== */}

      <section className="space-y-4">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is a Recurring Deposit (RD)?
        </h2>

        <p className="text-muted leading-relaxed">
          A Recurring Deposit (RD) is a savings investment in which you
          deposit a fixed amount regularly, usually every month, for a
          predetermined period. The deposit earns interest during the
          investment period and the accumulated amount is paid at maturity.
        </p>

        <p className="text-muted leading-relaxed">
          The maturity value of an RD depends on factors such as the monthly
          deposit amount, interest rate and investment tenure. This RD
          calculator helps you estimate the total amount invested, interest
          earned and maturity value.
        </p>

      </section>


      {/* =========================
          HOW RD CALCULATOR WORKS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How Does an RD Calculator Work?
        </h2>

        <p className="text-muted leading-relaxed">
          An RD calculator estimates the maturity amount of a recurring
          deposit using the monthly deposit, annual interest rate and
          investment duration.
        </p>

        <p className="text-muted leading-relaxed">
          Instead of investing a lump sum at the beginning, an RD involves
          making regular deposits throughout the selected tenure. Each
          installment earns interest according to the applicable RD
          calculation method.
        </p>

      </section>


      {/* =========================
          RD FORMULA
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          RD Interest Calculation
        </h2>

        <p className="text-muted leading-relaxed">
          Recurring deposit maturity is calculated based on the regular
          installments, applicable interest rate and tenure. RD calculations
          can differ between banks and financial institutions depending on
          their calculation methodology and compounding conventions.
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-6">

          <p className="text-muted leading-relaxed">
            For an approximate calculation, the maturity value depends on
            the monthly installment, interest rate and number of installments.
            The calculator applies the calculation method implemented for
            this RD tool.
          </p>

        </div>

      </section>


      {/* =========================
          HOW TO USE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How to Use the RD Calculator
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Enter the amount you want to deposit every month.
          </li>

          <li>
            Enter the annual interest rate.
          </li>

          <li>
            Enter the RD duration in months.
          </li>

          <li>
            The calculator will instantly estimate your total investment,
            interest earned and maturity value.
          </li>

        </ol>

      </section>


      {/* =========================
          EXAMPLE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          RD Calculation Example
        </h2>

        <p className="text-muted leading-relaxed">
          Suppose you deposit ₹5,000 every month in an RD at an annual
          interest rate of 6.5% for 24 months. Enter these values into the
          calculator to estimate the total amount invested, interest earned
          and maturity value.
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-5">

          <div className="grid sm:grid-cols-3 gap-4 text-sm">

            <div>
              <p className="text-muted">
                Monthly Deposit
              </p>

              <p className="font-semibold">
                ₹5,000
              </p>
            </div>

            <div>
              <p className="text-muted">
                Interest Rate
              </p>

              <p className="font-semibold">
                6.5% per year
              </p>
            </div>

            <div>
              <p className="text-muted">
                Duration
              </p>

              <p className="font-semibold">
                24 months
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
          Factors That Affect RD Returns
        </h2>

        <div className="space-y-5">

          <div>
            <h3 className="text-lg font-semibold">
              1. Monthly Deposit
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The monthly deposit is the amount invested in the RD every
              month. Increasing the monthly installment generally increases
              the total amount invested and the potential maturity value.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              2. Interest Rate
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The interest rate offered by the bank or financial institution
              affects the interest earned on the recurring deposit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              3. Investment Tenure
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              The RD tenure determines how many monthly installments are
              deposited and how long the investment remains active.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              4. Compounding and Calculation Method
            </h3>

            <p className="text-muted leading-relaxed mt-1">
              Banks and financial institutions may use specific methods for
              calculating interest on recurring deposits. Therefore, actual
              maturity values can vary depending on the applicable terms.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          RD VS FD
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Recurring Deposit vs Fixed Deposit
        </h2>

        <p className="text-muted leading-relaxed">
          A recurring deposit allows you to invest a fixed amount regularly,
          usually every month. A fixed deposit generally involves investing
          a lump sum amount for a predetermined period. RD can therefore be
          useful for people who want to build savings through regular
          installments, while FD is suited to investors who already have a
          lump sum available for investment.
        </p>

      </section>


      {/* =========================
          BENEFITS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Benefits of Using an RD Calculator
        </h2>

        <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Quickly estimate the maturity value of an RD.
          </li>

          <li>
            Calculate the total amount invested over the selected tenure.
          </li>

          <li>
            Estimate the interest earned on your recurring deposits.
          </li>

          <li>
            Compare different monthly deposits, interest rates and tenures.
          </li>

          <li>
            Plan regular savings before opening an RD.
          </li>

        </ul>

      </section>


      {/* =========================
          FAQ
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions About RD
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">
              What is an RD calculator?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              An RD calculator is an online tool that estimates the total
              investment, interest earned and maturity value of a recurring
              deposit based on the monthly installment, interest rate and
              tenure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              How is RD maturity calculated?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              RD maturity depends on the monthly installment, applicable
              interest rate, number of installments and the calculation
              methodology used by the financial institution.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Can I change the monthly deposit amount in the calculator?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. Enter any monthly deposit amount to estimate the
              corresponding investment and maturity value.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Can I calculate an RD for different tenures?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. You can enter the desired number of months to estimate the
              maturity value for different RD durations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Is this RD calculator free?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. This RD calculator is free to use and does not require
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
          <strong>Disclaimer:</strong> The results provided by this RD
          calculator are estimates for informational purposes only. Actual
          recurring deposit returns may vary depending on the applicable
          interest rate, calculation method, tenure, bank or financial
          institution terms and taxes. Check the applicable terms before
          making an investment decision.
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