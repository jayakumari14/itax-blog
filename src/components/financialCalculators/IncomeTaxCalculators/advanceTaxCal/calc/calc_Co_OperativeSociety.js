const Surcharge = (value, salary) => {
  let taxableValue = 0;
  if (salary >= 10000) {
    taxableValue = value * 0.1; //
  } else if (salary <= 10000 && salary >= 20000) {
    taxableValue = value * 0.2; //
  } else if (salary <= 20000) {
    taxableValue = value * 0.3; //
  }
  return taxableValue;
};

// export default function calc_Co_OperativeSociety(salary) {
//     let taxableValue = 0;
//     if (salary >= 10000) {
//         taxableValue = salary* 0.1; //
//     } else if (salary <= 10000 && salary >= 20000) {
//         taxableValue = salary * 0.2; //
//     } else if (salary <= 20000) {
//         taxableValue = salary * 0.3; //
//     }
//     const sCharge = Surcharge(taxableValue, salary);
//     const healthAndEducationCess =(taxableValue + sCharge )* 0.04;
//     return {
//         incomeTax: taxableValue,
//         surcharge: sCharge,
//         healthAndEducationCess: healthAndEducationCess,
//         totalTaxLiability: taxableValue + sCharge + healthAndEducationCess,
//     };
// }
`
co-operative society

Up to Rs. 10,000	-10%
Rs 10,000 to Rs 20,000	-20%
Above Rs 20,000	        -30%


if - >Co-operative society opted and qualify for section 115BAD  |yes

tax 22% + 10% surcharge + 4% health and education
`;
export default function calc_Co_OperativeSociety(salary) {
  let taxableValue = 0;
  if (10000 >= salary) {
    taxableValue = salary * 0.1; //
  } else if (10000 < salary && 20000 > salary) {
    taxableValue = salary * 0.2 - 1000; //
  } else if (20000 <= salary) {
    taxableValue = salary * 0.3 - 3000; //
  }

  const sCharge = Surcharge(taxableValue, salary);
  const healthAndEducationCess = (taxableValue + sCharge) * 0.04;
  return {
    incomeTax: taxableValue,
    surcharge: sCharge,
    healthAndEducationCess: healthAndEducationCess,
    totalTaxLiability: taxableValue + sCharge + healthAndEducationCess,
  };
}
