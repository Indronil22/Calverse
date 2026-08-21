'use client';

import { useEffect, useState } from 'react';
import { calcUnitConversion } from '@/lib/calc-functions';

const unitOptions = {
  length: ['m', 'km', 'cm', 'mm', 'mile', 'yard', 'foot', 'inch'],
  weight: ['kg', 'g', 'mg', 'tonne', 'pound', 'ounce'],
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
  volume: ['liter', 'ml', 'gallon', 'cup', 'tablespoon', 'teaspoon'],
};

const categoryLabels = {
  length: 'Length',
  weight: 'Weight',
  temperature: 'Temperature',
  volume: 'Volume',
};

export default function UnitConversionCalculator() {
  const [category, setCategory] = useState('length');
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState('km');
  const [toUnit, setToUnit] = useState('m');

  // Only one dropdown can be open at a time
  const [openDropdown, setOpenDropdown] = useState(null);

  const { result } = calcUnitConversion(
    Number(value) || 0,
    category,
    fromUnit,
    toUnit
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleOutsideClick(event) {
      if (!event.target.closest('.unit-dropdown')) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  function toggleDropdown(name) {
    setOpenDropdown((current) =>
      current === name ? null : name
    );
  }

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);

    setFromUnit(unitOptions[newCategory][0]);
    setToUnit(unitOptions[newCategory][1]);

    setOpenDropdown(null);
  }

  function handleFromChange(unit) {
    setFromUnit(unit);
    setOpenDropdown(null);
  }

  function handleToChange(unit) {
    setToUnit(unit);
    setOpenDropdown(null);
  }

  return (
    <div className="space-y-10">

      {/* =================================================
          CALCULATOR
          ================================================= */}

      <div className="card p-6 md:p-8 relative z-20">
        <div className="grid md:grid-cols-2 gap-6">

          {/* =================================================
              INPUTS
              ================================================= */}

          <div className="space-y-4">

            {/* CATEGORY */}
            <div className="block">
              <span className="text-sm text-muted">
                Category
              </span>

              <div className="relative mt-1 unit-dropdown">

                <button
                  type="button"
                  onClick={() =>
                    toggleDropdown('category')
                  }
                  className="fd-dropdown-button"
                >
                  <span>
                    {categoryLabels[category]}
                  </span>

                  <span className="text-sm">
                    {openDropdown === 'category'
                      ? '▲'
                      : '▼'}
                  </span>
                </button>

                {openDropdown === 'category' && (
                  <div className="fd-dropdown-menu z-[100]">

                    {Object.keys(unitOptions).map(
                      (cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() =>
                            handleCategoryChange(cat)
                          }
                          className={`fd-dropdown-option ${
                            cat === category
                              ? 'selected'
                              : ''
                          }`}
                        >
                          {categoryLabels[cat]}
                        </button>
                      )
                    )}

                  </div>
                )}

              </div>
            </div>


            {/* VALUE */}
            <label className="block">
              <span className="text-sm text-muted">
                Value
              </span>

              <input
                type="number"
                className="input mt-1"
                value={value}
                onChange={(e) =>
                  setValue(e.target.value)
                }
              />
            </label>


            {/* FROM + TO */}
            <div className="grid grid-cols-2 gap-3">

              {/* FROM */}
              <div className="block">
                <span className="text-sm text-muted">
                  From
                </span>

                <div className="relative mt-1 unit-dropdown">

                  <button
                    type="button"
                    onClick={() =>
                      toggleDropdown('from')
                    }
                    className="fd-dropdown-button"
                  >
                    <span>
                      {fromUnit}
                    </span>

                    <span className="text-sm">
                      {openDropdown === 'from'
                        ? '▲'
                        : '▼'}
                    </span>
                  </button>

                  {openDropdown === 'from' && (
                    <div className="fd-dropdown-menu z-[100]">

                      {unitOptions[category].map(
                        (unit) => (
                          <button
                            key={unit}
                            type="button"
                            onClick={() =>
                              handleFromChange(unit)
                            }
                            className={`fd-dropdown-option ${
                              unit === fromUnit
                                ? 'selected'
                                : ''
                            }`}
                          >
                            {unit}
                          </button>
                        )
                      )}

                    </div>
                  )}

                </div>
              </div>


              {/* TO */}
              <div className="block">
                <span className="text-sm text-muted">
                  To
                </span>

                <div className="relative mt-1 unit-dropdown">

                  <button
                    type="button"
                    onClick={() =>
                      toggleDropdown('to')
                    }
                    className="fd-dropdown-button"
                  >
                    <span>
                      {toUnit}
                    </span>

                    <span className="text-sm">
                      {openDropdown === 'to'
                        ? '▲'
                        : '▼'}
                    </span>
                  </button>

                  {openDropdown === 'to' && (
                    <div className="fd-dropdown-menu z-[100]">

                      {unitOptions[category].map(
                        (unit) => (
                          <button
                            key={unit}
                            type="button"
                            onClick={() =>
                              handleToChange(unit)
                            }
                            className={`fd-dropdown-option ${
                              unit === toUnit
                                ? 'selected'
                                : ''
                            }`}
                          >
                            {unit}
                          </button>
                        )
                      )}

                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>


          {/* =================================================
              RESULT
              ================================================= */}

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex items-center justify-center text-center">

            <p className="text-2xl font-bold">

              {value} {fromUnit} ={' '}

              <span className="text-brand-400 font-extrabold">
                {result.toLocaleString('en-IN', {
                  maximumFractionDigits: 4,
                })}
              </span>{' '}

              {toUnit}

            </p>

          </div>

        </div>
      </div>


      {/* =================================================
          SEO CONTENT
          ================================================= */}

      <div className="space-y-8">

        {/* =================================================
            UNIT CONVERSION CALCULATOR
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Unit Conversion Calculator
          </h2>

          <p className="text-muted leading-7">
            The Unit Conversion Calculator helps you convert
            values between commonly used units of length, weight,
            temperature and volume. Enter a value, select the
            original unit and choose the unit you want to
            convert it into.
          </p>

          <p className="text-muted leading-7 mt-4">
            The calculator provides an instant converted result,
            making it easier to work with measurements without
            performing manual conversion calculations.
          </p>

        </section>


        {/* =================================================
            UNDERSTANDING UNIT CONVERSION
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Understanding Unit Conversion
          </h2>

          <p className="text-muted leading-7">
            Unit conversion changes a measurement from one unit
            to another while representing the same physical
            quantity. For example, a distance measured in
            kilometres can be converted into metres or miles.
          </p>

          <p className="text-muted leading-7 mt-4">
            The numerical value changes during conversion because
            different units represent different scales of
            measurement.
          </p>

        </section>


        {/* =================================================
            LENGTH CONVERSION
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Length Conversion
          </h2>

          <p className="text-muted leading-7">
            Length conversions are used when working with
            distances measured in units such as metres,
            kilometres, centimetres, millimetres, miles, yards,
            feet and inches.
          </p>

          <p className="text-muted leading-7 mt-4">
            For example, kilometres can be converted into metres
            for detailed measurements, while kilometres can also
            be converted into miles for systems that use imperial
            units.
          </p>

        </section>


        {/* =================================================
            WEIGHT CONVERSION
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Weight Conversion
          </h2>

          <p className="text-muted leading-7">
            Weight and mass measurements can be converted between
            units such as kilograms, grams, milligrams, tonnes,
            pounds and ounces.
          </p>

          <p className="text-muted leading-7 mt-4">
            These conversions can be useful for cooking, shopping,
            shipping, fitness-related measurements and everyday
            calculations.
          </p>

        </section>


        {/* =================================================
            TEMPERATURE CONVERSION
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Temperature Conversion
          </h2>

          <p className="text-muted leading-7">
            Temperature can be represented using Celsius,
            Fahrenheit or Kelvin. The calculator can convert
            between these temperature scales.
          </p>

          <p className="text-muted leading-7 mt-4">
            Temperature conversion is useful when comparing
            weather information, scientific measurements and
            values reported using different temperature systems.
          </p>

        </section>


        {/* =================================================
            VOLUME CONVERSION
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Volume Conversion
          </h2>

          <p className="text-muted leading-7">
            Volume measurements can be converted between units
            such as litres, millilitres, gallons, cups,
            tablespoons and teaspoons.
          </p>

          <p className="text-muted leading-7 mt-4">
            Volume conversion can be useful when following
            recipes, measuring liquids or comparing quantities
            expressed using different measurement systems.
          </p>

        </section>


        {/* =================================================
            COMMON UNIT CONVERSIONS
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Common Unit Conversions
          </h2>

          <p className="text-muted leading-7 mb-4">
            Some commonly used conversions include:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">

            <li>
              Kilometres to metres.
            </li>

            <li>
              Metres to centimetres.
            </li>

            <li>
              Kilograms to grams.
            </li>

            <li>
              Grams to milligrams.
            </li>

            <li>
              Litres to millilitres.
            </li>

            <li>
              Celsius to Fahrenheit.
            </li>

            <li>
              Miles to kilometres.
            </li>

            <li>
              Pounds to kilograms.
            </li>

          </ul>

        </section>


        {/* =================================================
            WHY USE A UNIT CONVERSION CALCULATOR?
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Why Use a Unit Conversion Calculator?
          </h2>

          <p className="text-muted leading-7">
            Manual unit conversions can require remembering
            conversion factors and performing additional
            calculations. An online calculator provides the
            converted value immediately.
          </p>

          <p className="text-muted leading-7 mt-4">
            It can be useful for students, professionals,
            travellers, shoppers, cooks and anyone working with
            measurements from different unit systems.
          </p>

        </section>


        {/* =================================================
            UNIT CONVERSION EXAMPLES
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Unit Conversion Examples
          </h2>

          <p className="text-muted leading-7">
            Suppose you have a distance of 5 kilometres and want
            to express it in metres. Select Length as the
            category, enter 5 as the value, choose kilometres as
            the original unit and metres as the target unit.
          </p>

          <p className="text-muted leading-7 mt-4">
            Similarly, a temperature value can be converted by
            selecting Temperature and choosing the appropriate
            source and target temperature scales.
          </p>

        </section>


        {/* =================================================
            FAQ
            ================================================= */}

        <section>

          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About Unit Conversion
          </h2>

          <div className="space-y-6">

            {/* FAQ 1 */}
            <div>

              <h3 className="font-semibold mb-2">
                What is unit conversion?
              </h3>

              <p className="text-muted leading-7">
                Unit conversion changes a measurement from one
                unit to another while representing the same
                physical quantity.
              </p>

            </div>


            {/* FAQ 2 */}
            <div>

              <h3 className="font-semibold mb-2">
                Which units can I convert?
              </h3>

              <p className="text-muted leading-7">
                The calculator supports common length, weight,
                temperature and volume units.
              </p>

            </div>


            {/* FAQ 3 */}
            <div>

              <h3 className="font-semibold mb-2">
                Can I convert kilometres to miles?
              </h3>

              <p className="text-muted leading-7">
                Yes. Select Length, choose kilometres as the
                source unit and miles as the target unit.
              </p>

            </div>


            {/* FAQ 4 */}
            <div>

              <h3 className="font-semibold mb-2">
                Can I convert kilograms to pounds?
              </h3>

              <p className="text-muted leading-7">
                Yes. Select Weight and choose kilograms and
                pounds as the source and target units.
              </p>

            </div>


            {/* FAQ 5 */}
            <div>

              <h3 className="font-semibold mb-2">
                Can I convert Celsius to Fahrenheit?
              </h3>

              <p className="text-muted leading-7">
                Yes. Select Temperature and choose Celsius and
                Fahrenheit as the source and target scales.
              </p>

            </div>


            {/* FAQ 6 */}
            <div>

              <h3 className="font-semibold mb-2">
                Are unit conversion results exact?
              </h3>

              <p className="text-muted leading-7">
                The calculator uses conversion relationships
                between the selected units. Results may be
                rounded for display.
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}