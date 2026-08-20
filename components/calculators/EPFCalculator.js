'use client';

import { useState } from 'react';
import { calcEPF } from '@/lib/calc-functions';

export default function EPFCalculator() {
  const [basicDA, setBasicDA] = useState(25000);
  const [empPct, setEmpPct] = useState(12);
  const [emprPct, setEmprPct] = useState(3.67);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8.25);

  const {
    monthlyEmployee,
    monthlyEmployer,
    futureValue,
    invested,
    interest,
  } = calcEPF(
    Number(basicDA) || 0,
    Number(empPct) || 0,
    Number(emprPct) || 0,
    Number(years) || 1,
    Number(rate) || 8.25
  );

  return (
    <div className="space-y-12">

      {/* Calculator */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <Field
              label="Basic Salary + DA (per month, ₹)"
              value={basicDA}
              onChange={setBasicDA}
            />

            <Field
              label="Employee Contribution (%)"
              value={empPct}
              onChange={setEmpPct}
              step="0.1"
            />

            <Field
              label="Employer Contribution (%)"
              value={emprPct}
              onChange={setEmprPct}
              step="0.01"
            />

            <Field
              label="Years to Retirement"
              value={years}
              onChange={setYears}
            />

            <Field
              label="Expected EPF Interest Rate (%)"
              value={rate}
              onChange={setRate}
              step="0.01"
            />
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Your Monthly Contribution"
              value={monthlyEmployee}
            />

            <Result
              label="Employer's Monthly Contribution"
              value={monthlyEmployer}
            />

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
              value={futureValue}
              big
            />

          </div>
        </div>

        <p className="text-xs text-muted-2 mt-4">
          EPF interest rate is announced annually by EPFO. This calculator
          provides an estimate assuming a constant interest rate throughout
          the selected investment period.
        </p>
      </div>

      {/* SEO Content */}
      <section className="space-y-10">

        {/* What is EPF */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What is EPF?
          </h2>

          <p className="text-muted leading-relaxed">
            EPF stands for Employees' Provident Fund. It is a retirement
            savings scheme designed to help eligible employees build a
            long-term retirement corpus through regular contributions from
            the employee and employer.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The amount accumulated in an EPF account depends on factors such
            as the employee's contribution, employer contribution, interest
            rate and the length of the contribution period.
          </p>
        </div>

        {/* How EPF works */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How does EPF work?
          </h2>

          <p className="text-muted leading-relaxed">
            EPF works by making regular contributions toward an employee's
            provident fund account. Contributions are generally made every
            month while the employee remains eligible for the scheme.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The accumulated balance can grow over time through the
            contributions and applicable EPF interest. A longer contribution
            period can allow the retirement corpus to benefit from
            compounding.
          </p>
        </div>

        {/* How calculated */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How is EPF calculated?
          </h2>

          <p className="text-muted leading-relaxed">
            EPF calculations generally depend on the applicable salary
            components, contribution percentages, interest rate and the
            duration for which contributions are made.
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 my-6 text-center">
            <p className="font-semibold text-lg">
              Monthly Employee Contribution
            </p>

            <p className="text-muted mt-2">
              = Eligible Salary × Employee Contribution Rate
            </p>
          </div>

          <p className="text-muted leading-relaxed">
            The final EPF corpus is influenced by the regular contributions
            and the interest accumulated over the contribution period.
          </p>
        </div>

        {/* How to use */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to use this EPF Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">
            <li>
              Enter your monthly Basic Salary and DA.
            </li>

            <li>
              Enter the employee contribution percentage.
            </li>

            <li>
              Enter the employer contribution percentage.
            </li>

            <li>
              Enter the number of years until retirement.
            </li>

            <li>
              Enter the expected EPF interest rate.
            </li>

            <li>
              View your estimated monthly contributions, total investment,
              interest earned and maturity value.
            </li>
          </ol>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Benefits of EPF
          </h2>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">
            <li>Helps build a long-term retirement corpus.</li>
            <li>Encourages regular retirement savings.</li>
            <li>Employee and employer contributions can build the corpus over time.</li>
            <li>Applicable interest can help grow the accumulated balance.</li>
            <li>Long-term contributions can benefit from compounding.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold">
                What is EPF?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                EPF, or Employees' Provident Fund, is a retirement savings
                scheme that helps eligible employees accumulate savings
                through regular contributions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                What does an EPF calculator calculate?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                An EPF calculator estimates employee and employer
                contributions, total invested amount, interest earned and
                the potential maturity value based on the information entered.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Can I calculate my EPF balance online?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                Yes. You can use this online EPF calculator to estimate the
                potential value of your EPF corpus based on your salary,
                contribution percentages, interest rate and investment period.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Does the EPF interest rate change?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                The applicable EPF interest rate can change. Therefore, the
                actual EPF corpus may differ from the estimate produced by
                this calculator.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Is this EPF calculator accurate?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                This calculator provides an estimate based on the values you
                enter. Actual EPF accumulation can differ because of changes
                in contribution amounts, applicable interest rates and other
                account-specific factors.
              </p>
            </div>

          </div>
        </div>

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