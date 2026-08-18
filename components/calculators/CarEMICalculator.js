'use client';
import LoanEMICalculator from './LoanEMICalculator';

export default function CarEMICalculator() {
  return <LoanEMICalculator defaultPrincipal={800000} defaultRate={9} defaultTenure={60} />;
}
