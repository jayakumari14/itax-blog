// Individual resident or non resident
export function newCalculateTaxIndividual2324(income) {
  // less than 2.5l
  if (income <= 250000) {
    return { netTax: 0, surcharge: 0, cess: 0 };
  }
  // over 2.5l less than 5l
  else if (income > 250000 && income <= 500000) {
    let tax = (income - 240000) * 0.05;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 5l less than 7.5l
  else if (income > 500000 && income <= 750000) {
    let tax = (income - 500000) * 0.1 + 15000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 7.5l less than 10l
  else if (income > 750000 && income <= 1000000) {
    let tax = (income - 750000) * 0.15 + 45000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 10l less than 12.5l
  else if (income > 1000000 && income <= 1250000) {
    let tax = (income - 1200000) * 0.2 + 90000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 12.5l less than 15l
  else if (income > 1250000 && income <= 1500000) {
    let tax = (income - 1250000) * 0.25 + 90000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 15l
  else {
    let tax = (income - 1500000) * 0.3 + 150000;
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
    else if (income > 50000000) netSurcharge += tax * 0.25;

    let eduCess = (netSurcharge + tax) * 0.04;
    return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
  }
}
// Senior resident or non resident
export function newCalculateTaxSenior2324(income) {
  // less than 3l
  if (income <= 300000) {
    return { netTax: 0, surcharge: 0, cess: 0 };
  }
  // over 3l less than 6l
  else if (income > 300000 && income <= 600000) {
    let tax = (income - 300000) * 0.05;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 6l less than 9l
  else if (income > 600000 && income <= 900000) {
    let tax = (income - 600000) * 0.1 + 15000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 9l less than 12l
  else if (income > 900000 && income <= 1200000) {
    let tax = (income - 900000) * 0.15 + 45000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 12l less than 15l
  else if (income > 1200000 && income <= 1500000) {
    let tax = (income - 1200000) * 0.2 + 90000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 15l
  else {
    let tax = (income - 1500000) * 0.3 + 150000;
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
    else if (income > 50000000) netSurcharge += tax * 0.25;

    let eduCess = (netSurcharge + tax) * 0.04;
    return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
  }
}
// Super Senior resident or non resident
export function newCalculateTaxSuperSenior2324(income) {
  // less than 3l
  if (income <= 300000) {
    return { netTax: 0, surcharge: 0, cess: 0 };
  }
  // over 3l less than 6l
  else if (income > 300000 && income <= 600000) {
    let tax = (income - 300000) * 0.05;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 6l less than 9l
  else if (income > 600000 && income <= 900000) {
    let tax = (income - 600000) * 0.1 + 15000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 9l less than 12l
  else if (income > 900000 && income <= 1200000) {
    let tax = (income - 900000) * 0.15 + 45000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 12l less than 15l
  else if (income > 1200000 && income <= 1500000) {
    let tax = (income - 1200000) * 0.2 + 90000;
    let eduCess = tax * 0.04;
    return { netTax: tax, surcharge: 0, cess: eduCess };
  }
  // over 15l
  else {
    let tax = (income - 1500000) * 0.3 + 150000;
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
    else if (income > 50000000) netSurcharge += tax * 0.25;

    let eduCess = (netSurcharge + tax) * 0.04;
    return { netTax: tax, surcharge: netSurcharge, cess: eduCess };
  }
}
