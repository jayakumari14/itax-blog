// Individual resident or non resident
export function oldCalculateTaxIndividual2324(income) {
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
export function oldCalculateTaxSenior2324(income) {
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
export function oldCalculateTaxSuperSenior2324(income) {
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
