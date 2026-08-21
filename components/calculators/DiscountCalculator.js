'use client';

import { useState } from 'react';
import { calcDiscount } from '@/lib/calc-functions';

export default function DiscountCalculator() {
  const [price, setPrice] = useState(1999);
  const [discount, setDiscount] = useState(20);

  const { discountAmount, finalPrice } = calcDiscount(
    Number(price) || 0,
    Number(discount) || 0
  );

  return (
    <div className="space-y-10">

      {/* CALCULATOR */}
      <div className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">
            <Field
              label="Original Price (₹)"
              value={price}
              onChange={setPrice}
            />

            <Field
              label="Discount (%)"
              value={discount}
              onChange={setDiscount}
            />
          </div>

          <div className="bg-brand-500/10 border border-brand-400/30 rounded-2xl p-6 flex flex-col justify-center gap-4">
            <Result
              label="You Save"
              value={discountAmount}
            />

            <Result
              label="Final Price"
              value={finalPrice}
              big
            />
          </div>

        </div>
      </div>


      {/* SEO CONTENT */}
      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Discount Calculator
          </h2>

          <p className="text-muted leading-7">
            The Discount Calculator helps you calculate the amount saved
            on an original price and determine the final price after
            applying a percentage discount.
          </p>

          <p className="text-muted leading-7 mt-4">
            Enter the original price and discount percentage to
            instantly see how much you save and how much you need to
            pay after the discount.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Understanding Discounts
          </h2>

          <p className="text-muted leading-7">
            A discount reduces the original price of a product or
            service by a specified percentage. The discount amount
            represents the money saved, while the final price is the
            amount remaining after the discount is applied.
          </p>

          <p className="text-muted leading-7 mt-4">
            Percentage discounts are commonly used during sales,
            promotions, online shopping offers and seasonal
            price reductions.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Discount Calculation Formula
          </h2>

          <div className="bg-fg/5 rounded-xl p-5">
            <p className="font-semibold mb-2">
              Discount Amount
            </p>

            <p className="text-muted leading-7">
              Discount Amount = Original Price × Discount Percentage ÷ 100
            </p>

            <p className="font-semibold mt-5 mb-2">
              Final Price
            </p>

            <p className="text-muted leading-7">
              Final Price = Original Price − Discount Amount
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Calculating a Discount
          </h2>

          <p className="text-muted leading-7">
            To calculate a discount manually, multiply the original
            price by the discount percentage and divide the result by
            100. Subtract the resulting discount amount from the
            original price to find the final price.
          </p>

          <p className="text-muted leading-7 mt-4">
            For example, if a product costs ₹2,000 and has a 20%
            discount, the discount amount is ₹400 and the final price
            is ₹1,600.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Discount Calculator Example
          </h2>

          <p className="text-muted leading-7">
            Suppose the original price of a product is ₹1,999 and the
            advertised discount is 20%.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7 mt-4">
            <li>Original price: ₹1,999</li>
            <li>Discount: 20%</li>
            <li>Discount amount: ₹399.80</li>
            <li>Final price: ₹1,599.20</li>
          </ul>

          <p className="text-muted leading-7 mt-4">
            The calculator performs these calculations automatically
            when you enter the price and discount percentage.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Where Discounts Are Commonly Used
          </h2>

          <p className="text-muted leading-7 mb-4">
            Discount calculations are useful in many shopping and
            financial situations, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
            <li>Online shopping discounts.</li>
            <li>Retail store sales.</li>
            <li>Seasonal promotions.</li>
            <li>Festival offers.</li>
            <li>Clearance sales.</li>
            <li>Coupon and promotional discounts.</li>
            <li>Comparing prices before and after a sale.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Percentage Discount vs Final Price
          </h2>

          <p className="text-muted leading-7">
            The discount percentage describes how much of the original
            price is being reduced. It does not represent the amount
            that you will pay.
          </p>

          <p className="text-muted leading-7 mt-4">
            For example, a 25% discount means that 25% of the original
            price is removed. The customer therefore pays the remaining
            75% of the original price.
          </p>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-4">
            Comparing Discounts
          </h2>

          <p className="text-muted leading-7">
            When comparing products, looking only at the discount
            percentage may not be enough. The original price should
            also be considered because two products with the same
            discount percentage can have very different savings.
          </p>

          <p className="text-muted leading-7 mt-4">
            The final price and actual amount saved provide a clearer
            picture of the cost after the discount.
          </p>
        </section>


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About Discount Calculator
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-2">
                How do I calculate a discount?
              </h3>

              <p className="text-muted leading-7">
                Multiply the original price by the discount percentage
                and divide by 100. The result is the discount amount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How do I calculate the final price after a discount?
              </h3>

              <p className="text-muted leading-7">
                Subtract the discount amount from the original price
                to get the final price.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What is a 20% discount on ₹1,000?
              </h3>

              <p className="text-muted leading-7">
                A 20% discount on ₹1,000 is ₹200, so the final price
                is ₹800.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does the calculator show how much I save?
              </h3>

              <p className="text-muted leading-7">
                Yes. The calculator displays both the discount amount
                you save and the final price after the discount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Can I use the calculator for any price?
              </h3>

              <p className="text-muted leading-7">
                Yes. Enter the original price and the applicable
                discount percentage to calculate the discount amount
                and final price.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Does a higher discount percentage always mean a better deal?
              </h3>

              <p className="text-muted leading-7">
                Not necessarily. The original prices should also be
                compared because the actual saving depends on both the
                original price and the discount percentage.
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
      <span className="text-sm text-muted">{label}</span>

      <input
        type="number"
        className="input mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

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
        ₹
        {value.toLocaleString('en-IN', {
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}