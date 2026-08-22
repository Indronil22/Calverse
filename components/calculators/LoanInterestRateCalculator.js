'use client';

import { useState } from 'react';

export default function LoanInterestRateCalculator() {
  const [principal, setPrincipal] = useState(80000);
  const [monthlyInterest, setMonthlyInterest] = useState(2000);

  const principalAmount = Number(principal) || 0;
  const monthlyInterestAmount = Number(monthlyInterest) || 0;

  const monthlyRate =
    principalAmount > 0
      ? (monthlyInterestAmount / principalAmount) * 100
      : 0;

  const annualSimpleRate = monthlyRate * 12;

  const annualInterestAmount = monthlyInterestAmount * 12;

  const effectiveAnnualRate =
    principalAmount > 0
      ? (Math.pow(1 + monthlyRate / 100, 12) - 1) * 100
      : 0;

  return (
    <div className="space-y-8">

      {/* =========================================
          CALCULATOR
      ========================================= */}

      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Inputs */}
          <div className="space-y-4">

            <Field
              label="Loan Amount (₹)"
              value={principal}
              onChange={setPrincipal}
            />

            <Field
              label="Monthly Interest (₹)"
              value={monthlyInterest}
              onChange={setMonthlyInterest}
            />

          </div>

          {/* Results */}
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Monthly Interest Rate"
              value={`${monthlyRate.toFixed(2)}%`}
              big
            />

            <Result
              label="Annual Interest Rate (Simple)"
              value={`${annualSimpleRate.toFixed(2)}%`}
            />

            <Result
              label="Annual Interest Amount"
              value={`₹${annualInterestAmount.toLocaleString('en-IN', {
                maximumFractionDigits: 2,
              })}`}
            />

            <Result
              label="Effective Annual Rate"
              value={`${effectiveAnnualRate.toFixed(2)}%`}
            />

          </div>
        </div>

        <p className="text-xs text-muted-2 mt-4">
          Monthly interest rate is calculated from the monthly interest amount
          and loan amount. The annual simple rate is the monthly rate multiplied
          by 12. Effective annual rate assumes monthly compounding.
        </p>
      </div>


      {/* =========================================
          SEO CONTENT
      ========================================= */}

      <div className="space-y-8">

        {/* Introduction */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Loan Interest Rate Calculator
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              The Loan Interest Rate Calculator helps you determine the
              interest rate being charged on a loan when you know the loan
              amount and the amount of interest you need to pay every month.
              It calculates the monthly interest rate, annual simple interest
              rate, annual interest amount, and effective annual rate.
            </p>

            <p>
              This calculator is particularly useful when a lender, individual,
              private financier, or other loan provider tells you the monthly
              interest amount instead of directly stating the interest rate.
              By entering the principal amount and monthly interest payment,
              you can quickly understand the percentage of interest being
              charged.
            </p>

            <p>
              For example, if you borrow ₹80,000 and are required to pay ₹2,000
              as interest every month, the monthly interest rate is 2.50%.
              The corresponding simple annualized interest rate is 30%.
            </p>

          </div>
        </section>


        {/* How to use */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to Use the Loan Interest Rate Calculator
          </h2>

          <div className="space-y-3 text-muted leading-7">

            <p>
              Using this calculator is simple. You only need two values:
              the loan amount and the monthly interest amount.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Enter the total loan amount or principal amount.
              </li>

              <li>
                Enter the amount of interest you are required to pay every
                month.
              </li>

              <li>
                The calculator will calculate the monthly interest rate
                automatically.
              </li>

              <li>
                The calculator will also show the annual simple interest rate.
              </li>

              <li>
                You can also see the total interest amount payable over
                12 months.
              </li>

              <li>
                The effective annual rate is shown separately when monthly
                compounding is assumed.
              </li>
            </ol>

          </div>
        </section>


        {/* Formula */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Loan Interest Rate Formula
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              The monthly interest rate is calculated using the following
              formula:
            </p>

            <div className="card p-5 text-center">
              <p className="text-lg md:text-xl font-semibold">
                Monthly Interest Rate =
              </p>

              <p className="text-lg md:text-xl font-bold text-brand-400 mt-2">
                (Monthly Interest ÷ Loan Amount) × 100
              </p>
            </div>

            <p>
              To calculate the simple annual interest rate, the monthly
              interest rate is multiplied by 12:
            </p>

            <div className="card p-5 text-center">
              <p className="text-lg md:text-xl font-bold text-brand-400">
                Annual Simple Rate = Monthly Rate × 12
              </p>
            </div>

            <p>
              The annual interest amount is calculated by multiplying the
              monthly interest amount by 12.
            </p>

          </div>
        </section>


        {/* Example */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Loan Interest Rate Calculation Example
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              Suppose you borrow <strong>₹80,000</strong> and the lender tells
              you that you have to pay <strong>₹2,000 interest every month</strong>.
            </p>

            <div className="card p-6">

              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <p className="text-sm text-muted">
                    Loan Amount
                  </p>

                  <p className="text-xl font-bold">
                    ₹80,000
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Monthly Interest
                  </p>

                  <p className="text-xl font-bold">
                    ₹2,000
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Monthly Interest Rate
                  </p>

                  <p className="text-xl font-bold text-brand-400">
                    2.50%
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Annual Simple Rate
                  </p>

                  <p className="text-xl font-bold text-brand-400">
                    30.00%
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Annual Interest
                  </p>

                  <p className="text-xl font-bold">
                    ₹24,000
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Effective Annual Rate
                  </p>

                  <p className="text-xl font-bold">
                    34.49%
                  </p>
                </div>

              </div>

            </div>

            <p>
              Therefore, ₹2,000 monthly interest on an ₹80,000 loan represents
              a monthly interest rate of 2.50%. If the monthly rate is simply
              multiplied by 12, the annualized rate is 30%.
            </p>

          </div>
        </section>


        {/* Monthly vs Annual */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Monthly Interest Rate vs Annual Interest Rate
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              A monthly interest rate tells you how much interest is charged
              against the loan principal for one month. An annual simple rate
              converts this monthly rate into a yearly figure by multiplying
              it by 12.
            </p>

            <p>
              For example, a monthly rate of 2% corresponds to a simple annual
              rate of 24%. However, this does not necessarily mean the
              effective annual cost is exactly 24% if the interest is compounded
              monthly.
            </p>

            <p>
              This distinction is important when comparing different borrowing
              options. Always check whether the quoted rate is a monthly rate,
              annual rate, simple rate, reducing-balance rate, flat rate, or an
              effective annual rate.
            </p>

          </div>
        </section>


        {/* Effective annual rate */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What Is the Effective Annual Rate?
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              The effective annual rate takes monthly compounding into account.
              If interest is compounded every month, the effective annual cost
              can be higher than simply multiplying the monthly rate by 12.
            </p>

            <p>
              For example, a monthly interest rate of 2.50% produces a simple
              annualized rate of 30%, while a monthly-compounded effective
              annual rate is approximately 34.49%.
            </p>

            <p>
              The effective annual rate shown by this calculator is a
              mathematical comparison and assumes that the monthly interest
              rate is compounded on the outstanding amount for 12 months.
              Actual loan costs may differ depending on the lender's repayment
              method and loan agreement.
            </p>

          </div>
        </section>


        {/* Important points */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Important Points to Consider
          </h2>

          <div className="space-y-3 text-muted leading-7">

            <ul className="list-disc pl-6 space-y-2">
              <li>
                The calculator uses the loan amount and stated monthly
                interest payment provided by you.
              </li>

              <li>
                The annual simple rate is obtained by multiplying the monthly
                rate by 12.
              </li>

              <li>
                The effective annual rate assumes monthly compounding.
              </li>

              <li>
                Processing fees, documentation charges, penalties, insurance,
                taxes, and other loan costs are not included.
              </li>

              <li>
                Actual borrowing costs can differ depending on the lender's
                terms and repayment structure.
              </li>

              <li>
                Always check the loan agreement before accepting a loan.
              </li>
            </ul>

          </div>
        </section>


        {/* Who can use */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Who Can Use This Calculator?
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              This calculator can be useful for anyone who wants to understand
              the interest rate associated with a loan when the lender provides
              the interest as a fixed monthly amount.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Personal loan borrowers</li>
              <li>Private loan borrowers</li>
              <li>Business and small-business borrowers</li>
              <li>Short-term loan borrowers</li>
              <li>People comparing different borrowing offers</li>
              <li>Anyone checking a quoted monthly interest amount</li>
            </ul>

          </div>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <FAQ
              question="How do I calculate the monthly interest rate on a loan?"
              answer="Divide the monthly interest amount by the loan amount and multiply the result by 100. For example, ₹2,000 monthly interest on an ₹80,000 loan gives a monthly interest rate of 2.50%."
            />

            <FAQ
              question="What is 2.5% monthly interest per year?"
              answer="A monthly interest rate of 2.5% corresponds to a simple annualized interest rate of 30%, calculated as 2.5% multiplied by 12."
            />

            <FAQ
              question="How much interest is ₹2,000 on an ₹80,000 loan?"
              answer="₹2,000 monthly interest on an ₹80,000 loan represents a monthly interest rate of 2.50%. If the same amount is paid every month for 12 months, the total interest would be ₹24,000."
            />

            <FAQ
              question="Does this calculator calculate EMI?"
              answer="No. This calculator determines the interest rate based on the loan amount and monthly interest payment. It does not calculate EMI or a complete loan repayment schedule."
            />

            <FAQ
              question="What is the difference between simple annual interest and effective annual interest?"
              answer="The simple annual rate is the monthly interest rate multiplied by 12. The effective annual rate takes monthly compounding into account and can therefore be higher."
            />

            <FAQ
              question="Is the effective annual rate the same as APR?"
              answer="Not necessarily. APR can include additional borrowing costs such as certain fees and charges. The effective annual rate shown here is based on the mathematical effect of monthly compounding and does not include additional loan costs."
            />

            <FAQ
              question="Does this calculator include processing fees?"
              answer="No. Processing fees, documentation charges, penalties, insurance and other additional costs are not included in the calculation."
            />

          </div>
        </section>

      </div>
    </div>
  );
}


/* =========================================
   FIELD
========================================= */

function Field({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-muted">
        {label}
      </span>

      <input
        type="number"
        min="0"
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
        {value}
      </p>
    </div>
  );
}


/* =========================================
   FAQ
========================================= */

function FAQ({ question, answer }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">
        {question}
      </h3>

      <p className="text-muted leading-7">
        {answer}
      </p>
    </div>
  );
}