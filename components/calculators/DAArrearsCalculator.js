'use client';

import { useState } from 'react';

export default function DAArrearsCalculator() {
  const [basicPay, setBasicPay] = useState(30000);
  const [oldDaPct, setOldDaPct] = useState(42);
  const [newDaPct, setNewDaPct] = useState(50);
  const [months, setMonths] = useState(6);

  const oldDA = (Number(basicPay) * Number(oldDaPct)) / 100;
  const newDA = (Number(basicPay) * Number(newDaPct)) / 100;
  const arrearsPerMonth = newDA - oldDA;
  const totalArrears = arrearsPerMonth * (Number(months) || 0);

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <Field
              label="Basic Pay (₹)"
              value={basicPay}
              onChange={setBasicPay}
            />

            <Field
              label="Old DA Rate (%)"
              value={oldDaPct}
              onChange={setOldDaPct}
              step="0.1"
            />

            <Field
              label="New DA Rate (%)"
              value={newDaPct}
              onChange={setNewDaPct}
              step="0.1"
            />

            <Field
              label="Arrear Period (months)"
              value={months}
              onChange={setMonths}
            />
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Arrears per Month"
              value={arrearsPerMonth}
            />

            <Result
              label="Total Arrears"
              value={totalArrears}
              big
            />

          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          DA arrears = difference between new and old DA amount,
          multiplied by the number of months the revised rate applies
          retroactively.
        </p>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            DA Arrears Calculator
          </h2>

          <p className="text-muted leading-7">
            The DA Arrears Calculator helps estimate the arrears that
            may result when a revised Dearness Allowance rate is
            applied retrospectively for a specific period.
          </p>

          <p className="text-muted leading-7 mt-4">
            Enter the basic pay, old DA rate, new DA rate and number of
            months to estimate the monthly difference and total DA
            arrears.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What are DA Arrears?
          </h2>

          <p className="text-muted leading-7">
            DA arrears are the additional amount that may become
            payable when a revised Dearness Allowance rate is applied
            to an earlier period.
          </p>

          <p className="text-muted leading-7 mt-4">
            For example, if the DA rate was increased from an old rate
            to a new rate and the revised rate is applicable from an
            earlier month, the difference for those months can form
            the DA arrears.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How are DA Arrears Calculated?
          </h2>

          <p className="text-muted leading-7">
            First, the DA amount under the old rate and the new rate
            are calculated using the basic pay.
          </p>

          <div className="bg-fg/5 rounded-xl p-5 mt-4 space-y-3">
            <p className="font-semibold">
              Old DA
            </p>

            <p className="text-muted leading-7">
              Old DA = Basic Pay × Old DA Rate ÷ 100
            </p>

            <p className="font-semibold mt-3">
              New DA
            </p>

            <p className="text-muted leading-7">
              New DA = Basic Pay × New DA Rate ÷ 100
            </p>

            <p className="font-semibold mt-3">
              Monthly Arrears
            </p>

            <p className="text-muted leading-7">
              Monthly Arrears = New DA − Old DA
            </p>

            <p className="font-semibold mt-3">
              Total Arrears
            </p>

            <p className="text-muted leading-7">
              Total Arrears = Monthly Arrears × Number of Months
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            DA Arrears Calculation Example
          </h2>

          <p className="text-muted leading-7">
            Suppose the basic pay is ₹30,000, the old DA rate is 42%,
            the new DA rate is 50%, and the revised rate applies for
            6 months.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7 mt-4">
            <li>Basic Pay: ₹30,000</li>
            <li>Old DA Rate: 42%</li>
            <li>New DA Rate: 50%</li>
            <li>Arrear Period: 6 months</li>
            <li>Old DA: ₹12,600 per month</li>
            <li>New DA: ₹15,000 per month</li>
            <li>Arrears per Month: ₹2,400</li>
            <li>Total DA Arrears: ₹14,400</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Factors That Affect DA Arrears
          </h2>

          <p className="text-muted leading-7 mb-4">
            The estimated DA arrears depend mainly on the following
            values:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
            <li>Basic pay used for the calculation.</li>
            <li>Old DA percentage.</li>
            <li>New DA percentage.</li>
            <li>Number of months covered by the arrear period.</li>
          </ul>

          <p className="text-muted leading-7 mt-4">
            A higher difference between the old and new DA rates will
            generally result in a higher monthly arrear amount.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            DA Arrears for Government Employees
          </h2>

          <p className="text-muted leading-7">
            DA arrears can arise when a government-approved revision
            in Dearness Allowance is made effective from an earlier
            date. The amount payable depends on the applicable pay
            rules, basic pay and the period covered by the revision.
          </p>

          <p className="text-muted leading-7 mt-4">
            The actual arrears paid by an employer or government
            department may differ from a simple percentage-based
            calculation because other salary components, eligibility
            rules or deductions may apply.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why Can DA Arrears Be Paid Retrospectively?
          </h2>

          <p className="text-muted leading-7">
            Sometimes a revised DA rate is announced after the period
            from which it becomes applicable. In such cases, the
            difference between the previously paid DA and the revised
            DA for the covered months may be calculated as arrears.
          </p>

          <p className="text-muted leading-7 mt-4">
            The exact effective date and payment rules depend on the
            relevant official order or notification.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Using the DA Arrears Calculator
          </h2>

          <p className="text-muted leading-7">
            Enter the basic pay applicable for the calculation period.
            Then enter the old DA percentage, the revised DA percentage
            and the number of months for which the difference applies.
          </p>

          <p className="text-muted leading-7 mt-4">
            The calculator displays the estimated arrears for one month
            as well as the total arrears for the selected period.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Important Note About DA Arrears
          </h2>

          <p className="text-muted leading-7">
            This calculator provides a mathematical estimate based on
            the values entered. It does not determine whether a person
            is officially entitled to DA arrears.
          </p>

          <p className="text-muted leading-7 mt-4">
            Actual arrears may depend on official government orders,
            effective dates, applicable pay rules, deductions and
            other components of the salary structure.
          </p>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About DA Arrears
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                What are DA arrears?
              </h3>

              <p className="text-muted leading-7">
                DA arrears are the difference in Dearness Allowance
                that may become payable when a revised DA rate is
                applied retrospectively to an earlier period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How is DA arrears calculated?
              </h3>

              <p className="text-muted leading-7">
                The difference between the new DA amount and old DA
                amount is calculated for each month and then multiplied
                by the number of applicable months.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What information is needed to calculate DA arrears?
              </h3>

              <p className="text-muted leading-7">
                The calculator requires basic pay, the old DA rate,
                the new DA rate and the number of months covered by
                the arrear period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does a higher DA increase arrears?
              </h3>

              <p className="text-muted leading-7">
                If the revised DA rate is higher than the old rate, the
                difference between the two rates can result in a higher
                monthly arrear amount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Are DA arrears always calculated using the same basic pay?
              </h3>

              <p className="text-muted leading-7">
                This calculator uses the basic pay entered by the user
                for the entire selected period. Actual official
                calculations may use different pay values when basic
                pay changes during the arrear period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Is the calculator result the exact amount I will receive?
              </h3>

              <p className="text-muted leading-7">
                No. The result is an estimate based on the entered
                values. Actual payment can depend on official rules,
                eligibility, effective dates and applicable deductions.
              </p>
            </div>

          </div>
        </section>

      </div>
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