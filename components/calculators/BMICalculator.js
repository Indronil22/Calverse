'use client';

import { useState } from 'react';
import { calcBMI } from '@/lib/calc-functions';

export default function BMICalculator() {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(170);

  const { bmi, category } = calcBMI(
    Number(weight) || 0,
    Number(height) || 1
  );

  const colors = {
    Underweight: 'text-yellow-400',
    Normal: 'text-green-400',
    Overweight: 'text-orange-400',
    Obese: 'text-red-400',
  };

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

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
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <p className="text-3xl font-extrabold">
              {bmi.toFixed(1)}
            </p>

            <p className={`text-lg font-semibold ${colors[category]}`}>
              {category}
            </p>

          </div>

        </div>

        <p className="text-xs text-muted-2 mt-4">
          BMI is a general screening tool, not a diagnosis — talk to a
          doctor for a full picture of your health.
        </p>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            BMI Calculator
          </h2>

          <p className="text-muted leading-7">
            The BMI Calculator estimates Body Mass Index using your
            weight and height. Enter your weight in kilograms and height
            in centimetres to calculate your BMI and see the corresponding
            general BMI category.
          </p>

          <p className="text-muted leading-7 mt-4">
            BMI is commonly used as a general screening measurement to
            compare body weight with height. It can provide a simple
            starting point for understanding weight-related measurements.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            What is BMI?
          </h2>

          <p className="text-muted leading-7">
            Body Mass Index, commonly called BMI, is a numerical
            measurement calculated using a person's weight and height.
            It is commonly used as a screening measure to place a person's
            weight into a general category.
          </p>

          <p className="text-muted leading-7 mt-4">
            BMI does not directly measure body fat and does not provide a
            complete assessment of an individual's health.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            How is BMI Calculated?
          </h2>

          <p className="text-muted leading-7">
            BMI is calculated by dividing body weight in kilograms by
            height in metres squared.
          </p>

          <div className="bg-fg/5 rounded-xl p-5 mt-4">
            <p className="font-semibold mb-3">
              BMI Formula
            </p>

            <p className="text-muted leading-7">
              BMI = Weight (kg) ÷ Height² (m²)
            </p>
          </div>

          <p className="text-muted leading-7 mt-4">
            The calculator converts the entered height from centimetres
            to metres before applying the formula.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            BMI Categories
          </h2>

          <p className="text-muted leading-7">
            BMI values are commonly grouped into general categories.
            These categories are useful for screening but should not be
            interpreted as a complete assessment of health.
          </p>

          <div className="bg-fg/5 rounded-xl p-5 mt-4">
            <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
              <li>Underweight</li>
              <li>Normal weight</li>
              <li>Overweight</li>
              <li>Obesity</li>
            </ul>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            BMI Calculation Example
          </h2>

          <p className="text-muted leading-7">
            Suppose a person weighs 65 kg and has a height of 170 cm.
            The height is converted to 1.70 metres before calculating
            BMI.
          </p>

          <div className="bg-fg/5 rounded-xl p-5 mt-4">
            <p className="text-muted leading-7">
              BMI = 65 ÷ (1.70 × 1.70)
            </p>

            <p className="font-semibold mt-2">
              BMI ≈ 22.5
            </p>
          </div>

          <p className="text-muted leading-7 mt-4">
            The calculator automatically performs this calculation when
            you enter your weight and height.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why is BMI Used?
          </h2>

          <p className="text-muted leading-7">
            BMI provides a simple numerical measurement that can be used
            for general screening and population-level comparisons.
            Because it uses only height and weight, it is quick to
            calculate and easy to understand.
          </p>

          <p className="text-muted leading-7 mt-4">
            However, BMI should be considered alongside other relevant
            factors rather than being used as the only measure of an
            individual's health or fitness.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Limitations of BMI
          </h2>

          <p className="text-muted leading-7">
            BMI does not distinguish between muscle mass, fat mass,
            bone mass and other components of body weight. As a result,
            people with different body compositions can have the same
            BMI.
          </p>

          <p className="text-muted leading-7 mt-4">
            Factors such as age, sex, muscle mass, body composition and
            overall health may also be relevant when interpreting BMI.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            BMI for Different People
          </h2>

          <p className="text-muted leading-7">
            BMI can be useful as a general screening measurement for
            many adults, but the interpretation may differ depending on
            the individual and the context in which it is being used.
          </p>

          <p className="text-muted leading-7 mt-4">
            Children, teenagers, pregnant people, athletes and people
            with unusually high or low muscle mass may require different
            methods of assessment. A healthcare professional can provide
            more appropriate guidance where necessary.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            BMI and Healthy Weight
          </h2>

          <p className="text-muted leading-7">
            A BMI category should not be treated as a diagnosis or as a
            complete definition of a healthy weight. It is one measurement
            that can be considered together with other health indicators.
          </p>

          <p className="text-muted leading-7 mt-4">
            If you have concerns about your weight, nutrition, fitness or
            overall health, consider discussing your individual situation
            with a qualified healthcare professional.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Using the BMI Calculator
          </h2>

          <p className="text-muted leading-7">
            Enter your current weight in kilograms and height in
            centimetres. The calculator automatically calculates the BMI
            value and displays the corresponding general category.
          </p>

          <p className="text-muted leading-7 mt-4">
            For a more useful result, enter accurate and recent height
            and weight measurements.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Important Information About BMI
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
            <li>
              BMI is calculated using weight and height.
            </li>

            <li>
              BMI is a screening measurement rather than a diagnosis.
            </li>

            <li>
              BMI does not directly measure body fat.
            </li>

            <li>
              Body composition can affect how BMI should be interpreted.
            </li>

            <li>
              Individual health should not be judged using BMI alone.
            </li>

            <li>
              A healthcare professional can provide personalised
              interpretation when required.
            </li>
          </ul>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About BMI
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                What is a BMI calculator?
              </h3>

              <p className="text-muted leading-7">
                A BMI calculator uses weight and height to calculate
                Body Mass Index and display the corresponding general
                BMI category.
              </p>
            </div>


            <div>
              <h3 className="font-semibold mb-2">
                What is the BMI formula?
              </h3>

              <p className="text-muted leading-7">
                BMI is calculated by dividing weight in kilograms by
                height in metres squared.
              </p>
            </div>


            <div>
              <h3 className="font-semibold mb-2">
                What information do I need to calculate BMI?
              </h3>

              <p className="text-muted leading-7">
                You need your weight in kilograms and your height in
                centimetres or metres.
              </p>
            </div>


            <div>
              <h3 className="font-semibold mb-2">
                Does BMI measure body fat?
              </h3>

              <p className="text-muted leading-7">
                No. BMI uses weight and height and does not directly
                measure body fat or body composition.
              </p>
            </div>


            <div>
              <h3 className="font-semibold mb-2">
                Can muscular people have a high BMI?
              </h3>

              <p className="text-muted leading-7">
                Yes. Because BMI does not distinguish between muscle and
                fat, people with substantial muscle mass may have a high
                BMI despite having a different body composition.
              </p>
            </div>


            <div>
              <h3 className="font-semibold mb-2">
                Is BMI a medical diagnosis?
              </h3>

              <p className="text-muted leading-7">
                No. BMI is a general screening measurement and should
                not be treated as a diagnosis or a complete assessment
                of health.
              </p>
            </div>


            <div>
              <h3 className="font-semibold mb-2">
                Is the BMI calculator suitable for everyone?
              </h3>

              <p className="text-muted leading-7">
                BMI may not be interpreted in the same way for every
                person. Certain groups, including children, pregnant
                people and some athletes, may require other methods of
                assessment.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}


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