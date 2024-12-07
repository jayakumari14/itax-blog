'use client';
import { useReducer } from 'react';
import reducer from './reducer.js';
import { StoreContext } from './store-context.js';

import { getCookie } from 'cookies-next';

const currentUser = JSON.parse(getCookie('currentUser') || '{}');
const token = getCookie('token') || '{}';
export default function StoreProvider({ children }) {
  const initialState = {
    token: token,
    currentUser: currentUser,
    userProfile: '{}',
    businessProfile: '{}',

    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    verifyOtp: {
      email: null,
      otpKey: null,
    },
    auth: {
      currentUser: null,
      token: null,
    },
    verification: {
      otpId: null,
      email: null,
    },
    pdfDoc: {
      title: '',
      column: [],
      data: [],
    },
    pdfDoc1: {
      title1: '',
      detail1: [],
      column1: [],
      data1: [],
    },

    libraryPdfDoc: null,

    imagePDF: null,
    cartUpdateCount: 0,
    // cartDetail: JSON.parse(localStorage.getItem("cartData")) || [],

    // apiCart: JSON.parse(localStorage.getItem("apiCart")) || [],

    itr_type: {
      form_type: 'form-16',
    },
    itr: {
      Form_ITR1: {
        FormName: 'ITR-1',
        Description:
          'For Indls having Income from Salary, Pension, family pension and Interest',
        AssessmentYear: '2022',
        SchemaVer: 'Ver1.0',
        FormVer: 'Ver1.0',
      },
      personalInfo: {
        personalInfo: {
          panNumber: '',
          firstName: '',
          middleName: '',
          lastName: '',
          gender: '',
          dob: '',
          fathersName: '',
          aadhaarCardNumber: '',
        },
        address: {
          flat: '',
          premiseName: '',
          road: '',
          pincode: '',
          area: '',
          city: '',
          state: '',
          country: '',
          mobile: 0,
          email: '',
        },
        bankInfo: {
          primaryBankAccount: {
            bankAccountNumber: 0,
            IFSCCode: '',
            nameOfYourBank: '',
          },
          allOtherBankAccounts: [
            {
              BankAccountNo: 0,
              IFSCCode: '',
              BankName: '',
              accountType: '',
            },
          ],
          additionalInformationNeededForIncomeTaxReturn: {
            mobilePhoneNumberSecondary: '',
            stdCode: '',
            landlineTelephoneNumber: '',
          },
        },
      },
      incomeSources: {
        itr_AY: '',
        taxPayerType: '',
        salary: {
          employerDetails: {
            nameOfTheEmployer: '',
            employerType: '',
          },
          salaryInformation: {
            salaryAsPerSection17_1: 0,
            valueOfPerquisitesUnderSection17_2: '',
            profitsInLieuOfSalaryUnderSection17_3: 0,
            exemptAllowancesUnderSection10: 0,
            standardDeductionUnderSection16ia: 50000,
            professionalTaxUnderSection16iii: 0,
            balance: 0,
            incomeChargeableUnderTheHeadSalaries: 0,
          },
          tdsDetails: {
            taxDeductedAtSourceOnSalary: '',
            tanOfTheEmployer: '',
          },
        },
        houseProperty: {
          incomeChargeableUnderTheHeadHouseProperty: 0,
          housePropertyDetails: {
            typeOfHouseProperty: '',
          },
          estimatedIncomeFromTheHouseProperty: {
            estimatedAnnualRentReceivable: 0,
            houseTaxPaidByYou: 0,
          },
          interestPaidOnHousingLoanForThisHouseProperty: {
            interestPaidOnLoanForThisHouseProperty: 0,
          },
          interestPaidDuringThePreConstructionPeriodOfHouseProperty: {
            theFinancialYearPreviousToCompletionOfConstruction: '',
            totalInterestAmountPaidDuringThePreConstructionPeriod: '',
          },
          yourHouseAddress: {
            flat: '',
            premiseName: '',
            road: '',
            pincode: '',
            area: '',
            city: '',
            state: '',
            country: '',
            mobile: '',
            email: '',
          },
          coOwnersDetails: [
            {
              nameOfCoOwner_: '',
              panOfCoOwner_: '',
              percentageShare_: '',
            },
          ],
        },
        otherIncome: {
          totalOfAllOtherIncome: 0,
          interestIncome: {
            interestIncomeFromSavingBank: 0,
            interestIncomeFromDeposits: 0,
            interestOnIncomeTaxRefund: 0,
            anyOtherInterestIncome: 0,
          },
          otherIncome: {
            anyOtherIncome: 0,
          },
          exemptIncome: {
            dividendIncomeFromDomesticCompany: 0,
            dividendIncomeFromMutualFunds: 0,
            interestIncomeFromPpf: 0,
            anyOtherExemptIncome: 0,
          },
          agricultureIncome: {
            grossAgricultureReceipt: 0,
            expenditureOnAgriculture: 0,
            unabsorbedAgricultureLoss: 0,
            netAgricultureReceipt: 0,
          },
          agricultureLandDetails: [
            {
              nameOfDistrict: '',
              pincode: 0,
              measurement: 0,
              ownershipStatus: '',
              sourceOfWater: '',
            },
          ],
        },
      },
      deductions: {
        section80Deductions: {
          totalDeduction: 0,
          investmentsUnderSection80C: {
            insurance: 0,
            ulip: 0,
            pf: 0,
            mutualFund: 0,
            gpf: 0,
            ppf: 0,
            houseRepayment: 0,
            childrenEducation: 0,
          },

          section80tta: {
            interestEarnedOnSavingsAccount: 0,
          },

          section80GDonationsToCharitableOrganizations: {
            detailsOfDonee: {
              nameOfDonee: '',
              panOfDonee: '',
              limitOnDeduction: '',
              qualifyingPercentage: '',
            },
            amountOfDonation: {
              totalAllowedDonation: 0,
              donationAmountCash: 0,
              donationAmountOther: 0,
            },
            addressOfDonee: {
              pincode: 0,
              addressLine: '',
              city: '',
              state: '',
            },
          },
        },
        moreDeductions: {
          amountOfTotalMoreDeductions: 0,
          section80DDeductionsForMedicalInsurance: {
            medicalInsurancePremium_forSelfAndFamily: 0,
            preventiveHealthCheckUpFees_forSelfAndFamily: 0,
            forParents: 'Non-Senior Citizen',
            medicalInsurancePremium_forParents: 0,
            preventiveHealthCheckUpFees_forParents: 0,
          },
          section80EEducationLoanOnHigherStudiesGraduateOrPostGraduate: {
            interestOnHigherEducationLoanPaidThisYear: 0,
          },
          section80CccContributionToPensionPlanAnnuityFund: {
            contributionAmountToPensionPlanAnnuityFundForSection80Ccc: 0,
          },
          section80Ccd1And1BEmployeeContributionToNewPensionSchemeNps: {
            contributionTowardsSection80Ccd1: 0,
          },
          section80Ccd2EmployerContributionInNps: {
            employersContributionTowardsNpsUpto10OfSalary: 0,
          },
          section80CcgRajivGandhiEquitySavingScheme: {
            investmentMadeUnderRajivGandhiEquitySavingScheme: 0,
          },
          section80GgDeductionForHouseRentSelfEmployedOrSalaryWithNoHra: {
            amountOfRentPaid: 0,
            rentPaidPerMonth: 0,
            numberOfMonthsRentPaid: 1,
          },
          section80DdbDeductionsForTreatmentOfSpecifiedDiseasesAndAilments: {
            medicalTreatmentCostsForSpecifiedDiseasesUnderSection80Ddb: 0,
            ageOfPersonForWhomDeductionIsBeingClaimed: '',
          },
          section80EeInterestOnHomeLoan: {
            deductionsUnderSection80Ee: 0,
          },
          section80QqbRoyaltyReceivedOnBooks: {
            deductionAmount: 0,
          },
          section80RrbIncomeOnPatentsInventions: {
            deductionAmount: 0,
          },
          section80GgcContributionToPoliticalParty: {
            contributionOrDonationsToPoliticalParty: 0,
          },
          section80Jja: {
            deductionExemptingProfitsFromBioDegradableWasteBusiness: 0,
          },
          section80GgaDonationsForScientificResearchOrRuralDevelopment: {
            detailsOfDonee: {
              nameOfDonee: '',
              donationAmountCash: 0,
              donationAmountOtherModesLikeEPayChequeDdEtc: '',
              panOfDonee: '',
              limitOnDeduction: '',
              qualifyingPercentage: '',
            },
            addressOfDonee: {
              pincode: 0,
              addressLine: '',
              city: '',
              state: '',
            },
          },
          allowedVal: {
            medicalInsurancePremiumSelf: 0,
            medicalInsurancePremiumParents: 0,
            HealthCheckUpFeesSelf: 0,
            HealthCheckUpFeesParents: 0,
            section80E: 0,
            section80Ccc: 0,
            section80Ccd1And1B: 0,
            section80Ccd2: 0,
            section80Ccg: 0,
            section80Gg: 0,
            section80Ddb: 0,
            section80Ee: 0,
            section80Qqb: 0,
            section80Rrb: 0,
            section80Ggc: 0,
            section80Jja: 0,
            section80Gga: 0,
          },
        },
        otherDeductions: {
          amountOfTotalOtherDeductions: 0,
          section80DdDisabledDependentDeduction: {
            typeofDisability: '',
          },
          section80UDisability: {
            typeofDisability: '',
          },
        },
      },
      taxesPaid: {
        tds: {
          nonSalaryTDS: {
            TANOfDeductor: '',
            nameOfDeductor: '',
            totalTaxDeducted: '',
            taxDeductedClaimedForThisYear: '',
            incomeAgainstTDSDeducted: '',
            typeOfIncome: '',
            financialYearInWhichTDSDeducted: '',
          },
          taxDeductedAtSourceForSaleOrRentOfImmovableProperty: {
            panOfBuyerOrTenant: '',
            nameOfPropertyBuyerOrTenant: '',
            totalTaxDeducted: 0,
            taxDeductedClaimedForThisYear: '',
            incomeAgainstTDSDeducted: '',
            incomeAgainstTDSDeducted_2: '',
            financialYearInWhichTDSDeducted: '',
          },
          taxCollectedAtSource: {
            TANOfCollector: '',
            nameOfCollector: '',
            totalTaxCollected: 0,
            taxCollectedClaimedForThisYear: '',
            expenditureAgainstWhichTCSDeducted: '',
            financialYearInWhichTCS: '',
          },
        },
        selfTaxPayments: {
          amountPaid: 0,
          dateOfPayment: '',
          bsrCodeOfTheBankDeposit: '',
          challanSerialNumber: '',
        },
      },
      taxesFiling: {
        // bankInfo: {
        //   aadhaarDetails: {
        //     aadhaarCardNumber: "",
        //   },
        //   primaryBankAccount: {
        //     bankAccountNumber: "",
        //     ifscCodeOfYourBranch: "",
        //     nameOfYourBank: "",
        //   },
        //   allOtherBankAccounts: [
        //     {
        //       bankACNumber0: "",
        //       ifscCode0: "",
        //       bankName0: "",
        //       accountType0: "Saving Account",
        //     },
        //   ],
        //   additionalInformationNeededForIncomeTaxReturn: {
        //     mobilePhoneNumberSecondary: "",
        //     stdCode: "",
        //     landlineTelephoneNumber: "",
        //   },
        // },
      },

      form16: {
        formData: {
          nameOfEmployer: '',
          employerStatus: {
            employerType: '',
            centerGovEmployee: false,
          },
          salaryAsPerSection17_1: {
            salary: 0,
            pensioner: false,
          },
          valueOfPerquisitesUnderSection17_2: 0,
          profitsInLieuOfSalaryUnderSection17_3: 0,
          grossSalary: 0,
          exemptAllowancesUnderSection_10: 0,
          houseRentAllowance: 0,
          leaveTravelConcessionAssistance: 0,
          taxPaidByEmployerOnNonMonetaryPerks: 0,
          gratuity: 0,
          pension: 0,
          leaveEncashmentOnRetirement: 0,
          retrechmentCompensation_SchemeNotApprove: 0,
          retrechmentCompensation_SchemeApprove: 0,
          voluntaryRetirement: 0,
          otherAllowance: 0,
          netSalary: 0,
          entertainmentAllowanceUnderSection16ii: 0,
          professionalTaxUnderSection16iii: 0,
          totalIncome: 0,
        },
      },
    },
    pdfDocReport: null,
    isInvoiceSidebarOpen: false,

    /* account > invoice >  */
    // invoice_items: JSON.parse(localStorage.getItem("invoice_items")) || [],
    invoice_items: [],
  };

  return (
    <StoreContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StoreContext.Provider>
  );
}

// import { useReducer } from "react";
// import reducer from "./reducer.js";
// import { StoreContext } from "./store-context.js";

// export default function StoreProvider({ children }) {
//   const initialState = {
//     auth: {
//       currentUser: null,
//       token: null,
//     },
//     verification: {
//       otpId: null,
//       email: null,
//     },
//     pdfDoc: {
//       title: "",
//       column: [],
//       data: [],
//     },
//     pdfDoc1: {
//       title1: "",
//       detail1:[],
//       column1: [],
//       data1: [],
//     },

//     libraryPdfDoc:null,

//     imagePDF:null,

//     cartDetail: JSON.parse(localStorage.getItem("cartData")) || [],

//     apiCart: JSON.parse(localStorage.getItem("apiCart")) || [],

//     itr_type: {
//       form_type: "form-16",
//     },

//     itr: {
//       Form_ITR1: {
//         FormName: "ITR-1",
//         Description:
//           "For Indls having Income from Salary, Pension, family pension and Interest",
//         AssessmentYear: "2022",
//         SchemaVer: "Ver1.0",
//         FormVer: "Ver1.0",
//       },
//       personalInfo: {
//         personalInfo: {
//           panNumber: "",
//           firstName: "",
//           middleName: "",
//           lastName: "",
//           gender: "",
//           dob: "",
//           fathersName: "",
//           aadhaarCardNumber: "",
//         },
//         address: {
//           flat: "",
//           premiseName: "",
//           road: "",
//           pincode: "",
//           area: "",
//           city: "",
//           state: "",
//           country: "",
//           mobile: 0,
//           email: "",
//         },
//         bankInfo: {
//           primaryBankAccount: {
//             bankAccountNumber: 0,
//             IFSCCode: "",
//             nameOfYourBank: "",
//           },
//           allOtherBankAccounts: [
//             {
//               BankAccountNo: 0,
//               IFSCCode: "",
//               BankName: "",
//               accountType: "",
//             },
//           ],
//           additionalInformationNeededForIncomeTaxReturn: {
//             mobilePhoneNumberSecondary: "",
//             stdCode: "",
//             landlineTelephoneNumber: "",
//           },
//         },
//       },
//       incomeSources: {
//         salary: {
//           employerDetails: {
//             nameOfTheEmployer: "",
//             employerType: "",
//           },
//           salaryInformation: {
//             salaryAsPerSection17_1: 0,
//             valueOfPerquisitesUnderSection17_2: "",
//             profitsInLieuOfSalaryUnderSection17_3: 0,
//             exemptAllowancesUnderSection10: 0,
//             standardDeductionUnderSection16ia: 50000,
//             professionalTaxUnderSection16iii: 0,
//             balance: 0,
//             incomeChargeableUnderTheHeadSalaries: 0,
//           },
//           tdsDetails: {
//             taxDeductedAtSourceOnSalary: "",
//             tanOfTheEmployer: "",
//           },
//         },
//         houseProperty: {
//           incomeChargeableUnderTheHeadHouseProperty: 0,
//           housePropertyDetails: {
//             typeOfHouseProperty: "",
//           },
//           estimatedIncomeFromTheHouseProperty: {
//             estimatedAnnualRentReceivable: 0,
//             houseTaxPaidByYou: 0,
//           },
//           interestPaidOnHousingLoanForThisHouseProperty: {
//             interestPaidOnLoanForThisHouseProperty: 0,
//           },
//           interestPaidDuringThePreConstructionPeriodOfHouseProperty: {
//             theFinancialYearPreviousToCompletionOfConstruction: "",
//             totalInterestAmountPaidDuringThePreConstructionPeriod: "",
//           },
//           yourHouseAddress: {
//             flat: "",
//             premiseName: "",
//             road: "",
//             pincode: "",
//             area: "",
//             city: "",
//             state: "",
//             country: "",
//             mobile: "",
//             email: "",
//           },
//           coOwnersDetails: [
//             {
//               nameOfCoOwner_: "",
//               panOfCoOwner_: "",
//               percentageShare_: "",
//             },
//           ],
//         },
//         otherIncome: {
//           totalOfAllOtherIncome: 0,
//           interestIncome: {
//             interestIncomeFromSavingBank: 0,
//             interestIncomeFromDeposits: 0,
//             interestOnIncomeTaxRefund: 0,
//             anyOtherInterestIncome: 0,
//           },
//           otherIncome: {
//             anyOtherIncome: 0,
//           },
//           exemptIncome: {
//             dividendIncomeFromDomesticCompany: 0,
//             dividendIncomeFromMutualFunds: 0,
//             interestIncomeFromPpf: 0,
//             anyOtherExemptIncome: 0,
//           },
//           agricultureIncome: {
//             grossAgricultureReceipt: 0,
//             expenditureOnAgriculture: 0,
//             unabsorbedAgricultureLoss: 0,
//             netAgricultureReceipt: 0,
//           },
//           agricultureLandDetails: [
//             {
//               nameOfDistrict: "",
//               pincode: 0,
//               measurement: 0,
//               ownershipStatus: "",
//               sourceOfWater: "",
//             },
//           ],
//         },
//       },
//       deductions: {
//         section80Deductions: {
//           totalDeduction: 0,
//           investmentsUnderSection80C: {
//             insurance: 0,
//             ulip: 0,
//             pf: 0,
//             mutualFund: 0,
//             gpf: 0,
//             ppf: 0,
//             houseRepayment: 0,
//             childrenEducation: 0,
//           },

//           section80tta: {
//             interestEarnedOnSavingsAccount: 0,
//           },

//           section80GDonationsToCharitableOrganizations: {
//             detailsOfDonee: {
//               nameOfDonee: "",
//               panOfDonee: "",
//               limitOnDeduction: "",
//               qualifyingPercentage: "",
//             },
//             amountOfDonation: {
//               totalAllowedDonation: 0,
//               donationAmountCash: 0,
//               donationAmountOther: 0,
//             },
//             addressOfDonee: {
//               pincode: 0,
//               addressLine: "",
//               city: "",
//               state: "",
//             },
//           },
//         },
//         moreDeductions: {
//           amountOfTotalMoreDeductions: 0,
//           section80DDeductionsForMedicalInsurance: {
//             medicalInsurancePremium_forSelfAndFamily: 0,
//             preventiveHealthCheckUpFees_forSelfAndFamily: 0,
//             forParents: "Non-Senior Citizen",
//             medicalInsurancePremium_forParents: 0,
//             preventiveHealthCheckUpFees_forParents: 0,
//           },
//           section80EEducationLoanOnHigherStudiesGraduateOrPostGraduate: {
//             interestOnHigherEducationLoanPaidThisYear: 0,
//           },
//           section80CccContributionToPensionPlanAnnuityFund: {
//             contributionAmountToPensionPlanAnnuityFundForSection80Ccc: 0,
//           },
//           section80Ccd1And1BEmployeeContributionToNewPensionSchemeNps: {
//             contributionTowardsSection80Ccd1: 0,
//           },
//           section80Ccd2EmployerContributionInNps: {
//             employersContributionTowardsNpsUpto10OfSalary: 0,
//           },
//           section80CcgRajivGandhiEquitySavingScheme: {
//             investmentMadeUnderRajivGandhiEquitySavingScheme: 0,
//           },
//           section80GgDeductionForHouseRentSelfEmployedOrSalaryWithNoHra: {
//             amountOfRentPaid: 0,
//             rentPaidPerMonth: 0,
//             numberOfMonthsRentPaid: 1,
//           },
//           section80DdbDeductionsForTreatmentOfSpecifiedDiseasesAndAilments: {
//             medicalTreatmentCostsForSpecifiedDiseasesUnderSection80Ddb: 0,
//             ageOfPersonForWhomDeductionIsBeingClaimed: "",
//           },
//           section80EeInterestOnHomeLoan: {
//             deductionsUnderSection80Ee: 0,
//           },
//           section80QqbRoyaltyReceivedOnBooks: {
//             deductionAmount: 0,
//           },
//           section80RrbIncomeOnPatentsInventions: {
//             deductionAmount: 0,
//           },
//           section80GgcContributionToPoliticalParty: {
//             contributionOrDonationsToPoliticalParty: 0,
//           },
//           section80Jja: {
//             deductionExemptingProfitsFromBioDegradableWasteBusiness: 0,
//           },
//           section80GgaDonationsForScientificResearchOrRuralDevelopment: {
//             detailsOfDonee: {
//               nameOfDonee: "",
//               donationAmountCash: 0,
//               donationAmountOtherModesLikeEPayChequeDdEtc: "",
//               panOfDonee: "",
//               limitOnDeduction: "",
//               qualifyingPercentage: "",
//             },
//             addressOfDonee: {
//               pincode: 0,
//               addressLine: "",
//               city: "",
//               state: "",
//             },
//           },
//           allowedVal: {
//             medicalInsurancePremiumSelf: 0,
//             medicalInsurancePremiumParents: 0,
//             HealthCheckUpFeesSelf: 0,
//             HealthCheckUpFeesParents: 0,
//             section80E: 0,
//             section80Ccc: 0,
//             section80Ccd1And1B: 0,
//             section80Ccd2: 0,
//             section80Ccg: 0,
//             section80Gg: 0,
//             section80Ddb: 0,
//             section80Ee: 0,
//             section80Qqb: 0,
//             section80Rrb: 0,
//             section80Ggc: 0,
//             section80Jja: 0,
//             section80Gga: 0,
//           }
//         },
//         otherDeductions: {
//           amountOfTotalOtherDeductions: 0,
//           section80DdDisabledDependentDeduction: {
//             typeofDisability: "",
//           },
//           section80UDisability: {
//             typeofDisability: "",
//           },
//         },
//       },
//       taxesPaid: {
//         tds: {
//           nonSalaryTDS: {
//             TANOfDeductor: "",
//             nameOfDeductor: "",
//             totalTaxDeducted: "",
//             taxDeductedClaimedForThisYear: "",
//             incomeAgainstTDSDeducted: "",
//             typeOfIncome: "",
//             financialYearInWhichTDSDeducted: "",
//           },
//           taxDeductedAtSourceForSaleOrRentOfImmovableProperty: {
//             panOfBuyerOrTenant: "",
//             nameOfPropertyBuyerOrTenant: "",
//             totalTaxDeducted: 0,
//             taxDeductedClaimedForThisYear: "",
//             incomeAgainstTDSDeducted: "",
//             incomeAgainstTDSDeducted_2: "",
//             financialYearInWhichTDSDeducted: "",
//           },
//           taxCollectedAtSource: {
//             TANOfCollector: "",
//             nameOfCollector: "",
//             totalTaxCollected: 0,
//             taxCollectedClaimedForThisYear: "",
//             expenditureAgainstWhichTCSDeducted: "",
//             financialYearInWhichTCS: "",
//           },
//         },
//         selfTaxPayments: {
//             amountPaid: 0,
//             dateOfPayment: "",
//             bsrCodeOfTheBankDeposit: "",
//             challanSerialNumber: "",
//         },
//       },
//       taxesFiling: {
//         // bankInfo: {
//         //   aadhaarDetails: {
//         //     aadhaarCardNumber: "",
//         //   },
//         //   primaryBankAccount: {
//         //     bankAccountNumber: "",
//         //     ifscCodeOfYourBranch: "",
//         //     nameOfYourBank: "",
//         //   },
//         //   allOtherBankAccounts: [
//         //     {
//         //       bankACNumber0: "",
//         //       ifscCode0: "",
//         //       bankName0: "",
//         //       accountType0: "Saving Account",
//         //     },
//         //   ],
//         //   additionalInformationNeededForIncomeTaxReturn: {
//         //     mobilePhoneNumberSecondary: "",
//         //     stdCode: "",
//         //     landlineTelephoneNumber: "",
//         //   },
//         // },
//       },

//       form16: {
//         formData: {
//           nameOfEmployer: "",
//           employerStatus: {
//             employerType: "",
//             centerGovEmployee: false,
//           },
//           salaryAsPerSection17_1: {
//             salary: 0,
//             pensioner: false,
//           },
//           valueOfPerquisitesUnderSection17_2: 0,
//           profitsInLieuOfSalaryUnderSection17_3: 0,
//           grossSalary: 0,
//           exemptAllowancesUnderSection_10: 0,
//           houseRentAllowance: 0,
//           leaveTravelConcessionAssistance: 0,
//           taxPaidByEmployerOnNonMonetaryPerks: 0,
//           gratuity: 0,
//           pension: 0,
//           leaveEncashmentOnRetirement: 0,
//           retrechmentCompensation_SchemeNotApprove: 0,
//           retrechmentCompensation_SchemeApprove: 0,
//           voluntaryRetirement: 0,
//           otherAllowance: 0,
//           netSalary: 0,
//           entertainmentAllowanceUnderSection16ii: 0,
//           professionalTaxUnderSection16iii: 0,
//           totalIncome: 0,
//         },
//       },
//     },

//     BusinessDetails: JSON.parse(localStorage.getItem("BusinessDetails")) || [],

//     pdfDocReport:null,
//     isInvoiceSidebarOpen:false,
//   };

//   return (
//     <StoreContext.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </StoreContext.Provider>
//   );
// }
