// components/calculators/registry.js
import EMICalculator from './EMICalculator';
import LoanInterestRateCalculator from './LoanInterestRateCalculator';
import GSTCalculator from './GSTCalculator';
import SIPCalculator from './SIPCalculator';
import FDCalculator from './FDCalculator';
import RDCalculator from './RDCalculator';
import PPFCalculator from './PPFCalculator';
import EPFCalculator from './EPFCalculator';
import SalaryCalculator from './SalaryCalculator';
import PensionCalculator from './PensionCalculator';
import IncomeTaxCalculator from './IncomeTaxCalculator';

import CGPACalculator from './CGPACalculator';
import SGPACalculator from './SGPACalculator';
import PercentageCalculator from './PercentageCalculator';
import AttendanceCalculator from './AttendanceCalculator';
import MarksCalculator from './MarksCalculator';
import GPACalculator from './GPACalculator';
import AgeEligibilityCalculator from './AgeEligibilityCalculator';
import YGPACalculator from './YGPACalculator';
import DGPACalculator from './DGPACalculator';

import FuelCostCalculator from './FuelCostCalculator';
import MileageCalculator from './MileageCalculator';
import CarEMICalculator from './CarEMICalculator';
import BikeEMICalculator from './BikeEMICalculator';
import LoanVsCashCalculator from './LoanVsCashCalculator';

import AgeCalculator from './AgeCalculator';
import DateDifferenceCalculator from './DateDifferenceCalculator';
import DiscountCalculator from './DiscountCalculator';
import UnitConversionCalculator from './UnitConversionCalculator';
import TimeCalculator from './TimeCalculator';
import BMICalculator from './BMICalculator';
import BMRCalculator from './BMRCalculator';

import DACalculator from './DACalculator';
import DRCalculator from './DRCalculator';
import DAArrearsCalculator from './DAArrearsCalculator';
import HRACalculator from './HRACalculator';
import GratuityCalculator from './GratuityCalculator';

import ComingSoon from './ComingSoon';

// Add an entry here whenever you build a new calculator's UI component.
// Anything not listed falls back to <ComingSoon /> so the site never 404s.
// Some entries intentionally share one component (e.g. car-emi / bike-emi
// both just need a loan EMI calculator -- no need to duplicate the logic).
const registry = {
  // Money
  emi: EMICalculator,
  'loan-interest-rate': LoanInterestRateCalculator,
  gst: GSTCalculator,
  sip: SIPCalculator,
  fd: FDCalculator,
  rd: RDCalculator,
  ppf: PPFCalculator,
  epf: EPFCalculator,
  salary: SalaryCalculator,
  pension: PensionCalculator,
  'income-tax': IncomeTaxCalculator,

  // Student
  cgpa: CGPACalculator,
  sgpa: SGPACalculator,
  percentage: PercentageCalculator,
  attendance: AttendanceCalculator,
  'required-attendance': AttendanceCalculator,
  marks: MarksCalculator,
  gpa: GPACalculator,
  'age-eligibility': AgeEligibilityCalculator,
  ygpa: YGPACalculator,
  dgpa: DGPACalculator,

  // Vehicle
  'fuel-cost': FuelCostCalculator,
  mileage: MileageCalculator,
  'car-emi': CarEMICalculator,
  'bike-emi': BikeEMICalculator,
  'loan-vs-cash': LoanVsCashCalculator,

  // Daily life
  age: AgeCalculator,
  'date-difference': DateDifferenceCalculator,
  discount: DiscountCalculator,
  'unit-conversion': UnitConversionCalculator,
  time: TimeCalculator,
  bmi: BMICalculator,
  bmr: BMRCalculator,

  // India specific
  da: DACalculator,
  dr: DRCalculator,
  'da-arrears': DAArrearsCalculator,
  hra: HRACalculator,
  gratuity: GratuityCalculator,
};

export function getCalculatorComponent(slug) {
  return registry[slug] || ComingSoon;
}
