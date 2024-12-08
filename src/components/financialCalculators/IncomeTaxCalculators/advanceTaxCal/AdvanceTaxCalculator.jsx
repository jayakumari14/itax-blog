'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import NotSelected from './calculatorComponents/NotSelected';
import HUF_HinduUndividedFamily from './calculatorComponents/HUF_HinduUndividedFamily';
import AOP_BOI from './calculatorComponents/AOP_BOI';
import DomesticCompany from './calculatorComponents/DomesticCompany';
import ForeignCompany from './calculatorComponents/ForeignCompany';
import Firms from './calculatorComponents/Firms';
import LLP from './calculatorComponents/LLP';
import Co_OperativeSociety from './calculatorComponents/Co_OperativeSociety';

// import generateFY from "@/helper/generateFY";
import showCurrency from '@/helper/showCurrency';
import TaxResultTable from './calculatorComponents/TaxResultTable';
import TaxPdf from './calculatorComponents/TaxPdf';

import {
  nextTaxableValueOld_male,
  nextTaxableValue_seinerCitizen,
  nextTaxableValueOld_female,
  nextTaxableValue_superSeinerCitizen,
  TaxableValue_Surcharge,
} from './calc/individual';

const initialValues = {
  financial_year: '',
  person_type: '',
  pan: '',
  filing_category: '',
  residential_status: '',
  basic_salary: '',
  hra_received: null,
  rent_paid: null,
  other_allowances: null,
  address: {
    city: '',
  },
  interest_paid_on_let_out_hp_loan: null,
  rent_received: null,
  property_tax_paid: null,
  interest_paid_on_self_occupied_hp_loan: null,
  capital_gains_by_quarter: [
    ['stcg_15', 'stcg_30', 'stcg_slab', 'ltcg_10', 'ltcg_20'],
    ['150000', 0, 0, '-15000', 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  savings_interest: null,
  fd_interest: null,
  dividend_income: null,
  other_income: null,
  regular_business_turnover: null,
  regular_business_profit: null,
  speculative_business_turnover: null,
  speculative_business_profit: null,
  elss: '',
  tax_credits: [
    ['type', 'date_of_deposit', 'amount'],
    ['TDS', '01/04/2020', null],
    ['TCS', '01/04/2020', null],
    ['Advance Tax', '15/06/2020', 35000],
  ],
};
// sum function
const calculateSum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += Number(obj[key]);
  }
  return sum;
};
export default function AdvanceTaxCalc() {
  const [select, setSelect] = useState('');
  const [secetion115Bac, setSection115Bac] = useState('no');
  const [showHide1, setShowHide1] = useState(false);
  const [showHide2, setShowHide2] = useState(false);
  const [showHide3, setShowHide3] = useState(false);
  const [showHide4, setShowHide4] = useState(false);
  const [panNumber, setPanNumber] = useState('');
  // const [calculatedTax, setCalculatedTax] = useState(undefined);
  const [isLetoutSelected, setIsLetoutSelected] = useState(false);
  // unchecked letout interest state
  const [uncheckedLetoutAmount, setUncheckedoutAmount] = useState(0);
  // checked letout interest
  const [checkedLetoutAmount, setCheckedoutAmount] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
  });
  // income from other sources state
  const [incomeFromOtherSource, setIncomeFromOtherSource] = useState({
    value1: '',
    value2: '',
    value3: '',
  });
  // DEDUCTION STATE  part one1
  const [deductions, setDeductions] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    value9: '',
    value10: '',
    value11: '',
    value12: '',
    value13: '',
  });
  // deduction state part 2
  const [deductions2, setDeductions2] = useState({
    value14: '',
    value15: '',
    value16: '',
    value17: '',
    value18: '',
    value19: '',
    value20: '',
    value21: '',
    value22: '',
  });
  // nps ammount state
  const [npsAmount, setNpsAmount] = useState({
    value1: '',
    value2: '',
  });

  // 80DD amount check state
  const [amount80DD, setAmount80DD] = useState(0);
  // 80U amount check state
  const [amount80U, setAmount80U] = useState(0);
  // severe disability check 1
  const [severe_disabilityCheck1, setsevere_DisabilityCheck1] = useState(false);
  // severe disability check 1
  const [severe_disabilityCheck2, setsevere_DisabilityCheck2] = useState(false);
  // stcg and ltcg states
  const [stcg1, setStcg1] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });
  const [stcg2, setStcg2] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });
  const [ltcg1, setLtcg1] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });
  const [ltcg2, setLtcg2] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });
  const [ltcg3, setLtcg3] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });

  // NET ANNUAL INCOME CONSTANT
  const NET_ANNUAL_INCOME =
    checkedLetoutAmount.value1 -
    (checkedLetoutAmount.value2 + checkedLetoutAmount.value3);
  // STANDAR DETUCTION OF 30% CONSTANT
  const STANDARD_DETUCTION =
    NET_ANNUAL_INCOME && Math.floor((NET_ANNUAL_INCOME * 30) / 100);

  // LET OUT INCOME CONSTANT
  const LET_OUT_INCOME =
    NET_ANNUAL_INCOME - (STANDARD_DETUCTION + checkedLetoutAmount.value4);
  // income from house property constant
  let INCOME_FROM_HOUSE_PROERTY =
    uncheckedLetoutAmount > 0 ? uncheckedLetoutAmount : LET_OUT_INCOME;

  // total of duduction part one
  const TOTAL_DEDUCTION_PART1 =
    calculateSum(npsAmount) +
    (calculateSum(deductions) > 150000 ? 150000 : calculateSum(deductions));

  // Deduction part two calulation
  const TOTAL_DEDUCTION =
    TOTAL_DEDUCTION_PART1 + amount80DD + amount80U + calculateSum(deductions2);
  //Total of Capital gains
  const TOTAL_CAPITAL_GAINS =
    calculateSum(stcg1) +
    calculateSum(stcg2) +
    calculateSum(ltcg1) +
    calculateSum(ltcg2) +
    calculateSum(ltcg3);
  // console.log("total deduction amound calulate", TOTAL_DEDUCTION_PART1);

  // console.log("income from house property" , INCOME_FROM_HOUSE_PROERTY);

  const getuncheckedLetoutAmountHandler = (e) => {
    setUncheckedoutAmount(e.target.value);
  };

  const getCheckedLetoutAmountHandler = (e) => {
    INCOME_FROM_HOUSE_PROERTY = 0;
    let { name, value } = e.target;
    setCheckedoutAmount({ ...checkedLetoutAmount, [name]: Number(value) });
  };
  // income  from other source handler
  const incomeFromOtherSourceHandler = (e) => {
    let { value, name } = e.target;
    setIncomeFromOtherSource({
      ...incomeFromOtherSource,
      [name]: Number(value),
    });
  };

  // stcg handlers
  const stcgOneHandler = (e) => {
    let { value, name } = e.target;
    // console.log(e.target.value)
    setStcg1({ ...stcg1, [name]: value });
  };
  const stcgTwoHandler = (e) => {
    let { value, name } = e.target;
    // console.log(e.target.value)
    setStcg2({ ...stcg2, [name]: value });
  };

  // ltcg handlers

  const ltcgOneHandler = (e) => {
    let { name, value } = e.target;
    setLtcg1({ ...ltcg1, [name]: value });
  };
  const ltcgTwoHandler = (e) => {
    let { name, value } = e.target;
    setLtcg2({ ...ltcg2, [name]: value });
  };
  const ltcgThreeHandler = (e) => {
    let { name, value } = e.target;
    setLtcg3({ ...ltcg3, [name]: value });
  };

  // interest check handler for let out property or not
  const checkInterest = (e) => {
    if (e.target.checked) {
      setIsLetoutSelected(true);
      setUncheckedoutAmount(0);
    } else {
      setIsLetoutSelected(false);
      setCheckedoutAmount({
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
      });
    }
  };

  // deduction amound handler
  const deductionAmountHandler = (e) => {
    let { name, value } = e.target;
    setDeductions({ ...deductions, [name]: Number(value) });
  };
  // deduction amound handler
  const deductionAmountHandler2 = (e) => {
    let { name, value } = e.target;
    setDeductions2({ ...deductions2, [name]: Number(value) });
  };

  // nps amount handler
  const npsAmountHandler = (e) => {
    let { name, value } = e.target;
    setNpsAmount({ ...npsAmount, [name]: Number(value) });
  };

  // amound80DD handler
  const amount80DDHanlder = (e) => {
    if (e.target.checked && severe_disabilityCheck1) {
      setAmount80DD(125000);
    } else if (e.target.checked) {
      setAmount80DD(75000);
    } else {
      setAmount80DD(0);
    }
  };
  // amound80U handler
  const amount80UHanlder = (e) => {
    if (e.target.checked && severe_disabilityCheck2) {
      setAmount80U(125000);
    } else if (e.target.checked) {
      setAmount80U(75000);
    } else {
      setAmount80U(0);
    }
  };

  // severe_disabilityCheck1 handler
  const severe_disabilityCheck1Handler = (e) => {
    if (e.target.checked && amount80DD) {
      setsevere_DisabilityCheck1(true);
      setAmount80DD(125000);
    } else if (!e.target.checked && amount80DD) {
      setsevere_DisabilityCheck1(false);
      setAmount80DD(75000);
    } else {
      setsevere_DisabilityCheck1(false);
      setAmount80DD(0);
    }
  };

  // severe_disabilityCheck2 handler
  const severe_disabilityCheck2Handler = (e) => {
    if (e.target.checked && amount80U) {
      setsevere_DisabilityCheck2(true);
      setAmount80U(125000);
    } else if (!e.target.checked && amount80U) {
      setsevere_DisabilityCheck2(false);
      setAmount80U(75000);
    } else {
      setsevere_DisabilityCheck2(false);
      setAmount80DD(0);
    }
  };
  // console.log("income from other source" , incomeFromOtherSource)

  const [ITafterRelief_87A, setITafterRelief_87A] = useState(null);
  const [healthAndEducationCess, setHealthAndEducationCess] = useState(null);
  const [surcharge, setSurcharge] = useState(null);
  const [totalTaxLiability, setTotalTaxLiability] = useState(null);
  const CurrentYear = new Date().getFullYear();
  const [
    calculatedIncomeFromOtherSources,
    setCalculatedIncomeFromOtherSources,
  ] = useState();
  const [taxableIncome, setTaxableIncome] = useState();

  const [advanceTaxCalculated, setAdvanceTaxCalculated] = useState(null);
  const handleGetLiability_And_Installments = (data) => {
    setAdvanceTaxCalculated(data);
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      filing_category: select,
      pan: panNumber,
    },
    enableReinitialize: true,
    validate: (values) => {
      let errors = {};
      let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
      if (!regex.test(values.pan)) {
        errors.pan = 'Invalid pan number';
      }
      return errors;
    },
    onSubmit: () => {
      handleResetForm();
      if (formik.values.filing_category === 'General') {
        let taxAfterRelief;
        switch (formik.values.person_type) {
          case 'male':
            taxAfterRelief = nextTaxableValueOld_male(taxableIncome);
            break;
          case 'female':
            taxAfterRelief = nextTaxableValueOld_female(taxableIncome);
            break;
          case 'senior_citizen':
            taxAfterRelief = nextTaxableValue_seinerCitizen(taxableIncome);
            break;
          case 'super_senior_citizen':
            taxAfterRelief = nextTaxableValue_superSeinerCitizen(taxableIncome);
            break;
          default:
            break;
        }
        const sCharge = TaxableValue_Surcharge(taxAfterRelief, taxableIncome);
        const HealthAndE = sCharge * 0.44;

        setITafterRelief_87A(taxAfterRelief);
        setSurcharge(sCharge);
        setHealthAndEducationCess(HealthAndE);
        setTotalTaxLiability(taxAfterRelief + sCharge + HealthAndE);
        handleGetLiability_And_Installments({
          assessedTax: 0,
          incomeTax: taxAfterRelief,
          surcharge: sCharge,
          healthAndEducationCess: HealthAndE,
          totalTaxLiability: taxAfterRelief + sCharge + HealthAndE,
          assessedTax: taxAfterRelief + sCharge + HealthAndE,
        });
      }
    },
  });
  const handleResetForm = () => {
    setITafterRelief_87A('');
    setHealthAndEducationCess('');
    setSurcharge('');
    setTotalTaxLiability('');
    // handleGetLiability_And_Installments(null)
  };
  const basicSalary = parseFloat(formik.values.basic_salary);
  useEffect(() => {
    setCalculatedIncomeFromOtherSources(calculateSum(incomeFromOtherSource));
    setTaxableIncome(calculatedIncomeFromOtherSources + basicSalary);
  }, [calculatedIncomeFromOtherSources, incomeFromOtherSource, basicSalary]);
  // useEffect(() => {
  //     const tax = calculateTax(formik.values.basic_salary);
  //     // .15 .3 .3 .25
  //     setCalculatedTax({
  //         inst_one: tax * 0.15,
  //         inst_two: tax * 0.3,
  //         inst_three: tax * 0.3,
  //         inst_four: tax * 0.25,
  //     });
  // }, [formik.values.basic_salary]);
  // console.log("deduction amound part1", deductions);
  // console.log("deduction amound part2", deductions2);
  // console.log("nps amount", npsAmount);
  // console.log("80dd amount", amount80DD);
  // console.log("80U amount", amount80U);

  // console.log("form values", formik.values);
  // console.log("formik error", formik.errors);

  const classes =
    '[&_input]:h-8 text-sm [&_input]:px-3 [&_input]:border [&_input]:border-neutral-800 [&_input]:rounded [&_input]:w-full';
  const classes2 =
    '[&_select]:h-8 text-sm [&_select]:bg-white [&_select]:border [&_select]:border-neutral-800 [&_select]:px-2 [&_select]:rounded [&_select]:w-full [&_label]:text-lg';
  const label = '[&_label]:font-medium [_&_label]:text-neutral-600';
  return (
    <div className="mt-12 mb-24">
      <div className="mb-4 sm:text-start text-center mx-auto px-2 w-[calc(100%-2rem)] md:max-w-[calc(950px-2rem)] text-gray-800 border-l-4 border-blue-500 shadow shadow-blue-500 py-2 rounded-md">
        <h3 className=" rounded  font-bold text-xl sm:text-2xl md:text-3xl">
          ADVANCE TAX CALCULATOR
        </h3>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start items-end">
          <div className="text-sm font-normal text-blue-600">
            FY {CurrentYear - 1}-{CurrentYear}
          </div>
          <div className="text-sm font-normal text-gray-600">Old Regime</div>
        </div>
      </div>
      <div
        className={` ${classes} ${classes2} ${label} mx-auto w-[calc(100%-2rem)] md:max-w-[calc(950px-2rem)]  shadow-sm shadow-blue-400 rounded-md border border-primary_light p-8 [&>div]:border-b [&>div]:border-b-primary_light [&_div]:flex [&_div]:items-center [&_div]:justify-between [&_div]:gap-2 [&_div]:py-1`}
        id="advancetaxdiv"
      >
        <ul className="[&>li]:mt-2 [&>li]:grid [&>li]:items-center [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]">
          <li className="relative">
            <label htmlFor="pan">PAN No.</label>
            <input
              type="text"
              name="pan"
              id="pan"
              placeholder="Pan number "
              value={panNumber}
              onChange={(e) => {
                setPanNumber(e.target.value);
              }}
              className="input"
            />
            {formik.errors.pan && (
              <p className="absolute -bottom-4 text-xs text-red-500">
                {formik.errors.pan}
              </p>
            )}
          </li>
          <li>
            <label htmlFor="taxPayer">Tax Payer</label>
            <select
              name="filing_category"
              id="taxPayer"
              onChange={(e) => {
                setSelect(e.target.value);
              }}
              className="select"
            >
              <option value={''}>Select</option>
              <option value={'General'}>Individual</option>
              <option value={'HUF(Hindu undivided family)'}>
                HUF(Hindu undivided family)
              </option>
              <option value={'AOP/BOI'}>AOP/BOI</option>
              <option value={'Domestic Company'}>Domestic Company</option>
              <option value={'Foreign Company'}>Foreign Company</option>
              <option value={'Firms'}>Firms</option>
              <option value={'LLP'}>LLP</option>
              <option value={'Co-operative Society'}>
                Co-operative Society
              </option>
            </select>
          </li>
          {/* <li>
                        <label htmlFor="">Assessment Year</label>
                        <select
                            name="financial_year"
                            id=""
                            value={formik.values.financial_year}
                            onChange={formik.handleChange}
                            className="select"
                        >
                            <option value={""}>Choose...</option>
                            {generateFY(2009).map(({startYear, endYear}) => (
                            <option value={`FY ${startYear}-${endYear}`} key={startYear}>
                                {`${startYear}-${endYear}`}
                            </option>
                            ))}
                        </select>
                    </li> */}
        </ul>

        <form
          className={` mt-2 [&>div]:border-b [&>div]:border-b-primary_light `}
          action=""
          onSubmit={formik.handleSubmit}
        >
          {select == '' && <NotSelected />}

          {select === 'General' && (
            <>
              <ul className="[&>li]:mt-2 [&>li]:grid [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]">
                <li>
                  <label htmlFor="">
                    Whether opting for taxation under Section 115BAC?
                  </label>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setSection115Bac(e.target.value);
                    }}
                    className="w-full"
                  >
                    <option value="no">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </li>
                <li>
                  <label htmlFor="">Male / Female / Senior Citizen</label>
                  <select
                    name="person_type"
                    id=""
                    value={formik.values.person_type}
                    onChange={formik.handleChange}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="senior_citizen">Senior Citizen</option>
                    <option value="super_senior_citizen">
                      Super Senior Citizen
                    </option>
                  </select>
                </li>
                <li>
                  <label htmlFor="">Residential Status</label>
                  <select
                    name="residential_status"
                    id=""
                    onChange={formik.handleChange}
                  >
                    <option value="">Select</option>
                    <option value="resident">Resident</option>
                    <option value="non_resident">Non Resident</option>
                    <option value="not_ordinary_resident">
                      Not Ordinary Resident
                    </option>
                  </select>
                </li>
                <li>
                  <label htmlFor="">
                    {secetion115Bac == 'no'
                      ? 'Income from Salary (Income from salary after standard deduction of Rs.50000.'
                      : 'Income from salary (Income from Salary before Exemptions/Deductions'}
                  </label>
                  <input
                    name="basic_salary"
                    type="number"
                    onChange={formik.handleChange}
                  />
                </li>

                <li>
                  <label htmlFor="">
                    Income From House Property
                    <span
                      onClick={() => {
                        setShowHide1((prev) => !prev);
                      }}
                      role={'button'}
                      className="text-primary"
                    >
                      {showHide1 ? 'Hide Details' : 'Show Details'}
                    </span>
                  </label>
                  <input
                    value={
                      INCOME_FROM_HOUSE_PROERTY > 0
                        ? -INCOME_FROM_HOUSE_PROERTY
                        : INCOME_FROM_HOUSE_PROERTY
                    }
                    type="number"
                  />
                </li>
                {showHide1 && (
                  <div className="p-2 mt-2 mb-4 border-2">
                    <div className="w-full flex flex-col [&_label]:text-xs">
                      <div className="w-full">
                        <label className="cursor-pointer">
                          <input
                            type="checkbox"
                            value={false}
                            style={{
                              width: '20px',
                              height: '18px',
                            }}
                            className="h-2 w-2"
                            onChange={checkInterest}
                          />{' '}
                          <span className="mx-2">
                            (a)Income from Self-occupied Property or Interest
                            Paid/Payable on Housing Loan
                          </span>
                        </label>
                      </div>
                      {/* { unchecked let out property section} */}
                      {!isLetoutSelected && (
                        <ul
                          className="
                                        w-full space-y-2
                                        [&_label]:text-xs
                                        [&>li]:grid [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]
                                        "
                        >
                          <li>
                            <label htmlFor="">
                              (a)1. Interest on Housing Loan
                            </label>
                            <input
                              type="number"
                              onChange={getuncheckedLetoutAmountHandler}
                            />
                          </li>

                          <li>
                            <label htmlFor="">
                              (a)2. Income from self-occupied house property
                            </label>
                            <input
                              value={
                                uncheckedLetoutAmount
                                  ? -uncheckedLetoutAmount
                                  : ''
                              }
                              type="number"
                              readOnly
                            />
                          </li>
                        </ul>
                      )}

                      {/* { checked let out property section} */}
                      {isLetoutSelected && (
                        <>
                          <p> b. Income from Let-out Property</p>
                          <ul
                            className="
                                            w-full space-y-2
                                            [&_label]:text-xs
                                            [&>li]:grid [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]
                                        "
                          >
                            <li>
                              <label htmlFor="">
                                (b)1. Annual Letable Value/Rent Received or
                                Receivable
                              </label>
                              <input
                                value={
                                  checkedLetoutAmount.value1
                                    ? checkedLetoutAmount.value1
                                    : ''
                                }
                                type="number"
                                name="value1"
                                onChange={getCheckedLetoutAmountHandler}
                              />
                            </li>
                            <li>
                              <label htmlFor="">
                                (b)2. Less: Municipal Taxes Paid During the Year
                              </label>
                              <input
                                value={
                                  checkedLetoutAmount.value2
                                    ? checkedLetoutAmount.value2
                                    : ''
                                }
                                type="number"
                                name="value2"
                                onChange={getCheckedLetoutAmountHandler}
                              />
                            </li>
                            <li>
                              <label htmlFor="">
                                (b)3. Less:Unrealized Rent
                              </label>
                              <input
                                value={
                                  checkedLetoutAmount.value3
                                    ? checkedLetoutAmount.value3
                                    : ''
                                }
                                type="number"
                                name="value3"
                                onChange={getCheckedLetoutAmountHandler}
                              />
                            </li>
                            <li>
                              <label htmlFor="">
                                (b)4. Net Annual Value (1-(2+3))
                              </label>
                              <input
                                value={
                                  NET_ANNUAL_INCOME ? NET_ANNUAL_INCOME : ''
                                }
                                type="number"
                                readOnly
                              />
                            </li>
                          </ul>

                          <p> c. Less: Deductions from Net Annual Value</p>
                          <ul
                            className="
                                            w-full space-y-2
                                            [&_label]:text-xs
                                            [&>li]:grid [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]
                                        "
                          >
                            <li>
                              <label htmlFor="">
                                (c)1. Standard Deduction @ 30% of Net Annual
                                Value
                              </label>
                              <input
                                value={STANDARD_DETUCTION}
                                type="number"
                                readOnly
                              />
                            </li>
                            <li>
                              <label htmlFor="">
                                (c)2. Interest on Housing Loan
                              </label>
                              <input
                                value={
                                  checkedLetoutAmount.value4
                                    ? checkedLetoutAmount.value4
                                    : ''
                                }
                                type="number"
                                name="value4"
                                onChange={getCheckedLetoutAmountHandler}
                              />
                            </li>
                            <li>
                              <label htmlFor="">
                                (c)3. Income from Let-out House Property
                              </label>
                              <input
                                value={
                                  LET_OUT_INCOME > 0
                                    ? -LET_OUT_INCOME
                                    : LET_OUT_INCOME
                                }
                                type="number"
                                readOnly
                              />
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                )}

                <li>
                  <label htmlFor="">
                    Capital Gains
                    <span
                      onClick={() => {
                        setShowHide2((prev) => !prev);
                      }}
                      role={'button'}
                      className="text-primary"
                    >
                      {showHide2 ? 'Hide Details' : 'Show Details'}
                    </span>
                  </label>

                  <input value={TOTAL_CAPITAL_GAINS} type="text" readOnly />
                </li>
                {showHide2 && (
                  <div className="p-2 mt-2 mb-4 border-2">
                    <section
                      className="
                                min-w-[512px] w-full
                                [&>p]:border-b-2 [&>p]:mt-4
                                [&>div>div]:grid [&>div>div]:grid-cols-1
                                [&>div_label]:text-xs
                                "
                    >
                      <p>
                        (a).Short Term Capital GainS (Other than covered under
                        section 111A)
                      </p>
                      <div>
                        <div>
                          <label>From 01/04/2022 to 15/06/2022</label>
                          <input
                            name="value1"
                            type="number"
                            onChange={stcgOneHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/06/2022 to 15/09/2022</label>
                          <input
                            name="value2"
                            type="number"
                            onChange={stcgOneHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/09/2022 to 15/12/2022</label>
                          <input
                            name="value3"
                            type="number"
                            onChange={stcgOneHandler}
                          />
                        </div>

                        <div>
                          <label>From 16/12/2022 to 15/03/2023</label>
                          <input
                            name="value4"
                            type="number"
                            onChange={stcgOneHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/03/2022 to 31/03/2023</label>
                          <input
                            name="value5"
                            type="number"
                            onChange={stcgOneHandler}
                          />
                        </div>
                        <div>
                          <label htmlFor="">Total</label>
                          <input
                            value={calculateSum(stcg1)}
                            type="number"
                            readOnly
                          />
                        </div>
                      </div>

                      <p>
                        {' '}
                        (b).Short Term Capital GainS (Covered under section
                        111A)
                      </p>
                      <div>
                        <div>
                          <label>From 01/04/2022 to 15/06/2022</label>
                          <input
                            type="number"
                            name="value1"
                            onChange={stcgTwoHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/06/2022 to 15/09/2022</label>
                          <input
                            type="number"
                            name="value2"
                            onChange={stcgTwoHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/09/2022 to 15/12/2022</label>
                          <input
                            type="number"
                            name="value3"
                            onChange={stcgTwoHandler}
                          />
                        </div>

                        <div>
                          <label>From 16/12/2022 to 15/03/2023</label>
                          <input
                            type="number"
                            name="value4"
                            onChange={stcgTwoHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/03/2022 to 31/03/2023</label>
                          <input
                            type="number"
                            name="value5"
                            onChange={stcgTwoHandler}
                          />
                        </div>
                        <div>
                          <label htmlFor="">Total</label>
                          <input
                            value={calculateSum(stcg2)}
                            type="number"
                            readOnly
                          />
                        </div>
                      </div>

                      <p> (c).Long Term Capital Gains (Charged to tax @ 20%)</p>
                      <div>
                        <div>
                          <label>From 01/04/2022 to 15/06/2022</label>
                          <input
                            type="number"
                            name="value1"
                            onChange={ltcgOneHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/06/2022 to 15/09/2022</label>
                          <input
                            type="number"
                            name="value2"
                            onChange={ltcgOneHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/09/2022 to 15/12/2022</label>
                          <input
                            type="number"
                            name="value3"
                            onChange={ltcgOneHandler}
                          />
                        </div>

                        <div>
                          <label>From 16/12/2022 to 15/03/2023</label>
                          <input
                            type="number"
                            name="value4"
                            onChange={ltcgOneHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/03/2022 to 31/03/2023</label>
                          <input
                            type="number"
                            name="value5"
                            onChange={ltcgOneHandler}
                          />
                        </div>
                        <div>
                          <label htmlFor="">Total</label>
                          <input
                            value={calculateSum(ltcg1)}
                            type="number"
                            readOnly
                          />
                        </div>
                      </div>

                      <p> (d).Long Term Capital Gains (Charged to tax @ 10%)</p>
                      <div>
                        <div>
                          <label>From 01/04/2022 to 15/06/2022</label>
                          <input
                            type="number"
                            name="value1"
                            onChange={ltcgTwoHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/06/2022 to 15/09/2022</label>
                          <input
                            type="number"
                            name="value2"
                            onChange={ltcgTwoHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/09/2022 to 15/12/2022</label>
                          <input
                            type="number"
                            name="value3"
                            onChange={ltcgTwoHandler}
                          />
                        </div>

                        <div>
                          <label>From 16/12/2022 to 15/03/2023</label>
                          <input
                            type="number"
                            name="value4"
                            onChange={ltcgTwoHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/03/2022 to 31/03/2023</label>
                          <input
                            type="number"
                            name="value5"
                            onChange={ltcgTwoHandler}
                          />
                        </div>
                        <div>
                          <label htmlFor="">Total</label>
                          <input
                            value={calculateSum(ltcg2)}
                            type="number"
                            readOnly
                          />
                        </div>
                      </div>

                      <p>
                        {' '}
                        (e)Long Term Capital GainS (Covered under section 112A)
                      </p>
                      <div>
                        <div>
                          <label>From 01/04/2022 to 15/06/2022</label>
                          <input
                            type="number"
                            name="value1"
                            onChange={ltcgThreeHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/06/2022 to 15/09/2022</label>
                          <input
                            type="number"
                            name="value2"
                            onChange={ltcgThreeHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/09/2022 to 15/12/2022</label>
                          <input
                            type="number"
                            name="value3"
                            onChange={ltcgThreeHandler}
                          />
                        </div>

                        <div>
                          <label>From 16/12/2022 to 15/03/2023</label>
                          <input
                            type="number"
                            name="value4"
                            onChange={ltcgThreeHandler}
                          />
                        </div>
                        <div>
                          <label>From 16/03/2022 to 31/03/2023</label>
                          <input
                            type="number"
                            name="value5"
                            onChange={ltcgThreeHandler}
                          />
                        </div>
                        <div>
                          <label htmlFor="">Total</label>
                          <input
                            value={calculateSum(ltcg3)}
                            type="number"
                            readOnly
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                )}
                <li>
                  <label htmlFor="">
                    Income From Other Sources
                    <span
                      onClick={() => {
                        setShowHide3((prev) => !prev);
                      }}
                      role={'button'}
                      className="text-primary"
                    >
                      {showHide3 ? 'Hide Details' : 'Show Details'}
                    </span>
                  </label>
                  <input value={calculatedIncomeFromOtherSources} type="text" />
                </li>
                {showHide3 && (
                  <div className="p-2 mt-2 mb-4 border-2">
                    <ul
                      className=" 
                                w-full space-y-2
                                [&_label]:text-xs
                                [&>li]:grid [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]"
                    >
                      <li>
                        <div>
                          <label htmlFor="">Interest</label>
                        </div>
                        <div>
                          <input
                            type="number"
                            value={
                              incomeFromOtherSource.value1 > 0
                                ? incomeFromOtherSource.value1
                                : ''
                            }
                            name="value1"
                            onChange={incomeFromOtherSourceHandler}
                          />
                        </div>
                      </li>

                      <li>
                        <div>
                          <label htmlFor="">Commission/Other Income</label>
                        </div>
                        <div>
                          <input
                            type="number"
                            value={
                              incomeFromOtherSource.value2 > 0
                                ? incomeFromOtherSource.value2
                                : ''
                            }
                            name="value2"
                            onChange={incomeFromOtherSourceHandler}
                          />
                        </div>
                      </li>

                      <li>
                        <div>
                          <label htmlFor="">
                            Winnings from Lottery, Crossword Puzzles, etc.
                          </label>
                        </div>
                        <div>
                          <input
                            type="number"
                            value={
                              incomeFromOtherSource.value3 > 0
                                ? incomeFromOtherSource.value3
                                : ''
                            }
                            name="value3"
                            onChange={incomeFromOtherSourceHandler}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
                <li>
                  <label htmlFor="">
                    Profits and Gains of Business or Profession (enter profit
                    only)
                  </label>
                  <input type="number" />
                </li>

                <li>
                  <label htmlFor="">Agricultural Income</label>
                  <input type="number" />
                </li>

                <li>
                  <label htmlFor="">
                    Deductions
                    <span
                      onClick={() => {
                        setShowHide4((prev) => !prev);
                      }}
                      role={'button'}
                      className="text-blue-500"
                    >
                      {showHide4 ? 'Hide Details' : 'Show Details'}
                    </span>
                  </label>

                  <input
                    value={TOTAL_DEDUCTION ? TOTAL_DEDUCTION : ''}
                    type="number"
                    readOnly
                  />
                </li>
                {showHide4 && (
                  <div className="p-2 mt-2 mb-4 border-2">
                    <ul
                      className="
                                w-full space-y-2
                                [&_label]:text-xs
                                [&>li]:grid [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]
                                "
                    >
                      <li>
                        <label htmlFor="">Life Insurance premium paid</label>
                        <input
                          type="number"
                          value={deductions.value1}
                          name="value1"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Payment for annuity plan</label>
                        <input
                          type="number"
                          value={deductions.value2}
                          name="value2"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Contribution toward provident fund / PPF
                        </label>
                        <input
                          type="number"
                          value={deductions.value3}
                          name="value3"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Investment in NSC (VIII issue) + Interest
                        </label>
                        <input
                          type="number"
                          value={deductions.value4}
                          name="value4"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Contribution toward ULIP</label>
                        <input
                          type="number"
                          value={deductions.value5}
                          name="value5"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Contribution toward notified pension fund by MF/UTI
                        </label>
                        <input
                          type="number"
                          value={deductions.value6}
                          name="value6"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Re-payment of housing loan etc</label>
                        <input
                          type="number"
                          value={deductions.value7}
                          name="value7"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Tuition fees paid for children</label>
                        <input
                          type="number"
                          value={deductions.value8}
                          name="value8"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          5 Years fixed deposit with PO or Schedule Bank
                        </label>
                        <input
                          type="number"
                          value={deductions.value9}
                          name="value9"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Contribution toward NPF</label>
                        <input
                          type="number"
                          value={deductions.value10}
                          name="value10"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Employee&apos;s / Self-employed contribution toward
                          NPS (up to 20%) (u/s 80CCD)
                        </label>
                        <input
                          type="number"
                          value={deductions.value11}
                          name="value11"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Additional contribution towards NPS [u/s 80CCD(1B)]
                        </label>
                        <input
                          type="number"
                          value={npsAmount.value1}
                          name="value1"
                          onChange={npsAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Employer&apos;s contribution toward NPS (u/s 80CCD)
                        </label>
                        <input
                          type="number"
                          value={npsAmount.value2}
                          name="value2"
                          onChange={npsAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Deposit with Sukanya Samridhi Accounts
                        </label>
                        <input
                          type="number"
                          value={deductions.value12}
                          name="value12"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Any other deductable (u/s 80C)</label>
                        <input
                          type="number"
                          value={deductions.value13}
                          name="value13"
                          onChange={deductionAmountHandler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Total</label>
                        <input
                          value={
                            TOTAL_DEDUCTION_PART1 > 0
                              ? TOTAL_DEDUCTION_PART1
                              : ''
                          }
                          type="number"
                          readOnly
                        />
                      </li>

                      <li>
                        <label htmlFor="">Medi-claim premium (u/s 80D)</label>
                        <input
                          type="number"
                          value={deductions2.value14}
                          name="value14"
                          onChange={deductionAmountHandler2}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Actual payment towards medical treatment (u/s 80DDB )
                        </label>
                        <input
                          type="number"
                          value={deductions2.value15}
                          name="value15"
                          onChange={deductionAmountHandler2}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Interest payable on loan for residentials house
                          property (u/s 80EEA )
                        </label>
                        <input
                          type="number"
                          value={deductions2.value16}
                          name="value16"
                          onChange={deductionAmountHandler2}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Interest payable on loan for purchase of electric
                          vehicles(u/s 80EEB )
                        </label>
                        <input
                          type="number"
                          value={deductions2.value17}
                          name="value17"
                          onChange={deductionAmountHandler2}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Donations (u/s 80G)</label>
                        <input
                          type="number"
                          value={deductions2.value18}
                          name="value18"
                          onChange={deductionAmountHandler2}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Deduction for maintenance / medical treatment of
                          dependent (u/s 80DD)
                        </label>
                        <input value={amount80DD} type="number" readOnly />
                      </li>

                      <li>
                        <label htmlFor="">Tick if 80D is claimed</label>
                        <input type="checkbox" onChange={amount80DDHanlder} />
                      </li>

                      <li>
                        <label htmlFor="">Tick if severe disability</label>
                        <input
                          type="checkbox"
                          onChange={severe_disabilityCheck1Handler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Interest on loan for higher education (u/s 80E)
                        </label>
                        <input
                          type="number"
                          value={deductions2.value19}
                          name="value19"
                          onChange={deductionAmountHandler2}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Interest on loan taken for Residential House (u/s
                          80EE)
                        </label>
                        <input
                          type="number"
                          value={deductions2.value20}
                          name="value20"
                          onChange={deductionAmountHandler2}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Deduction in case of a person with disability (u/s
                          80U)
                        </label>
                        <input value={amount80U} type="number" readOnly />
                      </li>

                      <li>
                        <label htmlFor="">Tick if 80U is claimed</label>
                        <input type="checkbox" onChange={amount80UHanlder} />
                      </li>

                      <li>
                        <label htmlFor="">Tick if severe disability</label>
                        <input
                          type="checkbox"
                          onChange={severe_disabilityCheck2Handler}
                        />
                      </li>

                      <li>
                        <label htmlFor="">
                          Interest on deposits(u/s 80TTB)
                        </label>
                        <input
                          type="number"
                          value={deductions2.value21}
                          name="value21"
                          onChange={deductionAmountHandler2}
                        />
                      </li>

                      <li>
                        <label htmlFor="">Any other deductions</label>
                        <input
                          type="number"
                          value={deductions2.value22}
                          name="value22"
                          onChange={deductionAmountHandler2}
                        />
                      </li>
                    </ul>
                  </div>
                )}
                <li>
                  <label htmlFor=""> Taxable Income</label>

                  <input
                    value={showCurrency(taxableIncome || '')}
                    className="input bg-neutral-200/80 font-semibold"
                    type="text"
                    readOnly
                  />
                </li>

                <li>
                  <label htmlFor="">
                    Income Liable to Tax at Normal Rate ---
                  </label>

                  <div>
                    <input type="number" />
                    <input type="number" />
                  </div>
                </li>
                <li>
                  <label htmlFor="">
                    Short Term Capital Gains (Covered u/s 111A) 15%
                  </label>
                  <div>
                    <input type="number" />
                    <input type="number" />
                  </div>
                </li>
                <li>
                  <label htmlFor="">
                    Long Term Capital Gains (Covered u/s 112A) 10%
                  </label>
                  <div>
                    <input type="number" />
                    <input type="number" />
                  </div>
                </li>
                <li>
                  <label htmlFor="">
                    Long Term Capital Gains (Charged to tax @ 20%) 20%
                  </label>
                  <div>
                    <input type="number" />
                    <input type="number" />
                  </div>
                </li>
                <li>
                  <label htmlFor="">
                    Long Term Capital Gains (Charged to tax @ 10%) 10%
                  </label>
                  <div>
                    <input type="number" />
                    <input type="number" />
                  </div>
                </li>
                <li>
                  <label htmlFor="">
                    Winnings from Lottery, Crossword Puzzles, etc) 30%
                  </label>
                  <div>
                    <input type="number" />
                    <input type="number" />
                  </div>
                </li>
                <li>
                  <label htmlFor="">Relief other than relief u/s 87A</label>
                  <input type="text" />
                </li>
                <li>
                  <label htmlFor="">TDS/TCS/MAT (AMT) Credit Utilized</label>
                  <input type="number" />
                </li>
                <li>
                  <label htmlFor="">Assessed Tax</label>
                  <input type="number" />
                </li>
                <li>
                  <label htmlFor="">Income Tax after relief u/s 87A</label>
                  <input
                    className="bg-neutral-200 font-medium"
                    type="text"
                    value={showCurrency(ITafterRelief_87A) || ''}
                  />
                </li>
                <li>
                  <label htmlFor="">Surcharge</label>
                  <input
                    className="bg-neutral-200 font-medium"
                    type="text"
                    value={showCurrency(surcharge)}
                  />
                </li>
                <li>
                  <label htmlFor="">Health and Education Cess</label>
                  <input
                    className="bg-neutral-200 font-medium"
                    type="text"
                    value={showCurrency(healthAndEducationCess) || ''}
                  />
                </li>
                <li>
                  <label htmlFor="">Total Tax Liability</label>
                  <input
                    className="bg-neutral-200 font-medium"
                    type="text"
                    value={showCurrency(totalTaxLiability)}
                  />
                </li>
              </ul>
              <section className="mt-8 flex justify-center gap-8">
                <button
                  onClick={handleResetForm}
                  className="rounded bg-red-500 p-3 px-8 text-white hover:opacity-75"
                >
                  <span>Reset</span>
                </button>

                <button
                  type="submit"
                  className="rounded bg-primary p-3 px-8 text-white hover:opacity-75"
                  onClick={formik.handleSubmit}
                >
                  <span>Calculate</span>
                </button>
              </section>
            </>
          )}

          {select === 'HUF(Hindu undivided family)' && (
            <HUF_HinduUndividedFamily
              handleGetLiability_And_Installments={
                handleGetLiability_And_Installments
              }
            />
          )}

          {select === 'AOP/BOI' && (
            <AOP_BOI
              handleGetLiability_And_Installments={
                handleGetLiability_And_Installments
              }
            />
          )}

          {select === 'Domestic Company' && (
            <DomesticCompany
              handleGetLiability_And_Installments={
                handleGetLiability_And_Installments
              }
            />
          )}

          {select === 'Foreign Company' && (
            <ForeignCompany
              handleGetLiability_And_Installments={
                handleGetLiability_And_Installments
              }
            />
          )}

          {select === 'Firms' && (
            <Firms
              handleGetLiability_And_Installments={
                handleGetLiability_And_Installments
              }
            />
          )}

          {select === 'LLP' && (
            <LLP
              handleGetLiability_And_Installments={
                handleGetLiability_And_Installments
              }
            />
          )}

          {select === 'Co-operative Society' && (
            <Co_OperativeSociety
              handleGetLiability_And_Installments={
                handleGetLiability_And_Installments
              }
            />
          )}
        </form>
      </div>
      <TaxResultTable
        CurrentYear={CurrentYear}
        advanceTaxCalculated={advanceTaxCalculated}
      />
      <TaxPdf advanceTaxCalculated={advanceTaxCalculated} />
    </div>
  );
}
