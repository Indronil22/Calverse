'use client';

import { useState } from 'react';
import { calcDA } from '@/lib/calc-functions';

export default function DACalculator() {
  const [basicPay, setBasicPay] = useState(30000);
  const [daPct, setDaPct] = useState(50);

  const { daAmount, totalPay } = calcDA(
    Number(basicPay) || 0,
    Number(daPct) || 0
  );

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
              label="DA Rate (%)"
              value={daPct}
              onChange={setDaPct}
              step="0.1"
            />
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
            <Result
              label="DA Amount"
              value={daAmount}
            />

            <Result
              label="Basic Pay + DA"
              value={totalPay}
              big
            />
          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          DA rates are revised periodically by the government — check
          the latest notified rate for your pay commission before
          relying on this figure.
        </p>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Dearness Allowance Calculator
          </h2>

          <p className="text-muted leading-7">
            The Dearness Allowance Calculator helps estimate the
            Dearness Allowance amount based on basic pay and the
            applicable DA percentage.
          </p>

          <p className="text-muted leading-7 mt-4">
            Enter your basic pay and DA rate to calculate the estimated
            DA amount and the combined value of basic pay and DA.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What is Dearness Allowance?
          </h2>

          <p className="text-muted leading-7">
            Dearness Allowance, commonly called DA, is an allowance
            provided to eligible employees and pensioners to help
            compensate for the effect of inflation and changes in the
            cost of living.
          </p>

          <p className="text-muted leading-7 mt-4">
            The applicable DA rate can change periodically according
            to government decisions and the relevant pay structure.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How is DA Calculated?
          </h2>

          <p className="text-muted leading-7">
            DA is generally calculated as a percentage of the basic pay
            used for the applicable allowance calculation.
          </p>

          <div className="bg-fg/5 rounded-xl p-5 mt-4">
            <p className="font-semibold mb-2">
              DA Amount
            </p>

            <p className="text-muted leading-7">
              DA = Basic Pay × DA Rate ÷ 100
            </p>
          </div>

          <p className="text-muted leading-7 mt-4">
            The calculator applies this percentage to the basic pay
            entered by the user.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            DA Calculation Example
          </h2>

          <p className="text-muted leading-7">
            Suppose the basic pay is ₹30,000 and the applicable DA rate
            entered into the calculator is 50%.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7 mt-4">
            <li>Basic Pay: ₹30,000</li>
            <li>DA Rate: 50%</li>
            <li>DA Amount: ₹15,000</li>
            <li>Basic Pay + DA: ₹45,000</li>
          </ul>

          <p className="text-muted leading-7 mt-4">
            The actual result depends on the basic pay and DA rate
            entered into the calculator.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why Does DA Change?
          </h2>

          <p className="text-muted leading-7">
            DA rates may be revised periodically to account for changes
            in the cost of living and inflation. The applicable rate
            depends on the relevant government notification, employee
            category and pay structure.
          </p>

          <p className="text-muted leading-7 mt-4">
            Therefore, users should enter the currently applicable DA
            percentage when using the calculator.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            DA for Government Employees
          </h2>

          <p className="text-muted leading-7">
            Dearness Allowance is an important component of compensation
            for eligible government employees. The applicable rate and
            calculation rules can depend on the relevant government
            pay commission and official notifications.
          </p>

          <p className="text-muted leading-7 mt-4">
            The calculator provides a mathematical estimate based on
            the basic pay and DA rate entered by the user. It does not
            determine eligibility or the officially applicable rate.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            DA and Total Pay
          </h2>

          <p className="text-muted leading-7">
            Adding the calculated DA amount to basic pay provides the
            combined basic pay and DA figure.
          </p>

          <p className="text-muted leading-7 mt-4">
            This combined amount is not necessarily the same as total
            salary because other components such as HRA, TA, deductions
            and other allowances may also be part of an employee's
            salary structure.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            DA Calculator for Pensioners
          </h2>

          <p className="text-muted leading-7">
            DA-related calculations can also be relevant to pensioners
            where the applicable allowance or relief is determined
            under the relevant pension rules.
          </p>

          <p className="text-muted leading-7 mt-4">
            Pensioners should use the applicable official rate and
            calculation rules for their pension category when
            determining an actual entitlement.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Important Note About DA Rates
          </h2>

          <p className="text-muted leading-7">
            DA rates are subject to government decisions and may be
            revised from time to time. The calculator does not
            automatically determine whether a particular rate is
            currently notified.
          </p>

          <p className="text-muted leading-7 mt-4">
            Always verify the latest applicable government notification
            or official pay-related information before using the
            calculated amount for salary or pension decisions.
          </p>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About DA Calculator
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                What is Dearness Allowance?
              </h3>

              <p className="text-muted leading-7">
                Dearness Allowance is an allowance designed to help
                eligible employees and pensioners account for changes
                in the cost of living and inflation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How is DA calculated?
              </h3>

              <p className="text-muted leading-7">
                DA is calculated by applying the applicable DA
                percentage to the relevant basic pay.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What is the formula for calculating DA?
              </h3>

              <p className="text-muted leading-7">
                DA Amount = Basic Pay × DA Rate ÷ 100.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does DA increase when the DA rate increases?
              </h3>

              <p className="text-muted leading-7">
                Yes. If the applicable basic pay remains the same, a
                higher DA percentage results in a higher calculated DA
                amount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does basic pay plus DA equal total salary?
              </h3>

              <p className="text-muted leading-7">
                No. Basic pay plus DA is only part of the overall salary
                structure. Other allowances and deductions may also
                apply.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Are DA rates fixed permanently?
              </h3>

              <p className="text-muted leading-7">
                No. DA rates may be revised periodically according to
                applicable government decisions and notifications.
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