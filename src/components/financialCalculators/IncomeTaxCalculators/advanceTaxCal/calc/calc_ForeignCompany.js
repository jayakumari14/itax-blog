`
Foreign Company for AY 2023-24 
Company	40%
surcharge-
2% - Taxable income above ₹ 1 crore - Up to ₹ 10 crore
5% - Taxable above ₹10 crore


health ka 4% sb par h
`;
const Surcharge = (value, salary) => {
  let taxableValue = 0;
  if (salary > 10000000 && salary <= 100000000) {
    taxableValue = value * 0.02; //  2% surcharge for taxable income above  ₹1 crore but up to  ₹10 crore
  } else if (salary > 100000000) {
    taxableValue = value * 0.05; //  5% surcharge for taxable income above  ₹10 crore
  }
  return taxableValue;
};

export default function calc_ForeignCompany(salary) {
  let taxableValue = salary * 0.4;

  const sCharge = Surcharge(taxableValue, salary);
  const healthAndEducationCess = (taxableValue + sCharge) * 0.04;
  return {
    incomeTax: taxableValue,
    surcharge: sCharge,
    healthAndEducationCess: healthAndEducationCess,
    totalTaxLiability: taxableValue + sCharge + healthAndEducationCess,
  };
}
