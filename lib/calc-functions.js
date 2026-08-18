// lib/calc-functions.js
// Pure, framework-free calculation logic. Kept separate from UI components
// so it's easy to test and easy to reuse (e.g. in an API route later).

export function calcEMI(principal, annualRatePct, tenureMonths) {
  const r = annualRatePct / 12 / 100;
  const n = tenureMonths;
  if (r === 0) {
    const emi = principal / n;
    return { emi, totalPayment: principal, totalInterest: 0 };
  }
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;
  return { emi, totalPayment, totalInterest };
}

export function calcGST(amount, ratePct, mode) {
  // mode: 'add' (amount is pre-GST) or 'remove' (amount is GST-inclusive)
  if (mode === 'remove') {
    const base = amount / (1 + ratePct / 100);
    const gst = amount - base;
    return { baseAmount: base, gstAmount: gst, totalAmount: amount };
  }
  const gst = (amount * ratePct) / 100;
  return { baseAmount: amount, gstAmount: gst, totalAmount: amount + gst };
}

export function calcSIP(monthlyInvestment, annualReturnPct, years) {
  const r = annualReturnPct / 12 / 100;
  const n = years * 12;
  const futureValue =
    r === 0
      ? monthlyInvestment * n
      : monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthlyInvestment * n;
  const gains = futureValue - invested;
  return { futureValue, invested, gains };
}

export function calcFD(principal, annualRatePct, years, compoundingPerYear = 4) {
  const n = compoundingPerYear;
  const maturity = principal * Math.pow(1 + annualRatePct / 100 / n, n * years);
  return { maturity, interest: maturity - principal };
}

export function calcRD(monthlyDeposit, annualRatePct, months) {
  const r = annualRatePct / 400; // quarterly-compounded approximation per common RD formula
  let maturity = 0;
  for (let i = 1; i <= months; i++) {
    const remainingQuarters = (months - i + 1) / 3;
    maturity += monthlyDeposit * Math.pow(1 + r, remainingQuarters);
  }
  const invested = monthlyDeposit * months;
  return { maturity, invested, interest: maturity - invested };
}

export function calcPPF(yearlyInvestment, years, annualRatePct = 7.1) {
  let balance = 0;
  for (let i = 0; i < years; i++) {
    balance = (balance + yearlyInvestment) * (1 + annualRatePct / 100);
  }
  const invested = yearlyInvestment * years;
  return { maturity: balance, invested, interest: balance - invested };
}

export function calcCGPAToPercentage(cgpa) {
  // Common Indian university approximation: percentage = CGPA * 9.5
  return cgpa * 9.5;
}

export function calcCGPAFromGrades(subjects) {
  // subjects: [{ credits, gradePoint }]
  const totalCredits = subjects.reduce((sum, s) => sum + Number(s.credits || 0), 0);
  const weighted = subjects.reduce(
    (sum, s) => sum + Number(s.credits || 0) * Number(s.gradePoint || 0),
    0
  );
  return totalCredits === 0 ? 0 : weighted / totalCredits;
}

export function calcAttendance(attended, total) {
  if (total === 0) return 0;
  return (attended / total) * 100;
}

export function calcRequiredAttendance(attended, total, targetPct) {
  // How many more classes (all attended) needed to reach targetPct
  // (attended + x) / (total + x) >= target/100
  const target = targetPct / 100;
  if (attended / total >= target) {
    // Already there — calculate how many can be missed while staying above target
    let missable = 0;
    while ((attended) / (total + missable + 1) >= target) {
      missable++;
    }
    return { status: 'ahead', classesCanSkip: missable };
  }
  let x = 0;
  while ((attended + x) / (total + x) < target && x < 100000) {
    x++;
  }
  return { status: 'behind', classesNeeded: x };
}

export function calcFuelCost(distanceKm, mileageKmPerL, fuelPricePerL) {
  const litersNeeded = distanceKm / mileageKmPerL;
  const cost = litersNeeded * fuelPricePerL;
  return { litersNeeded, cost, costPerKm: cost / distanceKm };
}

export function calcMileage(distanceKm, litersUsed) {
  return distanceKm / litersUsed;
}

export function calcAge(birthDate, onDate = new Date()) {
  const start = new Date(birthDate);
  const end = new Date(onDate);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  return { years, months, days, totalDays };
}

export function calcDateDifference(dateA, dateB) {
  const a = new Date(dateA);
  const b = new Date(dateB);
  const diffMs = Math.abs(b - a);
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = (totalDays % 365) % 30;
  return { totalDays, years, months, days };
}

export function calcDiscount(originalPrice, discountPct) {
  const discountAmount = (originalPrice * discountPct) / 100;
  return { discountAmount, finalPrice: originalPrice - discountAmount };
}

export function calcDA(basicPay, daPct) {
  const daAmount = (basicPay * daPct) / 100;
  return { daAmount, totalPay: basicPay + daAmount };
}

export function calcHRAExemption({ basicSalary, hraReceived, rentPaid, isMetro }) {
  const option1 = hraReceived;
  const option2 = isMetro ? basicSalary * 0.5 : basicSalary * 0.4;
  const option3 = rentPaid - basicSalary * 0.1;
  const exemption = Math.max(0, Math.min(option1, option2, option3));
  return { exemption, taxableHRA: Math.max(0, hraReceived - exemption) };
}

export function calcGratuity(lastDrawnSalary, yearsOfService) {
  // Payment of Gratuity Act, 1972 formula (for employees covered under the Act)
  const gratuity = (lastDrawnSalary * 15 * yearsOfService) / 26;
  return { gratuity };
}

export function calcIncomeTaxNewRegime(taxableIncome) {
  // FY 2025-26 new regime slabs (illustrative — verify current slabs before relying on this)
  const slabs = [
    { upto: 400000, rate: 0 },
    { upto: 800000, rate: 5 },
    { upto: 1200000, rate: 10 },
    { upto: 1600000, rate: 15 },
    { upto: 2000000, rate: 20 },
    { upto: 2400000, rate: 25 },
    { upto: Infinity, rate: 30 },
  ];
  let tax = 0;
  let lower = 0;
  for (const slab of slabs) {
    if (taxableIncome > lower) {
      const taxableInSlab = Math.min(taxableIncome, slab.upto) - lower;
      tax += (taxableInSlab * slab.rate) / 100;
      lower = slab.upto;
    } else {
      break;
    }
  }
  const cess = tax * 0.04;
  return { tax, cess, totalTax: tax + cess };
}

export function calcBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  let category = 'Normal';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi >= 25 && bmi < 30) category = 'Overweight';
  else if (bmi >= 30) category = 'Obese';
  return { bmi, category };
}

export function calcBMR({ weightKg, heightCm, age, gender, activityLevel }) {
  // Mifflin-St Jeor equation
  let bmr =
    10 * weightKg + 6.25 * heightCm - 5 * age + (gender === 'male' ? 5 : -161);
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };
  const tdee = bmr * (activityMultipliers[activityLevel] || 1.2);
  return { bmr, tdee };
}
