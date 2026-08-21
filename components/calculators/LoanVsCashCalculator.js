'use client';

import { useState } from 'react';
import { calcLoanVsCash } from '@/lib/calc-functions';

export default function LoanVsCashCalculator() {
  const [price, setPrice] = useState(800000);
  const [downPayment, setDownPayment] = useState(150000);
  const [rate, setRate] = useState(9);
  const [tenure, setTenure] = useState(60);
  const [investReturn, setInvestReturn] = useState(10);

  const {
    loanAmount,
    emi,
    totalInterest,
    totalPayment,
    cashOption,
    loanOptionEffectiveCost,
  } = calcLoanVsCash(
    Number(price) || 0,
    Number(downPayment) || 0,
    Number(rate) || 0,
    Number(tenure) || 1,
    Number(investReturn) || 0
  );

  return (
    <div className="space-y-10">

      {/* =========================
          CALCULATOR
      ========================== */}

      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <Field
              label="Vehicle/Item Price (₹)"
              value={price}
              onChange={setPrice}
            />

            <Field
              label="Down Payment (₹)"
              value={downPayment}
              onChange={setDownPayment}
            />

            <Field
              label="Loan Interest Rate (%)"
              value={rate}
              onChange={setRate}
              step="0.1"
            />

            <Field
              label="Loan Tenure (months)"
              value={tenure}
              onChange={setTenure}
            />

            <Field
              label="Expected Investment Return (%)"
              value={investReturn}
              onChange={setInvestReturn}
              step="0.1"
            />
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Loan Amount"
              value={loanAmount}
            />

            <Result
              label="Pay Cash: Total Cost"
              value={cashOption}
            />

            <Result
              label="Take Loan: Monthly EMI"
              value={emi}
            />

            <Result
              label="Take Loan: Total Interest Paid"
              value={totalInterest}
            />

            <Result
              label="Take Loan: Effective Total Cost"
              value={loanOptionEffectiveCost}
              big
            />

          </div>
        </div>

        <p className="text-xs text-muted-2 mt-4">
          Paying cash avoids loan interest but uses your available money.
          Taking a loan keeps more money available for other purposes or
          investments, but introduces interest and other financing costs.
        </p>
      </div>


      {/* =========================
          SEO CONTENT
          ========================== */}

      <article className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Loan vs Cash Calculator
          </h2>

          <p className="text-muted leading-7">
            This free Loan vs Cash Calculator helps you compare the financial
            impact of paying for a vehicle or other purchase with cash versus
            financing it with a loan. Enter the purchase price, down payment,
            loan interest rate, loan tenure and expected investment return to
            compare the two options.
          </p>

          <p className="text-muted leading-7 mt-3">
            The calculator can help you understand the difference between
            paying the full amount upfront and taking a loan while keeping
            some of your money available for other uses or potential
            investment.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            What Is a Loan vs Cash Comparison?
          </h2>

          <p className="text-muted leading-7">
            A loan vs cash comparison evaluates whether it may be more
            suitable to pay for a purchase using available cash or to finance
            part of the purchase through a loan.
          </p>

          <p className="text-muted leading-7 mt-3">
            Paying cash generally eliminates loan interest, while financing
            allows you to preserve some cash for emergencies, investments or
            other financial needs. The better option depends on the loan
            cost, available funds, expected investment return and your
            financial situation.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            How Does the Loan vs Cash Calculator Work?
          </h2>

          <p className="text-muted leading-7">
            The calculator starts with the purchase price and down payment to
            determine the amount that would need to be financed. It then uses
            the loan interest rate and tenure to estimate the monthly EMI and
            total interest cost.
          </p>

          <p className="text-muted leading-7 mt-3">
            The calculator also considers the expected investment return
            entered by the user when comparing the effective cost of choosing
            financing instead of paying the full amount in cash.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Paying Cash for a Vehicle or Purchase
          </h2>

          <p className="text-muted leading-7">
            Paying cash means using your available funds to purchase the
            vehicle or item without financing the purchase through a loan.
            One major advantage is that there is no loan interest to pay.
          </p>

          <p className="text-muted leading-7 mt-3">
            However, using a large amount of cash for a purchase can reduce
            the amount of money available for emergencies, investments and
            other financial requirements.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Financing a Purchase With a Loan
          </h2>

          <p className="text-muted leading-7">
            Financing allows you to pay a portion of the purchase price
            upfront and borrow the remaining amount. You then repay the loan
            through regular instalments over the selected tenure.
          </p>

          <p className="text-muted leading-7 mt-3">
            The main cost of financing is the interest charged on the loan.
            Depending on the interest rate and tenure, the total amount paid
            can be higher than the original purchase price.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Loan Interest Rate vs Investment Return
          </h2>

          <p className="text-muted leading-7">
            One important factor in a loan vs cash decision is the difference
            between the loan interest rate and the potential return on money
            that remains invested.
          </p>

          <p className="text-muted leading-7 mt-3">
            If the expected investment return is higher than the borrowing
            cost, keeping some money invested may appear attractive. However,
            investment returns are not guaranteed, while loan interest is a
            contractual cost.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Factors to Consider Before Choosing Cash or Loan
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>Purchase price of the vehicle or item.</li>
            <li>Available cash and emergency savings.</li>
            <li>Required down payment.</li>
            <li>Loan interest rate.</li>
            <li>Loan repayment tenure.</li>
            <li>Total interest payable.</li>
            <li>Expected investment return.</li>
            <li>Other loan fees and charges.</li>
            <li>Your monthly repayment capacity.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            When Paying Cash May Make Sense
          </h2>

          <p className="text-muted leading-7">
            Paying cash may be worth considering when you have sufficient
            savings after the purchase and want to avoid borrowing costs.
            It can also be attractive when the available loan interest rate is
            relatively high compared with the potential return you could
            reasonably expect from keeping the money invested.
          </p>

          <p className="text-muted leading-7 mt-3">
            However, using all available savings for a purchase may leave
            limited funds for unexpected expenses, so maintaining an
            appropriate emergency reserve is important.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            When Taking a Loan May Make Sense
          </h2>

          <p className="text-muted leading-7">
            Financing may be useful when you want to preserve cash instead of
            using a large portion of your savings for a purchase. It can also
            provide flexibility when the loan cost is manageable and you have
            a clear plan for the money that remains available.
          </p>

          <p className="text-muted leading-7 mt-3">
            Before taking a loan, consider whether the monthly EMI comfortably
            fits within your regular budget and whether the total interest and
            other charges are reasonable.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Loan vs Cash for a Car or Bike
          </h2>

          <p className="text-muted leading-7">
            The same comparison can be used when purchasing a car, motorcycle,
            scooter or other vehicle. You can enter the vehicle price,
            down payment, loan rate and repayment tenure to estimate the cost
            of financing.
          </p>

          <p className="text-muted leading-7 mt-3">
            Comparing the estimated financing cost with the amount of cash
            required upfront can make it easier to understand the financial
            trade-off between the two options.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Loan vs Cash Example
          </h2>

          <p className="text-muted leading-7">
            Suppose a vehicle costs ₹8,00,000 and you have ₹1,50,000 available
            for the down payment. The remaining amount can be financed through
            a loan.
          </p>

          <p className="text-muted leading-7 mt-3">
            By entering the loan interest rate, repayment tenure and expected
            investment return into the calculator, you can compare the
            estimated cost of financing with the cash purchase option.
          </p>

          <p className="text-muted leading-7 mt-3">
            The example is only an illustration. Actual loan rates,
            investment returns, fees and other costs can vary.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Important Things to Remember
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>Loan interest is an actual financing cost.</li>
            <li>Investment returns are not guaranteed.</li>
            <li>Loan processing fees may increase the effective cost.</li>
            <li>Paying cash can reduce available liquidity.</li>
            <li>EMI should fit comfortably within your monthly budget.</li>
            <li>Actual lender terms may differ from calculator estimates.</li>
          </ul>
        </section>


        {/* =========================
            FAQ
        ========================== */}

        <section>
          <h2 className="text-2xl font-bold mb-5">
            Frequently Asked Questions About Loan vs Cash
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="font-semibold">
                Is it better to pay cash or take a loan?
              </h3>

              <p className="text-muted leading-7 mt-1">
                There is no single answer for everyone. The decision depends
                on the loan interest rate, available savings, expected
                investment return, monthly cash flow and financial goals.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Does paying cash save money?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Paying cash can avoid loan interest and financing charges.
                However, using a large amount of cash also means that money is
                no longer available for other purposes or investments.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Is taking a loan better if investment returns are higher?
              </h3>

              <p className="text-muted leading-7 mt-1">
                A higher expected investment return can make financing more
                attractive in some situations, but investment returns are
                uncertain and should not be treated as guaranteed.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Does a higher loan interest rate favour paying cash?
              </h3>

              <p className="text-muted leading-7 mt-1">
                A higher borrowing rate increases the cost of financing,
                which can make paying cash more attractive if sufficient
                savings are available.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Can I use this calculator for a car or bike?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Yes. The calculator can be used to compare cash and financing
                options for cars, motorcycles, scooters and other purchases.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Are the results of the Loan vs Cash Calculator exact?
              </h3>

              <p className="text-muted leading-7 mt-1">
                The results are estimates based on the values entered. Actual
                loan costs, investment returns, fees and other financial
                factors may differ.
              </p>
            </div>

          </div>
        </section>

      </article>
    </div>
  );
}

function Field({ label, value, onChange, step = '1' }) {
  return (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
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
      <p className="text-xs text-muted">{label}</p>
      <p
        className={
          big
            ? 'text-3xl font-extrabold text-brand-400'
            : 'text-2xl font-bold'
        }
      >
        ₹{value.toLocaleString('en-IN', {
          maximumFractionDigits: 0,
        })}
      </p>
    </div>
  );
}