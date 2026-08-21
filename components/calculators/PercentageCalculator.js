'use client';

import { useState } from 'react';

export default function PercentageCalculator() {
  const [value, setValue] = useState(50);
  const [total, setTotal] = useState(200);

  const [oldVal, setOldVal] = useState(100);
  const [newVal, setNewVal] = useState(150);

  const percentOf = total
    ? (Number(value) / Number(total)) * 100
    : 0;

  const change = oldVal
    ? ((Number(newVal) - Number(oldVal)) / Number(oldVal)) * 100
    : 0;

  return (
    <div className="space-y-10">

      {/* =====================================================
          CALCULATOR
          ===================================================== */}

      <div className="space-y-6">

        {/* What % is X of Y? */}

        <div className="card p-6 md:p-8">

          <h3 className="font-semibold mb-4">
            What % is X of Y?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-4">

              <Field
                label="Value (X)"
                value={value}
                onChange={setValue}
              />

              <Field
                label="Total (Y)"
                value={total}
                onChange={setTotal}
              />

            </div>

            <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">

              <div className="text-center">

                <p className="text-xs text-muted mb-1">
                  Percentage
                </p>

                <p className="text-3xl font-extrabold text-brand-400">
                  {percentOf.toFixed(2)}%
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Percentage Change */}

        <div className="card p-6 md:p-8">

          <h3 className="font-semibold mb-4">
            Percentage Change
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-4">

              <Field
                label="Old Value"
                value={oldVal}
                onChange={setOldVal}
              />

              <Field
                label="New Value"
                value={newVal}
                onChange={setNewVal}
              />

            </div>

            <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">

              <div className="text-center">

                <p className="text-xs text-muted mb-1">
                  Percentage Change
                </p>

                <p
                  className={`text-3xl font-extrabold ${
                    change >= 0
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {change >= 0 ? '+' : ''}
                  {change.toFixed(2)}%
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          DETAILED SEO CONTENT
          ===================================================== */}

      <article className="space-y-10">

        {/* Introduction */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Percentage Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            A percentage calculator is a useful tool for finding
            percentages quickly without performing the calculation
            manually. It can calculate what percentage one value
            represents of another value and can also calculate the
            percentage change between two values.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Percentages are used in many everyday calculations,
            including examination marks, discounts, price changes,
            salary changes, statistics, business calculations and
            comparisons between different values.
          </p>

        </section>


        {/* What is Percentage */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What is a Percentage?
          </h2>

          <p className="text-muted leading-relaxed">
            A percentage represents a number as a part of 100.
            The word percentage means "per hundred". The symbol
            used to represent a percentage is %.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, 25% means 25 parts out of 100, while
            75% means 75 parts out of 100. Percentages make it
            easier to compare quantities when they are expressed
            using the same base of 100.
          </p>

        </section>


        {/* Basic Formula */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Percentage Formula
          </h2>

          <p className="text-muted leading-relaxed">
            The basic formula for calculating what percentage a
            value represents of a total is:
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono text-lg">
              Percentage = (Value ÷ Total) × 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The value is the number being compared, while the
            total is the reference or maximum amount.
          </p>

        </section>


        {/* What percentage is X of Y */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Calculate What Percentage X is of Y
          </h2>

          <p className="text-muted leading-relaxed">
            To find what percentage X is of Y, divide X by Y and
            multiply the result by 100.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              Percentage = (X ÷ Y) × 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            For example, if a student obtains 45 marks out of
            60 marks:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              (45 ÷ 60) × 100 = 75%
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Therefore, 45 is 75% of 60.
          </p>

        </section>


        {/* Marks Percentage */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Percentage of Marks
          </h2>

          <p className="text-muted leading-relaxed">
            To calculate examination marks as a percentage, divide
            the total marks obtained by the maximum marks and
            multiply the result by 100.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              Marks Percentage =
              (Marks Obtained ÷ Maximum Marks) × 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            For example, if a student scores 425 marks out of
            500:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              (425 ÷ 500) × 100 = 85%
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The student's percentage is therefore 85%.
          </p>

        </section>


        {/* Find X percent of Y */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Find X% of a Number
          </h2>

          <p className="text-muted leading-relaxed">
            To calculate a specific percentage of a number, divide
            the percentage by 100 and multiply it by the number.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              X% of Y = (X ÷ 100) × Y
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            For example, to calculate 20% of 500:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              (20 ÷ 100) × 500 = 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Therefore, 20% of 500 is 100.
          </p>

        </section>


        {/* Percentage Increase */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Percentage Increase
          </h2>

          <p className="text-muted leading-relaxed">
            Percentage increase shows how much a value has
            increased compared with its original value.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              Percentage Increase =
              ((New Value − Old Value) ÷ Old Value) × 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            For example, if a price increases from ₹100 to ₹150:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              ((150 − 100) ÷ 100) × 100 = 50%
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The value has increased by 50%.
          </p>

        </section>


        {/* Percentage Decrease */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Percentage Decrease
          </h2>

          <p className="text-muted leading-relaxed">
            Percentage decrease shows how much a value has fallen
            compared with its original value.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              Percentage Decrease =
              ((Old Value − New Value) ÷ Old Value) × 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            For example, if a price decreases from ₹200 to ₹150:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              ((200 − 150) ÷ 200) × 100 = 25%
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The value has decreased by 25%.
          </p>

        </section>


        {/* Percentage Change */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Percentage Change Formula
          </h2>

          <p className="text-muted leading-relaxed">
            Percentage change compares an old value with a new
            value. It can show either an increase or a decrease.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              Percentage Change =
              ((New Value − Old Value) ÷ Old Value) × 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            A positive result represents an increase, while a
            negative result represents a decrease.
          </p>

        </section>


        {/* Reverse Percentage */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Find the Original Number from a Percentage
          </h2>

          <p className="text-muted leading-relaxed">
            Sometimes you know the percentage and the resulting
            value but need to find the original number.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              Original Value =
              Percentage Value ÷ (Percentage ÷ 100)
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            For example, if 40 represents 20% of an unknown
            number:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              40 ÷ 0.20 = 200
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Therefore, the original number is 200.
          </p>

        </section>


        {/* Discount */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Percentage Calculator for Discounts
          </h2>

          <p className="text-muted leading-relaxed">
            Percentages are frequently used to calculate discounts
            on products and services.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, suppose an item costs ₹2,000 and has a
            10% discount.
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              Discount = (10 ÷ 100) × 2000
            </p>

            <p className="text-center font-mono mt-2">
              Discount = ₹200
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The final price after the discount would be ₹1,800.
          </p>

        </section>


        {/* Salary Percentage */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Percentage Increase in Salary
          </h2>

          <p className="text-muted leading-relaxed">
            Percentage calculations can also be used to determine
            salary increments.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if a salary increases from ₹40,000 to
            ₹45,000 per month:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              ((45,000 − 40,000) ÷ 40,000) × 100
            </p>

            <p className="text-center font-mono mt-2">
              = 12.5%
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The salary increase is 12.5%.
          </p>

        </section>


        {/* Percentage vs Percentage Points */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Percentage vs Percentage Points
          </h2>

          <p className="text-muted leading-relaxed">
            Percentage and percentage points are not always the
            same thing. Percentage points describe the absolute
            difference between two percentages, while percentage
            change describes the relative change from the original
            value.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if a rate changes from 20% to 25%, the
            difference is 5 percentage points. The relative
            percentage increase is:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              ((25 − 20) ÷ 20) × 100 = 25%
            </p>

          </div>

        </section>


        {/* Everyday Uses */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Common Uses of Percentage Calculations
          </h2>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Calculating examination and academic marks.
            </li>

            <li>
              Finding discounts during shopping.
            </li>

            <li>
              Comparing price increases and decreases.
            </li>

            <li>
              Calculating salary increments.
            </li>

            <li>
              Comparing business or financial values.
            </li>

            <li>
              Understanding statistics and survey results.
            </li>

            <li>
              Calculating profit and loss percentages.
            </li>

            <li>
              Comparing changes between two numerical values.
            </li>

          </ul>

        </section>


        {/* How to use calculator */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Use This Percentage Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Enter the value in the <strong>Value (X)</strong>
              field.
            </li>

            <li>
              Enter the reference amount in the
              <strong> Total (Y)</strong> field.
            </li>

            <li>
              The calculator automatically displays what
              percentage X represents of Y.
            </li>

            <li>
              For percentage change, enter the original value in
              <strong> Old Value</strong>.
            </li>

            <li>
              Enter the latest value in
              <strong> New Value</strong>.
            </li>

            <li>
              The calculator displays the percentage increase or
              decrease automatically.
            </li>

          </ol>

        </section>


        {/* Common Mistakes */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Common Percentage Calculation Mistakes
          </h2>

          <div className="space-y-5">

            <div>

              <h3 className="font-semibold text-lg">
                Using the wrong total
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                The total or reference value determines the base
                of the percentage calculation. Using an incorrect
                reference value can produce a completely different
                result.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Forgetting to multiply by 100
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Dividing one value by another produces a decimal
                ratio. Multiplying by 100 converts that ratio into
                a percentage.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Confusing percentage with percentage points
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                A change from one percentage to another can be
                expressed in percentage points or as a relative
                percentage change. These are different calculations.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Rounding too early
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Rounding intermediate values can slightly affect
                the final result. For accurate calculations, keep
                additional decimal places until the final step.
              </p>

            </div>

          </div>

        </section>


        {/* FAQ */}

        <section>

          <h2 className="text-2xl font-bold mb-5">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>

              <h3 className="font-semibold text-lg">
                What is the basic formula for percentage?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                The basic formula is (Value ÷ Total) × 100.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How do I calculate 20% of a number?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Multiply the number by 20 and divide the result
                by 100. For example, 20% of 500 is 100.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How do I calculate percentage increase?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Subtract the old value from the new value, divide
                the difference by the old value and multiply by
                100.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How do I calculate percentage decrease?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Subtract the new value from the old value, divide
                by the old value and multiply by 100.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can percentage be more than 100%?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. A percentage can be greater than 100% when
                the value being compared is greater than the
                reference value.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How do I calculate exam marks percentage?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Divide the marks obtained by the maximum marks
                and multiply by 100.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What is the difference between percentage change
                and percentage of a total?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Percentage of a total compares one value with a
                total, while percentage change compares an old
                value with a new value.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What is 50% of a number?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                50% is equal to one-half, so 50% of any number is
                half of that number.
              </p>

            </div>

          </div>

        </section>

      </article>

    </div>
  );
}


/* ============================================================
   FIELD COMPONENT
   ============================================================ */

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