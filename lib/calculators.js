// lib/calculators.js
// Central registry — add a new calculator by adding one entry here
// plus a component in components/calculators/ and a case in calc-functions.js

export const categories = [
  {
    slug: 'money',
    title: 'Money',
    emoji: '💰',
    description: 'Loans, investments, savings and salary calculators.',
  },
  {
    slug: 'student',
    title: 'Student',
    emoji: '🎓',
    description: 'Grades, attendance and academic calculators.',
  },
  {
    slug: 'vehicle',
    title: 'Vehicle',
    emoji: '🚗',
    description: 'Fuel cost, mileage and vehicle loan calculators.',
  },
  {
    slug: 'daily-life',
    title: 'Daily Life',
    emoji: '🧮',
    description: 'Everyday calculators for dates, discounts and units.',
  },
  {
    slug: 'india',
    title: 'India Specific',
    emoji: '🇮🇳',
    description: 'DA, HRA, gratuity, EPF, GST and Indian tax calculators.',
  },
  {
    slug: 'health',
    title: 'Health',
    emoji: '❤️',
    description: 'BMI, BMR and everyday health calculators.',
  },
];

export const calculators = [
  // MONEY
  { slug: 'emi', title: 'EMI Calculator', category: 'money', emoji: '💰',
    description: 'Calculate your monthly loan EMI, total interest and total payment.',
    popular: true },
  { slug: 'gst', title: 'GST Calculator', category: 'money', emoji: '💰',
    description: 'Add or remove GST from an amount at any slab rate.',
    popular: true },
  { slug: 'sip', title: 'SIP Calculator', category: 'money', emoji: '💰',
    description: 'Estimate the future value of your monthly SIP investment.',
    popular: true },
  { slug: 'fd', title: 'FD Calculator', category: 'money', emoji: '💰',
    description: 'Calculate maturity value of a Fixed Deposit.' },
  { slug: 'rd', title: 'RD Calculator', category: 'money', emoji: '💰',
    description: 'Calculate maturity value of a Recurring Deposit.' },
  { slug: 'ppf', title: 'PPF Calculator', category: 'money', emoji: '💰',
    description: 'Estimate maturity value of your PPF account.' },

  // STUDENT
  { slug: 'cgpa', title: 'CGPA Calculator', category: 'student', emoji: '🎓',
    description: 'Convert your CGPA to percentage or calculate CGPA from grades.',
    popular: true },
  { slug: 'sgpa', title: 'SGPA Calculator', category: 'student', emoji: '🎓',
    description: 'Calculate SGPA from subject-wise credits and grade points.' },
  { slug: 'percentage', title: 'Percentage Calculator', category: 'student', emoji: '🎓',
    description: 'Calculate percentage, percentage change and percentage of a number.' },
  { slug: 'attendance', title: 'Attendance Calculator', category: 'student', emoji: '🎓',
    description: 'Check your current attendance percentage.',
    popular: true },
  { slug: 'required-attendance', title: 'Required Attendance Calculator', category: 'student', emoji: '🎓',
    description: 'Find out how many classes you need to attend to hit your target percentage.' },

  // VEHICLE
  { slug: 'fuel-cost', title: 'Fuel Cost Calculator', category: 'vehicle', emoji: '🚗',
    description: 'Calculate the fuel cost for a trip based on distance and mileage.',
    popular: true },
  { slug: 'mileage', title: 'Mileage Calculator', category: 'vehicle', emoji: '🚗',
    description: 'Calculate your vehicle\u2019s fuel mileage (km/l).' },
  { slug: 'car-emi', title: 'Car Loan EMI Calculator', category: 'vehicle', emoji: '🚗',
    description: 'Calculate monthly EMI for a car loan.' },

  // DAILY LIFE
  { slug: 'age', title: 'Age Calculator', category: 'daily-life', emoji: '🧮',
    description: 'Calculate your exact age in years, months and days.',
    popular: true },
  { slug: 'date-difference', title: 'Date Difference Calculator', category: 'daily-life', emoji: '🧮',
    description: 'Find the number of days, months and years between two dates.' },
  { slug: 'discount', title: 'Discount Calculator', category: 'daily-life', emoji: '🧮',
    description: 'Calculate the final price after a percentage discount.' },

  // INDIA
  { slug: 'da', title: 'DA Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Calculate Dearness Allowance on your basic pay.',
    popular: true },
  { slug: 'hra', title: 'HRA Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Calculate HRA exemption under Indian income tax rules.' },
  { slug: 'gratuity', title: 'Gratuity Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Calculate gratuity payable as per the Payment of Gratuity Act.' },
  { slug: 'income-tax', title: 'Income Tax Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Estimate your income tax under the new tax regime slabs.' },

  // HEALTH
  { slug: 'bmi', title: 'BMI Calculator', category: 'health', emoji: '❤️',
    description: 'Calculate your Body Mass Index and check your weight category.',
    popular: true },
  { slug: 'bmr', title: 'BMR Calculator', category: 'health', emoji: '❤️',
    description: 'Calculate your Basal Metabolic Rate and daily calorie needs.' },
];

export function getCalculator(slug) {
  return calculators.find((c) => c.slug === slug);
}

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getCalculatorsByCategory(slug) {
  return calculators.filter((c) => c.category === slug);
}

export function getPopularCalculators() {
  return calculators.filter((c) => c.popular);
}
