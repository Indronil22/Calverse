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
    description:
      'Loans, investments, savings and salary calculators.',
  },
  {
    slug: 'student',
    title: 'Student',
    emoji: '🎓',
    description:
      'Grades, attendance and academic calculators.',
  },
  {
    slug: 'vehicle',
    title: 'Vehicle',
    emoji: '🚗',
    description:
      'Fuel cost, mileage and vehicle loan calculators.',
  },
  {
    slug: 'daily-life',
    title: 'Daily Life',
    emoji: '🧮',
    description:
      'Everyday calculators for dates, discounts and units.',
  },
  {
    slug: 'india',
    title: 'India Specific',
    emoji: '🇮🇳',
    description: 'Calculators for Indian salaries, taxes, GST, DA, HRA, gratuity and other everyday financial needs.',
  },
  {
    slug: 'health',
    title: 'Health',
    emoji: '❤️',
    description:
      'BMI, BMR and everyday health calculators.',
  },
];

export const calculators = [
  // =========================================================
  // MONEY
  // =========================================================

  {
    slug: 'emi',
    title: 'EMI Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Calculate your monthly loan EMI, total interest and total repayment for any loan amount, interest rate and tenure.',
    popular: true,
  },
    {
    slug: 'loan-interest-rate',
    title: 'Loan Interest Rate Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Calculate the monthly and annual interest rate on a loan based on the loan amount and monthly interest payment.',
  },

  {
    slug: 'gst',
    title: 'GST Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Calculate GST online by adding or removing GST from an amount using any applicable GST rate.',
    popular: true,
  },

  {
    slug: 'sip',
    title: 'SIP Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Calculate the estimated future value of your monthly SIP investment, total investment and potential returns.',
    popular: true,
  },

  {
    slug: 'fd',
    title: 'FD Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Calculate your Fixed Deposit maturity amount, total interest and estimated returns based on investment, interest rate and tenure.',
  },

  {
    slug: 'rd',
    title: 'RD Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Calculate your Recurring Deposit maturity amount and estimated interest from monthly deposits, interest rate and tenure.',
  },

  {
    slug: 'ppf',
    title: 'PPF Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Calculate your PPF maturity value, total investment and estimated interest based on annual contributions and investment period.',
  },

  {
    slug: 'epf',
    title: 'EPF Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Calculate your estimated EPF retirement corpus from employee contributions, employer contributions and investment period.',
  },

  {
    slug: 'salary',
    title: 'Salary Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Estimate your monthly in-hand salary from annual CTC, deductions and salary components.',
  },

  {
    slug: 'pension',
    title: 'Pension Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Estimate your retirement corpus and potential monthly pension based on contributions, investment period and expected returns.',
  },

  {
    slug: 'income-tax',
    title: 'Income Tax Calculator',
    category: 'money',
    emoji: '💰',
    description:
      'Estimate your income tax liability under the applicable Indian income tax slabs using your income and deductions.',
    popular: true,
  },

  // =========================================================
  // STUDENT
  // =========================================================

  {
    slug: 'cgpa',
    title: 'CGPA Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Calculate your CGPA from semester grades or credits and convert CGPA to percentage using your grading system.',
    popular: true,
  },

  {
    slug: 'sgpa',
    title: 'SGPA Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Calculate SGPA from subject-wise credits and grade points using a simple online SGPA calculator.',
  },

  {
    slug: 'ygpa',
    title: 'YGPA Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Calculate your YGPA from semester-wise SGPA and credits to determine your yearly academic performance.',
  },

  {
    slug: 'dgpa',
    title: 'DGPA Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Calculate your final DGPA from yearly YGPA and credits to estimate your overall degree performance.',
  },

  {
    slug: 'percentage',
    title: 'Percentage Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Calculate percentage, percentage increase or decrease, and the percentage of any number quickly online.',
  },

  {
    slug: 'attendance',
    title: 'Attendance Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Calculate your current attendance percentage from attended and total classes and check your academic attendance.',
    popular: true,
  },

  /*
  {
    slug: 'required-attendance',
    title: 'Required Attendance Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Find out how many classes you need to attend to reach your target attendance percentage.',
  },
  */

  {
    slug: 'marks',
    title: 'Marks Needed Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Calculate the marks you need in your remaining exams to reach your target percentage or overall score.',
  },

  {
    slug: 'gpa',
    title: 'GPA Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Calculate your GPA on a 4.0 scale using subject credits and grade points.',
  },

  {
    slug: 'age-eligibility',
    title: 'Age Eligibility Calculator',
    category: 'student',
    emoji: '🎓',
    description:
      'Check your age eligibility for exams, jobs, admissions and other requirements using a specified cutoff date.',
  },

  // =========================================================
  // VEHICLE
  // =========================================================

  {
    slug: 'fuel-cost',
    title: 'Fuel Cost Calculator',
    category: 'vehicle',
    emoji: '🚗',
    description:
      'Calculate fuel cost, fuel required and cost per kilometre for a trip using distance, mileage and fuel price.',
    popular: true,
  },

  {
    slug: 'mileage',
    title: 'Mileage Calculator',
    category: 'vehicle',
    emoji: '🚗',
    description:
      'Calculate your car or bike mileage in km/l from distance travelled and fuel consumed.',
  },

  {
    slug: 'car-emi',
    title: 'Car Loan EMI Calculator',
    category: 'vehicle',
    emoji: '🚗',
    description:
      'Calculate your monthly car loan EMI, total interest and total repayment based on loan amount, interest rate and tenure.',
  },

  {
    slug: 'bike-emi',
    title: 'Bike Loan EMI Calculator',
    category: 'vehicle',
    emoji: '🚗',
    description:
      'Calculate your two-wheeler loan EMI, total interest and repayment for any bike loan amount and tenure.',
  },

  {
    slug: 'loan-vs-cash',
    title: 'Loan vs Cash Calculator',
    category: 'vehicle',
    emoji: '🚗',
    description:
      'Compare the cost of paying for a vehicle in cash versus financing it with a loan.',
  },

  // =========================================================
  // DAILY LIFE
  // =========================================================

  {
  slug: 'time-zone-converter',
  title: 'Time Zone Converter Calculator',
  category: 'daily-life',
  emoji: '🧮',
  description:
    'Convert time between different locations and calculate the time difference between cities and time zones.',
},
  {
    slug: 'age',
    title: 'Age Calculator',
    category: 'daily-life',
    emoji: '🧮',
    description:
      'Calculate your exact age in years, months and days from your date of birth and a selected date.',
    popular: true,
  },

  {
    slug: 'date-difference',
    title: 'Date Difference Calculator',
    category: 'daily-life',
    emoji: '🧮',
    description:
      'Calculate the exact difference between two dates in days, months and years.',
  },

  {
    slug: 'discount',
    title: 'Discount Calculator',
    category: 'daily-life',
    emoji: '🧮',
    description:
      'Calculate discount amount, final price and savings from an original price and discount percentage.',
  },

  {
    slug: 'unit-conversion',
    title: 'Unit Conversion Calculator',
    category: 'daily-life',
    emoji: '🧮',
    description:
      'Convert common units of length, weight, temperature and volume quickly and easily.',
  },

  {
    slug: 'time',
    title: 'Time Duration Calculator',
    category: 'daily-life',
    emoji: '🧮',
    description:
      'Calculate the duration between two times and find the exact difference in hours and minutes.',
  },

  // =========================================================
  // INDIA SPECIFIC
  // =========================================================

  {
    slug: 'da',
    title: 'DA Calculator',
    category: 'india',
    emoji: '🇮🇳',
    description:
      'Calculate Dearness Allowance from your basic pay and DA percentage to estimate your monthly DA amount.',
    popular: true,
  },

  {
    slug: 'dr',
    title: 'DR Calculator',
    category: 'india',
    emoji: '🇮🇳',
    description:
      'Calculate Dearness Relief on pension using your basic pension and applicable DR percentage.',
  },

  {
    slug: 'da-arrears',
    title: 'DA Arrears Calculator',
    category: 'india',
    emoji: '🇮🇳',
    description:
      'Calculate estimated DA arrears when your Dearness Allowance rate changes retrospectively for previous months.',
  },

  {
    slug: 'hra',
    title: 'HRA Calculator',
    category: 'india',
    emoji: '🇮🇳',
    description:
      'Calculate HRA exemption and taxable HRA under applicable Indian income tax rules.',
  },

  {
    slug: 'gratuity',
    title: 'Gratuity Calculator',
    category: 'india',
    emoji: '🇮🇳',
    description:
      'Calculate your estimated gratuity based on salary and completed years of service under applicable Indian rules.',
  },

  // =========================================================
  // HEALTH
  // =========================================================

  {
    slug: 'bmi',
    title: 'BMI Calculator',
    category: 'health',
    emoji: '❤️',
    description:
      'Calculate your Body Mass Index (BMI) from height and weight and see your BMI category.',
    /* popular: true */
  },

  {
    slug: 'bmr',
    title: 'BMR Calculator',
    category: 'health',
    emoji: '❤️',
    description:
      'Calculate your Basal Metabolic Rate (BMR) and estimate the calories your body needs at rest.',
  },
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
    .filter(
      (c) =>
        c.category === tool.category &&
        c.slug !== slug
    )
    .slice(0, limit);
}