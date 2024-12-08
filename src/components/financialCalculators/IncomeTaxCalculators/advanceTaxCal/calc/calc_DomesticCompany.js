/*
Domestic Company for AY 2023-24 
Company	30%

surcharge-




*/
const Surcharge = (value, salary) => {
  let taxableValue = 0;
  if (salary > 10000000 && salary <= 100000000) {
    taxableValue = value * 0.07; // 7% - Taxable income above ₹ 1 crore– Up to ₹ 10 crore
  } else if (salary > 100000000) {
    taxableValue = value * 0.12; // 12% - Taxable income above ₹ 10 crore
  }
  // else if (salary >  100000000 && optingCondition) {
  //     taxableValue = value * 0.1;//  10% - If Company opting for taxability u/s 115BAA or Section 115BAB
  // }
  return taxableValue;
};

export default function calc_DomesticCompany(salary) {
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
