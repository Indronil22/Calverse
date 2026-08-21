'use client';

import { useState } from 'react';
import { calcDA } from '@/lib/calc-functions';

export default function DRCalculator() {
  const [pension, setPension] = useState(20000);
  const [drPct, setDrPct] = useState(50);

  const { daAmount, totalPay } = calcDA(
    Number(pension) || 0,
    Number(drPct) || 0
  );

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <Field
              label="Basic Pension (₹)"
              value={pension}
              onChange={setPension}
            />

            <Field
              label="DR Rate (%)"
              value={drPct}
              onChange={setDrPct}
              step="0.1"
            />
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="DR Amount"
              value={daAmount}
            />

            <Result
              label="Total Pension (with DR)"
              value={totalPay}
              big
            />

          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          Dearness Relief is DA&apos;s pensioner equivalent, revised
          periodically — check the latest notified rate before relying
          on this figure.
        </p>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Dearness Relief Calculator
          </h2>

          <p className="text-muted leading-7">
            The Dearness Relief Calculator helps estimate the Dearness
            Relief amount payable on a basic pension based on the
            applicable DR percentage.
          </p>

          <p className="text-muted leading-7 mt-4">
            Enter the basic pension and DR rate to calculate the
            estimated Dearness Relief and the pension amount after
            adding DR.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What is Dearness Relief?
          </h2>

          <p className="text-muted leading-7">
            Dearness Relief, commonly known as DR, is an allowance
            provided to eligible pensioners to help offset the impact
            of inflation and changes in the cost of living.
          </p>

          <p className="text-muted leading-7 mt-4">
            The applicable DR percentage may be revised periodically
            according to the relevant government decisions and
            notifications.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How is Dearness Relief Calculated?
          </h2>

          <p className="text-muted leading-7">
            Dearness Relief is generally calculated by applying the
            applicable DR percentage to the relevant basic pension.
          </p>

          <div className="bg-fg/5 rounded-xl p-5 mt-4">
            <p className="font-semibold mb-2">
              DR Formula
            </p>

            <p className="text-muted leading-7">
              DR Amount = Basic Pension × DR Rate ÷ 100
            </p>
          </div>

          <p className="text-muted leading-7 mt-4">
            The calculator uses this percentage-based calculation to
            provide an estimated DR amount from the values entered.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Dearness Relief Calculation Example
          </h2>

          <p className="text-muted leading-7">
            Suppose a pensioner has a basic pension of ₹20,000 and the
            applicable DR rate entered into the calculator is 50%.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7 mt-4">
            <li>Basic Pension: ₹20,000</li>
            <li>DR Rate: 50%</li>
            <li>DR Amount: ₹10,000</li>
            <li>Total Pension with DR: ₹30,000</li>
          </ul>

          <p className="text-muted leading-7 mt-4">
            The actual amount depends on the basic pension and the
            applicable DR rate entered into the calculator.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why Does Dearness Relief Change?
          </h2>

          <p className="text-muted leading-7">
            Dearness Relief may be revised periodically to account for
            changes in inflation and the cost of living. The applicable
            rate depends on the relevant government rules and official
            notifications.
          </p>

          <p className="text-muted leading-7 mt-4">
            Because the rate can change, pensioners should use the
            latest applicable DR percentage when performing a current
            calculation.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            DR for Pensioners
          </h2>

          <p className="text-muted leading-7">
            Dearness Relief is an important component of pension
            benefits for eligible pensioners. It is intended to provide
            financial relief against the effects of inflation.
          </p>

          <p className="text-muted leading-7 mt-4">
            The actual rate and calculation rules can depend on the
            applicable pension scheme, government orders and relevant
            pay or pension structure.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Basic Pension and DR
          </h2>

          <p className="text-muted leading-7">
            The DR amount is calculated from the basic pension and the
            applicable DR percentage entered into the calculator.
          </p>

          <p className="text-muted leading-7 mt-4">
            Adding the calculated DR to the basic pension gives the
            pension amount before considering any other applicable
            components or deductions.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            DR Calculator for Pension Planning
          </h2>

          <p className="text-muted leading-7">
            Pensioners can use the calculator to estimate how a
            particular DR percentage affects their pension amount.
            This can also help compare pension amounts under different
            DR rates.
          </p>

          <p className="text-muted leading-7 mt-4">
            For example, entering different DR percentages can show how
            the estimated DR amount changes while keeping the basic
            pension unchanged.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Important Note About DR Rates
          </h2>

          <p className="text-muted leading-7">
            DR rates are subject to government decisions and may be
            revised from time to time. This calculator does not
            automatically determine the officially applicable rate.
          </p>

          <p className="text-muted leading-7 mt-4">
            Always verify the latest applicable government notification
            or official pension-related information before relying on
            the calculated amount for financial or pension decisions.
          </p>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About DR Calculator
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                What is Dearness Relief?
              </h3>

              <p className="text-muted leading-7">
                Dearness Relief is an allowance provided to eligible
                pensioners to help compensate for changes in the cost
                of living and inflation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How is DR calculated?
              </h3>

              <p className="text-muted leading-7">
                DR is calculated by applying the applicable DR
                percentage to the relevant basic pension.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What is the formula for calculating DR?
              </h3>

              <p className="text-muted leading-7">
                DR Amount = Basic Pension × DR Rate ÷ 100.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does a higher DR rate increase pension?
              </h3>

              <p className="text-muted leading-7">
                Yes. If the basic pension remains unchanged, a higher
                DR percentage results in a higher calculated DR amount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Is DR the same as DA?
              </h3>

              <p className="text-muted leading-7">
                DR is generally associated with eligible pensioners,
                while DA is generally associated with eligible
                employees. Both are intended to provide relief against
                changes in the cost of living.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Are DR rates fixed permanently?
              </h3>

              <p className="text-muted leading-7">
                No. DR rates may be revised periodically according to
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