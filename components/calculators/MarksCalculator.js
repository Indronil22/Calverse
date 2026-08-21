'use client';

import { useState } from 'react';
import { calcMarksNeeded } from '@/lib/calc-functions';

export default function MarksCalculator() {
  const [currentTotal, setCurrentTotal] = useState(320);
  const [currentMax, setCurrentMax] = useState(400);
  const [remainingMax, setRemainingMax] = useState(200);
  const [targetPct, setTargetPct] = useState(85);

  const { needed, possible } = calcMarksNeeded(
    Number(currentTotal) || 0,
    Number(currentMax) || 0,
    Number(remainingMax) || 0,
    Number(targetPct) || 0
  );

  return (
    <div className="space-y-10">

      {/* =====================================================
          MARKS CALCULATOR
          ===================================================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}

          <div className="space-y-4">

            <Field
              label="Marks Scored So Far"
              value={currentTotal}
              onChange={setCurrentTotal}
            />

            <Field
              label="Max Marks So Far"
              value={currentMax}
              onChange={setCurrentMax}
            />

            <Field
              label="Max Marks Remaining"
              value={remainingMax}
              onChange={setRemainingMax}
            />

            <Field
              label="Target Overall %"
              value={targetPct}
              onChange={setTargetPct}
            />

          </div>


          {/* RESULT */}

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center">

            <div className="text-center">

              <p className="text-xs text-muted">
                Marks Needed in Remaining Exams
              </p>

              <p className="text-3xl font-extrabold text-brand-400">
                {needed.toFixed(1)}
              </p>

              {!possible && (
                <p className="text-xs text-red-400 mt-2">
                  Not achievable — exceeds max remaining marks.
                </p>
              )}

              {possible && (
                <p className="text-xs text-muted mt-2">
                  Required marks out of {remainingMax} remaining marks.
                </p>
              )}

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
            Marks Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            A marks calculator helps students determine how many
            marks they need in their remaining examinations to
            achieve a desired overall percentage. It is useful when
            some examinations have already been completed and the
            marks for the remaining examinations are still pending.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Instead of calculating the required marks manually, you
            can enter your marks scored so far, maximum marks already
            completed, maximum marks remaining and your target
            percentage. The calculator then estimates the minimum
            marks required in the remaining examinations.
          </p>

        </section>


        {/* HOW IT WORKS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Does the Marks Calculator Work?
          </h2>

          <p className="text-muted leading-relaxed">
            The calculator considers both your completed marks and
            the maximum marks available in the remaining examinations.
            It then works backward from your target overall percentage
            to determine how many additional marks are required.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            This is particularly useful when a student wants to know
            whether a target such as 75%, 80%, 85% or 90% is still
            achievable based on the remaining marks.
          </p>

        </section>


        {/* FORMULA */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Formula to Calculate Required Marks
          </h2>

          <p className="text-muted leading-relaxed">
            The required marks can be calculated using the target
            overall percentage and the total maximum marks available
            after all examinations are completed.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono text-lg">
              Required Total Marks = Target % × Final Maximum Marks ÷ 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The marks already obtained are then subtracted from the
            required total marks to determine the marks that must be
            scored in the remaining examinations.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono text-lg">
              Marks Needed = Required Total Marks − Marks Scored So Far
            </p>

          </div>

        </section>


        {/* SIMPLE EXAMPLE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Example: Marks Needed for an 85% Target
          </h2>

          <p className="text-muted leading-relaxed">
            Suppose you have already scored 320 marks out of 400
            and have another 200 marks remaining. You want to finish
            with an overall percentage of 85%.
          </p>

          <div className="card p-5 mt-5 space-y-3">

            <p>
              Marks scored so far:
              <strong> 320</strong>
            </p>

            <p>
              Maximum marks completed:
              <strong> 400</strong>
            </p>

            <p>
              Maximum marks remaining:
              <strong> 200</strong>
            </p>

            <p>
              Final maximum marks:
              <strong> 600</strong>
            </p>

            <p>
              Target:
              <strong> 85%</strong>
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            To achieve 85%, the required total score is 510 marks
            out of 600. Since you already have 320 marks, you would
            need another 190 marks from the remaining 200 marks.
          </p>

        </section>


        {/* TARGET PERCENTAGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Many Marks Are Needed for 75%?
          </h2>

          <p className="text-muted leading-relaxed">
            To determine how many marks you need for a 75% overall
            result, enter your completed marks and remaining maximum
            marks and set the target percentage to 75.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The calculator considers the final maximum marks and
            determines the total marks required for a 75% result.
            Your existing marks are then deducted from that amount.
          </p>

        </section>


        {/* 80 */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Many Marks Are Needed for 80%?
          </h2>

          <p className="text-muted leading-relaxed">
            An 80% target means your final score must be at least
            80% of the total maximum marks available after all
            examinations are completed.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Enter your current marks, completed maximum marks and
            remaining maximum marks, then set the target to 80%.
            The calculator will show the marks required from the
            remaining examinations.
          </p>

        </section>


        {/* 85 */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Many Marks Are Needed for 85%?
          </h2>

          <p className="text-muted leading-relaxed">
            An 85% target requires a final score equal to at least
            85% of the total maximum marks.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The important factor is not only your current percentage.
            The maximum marks still available can significantly affect
            whether an 85% final result is achievable.
          </p>

        </section>


        {/* 90 */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Many Marks Are Needed for 90%?
          </h2>

          <p className="text-muted leading-relaxed">
            A 90% target requires a very high overall score. Whether
            it is still possible depends on how many marks you have
            already earned and how many marks remain.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Use the calculator before your remaining examinations to
            determine the score required to reach the 90% target.
          </p>

        </section>


        {/* CAN I ACHIEVE TARGET */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Can I Still Achieve My Target Percentage?
          </h2>

          <p className="text-muted leading-relaxed">
            Your target percentage is achievable only if the required
            marks in the remaining examinations do not exceed the
            maximum marks still available.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if the calculator says you need 210 marks
            but only 200 marks remain, the target cannot mathematically
            be achieved under the values entered.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The calculator identifies this situation and displays
            that the target is not achievable.
          </p>

        </section>


        {/* WHY CURRENT PERCENTAGE CAN BE MISLEADING */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why Your Current Percentage Is Not Enough to Predict Your
            Final Percentage
          </h2>

          <p className="text-muted leading-relaxed">
            Your current percentage only describes the marks obtained
            so far. It does not tell you exactly what final percentage
            you can achieve because the remaining maximum marks also
            matter.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            A student with a lower current percentage may still reach
            a high final percentage if a large number of marks remain.
            Conversely, a student with a high current percentage may
            have limited room for improvement if only a small number
            of marks remain.
          </p>

        </section>


        {/* EXAM PLANNING */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Use Required Marks for Exam Planning
          </h2>

          <p className="text-muted leading-relaxed">
            Knowing the required marks can help you set a realistic
            target for your remaining examinations.
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed mt-4">

            <li>
              Calculate the marks required for your desired percentage.
            </li>

            <li>
              Compare the required marks with the remaining maximum marks.
            </li>

            <li>
              Check whether your target is mathematically achievable.
            </li>

            <li>
              Divide your target across the remaining examinations.
            </li>

            <li>
              Aim for a reasonable buffer rather than exactly the
              minimum required score.
            </li>

          </ul>

        </section>


        {/* TARGET BUFFER */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why Should You Aim Above the Minimum Required Marks?
          </h2>

          <p className="text-muted leading-relaxed">
            If your calculated requirement is exactly the minimum
            score needed for your target, even a small difference in
            marks can cause your final percentage to fall below the
            desired level.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Therefore, when possible, students may choose to set a
            slightly higher practical target for their remaining
            examinations rather than aiming only for the calculated
            minimum.
          </p>

        </section>


        {/* HOW TO USE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Use This Marks Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Enter the marks you have already scored.
            </li>

            <li>
              Enter the maximum marks for the examinations already completed.
            </li>

            <li>
              Enter the maximum marks available in the remaining examinations.
            </li>

            <li>
              Enter your desired overall percentage.
            </li>

            <li>
              Check the marks required in the remaining examinations.
            </li>

            <li>
              If the required marks exceed the remaining maximum marks,
              the target is not mathematically achievable.
            </li>

          </ol>

        </section>


        {/* COMMON MISTAKES */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Common Mistakes When Calculating Required Marks
          </h2>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Using only the current percentage instead of actual marks.
            </li>

            <li>
              Forgetting to include the maximum marks of remaining exams.
            </li>

            <li>
              Confusing marks scored with maximum marks.
            </li>

            <li>
              Using the wrong target percentage.
            </li>

            <li>
              Assuming every subject or examination carries the same
              maximum marks when it does not.
            </li>

          </ul>

        </section>


        {/* DIFFERENCE BETWEEN CURRENT AND FINAL */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Current Marks vs Final Marks
          </h2>

          <p className="text-muted leading-relaxed">
            Current marks represent the score you have already earned
            from completed examinations. Final marks represent the
            combined score after all remaining examinations have been
            completed.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The marks calculator uses both values to determine what
            additional score is required to reach your final target.
          </p>

        </section>


        {/* IMPORTANT NOTE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Important Note About the Marks Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            This calculator provides a mathematical estimate based on
            the marks and maximum marks entered by the user. Actual
            academic results may depend on subject-wise weightage,
            practical examinations, internal assessments, assignments,
            project marks, grading policies and other rules followed
            by your institution.
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
                How do I calculate how many marks I need in my remaining exams?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Enter your marks scored so far, maximum marks completed,
                maximum marks remaining and target percentage. The
                calculator determines the additional marks required
                to reach the target.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How many marks do I need for 80% overall?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                The required marks depend on your existing score and
                the total maximum marks remaining. Set the target to
                80% to calculate the required score.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How many marks do I need for 85% overall?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Enter your completed marks and remaining maximum marks
                and set the target percentage to 85%. The calculator
                will determine how many marks are required from the
                remaining examinations.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How many marks do I need for 90% overall?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Your required score depends on the marks already
                obtained and the maximum marks still available.
                Use the calculator with a 90% target to determine
                the required marks.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What if the required marks are higher than the remaining marks?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                If the required marks exceed the maximum marks still
                available, the target percentage cannot be achieved
                mathematically with the entered values.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I use this calculator for school exams?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. The calculation can be used for school, college,
                university and other examination systems where marks
                are combined to determine an overall percentage.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I use this calculator for college semester exams?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes, provided you know the marks already scored, the
                maximum marks completed, the maximum marks remaining
                and the overall percentage you want to achieve.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Does the calculator show the minimum marks required?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. It calculates the marks required from the
                remaining examinations to reach the selected target
                percentage.
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
        min="0"
        className="input mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </label>
  );
}