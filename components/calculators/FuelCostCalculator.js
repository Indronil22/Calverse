'use client';

import { useState } from 'react';
import { calcFuelCost } from '@/lib/calc-functions';

export default function FuelCostCalculator() {
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
          ========================= */}

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
          DETAILED SEO CONTENT
          ========================= */}

      <article className="space-y-10">

        {/* INTRODUCTION */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Fuel Cost Calculator
          </h2>

          <p className="text-muted leading-relaxed">
            The Fuel Cost Calculator helps you estimate how much fuel
            your vehicle will need for a trip and how much the journey
            is expected to cost. Enter your trip distance, vehicle
            mileage and current fuel price to calculate the estimated
            fuel requirement, cost per kilometre and total fuel cost.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            This calculator can be useful for cars, motorcycles,
            scooters and other vehicles where fuel consumption is
            measured in kilometres per litre.
          </p>
        </section>


        {/* WHAT IS FUEL COST */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            What Is Fuel Cost?
          </h2>

          <p className="text-muted leading-relaxed">
            Fuel cost is the amount of money spent on petrol, diesel
            or another fuel required to travel a particular distance.
            The cost depends mainly on the distance travelled, the
            vehicle's fuel efficiency and the price of fuel.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            A vehicle with better mileage generally requires less fuel
            to cover the same distance. Similarly, an increase in fuel
            price increases the cost of travelling the same distance.
          </p>
        </section>


        {/* HOW CALCULATOR WORKS */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            How Does the Fuel Cost Calculator Work?
          </h2>

          <p className="text-muted leading-relaxed">
            The calculator uses the distance you plan to travel,
            your vehicle's mileage and the fuel price to estimate the
            amount of fuel required and the total cost.
          </p>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed mt-4">

            <li>
              Enter the total trip distance in kilometres.
            </li>

            <li>
              Enter the vehicle's mileage in kilometres per litre.
            </li>

            <li>
              Enter the current fuel price per litre.
            </li>

            <li>
              The calculator estimates the litres of fuel required.
            </li>

            <li>
              The calculator then estimates the cost per kilometre
              and total fuel cost.
            </li>

          </ol>
        </section>


        {/* FORMULA */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Fuel Cost Calculation Formula
          </h2>

          <p className="text-muted leading-relaxed">
            The basic fuel consumption calculation is:
          </p>

          <div className="card p-5 mt-4 text-center">
            <p className="font-semibold">
              Fuel Required = Distance ÷ Mileage
            </p>
          </div>

          <p className="text-muted leading-relaxed mt-5">
            Once the required fuel is calculated, the estimated fuel
            cost can be calculated as:
          </p>

          <div className="card p-5 mt-4 text-center">
            <p className="font-semibold">
              Fuel Cost = Fuel Required × Fuel Price
            </p>
          </div>

          <p className="text-muted leading-relaxed mt-5">
            The approximate cost per kilometre is:
          </p>

          <div className="card p-5 mt-4 text-center">
            <p className="font-semibold">
              Cost per km = Fuel Price ÷ Mileage
            </p>
          </div>
        </section>


        {/* EXAMPLE */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Fuel Cost Calculation Example
          </h2>

          <p className="text-muted leading-relaxed">
            Suppose you are planning a 300 km trip with a vehicle
            that gives an average mileage of 15 km/l and the fuel
            price is ₹100 per litre.
          </p>

          <div className="card p-5 mt-5 space-y-3 text-muted">

            <p>
              <strong className="text-fg">
                Distance:
              </strong>{' '}
              300 km
            </p>

            <p>
              <strong className="text-fg">
                Mileage:
              </strong>{' '}
              15 km/l
            </p>

            <p>
              <strong className="text-fg">
                Fuel price:
              </strong>{' '}
              ₹100/litre
            </p>

            <p>
              <strong className="text-fg">
                Fuel required:
              </strong>{' '}
              300 ÷ 15 = 20 litres
            </p>

            <p>
              <strong className="text-fg">
                Estimated fuel cost:
              </strong>{' '}
              20 × ₹100 = ₹2,000
            </p>

          </div>

          <p className="text-muted leading-relaxed mt-4">
            Therefore, the estimated fuel expense for the trip would
            be approximately ₹2,000 based on the assumed mileage and
            fuel price.
          </p>
        </section>


        {/* MILEAGE */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why Does Vehicle Mileage Matter?
          </h2>

          <p className="text-muted leading-relaxed">
            Mileage represents how far a vehicle can travel using a
            given amount of fuel. In India, vehicle mileage is commonly
            expressed as kilometres per litre, or km/l.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Higher mileage generally means that less fuel is required
            to cover the same distance. Therefore, two vehicles
            travelling the same route can have significantly different
            fuel costs.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Actual mileage can vary depending on traffic, road
            conditions, riding or driving style, vehicle load,
            tyre pressure, maintenance and weather.
          </p>
        </section>


        {/* TRIP COST */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Fuel Cost for a Trip
          </h2>

          <p className="text-muted leading-relaxed">
            To estimate the fuel expense for a trip, first determine
            the total distance you expect to travel. Then divide that
            distance by the vehicle's expected mileage.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Multiply the resulting fuel requirement by the current
            price per litre to estimate the total fuel expense.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For a round trip, remember to include the distance for
            both directions.
          </p>
        </section>


        {/* ROUND TRIP */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Fuel Cost for a Round Trip
          </h2>

          <p className="text-muted leading-relaxed">
            If the one-way distance is known, multiply it by two to
            estimate the distance of a return journey.
          </p>

          <div className="card p-5 mt-4 text-center">
            <p className="font-semibold">
              Round Trip Distance = One-Way Distance × 2
            </p>
          </div>

          <p className="text-muted leading-relaxed mt-4">
            You can then enter the round-trip distance into the
            calculator to estimate the total fuel requirement and
            fuel cost.
          </p>
        </section>


        {/* COST PER KM */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            What Is Fuel Cost Per Kilometre?
          </h2>

          <p className="text-muted leading-relaxed">
            Fuel cost per kilometre indicates approximately how much
            you spend on fuel for every kilometre travelled.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            It can be calculated by dividing the fuel price per litre
            by the vehicle's mileage in kilometres per litre.
          </p>

          <div className="card p-5 mt-4 text-center">
            <p className="font-semibold">
              Cost per km = Fuel Price ÷ Mileage
            </p>
          </div>
        </section>


        {/* DAILY COMMUTE */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Calculate Fuel Cost for Daily Commute
          </h2>

          <p className="text-muted leading-relaxed">
            The calculator can also be used to estimate fuel expenses
            for regular commuting. Enter the approximate daily
            distance travelled and your vehicle's average mileage.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For monthly planning, multiply the estimated daily fuel
            expense by the number of commuting days in the month.
            This provides an approximate monthly fuel budget.
          </p>
        </section>


        {/* LONG DISTANCE */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Fuel Cost for Long-Distance Travel
          </h2>

          <p className="text-muted leading-relaxed">
            Before a long-distance journey, estimating fuel cost can
            help you prepare a travel budget. Enter the expected
            distance, realistic vehicle mileage and the applicable
            fuel price.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For longer journeys, it is sensible to account for
            possible variations in mileage caused by traffic,
            highways, hills, weather and vehicle load.
          </p>
        </section>


        {/* INDIA */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Fuel Cost Calculation in India
          </h2>

          <p className="text-muted leading-relaxed">
            Fuel prices in India can vary by fuel type and location.
            Petrol and diesel prices may differ between cities and
            can change over time.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For a more realistic estimate, use the current price per
            litre applicable to your location rather than relying on
            an old or average fuel price.
          </p>
        </section>


        {/* REAL WORLD FACTORS */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Factors That Affect Actual Fuel Cost
          </h2>

          <p className="text-muted leading-relaxed">
            The calculator provides an estimate based on the mileage
            entered by the user. Actual fuel consumption can be
            different because of several factors.
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed mt-4">

            <li>
              Traffic congestion and frequent stopping
            </li>

            <li>
              Highway versus city driving
            </li>

            <li>
              Driving or riding style
            </li>

            <li>
              Vehicle load
            </li>

            <li>
              Tyre pressure
            </li>

            <li>
              Vehicle maintenance
            </li>

            <li>
              Road and weather conditions
            </li>

            <li>
              Air-conditioning usage
            </li>

            <li>
              Fuel quality and operating conditions
            </li>

          </ul>
        </section>


        {/* HOW TO USE */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            How to Use the Fuel Cost Calculator
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Enter the distance you plan to travel in kilometres.
            </li>

            <li>
              Enter your vehicle's expected mileage in km/l.
            </li>

            <li>
              Enter the current fuel price per litre.
            </li>

            <li>
              Check the estimated amount of fuel required.
            </li>

            <li>
              Check the estimated fuel cost per kilometre.
            </li>

            <li>
              Check the total estimated fuel cost for the trip.
            </li>

          </ol>
        </section>


        {/* TIPS */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Tips for Reducing Fuel Expenses
          </h2>

          <ul className="list-disc list-inside space-y-3 text-muted leading-relaxed">

            <li>
              Maintain steady speeds whenever road conditions allow.
            </li>

            <li>
              Avoid unnecessary rapid acceleration and braking.
            </li>

            <li>
              Keep tyres properly inflated according to the
              manufacturer's recommendations.
            </li>

            <li>
              Avoid carrying unnecessary weight.
            </li>

            <li>
              Keep the vehicle properly maintained.
            </li>

            <li>
              Plan routes efficiently to reduce unnecessary travel.
            </li>

          </ul>
        </section>


        {/* LIMITATIONS */}

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Is the Fuel Cost Calculator Exact?
          </h2>

          <p className="text-muted leading-relaxed">
            No. The result is an estimate based on the distance,
            mileage and fuel price entered by the user.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Your vehicle's actual fuel consumption may differ from
            its claimed or expected mileage because real-world
            driving conditions can affect fuel efficiency.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            For budgeting purposes, consider using a realistic
            mileage figure based on your own vehicle's typical
            performance.
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
                How do I calculate fuel cost for a trip?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Divide the trip distance by the vehicle's mileage to
                find the estimated fuel requirement, then multiply
                the fuel requirement by the fuel price per litre.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                How much fuel will I need for 100 km?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                The amount depends on your vehicle's mileage. For
                example, a vehicle delivering 20 km/l would require
                approximately 5 litres to travel 100 km.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                How is fuel cost per km calculated?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Fuel cost per kilometre can be estimated by dividing
                the fuel price per litre by the vehicle's mileage in
                kilometres per litre.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                Can I calculate petrol cost using this calculator?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. Enter the current petrol price per litre along
                with your trip distance and vehicle mileage.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                Can I use this calculator for a car?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. You can use it for cars as long as you know the
                approximate mileage in kilometres per litre.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                Can I use it for a motorcycle or scooter?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. Enter the motorcycle or scooter's expected
                mileage and the applicable fuel price.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                Does higher mileage reduce fuel cost?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Generally, yes. A higher km/l figure means the vehicle
                requires less fuel to cover the same distance.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                Does fuel price affect cost per kilometre?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. If the price per litre increases while mileage
                remains unchanged, the fuel cost per kilometre also
                increases.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                Can I calculate round-trip fuel cost?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Yes. Enter the total distance for both directions.
                Alternatively, multiply the one-way distance by two
                before entering it.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                Why is my actual fuel cost different from the
                calculator result?
              </h3>

              <p className="text-muted leading-relaxed mt-2">
                Actual fuel consumption can vary because of traffic,
                driving style, road conditions, vehicle load,
                maintenance, tyre pressure and other factors.
              </p>
            </div>

          </div>
        </section>

      </article>
    </div>
  );
}


/* =========================
   INPUT FIELD
   ========================= */

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