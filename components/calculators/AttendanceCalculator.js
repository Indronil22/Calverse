'use client';

import { useState } from 'react';
import {
  calcAttendance,
  calcRequiredAttendance,
} from '@/lib/calc-functions';

export default function AttendanceCalculator() {
  const [attended, setAttended] = useState(42);
  const [total, setTotal] = useState(50);
  const [target, setTarget] = useState(75);

  const pct = calcAttendance(
    Number(attended) || 0,
    Number(total) || 1
  );

  const req = calcRequiredAttendance(
    Number(attended) || 0,
    Number(total) || 1,
    Number(target) || 75
  );

  return (
    <div className="space-y-10">

      {/* =====================================================
          CALCULATOR
          ===================================================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}

          <div className="space-y-4">

            <Field
              label="Classes Attended"
              value={attended}
              onChange={setAttended}
            />

            <Field
              label="Total Classes Held"
              value={total}
              onChange={setTotal}
            />

            <Field
              label="Target Attendance (%)"
              value={target}
              onChange={setTarget}
            />

          </div>


          {/* RESULTS */}

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <div>

              <p className="text-xs text-muted">
                Current Attendance
              </p>

              <p className="text-3xl font-extrabold text-brand-400">
                {pct.toFixed(2)}%
              </p>

            </div>


            <div>

              {req.status === 'ahead' ? (

                <p className="text-sm text-fg">

                  You&apos;re above target — you can skip{' '}

                  <span className="font-bold text-fg">
                    {req.classesCanSkip}
                  </span>{' '}

                  more class(es) and stay at or above {target}%.

                </p>

              ) : (

                <p className="text-sm text-fg">

                  You need to attend the next{' '}

                  <span className="font-bold text-fg">
                    {req.classesNeeded}
                  </span>{' '}

                  class(es) in a row to reach {target}%.

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
            Attendance Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            An attendance calculator helps students calculate their
            current class attendance percentage using the number of
            classes attended and the total number of classes held.
            It can also help determine whether a student is above
            or below a required attendance target.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            This calculator is useful for students who want to know
            their current attendance, check their attendance
            shortage, determine how many more classes they need to
            attend, or estimate how many classes they can miss while
            maintaining their target attendance.
          </p>

        </section>


        {/* HOW ATTENDANCE IS CALCULATED */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Is Attendance Percentage Calculated?
          </h2>

          <p className="text-muted leading-relaxed">
            Attendance percentage is calculated by comparing the
            number of classes attended with the total number of
            classes held.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono text-lg">
              Attendance % = (Classes Attended ÷ Total Classes) × 100
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            For example, if a student attended 42 classes out of
            50 classes:
          </p>

          <div className="card p-5 mt-4">

            <p className="text-center font-mono">
              (42 ÷ 50) × 100 = 84%
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            The student&apos;s current attendance is therefore 84%.
          </p>

        </section>


        {/* CURRENT ATTENDANCE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Check Your Current Attendance
          </h2>

          <p className="text-muted leading-relaxed">
            To check your current attendance, enter the number of
            classes you have attended and the total number of classes
            conducted so far.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The calculator divides your attended classes by the
            total classes and converts the result into a percentage.
            This gives you your current attendance level.
          </p>

        </section>


        {/* TARGET ATTENDANCE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Required Attendance
          </h2>

          <p className="text-muted leading-relaxed">
            If your current attendance is below the required target,
            you may need to attend several consecutive classes
            without missing any to bring your attendance back to
            the required level.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The required number of future classes can be calculated
            by finding the smallest number of additional classes
            that makes the attendance percentage reach the target.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-mono">
              (Attended + x) ÷ (Total + x) × 100 ≥ Target
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Here, <strong>x</strong> represents the number of
            additional classes that must be attended.
          </p>

        </section>


        {/* EXAMPLE REQUIRED */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Example: How Many Classes Do You Need to Attend?
          </h2>

          <p className="text-muted leading-relaxed">
            Suppose you have attended 60 classes out of 100 and
            your target attendance is 75%.
          </p>

          <div className="card p-5 mt-5 space-y-3">

            <p className="font-mono text-center">
              Current Attendance = (60 ÷ 100) × 100
            </p>

            <p className="font-mono text-center">
              Current Attendance = 60%
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Since the current attendance is below 75%, additional
            classes must be attended. The calculator determines the
            minimum number of consecutive classes required to reach
            the target.
          </p>

        </section>


        {/* HOW MANY CLASSES CAN MISS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Many Classes Can You Miss?
          </h2>

          <p className="text-muted leading-relaxed">
            If your current attendance is above the required target,
            you may be able to miss some upcoming classes without
            falling below the target.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The number of classes you can safely miss depends on
            your current attended classes, total classes and the
            minimum attendance percentage you need to maintain.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The calculator estimates this number and displays how
            many additional classes can be missed while keeping
            attendance at or above the selected target.
          </p>

        </section>


        {/* ATTENDANCE SHORTAGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What Is Attendance Shortage?
          </h2>

          <p className="text-muted leading-relaxed">
            Attendance shortage occurs when your current attendance
            percentage is below the minimum attendance requirement
            set by your institution, university, course or academic
            program.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if the required attendance is 75% but your
            current attendance is 68%, you have an attendance
            shortage relative to the required level.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The exact consequences of attendance shortage vary
            between institutions, so students should check their
            own academic rules.
          </p>

        </section>


        {/* 75 PERCENT */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Maintain 75% Attendance
          </h2>

          <p className="text-muted leading-relaxed">
            If your institution requires 75% attendance, you need
            to attend at least three out of every four classes on
            average.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            However, maintaining exactly 75% can leave very little
            room for future absences. Keeping attendance above the
            minimum requirement gives you a greater buffer for
            unavoidable absences.
          </p>

        </section>


        {/* 80 PERCENT */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Maintain 80% Attendance
          </h2>

          <p className="text-muted leading-relaxed">
            An 80% attendance target means that at least 80 out of
            every 100 classes, on average, must be attended.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Students with an 80% target should regularly monitor
            their attendance because missing several classes in a
            short period can reduce the overall percentage quickly.
          </p>

        </section>


        {/* 90 PERCENT */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Maintain 90% Attendance
          </h2>

          <p className="text-muted leading-relaxed">
            A 90% attendance requirement allows very little room for
            missed classes. To maintain this level, students need to
            attend almost all scheduled classes.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Because attendance is based on the total number of
            classes, the effect of missing a class may become smaller
            as more classes are conducted, but repeated absences can
            still significantly affect the percentage.
          </p>

        </section>


        {/* WHY ATTENDANCE FALLS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why Does Attendance Percentage Fall After Missing a Class?
          </h2>

          <p className="text-muted leading-relaxed">
            When you miss a class, the total number of classes
            increases but the number of classes attended does not.
            As a result, the fraction representing your attendance
            becomes smaller.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if you attended 9 out of 10 classes, your
            attendance is 90%. If you then miss the next class, you
            have attended 9 out of 11 classes, which reduces the
            attendance percentage.
          </p>

        </section>


        {/* ATTENDANCE IMPROVEMENT */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Improve Attendance Percentage
          </h2>

          <p className="text-muted leading-relaxed">
            If your attendance is below the required level, attending
            upcoming classes consistently is the primary way to
            increase your percentage.
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed mt-4">

            <li>
              Attend upcoming classes regularly.
            </li>

            <li>
              Avoid unnecessary absences.
            </li>

            <li>
              Track attendance after each class or lecture.
            </li>

            <li>
              Check your attendance before planning an absence.
            </li>

            <li>
              Keep some attendance buffer above the minimum
              requirement when possible.
            </li>

          </ul>

        </section>


        {/* HOW TO USE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Use This Attendance Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Enter the number of classes you have attended.
            </li>

            <li>
              Enter the total number of classes held.
            </li>

            <li>
              Enter your required or target attendance percentage.
            </li>

            <li>
              Check your current attendance percentage.
            </li>

            <li>
              If you are below the target, the calculator shows
              the number of upcoming classes you need to attend.
            </li>

            <li>
              If you are already above the target, the calculator
              estimates how many classes you can miss while
              remaining at or above the target.
            </li>

          </ol>

        </section>


        {/* IMPORTANT NOTE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Important Attendance Note
          </h2>

          <p className="text-muted leading-relaxed">
            This calculator provides a mathematical estimate based
            on the numbers entered. Actual attendance eligibility,
            condonation rules, medical exemptions, minimum attendance
            requirements and academic consequences depend on the
            rules of your institution or university.
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
                How do I calculate my attendance percentage?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Divide the number of classes attended by the total
                number of classes held and multiply the result by
                100.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How many classes do I need to attend to reach 75%?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                The required number depends on your current attended
                classes and total classes. Enter both values and set
                the target to 75% to calculate the required classes.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                How many classes can I miss and maintain 75%?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                It depends on your current attendance and the total
                number of classes. The calculator estimates the
                number of classes you can miss while remaining at or
                above 75%.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What happens if my attendance is below 75%?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                You need to attend enough future classes to bring
                your attendance back to 75%, assuming 75% is your
                required target.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I increase my attendance by attending every
                upcoming class?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. If you are below your target, attending future
                classes without additional absences will gradually
                increase your attendance percentage.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Does missing one class always reduce attendance by
                the same percentage?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                No. The effect of missing a class depends on the
                number of classes already conducted and the number
                attended.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What is the formula for attendance percentage?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Attendance percentage is calculated as classes
                attended divided by total classes held, multiplied
                by 100.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I use this calculator for college attendance?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. You can use it for college, university, school,
                coaching classes or other situations where attendance
                is calculated from attended classes and total classes.
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