// lib/calculator-seo.js

export const calculatorSEO = {

  // =========================================================
  // MONEY
  // =========================================================

  emi: {
    title:
      'EMI Calculator – Calculate Monthly EMI, Interest & Total Payment',

    description:
      'Calculate your monthly EMI, total interest and total payment instantly with our free EMI calculator. Enter the loan amount, interest rate and tenure to get accurate results.',

    intro:
      'Use the free EMI Calculator to estimate your monthly loan payment, total interest and total repayment amount. Enter the loan amount, annual interest rate and repayment tenure to get an instant estimate.',

    sections: [
      {
        heading: 'What is an EMI?',
        paragraphs: [
          'EMI stands for Equated Monthly Instalment. It is the regular amount a borrower pays every month towards a loan. An EMI generally contains both principal and interest.',
          'The monthly EMI mainly depends on the loan amount, interest rate and repayment tenure.'
        ]
      },
      {
        heading: 'How is EMI calculated?',
        paragraphs: [
          'The standard EMI formula uses the principal loan amount, monthly interest rate and total number of monthly instalments.'
        ],
        formula:
          'EMI = P × R × (1 + R)ⁿ / ((1 + R)ⁿ − 1)',
        variables: [
          'P = Principal loan amount',
          'R = Monthly interest rate',
          'n = Total number of monthly instalments'
        ]
      },
      {
        heading: 'How to use the EMI Calculator',
        steps: [
          'Enter the loan amount.',
          'Enter the annual interest rate.',
          'Enter the repayment tenure in months.',
          'The calculator will instantly calculate the estimated monthly EMI.',
          'Check the total interest and total payment.'
        ]
      },
      {
        heading: 'Factors that affect your EMI',
        items: [
          ['Loan Amount', 'A higher loan amount generally results in a higher EMI when the interest rate and tenure remain unchanged.'],
          ['Interest Rate', 'A higher interest rate generally increases both the EMI and total interest payable.'],
          ['Loan Tenure', 'A longer tenure can reduce the monthly EMI but may increase the total interest paid.']
        ]
      }
    ],

    faqs: [
      ['What does EMI stand for?', 'EMI stands for Equated Monthly Instalment.'],
      ['Does a longer loan tenure reduce EMI?', 'Generally, a longer tenure reduces the monthly EMI, but it can increase the total interest paid.'],
      ['What information is required to calculate EMI?', 'You need the loan amount, annual interest rate and repayment tenure.'],
      ['Is this EMI calculator free?', 'Yes. TheCalculate EMI Calculator is free to use and provides instant estimates.']
    ]
  },

  gst: {
    title:
      'GST Calculator – Calculate GST Amount, CGST, SGST & IGST',

    description:
      'Calculate GST instantly with our free GST calculator. Add or remove GST from an amount and find the GST amount, CGST, SGST and total value.',

    intro:
      'Use this free GST Calculator to quickly calculate GST on goods and services. You can calculate GST-inclusive and GST-exclusive amounts and understand the applicable tax amount.',

    sections: [
      {
        heading: 'What is GST?',
        paragraphs: [
          'GST stands for Goods and Services Tax. It is an indirect tax applied to the supply of goods and services in India.',
          'GST calculations are commonly required when determining the tax amount payable on a product or service and the final price including tax.'
        ]
      },
      {
        heading: 'How is GST calculated?',
        paragraphs: [
          'When GST is added to a base amount, the GST amount can be calculated by multiplying the taxable amount by the GST rate.'
        ],
        formula:
          'GST Amount = Original Amount × GST Rate ÷ 100',
        variables: [
          'Original Amount = Amount before GST',
          'GST Rate = Applicable GST percentage'
        ]
      },
      {
        heading: 'GST-inclusive and GST-exclusive amounts',
        paragraphs: [
          'A GST-exclusive price is the price before GST is added. A GST-inclusive price already contains GST.',
          'When removing GST from an inclusive amount, the original taxable value is calculated using the applicable GST rate.'
        ],
        formula:
          'Taxable Value = GST-Inclusive Amount × 100 ÷ (100 + GST Rate)'
      },
      {
        heading: 'How to use the GST Calculator',
        steps: [
          'Enter the amount.',
          'Select or enter the applicable GST rate.',
          'Choose whether you want to add or remove GST.',
          'View the GST amount and final amount instantly.'
        ]
      },
      {
        heading: 'CGST, SGST and IGST',
        paragraphs: [
          'For an intra-state transaction, GST is generally divided into CGST and SGST. For an inter-state transaction, IGST is generally applicable.'
        ]
      }
    ],

    faqs: [
      ['What is GST?', 'GST is Goods and Services Tax, an indirect tax applied to the supply of goods and services.'],
      ['How is GST calculated?', 'GST is generally calculated by multiplying the taxable amount by the applicable GST rate and dividing by 100.'],
      ['What is CGST?', 'CGST is Central Goods and Services Tax.'],
      ['What is SGST?', 'SGST is State Goods and Services Tax.'],
      ['What is IGST?', 'IGST is Integrated Goods and Services Tax, generally used for inter-state supplies.']
    ]
  },

  sip: {
    title: 'SIP Calculator – Calculate Mutual Fund SIP Returns',

    description:
      'Calculate the estimated future value of your monthly SIP investment with our free SIP calculator. Estimate invested amount, returns and maturity value.',

    intro:
      'Use the SIP Calculator to estimate how your regular monthly investment may grow over time based on your investment amount, expected return and investment period.',

    sections: [
      {
        heading: 'What is a SIP?',
        paragraphs: [
          'SIP stands for Systematic Investment Plan. It is a method of investing a fixed amount regularly, often every month, into a mutual fund scheme.',
          'A SIP calculator helps estimate the potential future value of regular investments.'
        ]
      },
      {
        heading: 'How does a SIP Calculator work?',
        paragraphs: [
          'The calculator uses your monthly investment, expected annual return and investment duration to estimate the total invested amount and potential future value.'
        ]
      },
      {
        heading: 'How to use the SIP Calculator',
        steps: [
          'Enter your monthly investment amount.',
          'Enter the expected annual return rate.',
          'Enter the investment duration.',
          'View the estimated investment value and returns.'
        ]
      },
      {
        heading: 'Benefits of using a SIP Calculator',
        items: [
          ['Plan investments', 'Estimate how regular investments may grow over time.'],
          ['Compare scenarios', 'Change the investment amount, return rate or duration to compare outcomes.'],
          ['Understand compounding', 'See how long-term investing can affect potential returns.']
        ]
      }
    ],

    faqs: [
      ['What is SIP?', 'SIP stands for Systematic Investment Plan and allows investors to invest a fixed amount regularly.'],
      ['Is the SIP return guaranteed?', 'No. Mutual fund returns are market-linked and are not guaranteed.'],
      ['Can I change the monthly SIP amount?', 'Yes, you can enter a different monthly investment amount to estimate another scenario.']
    ]
  },

  fd: {
    title: 'FD Calculator – Calculate Fixed Deposit Maturity Amount',

    description:
      'Calculate Fixed Deposit maturity amount and interest with our free FD calculator. Estimate how much your investment may grow by maturity.',

    intro:
      'Use this FD Calculator to estimate the maturity value and interest earned on a Fixed Deposit based on your principal, interest rate and tenure.',

    sections: [
      {
        heading: 'What is a Fixed Deposit?',
        paragraphs: [
          'A Fixed Deposit is a savings or investment product where money is deposited for a specified period at a stated interest rate.'
        ]
      },
      {
        heading: 'How is FD maturity calculated?',
        paragraphs: [
          'The maturity amount depends on the principal deposited, interest rate, tenure and the compounding frequency used by the financial institution.'
        ]
      },
      {
        heading: 'How to use the FD Calculator',
        steps: [
          'Enter the deposit amount.',
          'Enter the applicable interest rate.',
          'Enter the deposit tenure.',
          'View the estimated maturity amount and interest.'
        ]
      }
    ],

    faqs: [
      ['What is FD maturity amount?', 'It is the amount received when the Fixed Deposit matures, including the applicable interest.'],
      ['Is FD interest fixed?', 'For a traditional fixed deposit, the interest rate is generally fixed for the selected tenure.'],
      ['Can I calculate FD interest online?', 'Yes, this calculator provides an instant estimate based on the values entered.']
    ]
  },

  rd: {
    title: 'RD Calculator – Calculate Recurring Deposit Maturity',

    description:
      'Calculate recurring deposit maturity amount and interest with our free RD calculator.',

    intro:
      'Use the RD Calculator to estimate the maturity amount from regular monthly deposits and the applicable interest rate.',

    sections: [
      {
        heading: 'What is a Recurring Deposit?',
        paragraphs: [
          'A Recurring Deposit allows you to deposit a fixed amount at regular intervals, usually monthly, for a specified tenure.'
        ]
      },
      {
        heading: 'How to use the RD Calculator',
        steps: [
          'Enter your monthly deposit.',
          'Enter the interest rate.',
          'Enter the deposit tenure.',
          'View the estimated maturity amount.'
        ]
      }
    ],

    faqs: [
      ['What is an RD?', 'RD stands for Recurring Deposit, where a fixed amount is deposited regularly for a specified period.'],
      ['Can I calculate RD maturity online?', 'Yes, you can estimate the maturity value using the calculator.']
    ]
  },

  ppf: {
    title: 'PPF Calculator – Calculate PPF Maturity Amount',

    description:
      'Calculate your estimated PPF maturity amount and interest with our free PPF calculator.',

    intro:
      'Use the PPF Calculator to estimate how your yearly contributions may grow over the PPF investment period.',

    sections: [
      {
        heading: 'What is PPF?',
        paragraphs: [
          'PPF stands for Public Provident Fund. It is a long-term savings scheme in India with a specified tenure and government-declared interest rate.'
        ]
      },
      {
        heading: 'How to use the PPF Calculator',
        steps: [
          'Enter the yearly investment amount.',
          'Enter the applicable interest rate.',
          'Enter the investment period.',
          'View the estimated maturity value.'
        ]
      },
      {
        heading: 'Why use a PPF Calculator?',
        paragraphs: [
          'A calculator makes it easier to estimate the potential maturity value of regular PPF contributions and compare different contribution scenarios.'
        ]
      }
    ],

    faqs: [
      ['What is PPF?', 'PPF stands for Public Provident Fund, a long-term savings scheme in India.'],
      ['Is PPF a long-term investment?', 'Yes, PPF is designed as a long-term savings product with a specified maturity period.']
    ]
  },

  epf: {
    title: 'EPF Calculator – Calculate EPF Retirement Corpus',

    description:
      'Calculate your estimated EPF retirement corpus using salary, contribution and investment details.',

    intro:
      'Use the EPF Calculator to estimate how employee and employer contributions may build your retirement corpus over time.',

    sections: [
      {
        heading: 'What is EPF?',
        paragraphs: [
          'EPF stands for Employees’ Provident Fund. It is a retirement savings system in which eligible employees and employers make contributions according to applicable rules.'
        ]
      },
      {
        heading: 'How does EPF grow?',
        paragraphs: [
          'Your EPF balance can grow through regular contributions and applicable interest credited to the account.'
        ]
      },
      {
        heading: 'How to use the EPF Calculator',
        steps: [
          'Enter your basic salary and applicable contribution details.',
          'Enter your expected salary growth if supported by the calculator.',
          'Enter the remaining years of service.',
          'View the estimated retirement corpus.'
        ]
      }
    ],

    faqs: [
      ['What is EPF?', 'EPF is a retirement savings system for eligible employees.'],
      ['Does EPF earn interest?', 'Yes, EPF balances are credited with interest according to the applicable rules and declared rate.']
    ]
  },

  salary: {
    title: 'Salary Calculator – Calculate Monthly In-Hand Salary',

    description:
      'Estimate monthly in-hand salary from annual CTC using our free salary calculator.',

    intro:
      'Use the Salary Calculator to get an estimated monthly in-hand salary from your annual CTC and understand the difference between CTC, gross salary and take-home pay.',

    sections: [
      {
        heading: 'What is CTC?',
        paragraphs: [
          'CTC stands for Cost to Company. It represents the overall annual cost an employer incurs for an employee and can include salary, employer contributions and other benefits.'
        ]
      },
      {
        heading: 'CTC vs in-hand salary',
        paragraphs: [
          'Your in-hand salary is usually lower than CTC because deductions and employer-side components may not be paid directly as monthly take-home salary.'
        ]
      },
      {
        heading: 'How to use the Salary Calculator',
        steps: [
          'Enter your annual CTC.',
          'Enter the applicable salary components if requested.',
          'Review the estimated monthly salary.',
          'Use the result as an estimate rather than an official payroll statement.'
        ]
      }
    ],

    faqs: [
      ['What is in-hand salary?', 'In-hand salary is the amount credited to an employee after applicable deductions and adjustments.'],
      ['Is CTC the same as take-home salary?', 'No. CTC and take-home salary are different because CTC can include employer contributions and other components.']
    ]
  },

  pension: {
    title: 'Pension Calculator – Estimate Retirement Pension',

    description:
      'Estimate retirement corpus and potential monthly pension using our free pension calculator.',

    intro:
      'Use the Pension Calculator to estimate retirement savings and potential pension based on your contribution and investment assumptions.',

    sections: [
      {
        heading: 'What is a pension?',
        paragraphs: [
          'A pension is a regular income received during retirement. The amount depends on the pension scheme, contributions, accumulated corpus and applicable rules.'
        ]
      },
      {
        heading: 'How to use the Pension Calculator',
        steps: [
          'Enter the contribution amount.',
          'Enter the expected return or interest rate.',
          'Enter the investment period.',
          'Review the estimated retirement corpus and pension.'
        ]
      }
    ],

    faqs: [
      ['What does a pension calculator estimate?', 'It estimates retirement savings and potential pension based on the inputs provided.'],
      ['Are pension calculations guaranteed?', 'No. Estimates depend on assumptions and the specific pension scheme.']
    ]
  },

  'income-tax': {
    title: 'Income Tax Calculator – Calculate Income Tax in India',

    description:
      'Estimate income tax liability under the applicable Indian income tax regime using our free income tax calculator.',

    intro:
      'Use the Income Tax Calculator to estimate your tax liability based on your income and applicable deductions or assumptions.',

    sections: [
      {
        heading: 'What is income tax?',
        paragraphs: [
          'Income tax is a tax charged on taxable income according to the applicable income tax rules. The final liability can depend on income, deductions, exemptions, rebates and the selected tax regime.'
        ]
      },
      {
        heading: 'How to use the Income Tax Calculator',
        steps: [
          'Enter your annual income.',
          'Enter applicable deductions or other requested information.',
          'Select the applicable tax regime if required.',
          'Review the estimated tax amount.'
        ]
      },
      {
        heading: 'Why use an income tax calculator?',
        paragraphs: [
          'A calculator can help you quickly compare estimated tax liability and understand how changes in income or deductions may affect the result.'
        ]
      }
    ],

    faqs: [
      ['Is this income tax calculation final?', 'No. It is an estimate and actual tax liability depends on applicable laws, deductions and individual circumstances.'],
      ['Can tax rules change?', 'Yes. Tax rules, rates, deductions and thresholds can change.']
    ]
  },

  // =========================================================
  // STUDENT
  // =========================================================

  cgpa: {
    title: 'CGPA Calculator – Calculate CGPA & Percentage',

    description:
      'Calculate CGPA from semester grades or convert CGPA to percentage with our free CGPA calculator.',

    intro:
      'Use the CGPA Calculator to calculate your cumulative grade point average and estimate the equivalent percentage using your institution’s conversion method.',

    sections: [
      {
        heading: 'What is CGPA?',
        paragraphs: [
          'CGPA stands for Cumulative Grade Point Average. It represents the average grade point earned across subjects or semesters according to the grading system used by an institution.'
        ]
      },
      {
        heading: 'How is CGPA calculated?',
        paragraphs: [
          'A credit-weighted CGPA is commonly calculated by multiplying each subject grade point by its credits, adding the results and dividing by the total credits.'
        ],
        formula:
          'CGPA = Σ(Credit × Grade Point) ÷ Σ Credits'
      },
      {
        heading: 'How to use the CGPA Calculator',
        steps: [
          'Enter the required subject or semester grade information.',
          'Enter credits where applicable.',
          'Calculate your CGPA.',
          'Use the percentage conversion only if it matches your institution’s prescribed formula.'
        ]
      }
    ],

    faqs: [
      ['What is CGPA?', 'CGPA is the cumulative average of grade points earned across subjects or semesters.'],
      ['Can CGPA be converted to percentage?', 'Yes, but the conversion formula varies by university or institution.'],
      ['Is every university conversion formula the same?', 'No. Always use your institution’s official conversion rule.']
    ]
  },

  sgpa: {
    title: 'SGPA Calculator – Calculate Semester Grade Point Average',

    description:
      'Calculate SGPA from subject credits and grade points with our free SGPA calculator.',

    intro:
      'Use the SGPA Calculator to calculate your Semester Grade Point Average using subject-wise credits and grade points.',

    sections: [
      {
        heading: 'What is SGPA?',
        paragraphs: [
          'SGPA stands for Semester Grade Point Average. It represents the credit-weighted average of grade points earned during a semester.'
        ]
      },
      {
        heading: 'SGPA formula',
        paragraphs: [
          'SGPA is generally calculated using the grade points and credits of subjects taken during the semester.'
        ],
        formula:
          'SGPA = Σ(Credit × Grade Point) ÷ Σ Credits'
      },
      {
        heading: 'How to use the SGPA Calculator',
        steps: [
          'Enter each subject’s credit value.',
          'Enter the corresponding grade point.',
          'Calculate the semester SGPA.'
        ]
      }
    ],

    faqs: [
      ['What is SGPA?', 'SGPA is the Semester Grade Point Average.'],
      ['Is SGPA calculated using credits?', 'In a credit-based grading system, subject credits are generally used in the calculation.']
    ]
  },

  ygpa: {
    title: 'YGPA Calculator – Calculate Year Grade Point Average',

    description:
      'Calculate your Year Grade Point Average from semester SGPA and credits with our free YGPA calculator.',

    intro:
      'Use the YGPA Calculator to estimate your annual grade point average from semester-wise SGPA and credit information.',

    sections: [
      {
        heading: 'What is YGPA?',
        paragraphs: [
          'YGPA stands for Year Grade Point Average. It can be used to represent academic performance across the semesters within an academic year.'
        ]
      },
      {
        heading: 'How is YGPA calculated?',
        paragraphs: [
          'When semesters have different credit totals, a credit-weighted calculation can be used to combine semester performance.'
        ],
        formula:
          'YGPA = Σ(SGPA × Semester Credits) ÷ Σ Semester Credits'
      },
      {
        heading: 'How to use the YGPA Calculator',
        steps: [
          'Enter the SGPA for each semester.',
          'Enter the corresponding semester credits.',
          'Calculate the yearly grade point average.'
        ]
      }
    ],

    faqs: [
      ['What is YGPA?', 'YGPA is a Year Grade Point Average representing academic performance across an academic year.'],
      ['Can YGPA be calculated from two semesters?', 'Yes, if the required semester SGPA and credit information is available.']
    ]
  },

  dgpa: {
    title: 'DGPA Calculator – Calculate Degree Grade Point Average',

    description:
      'Calculate your final Degree Grade Point Average from yearly academic performance and credits.',

    intro:
      'Use the DGPA Calculator to estimate your final degree-level grade point average using yearly performance and credit information.',

    sections: [
      {
        heading: 'What is DGPA?',
        paragraphs: [
          'DGPA stands for Degree Grade Point Average. It represents cumulative academic performance across the years of a degree programme.'
        ]
      },
      {
        heading: 'How is DGPA calculated?',
        paragraphs: [
          'A credit-weighted calculation can combine yearly grade point averages when the years have different credit totals.'
        ],
        formula:
          'DGPA = Σ(YGPA × Year Credits) ÷ Σ Year Credits'
      },
      {
        heading: 'How to use the DGPA Calculator',
        steps: [
          'Enter the grade point average for each academic year.',
          'Enter the relevant credits.',
          'Calculate the final DGPA.'
        ]
      }
    ],

    faqs: [
      ['What is DGPA?', 'DGPA is a degree-level grade point average representing cumulative academic performance.'],
      ['Does DGPA use credits?', 'A credit-weighted calculation can be used when yearly credit totals differ.']
    ]
  },

  percentage: {
    title: 'Percentage Calculator – Calculate Percentage Online',

    description:
      'Calculate percentages, percentage change and percentage of a number instantly with our free percentage calculator.',

    intro:
      'Use the Percentage Calculator for common percentage calculations including finding percentages, percentage increases, decreases and percentage values.',

    sections: [
      {
        heading: 'What is a percentage?',
        paragraphs: [
          'A percentage expresses a number as a fraction of 100. Percentages are commonly used for marks, discounts, increases, decreases, finance and statistics.'
        ]
      },
      {
        heading: 'Basic percentage formula',
        formula:
          'Percentage = (Part ÷ Whole) × 100'
      },
      {
        heading: 'How to use the Percentage Calculator',
        steps: [
          'Enter the required values.',
          'Choose the percentage calculation you need.',
          'View the result instantly.'
        ]
      }
    ],

    faqs: [
      ['How do I calculate percentage?', 'Divide the part by the whole and multiply by 100.'],
      ['Can this calculator calculate percentage change?', 'Yes, where the calculator option is available.']
    ]
  },

  attendance: {
    title: 'Attendance Calculator – Calculate Attendance Percentage',

    description:
      'Calculate your current attendance percentage and check your attendance status with our free attendance calculator.',

    intro:
      'Use the Attendance Calculator to calculate your current attendance percentage from classes attended and total classes.',

    sections: [
      {
        heading: 'How is attendance percentage calculated?',
        formula:
          'Attendance % = (Classes Attended ÷ Total Classes) × 100'
      },
      {
        heading: 'How to use the Attendance Calculator',
        steps: [
          'Enter the number of classes attended.',
          'Enter the total number of classes.',
          'View your attendance percentage.'
        ]
      },
      {
        heading: 'Why is attendance important?',
        paragraphs: [
          'Many schools, colleges and universities use minimum attendance requirements for eligibility to appear in examinations. Always check the attendance rules of your institution.'
        ]
      }
    ],

    faqs: [
      ['How do I calculate attendance percentage?', 'Divide classes attended by total classes and multiply by 100.'],
      ['What attendance percentage is required?', 'The required percentage depends on your school, college or university rules.']
    ]
  },

  marks: {
    title: 'Marks Needed Calculator – Calculate Required Exam Marks',

    description:
      'Calculate how many marks you need in remaining exams to reach your target percentage.',

    intro:
      'Use the Marks Needed Calculator to estimate the marks required in your remaining examinations to reach a target score.',

    sections: [
      {
        heading: 'What does the Marks Needed Calculator do?',
        paragraphs: [
          'The calculator estimates the score required in remaining examinations based on your current marks, completed marks and target percentage.'
        ]
      },
      {
        heading: 'How to use the Marks Needed Calculator',
        steps: [
          'Enter your current marks.',
          'Enter the total marks already completed.',
          'Enter your target percentage.',
          'Enter the remaining marks where required.',
          'View the estimated marks needed.'
        ]
      }
    ],

    faqs: [
      ['Can I calculate the marks needed for a target percentage?', 'Yes. Enter your current performance and target to estimate the required remaining marks.'],
      ['Does the result guarantee the final percentage?', 'No. It is a mathematical estimate based on the inputs provided.']
    ]
  },

  gpa: {
    title: 'GPA Calculator – Calculate GPA on a 4.0 Scale',

    description:
      'Calculate GPA from subject grades and credits using our free GPA calculator.',

    intro:
      'Use the GPA Calculator to calculate a credit-weighted GPA from subject grades and credits on a 4.0 scale.',

    sections: [
      {
        heading: 'What is GPA?',
        paragraphs: [
          'GPA stands for Grade Point Average. It is a numerical representation of academic performance based on grades earned in courses.'
        ]
      },
      {
        heading: 'How is GPA calculated?',
        formula:
          'GPA = Σ(Credit × Grade Point) ÷ Σ Credits'
      },
      {
        heading: 'How to use the GPA Calculator',
        steps: [
          'Enter the subject credits.',
          'Enter the grade points.',
          'Calculate the GPA.'
        ]
      }
    ],

    faqs: [
      ['What is GPA?', 'GPA is a grade point average representing academic performance.'],
      ['Is GPA always on a 4.0 scale?', 'No. Different institutions use different grading scales. This calculator is designed for a 4.0 scale.']
    ]
  },

  'age-eligibility': {
    title: 'Age Eligibility Calculator – Check Age on Cutoff Date',

    description:
      'Check your age and eligibility for an exam, job or admission based on a specified cutoff date.',

    intro:
      'Use the Age Eligibility Calculator to determine your age on a particular cutoff date and compare it with an eligibility requirement.',

    sections: [
      {
        heading: 'What is age eligibility?',
        paragraphs: [
          'Age eligibility determines whether a person falls within the minimum or maximum age requirement specified for an examination, job, admission or other application.'
        ]
      },
      {
        heading: 'How to use the Age Eligibility Calculator',
        steps: [
          'Enter your date of birth.',
          'Enter the applicable cutoff date.',
          'Enter the minimum or maximum age requirement.',
          'Check the calculated eligibility result.'
        ]
      }
    ],

    faqs: [
      ['What is an age cutoff date?', 'It is the date used by an organization to determine a candidate’s age for eligibility.'],
      ['Can this calculator determine official eligibility?', 'It can calculate age mathematically, but the official eligibility rules of the organization always apply.']
    ]
  },

  // =========================================================
  // VEHICLE
  // =========================================================

  'fuel-cost': {
    title: 'Fuel Cost Calculator – Calculate Trip Fuel Cost',

    description:
      'Calculate fuel cost and cost per kilometre for a trip using distance, mileage and fuel price.',

    intro:
      'Use the Fuel Cost Calculator to estimate how much fuel a trip may cost based on your distance, vehicle mileage and fuel price.',

    sections: [
      {
        heading: 'How is fuel cost calculated?',
        formula:
          'Fuel Used = Distance ÷ Mileage\nFuel Cost = Fuel Used × Fuel Price'
      },
      {
        heading: 'How to use the Fuel Cost Calculator',
        steps: [
          'Enter the travel distance.',
          'Enter your vehicle mileage in km/l.',
          'Enter the fuel price per litre.',
          'View the estimated fuel consumption and trip cost.'
        ]
      }
    ],

    faqs: [
      ['How is fuel cost calculated?', 'Fuel required is estimated from distance divided by mileage, then multiplied by the fuel price.'],
      ['Can I use this for a car or bike?', 'Yes, the calculation can be used for vehicles where mileage and fuel price are known.']
    ]
  },

  mileage: {
    title: 'Mileage Calculator – Calculate Vehicle Mileage',

    description:
      'Calculate your vehicle mileage in km/l using distance travelled and fuel consumed.',

    intro:
      'Use the Mileage Calculator to determine your vehicle’s fuel efficiency from the distance travelled and fuel used.',

    sections: [
      {
        heading: 'What is vehicle mileage?',
        paragraphs: [
          'Mileage is the distance a vehicle can travel using a given amount of fuel. In India it is commonly expressed as kilometres per litre (km/l).'
        ]
      },
      {
        heading: 'Mileage formula',
        formula:
          'Mileage = Distance Travelled ÷ Fuel Used'
      },
      {
        heading: 'How to use the Mileage Calculator',
        steps: [
          'Enter the distance travelled.',
          'Enter the amount of fuel consumed.',
          'Calculate the mileage in km/l.'
        ]
      }
    ],

    faqs: [
      ['How is mileage calculated?', 'Divide the distance travelled by the amount of fuel used.'],
      ['What is km/l?', 'Km/l means kilometres travelled per litre of fuel.']
    ]
  },

  'car-emi': {
    title: 'Car Loan EMI Calculator – Calculate Car Loan EMI',

    description:
      'Calculate monthly car loan EMI, total interest and total payment with our free car loan EMI calculator.',

    intro:
      'Use the Car Loan EMI Calculator to estimate your monthly car loan repayment, total interest and total payment.',

    sections: [
      {
        heading: 'What is a car loan EMI?',
        paragraphs: [
          'A car loan EMI is the regular monthly payment made towards repaying a vehicle loan. It generally consists of principal and interest.'
        ]
      },
      {
        heading: 'How to use the Car Loan EMI Calculator',
        steps: [
          'Enter the car loan amount.',
          'Enter the annual interest rate.',
          'Enter the loan tenure.',
          'View the estimated monthly EMI and total repayment.'
        ]
      },
      {
        heading: 'What affects car loan EMI?',
        items: [
          ['Loan amount', 'A larger loan generally results in a higher EMI.'],
          ['Interest rate', 'A higher rate generally increases the EMI and total interest.'],
          ['Tenure', 'A longer tenure can lower EMI but may increase total interest.']
        ]
      }
    ],

    faqs: [
      ['What information is needed for a car EMI calculation?', 'You generally need the loan amount, interest rate and tenure.'],
      ['Does a longer car loan tenure reduce EMI?', 'Generally yes, although total interest may increase.']
    ]
  },

  'bike-emi': {
    title: 'Bike Loan EMI Calculator – Calculate Two-Wheeler EMI',

    description:
      'Calculate bike loan EMI, total interest and total payment with our free two-wheeler loan calculator.',

    intro:
      'Use the Bike Loan EMI Calculator to estimate the monthly EMI and overall repayment cost of a two-wheeler loan.',

    sections: [
      {
        heading: 'What is a bike loan EMI?',
        paragraphs: [
          'A bike loan EMI is the regular monthly payment made towards a two-wheeler loan.'
        ]
      },
      {
        heading: 'How to use the Bike Loan EMI Calculator',
        steps: [
          'Enter the bike loan amount.',
          'Enter the interest rate.',
          'Enter the loan tenure.',
          'View the estimated EMI and total payment.'
        ]
      }
    ],

    faqs: [
      ['Can I calculate bike loan EMI online?', 'Yes, enter the loan amount, rate and tenure to estimate the EMI.'],
      ['Does tenure affect bike EMI?', 'Yes. A longer tenure generally reduces the monthly EMI but can increase total interest.']
    ]
  },

  'loan-vs-cash': {
    title: 'Loan vs Cash Calculator – Compare Vehicle Financing',

    description:
      'Compare the estimated cost of paying cash versus taking a vehicle loan with our free loan vs cash calculator.',

    intro:
      'Use the Loan vs Cash Calculator to compare an upfront cash purchase with financing through a vehicle loan.',

    sections: [
      {
        heading: 'Loan vs cash: what should you compare?',
        paragraphs: [
          'When buying a vehicle, the decision between paying cash and taking a loan can depend on loan interest, available cash, opportunity cost and repayment affordability.'
        ]
      },
      {
        heading: 'How to use the Loan vs Cash Calculator',
        steps: [
          'Enter the vehicle price.',
          'Enter the available down payment or cash amount.',
          'Enter the loan rate and tenure.',
          'Compare the estimated financing cost with the cash purchase.'
        ]
      }
    ],

    faqs: [
      ['Is paying cash always cheaper?', 'Not necessarily. The comparison depends on financing costs and what you could otherwise do with your available cash.'],
      ['Does this calculator provide financial advice?', 'No. It provides a mathematical comparison based on your inputs.']
    ]
  },

  // =========================================================
  // DAILY LIFE
  // =========================================================

  age: {
    title: 'Age Calculator – Calculate Exact Age in Years, Months & Days',

    description:
      'Calculate your exact age in years, months and days using our free online age calculator.',

    intro:
      'Use the Age Calculator to calculate your exact age between your date of birth and a selected date.',

    sections: [
      {
        heading: 'What is an age calculator?',
        paragraphs: [
          'An age calculator determines the elapsed time between a date of birth and a selected date, usually expressed in years, months and days.'
        ]
      },
      {
        heading: 'How to use the Age Calculator',
        steps: [
          'Enter your date of birth.',
          'Select the date on which you want to calculate your age.',
          'View your age in years, months and days.'
        ]
      }
    ],

    faqs: [
      ['How is age calculated?', 'Age is calculated from the date of birth to the selected reference date.'],
      ['Can I calculate age on a future date?', 'Yes, if the calculator supports selecting a future reference date.']
    ]
  },

  'date-difference': {
    title: 'Date Difference Calculator – Calculate Days Between Dates',

    description:
      'Calculate the difference between two dates in days, months and years with our free date calculator.',

    intro:
      'Use the Date Difference Calculator to find the elapsed time between two calendar dates.',

    sections: [
      {
        heading: 'What is date difference?',
        paragraphs: [
          'Date difference is the amount of time between two calendar dates. Depending on the calculation, it can be expressed in days, months or years.'
        ]
      },
      {
        heading: 'How to use the Date Difference Calculator',
        steps: [
          'Select the start date.',
          'Select the end date.',
          'View the calculated difference.'
        ]
      }
    ],

    faqs: [
      ['Can I calculate the number of days between two dates?', 'Yes, the calculator can determine the difference between the selected dates.'],
      ['Does date difference account for leap years?', 'Date calculations can account for the actual calendar dates involved.']
    ]
  },

  discount: {
    title: 'Discount Calculator – Calculate Discounted Price',

    description:
      'Calculate discount amount, final price and savings instantly with our free discount calculator.',

    intro:
      'Use the Discount Calculator to find the discount amount and final price after applying a percentage discount.',

    sections: [
      {
        heading: 'How is a discount calculated?',
        formula:
          'Discount = Original Price × Discount Rate ÷ 100\nFinal Price = Original Price − Discount'
      },
      {
        heading: 'How to use the Discount Calculator',
        steps: [
          'Enter the original price.',
          'Enter the discount percentage.',
          'View the discount amount and final price.'
        ]
      }
    ],

    faqs: [
      ['How do I calculate a discount?', 'Multiply the original price by the discount percentage and divide by 100.'],
      ['How much will I pay after a discount?', 'Subtract the discount amount from the original price.']
    ]
  },

  'unit-conversion': {
    title: 'Unit Conversion Calculator – Convert Common Units',

    description:
      'Convert length, weight, temperature and volume units quickly with our free unit conversion calculator.',

    intro:
      'Use the Unit Conversion Calculator to convert values between commonly used units of length, weight, temperature and volume.',

    sections: [
      {
        heading: 'What is unit conversion?',
        paragraphs: [
          'Unit conversion changes a measurement from one unit to another while preserving the same physical quantity.'
        ]
      },
      {
        heading: 'Common unit conversions',
        paragraphs: [
          'Common conversions include kilometres to miles, kilograms to pounds, litres to gallons and Celsius to Fahrenheit.'
        ]
      },
      {
        heading: 'How to use the Unit Conversion Calculator',
        steps: [
          'Select the type of measurement.',
          'Select the original unit.',
          'Select the target unit.',
          'Enter the value and view the converted result.'
        ]
      }
    ],

    faqs: [
      ['What can I convert?', 'The calculator supports common length, weight, temperature and volume conversions.'],
      ['Are unit conversions exact?', 'Results depend on the conversion factors used by the calculator and may be rounded for display.']
    ]
  },

  time: {
    title: 'Time Duration Calculator – Calculate Time Difference',

    description:
      'Calculate the duration between two times with our free time duration calculator.',

    intro:
      'Use the Time Duration Calculator to find the elapsed time between two times of day.',

    sections: [
      {
        heading: 'What is time duration?',
        paragraphs: [
          'Time duration is the amount of elapsed time between a starting time and an ending time.'
        ]
      },
      {
        heading: 'How to use the Time Duration Calculator',
        steps: [
          'Enter the starting time.',
          'Enter the ending time.',
          'View the duration between the two times.'
        ]
      }
    ],

    faqs: [
      ['Can I calculate hours and minutes between two times?', 'Yes, the calculator can determine the duration between the entered times.'],
      ['Can it calculate an overnight duration?', 'If supported by the calculator, the ending time can be treated as occurring on the following day.']
    ]
  },

  // =========================================================
  // INDIA
  // =========================================================

  da: {
    title: 'DA Calculator – Calculate Dearness Allowance',

    description:
      'Calculate Dearness Allowance from basic pay and DA percentage with our free DA calculator.',

    intro:
      'Use the DA Calculator to estimate Dearness Allowance based on your basic pay and applicable DA percentage.',

    sections: [
      {
        heading: 'What is Dearness Allowance?',
        paragraphs: [
          'Dearness Allowance, commonly called DA, is an allowance linked to basic pay and is generally used to compensate employees or pensioners for changes in the cost of living.'
        ]
      },
      {
        heading: 'DA calculation formula',
        formula:
          'DA = Basic Pay × DA Rate ÷ 100'
      },
      {
        heading: 'How to use the DA Calculator',
        steps: [
          'Enter your basic pay.',
          'Enter the applicable DA percentage.',
          'View the estimated DA amount.'
        ]
      }
    ],

    faqs: [
      ['What is DA?', 'DA stands for Dearness Allowance.'],
      ['How is DA calculated?', 'DA can be calculated by multiplying basic pay by the applicable DA percentage and dividing by 100.'],
      ['Does the DA rate change?', 'Applicable DA rates can change according to government or employer rules.']
    ]
  },

  dr: {
    title: 'DR Calculator – Calculate Dearness Relief on Pension',

    description:
      'Calculate Dearness Relief on pension using pension amount and applicable DR percentage.',

    intro:
      'Use the DR Calculator to estimate Dearness Relief based on your eligible pension and applicable DR rate.',

    sections: [
      {
        heading: 'What is Dearness Relief?',
        paragraphs: [
          'Dearness Relief, commonly called DR, is an allowance provided to eligible pensioners and is generally linked to the applicable percentage and pension amount.'
        ]
      },
      {
        heading: 'DR calculation formula',
        formula:
          'DR = Eligible Pension × DR Rate ÷ 100'
      },
      {
        heading: 'How to use the DR Calculator',
        steps: [
          'Enter the applicable pension amount.',
          'Enter the DR percentage.',
          'View the estimated Dearness Relief.'
        ]
      }
    ],

    faqs: [
      ['What is DR?', 'DR stands for Dearness Relief.'],
      ['How is DR calculated?', 'DR can be estimated by applying the applicable DR percentage to the relevant pension amount.']
    ]
  },

  'da-arrears': {
    title: 'DA Arrears Calculator – Calculate Dearness Allowance Arrears',

    description:
      'Calculate estimated DA arrears when a Dearness Allowance rate is revised for previous months.',

    intro:
      'Use the DA Arrears Calculator to estimate the difference payable when a DA rate changes retrospectively for a previous period.',

    sections: [
      {
        heading: 'What are DA arrears?',
        paragraphs: [
          'DA arrears can arise when a revised Dearness Allowance rate is applied retrospectively and the difference between the earlier and revised amount becomes payable.'
        ]
      },
      {
        heading: 'How are DA arrears calculated?',
        formula:
          'Monthly Arrear = Revised DA − Previously Paid DA\nTotal Arrear = Sum of Monthly Arrears'
      },
      {
        heading: 'How to use the DA Arrears Calculator',
        steps: [
          'Enter the applicable basic pay.',
          'Enter the earlier DA rate.',
          'Enter the revised DA rate.',
          'Enter the number of applicable months.',
          'View the estimated arrears.'
        ]
      }
    ],

    faqs: [
      ['What are DA arrears?', 'They are the difference that may become payable when a DA revision is applied retrospectively.'],
      ['Does this calculate official arrears?', 'No. It provides a mathematical estimate based on the values entered.']
    ]
  },

  hra: {
    title: 'HRA Calculator – Calculate House Rent Allowance',

    description:
      'Calculate HRA exemption using salary, rent and city details with our free HRA calculator.',

    intro:
      'Use the HRA Calculator to estimate House Rent Allowance exemption based on the salary and rent information you provide.',

    sections: [
      {
        heading: 'What is HRA?',
        paragraphs: [
          'HRA stands for House Rent Allowance. It is a salary component that may be provided by an employer to employees who receive a qualifying salary structure.'
        ]
      },
      {
        heading: 'How is HRA exemption determined?',
        paragraphs: [
          'HRA exemption under the applicable tax rules can depend on salary components, rent paid, actual HRA received and whether the employee lives in a specified type of city.'
        ]
      },
      {
        heading: 'How to use the HRA Calculator',
        steps: [
          'Enter your relevant salary components.',
          'Enter HRA received.',
          'Enter rent paid.',
          'Enter the applicable location information.',
          'Review the estimated HRA exemption.'
        ]
      }
    ],

    faqs: [
      ['What is HRA?', 'HRA stands for House Rent Allowance.'],
      ['Is HRA fully tax-free?', 'Not necessarily. Exemption depends on the applicable tax rules and individual circumstances.'],
      ['Should I verify the result?', 'Yes. Tax calculations should be verified against current rules and your actual salary records.']
    ]
  },

  gratuity: {
    title: 'Gratuity Calculator – Calculate Gratuity Amount',

    description:
      'Calculate estimated gratuity based on salary and years of service with our free gratuity calculator.',

    intro:
      'Use the Gratuity Calculator to estimate the gratuity amount based on your salary and completed years of service.',

    sections: [
      {
        heading: 'What is gratuity?',
        paragraphs: [
          'Gratuity is a lump-sum benefit that may be payable to eligible employees based on applicable employment rules and qualifying service.'
        ]
      },
      {
        heading: 'How is gratuity calculated?',
        paragraphs: [
          'For employees covered by the Payment of Gratuity Act, the commonly used calculation is based on last drawn eligible wages and completed years of service, subject to applicable rules.'
        ],
        formula:
          'Gratuity = Last Drawn Salary × 15 ÷ 26 × Completed Years of Service'
      },
      {
        heading: 'How to use the Gratuity Calculator',
        steps: [
          'Enter the relevant last drawn salary.',
          'Enter completed years of service.',
          'View the estimated gratuity amount.'
        ]
      }
    ],

    faqs: [
      ['What is gratuity?', 'Gratuity is a lump-sum employment benefit payable to eligible employees under applicable rules.'],
      ['How is gratuity commonly calculated?', 'A commonly used statutory formula is salary × 15/26 × completed years of service, subject to applicable rules.'],
      ['Is the calculator result official?', 'No. It is an estimate and actual eligibility and amount depend on applicable employment rules.']
    ]
  },

  // =========================================================
  // HEALTH
  // =========================================================

  bmi: {
    title: 'BMI Calculator – Calculate Body Mass Index',

    description:
      'Calculate your Body Mass Index using height and weight with our free BMI calculator.',

    intro:
      'Use the BMI Calculator to calculate Body Mass Index from your height and weight and view the corresponding BMI category.',

    sections: [
      {
        heading: 'What is BMI?',
        paragraphs: [
          'BMI stands for Body Mass Index. It is a screening measure calculated from a person’s weight and height and is commonly used to categorize weight ranges.'
        ]
      },
      {
        heading: 'BMI formula',
        formula:
          'BMI = Weight (kg) ÷ Height² (m²)'
      },
      {
        heading: 'How to use the BMI Calculator',
        steps: [
          'Enter your weight.',
          'Enter your height.',
          'Calculate your BMI.',
          'Review the displayed BMI category.'
        ]
      },
      {
        heading: 'Important note about BMI',
        paragraphs: [
          'BMI is a general screening measure and does not directly measure body fat or account for every factor affecting health. It should not be treated as a medical diagnosis.'
        ]
      }
    ],

    faqs: [
      ['What is BMI?', 'BMI is Body Mass Index, a screening measure based on height and weight.'],
      ['What is the BMI formula?', 'BMI is calculated as weight in kilograms divided by height in metres squared.'],
      ['Is BMI a medical diagnosis?', 'No. BMI is a screening measure and should be interpreted in context.']
    ]
  },

  bmr: {
    title: 'BMR Calculator – Calculate Basal Metabolic Rate',

    description:
      'Calculate your estimated Basal Metabolic Rate and daily calorie needs with our free BMR calculator.',

    intro:
      'Use the BMR Calculator to estimate the energy your body uses at rest based on the information you provide.',

    sections: [
      {
        heading: 'What is BMR?',
        paragraphs: [
          'BMR stands for Basal Metabolic Rate. It represents an estimate of the energy the body needs to maintain basic physiological functions while at rest.'
        ]
      },
      {
        heading: 'What affects BMR?',
        paragraphs: [
          'BMR estimates can depend on factors such as age, sex, height and body weight. Different formulas may produce slightly different estimates.'
        ]
      },
      {
        heading: 'How to use the BMR Calculator',
        steps: [
          'Enter the requested personal measurements.',
          'Select the appropriate calculation options.',
          'Calculate your estimated BMR.',
          'Use the result as an estimate rather than an exact measurement of energy expenditure.'
        ]
      },
      {
        heading: 'BMR vs daily calorie needs',
        paragraphs: [
          'BMR represents resting energy requirements. Daily calorie needs are generally higher because they also include physical activity and other energy expenditure.'
        ]
      }
    ],

    faqs: [
      ['What is BMR?', 'BMR is Basal Metabolic Rate, an estimate of energy required for basic body functions at rest.'],
      ['Is BMR the same as daily calorie requirement?', 'No. Daily calorie needs also account for activity and other energy expenditure.'],
      ['Is BMR an exact measurement?', 'No. It is an estimate produced using a mathematical formula.']
    ]
  }
};


// =========================================================
// Helper functions
// =========================================================

export function getCalculatorSEO(slug, tool) {
  return (
    calculatorSEO[slug] || {
      title: `${tool.title} – Free Online Calculator`,
      description: `${tool.description} Use the free ${tool.title.toLowerCase()} from TheCalculate.`,
      intro: tool.description,
      sections: [],
      faqs: []
    }
  );
}