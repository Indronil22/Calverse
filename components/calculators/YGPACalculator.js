'use client';

import { useState } from 'react';
import { calcYGPA } from '@/lib/calc-functions';

export default function YGPACalculator() {
  const [semesters, setSemesters] = useState([
    { sgpa: '', credits: '' },
    { sgpa: '', credits: '' },
  ]);

  const ygpa = calcYGPA(semesters);

  function update(index, field, value) {
    const next = [...semesters];
    next[index] = { ...next[index], [field]: value };
    setSemesters(next);
  }

  function addSemester() {
    setSemesters([
      ...semesters,
      { sgpa: '', credits: '' },
    ]);
  }

  function removeSemester(index) {
    setSemesters(
      semesters.filter((_, i) => i !== index)
    );
  }

  return (
    <>
      {/* =========================
          YGPA CALCULATOR
          ========================= */}

      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-3">
            {semesters.map((s, i) => (
              <div
                key={i}
                className="flex gap-2 items-center"
              >
                <input
                  type="number"
                  className="input"
                  placeholder="SGPA"
                  step="0.01"
                  value={s.sgpa}
                  onChange={(e) =>
                    update(
                      i,
                      'sgpa',
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  className="input"
                  placeholder="Credits"
                  value={s.credits}
                  onChange={(e) =>
                    update(
                      i,
                      'credits',
                      e.target.value
                    )
                  }
                />

                <button
                  onClick={() => removeSemester(i)}
                  className="text-muted-2 hover:text-red-400 px-2"
                  aria-label="Remove semester"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={addSemester}
              className="text-brand-400 text-sm font-semibold"
            >
              + Add Semester
            </button>
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center">
            <p className="text-xs text-muted">
              YGPA (Year Grade Point Average)
            </p>

            <p className="text-3xl font-extrabold text-brand-400">
              {ygpa.toFixed(2)}
            </p>
          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          YGPA is the credit-weighted average of the SGPA
          values for the semesters included in the academic
          year. Calculation rules may vary between
          universities.
        </p>
      </div>


      {/* =========================
          SEO CONTENT
          ========================= */}

      <div className="mt-10 space-y-10">

        <section>
          <h2 className="text-2xl md:text-3xl font-bold">
            YGPA Calculator
          </h2>

          <p className="mt-3 text-muted leading-7">
            Use our free YGPA Calculator to calculate your
            Year Grade Point Average using your semester SGPA
            and credit values. Enter the SGPA and credits for
            each semester to calculate the credit-weighted
            YGPA for an academic year.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            What is YGPA?
          </h2>

          <p className="mt-3 text-muted leading-7">
            YGPA stands for Year Grade Point Average. It is
            used to represent a student's academic performance
            over an academic year.
          </p>

          <p className="mt-3 text-muted leading-7">
            When multiple semesters are included in an
            academic year, the SGPA of each semester can be
            combined using the relevant semester credits to
            calculate a weighted yearly grade point average.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            How is YGPA calculated?
          </h2>

          <p className="mt-3 text-muted leading-7">
            YGPA can be calculated by multiplying the SGPA of
            each semester by the corresponding semester
            credits, adding the results and dividing the total
            by the combined credits.
          </p>

          <div className="card p-5 mt-5">
            <p className="font-semibold">
              YGPA Formula
            </p>

            <p className="mt-3 text-brand-400 font-bold text-lg">
              YGPA = Σ(SGPA × Credits) ÷ Σ Credits
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Why are semester credits important in YGPA?
          </h2>

          <p className="mt-3 text-muted leading-7">
            Semester credits determine the weight given to
            each semester's SGPA when calculating the yearly
            average.
          </p>

          <p className="mt-3 text-muted leading-7">
            If two semesters have different credit totals,
            simply taking the arithmetic average of their
            SGPAs may not produce the correct credit-weighted
            YGPA.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            How to use the YGPA Calculator
          </h2>

          <ol className="mt-4 list-decimal pl-6 space-y-2 text-muted leading-7">
            <li>
              Enter the SGPA obtained in the first semester.
            </li>

            <li>
              Enter the corresponding semester credits.
            </li>

            <li>
              Enter the SGPA and credits for other semesters
              included in the academic year.
            </li>

            <li>
              Click <strong>Add Semester</strong> if you need
              to include another semester.
            </li>

            <li>
              Remove a semester if it is not required.
            </li>

            <li>
              Check the calculated YGPA displayed by the
              calculator.
            </li>
          </ol>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            YGPA Calculation Example
          </h2>

          <p className="mt-3 text-muted leading-7">
            Suppose a student has two semesters in an
            academic year. Each semester has an SGPA and a
            corresponding number of credits.
          </p>

          <p className="mt-3 text-muted leading-7">
            Multiply each semester's SGPA by its credits,
            add the resulting values and divide by the total
            credits.
          </p>

          <div className="card p-5 mt-5">
            <p className="font-semibold">
              Example Formula
            </p>

            <p className="mt-3 text-brand-400 font-bold">
              YGPA =
              (SGPA₁ × Credits₁ + SGPA₂ × Credits₂)
              ÷
              (Credits₁ + Credits₂)
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            YGPA vs SGPA
          </h2>

          <p className="mt-3 text-muted leading-7">
            SGPA generally represents academic performance
            for one semester, while YGPA represents the
            combined performance for an academic year.
          </p>

          <p className="mt-3 text-muted leading-7">
            For example, a student may have separate SGPAs
            for each semester and a YGPA representing the
            overall performance for that year.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            YGPA vs CGPA
          </h2>

          <p className="mt-3 text-muted leading-7">
            YGPA generally focuses on an academic year,
            whereas CGPA represents cumulative academic
            performance across multiple semesters or academic
            periods.
          </p>

          <p className="mt-3 text-muted leading-7">
            The exact definitions and calculation methods can
            vary between universities.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Can YGPA be calculated from SGPA?
          </h2>

          <p className="mt-3 text-muted leading-7">
            Yes. When the required semester SGPAs and their
            corresponding credits are available, a
            credit-weighted yearly grade point average can be
            calculated.
          </p>

          <p className="mt-3 text-muted leading-7">
            The exact calculation should follow the rules
            prescribed by the student's university or
            institution.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Can semesters have different credits?
          </h2>

          <p className="mt-3 text-muted leading-7">
            Yes. Different semesters may have different
            credit totals depending on the subjects and
            curriculum.
          </p>

          <p className="mt-3 text-muted leading-7">
            When credits differ, using a credit-weighted
            calculation can provide a more appropriate
            yearly average when that method is prescribed by
            the institution.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            What is a good YGPA?
          </h2>

          <p className="mt-3 text-muted leading-7">
            What qualifies as a good YGPA depends on the
            grading scale, university, programme and academic
            requirements.
          </p>

          <p className="mt-3 text-muted leading-7">
            Students should compare their result with the
            academic standards and eligibility requirements
            applicable to their institution.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            How to improve YGPA
          </h2>

          <p className="mt-3 text-muted leading-7">
            Improving YGPA generally requires maintaining
            consistent academic performance throughout the
            academic year.
          </p>

          <p className="mt-3 text-muted leading-7">
            Since YGPA can depend on the SGPA of multiple
            semesters, improving performance in each semester
            can contribute to a stronger yearly result.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Why use an online YGPA Calculator?
          </h2>

          <p className="mt-3 text-muted leading-7">
            Calculating a credit-weighted yearly average
            manually can be time-consuming, especially when
            several semesters are involved.
          </p>

          <p className="mt-3 text-muted leading-7">
            An online YGPA calculator simplifies the process
            by automatically applying the credit-weighted
            calculation and displaying the estimated result.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Important Note About YGPA Calculation
          </h2>

          <p className="mt-3 text-muted leading-7">
            Universities may use different terminology,
            grading systems, credit structures and calculation
            rules for yearly academic performance.
          </p>

          <p className="mt-3 text-muted leading-7">
            This calculator uses a credit-weighted average of
            the entered SGPA values. Always follow your
            institution's official calculation method for
            academic or official purposes.
          </p>
        </section>


        {/* =========================
            FAQ
            ========================= */}

        <section>
          <h2 className="text-2xl md:text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="font-bold">
                What is YGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                YGPA stands for Year Grade Point Average and
                generally represents academic performance over
                an academic year.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                How is YGPA calculated?
              </h3>

              <p className="mt-2 text-muted leading-7">
                A credit-weighted YGPA can be calculated by
                multiplying each semester's SGPA by its
                credits, adding the results and dividing by
                the total credits.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                What is the formula for YGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                YGPA = Σ(SGPA × Credits) ÷ Σ Credits.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Can I calculate YGPA online?
              </h3>

              <p className="mt-2 text-muted leading-7">
                Yes. Enter the SGPA and corresponding credits
                for each semester to calculate the estimated
                YGPA.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Does credit affect YGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                Yes. In a credit-weighted YGPA calculation,
                the credit value determines the weight of each
                semester.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                What is the difference between YGPA and SGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                SGPA generally represents one semester's
                performance, while YGPA represents performance
                across an academic year.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                What is the difference between YGPA and CGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                YGPA generally covers an academic year, while
                CGPA generally represents cumulative performance
                across multiple semesters or academic periods.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Can semesters have different credits?
              </h3>

              <p className="mt-2 text-muted leading-7">
                Yes. Different semesters can have different
                credit totals, and the credit-weighted formula
                accounts for those differences.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                What is a good YGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                A good YGPA depends on the grading scale,
                institution, programme and academic
                requirements.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Is this YGPA calculator accurate?
              </h3>

              <p className="mt-2 text-muted leading-7">
                It provides an estimate using the
                credit-weighted formula. For official academic
                purposes, verify the calculation method used by
                your institution.
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}