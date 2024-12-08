const Surcharge = (value, salary) => {
  let taxableValue = 0;
  if (salary <= 5000000) {
    taxableValue = 0; // Less than Rs.50 lakh	NIL
  } else if (salary <= 10000000) {
    taxableValue = value * 0.1; // Rs.50 lakh – Rs.1crore	10%
  } else if (salary <= 20000000) {
    taxableValue = value * 0.15; // Rs.1 crore – Rs.2 crore	15%
  } else if (salary <= 50000000) {
    taxableValue = value * 0.25; // Rs.2 crore – Rs.5 crore	25%
  } else {
    taxableValue = value * 0.37; // More than Rs.10 crore	37%
  }
  return taxableValue;
};
export default function calc_HUF(salary) {
  let taxableValue = 0;

  if (salary <= 250000) {
    taxableValue = 0; // Nil
  } else if (salary <= 500000) {
    taxableValue = (salary - 250000) * 0.05; // 5% for the amount above 250,000
  } else if (salary <= 1000000) {
    taxableValue = (salary - 500000) * 0.2 + 12500; // 20% for the amount above 500,000
  } else {
    taxableValue = (salary - 1000000) * 0.3 + 112500; // 30% for the amount above 1,000,000
  }

  const sCharge = Surcharge(taxableValue, salary);
  const healthAndEducationCess = sCharge * 0.44;
  return {
    incomeTax: taxableValue,
    surcharge: sCharge,
    healthAndEducationCess: healthAndEducationCess,
    totalTaxLiability: taxableValue + sCharge + healthAndEducationCess,
  };
}
