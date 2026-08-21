'use client';

import { useEffect, useState } from 'react';
import { calcAge } from '@/lib/calc-functions';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('2000-01-01');
  const [birthTime, setBirthTime] = useState('');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const {
    years,
    months,
    days,
    hours,
    minutes,
    totalDays,
  } = calcAge(birthDate, birthTime, now);

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">

            <label className="block">
              <span className="text-sm text-muted">
                Date of Birth
              </span>

              <input
                type="date"
                className="input mt-1"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm text-muted">
                Time of Birth{' '}
                <span className="text-muted-2">(optional)</span>
              </span>

              <input
                type="time"
                className="input mt-1"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
              />
            </label>

          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <div>
              <p className="text-xs text-muted">
                Your Age
              </p>

              <p className="text-3xl font-extrabold text-brand-400">
                {years}y {months}m {days}d
              </p>

              {birthTime && (
                <p className="text-lg font-bold text-fg mt-1">
                  {hours}h {minutes}m
                </p>
              )}
            </div>

            <p className="text-sm text-muted">
              {totalDays.toLocaleString('en-IN')} total days
            </p>

          </div>
        </div>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Age Calculator
          </h2>

          <p className="text-muted leading-7">
            This free Age Calculator helps you calculate your exact age
            from your date of birth. Enter your birth date to find your
            age in years, months and days. You can also enter your birth
            time to calculate a more detailed age including hours and
            minutes.
          </p>

          <p className="text-muted leading-7 mt-4">
            The calculator also shows the approximate total number of
            days you have lived based on the dates entered.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What Is an Age Calculator?
          </h2>

          <p className="text-muted leading-7">
            An age calculator is an online tool that determines a
            person's age by comparing their date of birth with the
            current date or another reference date.
          </p>

          <p className="text-muted leading-7 mt-4">
            Instead of manually calculating the difference between
            dates, an age calculator automatically accounts for the
            number of years, months and days between the two dates.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How Does the Age Calculator Work?
          </h2>

          <p className="text-muted leading-7">
            The calculator takes your date of birth and compares it
            with the current date. It determines the completed years
            first and then calculates the remaining months and days.
          </p>

          <p className="text-muted leading-7 mt-4">
            If a birth time is provided, the calculator can also
            calculate the additional hours and minutes between the
            birth time and the current time.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Your Age
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-muted leading-7">
            <li>Enter your date of birth.</li>
            <li>
              Enter your time of birth if you want a more detailed result.
            </li>
            <li>
              Check the calculated age in years, months and days.
            </li>
            <li>
              Review the additional hours and minutes when birth time
              is provided.
            </li>
          </ol>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Age and Date of Birth
          </h2>

          <p className="text-muted leading-7">
            Age is measured from a person's date of birth to a specific
            reference date. The result can be expressed as completed
            years or as a more detailed period containing years, months
            and days.
          </p>

          <p className="text-muted leading-7 mt-4">
            The reference date can be the current date or another date
            relevant to the calculation.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Calendar-Based Age Calculation
          </h2>

          <p className="text-muted leading-7">
            Calendar-based age calculations consider the actual dates
            involved rather than treating every month as having the
            same number of days.
          </p>

          <p className="text-muted leading-7 mt-4">
            This makes the calculation useful when the period crosses
            months with different lengths or includes a leap year.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Age Records and Date Planning
          </h2>

          <p className="text-muted leading-7">
            Age calculations can be useful for birthdays, personal
            records, application forms, admission requirements and
            other situations where a person's age needs to be determined
            for a particular date.
          </p>

          <p className="text-muted leading-7 mt-4">
            For official purposes, the relevant organisation's specified
            reference or cutoff date should always be followed.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Age Calculator Example
          </h2>

          <p className="text-muted leading-7">
            Suppose a person was born on 1 January 2000. By entering
            the date of birth into the calculator, the tool can
            determine the person's current age in years, months and
            days based on the current date.
          </p>

          <p className="text-muted leading-7 mt-4">
            If the exact birth time is also entered, the calculation
            can provide additional hours and minutes.
          </p>
        </section>


        {/* FAQ — ONLY ONE FAQ SECTION */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About Age Calculator
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                How is age calculated?
              </h3>
              <p className="text-muted leading-7">
                Age is calculated by determining the elapsed calendar
                period between the date of birth and the selected
                reference date.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can I calculate my age in years, months and days?
              </h3>
              <p className="text-muted leading-7">
                Yes. The calculator displays the completed years,
                remaining months and remaining days between the dates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can I calculate my age using my birth time?
              </h3>
              <p className="text-muted leading-7">
                Yes. Birth time is optional. When provided, the
                calculator also displays additional hours and minutes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does the Age Calculator account for leap years?
              </h3>
              <p className="text-muted leading-7">
                Yes. The calculation uses the actual calendar dates,
                including periods that contain leap years.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can I use the Age Calculator for eligibility?
              </h3>
              <p className="text-muted leading-7">
                It can help determine your age, but official eligibility
                may depend on a specific cutoff date and the rules of
                the relevant organisation or authority.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How is total age in days calculated?
              </h3>
              <p className="text-muted leading-7">
                The calculator determines the elapsed period between
                the entered date of birth and the current date and
                provides the corresponding total number of days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Is the Age Calculator accurate?
              </h3>
              <p className="text-muted leading-7">
                The calculator provides a date-based age calculation
                using the information entered. For official
                applications, always follow the date and eligibility
                rules specified by the relevant authority.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}