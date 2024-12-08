// *************** FOR 2024 - 2025  **********************
// individual with starting from 5lac
export const calculateNetIncomeTaxIndividual2425 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04; // 112500 * .04 = 4500
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income >= 1000000 && income <= 5000000) {
    let tax = (income - 1000000) * 0.3 + 112500;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 5000000 && income <= 10000000) {
    let tax = (income - 1000000) * 0.3 + 112500;
    let scharge = tax * 0.1;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 10000000 && income <= 20000000) {
    let tax = (income - 1000000) * 0.3 + 112500;
    let scharge = tax * 0.15;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 20000000 && income <= 50000000) {
    let tax = (income - 1000000) * 0.3 + 112500; // 1012500
    let scharge = tax * 0.25; //
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 50000000) {
    let tax = (income - 1000000) * 0.3 + 112500;
    let scharge = tax * 0.37;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  }
};
// senior citizen
export const calculateNetIncomeTaxSeniorC2425 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 10000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income >= 1000000 && income <= 5000000) {
    let tax = (income - 1000000) * 0.3 + 110000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 5000000 && income <= 10000000) {
    let tax = (income - 1000000) * 0.3 + 110000;
    let scharge = tax * 0.1;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 10000000 && income <= 20000000) {
    let tax = (income - 1000000) * 0.3 + 110000;
    let scharge = tax * 0.15;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 20000000 && income <= 50000000) {
    let tax = (income - 1000000) * 0.3 + 110000;
    let scharge = tax * 0.25;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 50000000) {
    let tax = (income - 1000000) * 0.3 + 110000;
    let scharge = tax * 0.37;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  }
};
// super senior citizen
export const calculateNetIncomeTaxSuperSeniorC2425 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income >= 1000000 && income <= 5000000) {
    let tax = (income - 1000000) * 0.3 + 100000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 5000000 && income <= 10000000) {
    let tax = (income - 1000000) * 0.3 + 100000;
    let scharge = tax * 0.1;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 10000000 && income <= 20000000) {
    let tax = (income - 1000000) * 0.3 + 100000;
    let scharge = tax * 0.15;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 20000000 && income <= 50000000) {
    let tax = (income - 1000000) * 0.3 + 100000;
    let scharge = tax * 0.25;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 50000000) {
    let tax = (income - 1000000) * 0.3 + 100000;
    let scharge = tax * 0.37;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  }
};
