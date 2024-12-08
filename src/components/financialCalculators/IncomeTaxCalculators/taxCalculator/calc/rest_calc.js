
// for AOP/BOI, Domestic, Foreign, LLP 2018-21
export function calculateNetIncomeTaxAOP1821(income) {
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
}
// for AOP/BOI, Domestic, Foreign, LLP after 2021
export function calculateNetIncomeTaxAOP21beyond(income) {
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
}
// for cooperative socities
export function calculateNetIncomeTaxCoop(income) {
    if (income <= 10000) {
        let tax = income * 0.1;
        return { taxRate: tax, surcharge: 0, educationCess: 0 };
    } else if (income > 10000 && income <= 20000) {
        let tax = income * 0.2;
        let eduCess = tax * 0.04;
        return { taxRate: tax, surcharge: 0, educationCess: eduCess };
    } else if (income > 20000) {
        let tax = (income - 20000) * 0.3 + 3000;
        let eduCess = tax * 0.04;
        return { taxRate: tax, surcharge: 0, educationCess: eduCess };
    }
}
// for non-resident income < 500000
export function calculateNonResidentialTax(income) {
    let tax = (income - 250000) * 0.05;
    let eduCess = tax * 0.04;
    return { taxRate: tax, surcharge: 0, educationCess: eduCess };
}
