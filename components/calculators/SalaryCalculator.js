'use client';

import { useState } from 'react';
import { calcInHandSalary } from '@/lib/calc-functions';

export default function SalaryCalculator() {
  const [ctc, setCtc] = useState(1200000);
  const [pfPct, setPfPct] = useState(12);
  const [profTax, setProfTax] = useState(200);
  const [otherDed, setOtherDed] = useState(0);

  const { grossMonthly, employeePF, inHand } = calcInHandSalary(
    Number(ctc) || 0,
    Number(pfPct) || 0,
    Number(profTax) || 0,
    Number(otherDed) || 0
  );

  return (
    <div className="space-y-12">

      {/* Salary Calculator */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">

            <Field
              label="Annual CTC (₹)"
              value={ctc}
              onChange={setCtc}
            />

            <Field
              label="PF Contribution (%)"
              value={pfPct}
              onChange={setPfPct}
              step="0.1"
            />

            <Field
              label="Professional Tax (per month, ₹)"
              value={profTax}
              onChange={setProfTax}
            />

            <Field
              label="Other Monthly Deductions (₹)"
              value={otherDed}
              onChange={setOtherDed}
            />

          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Gross Monthly (after employer PF)"
              value={grossMonthly}
            />

            <Result
              label="Your PF Deduction"
              value={employeePF}
            />

            <Result
              label="Estimated In-Hand (monthly)"
              value={inHand}
              big
            />

          </div>
        </div>

        <p className="text-xs text-muted-2 mt-4">
          Simplified estimate — actual take-home salary varies depending on
          your salary structure, HRA, allowances, PF, professional tax,
          other deductions and applicable income tax deducted at source (TDS).
        </p>
      </div>

      {/* SEO Content */}
      <section className="space-y-10">

        {/* What is Salary Calculator */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What is a Salary Calculator?
          </h2>

          <p className="text-muted leading-relaxed">
            A salary calculator helps you estimate your monthly in-hand salary
            from your annual Cost to Company (CTC). It considers common
            deductions such as employee provident fund, professional tax and
            other monthly deductions.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Your CTC and actual take-home salary are not always the same.
            Employer contributions, benefits, deductions and the structure of
            your compensation can affect the amount you receive in your bank
            account each month.
          </p>
        </div>

        {/* CTC vs In Hand */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            CTC vs In-Hand Salary
          </h2>

          <p className="text-muted leading-relaxed">
            Cost to Company (CTC) represents the overall annual cost an
            employer incurs for an employee. It can include salary components,
            employer contributions and other benefits.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            In-hand salary is the amount you actually receive after applicable
            deductions from your salary. Therefore, the monthly amount
            credited to your bank account can be lower than the monthly
            equivalent of your CTC.
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 my-6 text-center">
            <p className="font-semibold text-lg">
              Estimated In-Hand Salary
            </p>

            <p className="text-muted mt-2">
              = Gross Salary − Employee PF − Professional Tax − Other
              Deductions
            </p>
          </div>
        </div>

        {/* How Salary is Calculated */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How is monthly salary calculated?
          </h2>

          <p className="text-muted leading-relaxed">
            Monthly salary calculation generally starts with the annual CTC
            and considers the different components included in the salary
            package.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Common components and deductions can include basic salary,
            allowances, employer and employee provident fund contributions,
            professional tax, income tax and other deductions.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Because salary structures differ between employers and employees,
            the exact in-hand amount can vary even when two employees have
            the same annual CTC.
          </p>
        </div>

        {/* How to use */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to use this Salary Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">
            <li>
              Enter your annual CTC.
            </li>

            <li>
              Enter the employee PF contribution percentage.
            </li>

            <li>
              Enter your monthly professional tax.
            </li>

            <li>
              Enter any other monthly deductions.
            </li>

            <li>
              View your estimated gross monthly salary.
            </li>

            <li>
              Check your estimated monthly in-hand salary.
            </li>
          </ol>
        </div>

        {/* Salary Components */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Common salary components
          </h2>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">
            <li>
              <strong>Basic Salary:</strong> A core component of your salary
              structure.
            </li>

            <li>
              <strong>House Rent Allowance (HRA):</strong> An allowance that
              may be included as part of your compensation.
            </li>

            <li>
              <strong>Provident Fund (PF):</strong> Contributions toward
              provident fund may be deducted from the employee's salary.
            </li>

            <li>
              <strong>Professional Tax:</strong> A state-level tax applicable
              to eligible employees depending on the applicable rules.
            </li>

            <li>
              <strong>TDS:</strong> Income tax may be deducted at source
              depending on applicable tax rules and the employee's taxable
              income.
            </li>

            <li>
              <strong>Other Deductions:</strong> Additional deductions may
              apply depending on the employer and salary structure.
            </li>
          </ul>
        </div>

        {/* Why salary differs */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why is in-hand salary different from CTC?
          </h2>

          <p className="text-muted leading-relaxed">
            CTC can include components that are not directly paid to you as
            monthly cash. Employer contributions, benefits and other
            components can form part of CTC while not appearing as the same
            amount in your monthly bank credit.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Employee deductions such as PF, professional tax, income tax and
            other applicable deductions can further reduce the amount received
            as take-home salary.
          </p>
        </div>

        {/* India salary */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Salary Calculator for India
          </h2>

          <p className="text-muted leading-relaxed">
            This salary calculator is designed to provide a simple estimate
            for employees in India. You can enter your annual CTC and common
            salary deductions to estimate your monthly take-home salary.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Actual salary calculations can differ because employers may use
            different salary structures and because applicable tax and
            deduction rules can change.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold">
                What is an in-hand salary?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                In-hand salary is the amount an employee receives after
                applicable deductions from their salary.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Is CTC the same as monthly salary?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                No. CTC represents the annual cost to the company, while
                monthly in-hand salary is the amount received by the employee
                after applicable deductions and adjustments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                How can I calculate my monthly salary from CTC?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                Enter your annual CTC and applicable deductions into this
                salary calculator to get an estimated monthly in-hand salary.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Does PF reduce my in-hand salary?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                Yes. The employee's PF contribution is generally deducted from
                salary, so it can reduce the amount received as monthly
                take-home pay.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Does this calculator include income tax?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                This calculator provides a simplified estimate and does not
                calculate detailed income tax or TDS based on individual tax
                circumstances. Actual take-home salary may therefore differ.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Is this salary calculator accurate?
              </h3>

              <p className="text-muted mt-2 leading-relaxed">
                It provides an estimate based on the values entered. Your
                actual salary can differ depending on your employer's salary
                structure, allowances, deductions, taxes and other applicable
                factors.
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