'use client';

import { useState } from 'react';
import { calcTimeDuration } from '@/lib/calc-functions';

export default function TimeCalculator() {
  const [start, setStart] = useState('09:00');
  const [end, setEnd] = useState('17:30');

  const { hours, minutes, totalMinutes } = calcTimeDuration(start, end);

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">

            <label className="block">
              <span className="text-sm text-muted">
                Start Time
              </span>

              <input
                type="time"
                className="input mt-1"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm text-muted">
                End Time
              </span>

              <input
                type="time"
                className="input mt-1"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
            </label>

          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-center">

            <p className="text-3xl font-extrabold text-brand-400">
              {hours}h {minutes}m
            </p>

            <p className="text-sm text-muted">
              {totalMinutes} total minutes
            </p>

          </div>

        </div>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Time Duration Calculator
          </h2>

          <p className="text-muted leading-7">
            The Time Duration Calculator helps you calculate the amount
            of time between a starting time and an ending time. Enter
            the two times to instantly find the duration in hours and
            minutes.
          </p>

          <p className="text-muted leading-7 mt-4">
            The calculator also displays the total duration in minutes,
            which can be useful for work schedules, study sessions,
            appointments and everyday time calculations.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What is Time Duration?
          </h2>

          <p className="text-muted leading-7">
            Time duration is the amount of elapsed time between two
            points in time. It can be expressed in hours, minutes or
            other units depending on the purpose of the calculation.
          </p>

          <p className="text-muted leading-7 mt-4">
            For example, the time between 9:00 AM and 5:30 PM is
            8 hours and 30 minutes.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How Time Difference is Calculated
          </h2>

          <p className="text-muted leading-7">
            The duration is calculated by comparing the starting time
            with the ending time. The difference can then be expressed
            as hours and minutes or as a total number of minutes.
          </p>

          <p className="text-muted leading-7 mt-4">
            Converting the duration into total minutes can make it
            easier to perform further calculations, especially when
            tracking work or study time.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Time Duration Example
          </h2>

          <p className="text-muted leading-7">
            Suppose your working time starts at 9:00 AM and ends at
            5:30 PM.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7 mt-4">
            <li>Start time: 9:00 AM</li>
            <li>End time: 5:30 PM</li>
            <li>Total duration: 8 hours 30 minutes</li>
            <li>Total duration: 510 minutes</li>
          </ul>

          <p className="text-muted leading-7 mt-4">
            The calculator performs this calculation automatically
            when the start and end times are entered.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Common Uses of a Time Calculator
          </h2>

          <p className="text-muted leading-7 mb-4">
            A time duration calculator can be useful in many everyday
            situations, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
            <li>Calculating working hours.</li>
            <li>Tracking study sessions.</li>
            <li>Calculating meeting durations.</li>
            <li>Planning appointments.</li>
            <li>Calculating travel time.</li>
            <li>Tracking exercise sessions.</li>
            <li>Calculating the duration of events.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Time Calculator for Work Hours
          </h2>

          <p className="text-muted leading-7">
            The calculator can be used to determine the duration of a
            work shift by entering the starting and ending times.
          </p>

          <p className="text-muted leading-7 mt-4">
            For example, entering 9:00 AM as the start time and
            6:00 PM as the end time gives a total duration of
            9 hours before considering any break.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Time Calculator for Study Sessions
          </h2>

          <p className="text-muted leading-7">
            Students can use the calculator to determine how long they
            studied between two times. This can make it easier to track
            daily study sessions and plan future schedules.
          </p>

          <p className="text-muted leading-7 mt-4">
            The total minutes result can also be useful when adding
            several study sessions together.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Hours and Minutes Conversion
          </h2>

          <p className="text-muted leading-7">
            One hour contains 60 minutes. Therefore, a duration can be
            converted between hours and minutes by multiplying or
            dividing by 60.
          </p>

          <p className="text-muted leading-7 mt-4">
            For example, 8 hours and 30 minutes is equal to
            510 total minutes.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Things to Consider When Calculating Time
          </h2>

          <p className="text-muted leading-7">
            Make sure the start and end times are entered correctly.
            The result depends on the relationship between the two
            entered times.
          </p>

          <p className="text-muted leading-7 mt-4">
            For calculations involving different calendar dates or
            overnight periods, a date-based duration calculator may be
            more appropriate than a simple time-of-day calculation.
          </p>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About Time Calculator
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                How do I calculate the time between two times?
              </h3>

              <p className="text-muted leading-7">
                Enter the starting time and ending time into the
                calculator. It calculates the elapsed duration in
                hours and minutes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How many minutes are in one hour?
              </h3>

              <p className="text-muted leading-7">
                One hour contains 60 minutes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How do I calculate working hours?
              </h3>

              <p className="text-muted leading-7">
                Enter the time you started work as the start time and
                the time you finished as the end time. The calculator
                shows the duration between them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can I calculate study duration?
              </h3>

              <p className="text-muted leading-7">
                Yes. Enter the beginning and ending times of your study
                session to calculate its duration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does the calculator show total minutes?
              </h3>

              <p className="text-muted leading-7">
                Yes. Along with hours and minutes, the calculator
                displays the total duration in minutes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can I calculate an overnight duration?
              </h3>

              <p className="text-muted leading-7">
                Overnight calculations depend on how the underlying
                calculator handles the relationship between the start
                and end times. For durations crossing calendar dates,
                a date-based calculator is generally more appropriate.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}