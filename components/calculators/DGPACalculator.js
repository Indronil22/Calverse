'use client';

import { useState } from 'react';
import { calcDGPA } from '@/lib/calc-functions';

export default function DGPACalculator() {
  const [years, setYears] = useState([
    { ygpa: '', credits: '' },
    { ygpa: '', credits: '' },
    { ygpa: '', credits: '' },
    { ygpa: '', credits: '' },
  ]);

  const dgpa = calcDGPA(years);

  function update(index, field, value) {
    const next = [...years];

    next[index] = {
      ...next[index],
      [field]: value,
    };

    setYears(next);
  }

  function addYear() {
    setYears([
      ...years,
      {
        ygpa: '',
        credits: '',
      },
    ]);
  }

  function removeYear(index) {
    if (years.length <= 1) return;

    setYears(
      years.filter((_, i) => i !== index)
    );
  }

  return (
    <div className="space-y-12">

      {/* =====================================================
          DGPA CALCULATOR
          ===================================================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUT SECTION */}

          <div className="space-y-3">

            {years.map((year, index) => (

              <div
                key={index}
                className="flex gap-2 items-center"
              >

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="input"
                  placeholder="YGPA"
                  aria-label={`Year ${index + 1} YGPA`}
                  value={year.ygpa}
                  onChange={(e) =>
                    update(
                      index,
                      'ygpa',
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="input"
                  placeholder="Credits"
                  aria-label={`Year ${index + 1} credits`}
                  value={year.credits}
                  onChange={(e) =>
                    update(
                      index,
                      'credits',
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    removeYear(index)
                  }
                  disabled={years.length <= 1}
                  className="text-muted-2 hover:text-red-400 disabled:opacity-30 px-2"
                  aria-label={`Remove year ${index + 1}`}
                >
                  ✕
                </button>

              </div>

            ))}

            <button
              type="button"
              onClick={addYear}
              className="text-brand-400 text-sm font-semibold"
            >
              + Add Year
            </button>

          </div>


          {/* RESULT SECTION */}

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center">

            <p className="text-xs text-muted">
              DGPA (Degree Grade Point Average)
            </p>

            <p className="text-3xl font-extrabold text-brand-400">
              {dgpa.toFixed(2)}
            </p>

          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          DGPA is the credit-weighted average of the YGPA
          values entered for the years of your degree.
          The exact method used by a university may vary
          depending on its academic regulations.
        </p>

      </div>


      {/* =====================================================
          DETAILED DGPA SEO CONTENT
          ===================================================== */}

      <article className="space-y-10">

        {/* INTRODUCTION */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            DGPA Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            This DGPA Calculator helps students estimate their
            Degree Grade Point Average using yearly grade-point
            results and the corresponding academic credits.
            Enter the YGPA and credits for each academic year
            to calculate a credit-weighted DGPA.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            DGPA is useful when a degree programme evaluates
            academic performance across multiple academic years
            and combines those yearly results into a final
            degree-level grade point.
          </p>

        </section>


        {/* WHAT IS DGPA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What is DGPA?
          </h2>

          <p className="text-muted leading-relaxed">
            DGPA stands for Degree Grade Point Average. It is a
            grade-point measure that can be used to represent a
            student's overall academic performance across a
            complete degree programme.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Unlike a result that represents only one academic
            period, DGPA is intended to combine academic
            performance over the relevant years of a degree.
            The calculation can take the academic credits of
            each year into account.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The terminology and calculation method can differ
            between universities. Students should therefore
            check their institution's official academic
            regulations when an official DGPA is required.
          </p>

        </section>


        {/* DGPA FORMULA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            DGPA Formula
          </h2>

          <p className="text-muted leading-relaxed">
            When yearly results are combined using the credits
            associated with each year, a credit-weighted DGPA
            can be calculated using the following formula:
          </p>

          <div className="card p-5 md:p-6 mt-5 overflow-x-auto">

            <p className="text-center font-mono text-base md:text-lg whitespace-nowrap">
              DGPA = Σ(YGPA × Year Credits) ÷ Σ Year Credits
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            This formula gives greater weight to an academic
            year with more credits. If all years carry the same
            number of credits, the result is equivalent to the
            simple average of the yearly YGPA values.
          </p>

        </section>


        {/* HOW DGPA IS CALCULATED */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How is DGPA calculated?
          </h2>

          <p className="text-muted leading-relaxed">
            To calculate DGPA using a credit-weighted method,
            first collect the YGPA and total academic credits
            for each year included in the degree calculation.
          </p>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed mt-5">

            <li>
              Record the YGPA for each academic year.
            </li>

            <li>
              Record the corresponding credits for each year.
            </li>

            <li>
              Multiply each year's YGPA by its credits.
            </li>

            <li>
              Add all the weighted yearly values.
            </li>

            <li>
              Add the credits from all years.
            </li>

            <li>
              Divide the total weighted value by the total
              credits.
            </li>

          </ol>

        </section>


        {/* EXAMPLE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            DGPA Calculation Example
          </h2>

          <p className="text-muted leading-relaxed">
            Consider a four-year degree in which each year has
            the following YGPA and credit values:
          </p>

          <div className="overflow-x-auto mt-5">

            <table className="w-full text-sm border-collapse">

              <thead>

                <tr className="border-b border-border">

                  <th className="text-left py-3 px-3">
                    Academic Year
                  </th>

                  <th className="text-left py-3 px-3">
                    YGPA
                  </th>

                  <th className="text-left py-3 px-3">
                    Credits
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-border">

                  <td className="py-3 px-3">
                    Year 1
                  </td>

                  <td className="py-3 px-3">
                    7.50
                  </td>

                  <td className="py-3 px-3">
                    20
                  </td>

                </tr>

                <tr className="border-b border-border">

                  <td className="py-3 px-3">
                    Year 2
                  </td>

                  <td className="py-3 px-3">
                    8.00
                  </td>

                  <td className="py-3 px-3">
                    22
                  </td>

                </tr>

                <tr className="border-b border-border">

                  <td className="py-3 px-3">
                    Year 3
                  </td>

                  <td className="py-3 px-3">
                    8.50
                  </td>

                  <td className="py-3 px-3">
                    24
                  </td>

                </tr>

                <tr>

                  <td className="py-3 px-3">
                    Year 4
                  </td>

                  <td className="py-3 px-3">
                    9.00
                  </td>

                  <td className="py-3 px-3">
                    26
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <div className="card p-5 mt-5">

            <p className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-line">
              Weighted Total =

              {'\n'}

              (7.50 × 20) + (8.00 × 22) +
              (8.50 × 24) + (9.00 × 26)

              {'\n\n'}

              = 150 + 176 + 204 + 234

              {'\n\n'}

              = 764

              {'\n\n'}

              Total Credits = 20 + 22 + 24 + 26

              {'\n\n'}

              = 92

              {'\n\n'}

              DGPA = 764 ÷ 92

              {'\n\n'}

              DGPA ≈ 8.30
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Therefore, the estimated credit-weighted DGPA in
            this example is approximately 8.30.
          </p>

        </section>


        {/* WHY CREDITS MATTER */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why do credits matter in DGPA calculation?
          </h2>

          <p className="text-muted leading-relaxed">
            Credits determine how much influence each academic
            year has on the final weighted result. If one year
            contains substantially more credits than another,
            its YGPA can have a larger effect on the calculated
            DGPA.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            This is why entering the correct credit values is
            important when using a credit-weighted DGPA
            calculation.
          </p>

        </section>


        {/* DIFFERENT CREDIT YEARS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What if different years have different credits?
          </h2>

          <p className="text-muted leading-relaxed">
            When academic years have different credit totals,
            simply taking the arithmetic average of their YGPA
            values may not produce the same result as a
            credit-weighted calculation.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, a year containing 30 credits should not
            necessarily have the same mathematical weight as a
            year containing 20 credits when the institution
            defines the final result using credit weighting.
          </p>

        </section>


        {/* EQUAL CREDITS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            DGPA when all years have equal credits
          </h2>

          <p className="text-muted leading-relaxed">
            If every academic year carries exactly the same
            number of credits, the credit values cancel out in
            the weighted-average calculation.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              DGPA = (YGPA₁ + YGPA₂ + YGPA₃ + ...)
              ÷ Number of Years
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            However, students should confirm that their
            institution actually uses equal weighting before
            applying this simplified method.
          </p>

        </section>


        {/* DGPA VS YGPA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            DGPA vs YGPA
          </h2>

          <p className="text-muted leading-relaxed">
            YGPA generally represents academic performance for
            an individual academic year, whereas DGPA is used
            to represent the combined degree-level performance
            across the relevant years.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            In a multi-year programme, the yearly results can
            be combined using the institution's prescribed
            method to determine the final degree-level result.
          </p>

        </section>


        {/* DGPA VS CGPA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            DGPA vs CGPA
          </h2>

          <p className="text-muted leading-relaxed">
            DGPA and CGPA can both describe cumulative academic
            performance, but the terminology and calculation
            method depend on the institution and academic
            programme.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            CGPA is commonly used for cumulative grade-point
            performance, while DGPA may specifically refer to
            the final degree-level grade point. Students should
            use the terminology and calculation method defined
            by their university.
          </p>

        </section>


        {/* HOW TO USE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to use the DGPA Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Enter the YGPA for the first academic year.
            </li>

            <li>
              Enter the credits associated with that year.
            </li>

            <li>
              Enter the YGPA and credits for the remaining
              academic years.
            </li>

            <li>
              Use <strong>+ Add Year</strong> if your degree
              contains additional years.
            </li>

            <li>
              Remove any unnecessary year using the remove
              button.
            </li>

            <li>
              Review the calculated DGPA displayed on the
              right side of the calculator.
            </li>

          </ol>

        </section>


        {/* COMMON MISTAKES */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Common DGPA Calculation Mistakes
          </h2>

          <div className="space-y-5">

            <div>

              <h3 className="font-semibold text-lg">
                Using the wrong credit values
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Incorrect credit information can change the
                weight assigned to an academic year's result.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Treating every year as equally weighted
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                If the years have different credit totals,
                taking a simple average may not match a
                credit-weighted DGPA.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Using an unofficial calculation method
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Universities can have their own rules for
                calculating final academic results. Always
                verify the official method before using the
                result for an academic application.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Entering rounded YGPA values
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                If your academic records provide more precise
                values, using excessively rounded numbers can
                produce a slightly different final result.
              </p>

            </div>

          </div>

        </section>


        {/* UNIVERSITY RULES */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Does every university calculate DGPA the same way?
          </h2>

          <p className="text-muted leading-relaxed">
            No. Universities and academic institutions may use
            different terminology, grading scales, credit
            structures, weighting methods and rounding rules.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The calculation provided by this tool should
            therefore be treated as an estimate based on the
            credit-weighted method represented by the inputs.
            For an official final degree result, follow your
            institution's academic regulations.
          </p>

        </section>


        {/* DGPA AND PERCENTAGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Can DGPA be converted to percentage?
          </h2>

          <p className="text-muted leading-relaxed">
            A DGPA-to-percentage conversion may be possible when
            an institution provides an official conversion
            formula. There is no universal formula that applies
            to every university.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Students should use the conversion rule specified
            by their university rather than assuming that a
            particular multiplier applies everywhere.
          </p>

        </section>


        {/* FINAL DEGREE RESULT */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why is DGPA important for final academic results?
          </h2>

          <p className="text-muted leading-relaxed">
            A degree-level grade-point result can provide a
            summary of academic performance across the duration
            of a programme. Depending on the institution, the
            final result may be used in academic records,
            applications or other situations where an overall
            degree performance is required.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The exact importance and classification of a DGPA
            depends on the rules of the relevant institution.
          </p>

        </section>


        {/* ACCURACY NOTE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Important note about DGPA calculations
          </h2>

          <p className="text-muted leading-relaxed">
            This calculator is designed as an educational and
            estimation tool. It uses the YGPA and credit values
            entered by the user and calculates a weighted result.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Your official DGPA may differ if your university
            uses another calculation method, includes additional
            components, applies special weighting or follows
            different rounding rules.
          </p>

        </section>


        {/* =====================================================
            FAQ
            ===================================================== */}

        <section>

          <h2 className="text-2xl font-bold mb-5">
            Frequently Asked Questions About DGPA
          </h2>

          <div className="space-y-6">

            <div>

              <h3 className="font-semibold text-lg">
                What does DGPA stand for?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                DGPA commonly stands for Degree Grade Point
                Average and can represent overall academic
                performance across a degree programme.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How is DGPA calculated?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                When a credit-weighted method is used, each
                year's YGPA is multiplied by its corresponding
                credits. The weighted values are then added and
                divided by the total credits.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Does DGPA use credits?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                A credit-weighted DGPA calculation uses the
                credits associated with the academic results.
                However, the official method can vary by
                institution.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What happens if every year has the same credits?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                When all years have equal credits, the
                credit-weighted calculation produces the same
                result as the arithmetic average of the yearly
                YGPA values.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Is DGPA the same as YGPA?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                No. YGPA generally represents performance for
                an academic year, while DGPA can represent the
                combined degree-level result.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Is DGPA the same as CGPA?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                The terminology can overlap depending on the
                institution, but DGPA may specifically refer to
                the final degree-level grade point. Always follow
                your university's terminology and calculation
                rules.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can DGPA be converted to percentage?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                It can be converted if your institution provides
                an applicable conversion formula. The formula is
                not universal.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I add more years to the DGPA Calculator?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. Use the Add Year button to add additional
                academic years and enter their YGPA and credit
                values.
              </p>

            </div>

          </div>

        </section>

      </article>

    </div>
  );
}