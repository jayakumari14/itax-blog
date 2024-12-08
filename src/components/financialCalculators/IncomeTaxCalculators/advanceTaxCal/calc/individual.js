/* 23-24 ---------------------------------------------------- */
/* for year old regime individual */
export const nextTaxableValueOld_male = (salary) => {
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

  return taxableValue;
};
// console.log(nextTaxableValue_male(1000000)); // Output will be 112500

/* ---------------------------------------------------- */

// /* new regime individual */
export const nextTaxableValueNew_male = (salary) => {
  let taxableValue = 0;

  if (salary <= 250000) {
    taxableValue = 0; // Nil
  } else if (salary <= 500000) {
    taxableValue = (salary - 250000) * 0.05; // 5% for the amount above 250,000
  } else if (salary <= 750000) {
    taxableValue = (salary - 500000) * 0.1 + 12500; // 10% for the amount above 500,000
  } else if (salary <= 1000000) {
    taxableValue = (salary - 750000) * 0.15 + 37500; // 15% for the amount above 750,000
  } else if (salary <= 1250000) {
    taxableValue = (salary - 1000000) * 0.2 + 75000; // 20% for the amount above 1,000,000
  } else if (salary <= 1500000) {
    taxableValue = (salary - 1250000) * 0.25 + 125000; // 25% for the amount above 1,250,000
  } else {
    taxableValue = (salary - 1500000) * 0.3 + 187500; // 30% for the amount above 1,500,000
  }
  return taxableValue;
};
// console.log(nextTaxableValue_male(1500000)); // Output will be 87500
/* ---------------------------------------------------- */

/* for female old regime */
//

export const nextTaxableValueOld_female = (salary) => {
  let taxableValue = 0;
  const exemptionLimit = 300000;

  if (salary <= exemptionLimit) {
    taxableValue = 0; // No tax
  } else if (salary <= 500000) {
    taxableValue = 0; // No tax
  } else if (salary <= 600000) {
    taxableValue = (salary - 500000) * 0.2; // 20% for the amount between 500,000 and 600,000
  } else if (salary <= 900000) {
    taxableValue = 20000 + (salary - 600000) * 0.2; // 20000 for the first 100,000 + 20% for the rest
  } else {
    taxableValue = 20000 + 60000 + (salary - 900000) * 0.2; // 20000 for the first 100,000 + 60000 for the next 300,000 + 20% for the rest
  }

  return taxableValue;
};
// console.log(nextTaxableValueNew_female(600000)); // Output will be 55000

/* ---------------------------------------------------- */

/* for female new regime */
export const nextTaxableValueNew_female = (salary) => {
  let taxableValue = 0;
  const exemptionLimit = 300000;

  if (salary <= exemptionLimit) {
    taxableValue = 0; // No tax
  } else if (salary <= 500000) {
    taxableValue = (salary - exemptionLimit) * 0.05; // 5% for the amount between 300,000 and 500,000
  } else if (salary <= 600000) {
    taxableValue = 10000 + (salary - 500000) * 0.05; // 10000 for the first 500,000 + 5% for the rest
  } else if (salary <= 900000) {
    taxableValue = 20000 + (salary - 600000) * 0.1; // 20000 for the first 100,000 + 10% for the rest
  } else {
    taxableValue = 35000 + (salary - 900000) * 0.15; // 35000 for the first 300,000 + 15% for the rest
  }

  return taxableValue;
};
// console.log(nextTaxableValueOld_female(900000)); // Output will be 120000

/* ---------------------------------------------------- */
/* upto old regime lakh for seiner citizen */
export const nextTaxableValue_seinerCitizen = (salary) => {
  let taxableValue = 0;

  if (salary <= 500000) {
    taxableValue = 0; // Exempt
  } else if (salary <= 600000) {
    taxableValue = (salary - 300000) * 0.2 - 40000; // 5% for the amount between 300,000 and 500,000
  } else if (salary <= 900000) {
    taxableValue = (salary - 500000) * 0.2; // 10000 for the first 500,000 + 5% for the rest
  } else if (salary <= 1000000) {
    taxableValue = 20000 + (salary - 600000) * 0.2; // 20000 for the first 600,000 + 10% for the rest
  } else if (salary <= 1200000) {
    taxableValue = 100000 + (salary - 1000000) * 0.3; // 95000 for the first 1,000,000 + 15% for the rest
  } else if (salary <= 1500000) {
    taxableValue = 160000 + (salary - 1200000) * 0.3; // 145000 for the first 1,200,000 + 20% for the rest
  } else {
    taxableValue = 250000 + (salary - 1500000) * 0.3; // 245000 for the first 1,500,000 + 30% for the rest
  }

  return taxableValue;
};

/* ---------------------------------------------------- */
/* Income Tax Slab for Super Senior Citizens in AY 2024-25 (FY 2023-24) new Regime */
export const nextTaxableValue_superSeinerCitizen = (salary) => {
  let taxableValue = 0;

  if (salary <= 300000) {
    taxableValue = 0; // Exempt
  } else if (salary <= 500000) {
    taxableValue = (salary - 300000) * 0.05; // 5% for the amount between 300,000 and 500,000
  } else if (salary <= 600000) {
    taxableValue = 10000 + (salary - 500000) * 0.05; // 10000 for the first 500,000 + 5% for the rest
  } else if (salary <= 900000) {
    taxableValue = 15000 + (salary - 600000) * 0.1; // 20000 for the first 600,000 + 10% for the rest
  } else if (salary <= 1000000) {
    taxableValue = 45000 + (salary - 900000) * 0.15; // 70000 for the first 900,000 + 15% for the rest
  } else if (salary <= 1200000) {
    taxableValue = 60000 + (salary - 1000000) * 0.15; // 95000 for the first 1,000,000 + 15% for the rest
  } else if (salary <= 1500000) {
    taxableValue = 100000 + (salary - 1200000) * 0.2; // 145000 for the first 1,200,000 + 20% for the rest
  } else {
    taxableValue = 160000 + (salary - 1500000) * 0.3; // 245000 for the first 1,500,000 + 30% for the rest
  }

  return taxableValue;
};
// console.log(nextTaxableValue_superSeinerCitizen(1600000));

// export const TaxableValue_Surcharge = ({ value, type }) => {
//     let taxableValue = 0;

//     if ( type === "individual" || type === "HUF" || type === "artificial" || type === "judicial" ) {
//         if (value <= 250000) {
//             taxableValue = 0;
//         } else if (value <= 500000) {
//             taxableValue = (value - 250000) * 0.05;
//         } else if (value <= 1000000) {
//             taxableValue = 12500 + (value - 500000) * 0.2;
//         } else {
//             taxableValue = 112500 + (value - 1000000) * 0.2;
//         }

//         if (value > 1000000) {
//             taxableValue += taxableValue * 0.2;
//         }
//     }

//     if (type === "senior_citizen" || type === "super_senior_citizen") {
//         if (value <= 300000) {
//             taxableValue = 0;
//         } else if (value <= 500000) {
//             taxableValue = (value - 300000) * 0.05;
//         } else if (value <= 1000000) {
//             taxableValue = 10000 + (value - 500000) * 0.2;
//         } else {
//             taxableValue =
//                 type === "senior_citizen"
//                     ? 110000 + (value - 1000000) * 0.3
//                     : 100000 + (value - 1000000) * 0.3;
//         }
//     }

//     if (type === "above50") {
//         if (value <= 5000000) {
//             taxableValue = 0;
//         } else if (value <= 10000000) {
//             taxableValue = (value - 5000000) * 0.1;
//         } else if (value <= 20000000) {
//             taxableValue = 500000 + (value - 10000000) * 0.15;
//         } else if (value <= 50000000) {
//             taxableValue = 2500000 + (value - 20000000) * 0.25;
//         } else if (value <= 100000000) {
//             taxableValue = 9500000 + (value - 50000000) * 0.25;
//         } else {
//             taxableValue = 24500000 + (value - 100000000) * 0.36;
//         }
//     }

//     return taxableValue;
// };

export const TaxableValue_Surcharge = (value, tax) => {
  let taxableValue = 0;
  if (tax <= 5000000) {
    taxableValue = 0; // Less than Rs.50 lakh	NIL
  } else if (tax <= 10000000) {
    taxableValue = value * 0.1; // Rs.50 lakh – Rs.1crore	10%
  } else if (tax <= 20000000) {
    taxableValue = value * 0.15; // Rs.1 crore – Rs.2 crore	15%
  } else if (tax <= 50000000) {
    taxableValue = value * 0.25; // Rs.2 crore – Rs.5 crore	25%
  } else {
    taxableValue = value * 0.37; // More than Rs.10 crore	37%
  }
  return taxableValue;
};
