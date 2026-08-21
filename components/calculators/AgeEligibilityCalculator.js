'use client';

import { useState } from 'react';
import { calcAgeEligibility } from '@/lib/calc-functions';

export default function AgeEligibilityCalculator() {
  const [birthDate, setBirthDate] = useState('2005-06-15');
  const [cutoffDate, setCutoffDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(25);

  const { years, months, days, eligible } = calcAgeEligibility(
    birthDate,
    cutoffDate,
    Number(minAge) || 0,
    Number(maxAge) || null
  );

  return (
    <div className="space-y-10">

      {/* =====================================================
          AGE ELIGIBILITY CALCULATOR
          ===================================================== */}

      <div className="card p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}

          <div className="space-y-4">

            <label className="block">
              <span className="text-sm text-muted">
                Date of Birth
              </span>

              <input
                type="date"
                className="input mt-1"
                value={birthDate}
                onChange={(e) =>
                  setBirthDate(e.target.value)
                }
              />
            </label>

            <label className="block">
              <span className="text-sm text-muted">
                Eligibility Cutoff Date
              </span>

              <input
                type="date"
                className="input mt-1"
                value={cutoffDate}
                onChange={(e) =>
                  setCutoffDate(e.target.value)
                }
              />
            </label>

            <Field
              label="Minimum Age Required"
              value={minAge}
              onChange={setMinAge}
            />

            <Field
              label="Maximum Age Allowed (0 = none)"
              value={maxAge}
              onChange={setMaxAge}
            />

          </div>


          {/* RESULT */}

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-3 items-center text-center">

            <p className="text-2xl font-bold">
              {years}y {months}m {days}d
            </p>

            <p
              className={`text-lg font-semibold ${
                eligible
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {eligible
                ? '✅ Eligible'
                : '❌ Not Eligible'}
            </p>

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
            Age Eligibility Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            This Age Eligibility Calculator helps you determine
            whether a person meets a specified minimum and maximum
            age requirement on a particular cutoff date.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Enter the date of birth, eligibility cutoff date,
            minimum required age and maximum permitted age. The
            calculator determines the exact age on the cutoff date
            and indicates whether the person falls within the
            specified eligibility range.
          </p>

        </section>


        {/* WHAT IS AGE ELIGIBILITY */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What Is Age Eligibility?
          </h2>

          <p className="text-muted leading-relaxed">
            Age eligibility means determining whether a person's
            age satisfies the age criteria specified for a particular
            application, examination, recruitment process,
            scholarship, admission or other opportunity.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            An eligibility rule may specify a minimum age, a maximum
            age, or both. For example, an opportunity may require a
            candidate to be at least 18 years old and not older than
            25 years on a specified cutoff date.
          </p>

        </section>


        {/* HOW IT WORKS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Does the Age Eligibility Calculator Work?
          </h2>

          <p className="text-muted leading-relaxed">
            The calculator compares the person's age on the selected
            eligibility cutoff date with the minimum and maximum age
            limits entered by the user.
          </p>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed mt-4">

            <li>
              Enter the person's date of birth.
            </li>

            <li>
              Enter the official eligibility cutoff date.
            </li>

            <li>
              Enter the minimum age requirement.
            </li>

            <li>
              Enter the maximum permitted age, if applicable.
            </li>

            <li>
              Check the calculated age and eligibility result.
            </li>

          </ol>

        </section>


        {/* CUTOFF DATE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why Is the Eligibility Cutoff Date Important?
          </h2>

          <p className="text-muted leading-relaxed">
            The cutoff date is important because age eligibility is
            often determined as of a specific date rather than on
            the day a person submits an application.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if an examination states that a candidate
            must be at least 18 years old as of 1 January, the
            candidate's age on that particular date is what matters.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Changing the cutoff date can therefore change the
            calculated age and, in some cases, the eligibility result.
          </p>

        </section>


        {/* MINIMUM AGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What Is Minimum Age Eligibility?
          </h2>

          <p className="text-muted leading-relaxed">
            A minimum age requirement specifies the youngest age a
            person must have reached to qualify for an opportunity.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, if the minimum age is 18, a person generally
            needs to have reached their 18th birthday by the relevant
            cutoff date.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            The exact interpretation depends on the official rules
            of the organization conducting the examination,
            recruitment or application process.
          </p>

        </section>


        {/* MAXIMUM AGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What Is Maximum Age Eligibility?
          </h2>

          <p className="text-muted leading-relaxed">
            A maximum age requirement specifies the oldest age a
            person may be on the applicable cutoff date.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For example, an application may specify that candidates
            must not be older than 25 years on a particular date.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Some opportunities do not have a maximum age limit. In
            that situation, the maximum-age field can be treated as
            unrestricted when supported by the applicable rules.
          </p>

        </section>


        {/* EXACT AGE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Is Exact Age Calculated?
          </h2>

          <p className="text-muted leading-relaxed">
            Age can be expressed in completed years, months and days.
            The calculator displays the age in this format to make
            the result easier to understand when an eligibility rule
            depends on an exact cutoff date.
          </p>

          <div className="card p-5 mt-5">

            <p className="text-center font-semibold">
              Example
            </p>

            <p className="text-center text-muted mt-3">
              Date of birth: 15 June 2005
            </p>

            <p className="text-center text-muted">
              Cutoff date: 15 June 2025
            </p>

            <p className="text-center font-bold text-brand-400 mt-3">
              Age: 20 years
            </p>

          </div>

        </section>


        {/* EXAMPLE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Age Eligibility Example
          </h2>

          <p className="text-muted leading-relaxed">
            Suppose a recruitment process requires candidates to be
            between 18 and 25 years old on a specified cutoff date.
          </p>

          <div className="card p-5 mt-5 space-y-3 text-muted">

            <p>
              <strong className="text-fg">
                Minimum age:
              </strong>{' '}
              18 years
            </p>

            <p>
              <strong className="text-fg">
                Maximum age:
              </strong>{' '}
              25 years
            </p>

            <p>
              <strong className="text-fg">
                Candidate's age:
              </strong>{' '}
              22 years
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Since 22 falls between the specified minimum and maximum
            ages, the candidate satisfies the numerical age range.
            Other eligibility conditions may still apply.
          </p>

        </section>


        {/* DATE OF BIRTH AND ELIGIBILITY */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How Date of Birth Affects Eligibility
          </h2>

          <p className="text-muted leading-relaxed">
            When an age requirement is based on a fixed cutoff date,
            even a difference of a few days in the date of birth can
            affect whether a person has reached the required age.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            This is particularly important for candidates who are
            close to the minimum or maximum age limit.
          </p>

        </section>


        {/* COMPETITIVE EXAMS */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Age Eligibility for Exams and Recruitment
          </h2>

          <p className="text-muted leading-relaxed">
            Many competitive examinations and recruitment processes
            specify age limits for applicants. The requirements can
            differ depending on the examination, organization,
            category, position and applicable rules.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Some recruitment rules may also provide age relaxations
            for eligible categories or specific circumstances.
            Therefore, the official notification should always be
            checked before making a final eligibility decision.
          </p>

        </section>


        {/* AGE RELAXATION */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            What Is Age Relaxation?
          </h2>

          <p className="text-muted leading-relaxed">
            Age relaxation is an additional age allowance provided
            under certain eligibility rules. It may allow eligible
            applicants to exceed the standard maximum age limit by
            a specified number of years.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Age relaxation rules vary by examination, organization
            and applicable category. This calculator does not
            automatically determine category-specific relaxation.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            If relaxation applies to you, enter the effective age
            limit according to the official eligibility rules.
          </p>

        </section>


        {/* HOW TO USE */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            How to Use This Age Eligibility Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Select your date of birth.
            </li>

            <li>
              Select the official eligibility cutoff date.
            </li>

            <li>
              Enter the minimum age required.
            </li>

            <li>
              Enter the maximum age allowed.
            </li>

            <li>
              Review your exact age on the cutoff date.
            </li>

            <li>
              Check whether the calculator shows Eligible or Not
              Eligible.
            </li>

          </ol>

        </section>


        {/* IMPORTANT */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Important Things to Check Before Applying
          </h2>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Check the exact cutoff date mentioned in the official
              notification.
            </li>

            <li>
              Confirm whether the age limit is calculated in
              completed years or using another specified method.
            </li>

            <li>
              Check whether your category qualifies for age
              relaxation.
            </li>

            <li>
              Verify whether the organization uses a different
              interpretation of the maximum age.
            </li>

            <li>
              Read the complete eligibility conditions before
              submitting an application.
            </li>

          </ul>

        </section>


        {/* CALCULATOR LIMITATION */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Is This Calculator an Official Eligibility Checker?
          </h2>

          <p className="text-muted leading-relaxed">
            No. This calculator provides a mathematical age-range
            check based on the dates and age limits entered by the
            user.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Actual eligibility may depend on additional conditions
            such as nationality, educational qualification, category,
            experience, physical requirements, application rules or
            age relaxation.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Always verify the final eligibility requirements using
            the official notification or organization website.
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
                How do I calculate my age for eligibility?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Enter your date of birth and the eligibility cutoff
                date. Your age on that cutoff date can then be
                compared with the required age range.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What is an eligibility cutoff date?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                It is the specific date on which your age is assessed
                for an eligibility requirement.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Does turning 18 on the cutoff date count?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                It may, depending on the wording of the official
                eligibility rule. Check whether the notification
                requires the candidate to have attained the age by
                that date.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I check both minimum and maximum age?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. Enter both limits to check whether the calculated
                age falls within the specified range.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                What if there is no maximum age?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                If the applicable rules have no maximum age, the
                maximum-age requirement can be treated as unrestricted.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Does age relaxation change eligibility?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes, where an official rule provides age relaxation,
                the effective maximum age may be higher than the
                standard limit.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can this calculator check government exam age limits?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                It can perform the numerical age-range calculation
                when you know the applicable minimum age, maximum age
                and cutoff date. It does not independently determine
                the complete eligibility criteria of a particular
                examination.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Why is my age different when I change the cutoff date?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Your age is calculated as of the selected cutoff
                date. Changing that date changes the point in time at
                which your age is measured.
              </p>

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                Can I use this calculator for job applications?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes, you can use it to check the numerical age
                requirement of a job application, provided you enter
                the correct cutoff date and age limits from the
                official recruitment notice.
              </p>

            </div>


          </div>

        </section>


      </article>

    </div>
  );
}


/* =========================================================
   INPUT FIELD
   ========================================================= */

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
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

    </label>
  );
}