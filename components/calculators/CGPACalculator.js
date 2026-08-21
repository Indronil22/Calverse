'use client';

import { useState } from 'react';
import {
  calcCGPAFromGrades,
  calcCGPAToPercentage,
} from '@/lib/calc-functions';

export default function CGPACalculator() {
  const [subjects, setSubjects] = useState([
    { credits: '', gradePoint: '' },
    { credits: '', gradePoint: '' },
  ]);

  const cgpa = calcCGPAFromGrades(subjects);
  const percentage = calcCGPAToPercentage(cgpa);

  function updateSubject(index, field, value) {
    const next = [...subjects];

    next[index] = {
      ...next[index],
      [field]: value,
    };

    setSubjects(next);
  }

  function addSubject() {
    setSubjects([
      ...subjects,
      {
        credits: '',
        gradePoint: '',
      },
    ]);
  }

  function removeSubject(index) {
    if (subjects.length <= 1) return;

    setSubjects(
      subjects.filter((_, i) => i !== index)
    );
  }

  return (
    <div className="space-y-12">

      {/* =====================================================
          CGPA CALCULATOR
          ===================================================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUT SECTION */}

          <div className="space-y-3">

            {subjects.map((subject, index) => (

              <div
                key={index}
                className="flex gap-2 items-center"
              >

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="input"
                  placeholder="Credits"
                  aria-label={`Subject ${index + 1} credits`}
                  value={subject.credits}
                  onChange={(e) =>
                    updateSubject(
                      index,
                      'credits',
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="input"
                  placeholder="Grade Point"
                  aria-label={`Subject ${index + 1} grade point`}
                  value={subject.gradePoint}
                  onChange={(e) =>
                    updateSubject(
                      index,
                      'gradePoint',
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    removeSubject(index)
                  }
                  disabled={subjects.length <= 1}
                  className="text-muted-2 hover:text-red-400 disabled:opacity-30 px-2"
                  aria-label={`Remove subject ${index + 1}`}
                >
                  ✕
                </button>

              </div>

            ))}

            <button
              type="button"
              onClick={addSubject}
              className="text-brand-400 text-sm font-semibold"
            >
              + Add Subject
            </button>

          </div>


          {/* RESULT SECTION */}

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <div>

              <p className="text-xs text-muted">
                CGPA
              </p>

              <p className="text-3xl font-extrabold text-brand-400">
                {cgpa.toFixed(2)}
              </p>

            </div>


            <div>

              <p className="text-xs text-muted">
                Equivalent Percentage
              </p>

              <p className="text-2xl font-bold">
                {percentage.toFixed(2)}%
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          DETAILED CGPA SEO CONTENT
          ===================================================== */}

      <article className="space-y-10">

        {/* INTRODUCTION */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            CGPA Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            This free CGPA Calculator helps students calculate
            their Cumulative Grade Point Average using subject-wise
            credits and grade points. Enter the credit value and
            grade point for each subject to calculate a
            credit-weighted CGPA instantly.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The calculator also displays an estimated percentage
            equivalent. Since universities and colleges may use
            different percentage-conversion rules, students should
            always check the official conversion formula prescribed
            by their institution.
          </p>

        </section>


        {/* WHAT IS CGPA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What is CGPA?
          </h2>

          <p className="text-muted leading-relaxed">
            CGPA stands for Cumulative Grade Point Average. It is
            a grade-point-based measure used to represent a
            student's overall academic performance.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            In a credit-based academic system, the grade point
            earned in each subject is considered together with
            the number of credits assigned to that subject.
            Therefore, a subject with more credits can have a
            greater effect on the final CGPA than a subject with
            fewer credits.
          </p>

        </section>


        {/* HOW CGPA IS CALCULATED */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How is CGPA calculated?
          </h2>

          <p className="text-muted leading-relaxed">
            A commonly used credit-weighted CGPA calculation is
            based on multiplying each subject's credits by its
            grade point and dividing the total weighted grade
            points by the total number of credits.
          </p>

          <div className="card p-5 md:p-6 mt-5 overflow-x-auto">

            <p className="text-center font-mono text-base md:text-lg whitespace-pre-line">
              CGPA = Σ (Credit × Grade Point) ÷ Σ Credits
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The exact calculation method can vary between
            universities and examination systems. If your
            institution provides a specific CGPA calculation
            method, that official method should be followed.
          </p>

        </section>


        {/* EXAMPLE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            CGPA calculation example
          </h2>

          <p className="text-muted leading-relaxed">
            Suppose a student has three subjects with the
            following credits and grade points:
          </p>

          <div className="overflow-x-auto mt-5">

            <table className="w-full text-sm border-collapse">

              <thead>

                <tr className="border-b border-border">

                  <th className="text-left py-3 px-3">
                    Subject
                  </th>

                  <th className="text-left py-3 px-3">
                    Credits
                  </th>

                  <th className="text-left py-3 px-3">
                    Grade Point
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-border">

                  <td className="py-3 px-3">
                    Subject 1
                  </td>

                  <td className="py-3 px-3">
                    4
                  </td>

                  <td className="py-3 px-3">
                    8
                  </td>

                </tr>

                <tr className="border-b border-border">

                  <td className="py-3 px-3">
                    Subject 2
                  </td>

                  <td className="py-3 px-3">
                    3
                  </td>

                  <td className="py-3 px-3">
                    7
                  </td>

                </tr>

                <tr>

                  <td className="py-3 px-3">
                    Subject 3
                  </td>

                  <td className="py-3 px-3">
                    3
                  </td>

                  <td className="py-3 px-3">
                    9
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <div className="card p-5 mt-5">

            <p className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-line">
              Weighted Grade Points = (4 × 8) + (3 × 7) + (3 × 9)

              {'\n\n'}

              Weighted Grade Points = 32 + 21 + 27

              {'\n\n'}

              Weighted Grade Points = 80

              {'\n\n'}

              Total Credits = 4 + 3 + 3 = 10

              {'\n\n'}

              CGPA = 80 ÷ 10

              {'\n\n'}

              CGPA = 8.00
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Therefore, the student's calculated CGPA in this
            example is 8.00.
          </p>

        </section>


        {/* HOW TO USE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to use the CGPA Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Enter the credit value for the first subject.
            </li>

            <li>
              Enter the grade point earned in that subject.
            </li>

            <li>
              Click <strong>Add Subject</strong> to add more
              subjects.
            </li>

            <li>
              Enter the credits and grade points for all
              applicable subjects.
            </li>

            <li>
              The calculator automatically calculates the
              credit-weighted CGPA.
            </li>

            <li>
              The estimated percentage equivalent is displayed
              alongside the CGPA.
            </li>

          </ol>

        </section>


        {/* IMPORTANCE OF CREDITS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why are credits important when calculating CGPA?
          </h2>

          <p className="text-muted leading-relaxed">
            Credits determine the weight of a subject in a
            credit-based CGPA calculation. A higher-credit
            subject contributes more to the weighted grade-point
            total.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if one subject carries four credits and
            another carries two credits, the grade point of the
            four-credit subject generally has twice the weight
            of the two-credit subject in the calculation.
          </p>

        </section>


        {/* CGPA WITHOUT CREDITS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Can CGPA be calculated without credits?
          </h2>

          <p className="text-muted leading-relaxed">
            A simple average of grade points can be calculated
            without credits, but it may not represent the
            official CGPA when an institution uses a
            credit-weighted grading system.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            If your university uses subject credits, entering
            the correct credit values is important for obtaining
            a meaningful CGPA calculation.
          </p>

        </section>


        {/* CGPA FROM MARKS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Can CGPA be calculated from marks?
          </h2>

          <p className="text-muted leading-relaxed">
            CGPA cannot always be calculated directly from marks.
            Marks generally need to be converted into grades or
            grade points according to the grading system used by
            the institution.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            If your university provides a marks-to-grade-point
            conversion table, use that official conversion before
            entering the grade points into this calculator.
          </p>

        </section>


        {/* CGPA TO PERCENTAGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to convert CGPA to percentage?
          </h2>

          <p className="text-muted leading-relaxed">
            CGPA-to-percentage conversion depends on the
            institution. There is no single conversion formula
            that applies universally to every university.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Some institutions may use a formula such as:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              Percentage = CGPA × 10
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            However, another institution may prescribe a
            different multiplier or conversion formula.
            Therefore, always use the official formula applicable
            to your academic programme.
          </p>

        </section>


        {/* CGPA VS PERCENTAGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Is CGPA the same as percentage?
          </h2>

          <p className="text-muted leading-relaxed">
            No. CGPA and percentage are different ways of
            representing academic performance.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            CGPA is generally represented as a grade point on a
            particular grading scale, while percentage represents
            marks as a value out of 100.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            A CGPA should therefore not be converted into a
            percentage using a random formula. The conversion
            specified by the relevant university or institution
            should be used.
          </p>

        </section>


        {/* GOOD CGPA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What is a good CGPA?
          </h2>

          <p className="text-muted leading-relaxed">
            What counts as a good CGPA depends on the grading
            scale, university, course and purpose for which the
            result is being evaluated.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            On a commonly used 10-point scale, a CGPA around 8
            or above is generally considered a strong academic
            result, while a CGPA around 9 or above is often
            regarded as excellent. However, these are general
            interpretations rather than official classifications.
          </p>

        </section>


        {/* IMPROVING CGPA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How can students improve their CGPA?
          </h2>

          <p className="text-muted leading-relaxed">
            Students looking to improve their CGPA should pay
            particular attention to subjects carrying more
            credits because improvements in high-credit subjects
            can have a greater effect on a credit-weighted
            cumulative result.
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed mt-4">

            <li>
              Focus on subjects with higher credit values.
            </li>

            <li>
              Maintain consistent performance across semesters.
            </li>

            <li>
              Identify subjects where improvement is possible.
            </li>

            <li>
              Understand your university's grading system.
            </li>

            <li>
              Check official rules regarding improvement or
              supplementary examinations.
            </li>

          </ul>

        </section>


        {/* ACCURACY NOTE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Important note about CGPA calculation
          </h2>

          <p className="text-muted leading-relaxed">
            This calculator is intended as an educational and
            estimation tool. Different universities may use
            different grading scales, credit structures,
            rounding rules and CGPA calculation methods.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For official academic records, admission applications,
            examinations or employment purposes, always compare
            the result with the calculation method prescribed by
            your institution.
          </p>

        </section>


        {/* =====================================================
            FAQ
            ===================================================== */}

        <section>

          <h2 className="text-2xl font-bold mb-5">
            Frequently Asked Questions About CGPA
          </h2>

          <div className="space-y-6">

            <div>

              <h3 className="font-semibold text-lg">
                What does CGPA stand for?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                CGPA stands for Cumulative Grade Point Average.
                It is used to represent cumulative academic
                performance using grade points.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How do I calculate CGPA?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                When a credit-weighted system is used, multiply
                each subject's credits by its grade point, add
                those values together, and divide the result by
                the total number of credits.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Does a high-credit subject affect CGPA more?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. In a credit-weighted CGPA system, a
                high-credit subject has greater influence on the
                final CGPA.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I calculate CGPA using marks?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Marks normally need to be converted into grade
                points according to the institution's grading
                system before they can be used in a grade-point
                based CGPA calculation.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can CGPA be converted to percentage?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes, but the correct conversion formula depends
                on the university or institution.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Is 8 CGPA good?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                On a 10-point scale, 8 CGPA is generally viewed
                as a strong academic result, although the exact
                interpretation depends on the institution and
                purpose.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Is CGPA calculated by adding all grade points?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Not necessarily. In a credit-weighted system,
                grade points are multiplied by their respective
                credits before the weighted average is calculated.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Does every university calculate CGPA the same way?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                No. Universities can have different grading
                scales, credit structures, conversion formulas
                and rounding rules.
              </p>

            </div>

          </div>

        </section>

      </article>

    </div>
  );
}