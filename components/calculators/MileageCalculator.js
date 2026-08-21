'use client';

import { useState } from 'react';
import { calcFuelCost } from '@/lib/calc-functions';

export default function MileageCalculator() {
  const [distance, setDistance] = useState(100);
  const [mileage, setMileage] = useState(15);
  const [price, setPrice] = useState(100);

  const { litersNeeded, cost, costPerKm } = calcFuelCost(
    Number(distance) || 0,
    Number(mileage) || 1,
    Number(price) || 0
  );

  return (
    <div className="space-y-10">

      {/* =========================
          CALCULATOR
      ========================== */}

      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">

            <Field
              label="Trip Distance (km)"
              value={distance}
              onChange={setDistance}
            />

            <Field
              label="Vehicle Mileage (km/l)"
              value={mileage}
              onChange={setMileage}
            />

            <Field
              label="Fuel Price (₹/l)"
              value={price}
              onChange={setPrice}
            />

          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">

            <Result
              label="Fuel Needed"
              value={`${litersNeeded.toFixed(2)} L`}
            />

            <Result
              label="Cost per km"
              value={`₹${costPerKm.toFixed(2)}`}
            />

            <Result
              label="Total Trip Cost"
              value={`₹${cost.toFixed(0)}`}
              big
            />

          </div>

        </div>
      </div>


      {/* =========================
          MILEAGE SEO CONTENT
          NO CARD / NO BOX
      ========================== */}

      <article className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Mileage Calculator
          </h2>

          <p className="text-muted leading-7">
            This free Mileage Calculator helps you understand vehicle fuel
            efficiency and estimate the fuel required for a journey. Enter
            the distance, vehicle mileage and current fuel price to estimate
            fuel consumption and travel cost.
          </p>

          <p className="text-muted leading-7 mt-3">
            The calculator can be useful for cars, motorcycles, scooters and
            other fuel-powered vehicles. It can help you estimate how much
            fuel a trip may require and how much the journey may cost based
            on the mileage of your vehicle.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            What Is Vehicle Mileage?
          </h2>

          <p className="text-muted leading-7">
            Vehicle mileage refers to the distance a vehicle can travel using
            a specific amount of fuel. In India, mileage is commonly expressed
            as kilometres per litre, written as km/L or kmpl.
          </p>

          <p className="text-muted leading-7 mt-3">
            For example, if a vehicle has a mileage of 15 km/L, it can
            theoretically travel around 15 kilometres using one litre of
            fuel. Actual mileage can vary depending on driving conditions
            and how the vehicle is used.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            How Is Mileage Calculated?
          </h2>

          <p className="text-muted leading-7">
            Vehicle mileage can be calculated by dividing the distance
            travelled by the amount of fuel consumed.
          </p>

          <p className="font-semibold mt-4">
            Mileage = Distance Travelled ÷ Fuel Consumed
          </p>

          <p className="text-muted leading-7 mt-3">
            For example, if a car travels 300 km and consumes 20 litres of
            fuel:
          </p>

          <p className="font-semibold mt-2">
            300 ÷ 20 = 15 km/L
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            How to Use the Mileage Calculator
          </h2>

          <ol className="list-decimal pl-6 space-y-2 text-muted">
            <li>Enter the distance of your journey in kilometres.</li>
            <li>Enter your vehicle&apos;s mileage in km/L.</li>
            <li>Enter the current fuel price per litre.</li>
            <li>Review the estimated fuel requirement.</li>
            <li>Check the estimated cost per kilometre and total trip cost.</li>
          </ol>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Car Mileage Calculator
          </h2>

          <p className="text-muted leading-7">
            A car mileage calculator can help estimate fuel consumption and
            travel expenses for a car. Enter the expected journey distance,
            the car&apos;s mileage and the current fuel price to get an
            approximate estimate.
          </p>

          <p className="text-muted leading-7 mt-3">
            Actual car mileage may differ from the manufacturer&apos;s
            claimed figure because of traffic, road conditions, driving
            habits, vehicle load, tyre pressure and maintenance.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Bike Mileage Calculator
          </h2>

          <p className="text-muted leading-7">
            The calculator can also be used for motorcycles and scooters.
            Two-wheelers are commonly compared based on their km/L fuel
            efficiency, making mileage an important factor when estimating
            regular commuting and long-distance travel expenses.
          </p>

          <p className="text-muted leading-7 mt-3">
            Actual bike mileage can depend on riding style, traffic,
            passenger load, tyre pressure, road conditions and regular
            maintenance.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            What Affects Vehicle Mileage?
          </h2>

          <p className="text-muted leading-7">
            The mileage of a vehicle can change depending on several
            conditions. Two vehicles with the same claimed mileage may
            produce different real-world results.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted mt-4">
            <li>Driving or riding style</li>
            <li>Traffic conditions</li>
            <li>Road and weather conditions</li>
            <li>Vehicle load</li>
            <li>Tyre pressure</li>
            <li>Vehicle maintenance</li>
            <li>Engine condition</li>
            <li>Frequent acceleration and braking</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Claimed Mileage vs Real-World Mileage
          </h2>

          <p className="text-muted leading-7">
            A vehicle&apos;s claimed mileage may not always match the
            mileage experienced during everyday driving. Manufacturer
            figures are generally obtained under specific testing
            conditions, while real-world driving includes traffic,
            varying speeds, road conditions, passengers and different
            driving habits.
          </p>

          <p className="text-muted leading-7 mt-3">
            For a more realistic estimate, you can calculate mileage using
            the actual distance travelled and fuel consumed by your vehicle.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            How to Improve Vehicle Mileage
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>Maintain the recommended tyre pressure.</li>
            <li>Avoid unnecessary rapid acceleration.</li>
            <li>Avoid unnecessary hard braking.</li>
            <li>Reduce unnecessary engine idling.</li>
            <li>Keep the vehicle properly serviced.</li>
            <li>Avoid carrying unnecessary additional weight.</li>
            <li>Maintain a steady speed whenever road conditions allow.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-3">
            Mileage and Fuel Cost
          </h2>

          <p className="text-muted leading-7">
            Mileage directly affects the amount of fuel required for a
            journey. A vehicle with better fuel efficiency generally
            requires less fuel to cover the same distance, although the
            actual cost also depends on the current fuel price.
          </p>

          <p className="text-muted leading-7 mt-3">
            Using the mileage, journey distance and fuel price together
            can provide a useful estimate of the expected fuel expense
            for a trip.
          </p>
        </section>


        {/* =========================
            FAQ
        ========================== */}

        <section>
          <h2 className="text-2xl font-bold mb-5">
            Frequently Asked Questions About Mileage
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="font-semibold">
                What is a mileage calculator?
              </h3>

              <p className="text-muted leading-7 mt-1">
                A mileage calculator is a tool that helps estimate vehicle
                fuel efficiency, fuel consumption and related travel costs
                using distance, mileage and fuel price.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                How do I calculate vehicle mileage?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Divide the total distance travelled by the amount of fuel
                consumed. For example, travelling 300 km using 20 litres
                of fuel gives a mileage of 15 km/L.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                What does km/L mean?
              </h3>

              <p className="text-muted leading-7 mt-1">
                km/L means kilometres per litre. It represents the distance
                a vehicle can travel using one litre of fuel.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Can I use this calculator for a bike?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Yes. The calculator can be used for motorcycles, scooters,
                cars and other vehicles by entering the appropriate mileage
                value.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Can I use this calculator for a car?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Yes. Enter the car&apos;s mileage, trip distance and fuel
                price to estimate fuel consumption and the approximate
                trip cost.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Why is my actual mileage lower than the claimed mileage?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Real-world mileage can be affected by traffic, driving
                behaviour, road conditions, vehicle load, tyre pressure,
                maintenance and other factors.
              </p>
            </div>


            <div>
              <h3 className="font-semibold">
                Does better mileage reduce fuel costs?
              </h3>

              <p className="text-muted leading-7 mt-1">
                Generally, a vehicle with higher fuel efficiency needs less
                fuel to cover the same distance. However, the actual fuel
                cost also depends on the distance travelled and fuel price.
              </p>
            </div>

          </div>
        </section>

      </article>
    </div>
  );
}


/* =========================
   FIELD
========================= */

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


/* =========================
   RESULT
========================= */

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
        {value}
      </p>
    </div>
  );
}