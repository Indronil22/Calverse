// components/calculators/registry.js
import EMICalculator from './EMICalculator';
import GSTCalculator from './GSTCalculator';
import SIPCalculator from './SIPCalculator';
import CGPACalculator from './CGPACalculator';
import AttendanceCalculator from './AttendanceCalculator';
import FuelCostCalculator from './FuelCostCalculator';
import AgeCalculator from './AgeCalculator';
import DACalculator from './DACalculator';
import BMICalculator from './BMICalculator';
import DiscountCalculator from './DiscountCalculator';
import ComingSoon from './ComingSoon';

// Add an entry here whenever you build a new calculator's UI component.
// Anything not listed falls back to <ComingSoon /> so the site never 404s.
const registry = {
  emi: EMICalculator,
  gst: GSTCalculator,
  sip: SIPCalculator,
  cgpa: CGPACalculator,
  attendance: AttendanceCalculator,
  'fuel-cost': FuelCostCalculator,
  age: AgeCalculator,
  da: DACalculator,
  bmi: BMICalculator,
  discount: DiscountCalculator,
};

export function getCalculatorComponent(slug) {
  return registry[slug] || ComingSoon;
}
