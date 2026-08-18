'use client';
import LoanEMICalculator from './LoanEMICalculator';

export default function BikeEMICalculator() {
  return <LoanEMICalculator defaultPrincipal={100000} defaultRate={11} defaultTenure={36} />;
}
