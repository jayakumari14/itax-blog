const Surcharge = (value, salary) => {
  let taxableValue = 0;
  if (salary <= 10000000) {
    value * 0.12; // more than 1cr
  }
  return taxableValue;
};
export default function calc_LLP(salary) {
  let taxableValue = salary * 0.3;

  const sCharge = Surcharge(taxableValue, salary);
  const healthAndEducationCess = (taxableValue + sCharge) * 0.04;
  return {
    incomeTax: taxableValue,
    surcharge: sCharge,
    healthAndEducationCess: healthAndEducationCess,
    totalTaxLiability: taxableValue + sCharge + healthAndEducationCess,
  };
}
