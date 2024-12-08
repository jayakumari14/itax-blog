import { DOMESTIC_COMPANY_CATEGORY } from '../constants';
// Individual resident
export function oldCalculateTaxIndividual2425(income) {
  // less than 2.5l
  if (income <= 250000) {
    return { netTax: 0, surcharge: 0, cess: 0 };
  }
  // over 2.5l less than 5l
  else if (income > 250000 && income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 5l less than 10l
  else if (income > 500000 && income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 10l
  else {
    let tax = (income - 1000000) * 0.3 + 112500;
    let netSurcharge = 0;
    // Calculating surcharge
    // 50 L to 1 Cr
    if (income > 5000000 && income <= 10000000) netSurcharge += tax * 0.1;
    // 1 Cr to 2 Cr
    else if (income > 10000000 && income <= 20000000)
      netSurcharge += tax * 0.15;
    // 2 Cr to 5 Cr
    else if (income > 20000000 && income <= 50000000)
      netSurcharge += tax * 0.25;
    // 5 Cr+
    else if (income > 50000000) netSurcharge += tax * 0.37;

    let eduCess = (netSurcharge + tax) * 0.04;
    return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
  }
}

// Senior
export function oldCalculateTaxSenior2425(income) {
  // less than 3l
  if (income <= 300000) {
    return { netTax: 0, surcharge: 0, cess: 0 };
  }
  // over 3l less than 5l
  else if (income > 300000 && income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 5l less than 10l
  else if (income > 500000 && income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 10000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 10l
  else {
    let tax = (income - 1000000) * 0.3 + 110000;
    let netSurcharge = 0;
    // Calculating surcharge
    // 50 L to 1 Cr
    if (income > 5000000 && income <= 10000000) netSurcharge += tax * 0.1;
    // 1 Cr to 2 Cr
    else if (income > 10000000 && income <= 20000000)
      netSurcharge += tax * 0.15;
    // 2 Cr to 5 Cr
    else if (income > 20000000 && income <= 50000000)
      netSurcharge += tax * 0.25;
    // 5 Cr+
    else if (income > 50000000) netSurcharge += tax * 0.37;

    let eduCess = (netSurcharge + tax) * 0.04;
    return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
  }
}
// Super  Senior
export function oldCalculateTaxSuperSenior2425(income) {
  // less than 5l
  if (income <= 500000) {
    return { netTax: 0, surcharge: 0, cess: 0 };
  }
  // over 5l less than 10l
  else if (income > 500000 && income <= 1000000) {
    let tax = (income - 500000) * 0.2;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 10l
  else {
    let tax = (income - 1000000) * 0.3 + 100000;
    let netSurcharge = 0;
    // Calculating surcharge
    // 50 L to 1 Cr
    if (income > 5000000 && income <= 10000000) netSurcharge += tax * 0.1;
    // 1 Cr to 2 Cr
    else if (income > 10000000 && income <= 20000000)
      netSurcharge += tax * 0.15;
    // 2 Cr to 5 Cr
    else if (income > 20000000 && income <= 50000000)
      netSurcharge += tax * 0.25;
    // 5 Cr+
    else if (income > 50000000) netSurcharge += tax * 0.37;

    let eduCess = (netSurcharge + tax) * 0.04;
    return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
  }
}

// For HUF
export function oldCalculateTaxHUF2425(income) {
  // less than 2.5l
  if (income <= 250000) {
    return { netTax: 0, surcharge: 0, cess: 0 };
  }
  // over 2.5l less than 5l
  else if (income > 250000 && income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 5l less than 10l
  else if (income > 500000 && income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 10l
  else {
    let tax = (income - 1000000) * 0.3 + 112500;
    let netSurcharge = 0;
    // Calculating surcharge
    // 50 L to 1 Cr
    if (income > 5000000 && income <= 10000000) netSurcharge += tax * 0.1;
    // 1 Cr to 2 Cr
    else if (income > 10000000 && income <= 20000000)
      netSurcharge += tax * 0.15;
    // 2 Cr to 5 Cr
    else if (income > 20000000 && income <= 50000000)
      netSurcharge += tax * 0.25;
    // 5 Cr+
    else if (income > 50000000) netSurcharge += tax * 0.37;

    let eduCess = (netSurcharge + tax) * 0.04;
    return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
  }
}

//FOR AOP
export function oldCalculateTaxAOP2425(income) {
  // less than 2.5l
  if (income <= 250000) {
    return { netTax: 0, surcharge: 0, cess: 0 };
  }
  // over 2.5l less than 5l
  else if (income > 250000 && income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 5l less than 10l
  else if (income > 500000 && income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 10l
  else {
    let tax = (income - 1000000) * 0.3 + 112500;
    let netSurcharge = 0;
    // Calculating surcharge
    // 50 L to 1 Cr
    if (income > 5000000 && income <= 10000000) netSurcharge += tax * 0.1;
    // 1 Cr to 2 Cr
    else if (income > 10000000 && income <= 20000000)
      netSurcharge += tax * 0.15;
    // 2 Cr to 5 Cr
    else if (income > 20000000 && income <= 50000000)
      netSurcharge += tax * 0.25;
    // 5 Cr+
    else if (income > 50000000) netSurcharge += tax * 0.37;

    let eduCess = (netSurcharge + tax) * 0.04;
    return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
  }
}

// FOR DOMESTIC COMPANY
export function calculateTaxDomestic2425(income, category) {
  let rate = 0;
  let surchargeRate = 0;
  let tax = 0;
  let netSurcharge = 0;
  let eduCess = 0;

  // setting surcharge rate
  if (income > 10000000 && income <= 100000000) {
    surchargeRate = 0.07;
  } else if (income > 100000000) {
    surchargeRate = 0.12;
  } else if (
    category === DOMESTIC_COMPANY_CATEGORY.SECTION_115BAA ||
    category === DOMESTIC_COMPANY_CATEGORY.SECTION_115BAB
  ) {
    surchargeRate = 0.1;
  }
  // setting tax rate
  if (
    category === DOMESTIC_COMPANY_CATEGORY.LESS_THAN_400 ||
    category === DOMESTIC_COMPANY_CATEGORY.SECTION_115BA
  ) {
    rate = 0.25;
  } else if (category === DOMESTIC_COMPANY_CATEGORY.SECTION_115BAA) {
    rate = 0.22;
  } else if (category === DOMESTIC_COMPANY_CATEGORY.SECTION_115BAB) {
    rate = 0.15;
  } else if (category === DOMESTIC_COMPANY_CATEGORY.OTHER) {
    rate = 0.3;
  }

  tax = income * rate;
  netSurcharge = tax * surchargeRate;
  eduCess = (netSurcharge + tax) * 0.04;
  return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
}
// FOR FOREIGN COMPANY
export function calculateTaxForeign2425(income) {
  let rate = 0.4;
  let surchargeRate = 0;
  let tax = 0;
  let netSurcharge = 0;
  let eduCess = 0;

  // setting surcharge rate
  if (income > 10000000 && income <= 100000000) {
    surchargeRate = 0.02;
  } else if (income > 100000000) {
    surchargeRate = 0.05;
  }
  tax = income * rate;
  netSurcharge = tax * surchargeRate;
  eduCess = (netSurcharge + tax) * 0.04;
  return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
}
// FOR FIRM/LLP COMPANY
export function calculateTaxFirm2425(income) {
  let rate = 0.3;
  let surchargeRate = 0;
  let tax = 0;
  let netSurcharge = 0;
  let eduCess = 0;

  // setting surcharge rate
  if (income > 10000000) {
    surchargeRate = 0.12;
  }
  tax = income * rate;
  netSurcharge = tax * surchargeRate;
  eduCess = (netSurcharge + tax) * 0.04;
  return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
}
