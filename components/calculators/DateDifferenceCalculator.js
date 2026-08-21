'use client';

import { useState } from 'react';
import { calcDateDifference } from '@/lib/calc-functions';

export default function DateDifferenceCalculator() {
  const [dateA, setDateA] = useState('2024-01-01');
  const [dateB, setDateB] = useState(new Date().toISOString().slice(0, 10));

  const { totalDays, years, months, days } = calcDateDifference(dateA, dateB);

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-muted">
                First Date
              </span>

              <input
                type="date"
                className="input mt-1"
                value={dateA}
                onChange={(e) => setDateA(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm text-muted">
                Second Date
              </span>

              <input
                type="date"
                className="input mt-1"
                value={dateB}
                onChange={(e) => setDateB(e.target.value)}
              />
            </label>
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-3 text-center">

            <p className="text-3xl font-extrabold text-brand-400">
              {totalDays.toLocaleString('en-IN')} days
            </p>

            <p className="text-sm text-muted">
              {years}y {months}m {days}d approx.
            </p>

          </div>

        </div>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Date Difference Calculator
          </h2>

          <p className="text-muted leading-7">
            The Date Difference Calculator helps you find the amount of
            time between two calendar dates. Enter a first date and a
            second date to calculate the difference in total days as
            well as an approximate period in years, months and days.
          </p>

          <p className="text-muted leading-7 mt-4">
            This calculator can be useful for planning events,
            measuring periods between important dates, checking
            deadlines and understanding how much time has passed
            between two dates.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What Is Date Difference?
          </h2>

          <p className="text-muted leading-7">
            Date difference is the amount of elapsed time between two
            calendar dates. Depending on the purpose of the calculation,
            the difference can be represented as a number of days or as
            a combination of years, months and days.
          </p>

          <p className="text-muted leading-7 mt-4">
            The exact number of days depends on the calendar dates
            involved, including the length of individual months and
            leap years.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Calculating the Difference Between Two Dates
          </h2>

          <p className="text-muted leading-7">
            To calculate a date difference, the calculator compares the
            two selected calendar dates and determines the elapsed
            period between them.
          </p>

          <p className="text-muted leading-7 mt-4">
            The result includes the total number of days and an
            approximate breakdown into years, months and days.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Common Uses of a Date Difference Calculator
          </h2>

          <p className="text-muted leading-7 mb-4">
            A date difference calculator can be useful in many
            everyday and professional situations.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
            <li>Calculating the number of days between two dates.</li>
            <li>Checking how much time has passed since an event.</li>
            <li>Planning trips, holidays and events.</li>
            <li>Estimating periods between deadlines.</li>
            <li>Calculating durations for personal records.</li>
            <li>Comparing important calendar dates.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Calendar Dates, Months and Leap Years
          </h2>

          <p className="text-muted leading-7">
            Calendar calculations can be affected by the different
            lengths of months. Some months contain 30 days, others
            contain 31 days, while February normally contains 28 days.
          </p>

          <p className="text-muted leading-7 mt-4">
            During a leap year, February contains 29 days. These
            calendar differences are important when calculating the
            exact number of days between two dates.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Date Difference Example
          </h2>

          <p className="text-muted leading-7">
            For example, if the first date is 1 January 2024 and the
            second date is 1 January 2025, the period between the two
            dates is one calendar year. The exact number of days depends
            on whether the period includes a leap day.
          </p>

          <p className="text-muted leading-7 mt-4">
            By entering both dates into the calculator, you can
            immediately view the calculated difference without
            manually counting the days.
          </p>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About Date Difference
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                How many days are between two dates?
              </h3>

              <p className="text-muted leading-7">
                Enter the two dates into the calculator to determine
                the number of days between them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does the calculator account for leap years?
              </h3>

              <p className="text-muted leading-7">
                Yes. Calendar calculations can include leap years and
                the additional day in February when applicable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can I calculate the difference between dates in
                different years?
              </h3>

              <p className="text-muted leading-7">
                Yes. You can enter dates from different years and
                calculate the elapsed period between them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can the result be shown in years, months and days?
              </h3>

              <p className="text-muted leading-7">
                Yes. The calculator provides an approximate breakdown
                of the date difference into years, months and days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What happens if the dates are far apart?
              </h3>

              <p className="text-muted leading-7">
                The calculator can calculate the difference across
                multiple months or years and display the total number
                of days along with the approximate calendar period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Are date difference results exact?
              </h3>

              <p className="text-muted leading-7">
                The total number of days is calculated from the entered
                dates. The years, months and days breakdown is an
                approximate calendar representation.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}