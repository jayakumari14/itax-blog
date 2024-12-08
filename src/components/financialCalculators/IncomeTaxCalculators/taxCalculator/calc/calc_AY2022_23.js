// // individual from 2.5lac
// export function calculateNetIncomeTaxIndividual2223 (income) {
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
export function calculateNetIncomeTaxIndividual2223(income) {
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
}

// senior citizen
export function calculateNetIncomeTaxSeniorC2223(income) {
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
}
// super senior citizen
export function calculateNetIncomeTaxSuperSeniorC2223(income) {
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
}
