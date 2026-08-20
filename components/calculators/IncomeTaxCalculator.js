'use client';

import { useState } from 'react';
import { calcIncomeTaxNewRegime } from '@/lib/calc-functions';

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState(1200000);

  const { tax, cess, totalTax } = calcIncomeTaxNewRegime(
    Number(income) || 0
  );

  const takeHome = (Number(income) || 0) - totalTax;

  return (
    <div className="space-y-12">

      {/* =========================
          INCOME TAX CALCULATOR
      ========================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUT */}
          <div className="space-y-4">

            <Field
              label="Taxable Annual Income (₹)"
              value={income}
              onChange={setIncome}
            />

          </div>

          {/* RESULTS */}
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Income Tax"
              value={tax}
            />

            <Result
              label="Health & Education Cess (4%)"
              value={cess}
            />

            <Result
              label="Total Tax"
              value={totalTax}
              big
            />

            <Result
              label="Estimated Net Income"
              value={takeHome}
            />

          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          Estimated using the new tax regime calculation implemented on this
          website. Tax rules, slabs, rebates, deductions and exemptions can
          change between financial years. Always verify the applicable
          official rules before filing your income tax return.
        </p>

      </div>


      {/* =========================
          WHAT IS INCOME TAX
      ========================== */}

      <section className="space-y-4">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is an Income Tax Calculator?
        </h2>

        <p className="text-muted leading-relaxed">
          An income tax calculator helps estimate the amount of income tax
          payable on your taxable income. It can make it easier to understand
          your estimated tax liability before filing an income tax return.
        </p>

        <p className="text-muted leading-relaxed">
          This calculator is designed to provide an estimate based on the
          taxable annual income entered by the user and the new-regime
          calculation implemented by the calculator.
        </p>

      </section>


      {/* =========================
          NEW TAX REGIME
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          New Tax Regime in India
        </h2>

        <p className="text-muted leading-relaxed">
          India has different income-tax rules and tax regimes that can affect
          an individual's final tax liability. Under the new tax regime,
          income is calculated according to the applicable tax slabs and
          rules for the relevant financial year.
        </p>

        <p className="text-muted leading-relaxed">
          The applicable tax slabs, rebates, deductions and other provisions
          can change when the government introduces changes to the tax
          framework. Therefore, you should always check the rules applicable
          to the financial year for which you are calculating your tax.
        </p>

      </section>


      {/* =========================
          HOW TAX IS CALCULATED
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How is Income Tax Calculated?
        </h2>

        <p className="text-muted leading-relaxed">
          Income tax is generally calculated by applying the applicable tax
          rates to different portions of taxable income according to the
          relevant tax slabs.
        </p>

        <p className="text-muted leading-relaxed">
          After calculating the applicable income tax, additional components
          such as the Health and Education Cess may be added where applicable.
        </p>

        <div className="bg-brand-500/5 border border-brand-400/20 rounded-2xl p-6">

          <p className="font-semibold">
            Estimated Total Tax
          </p>

          <p className="text-muted mt-2 leading-relaxed">
            Income Tax + applicable Health & Education Cess
          </p>

        </div>

      </section>


      {/* =========================
          HOW TO USE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          How to Use the Income Tax Calculator
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

          <li>
            Enter your taxable annual income.
          </li>

          <li>
            The calculator estimates your income tax.
          </li>

          <li>
            The applicable cess is displayed separately.
          </li>

          <li>
            The calculator shows the estimated total tax.
          </li>

          <li>
            The estimated income remaining after the calculated tax is also
            displayed.
          </li>

        </ol>

      </section>


      {/* =========================
          TAXABLE INCOME
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is Taxable Income?
        </h2>

        <p className="text-muted leading-relaxed">
          Taxable income is the amount of income considered for calculating
          income tax after applying the relevant provisions, exemptions,
          deductions and adjustments applicable to the taxpayer and tax
          regime.
        </p>

        <p className="text-muted leading-relaxed">
          Taxable income is therefore not necessarily the same as your total
          gross income or salary.
        </p>

      </section>


      {/* =========================
          CESS
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          What is Health and Education Cess?
        </h2>

        <p className="text-muted leading-relaxed">
          Health and Education Cess is an additional amount calculated on the
          applicable income tax liability according to the prevailing tax
          rules.
        </p>

        <p className="text-muted leading-relaxed">
          The calculator displays the cess separately so that you can see how
          it contributes to the overall estimated tax amount.
        </p>

      </section>


      {/* =========================
          TAX REGIME
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          New Tax Regime vs Old Tax Regime
        </h2>

        <p className="text-muted leading-relaxed">
          The new and old tax regimes can have different tax rates,
          deductions and exemptions. Which regime is more suitable depends on
          the taxpayer's income, eligible deductions, exemptions and individual
          circumstances.
        </p>

        <p className="text-muted leading-relaxed">
          This calculator specifically provides an estimate using the new
          regime calculation implemented in the application. It should not be
          treated as a comparison of the two regimes.
        </p>

      </section>


      {/* =========================
          INCOME TAX CALCULATOR INDIA
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Income Tax Calculator in India
        </h2>

        <p className="text-muted leading-relaxed">
          This online income tax calculator is intended for users in India who
          want a quick estimate of their income tax liability under the new
          tax regime.
        </p>

        <p className="text-muted leading-relaxed">
          Enter your taxable annual income to see the estimated income tax,
          applicable cess, total tax and estimated income remaining after the
          calculated tax.
        </p>

      </section>


      {/* =========================
          EXAMPLE
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Income Tax Calculation Example
        </h2>

        <p className="text-muted leading-relaxed">
          For example, if your taxable annual income is ₹12,00,000, enter
          ₹12,00,000 in the calculator above. The calculator will process the
          amount using its implemented new-regime calculation and display the
          estimated income tax, cess and total tax.
        </p>

        <p className="text-muted leading-relaxed">
          The actual tax payable can differ depending on the applicable
          financial year, tax rules, rebates, deductions and other factors.
        </p>

      </section>


      {/* =========================
          FAQ
      ========================== */}

      <section className="space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions About Income Tax
        </h2>

        <div className="space-y-7">

          <div>
            <h3 className="text-lg font-semibold">
              What is an income tax calculator?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              An income tax calculator estimates the income tax payable based
              on the taxable income entered by the user and the applicable
              calculation method.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold">
              What is taxable income?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Taxable income is the amount of income considered for tax
              calculation after applying relevant provisions of the applicable
              tax regime.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold">
              What is the new tax regime?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              The new tax regime is an income-tax framework with its own
              applicable tax slabs and rules. The applicable provisions can
              change between financial years.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold">
              What is Health and Education Cess?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Health and Education Cess is an additional amount calculated on
              applicable income tax according to the prevailing rules.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold">
              Is this income tax calculator accurate?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              The calculator provides an estimate based on its implemented
              calculation method. Actual tax liability depends on the
              applicable financial year, tax regime, income details, rebates,
              deductions and other relevant factors.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold">
              Does this calculator include all income tax deductions?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              No. This calculator is a simplified estimator based on taxable
              annual income and the implemented new-regime calculation. It
              does not represent a complete income-tax return calculation for
              every taxpayer.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold">
              Is this income tax calculator free?
            </h3>

            <p className="text-muted leading-relaxed mt-2">
              Yes. This online income tax calculator is free to use and does
              not require registration or login.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          DISCLAIMER
      ========================== */}

      <section className="border-t border-border pt-6">

        <p className="text-xs text-muted leading-relaxed">
          <strong>Disclaimer:</strong> This income tax calculator provides an
          estimate for informational purposes only. Tax slabs, rebates,
          deductions, exemptions and other income-tax provisions may change
          between financial years. The result should not be considered tax,
          legal or financial advice. Always verify the applicable rules and
          your final tax liability using official government sources or a
          qualified tax professional before filing your return.
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
}) {
  return (
    <label className="block">

      <span className="text-sm text-muted">
        {label}
      </span>

      <input
        type="number"
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