'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const LOCATIONS = [
  // India
  {
    id: 'kolkata',
    value: 'Asia/Kolkata',
    label: 'Kolkata, India',
  },
  {
    id: 'delhi',
    value: 'Asia/Kolkata',
    label: 'Delhi, India',
  },
  {
    id: 'mumbai',
    value: 'Asia/Kolkata',
    label: 'Mumbai, India',
  },
  {
    id: 'bengaluru',
    value: 'Asia/Kolkata',
    label: 'Bengaluru, India',
  },
  {
    id: 'chennai',
    value: 'Asia/Kolkata',
    label: 'Chennai, India',
  },
  {
    id: 'hyderabad',
    value: 'Asia/Kolkata',
    label: 'Hyderabad, India',
  },

  // Asia
  {
    id: 'dubai',
    value: 'Asia/Dubai',
    label: 'Dubai, UAE',
  },
  {
    id: 'singapore',
    value: 'Asia/Singapore',
    label: 'Singapore',
  },
  {
    id: 'tokyo',
    value: 'Asia/Tokyo',
    label: 'Tokyo, Japan',
  },
  {
    id: 'shanghai',
    value: 'Asia/Shanghai',
    label: 'Shanghai, China',
  },
  {
    id: 'hong-kong',
    value: 'Asia/Hong_Kong',
    label: 'Hong Kong',
  },
  {
    id: 'seoul',
    value: 'Asia/Seoul',
    label: 'Seoul, South Korea',
  },

  // Europe
  {
    id: 'london',
    value: 'Europe/London',
    label: 'London, UK',
  },
  {
    id: 'paris',
    value: 'Europe/Paris',
    label: 'Paris, France',
  },
  {
    id: 'berlin',
    value: 'Europe/Berlin',
    label: 'Berlin, Germany',
  },
  {
    id: 'rome',
    value: 'Europe/Rome',
    label: 'Rome, Italy',
  },
  {
    id: 'moscow',
    value: 'Europe/Moscow',
    label: 'Moscow, Russia',
  },

  // North America
  {
    id: 'new-york',
    value: 'America/New_York',
    label: 'New York, USA',
  },
  {
    id: 'chicago',
    value: 'America/Chicago',
    label: 'Chicago, USA',
  },
  {
    id: 'denver',
    value: 'America/Denver',
    label: 'Denver, USA',
  },
  {
    id: 'los-angeles',
    value: 'America/Los_Angeles',
    label: 'Los Angeles, USA',
  },
  {
    id: 'toronto',
    value: 'America/Toronto',
    label: 'Toronto, Canada',
  },

  // Australia / New Zealand
  {
    id: 'sydney',
    value: 'Australia/Sydney',
    label: 'Sydney, Australia',
  },
  {
    id: 'melbourne',
    value: 'Australia/Melbourne',
    label: 'Melbourne, Australia',
  },
  {
    id: 'perth',
    value: 'Australia/Perth',
    label: 'Perth, Australia',
  },
  {
    id: 'auckland',
    value: 'Pacific/Auckland',
    label: 'Auckland, New Zealand',
  },
];


/* =========================================
   DATE / TIME HELPERS
========================================= */

function pad(value) {
  return String(value).padStart(2, '0');
}


function getInitialDateTime() {
  const now = new Date();

  return {
    date: `${now.getFullYear()}-${pad(
      now.getMonth() + 1
    )}-${pad(now.getDate())}`,

    time: `${pad(now.getHours())}:${pad(
      now.getMinutes()
    )}`,
  };
}


function getTimeZoneParts(date, timeZone) {
  const formatter = new Intl.DateTimeFormat(
    'en-US',
    {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    }
  );

  const parts = formatter.formatToParts(date);

  const result = {};

  parts.forEach((part) => {
    if (part.type !== 'literal') {
      result[part.type] = part.value;
    }
  });

  return result;
}


function getTimeZoneOffset(date, timeZone) {
  const parts = getTimeZoneParts(
    date,
    timeZone
  );

  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );

  return Math.round(
    (asUTC - date.getTime()) / 60000
  );
}


function localTimeToDate(
  dateValue,
  timeValue,
  timeZone
) {
  const [year, month, day] =
    dateValue.split('-').map(Number);

  const [hours, minutes] =
    timeValue.split(':').map(Number);

  const localAsUTC = Date.UTC(
    year,
    month - 1,
    day,
    hours,
    minutes,
    0
  );

  let result = new Date(localAsUTC);

  for (let i = 0; i < 3; i += 1) {
    const offset = getTimeZoneOffset(
      result,
      timeZone
    );

    result = new Date(
      localAsUTC - offset * 60000
    );
  }

  return result;
}


function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat(
    'en-IN',
    {
      timeZone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }
  ).format(date);
}


function formatDate(date, timeZone) {
  return new Intl.DateTimeFormat(
    'en-IN',
    {
      timeZone,
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  ).format(date);
}


function formatOffset(minutes) {
  if (minutes === 0) {
    return 'UTC';
  }

  const sign =
    minutes > 0 ? '+' : '-';

  const absolute =
    Math.abs(minutes);

  const hours =
    Math.floor(absolute / 60);

  const mins =
    absolute % 60;

  if (mins === 0) {
    return `UTC ${sign}${hours}`;
  }

  return `UTC ${sign}${hours}:${pad(
    mins
  )}`;
}


function getDifferenceText(minutes) {
  const absolute =
    Math.abs(minutes);

  const hours =
    Math.floor(absolute / 60);

  const mins =
    absolute % 60;

  const parts = [];

  if (hours > 0) {
    parts.push(
      `${hours} hour${
        hours !== 1 ? 's' : ''
      }`
    );
  }

  if (mins > 0) {
    parts.push(
      `${mins} minute${
        mins !== 1 ? 's' : ''
      }`
    );
  }

  return parts.length
    ? parts.join(' ')
    : '0 minutes';
}


/* =========================================
   MAIN CALCULATOR
========================================= */

export default function TimeZoneConverterCalculator() {
  const initial = useMemo(
    () => getInitialDateTime(),
    []
  );

  /*
   * IMPORTANT:
   * We store the unique LOCATION ID here,
   * not the timezone itself.
   *
   * This fixes the issue where:
   * Kolkata
   * Delhi
   * Mumbai
   * Bengaluru
   * Chennai
   * Hyderabad
   *
   * all share Asia/Kolkata and were therefore
   * all being shown as selected.
   */

  const [fromLocation, setFromLocation] =
    useState('kolkata');

  const [toLocation, setToLocation] =
    useState('new-york');

  const [date, setDate] =
    useState(initial.date);

  const [time, setTime] =
    useState(initial.time);


  const fromLocationData =
    LOCATIONS.find(
      (location) =>
        location.id === fromLocation
    ) || LOCATIONS[0];


  const toLocationData =
    LOCATIONS.find(
      (location) =>
        location.id === toLocation
    ) || LOCATIONS[17];


  const fromTimeZone =
    fromLocationData.value;

  const toTimeZone =
    toLocationData.value;


  /*
   * Convert entered local time into
   * an absolute moment.
   */

  const selectedDate = useMemo(() => {
    return localTimeToDate(
      date,
      time,
      fromTimeZone
    );
  }, [
    date,
    time,
    fromTimeZone,
  ]);


  const fromOffset =
    getTimeZoneOffset(
      selectedDate,
      fromTimeZone
    );


  const toOffset =
    getTimeZoneOffset(
      selectedDate,
      toTimeZone
    );


  const difference =
    toOffset - fromOffset;


  const fromLabel =
    fromLocationData.label;


  const toLabel =
    toLocationData.label;


  const fromTime =
    formatTime(
      selectedDate,
      fromTimeZone
    );


  const toTime =
    formatTime(
      selectedDate,
      toTimeZone
    );


  const fromDate =
    formatDate(
      selectedDate,
      fromTimeZone
    );


  const toDate =
    formatDate(
      selectedDate,
      toTimeZone
    );


  const differenceText =
    getDifferenceText(
      difference
    );


  /* =========================================
     SWAP
  ========================================= */

  const handleSwap = () => {
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };


  return (
    <div className="space-y-8">

      {/* =========================================
          CALCULATOR
      ========================================= */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}

          <div className="space-y-4">

            {/* From Location */}

            <div className="block relative z-50">

              <span className="text-sm text-muted">
                From Location
              </span>

              <LocationDropdown
                value={fromLocation}
                onChange={setFromLocation}
              />

            </div>


            {/* To Location */}

            <div className="block relative z-40">

              <span className="text-sm text-muted">
                To Location
              </span>

              <LocationDropdown
                value={toLocation}
                onChange={setToLocation}
              />

            </div>


            {/* Swap */}

            <button
              type="button"
              onClick={handleSwap}
              className="w-full rounded-xl py-2 text-sm font-semibold toggle-btn-inactive"
            >
              ⇄ Swap Locations
            </button>


            {/* Date */}

            <label className="block">

              <span className="text-sm text-muted">
                Date
              </span>

              <input
                type="date"
                className="input mt-1"
                value={date}
                onChange={(e) =>
                  setDate(
                    e.target.value
                  )
                }
              />

            </label>


            {/* Time */}

            <label className="block">

              <span className="text-sm text-muted">
                Time in From Location
              </span>

              <input
                type="time"
                className="input mt-1"
                value={time}
                onChange={(e) =>
                  setTime(
                    e.target.value
                  )
                }
              />

            </label>

          </div>


          {/* =========================================
              RESULTS
          ========================================= */}

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-5">

            {/* From */}

            <div>

              <p className="text-xs text-muted">
                {fromLabel}
              </p>

              <p className="text-2xl font-bold">
                {fromTime}
              </p>

              <p className="text-sm text-muted-2">
                {fromDate}
              </p>

              <p className="text-sm text-muted-2 mt-1">
                {formatOffset(
                  fromOffset
                )}
              </p>

            </div>


            {/* To */}

            <div className="border-t border-brand-400/20 pt-5">

              <p className="text-xs text-muted">
                {toLabel}
              </p>

              <p className="text-3xl font-extrabold text-brand-400">
                {toTime}
              </p>

              <p className="text-sm text-muted-2">
                {toDate}
              </p>

              <p className="text-sm text-muted-2 mt-1">
                {formatOffset(
                  toOffset
                )}
              </p>

            </div>


            {/* Difference */}

            <div className="border-t border-brand-400/20 pt-5">

              <p className="text-xs text-muted">
                Time Difference
              </p>

              {difference === 0 ? (

                <p className="text-xl font-bold">
                  Same time
                </p>

              ) : (

                <p className="text-xl font-bold">

                  {difference > 0
                    ? `${toLabel} is ${differenceText} ahead of ${fromLabel}`
                    : `${toLabel} is ${differenceText} behind ${fromLabel}`}

                </p>

              )}

            </div>

          </div>

        </div>


        <p className="text-xs text-muted-2 mt-4">
          Time-zone calculations account for
          daylight saving time where applicable.
          The result can change depending on the
          selected date.
        </p>

      </div>


      {/* =========================================
          SEO CONTENT
      ========================================= */}

      <div className="space-y-8">

        {/* Introduction */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Time Zone Converter
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              The Time Zone Converter helps you
              convert time between different cities
              and countries around the world. Select
              a starting location, choose the
              destination location, enter a date and
              time, and instantly see the corresponding
              local time at the destination.
            </p>

            <p>
              This calculator also works as a
              time difference calculator. It shows
              how many hours and minutes one location
              is ahead of or behind another location.
            </p>

            <p>
              For example, if you are in Kolkata,
              India and want to know the corresponding
              time in New York, USA, simply select
              Kolkata as the starting location and
              New York as the destination.
            </p>

          </div>

        </section>


        {/* How to use */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to Use the Time Zone Converter
          </h2>

          <div className="text-muted leading-7">

            <ol className="list-decimal pl-6 space-y-2">

              <li>
                Select your starting location under
                <strong> From Location</strong>.
              </li>

              <li>
                Select the destination under
                <strong> To Location</strong>.
              </li>

              <li>
                Enter the date you want to compare.
              </li>

              <li>
                Enter the local time at the starting
                location.
              </li>

              <li>
                The calculator automatically
                converts the time to the destination
                location.
              </li>

              <li>
                Check the displayed time difference
                and UTC offsets.
              </li>

            </ol>

          </div>

        </section>


        {/* Time Difference */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Time Difference Between Two Locations
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              The time difference between two
              locations is determined by comparing
              their UTC offsets for the selected date.
              If one location has a larger UTC offset,
              it will generally be ahead of a location
              with a smaller offset.
            </p>

            <p>
              For example, India Standard Time (IST)
              is UTC+5:30. New York can have different
              UTC offsets depending on whether standard
              time or daylight saving time is in effect.
              Therefore, the difference between India
              and New York can change during the year.
            </p>

            <p>
              This is why selecting the correct date
              is important when calculating the time
              difference between locations that observe
              daylight saving time.
            </p>

          </div>

        </section>


        {/* UTC */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What Is UTC?
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              UTC stands for Coordinated Universal
              Time. It is the primary time standard
              used around the world to compare the
              local time of different regions.
            </p>

            <p>
              Time zones are generally expressed as
              an offset from UTC. For example, India
              Standard Time is UTC+5:30, meaning that
              Indian Standard Time is five hours and
              thirty minutes ahead of UTC.
            </p>

            <p>
              Some locations use a fixed UTC offset,
              while others change their offset during
              part of the year because of daylight
              saving time.
            </p>

          </div>

        </section>


        {/* DST */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Daylight Saving Time and Time Zones
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              Daylight Saving Time (DST) is a seasonal
              clock adjustment used in some countries
              and regions. During the DST period, the
              local clock may be moved forward by one
              hour compared with standard time.
            </p>

            <p>
              Countries and regions do not all follow
              the same DST rules. Some do not observe
              DST at all, while others change their
              clocks on specific dates.
            </p>

            <p>
              Because of this, the time difference
              between two locations can change during
              the year. This calculator uses the
              selected date when determining the
              applicable time-zone offset.
            </p>

          </div>

        </section>


        {/* Example */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Time Zone Conversion Example
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              Suppose you are in Kolkata, India and
              want to schedule an online meeting with
              someone in New York, USA.
            </p>

            <div className="card p-6">

              <div className="grid sm:grid-cols-2 gap-5">

                <div>

                  <p className="text-sm text-muted">
                    Starting Location
                  </p>

                  <p className="text-xl font-bold">
                    Kolkata, India
                  </p>

                </div>

                <div>

                  <p className="text-sm text-muted">
                    Destination
                  </p>

                  <p className="text-xl font-bold">
                    New York, USA
                  </p>

                </div>

                <div>

                  <p className="text-sm text-muted">
                    Starting Time
                  </p>

                  <p className="text-xl font-bold">
                    10:00 AM
                  </p>

                </div>

                <div>

                  <p className="text-sm text-muted">
                    Converted Time
                  </p>

                  <p className="text-xl font-bold text-brand-400">
                    Depends on the selected date
                  </p>

                </div>

              </div>

            </div>

            <p>
              Since New York observes daylight saving
              time during part of the year, the exact
              converted time depends on the date selected
              in the calculator.
            </p>

          </div>

        </section>


        {/* Uses */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            When to Use a Time Zone Converter
          </h2>

          <div className="space-y-3 text-muted leading-7">

            <ul className="list-disc pl-6 space-y-2">

              <li>
                Scheduling international meetings
              </li>

              <li>
                Planning online classes
              </li>

              <li>
                Coordinating remote work across
                different countries
              </li>

              <li>
                Converting international event times
              </li>

              <li>
                Planning international phone calls
              </li>

              <li>
                Checking flight and travel times
              </li>

              <li>
                Coordinating business operations
                across time zones
              </li>

              <li>
                Checking the local time of friends
                and family abroad
              </li>

            </ul>

          </div>

        </section>


        {/* India */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Time Difference Between India and Other Countries
          </h2>

          <div className="space-y-4 text-muted leading-7">

            <p>
              India follows Indian Standard Time
              (IST), which is UTC+5:30. India uses
              the same standard time throughout the
              country and does not normally change its
              clocks for daylight saving time.
            </p>

            <p>
              When comparing India with another
              country, the difference may vary
              throughout the year if that country
              observes daylight saving time.
            </p>

            <p>
              The calculator lets you select the
              relevant date so that the destination's
              applicable time-zone offset can be used
              for the conversion.
            </p>

          </div>

        </section>


        {/* Important notes */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Important Notes About Time Zones
          </h2>

          <div className="text-muted leading-7">

            <ul className="list-disc pl-6 space-y-2">

              <li>
                Time-zone differences can change
                depending on the date.
              </li>

              <li>
                Some countries observe daylight
                saving time.
              </li>

              <li>
                India uses IST (UTC+5:30).
              </li>

              <li>
                The destination date can sometimes be
                different from the starting date.
              </li>

              <li>
                Locations in the same time zone have
                the same UTC offset for the selected
                date.
              </li>

              <li>
                Always check the date as well as the
                time when scheduling international
                events.
              </li>

            </ul>

          </div>

        </section>


        {/* FAQ */}

        <section>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <FAQ
              question="How do I calculate the time difference between two locations?"
              answer="Select the two locations and the date in the calculator. The calculator compares their applicable UTC offsets and shows how many hours and minutes one location is ahead of or behind the other."
            />

            <FAQ
              question="How do I convert Indian time to another country's time?"
              answer="Select an Indian city such as Kolkata, Delhi or Mumbai as the From Location, select the destination city or country, and enter the Indian date and time. The calculator will show the corresponding local time at the destination."
            />

            <FAQ
              question="What is the time difference between India and New York?"
              answer="The difference between India and New York is not always the same throughout the year because New York observes daylight saving time while India does not. Select the date in the calculator to get the applicable difference."
            />

            <FAQ
              question="Is India ahead of the United States?"
              answer="India is ahead of the United States, but the exact difference depends on the US location and the date. US locations can also change their UTC offset when daylight saving time begins or ends."
            />

            <FAQ
              question="Does the calculator account for daylight saving time?"
              answer="Yes. The calculation uses the selected date and the applicable IANA time-zone rules available through the browser's internationalization system, allowing locations that observe daylight saving time to use their appropriate offset."
            />

            <FAQ
              question="What is India's time zone?"
              answer="India follows Indian Standard Time (IST), which is UTC+5:30. India uses the same standard time throughout the country."
            />

            <FAQ
              question="What does UTC mean?"
              answer="UTC stands for Coordinated Universal Time. It is the standard reference used to express the offset of different time zones around the world."
            />

            <FAQ
              question="Can the destination date be different from the starting date?"
              answer="Yes. When converting time between locations that are far apart geographically, the destination may be on the previous or next calendar day."
            />

            <FAQ
              question="Can I use this calculator for international meetings?"
              answer="Yes. Select the meeting location, destination location, date and local meeting time. The calculator will show the corresponding time at the other location, making it useful for scheduling international meetings and calls."
            />

            <FAQ
              question="Why does the time difference change during the year?"
              answer="The time difference can change when one of the locations observes daylight saving time. During DST, the local UTC offset may change, which can alter the difference between two locations."
            />

          </div>

        </section>

      </div>

    </div>
  );
}


/* =========================================
   LOCATION CUSTOM DROPDOWN
========================================= */

function LocationDropdown({
  value,
  onChange,
}) {
  const [open, setOpen] =
    useState(false);

  const dropdownRef =
    useRef(null);


  /*
   * Find the selected location
   * by its unique ID.
   *
   * This is the important fix.
   */

  const selected =
    LOCATIONS.find(
      (location) =>
        location.id === value
    ) || LOCATIONS[0];


  /*
   * Close dropdown when clicking
   * outside.
   */

  useEffect(() => {
    function handleClickOutside(
      event
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);


  return (
    <div
      ref={dropdownRef}
      className="relative mt-1"
    >

      {/* Dropdown Button */}

      <button
        type="button"
        onClick={() =>
          setOpen(
            (prev) => !prev
          )
        }
        className="fd-dropdown-button"
      >

        <span>
          {selected.label}
        </span>

        <span className="text-sm">
          {open ? '▲' : '▼'}
        </span>

      </button>


      {/* Dropdown Menu */}

      {open && (

        <div className="fd-dropdown-menu">

          {LOCATIONS.map(
            (location) => (

              <button
                key={location.id}
                type="button"
                onClick={() => {
                  onChange(
                    location.id
                  );

                  setOpen(false);
                }}
                className={`fd-dropdown-option ${
                  location.id === value
                    ? 'selected'
                    : ''
                }`}
              >
                {location.label}
              </button>

            )
          )}

        </div>

      )}

    </div>
  );
}


/* =========================================
   FAQ
========================================= */

function FAQ({
  question,
  answer,
}) {
  return (
    <div>

      <h3 className="text-lg font-semibold mb-2">
        {question}
      </h3>

      <p className="text-muted leading-7">
        {answer}
      </p>

    </div>
  );
}