'use client';

import { useState } from 'react';
import { calcHRAExemption } from '@/lib/calc-functions';

export default function HRACalculator() {
  const [basicSalary, setBasicSalary] = useState(30000);
  const [hraReceived, setHraReceived] = useState(15000);
  const [rentPaid, setRentPaid] = useState(18000);
  const [isMetro, setIsMetro] = useState(true);

  const { exemption, taxableHRA } = calcHRAExemption({
    basicSalary: Number(basicSalary) || 0,
    hraReceived: Number(hraReceived) || 0,
    rentPaid: Number(rentPaid) || 0,
    isMetro,
  });

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">

            <Field
              label="Basic Salary (per month, ₹)"
              value={basicSalary}
              onChange={setBasicSalary}
            />

            <Field
              label="HRA Received (per month, ₹)"
              value={hraReceived}
              onChange={setHraReceived}
            />

            <Field
              label="Rent Paid (per month, ₹)"
              value={rentPaid}
              onChange={setRentPaid}
            />

            <div className="flex gap-2">
              <button
                onClick={() => setIsMetro(true)}
                className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                  isMetro
                    ? 'bg-brand-500'
                    : 'toggle-btn-inactive'
                }`}
              >
                Metro City
              </button>

              <button
                onClick={() => setIsMetro(false)}
                className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                  !isMetro
                    ? 'bg-brand-500'
                    : 'toggle-btn-inactive'
                }`}
              >
                Non-Metro
              </button>
            </div>

          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="HRA Exemption (per month)"
              value={exemption}
              big
            />

            <Result
              label="Taxable HRA (per month)"
              value={taxableHRA}
            />

          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          Exemption = minimum of: HRA received, 50%/40% of basic
          (metro/non-metro), or rent paid minus 10% of basic — as per
          applicable Indian income tax rules.
        </p>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            HRA Calculator
          </h2>

          <p className="text-muted leading-7">
            The HRA Calculator helps estimate the House Rent Allowance
            exemption and taxable HRA amount based on salary, HRA
            received, rent paid and whether the employee lives in a
            metro or non-metro city.
          </p>

          <p className="text-muted leading-7 mt-4">
            Enter your monthly basic salary, HRA received and monthly
            rent paid, then select the applicable city category to
            calculate the estimated HRA exemption.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What is HRA?
          </h2>

          <p className="text-muted leading-7">
            House Rent Allowance, commonly known as HRA, is a salary
            component provided by employers to eligible employees who
            incur expenses for rented accommodation.
          </p>

          <p className="text-muted leading-7 mt-4">
            Under applicable income tax rules, a portion of HRA may
            qualify for tax exemption when the required conditions are
            satisfied.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How is HRA Exemption Calculated?
          </h2>

          <p className="text-muted leading-7">
            The HRA exemption is generally determined by comparing
            multiple amounts. The eligible exemption is based on the
            minimum of the applicable amounts under the relevant rules.
          </p>

          <div className="bg-fg/5 rounded-xl p-5 mt-4">
            <p className="font-semibold mb-3">
              HRA Exemption
            </p>

            <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
              <li>Actual HRA received.</li>
              <li>50% of basic salary for the applicable metro category.</li>
              <li>40% of basic salary for the applicable non-metro category.</li>
              <li>Rent paid minus 10% of basic salary.</li>
            </ul>
          </div>

          <p className="text-muted leading-7 mt-4">
            The exemption is generally the minimum of the applicable
            amounts. The exact tax treatment can depend on the
            applicable income tax provisions and the employee's
            circumstances.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            HRA Calculation Example
          </h2>

          <p className="text-muted leading-7">
            Suppose an employee has a monthly basic salary of ₹30,000,
            receives ₹15,000 as HRA and pays ₹18,000 rent per month.
            If the employee is treated as living in a metro city for
            this calculation, the calculator compares the applicable
            amounts to estimate the exemption.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7 mt-4">
            <li>Basic Salary: ₹30,000 per month</li>
            <li>HRA Received: ₹15,000 per month</li>
            <li>Rent Paid: ₹18,000 per month</li>
            <li>City Category: Metro</li>
          </ul>

          <p className="text-muted leading-7 mt-4">
            The calculator then determines the estimated HRA exemption
            and taxable portion based on the entered values.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Metro and Non-Metro HRA Calculation
          </h2>

          <p className="text-muted leading-7">
            The applicable percentage of basic salary used in the HRA
            exemption calculation differs depending on whether the
            relevant location falls under the applicable metro or
            non-metro category.
          </p>

          <p className="text-muted leading-7 mt-4">
            The calculator provides separate Metro City and Non-Metro
            options so that the relevant percentage can be applied to
            the calculation.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            HRA Exemption and Taxable HRA
          </h2>

          <p className="text-muted leading-7">
            HRA received and HRA exemption are not necessarily the same
            amount. When only part of the HRA qualifies for exemption,
            the remaining portion may be treated as taxable HRA under
            the applicable tax rules.
          </p>

          <p className="text-muted leading-7 mt-4">
            The calculator displays both the estimated HRA exemption
            and the remaining taxable HRA amount.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            HRA Calculator for Rent Paid
          </h2>

          <p className="text-muted leading-7">
            Rent paid is an important input in the HRA exemption
            calculation. The calculator uses the entered monthly rent
            along with basic salary and HRA received to estimate the
            eligible exemption.
          </p>

          <p className="text-muted leading-7 mt-4">
            Entering the actual rent paid for the relevant period can
            make the estimate more useful for personal tax planning.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Who Can Use an HRA Calculator?
          </h2>

          <p className="text-muted leading-7 mb-4">
            An HRA calculator can be useful for employees who receive
            HRA as part of their salary and want to estimate the
            possible tax-exempt portion.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
            <li>Salaried employees receiving HRA.</li>
            <li>Employees living in rented accommodation.</li>
            <li>Employees planning their tax liability.</li>
            <li>Employees comparing taxable and exempt HRA.</li>
            <li>Employees estimating salary-related tax benefits.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Important Points About HRA Exemption
          </h2>

          <p className="text-muted leading-7">
            HRA exemption depends on the applicable income tax rules
            and the information relevant to the employee's situation.
            The calculation may also depend on the applicable tax
            regime and other conditions.
          </p>

          <p className="text-muted leading-7 mt-4">
            This calculator provides an estimate based on the values
            entered and should not be treated as a substitute for
            professional tax advice or an official tax computation.
          </p>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About HRA Calculator
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                What is an HRA calculator?
              </h3>

              <p className="text-muted leading-7">
                An HRA calculator estimates the portion of House Rent
                Allowance that may qualify for exemption based on
                basic salary, HRA received, rent paid and the applicable
                city category.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How is HRA exemption calculated?
              </h3>

              <p className="text-muted leading-7">
                The exemption is generally determined by comparing the
                applicable amounts based on HRA received, basic salary
                and rent paid, with the eligible exemption being the
                minimum of the relevant amounts.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What information is needed for HRA calculation?
              </h3>

              <p className="text-muted leading-7">
                The calculator requires monthly basic salary, HRA
                received, monthly rent paid and the applicable metro
                or non-metro city category.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What is the difference between exempt HRA and taxable HRA?
              </h3>

              <p className="text-muted leading-7">
                Exempt HRA is the portion that qualifies for exemption
                under the applicable rules. Any remaining HRA may be
                taxable according to the applicable tax provisions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does rent paid affect HRA exemption?
              </h3>

              <p className="text-muted leading-7">
                Yes. Rent paid is one of the factors considered in the
                HRA exemption calculation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Is HRA exemption the same for metro and non-metro cities?
              </h3>

              <p className="text-muted leading-7">
                The applicable percentage used in the calculation can
                differ between metro and non-metro categories.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Is the HRA calculator result an exact tax calculation?
              </h3>

              <p className="text-muted leading-7">
                No. It is an estimate based on the values entered.
                Actual tax treatment can depend on the applicable tax
                rules, tax regime and individual circumstances.
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