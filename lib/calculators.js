// lib/calculators.js
// Central registry — add a new calculator by adding one entry here
// plus a component in components/calculators/ and a case in calc-functions.js
//
// NOTE ON DUPLICATES: a few calculators (Tax, GST, Salary, Pension, EPF,
// Gratuity, HRA) apply to both "Money" and "India Specific" in a general
// wishlist. Rather than publish two nearly-identical pages for the same
// tool, each lives at ONE canonical URL and is cross-listed conceptually —
// duplicate pages with the same content are actively penalized by Google,
// so this is a deliberate SEO choice, not a missing feature.

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
  { slug: 'epf', title: 'EPF Calculator', category: 'money', emoji: '💰',
    description: 'Estimate your EPF corpus at retirement from employee and employer contributions.' },
  { slug: 'salary', title: 'Salary Calculator', category: 'money', emoji: '💰',
    description: 'Estimate your monthly in-hand salary from your annual CTC.' },
  { slug: 'pension', title: 'Pension Calculator', category: 'money', emoji: '💰',
    description: 'Estimate your retirement corpus and monthly pension from regular contributions.' },
  { slug: 'income-tax', title: 'Income Tax Calculator', category: 'money', emoji: '💰',
    description: 'Estimate your income tax under the new tax regime slabs.',
    popular: true },

  // STUDENT
  { slug: 'cgpa', title: 'CGPA Calculator', category: 'student', emoji: '🎓',
    description: 'Convert your CGPA to percentage or calculate CGPA from grades.',
    popular: true },
  { slug: 'sgpa', title: 'SGPA Calculator', category: 'student', emoji: '🎓',
    description: 'Calculate SGPA from subject-wise credits and grade points.' },
  { slug: 'ygpa', title: 'YGPA Calculator', category: 'student', emoji: '🎓',
    description: 'Calculate your Year Grade Point Average from both semesters\u2019 SGPA and credits.' },
  { slug: 'dgpa', title: 'DGPA Calculator', category: 'student', emoji: '🎓',
    description: 'Calculate your final Degree Grade Point Average from all years\u2019 YGPA and credits.' },
  { slug: 'percentage', title: 'Percentage Calculator', category: 'student', emoji: '🎓',
    description: 'Calculate percentage, percentage change and percentage of a number.' },
  { slug: 'attendance', title: 'Attendance Calculator', category: 'student', emoji: '🎓',
    description: 'Check your current attendance percentage.',
    popular: true },
  /*{ slug: 'required-attendance', title: 'Required Attendance Calculator', category: 'student', emoji: '🎓',
    description: 'Find out how many classes you need to attend to hit your target percentage.' },*/
  { slug: 'marks', title: 'Marks Needed Calculator', category: 'student', emoji: '🎓',
    description: 'Find out what marks you need in remaining exams to hit your target percentage.' },
  { slug: 'gpa', title: 'GPA Calculator', category: 'student', emoji: '🎓',
    description: 'Calculate your GPA on a 4.0 scale from subject credits and grades.' },
  { slug: 'age-eligibility', title: 'Age Eligibility Calculator', category: 'student', emoji: '🎓',
    description: 'Check if you meet the age criteria for an exam, job or admission by a cutoff date.' },
  

  // VEHICLE
  { slug: 'fuel-cost', title: 'Fuel Cost Calculator', category: 'vehicle', emoji: '🚗',
    description: 'Calculate the fuel cost and cost-per-km for any trip based on distance and mileage.',
    popular: true },
  { slug: 'mileage', title: 'Mileage Calculator', category: 'vehicle', emoji: '🚗',
    description: 'Calculate your vehicle\u2019s fuel mileage (km/l) from distance and fuel used.' },
  { slug: 'car-emi', title: 'Car Loan EMI Calculator', category: 'vehicle', emoji: '🚗',
    description: 'Calculate monthly EMI, interest and total payment for a car loan.' },
  { slug: 'bike-emi', title: 'Bike Loan EMI Calculator', category: 'vehicle', emoji: '🚗',
    description: 'Calculate monthly EMI, interest and total payment for a two-wheeler loan.' },
  { slug: 'loan-vs-cash', title: 'Loan vs Cash Calculator', category: 'vehicle', emoji: '🚗',
    description: 'Compare paying cash upfront against taking a vehicle loan.' },

  // DAILY LIFE
  { slug: 'age', title: 'Age Calculator', category: 'daily-life', emoji: '🧮',
    description: 'Calculate your exact age in years, months and days.',
    popular: true },
  { slug: 'date-difference', title: 'Date Difference Calculator', category: 'daily-life', emoji: '🧮',
    description: 'Find the number of days, months and years between two dates.' },
  { slug: 'discount', title: 'Discount Calculator', category: 'daily-life', emoji: '🧮',
    description: 'Calculate the final price after a percentage discount.' },
  { slug: 'unit-conversion', title: 'Unit Conversion Calculator', category: 'daily-life', emoji: '🧮',
    description: 'Convert between length, weight, temperature and volume units.' },
  { slug: 'time', title: 'Time Duration Calculator', category: 'daily-life', emoji: '🧮',
    description: 'Calculate the duration between two times of day.' },

  // INDIA
  { slug: 'da', title: 'DA Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Calculate Dearness Allowance on your basic pay.',
    popular: true },
  { slug: 'dr', title: 'DR Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Calculate Dearness Relief on your pension.' },
  { slug: 'da-arrears', title: 'DA Arrears Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Calculate arrears owed when your DA rate is revised retroactively.' },
  { slug: 'hra', title: 'HRA Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Calculate HRA exemption under Indian income tax rules.' },
  { slug: 'gratuity', title: 'Gratuity Calculator', category: 'india', emoji: '🇮🇳',
    description: 'Calculate gratuity payable as per the Payment of Gratuity Act.' },

  // HEALTH
  { slug: 'bmi', title: 'BMI Calculator', category: 'health', emoji: '❤️',
    description: 'Calculate your Body Mass Index and check your weight category.',
    /*popular: true*/ },
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

export function getRelatedCalculators(slug, limit = 3) {
  const tool = getCalculator(slug);
  if (!tool) return [];
  return calculators
    .filter((c) => c.category === tool.category && c.slug !== slug)
    .slice(0, limit);
}
