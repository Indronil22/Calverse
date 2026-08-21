'use client';

import LoanEMICalculator from './LoanEMICalculator';

export default function BikeEMICalculator() {
  return (
    <div className="space-y-10">

      {/* =========================
          BIKE LOAN EMI CALCULATOR
      ========================== */}

      <LoanEMICalculator
        defaultPrincipal={100000}
        defaultRate={11}
        defaultTenure={36}
      />

      {/* =========================
          BIKE LOAN EMI SEO CONTENT
          NO CARD / NO BOX
      ========================== */}

      <article className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Bike Loan EMI Calculator
          </h2>

          <p className="text-muted leading-7">
            This free Bike Loan EMI Calculator helps you estimate the monthly
            instalment, total interest and overall repayment amount for a
            two-wheeler loan. Enter the loan amount, interest rate and loan
            tenure to calculate your estimated EMI instantly.
          </p>

          <p className="text-muted leading-7 mt-3">
            It can be useful when planning to purchase a motorcycle, scooter
            or other two-wheeler and when comparing different loan amounts,
            interest rates and repayment periods.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            What Is a Bike Loan EMI?
          </h2>

          <p className="text-muted leading-7">
            EMI stands for Equated Monthly Instalment. It is the regular
            amount paid towards a loan during the repayment period. A bike
            loan EMI generally consists of both the principal amount and the
            interest charged on the loan.
          </p>

          <p className="text-muted leading-7 mt-3">
            The monthly EMI mainly depends on the amount borrowed, the
            applicable interest rate and the repayment tenure.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            How Is Bike Loan EMI Calculated?
          </h2>

          <p className="text-muted leading-7">
            Bike loan EMI is commonly calculated using the principal loan
            amount, monthly interest rate and total number of monthly
            instalments.
          </p>

          <p className="font-semibold mt-4">
            EMI = P × R × (1 + R)ⁿ ÷ ((1 + R)ⁿ − 1)
          </p>

          <p className="text-muted leading-7 mt-3">
            In this formula, P represents the principal loan amount, R is the
            monthly interest rate and n represents the total number of
            monthly instalments.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            How to Use the Bike Loan EMI Calculator
          </h2>

          <ol className="list-decimal pl-6 space-y-2 text-muted">
            <li>Enter the amount you want to borrow for the bike.</li>
            <li>Enter the applicable annual interest rate.</li>
            <li>Enter the repayment tenure in months.</li>
            <li>Review the estimated monthly EMI.</li>
            <li>Check the estimated total repayment and interest amount.</li>
          </ol>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Bike Loan Amount and EMI
          </h2>

          <p className="text-muted leading-7">
            The loan amount directly affects the monthly EMI. If the interest
            rate and repayment tenure remain the same, borrowing a larger
            amount generally results in a higher EMI.
          </p>

          <p className="text-muted leading-7 mt-3">
            Before deciding on the loan amount, consider the bike's price,
            down payment and your monthly budget.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Effect of Interest Rate on Bike Loan EMI
          </h2>

          <p className="text-muted leading-7">
            The interest rate is an important factor in determining the cost
            of a two-wheeler loan. A higher interest rate generally increases
            both the EMI and the total interest paid over the loan tenure.
          </p>

          <p className="text-muted leading-7 mt-3">
            Comparing available loan interest rates can help you understand
            the potential difference in monthly payments and total repayment
            costs.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Bike Loan Tenure and EMI
          </h2>

          <p className="text-muted leading-7">
            Loan tenure is the period over which the bike loan is repaid. A
            longer tenure can reduce the monthly EMI because the repayment is
            spread across more instalments.
          </p>

          <p className="text-muted leading-7 mt-3">
            However, a longer repayment period can increase the total
            interest paid. A shorter tenure may have a higher monthly EMI but
            can reduce the overall interest cost.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Bike Loan EMI and Down Payment
          </h2>

          <p className="text-muted leading-7">
            A down payment reduces the amount that needs to be financed
            through the bike loan. For example, paying part of the bike's
            purchase price upfront reduces the loan principal.
          </p>

          <p className="text-muted leading-7 mt-3">
            A larger down payment can therefore reduce the amount borrowed
            and may lower the monthly EMI when other loan terms remain
            unchanged.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Motorcycle and Scooter Loan EMI
          </h2>

          <p className="text-muted leading-7">
            The calculator can be used for motorcycles, scooters and other
            two-wheelers. Enter the amount you plan to finance along with
            the applicable interest rate and repayment period.
          </p>

          <p className="text-muted leading-7 mt-3">
            Actual loan terms can vary depending on the lender, vehicle,
            borrower eligibility and other applicable conditions.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Factors That Affect Bike Loan EMI
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>Bike loan amount</li>
            <li>Interest rate</li>
            <li>Loan tenure</li>
            <li>Down payment</li>
            <li>Lender terms and conditions</li>
            <li>Processing fees and other applicable charges</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            How to Reduce Bike Loan Interest Cost
          </h2>

          <p className="text-muted leading-7">
            Choosing an appropriate loan amount and repayment period can help
            you manage the overall cost of financing a two-wheeler.
            Comparing interest rates and other loan charges can also help
            when evaluating different loan options.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted mt-4">
            <li>Compare interest rates from different lenders.</li>
            <li>Consider a suitable down payment.</li>
            <li>Choose a repayment tenure that fits your budget.</li>
            <li>Check processing fees and other applicable charges.</li>
            <li>Review prepayment and foreclosure conditions.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Bike Loan EMI Calculation Example
          </h2>

          <p className="text-muted leading-7">
            Suppose you take a bike loan of ₹1,00,000 at an annual interest
            rate of 11% for 36 months. The calculator can use these values to
            estimate the monthly EMI and total repayment amount.
          </p>

          <p className="text-muted leading-7 mt-3">
            The actual EMI offered by a lender may differ depending on the
            applicable interest rate, fees, loan structure and other terms.
          </p>
        </section>


        {/* =========================
            FAQ
        ========================== */}

        <section>
          <h2 className="text-2xl font-bold mb-5">
            Frequently Asked Questions About Bike Loan EMI
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="font-semibold">
                What is a bike loan EMI?
              </h3>

              <p className="text-muted leading-7 mt-1">
                A bike loan EMI is the regular instalment paid towards a
                two-wheeler loan. It generally includes both principal and
                interest components.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                How is bike loan EMI calculated?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Bike loan EMI is calculated using the loan amount, interest
                rate and repayment tenure. These values determine the
                estimated monthly instalment.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Does a higher down payment reduce bike loan EMI?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Generally, yes. A higher down payment reduces the amount
                borrowed, which can reduce the monthly EMI when other loan
                terms remain unchanged.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Does a longer bike loan tenure reduce EMI?
              </h3>

              <p className="text-muted leading-7 mt-1">
                A longer tenure generally reduces the monthly EMI by
                spreading repayment over more months, but it can increase the
                total interest paid.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Can I use this calculator for a scooter loan?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Yes. The calculator can be used for scooters, motorcycles and
                other two-wheelers by entering the applicable loan details.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Is the calculated EMI exact?
              </h3>

              <p className="text-muted leading-7 mt-1">
                The result is an estimate based on the values entered. Actual
                loan terms, interest rates, fees and lender-specific
                conditions can affect the final EMI.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                What is the difference between EMI and total repayment?
              </h3>

              <p className="text-muted leading-7 mt-1">
                EMI is the regular monthly payment, while total repayment is
                the combined amount paid through all instalments during the
                complete loan tenure.
              </p>
            </div>

          </div>
        </section>

      </article>
    </div>
  );
}