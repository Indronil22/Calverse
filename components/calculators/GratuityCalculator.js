'use client';

import { useState } from 'react';
import { calcGratuity } from '@/lib/calc-functions';

export default function GratuityCalculator() {
  const [lastSalary, setLastSalary] = useState(50000);
  const [years, setYears] = useState(8);

  const { gratuity } = calcGratuity(
    Number(lastSalary) || 0,
    Number(years) || 0
  );

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <Field
              label="Last Drawn Salary (Basic + DA, ₹)"
              value={lastSalary}
              onChange={setLastSalary}
            />

            <Field
              label="Years of Service"
              value={years}
              onChange={setYears}
            />
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">
            <div>
              <p className="text-xs text-muted">
                Gratuity Payable
              </p>

              <p className="text-3xl font-extrabold text-brand-400">
                ₹
                {gratuity.toLocaleString('en-IN', {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          Formula: (Last drawn salary × 15 × years of service) / 26,
          as per the Payment of Gratuity Act, 1972 — applicable to
          employees covered under the Act, subject to the applicable
          statutory provisions and maximum limit.
        </p>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Gratuity Calculator
          </h2>

          <p className="text-muted leading-7">
            The Gratuity Calculator helps estimate the gratuity amount
            payable based on the employee's last drawn salary and years
            of eligible service.
          </p>

          <p className="text-muted leading-7 mt-4">
            Enter your last drawn salary, including basic salary and DA,
            along with your years of service to get an estimated gratuity
            amount.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What is Gratuity?
          </h2>

          <p className="text-muted leading-7">
            Gratuity is a statutory benefit that may be payable by an
            employer to an eligible employee after completing the
            required period of service under the applicable gratuity
            provisions.
          </p>

          <p className="text-muted leading-7 mt-4">
            It is generally associated with long-term employment and
            may become payable when an employee leaves employment after
            satisfying the applicable eligibility requirements.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How is Gratuity Calculated?
          </h2>

          <p className="text-muted leading-7">
            For employees covered under the standard formula of the
            Payment of Gratuity Act, the commonly used calculation is
            based on the last drawn salary, eligible years of service
            and the prescribed number of days used in the formula.
          </p>

          <div className="bg-fg/5 rounded-xl p-5 mt-4">
            <p className="font-semibold mb-3">
              Gratuity Formula
            </p>

            <p className="text-muted leading-7">
              Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26
            </p>
          </div>

          <p className="text-muted leading-7 mt-4">
            The calculator uses this formula to provide an estimate
            based on the salary and service period entered.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What Salary is Used for Gratuity Calculation?
          </h2>

          <p className="text-muted leading-7">
            The gratuity calculation generally uses the employee's
            last drawn salary for the applicable calculation period.
            For the standard formula used by this calculator, the input
            is the last drawn Basic Salary plus Dearness Allowance.
          </p>

          <p className="text-muted leading-7 mt-4">
            Other components of salary may not necessarily be included
            in the gratuity calculation, so the appropriate salary
            figure should be used when estimating the amount.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Gratuity Calculation Example
          </h2>

          <p className="text-muted leading-7">
            Suppose an employee has a last drawn Basic Salary plus DA
            of ₹50,000 and has completed 8 years of eligible service.
            The calculator applies the standard formula to estimate the
            gratuity amount.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7 mt-4">
            <li>Last Drawn Salary: ₹50,000</li>
            <li>Years of Service: 8 years</li>
            <li>Applicable formula: Salary × 15 × Service ÷ 26</li>
          </ul>

          <p className="text-muted leading-7 mt-4">
            The resulting figure is an estimate and actual gratuity
            eligibility and payment can depend on the applicable
            statutory rules and employment circumstances.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Who Can Use a Gratuity Calculator?
          </h2>

          <p className="text-muted leading-7 mb-4">
            A gratuity calculator can be useful for employees who want
            to estimate their potential gratuity benefit based on their
            salary and service period.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
            <li>Employees planning retirement.</li>
            <li>Employees changing jobs.</li>
            <li>Employees estimating long-term employment benefits.</li>
            <li>Employees comparing different employment scenarios.</li>
            <li>Employees planning their finances before leaving a job.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Does Years of Service Affect Gratuity?
          </h2>

          <p className="text-muted leading-7">
            Yes. The length of eligible service is an important part of
            the gratuity calculation. Under the standard formula, the
            gratuity amount increases as the number of eligible years of
            service increases, assuming the salary remains unchanged.
          </p>

          <p className="text-muted leading-7 mt-4">
            The applicable rules for counting completed years and
            additional periods of service should be considered when
            determining the final statutory gratuity amount.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Gratuity and the Payment of Gratuity Act
          </h2>

          <p className="text-muted leading-7">
            The standard gratuity calculation used by this calculator
            is based on the formula associated with the Payment of
            Gratuity Act, 1972 for employees covered by the Act.
          </p>

          <p className="text-muted leading-7 mt-4">
            Eligibility, calculation, maximum limits and other
            conditions are subject to the applicable statutory
            provisions. Therefore, the calculator should be used as an
            estimation tool rather than as an official determination of
            entitlement.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Gratuity Calculation for Long-Term Employees
          </h2>

          <p className="text-muted leading-7">
            Gratuity can become an important component of long-term
            employment benefits. Employees can use a gratuity calculator
            to understand how their last drawn salary and service period
            may affect the estimated amount.
          </p>

          <p className="text-muted leading-7 mt-4">
            This can also help with financial planning when considering
            retirement, resignation or a change in employment.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Important Points About Gratuity
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
            <li>
              Gratuity eligibility depends on the applicable statutory
              provisions.
            </li>
            <li>
              The last drawn salary is an important factor in the
              calculation.
            </li>
            <li>
              Years of eligible service affect the estimated gratuity.
            </li>
            <li>
              The standard formula uses 15 days of salary for each
              eligible year under the applicable calculation.
            </li>
            <li>
              Statutory maximum limits may apply.
            </li>
            <li>
              Actual gratuity entitlement can differ from a calculator
              estimate.
            </li>
          </ul>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About Gratuity
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                What is a gratuity calculator?
              </h3>

              <p className="text-muted leading-7">
                A gratuity calculator estimates the gratuity amount
                based on the last drawn salary and eligible years of
                service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What is the gratuity formula?
              </h3>

              <p className="text-muted leading-7">
                For employees covered under the standard formula, the
                calculation is generally expressed as (last drawn
                salary × 15 × years of service) divided by 26.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What salary should I enter in the calculator?
              </h3>

              <p className="text-muted leading-7">
                Enter the applicable last drawn Basic Salary plus DA
                used for the gratuity calculation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does gratuity increase with years of service?
              </h3>

              <p className="text-muted leading-7">
                Generally, under the standard formula, a longer period
                of eligible service results in a higher gratuity amount
                when other inputs remain the same.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Is there a maximum gratuity limit?
              </h3>

              <p className="text-muted leading-7">
                A statutory maximum can apply to gratuity payable under
                the applicable provisions. The actual limit should be
                checked against the current applicable rules.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Is the gratuity calculator result exact?
              </h3>

              <p className="text-muted leading-7">
                No. The result is an estimate based on the values
                entered and the formula used by the calculator. Actual
                entitlement can depend on eligibility, service
                conditions and applicable statutory provisions.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
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