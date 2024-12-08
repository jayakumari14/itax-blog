// Individual resident
export function newCalculateTaxIndividual2425(income) {
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
// Senior resident
export function newCalculateTaxSenior2425(income) {
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
// Super Senior resident
export function newCalculateTaxSuperSenior2425(income) {
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
// FOR HUF
export function newCalculateTaxHUF2425(income) {
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
// For AOP
export function newCalculateTaxAOP2425(income) {
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
