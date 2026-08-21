'use client';

import { useState } from 'react';
import { calcCGPAFromGrades } from '@/lib/calc-functions';

export default function SGPACalculator() {
  const [subjects, setSubjects] = useState([
    { credits: '', gradePoint: '' },
    { credits: '', gradePoint: '' },
    { credits: '', gradePoint: '' },
  ]);

  const sgpa = calcCGPAFromGrades(subjects);

  function updateSubject(index, field, value) {
    const next = [...subjects];
    next[index] = { ...next[index], [field]: value };
    setSubjects(next);
  }

  function addSubject() {
    setSubjects([...subjects, { credits: '', gradePoint: '' }]);
  }

  function removeSubject(index) {
    setSubjects(subjects.filter((_, i) => i !== index));
  }

  return (
    <>
      {/* =========================
          SGPA CALCULATOR
          ========================= */}

      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-3">
            {subjects.map((s, i) => (
              <div
                key={i}
                className="flex gap-2 items-center"
              >
                <input
                  type="number"
                  className="input"
                  placeholder="Credits"
                  value={s.credits}
                  onChange={(e) =>
                    updateSubject(
                      i,
                      'credits',
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  className="input"
                  placeholder="Grade Point"
                  value={s.gradePoint}
                  onChange={(e) =>
                    updateSubject(
                      i,
                      'gradePoint',
                      e.target.value
                    )
                  }
                />

                <button
                  onClick={() => removeSubject(i)}
                  className="text-muted-2 hover:text-red-400 px-2"
                  aria-label="Remove subject"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={addSubject}
              className="text-brand-400 text-sm font-semibold"
            >
              + Add Subject
            </button>
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">
            <div>
              <p className="text-xs text-muted">
                SGPA (this semester)
              </p>

              <p className="text-3xl font-extrabold text-brand-400">
                {sgpa.toFixed(2)}
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* =========================
          SEO CONTENT
          ========================= */}

      <div className="mt-10 space-y-10">

        <section>
          <h2 className="text-2xl md:text-3xl font-bold">
            SGPA Calculator
          </h2>

          <p className="mt-3 text-muted leading-7">
            Use our free SGPA Calculator to calculate your
            Semester Grade Point Average using subject-wise
            credits and grade points. Enter the credit value
            and grade point for each subject to quickly
            calculate your SGPA for the semester.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            What is SGPA?
          </h2>

          <p className="mt-3 text-muted leading-7">
            SGPA stands for Semester Grade Point Average.
            It represents a student's academic performance
            during a particular semester.
          </p>

          <p className="mt-3 text-muted leading-7">
            SGPA is generally calculated using the grade
            points obtained in individual subjects along with
            their corresponding credit values.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            How is SGPA calculated?
          </h2>

          <p className="mt-3 text-muted leading-7">
            SGPA is generally calculated using a
            credit-weighted average of the grade points
            earned in all subjects during a semester.
          </p>

          <p className="mt-3 text-muted leading-7">
            Each subject's grade point is multiplied by its
            credit value. The resulting values are added
            together and divided by the total number of
            credits for the semester.
          </p>

          <div className="card p-5 mt-5">
            <p className="font-semibold">
              SGPA Formula
            </p>

            <p className="mt-3 text-brand-400 font-bold text-lg">
              SGPA = Σ(Credit × Grade Point) ÷ Σ Credits
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Why are credits important in SGPA calculation?
          </h2>

          <p className="mt-3 text-muted leading-7">
            Credits determine the weight of each subject in
            the SGPA calculation.
          </p>

          <p className="mt-3 text-muted leading-7">
            A subject carrying more credits can have a
            greater effect on the final SGPA than a subject
            carrying fewer credits.
          </p>

          <p className="mt-3 text-muted leading-7">
            Therefore, SGPA should generally be calculated
            using a credit-weighted formula rather than
            simply averaging all grade points.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            How to use the SGPA Calculator
          </h2>

          <ol className="mt-4 list-decimal pl-6 space-y-2 text-muted leading-7">
            <li>
              Enter the credit value for each subject.
            </li>

            <li>
              Enter the grade point obtained in each subject.
            </li>

            <li>
              Click <strong>Add Subject</strong> to add more
              subjects.
            </li>

            <li>
              Remove a subject if it is not required.
            </li>

            <li>
              Review the calculated SGPA displayed on the
              right side.
            </li>
          </ol>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            SGPA Calculation Example
          </h2>

          <p className="mt-3 text-muted leading-7">
            Suppose a semester has three subjects with
            different credit values and grade points.
            Multiply each subject's grade point by its
            corresponding credits.
          </p>

          <p className="mt-3 text-muted leading-7">
            Add all the credit-weighted grade points and
            divide the result by the total number of credits
            taken during the semester.
          </p>

          <div className="card p-5 mt-5">
            <p className="font-semibold">
              Example Formula
            </p>

            <p className="mt-3 text-brand-400 font-bold">
              SGPA =
              (C₁ × G₁ + C₂ × G₂ + C₃ × G₃)
              ÷
              (C₁ + C₂ + C₃)
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            How to calculate SGPA manually
          </h2>

          <p className="mt-3 text-muted leading-7">
            To calculate SGPA manually, list every subject
            along with its credit value and grade point.
          </p>

          <p className="mt-3 text-muted leading-7">
            Multiply the grade point of each subject by its
            credits. Add all the resulting values and divide
            the total by the sum of all subject credits.
          </p>

          <div className="card p-5 mt-5">
            <p className="text-brand-400 font-bold">
              SGPA =
              Total Credit-Weighted Grade Points
              ÷
              Total Semester Credits
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            SGPA vs CGPA
          </h2>

          <p className="mt-3 text-muted leading-7">
            SGPA generally represents academic performance
            for one semester, while CGPA represents
            cumulative academic performance across multiple
            semesters or academic periods.
          </p>

          <p className="mt-3 text-muted leading-7">
            A student can therefore have a separate SGPA for
            every semester and one cumulative CGPA covering
            several semesters.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            SGPA vs GPA
          </h2>

          <p className="mt-3 text-muted leading-7">
            SGPA specifically refers to the grade point
            average for a particular semester, while GPA is
            a broader term that can refer to grade point
            average over a particular academic period.
          </p>

          <p className="mt-3 text-muted leading-7">
            The exact terminology and calculation method can
            vary between educational institutions.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Can SGPA be converted to percentage?
          </h2>

          <p className="mt-3 text-muted leading-7">
            SGPA can sometimes be converted into an
            equivalent percentage, but the conversion formula
            depends on the university or educational
            institution.
          </p>

          <p className="mt-3 text-muted leading-7">
            There is no universal SGPA-to-percentage formula
            that applies to every grading system.
          </p>

          <p className="mt-3 text-muted leading-7">
            Always use the official conversion formula
            prescribed by your university when an exact
            percentage is required.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            What is a good SGPA?
          </h2>

          <p className="mt-3 text-muted leading-7">
            A good SGPA depends on the grading scale,
            university, course and academic requirements.
          </p>

          <p className="mt-3 text-muted leading-7">
            Students should compare their SGPA with the
            grading standards and eligibility criteria
            applicable to their institution.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            How to improve SGPA
          </h2>

          <p className="mt-3 text-muted leading-7">
            Improving SGPA generally requires consistent
            performance across all subjects in a semester.
          </p>

          <p className="mt-3 text-muted leading-7">
            Subjects with higher credit values may have a
            greater impact on the final SGPA, so
            understanding the credit structure can help
            students prioritize their academic preparation.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Can subjects have different credits in SGPA
            calculation?
          </h2>

          <p className="mt-3 text-muted leading-7">
            Yes. The credit-weighted SGPA formula accounts
            for subjects with different credit values.
          </p>

          <p className="mt-3 text-muted leading-7">
            Each subject contributes to the final SGPA
            according to its grade point and assigned credits.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Why use an online SGPA Calculator?
          </h2>

          <p className="mt-3 text-muted leading-7">
            Calculating SGPA manually can be time-consuming
            when a semester contains many subjects with
            different credits.
          </p>

          <p className="mt-3 text-muted leading-7">
            An online SGPA calculator performs the
            credit-weighted calculation automatically and
            provides a quick estimate of the semester grade
            point average.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold">
            Important Note About SGPA Calculation
          </h2>

          <p className="mt-3 text-muted leading-7">
            Different universities and institutions may use
            different grading scales, credit structures and
            calculation rules.
          </p>

          <p className="mt-3 text-muted leading-7">
            This calculator uses the standard credit-weighted
            SGPA formula described above. For official
            academic records, always follow the calculation
            method specified by your institution.
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
                What is SGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                SGPA stands for Semester Grade Point Average
                and represents academic performance during a
                particular semester.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                How is SGPA calculated?
              </h3>

              <p className="mt-2 text-muted leading-7">
                SGPA is generally calculated by multiplying
                each subject grade point by its credits,
                adding the results and dividing by the total
                semester credits.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                What is the formula for SGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                SGPA = Σ(Credit × Grade Point) ÷ Σ Credits.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Can I calculate SGPA online?
              </h3>

              <p className="mt-2 text-muted leading-7">
                Yes. Enter the credits and grade points for
                your semester subjects into the SGPA calculator
                to estimate your SGPA.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Do credits affect SGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                Yes. Credits determine the weight of each
                subject in a credit-weighted SGPA calculation.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                What is the difference between SGPA and CGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                SGPA generally represents performance for one
                semester, while CGPA represents cumulative
                performance across multiple semesters.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Can SGPA be converted to percentage?
              </h3>

              <p className="mt-2 text-muted leading-7">
                Yes, if your university provides an official
                SGPA or grade-point-to-percentage conversion
                formula.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                What is a good SGPA?
              </h3>

              <p className="mt-2 text-muted leading-7">
                A good SGPA depends on the grading scale,
                institution, course and academic requirements.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Can subjects have different credits in SGPA
                calculation?
              </h3>

              <p className="mt-2 text-muted leading-7">
                Yes. The credit-weighted formula accounts for
                subjects with different credit values.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Is this SGPA calculator accurate?
              </h3>

              <p className="mt-2 text-muted leading-7">
                It provides an estimate using the
                credit-weighted SGPA formula. For official
                purposes, verify the calculation method used
                by your institution.
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}