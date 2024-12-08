import {
  oldCalculateTaxIndividual2425,
  oldCalculateTaxSenior2425,
  oldCalculateTaxSuperSenior2425,
  oldCalculateTaxHUF2425,
  oldCalculateTaxAOP2425,
  calculateTaxDomestic2425,
  calculateTaxForeign2425,
  calculateTaxFirm2425,
} from './OldRegime/AY24_25';
import {
  newCalculateTaxIndividual2425,
  newCalculateTaxSenior2425,
  newCalculateTaxSuperSenior2425,
  newCalculateTaxHUF2425,
  newCalculateTaxAOP2425,
} from './NewRegime/AY24_25';
import { TAX_PAYER_TYPE, ASSESSMENT_YEAR, GENDER } from './constants';
import { setResults, setResultAlt } from './rest';

export function handleCalculations(
  formData,
  setValue,
  setComparison,
  setTaxResult,
) {
  const {
    basicIncome,
    assessmentYear,
    isOldRegime,
    taxPayerCategory,
    gender,
    domesticCategory,
  } = formData;

  // for individual
  if (taxPayerCategory === TAX_PAYER_TYPE.INDIVIDUAL) {
    // for 24-25
    if (assessmentYear === ASSESSMENT_YEAR.AY_2425) {
      // For Normal Citizens
      if (gender === GENDER.MALE || gender === GENDER.MALE) {
        setResults(
          basicIncome,
          isOldRegime,
          oldCalculateTaxIndividual2425,
          newCalculateTaxIndividual2425,
          setComparison,
          setValue,
          setTaxResult,
        );
      }
      // For  Senior Citizens
      else if (gender === GENDER.SENIOR_CITIZEN) {
        setResults(
          basicIncome,
          isOldRegime,
          oldCalculateTaxSenior2425,
          newCalculateTaxSenior2425,
          setComparison,
          setValue,
        );
      } else if (gender === GENDER.SUPER_SENIOR_CITIZEN) {
        setResults(
          basicIncome,
          isOldRegime,
          oldCalculateTaxSuperSenior2425,
          newCalculateTaxSuperSenior2425,
          setComparison,
          setValue,
          setTaxResult,
        );
      }
    }
  }
  // for HUF
  else if (taxPayerCategory === TAX_PAYER_TYPE.HUF) {
    if (assessmentYear === ASSESSMENT_YEAR.AY_2425) {
      setResults(
        basicIncome,
        isOldRegime,
        oldCalculateTaxHUF2425,
        newCalculateTaxHUF2425,
        setComparison,
        setValue,
        setTaxResult,
      );
    }
  }
  // for AOP
  else if (taxPayerCategory === TAX_PAYER_TYPE.AOP) {
    // AY 24-25
    if (assessmentYear === ASSESSMENT_YEAR.AY_2425) {
      setResults(
        basicIncome,
        isOldRegime,
        oldCalculateTaxAOP2425,
        newCalculateTaxAOP2425,
        setComparison,
        setValue,
        setTaxResult,
      );
    }
  }
  // for Domestic Company
  else if (taxPayerCategory === TAX_PAYER_TYPE.DOMESTIC_COMPANY) {
    // AY 24-25
    if (assessmentYear === ASSESSMENT_YEAR.AY_2425) {
      setResultAlt(
        basicIncome,
        calculateTaxDomestic2425,
        setValue,
        setTaxResult,
        domesticCategory,
      );
    }
  }
  // for Foreign Company
  else if (taxPayerCategory === TAX_PAYER_TYPE.FOREIGN_COMPANY) {
    // AY 24-25
    if (assessmentYear === ASSESSMENT_YEAR.AY_2425) {
      setResultAlt(
        basicIncome,
        calculateTaxForeign2425,
        setValue,
        setTaxResult,
      );
    }
  }
  // for LLP/Firms
  else if (taxPayerCategory === TAX_PAYER_TYPE.LLP) {
    // AY 24-25
    if (assessmentYear === ASSESSMENT_YEAR.AY_2425) {
      setResultAlt(basicIncome, calculateTaxFirm2425, setValue, setTaxResult);
    }
  }
}
