'use client';

import { useEffect, useRef, useState } from 'react';
import { calcBMR } from '@/lib/calc-functions';

export default function BMRCalculator() {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('moderate');

  const { bmr, tdee } = calcBMR({
    weightKg: Number(weight) || 0,
    heightCm: Number(height) || 0,
    age: Number(age) || 0,
    gender,
    activityLevel: activity,
  });

  return (
    <>
      {/* =====================================================
          BMR CALCULATOR
      ===================================================== */}

      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUTS */}
          <div className="space-y-4">

            <Field
              label="Weight (kg)"
              value={weight}
              onChange={setWeight}
            />

            <Field
              label="Height (cm)"
              value={height}
              onChange={setHeight}
            />

            <Field
              label="Age"
              value={age}
              onChange={setAge}
            />

            {/* GENDER */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                  gender === 'male'
                    ? 'bg-brand-500'
                    : 'toggle-btn-inactive'
                }`}
              >
                Male
              </button>

              <button
                type="button"
                onClick={() => setGender('female')}
                className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                  gender === 'female'
                    ? 'bg-brand-500'
                    : 'toggle-btn-inactive'
                }`}
              >
                Female
              </button>
            </div>

            {/* ACTIVITY LEVEL */}
            <div className="block">
              <span className="text-sm text-muted">
                Activity Level
              </span>

              <ActivityDropdown
                value={activity}
                onChange={setActivity}
              />
            </div>

          </div>

          {/* RESULTS */}
          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="BMR (calories at rest)"
              value={bmr}
            />

            <Result
              label="Daily Calories Needed (TDEE)"
              value={tdee}
              big
            />

          </div>

        </div>
      </div>

      {/* =====================================================
          SEO CONTENT
      ===================================================== */}

      <section className="mt-10 space-y-10">

        {/* INTRODUCTION */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            BMR Calculator
          </h2>

          <p className="text-muted mt-3 leading-7">
            Use the BMR Calculator to estimate your Basal Metabolic
            Rate and understand approximately how many calories your
            body needs at rest. The calculator uses your weight,
            height, age, gender and activity level to provide an
            estimated BMR and daily calorie requirement.
          </p>
        </div>

        {/* WHAT IS BMR */}
        <div>
          <h2 className="text-2xl font-bold">
            What is BMR?
          </h2>

          <div className="space-y-4 mt-4">
            <p className="text-muted leading-7">
              Basal Metabolic Rate (BMR) is the estimated number of
              calories your body needs to perform essential functions
              while at rest. These functions include breathing,
              circulation, maintaining body temperature and supporting
              normal organ activity.
            </p>

            <p className="text-muted leading-7">
              BMR does not include calories burned through exercise,
              walking, work or other physical activities. It represents
              the energy your body requires for basic physiological
              functions.
            </p>
          </div>
        </div>

        {/* BMR VS TDEE */}
        <div>
          <h2 className="text-2xl font-bold">
            What is the difference between BMR and TDEE?
          </h2>

          <div className="space-y-4 mt-4">
            <p className="text-muted leading-7">
              BMR represents the estimated calories your body requires
              while at rest. TDEE, or Total Daily Energy Expenditure,
              estimates the total calories you may use during a normal
              day after considering your physical activity.
            </p>

            <p className="text-muted leading-7">
              Because TDEE includes physical activity and daily
              movement, it is generally higher than BMR.
            </p>
          </div>
        </div>

        {/* HOW BMR IS CALCULATED */}
        <div>
          <h2 className="text-2xl font-bold">
            How is BMR calculated?
          </h2>

          <div className="space-y-4 mt-4">
            <p className="text-muted leading-7">
              BMR can be estimated using mathematical formulas that
              consider factors such as body weight, height, age and
              gender.
            </p>

            <p className="text-muted leading-7">
              This calculator uses the information entered by the user
              to estimate BMR and then considers the selected activity
              level to estimate daily calorie requirements.
            </p>
          </div>
        </div>

        {/* HOW TO USE */}
        <div>
          <h2 className="text-2xl font-bold">
            How to use the BMR Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 mt-4 text-muted leading-7">
            <li>Enter your weight in kilograms.</li>
            <li>Enter your height in centimetres.</li>
            <li>Enter your age in years.</li>
            <li>Select your gender.</li>
            <li>Select your usual activity level.</li>
            <li>
              View your estimated BMR and daily calorie requirement.
            </li>
          </ol>
        </div>

        {/* ACTIVITY LEVELS */}
        <div>
          <h2 className="text-2xl font-bold">
            What are the different activity levels?
          </h2>

          <div className="space-y-4 mt-4">
            <p className="text-muted leading-7">
              <strong>Sedentary:</strong> Little or no regular
              exercise.
            </p>

            <p className="text-muted leading-7">
              <strong>Light:</strong> Physical activity or exercise
              around 1–3 days per week.
            </p>

            <p className="text-muted leading-7">
              <strong>Moderate:</strong> Exercise or physical activity
              around 3–5 days per week.
            </p>

            <p className="text-muted leading-7">
              <strong>Active:</strong> Exercise or physical activity
              around 6–7 days per week.
            </p>

            <p className="text-muted leading-7">
              <strong>Very Active:</strong> A highly active lifestyle,
              such as demanding physical work combined with regular
              exercise.
            </p>
          </div>
        </div>

        {/* WHY BMR USEFUL */}
        <div>
          <h2 className="text-2xl font-bold">
            Why is BMR useful?
          </h2>

          <div className="space-y-4 mt-4">
            <p className="text-muted leading-7">
              BMR can provide a starting point for understanding your
              approximate energy requirements. It can be useful when
              planning general calorie intake, weight-management goals
              and daily nutrition.
            </p>

            <p className="text-muted leading-7">
              BMR is an estimate, and actual calorie requirements can
              vary between individuals depending on several factors.
            </p>
          </div>
        </div>

        {/* BMR AND WEIGHT */}
        <div>
          <h2 className="text-2xl font-bold">
            BMR and weight management
          </h2>

          <div className="space-y-4 mt-4">
            <p className="text-muted leading-7">
              Understanding your estimated calorie requirements can
              help you make more informed decisions about your daily
              food intake and physical activity.
            </p>

            <p className="text-muted leading-7">
              For weight loss, weight gain or weight maintenance,
              calorie requirements should be considered together with
              activity, nutrition and individual circumstances rather
              than relying on BMR alone.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mt-6">

            <FAQ
              question="What does BMR stand for?"
              answer="BMR stands for Basal Metabolic Rate. It is an estimate of the calories your body requires to maintain essential functions while at rest."
            />

            <FAQ
              question="What is a good BMR?"
              answer="There is no single ideal BMR. BMR varies depending on factors such as age, gender, height and weight."
            />

            <FAQ
              question="Is BMR the same as daily calorie needs?"
              answer="No. BMR represents estimated calories required at rest, while daily calorie needs generally include calories used through physical activity and normal daily movement."
            />

            <FAQ
              question="What is TDEE?"
              answer="TDEE stands for Total Daily Energy Expenditure. It is an estimate of the total calories your body uses in a typical day, including physical activity."
            />

            <FAQ
              question="Does BMR change with age?"
              answer="Yes. BMR can change as a person ages because factors such as body composition and metabolism can change over time."
            />

            <FAQ
              question="Does gender affect BMR?"
              answer="Gender is one of the factors commonly used by BMR estimation formulas, along with age, height and weight."
            />

            <FAQ
              question="Can I use BMR to calculate calories for weight loss?"
              answer="BMR can be used as a starting point for estimating calorie requirements, but weight-loss calorie targets should also consider activity level and individual circumstances."
            />

            <FAQ
              question="Is the BMR Calculator accurate?"
              answer="The calculator provides an estimate based on the information entered and the formula used. Actual energy requirements can vary between individuals."
            />

          </div>
        </div>

      </section>
    </>
  );
}


/* =========================================================
   FIELD
========================================================= */

function Field({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-muted">
        {label}
      </span>

      <input
        type="number"
        className="input mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}


/* =========================================================
   ACTIVITY DROPDOWN
========================================================= */

function ActivityDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    {
      value: 'sedentary',
      label: 'Sedentary (little/no exercise)',
    },
    {
      value: 'light',
      label: 'Light (1-3 days/week)',
    },
    {
      value: 'moderate',
      label: 'Moderate (3-5 days/week)',
    },
    {
      value: 'active',
      label: 'Active (6-7 days/week)',
    },
    {
      value: 'veryActive',
      label: 'Very Active (physical job)',
    },
  ];

  const selected =
    options.find((option) => option.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

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

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fd-dropdown-button"
      >
        <span>
          {selected.label}
        </span>

        <span className="text-sm">
          {open ? '▲' : '▼'}
        </span>
      </button>

      {open && (
        <div className="fd-dropdown-menu">

          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`fd-dropdown-option ${
                option.value === value
                  ? 'selected'
                  : ''
              }`}
            >
              {option.label}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}


/* =========================================================
   RESULT
========================================================= */

function Result({ label, value, big }) {
  return (
    <div>
      <p className="text-xs text-muted">
        {label}
      </p>

      <p
        className={
          big
            ? 'text-3xl font-extrabold text-brand-400'
            : 'text-2xl font-bold'
        }
      >
        {value.toFixed(0)} kcal
      </p>
    </div>
  );
}


/* =========================================================
   FAQ
========================================================= */

function FAQ({ question, answer }) {
  return (
    <div className="">
      <h3 className="text-lg font-semibold">
        {question}
      </h3>

      <p className="text-muted leading-7 mt-2">
        {answer}
      </p>
    </div>
  );
}