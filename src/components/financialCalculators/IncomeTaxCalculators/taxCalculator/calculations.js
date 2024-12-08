// FOR 2018 - 2019
// individual
export const calculateNetIncomeTaxIndividual1819 = (income) => {
  if (income <= 250000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.03;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.03;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000 && income <= 5000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let eduCess = inc * 0.03;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income > 5000000 && income <= 10000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.1;
    let eduCess = (inc + sur) * 0.03;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 10000000 && income <= 20000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.15;
    let eduCess = (inc + sur) * 0.03;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 20000000 && income <= 50000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.25;
    let eduCess = (inc + sur) * 0.03;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 50000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.37;
    let eduCess = (inc + sur) * 0.03;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  }
};
// senior citizen
export const calculateNetIncomeTaxSeniorC1819 = (income) => {
  if (income <= 300000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let tax = (income - 300000) * 0.05;
    let eduCess = tax * 0.03;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 10000;
    let eduCess = tax * 0.03;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let inc = (income - 1000000) * 0.3 + 110000;
    let eduCess = inc * 0.03;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  }
};
// super senior citizen
export const calculateNetIncomeTaxSuperSeniorC1819 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2;
    let eduCess = tax * 0.03;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let tax = (income - 500000) * 0.3 + 100000;
    let eduCess = tax * 0.03;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  }
};
// for HUF/AOP/BOI 2018-21
export const calculateNetIncomeTaxHUF_AOP_BOI1821 = (income) => {
  if (income <= 250000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let tax = (income - 1000000) * 0.3 + 112500;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  }
};

// ************** FOR 2019 - 2020 ***********************************
// individual
export const calculateNetIncomeTaxIndividual1920 = (income) => {
  if (income <= 250000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 350000) {
    let inc = (income - 300000) * 0.05;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income <= 500000) {
    let inc = (income - 250000) * 0.05;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let inc = (income - 500000) * 0.2 + 12500;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000 && income <= 5000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income > 5000000 && income <= 10000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.1;
    let eduCess = (inc + sur) * 0.04;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 10000000 && income <= 20000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.15;
    let eduCess = (inc + sur) * 0.04;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 20000000 && income <= 50000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.25;
    let eduCess = (inc + sur) * 0.04;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 50000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.37;
    let eduCess = (inc + sur) * 0.04;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  }
};
//  senior citizen
export const calculateNetIncomeTaxSeniorC1920 = (income) => {
  if (income <= 300000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let inc = (income - 500000) * 0.05;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let inc = (income - 500000) * 0.2 + 10000;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let inc = (income - 1000000) * 0.3 + 110000;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  }
};
//  super senior citizen
export const calculateNetIncomeTaxSuperSeniorC1920 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let inc = (income - 500000) * 0.2;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let inc = (income - 1000000) * 0.3 + 100000;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  }
};

// ************** FOR 2020 - 2021 ***********************************
// individual
export const calculateNetIncomeTaxIndividual2021 = (income) => {
  if (income <= 250000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000 && income <= 5000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  } else if (income > 5000000 && income <= 10000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.1;
    let eduCess = (inc + sur) * 0.04;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 10000000 && income <= 20000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.15;
    let eduCess = (inc + sur) * 0.04;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 20000000 && income <= 50000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.25;
    let eduCess = (inc + sur) * 0.04;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  } else if (income > 50000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let sur = inc * 0.37;
    let eduCess = (inc + sur) * 0.04;
    return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  }
};
// senior citizen
export const calculateNetIncomeTaxSeniorC2021 = (income) => {
  if (income <= 300000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let tax = (income - 300000) * 0.05;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 10000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let tax = (income - 1000000) * 0.3 + 110000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  }
};
// super senior
export const calculateNetIncomeTaxSuperSeniorC2021 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let tax = (income - 1000000) * 0.3 + 100000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  }
};
// for HUF/AOP/BOI after 2021
export const calculateNetIncomeTaxHUF_AOP_BOI21beyond = (income) => {
  if (income <= 250000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000 && income <= 5000000) {
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
    let tax = (income - 1000000) * 0.3 + 112500;
    let scharge = tax * 0.25;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 50000000) {
    let tax = (income - 1000000) * 0.3 + 112500;
    let scharge = tax * 0.37;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  }
};

// *************** FOR 2021 - 2022  **********************
// individual
export const calculateNetIncomeTaxIndividual2122 = (income) => {
  if (income <= 250000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let inc = (income - 1000000) * 0.3 + 112500;
    let eduCess = inc * 0.04;
    return { taxRate: inc, surcharge: 0, educationCess: eduCess };
  }
  // else if (income > 5000000 && income <= 10000000) {
  //   let inc = (income - 1000000) * 0.3 + 112500;
  //   let sur = inc * 0.1;
  //   let eduCess = (inc + sur) * 0.04;
  //   return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  // } else if (income > 10000000 && income <= 20000000) {
  //   let inc = (income - 1000000) * 0.3 + 112500;
  //   let sur = inc * 0.15;
  //   let eduCess = (inc + sur) * 0.04;
  //   return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  // } else if (income > 20000000 && income <= 50000000) {
  //   let inc = (income - 1000000) * 0.3 + 112500;
  //   let sur = inc * 0.25;
  //   let eduCess = (inc + sur) * 0.04;
  //   return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  // } else if (income > 50000000) {
  //   let inc = (income - 1000000) * 0.3 + 112500;
  //   let sur = inc * 0.37;
  //   let eduCess = (inc + sur) * 0.04;
  //   return { taxRate: inc, surcharge: sur, educationCess: eduCess };
  // }
};
// senior citizen
export const calculateNetIncomeTaxSeniorC2122 = (income) => {
  if (income <= 300000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 500000) {
    let tax = (income - 300000) * 0.05;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 10000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let tax = (income - 1000000) * 0.3 + 110000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  }
};
// super senior citizen
export const calculateNetIncomeTaxSuperSeniorC2122 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let tax = (income - 1000000) * 0.3 + 100000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  }
};

// *************** FOR 2022 - 2023  **********************
// // individual from 2.5lac
// const calculateNetIncomeTaxIndividual2223 = (income) => {
//   if (income <= 250000) {
//     return { taxRate: 0, surcharge: 0, educationCess: 0 };
//   } else if (income <= 500000) {
//     let tax = (income - 250000) * 0.05;
//     let eduCess = tax * 0.04;
//     return { taxRate: tax, surcharge: 0, educationCess: eduCess };
//   } else if (income <= 750000) {
//     let tax = (income - 500000) * 0.1 + 12500;
//     let eduCess = tax * 0.04;
//     return { taxRate: tax, surcharge: 0, educationCess: eduCess };
//   } else if (income <= 1000000) {
//     let tax = (income - 750000) * 0.15 + 37500;
//     let eduCess = tax * 0.04;
//     return { taxRate: tax, surcharge: 0, educationCess: eduCess };
//   } else if (income > 1000000 && income <= 1250000) {
//     let inc = (income - 1000000) * 0.2 + 75000;
//     let eduCess = inc * 0.04;
//     return { taxRate: inc, surcharge: 0, educationCess: eduCess };
//   } else if (income > 1250000 && income <= 15000000) {
//     let inc = (income - 1250000) * 0.25 + 125000;
//     let sur = inc * 0.1;
//     let eduCess = (inc + sur) * 0.04;
//     return { taxRate: inc, surcharge: sur, educationCess: eduCess };
//   } else if (income > 15000000) {
//     let inc = (income - 15000000) * 0.3 + 187500;
//     let sur = inc * 0.15;
//     let eduCess = (inc + sur) * 0.04;
//     return { taxRate: inc, surcharge: sur, educationCess: eduCess };
//   }
// };
// individual with starting from 5lac
export const calculateNetIncomeTaxIndividual2223 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let tax = (income - 1000000) * 0.3 + 112500;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  }
};

// senior citizen
export const calculateNetIncomeTaxSeniorC2223 = (income) => {
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
export const calculateNetIncomeTaxSuperSeniorC2223 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 1000000) {
    let tax = (income - 1000000) * 0.3 + 100000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  }
};

// *************** FOR 2023 - 2024  **********************
// individual- after 5lac
export const calculateNetIncomeTaxIndividual2324 = (income) => {
  if (income <= 500000) {
    return { taxRate: 0, surcharge: 0, educationCess: 0 };
  } else if (income <= 1000000) {
    let tax = (income - 500000) * 0.2 + 12500;
    let eduCess = tax * 0.04;
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
    let tax = (income - 1000000) * 0.3 + 112500;
    let scharge = tax * 0.25;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  } else if (income > 50000000) {
    let tax = (income - 1000000) * 0.3 + 112500;
    let scharge = tax * 0.37;
    let eduCess = (tax + scharge) * 0.04;
    return { taxRate: tax, surcharge: scharge, educationCess: eduCess };
  }
};
//for Domestic Company 23_24
export const calculateNetIncomeTaxDComapny2324 = (income) => {
  if (income <= 10000000) {
    let taxableValue = income * 0.3;
    let eduCess = taxableValue * 0.04;
    return { taxRate: taxableValue, surcharge: 0, educationCess: eduCess };
  } else if (income >= 10000000 && income <= 100000000) {
    let taxableValue = income * 0.3;
    let sCharge = Math.trunc(taxableValue * 0.07);
    let eduCess = (taxableValue + sCharge) * 0.04;

    return {
      taxRate: taxableValue,
      surcharge: sCharge,
      educationCess: eduCess,
    };
  } else if (income > 100000000) {
    console.log('inside 10cr +');
    let taxableValue = income * 0.3;
    let sCharge = taxableValue * 0.12;
    let eduCess = (taxableValue + sCharge) * 0.04;
    return {
      taxRate: taxableValue,
      surcharge: sCharge,
      educationCess: eduCess,
    };
  }
};
//For Foreign Company for AY 2023-24
export const calculateNetIncomeTaxFCompany2324 = (income) => {
  if (income <= 10000000) {
    let taxableValue = income * 0.4;
    let eduCess = taxableValue * 0.04;
    return { taxRate: taxableValue, surcharge: 0, educationCess: eduCess };
  } else if (income >= 10000000 && income <= 100000000) {
    let taxableValue = income * 0.4;
    let sCharge = taxableValue * 0.02;
    let eduCess = (taxableValue + sCharge) * 0.04;

    return {
      taxRate: taxableValue,
      surcharge: sCharge,
      educationCess: eduCess,
    };
  } else if (income > 100000000) {
    let taxableValue = income * 0.4;
    let sCharge = taxableValue * 0.05;
    let eduCess = (taxableValue + sCharge) * 0.04;
    return {
      taxRate: taxableValue,
      surcharge: sCharge,
      educationCess: eduCess,
    };
  }
};
// for Firm And LLP 2324
export const calculatedNetTaxFirm_LLP2324 = (income) => {
  if (income <= 10000000) {
    let taxableValue = income * 0.3;
    let eduCess = taxableValue * 0.04;

    return { taxRate: taxableValue, surcharge: 0, educationCess: eduCess };
  } else if (income >= 10000000) {
    let taxableValue = income * 0.3;
    let sCharge = taxableValue * 0.12;
    let eduCess = (taxableValue + sCharge) * 0.04;

    return {
      taxRate: taxableValue,
      surcharge: sCharge,
      educationCess: eduCess,
    };
  }
};

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

// for cooperative socities
export const calculateNetIncomeTaxCoop = (income) => {
  console.log('no', cooperative115bad);
  if (income <= 10000) {
    let tax = income * 0.1;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 10000 && income <= 20000) {
    let tax = income * 0.2 - 1000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 20000 && income <= 10000000) {
    let tax = income * 0.3 - 3000;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
  } else if (income > 10000000) {
    let tax = (income - 20000) * 0.3 + 3000;
    let SCharge = Math.trunc(tax * 0.07);
    let eduCess = Math.trunc((tax + SCharge) * 0.04);
    return { taxRate: tax, surcharge: SCharge, educationCess: eduCess };
  }
};
// for cooperative socities section115BAD
export const calculateNetIncomeTaxCoopsection115BAD = (income) => {
  console.log('yes', cooperative115bad);

  if (income > 10) {
    let tax = income * 0.22;
    let SCharge = Math.trunc(tax * 0.1);
    let eduCess = Math.trunc((tax + SCharge) * 0.04);
    return { taxRate: tax, surcharge: SCharge, educationCess: eduCess };
  }
};
// for non-resident income < 500000
export const calculateNonResidentialTax = (income) => {
  let tax = (income - 250000) * 0.05;
  let eduCess = tax * 0.04;
  return { taxRate: tax, surcharge: 0, educationCess: eduCess };
};
