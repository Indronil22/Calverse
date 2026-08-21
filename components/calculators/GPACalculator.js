'use client';

import { useState } from 'react';
import { calcGPA4Scale } from '@/lib/calc-functions';

export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
    { credits: 3, gradePoint: 4.0 },
    { credits: 3, gradePoint: 3.7 },
    { credits: 4, gradePoint: 3.3 },
  ]);

  const gpa = calcGPA4Scale(subjects);

  function updateSubject(index, field, value) {
    const next = [...subjects];
    next[index] = { ...next[index], [field]: value };
    setSubjects(next);
  }

  function addSubject() {
    setSubjects([
      ...subjects,
      { credits: 3, gradePoint: 3.0 },
    ]);
  }

  function removeSubject(index) {
    setSubjects(
      subjects.filter((_, i) => i !== index)
    );
  }

  return (
    <div className="space-y-10">

      {/* =====================================================
          GPA CALCULATOR
          ===================================================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUT SECTION */}

          <div className="space-y-3">

            {subjects.map((s, i) => (
              <div
                key={i}
                className="flex gap-2 items-center"
              >

                <input
                  type="number"
                  min="0"
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
                  min="0"
                  max="4"
                  step="0.1"
                  className="input"
                  placeholder="Grade Point (0-4)"
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
                  type="button"
                  onClick={() => removeSubject(i)}
                  className="text-muted-2 hover:text-red-400 px-2"
                  aria-label="Remove subject"
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

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">

            <div className="text-center">

              <p className="text-xs text-muted">
                GPA (4.0 Scale)
              </p>

              <p className="text-3xl font-extrabold text-brand-400">
                {gpa.toFixed(2)}
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          DETAILED SEO CONTENT
          ===================================================== */}

      <article className="space-y-10">


        {/* INTRODUCTION */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            GPA Calculator on a 4.0 Scale
          </h2>

          <p className="text-muted leading-relaxed">
            This GPA calculator helps students calculate their
            Grade Point Average using a standard 4.0 grading scale.
            Enter the credit value and grade point for each subject
            to calculate a credit-weighted GPA.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The calculator is useful for students who need to
            calculate their GPA from individual courses, especially
            when different subjects carry different numbers of
            credits.
          </p>

        </section>


        {/* WHAT GPA MEANS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What Does GPA Mean?
          </h2>

          <p className="text-muted leading-relaxed">
            GPA stands for Grade Point Average. It is a numerical
            representation of a student's academic performance over
            a particular group of courses or academic period.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            On a 4.0 scale, individual letter grades are represented
            by grade points. For example, an A may correspond to
            4.0, while lower grades receive progressively lower
            grade-point values.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The exact grade-to-point conversion can vary between
            institutions, so students should use the grading scale
            specified by their university or school.
          </p>

        </section>


        {/* 4.0 SCALE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What Is a 4.0 GPA Scale?
          </h2>

          <p className="text-muted leading-relaxed">
            A 4.0 GPA scale is a grading system where the highest
            commonly used grade point is 4.0. It is widely used by
            educational institutions, particularly in the United
            States and in international academic evaluations.
          </p>

          <div className="card p-5 mt-5">

            <div className="space-y-3 text-muted">

              <p>
                <strong className="text-fg">4.0</strong> — Excellent
                performance
              </p>

              <p>
                <strong className="text-fg">3.7</strong> — Very strong
                performance
              </p>

              <p>
                <strong className="text-fg">3.3</strong> — Good
                performance
              </p>

              <p>
                <strong className="text-fg">3.0</strong> — Good
                performance
              </p>

              <p>
                <strong className="text-fg">2.0</strong> — Satisfactory
                performance
              </p>

            </div>

          </div>

          <p className="text-xs text-muted-2 mt-4">
            These examples are illustrative. Your institution may
            use a different grade-point conversion table.
          </p>

        </section>


        {/* GPA FORMULA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Is GPA Calculated?
          </h2>

          <p className="text-muted leading-relaxed">
            When courses have different credit values, GPA is normally
            calculated using a credit-weighted average.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono text-lg">
              GPA = Σ(Credit × Grade Point) ÷ Σ(Credits)
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            This means that a course carrying more credits has a
            greater effect on the final GPA than a course carrying
            fewer credits.
          </p>

        </section>


        {/* EXAMPLE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            GPA Calculation Example
          </h2>

          <p className="text-muted leading-relaxed">
            Suppose a student has three courses with the following
            credit and grade-point values:
          </p>

          <div className="card p-5 mt-5">

            <div className="space-y-3 text-muted">

              <p>
                Course 1:
                <strong> 3 credits × 4.0</strong>
              </p>

              <p>
                Course 2:
                <strong> 3 credits × 3.7</strong>
              </p>

              <p>
                Course 3:
                <strong> 4 credits × 3.3</strong>
              </p>

            </div>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The total quality points are calculated by multiplying
            each course's credits by its grade point. The sum of
            these quality points is then divided by the total number
            of credits.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono text-lg">
              GPA = (3×4.0 + 3×3.7 + 4×3.3) ÷ (3+3+4)
            </p>

            <p className="text-center font-bold text-xl mt-3 text-brand-400">
              GPA ≈ 3.63
            </p>

          </div>

        </section>


        {/* CREDIT WEIGHTING */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why Do Credits Matter in GPA Calculation?
          </h2>

          <p className="text-muted leading-relaxed">
            Credits determine how strongly each course contributes
            to your overall GPA. A four-credit course has a larger
            mathematical effect than a two-credit course when their
            grade points are different.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            This is why simply adding all grade points and dividing
            by the number of subjects may produce an incorrect GPA
            when courses have different credit values.
          </p>

        </section>


        {/* GPA VS SIMPLE AVERAGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            GPA vs Simple Average of Grade Points
          </h2>

          <p className="text-muted leading-relaxed">
            A simple average treats every subject equally. A
            credit-weighted GPA does not. Courses with more credits
            have a greater influence on the final result.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if one subject carries 5 credits and another
            carries 2 credits, their grade points should not normally
            have the same weight in a credit-based GPA calculation.
          </p>

        </section>


        {/* HOW TO USE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Use This GPA Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Enter the number of credits for your first course.
            </li>

            <li>
              Enter the grade point earned in that course.
            </li>

            <li>
              Add the remaining courses using the
              <strong> Add Subject</strong> button.
            </li>

            <li>
              Enter the credits and grade points for each course.
            </li>

            <li>
              Check the calculated GPA displayed on the right.
            </li>

          </ol>

        </section>


        {/* IMPROVING GPA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Can You Improve Your GPA?
          </h2>

          <p className="text-muted leading-relaxed">
            Improving GPA generally requires earning higher grade
            points in current and future courses. The impact of a
            particular course depends partly on its credit value.
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed mt-4">

            <li>
              Focus on courses carrying more credits.
            </li>

            <li>
              Identify subjects where your grade point can improve.
            </li>

            <li>
              Maintain consistent performance across courses.
            </li>

            <li>
              Check your institution's grading and credit policies.
            </li>

            <li>
              Track your GPA after each academic period.
            </li>

          </ul>

        </section>


        {/* GPA INTERPRETATION */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What Is Considered a Good GPA on a 4.0 Scale?
          </h2>

          <p className="text-muted leading-relaxed">
            What counts as a good GPA depends on the institution,
            program, country and purpose for which the GPA is being
            evaluated.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            As a general reference, a GPA around 3.0 represents
            solid academic performance, while a GPA around 3.5 or
            higher is often considered strong. A GPA close to 4.0
            represents performance near the top of a 4.0 scale.
          </p>

          <p className="text-xs text-muted-2 mt-4">
            These descriptions are general and should not be treated
            as universal academic classifications.
          </p>

        </section>


        {/* GPA AND ADMISSIONS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why Is GPA Important for Students?
          </h2>

          <p className="text-muted leading-relaxed">
            GPA can be used as one measure of academic performance.
            Universities, scholarship providers and employers may
            consider GPA alongside other academic and professional
            qualifications.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Admission requirements vary significantly, so students
            should always check the specific GPA requirements of the
            institution or program they are applying to.
          </p>

        </section>


        {/* GPA CONVERSION */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Can GPA Be Converted to Percentage?
          </h2>

          <p className="text-muted leading-relaxed">
            There is no single universal formula for converting a
            4.0 GPA directly into a percentage. Different schools,
            universities and credential-evaluation organizations may
            use different conversion methods.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Therefore, you should not automatically assume that a
            particular GPA corresponds to a specific percentage
            unless your institution or evaluating organization
            provides an official conversion rule.
          </p>

        </section>


        {/* GPA VS CGPA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            GPA vs CGPA
          </h2>

          <p className="text-muted leading-relaxed">
            GPA generally describes academic performance for a
            particular academic period or group of courses, while
            CGPA is commonly used for a cumulative result covering
            multiple academic periods.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The exact terminology and calculation method can vary
            between institutions.
          </p>

        </section>


        {/* IMPORTANT NOTE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Important Note About This GPA Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            This calculator assumes that the grade points entered by
            the user are already based on the relevant 4.0 grading
            scale. It does not determine your letter grade or convert
            marks into grade points automatically.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            If your university uses a different grading scale, such
            as a 10-point scale, 5-point scale or a custom grade-point
            system, use the grading rules provided by your institution.
          </p>

        </section>


        {/* FAQ */}

        <section>

          <h2 className="text-2xl font-bold mb-5">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">


            <div>

              <h3 className="font-semibold text-lg">
                What is a 4.0 GPA?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                A 4.0 GPA is a grade-point average calculated on a
                scale where 4.0 is the highest commonly used grade
                point.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How is GPA calculated with credits?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Multiply each course's credit value by its grade
                point, add the resulting quality points and divide
                the total by the sum of all credits.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What is the GPA formula?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                The standard credit-weighted formula is the sum of
                credit multiplied by grade point divided by the
                total number of credits.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Does a higher-credit subject affect GPA more?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. In a credit-weighted calculation, a course with
                more credits has a greater effect on the final GPA.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Is 3.5 a good GPA?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                A 3.5 GPA is generally considered strong on a 4.0
                scale, although what qualifies as a good GPA depends
                on the institution, program and academic requirement.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Is 4.0 the highest GPA?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                On a standard 4.0 scale, 4.0 is the highest regular
                grade-point value. Some institutions use weighted
                scales that can exceed 4.0, however.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I calculate GPA with different credit values?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. This calculator uses the credit values entered
                for each course, allowing subjects with different
                numbers of credits to be included.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I convert my GPA to percentage?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                A universal GPA-to-percentage conversion does not
                exist. Use the official conversion method provided
                by your institution or evaluating organization.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I use this calculator for university GPA?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes, if your university uses a 4.0 scale and your
                grade points and credits can be represented using
                the inputs provided by the calculator.
              </p>

            </div>

          </div>

        </section>


      </article>

    </div>
  );
}