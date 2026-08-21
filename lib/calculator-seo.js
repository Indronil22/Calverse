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

 student: {
  title: 'Student Calculators – Free Academic & Education Calculators',

  description:
    'Free student calculators for CGPA, SGPA, YGPA, DGPA, GPA, percentage, marks, attendance and other academic calculations.',

  intro:
    'Use our free student calculators to quickly solve common academic calculations. Choose the calculator that matches your requirement and enter your academic details to get an instant result.',

  sections: [
    {
      heading: 'Student Calculators for Academic Calculations',

      paragraphs: [
        'Students often need to perform different calculations throughout their academic journey, including grade-point calculations, percentage calculations, marks calculations and attendance calculations.',
        'This collection brings these commonly used academic calculators together in one place so you can choose the tool that matches your particular requirement.'
      ]
    },

    {
      heading: 'Choose the Right Student Calculator',

      paragraphs: [
        'Different academic calculations require different inputs. Some calculators work with subject credits and grade points, while others use marks, classes attended or other academic information.',
        'Select the calculator based on the type of result you want to calculate rather than using the same method for every academic calculation.'
      ]
    },

    {
      heading: 'Academic Performance Calculators',

      paragraphs: [
        'Academic performance can be represented in several ways depending on the grading system used by a university or educational institution.',
        'Use the relevant calculator for cumulative performance, semester-level performance, yearly performance, grade-point calculations or percentage-related calculations.'
      ],

      items: [
        [
          'CGPA Calculator',
          'Calculate cumulative grade-point performance using the required academic inputs.'
        ],
        [
          'SGPA Calculator',
          'Calculate semester-level grade-point performance using subject information.'
        ],
        [
          'YGPA Calculator',
          'Calculate yearly academic performance using the required semester information.'
        ],
        [
          'DGPA Calculator',
          'Calculate the required degree-level grade-point result according to the available academic data.'
        ],
        [
          'GPA Calculator',
          'Calculate GPA using the grading information required by your academic system.'
        ]
      ]
    },

    {
      heading: 'Marks and Percentage Calculators',

      paragraphs: [
        'Marks and percentage calculations are useful for checking examination results, required scores and overall academic performance.',
        'Use the appropriate marks or percentage calculator when you need to convert, estimate or calculate an academic score.'
      ],

      items: [
        [
          'Percentage Calculator',
          'Calculate percentages from marks or other numerical values.'
        ],
        [
          'Marks Calculator',
          'Work out academic marks and related score requirements.'
        ],
        [
          'Marks Needed Calculator',
          'Estimate the marks required to reach a target academic result.'
        ]
      ]
    },

    {
      heading: 'Attendance Calculator',

      paragraphs: [
        'Attendance requirements can vary between colleges and universities. An attendance calculator can help students understand their current attendance percentage and estimate the classes they may need to attend to reach a particular target.'
      ]
    },

    {
      heading: 'How to Use the Student Calculators',

      steps: [
        'Choose the academic calculator that matches your requirement.',
        'Enter the information requested by that calculator.',
        'Check that the values you entered are correct.',
        'Calculate the result.',
        'Compare the result with the academic rules or calculation method used by your institution.'
      ]
    },

    {
      heading: 'Why Academic Calculation Rules Can Differ',

      paragraphs: [
        'Universities and educational institutions can use different grading scales, credit structures, rounding rules and calculation methods.',
        'For this reason, an online calculator should be treated as a calculation aid. When the result is required for an official academic purpose, students should verify the applicable rules with their university or institution.'
      ]
    },

    {
      heading: 'Student Calculator Tips',

      items: [
        [
          'Use accurate academic data',
          'Enter the marks, credits, grades or attendance information exactly as shown in your academic records.'
        ],
        [
          'Check the grading system',
          'Make sure the calculator matches the grading or credit system used by your institution.'
        ],
        [
          'Verify conversion formulas',
          'Academic conversions such as grade points to percentage can differ between institutions.'
        ],
        [
          'Keep official records as the reference',
          'Use your university or college result and official academic rules whenever an exact official value is required.'
        ]
      ]
    }
  ],

  faqs: [
    [
      'What student calculators are available?',
      'The student calculator collection includes tools for academic calculations such as CGPA, SGPA, YGPA, DGPA, GPA, percentage, marks and attendance.'
    ],
    [
      'Which student calculator should I use?',
      'Choose the calculator according to the type of academic result you want to calculate. Each calculator is designed for a specific type of calculation.'
    ],
    [
      'Are student calculator results official?',
      'The calculators provide estimates or mathematical results based on the information entered. Official academic calculations should always be verified against your institution’s rules.'
    ],
    [
      'Can the same calculation method be used at every university?',
      'Not necessarily. Universities can use different grading scales, credit systems, conversion formulas and rounding rules.'
    ],
    [
      'Can I use these calculators for college and university results?',
      'Yes. They can be used as calculation aids, provided that the inputs and calculation method are appropriate for your academic system.'
    ],
    [
      'Why should I check my university rules?',
      'Academic institutions may define their own grading, credit, conversion and rounding rules, so the official institutional method should be used whenever required.'
    ]
  ]
},

  vehicle: {
  title: 'Vehicle Calculators — Fuel Cost, Mileage & Travel Calculators',

  description:
    'Use our free vehicle calculators to estimate fuel costs, mileage, travel expenses and other useful vehicle-related calculations for cars, motorcycles and other vehicles.',

  intro:
    'Vehicle calculators make it easier to estimate common travel and vehicle-related costs. Choose the calculator that matches your requirement, enter the relevant values and get an instant estimate.',

  sections: [
    {
      heading: 'Vehicle Calculators',
      paragraphs: [
        'Vehicle calculators help you perform practical calculations related to travelling, fuel consumption, mileage and vehicle running expenses.',
        'They can be useful when planning road trips, estimating commuting expenses, comparing vehicle running costs and preparing a travel budget.',
      ],
    },

    {
      heading: 'Types of Vehicle Calculators',
      paragraphs: [
        'Different vehicle calculators are designed for different types of calculations. Depending on the information you have, you can estimate fuel expenses, mileage and other travel-related values.',
      ],
      subsections: [
        {
          heading: 'Fuel Cost Calculator',
          paragraphs: [
            'Estimate the approximate fuel expense for a journey using distance, vehicle mileage and fuel price.',
          ],
        },
        {
          heading: 'Mileage Calculator',
          paragraphs: [
            'Calculate or understand vehicle mileage using distance and fuel consumption information.',
          ],
        },
        {
          heading: 'Trip Cost Calculator',
          paragraphs: [
            'Estimate the expected cost of travelling based on the relevant journey and vehicle information.',
          ],
        },
        {
          heading: 'Vehicle Running Cost Calculators',
          paragraphs: [
            'Use vehicle-related calculation tools to estimate and compare common running expenses.',
          ],
        },
      ],
    },

    {
      heading: 'When Should You Use a Vehicle Calculator?',
      paragraphs: [
        'Vehicle calculators can be useful before a road trip, during regular commuting or when comparing the expected running costs of different vehicles.',
      ],
      bullets: [
        'Planning a long-distance road trip.',
        'Estimating regular commuting expenses.',
        'Comparing vehicle running costs.',
        'Planning a travel budget.',
        'Estimating recurring travel expenses.',
        'Understanding the effect of different mileage values.',
      ],
    },

    {
      heading: 'Information Required for Vehicle Calculations',
      paragraphs: [
        'The information required depends on the particular calculator. Common inputs can include distance, mileage, fuel price and other journey-related values.',
        'Using realistic values generally produces a more useful estimate. Actual vehicle mileage and running costs can vary depending on traffic, road conditions, driving habits, vehicle condition and other factors.',
      ],
    },

    {
      heading: 'Planning Vehicle Expenses',
      paragraphs: [
        'Vehicle expenses can change depending on how far you travel, vehicle efficiency, fuel prices, traffic conditions and driving habits. Vehicle calculators can help convert these inputs into simple estimates for travel planning.',
        'Calculator results should be treated as estimates rather than guaranteed real-world expenses because actual costs may differ from the values entered.',
      ],
    },
  ],

  faqs: [
    {
      question: 'What are vehicle calculators used for?',
      answer:
        'Vehicle calculators are used for practical calculations related to travelling, fuel consumption, mileage and vehicle running expenses.',
    },
    {
      question: 'Which vehicle calculator should I use?',
      answer:
        'Choose the calculator based on the value you want to calculate, such as fuel expenses, mileage or another vehicle-related measurement.',
    },
    {
      question: 'Can vehicle calculators be used for motorcycles?',
      answer:
        'Yes. Many vehicle calculations can be used for motorcycles, scooters, cars and other vehicles as long as the required input values are available.',
    },
    {
      question: 'Are vehicle calculator results exact?',
      answer:
        'Vehicle calculator results are estimates based on the values entered. Actual expenses can vary because real-world driving conditions may differ from the assumptions used in the calculation.',
    },
  ],
},

  // =========================================================
  // DAILY LIFE
  // =========================================================

age: {
  title: 'Age Calculator – Calculate Exact Age in Years, Months & Days',

  description:
    'Calculate your exact age in years, months, days, hours and minutes with our free online Age Calculator.',

  intro:
    'Calculate your exact age from your date of birth using our free online Age Calculator.',
  
  sections: [],
  faqs: [],
},
'date-difference': {
  title: 'Date Difference Calculator – Calculate Days Between Dates',

  description:
    'Calculate the difference between two dates in days, months and years with our free online date difference calculator.',

  intro:
    'Calculate the elapsed time between two calendar dates quickly and easily.',

  sections: [],
  faqs: [],
},
discount: {
  title: 'Discount Calculator – Calculate Discounted Price',

  description:
    'Calculate discount amount, savings and final price with our free online discount calculator.',

  intro:
    'Calculate the amount you save and the final price after applying a percentage discount.',

  sections: [],
  faqs: [],
},
'unit-conversion': {
  title: 'Unit Conversion Calculator – Convert Common Units',

  description:
    'Convert length, weight, temperature and volume units quickly with our free online unit conversion calculator.',

  intro:
    'Convert common measurements between different units with an instant online calculation.',

  sections: [],
  faqs: [],
},
time: {
  title: 'Time Duration Calculator – Calculate Time Difference',

  description:
    'Calculate the duration between two times in hours and minutes with our free online time duration calculator.',

  intro:
    'Calculate the elapsed time between a starting time and ending time and view the result in hours, minutes and total minutes.',

  sections: [],
  faqs: [],
},

  // =========================================================
  // INDIA
  // =========================================================

  da: {
  title: 'DA Calculator – Calculate Dearness Allowance',

  description:
    'Calculate Dearness Allowance and basic pay plus DA using our free online DA calculator.',

  intro:
    'Calculate the estimated Dearness Allowance amount from your basic pay and applicable DA rate.',

  sections: [],
  faqs: [],
},
dr: {
  title: 'DR Calculator – Calculate Dearness Relief',

  description:
    'Calculate Dearness Relief on pension and estimate total pension with DR using our free online DR calculator.',

  intro:
    'Calculate the estimated Dearness Relief amount using basic pension and the applicable DR rate.',

  sections: [],
  faqs: [],
},
'da-arrears': {
  title: 'DA Arrears Calculator – Calculate Dearness Allowance Arrears',

  description:
    'Calculate estimated DA arrears from basic pay, old DA rate, new DA rate and arrear period with our free online DA arrears calculator.',

  intro:
    'Estimate monthly and total Dearness Allowance arrears when a revised DA rate applies retrospectively.',

  sections: [],
  faqs: [],
},
hra: {
  title: 'HRA Calculator – Calculate HRA Exemption and Taxable HRA',

  description:
    'Calculate HRA exemption and taxable HRA based on basic salary, HRA received, rent paid and city type with our free online HRA calculator.',

  intro:
    'Estimate HRA exemption and taxable HRA using your basic salary, HRA received, monthly rent and metro or non-metro city category.',

  sections: [],
  faqs: [],
},
gratuity: {
  title: 'Gratuity Calculator – Calculate Gratuity Amount Online',

  description:
    'Calculate your estimated gratuity amount based on last drawn salary and years of service with our free online gratuity calculator.',

  intro:
    'Use the Gratuity Calculator to estimate gratuity based on your last drawn Basic Salary plus DA and eligible years of service.',

  sections: [],
  faqs: [],
},

  // =========================================================
  // HEALTH
  // =========================================================

  bmi: {
  title: 'BMI Calculator – Calculate Your Body Mass Index',

  description:
    'Calculate your Body Mass Index (BMI) and view your general BMI category using our free online BMI calculator.',

  intro:
    'Use the BMI Calculator to calculate BMI from your weight and height and view the corresponding general category.',

  sections: [],
  faqs: [],
},
bmr: {
  title: 'BMR Calculator – Calculate Basal Metabolic Rate',

  description:
    'Calculate your Basal Metabolic Rate (BMR) and estimated daily calorie needs with our free online BMR calculator.',

  intro:
    'Use the BMR Calculator to estimate calories burned at rest and approximate daily calorie requirements based on your activity level.',

  sections: [],
  faqs: [],
},

// =========================================================
// Helper functions
// =========================================================

};

export function getCalculatorSEO(slug, tool) {
  return (
    calculatorSEO[slug] || {
      title: `${tool.title} – Free Online Calculator`,
      description: `${tool.description} Use the free ${tool.title.toLowerCase()} from TheCalculate.`,
      intro: tool.description,
      sections: [],
      faqs: [],
    }
  );
}