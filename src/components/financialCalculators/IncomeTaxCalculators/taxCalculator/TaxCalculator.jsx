'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
// import Checkbox from '../../../components/Checkbox';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import showCurrency from '@/helper/showCurrency';
// import useAuth from ".@/hooks/useAuth";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import UseAuth from '../../../../hooks/useAuth';

// new regime 23-24
const calculateTax = (income) => {
  const {token} = UseAuth();
  const RATE_1 = 0.0;
  const RATE_2 = 0.05;
  const RATE_3 = 0.1;
  const RATE_4 = 0.15;
  const RATE_5 = 0.2;
  const RATE_6 = 0.25;
  const RATE_7 = 0.3;
  // const CESS = 0.04;

  const LIMIT_1 = 250000;
  const LIMIT_2 = 500000;
  const LIMIT_3 = 750000;
  const LIMIT_4 = 1000000;
  const LIMIT_5 = 1250000;
  const LIMIT_6 = 1500000;

  let tax = 0;
  if (income <= LIMIT_1) {
    tax = RATE_1 * income;
  } else if (income <= LIMIT_2) {
    tax = RATE_2 * (income - LIMIT_1);
  } else if (income <= LIMIT_3) {
    tax = RATE_3 * (income - LIMIT_2) + calculateTax(LIMIT_2);
  } else if (income <= LIMIT_4) {
    tax = RATE_4 * (income - LIMIT_3) + calculateTax(LIMIT_3);
  } else if (income <= LIMIT_5) {
    tax = RATE_5 * (income - LIMIT_4) + calculateTax(LIMIT_4);
  } else if (income <= LIMIT_6) {
    tax = RATE_6 * (income - LIMIT_5) + calculateTax(LIMIT_5);
  } else {
    tax = RATE_7 * (income - LIMIT_6) + calculateTax(LIMIT_6);
  }

  // tax + CESS * tax;
  return tax;
};

const initialValues = {
  financial_year: '',
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
  gender: '',
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
export default function TaxCalculator() {
  // local storage user
  const [select, setSelect] = useState('');
  const [secetion115Bac, setSection115Bac] = useState('no');
  const [cooperative115bad, setCooperative115bad] = useState('');
  const [showHide1, setShowHide1] = useState(false);
  const [showHide2, setShowHide2] = useState(false);
  const [showHide3, setShowHide3] = useState(false);
  const [showHide4, setShowHide4] = useState(false);
  const [panNumber, setPanNumber] = useState('');
  const [panNumberError, setPanNumberError] = useState(false);
  const [panStatus, setPanStatus] = useState('');
  const [panFirstName, setPanFirstName] = useState('');
  const [panLastName, setPanLastName] = useState('');
  const [userDetails, setUserDetails] = useState('');
  const [genderDetails, setGenderDetails] = useState('');
  const [panUserDetails, setPanUserDetails] = useState('');
  const [calculatedTax, setCalculatedTax] = useState(undefined);
  const [isLetoutSelected, setIsLetoutSelected] = useState(false);
  const [calculatedNetTax, setCalculatedNetTax] = useState(0);
  const [surchargeValue, setSurchargeValue] = useState(0);
  const [educationCessValue, setEducationCessValue] = useState(0);
  const [totalTaxLiabilityValue, setTotalTaxLiabilityValue] = useState(0);
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

  // // handler gender change upon user dob
  //   const handleGenderChange = (event) => {
  //     setGenderDetails(event.target.value);
  //     console.log(event.target.value);
  //   };

  // get user details using pan
  const getUserDetailsUsingPAN = async () => {
    console.log('pan no', panNumber);
    const URL = `${BASE_URL}/pan/get-pan-details`;
    const authToken = token;
    try {
      const response = await axios.get(URL, {
        params: {
          pan: panNumber,
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log('Response data PAN:', response);
      setPanUserDetails(response.data.data);
      setPanStatus(response.data.data.status);
      if (response.data.data.status === 'NOT-VALID') {
        setPanNumberError(true);
        return;
      }
      if (response.data.data.full_name) {
        setPanFirstName(
          response.data.data.full_name && response.data.data.full_name,
        );
      } else if (response.data.data.first_name) {
        setPanFirstName(
          response.data.data.first_name && response.data.data.first_name,
        );
      }
      setPanLastName(
        response.data.data.last_name && response.data.data.last_name,
      );
      if (response.data.data.category === 'Individual') {
        setSelect('General');
      } else {
        setSelect(response.data.data.category);
      }
      setPanNumberError(false);
    } catch (error) {
      setPanNumberError(true);
      console.error('Error:', error);
    }
  };

  // for ay 18-19

  // for 22-23 & 23-24

  // for individual 24-25

  // convert taxValue keys
  function convertCamelCaseToTitleCaseWithSpaces(obj) {
    const newObj = {};
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const titleCaseKey = key
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        newObj[titleCaseKey] = obj[key];
      }
    }
    return newObj;
  }

  const generatePDF = async (name, lastName, taxValue) => {
    // const user = JSON.parse(localStorage.getItem('currentUser')).user;
    // console.log('user', user);
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;
    const lineHeight = fontSize + 5;

    // heading 1

    const headText = 'ITAXEASY';
    const headFontSize = 24;
    const headFont = timesRomanFont;
    const headColor = rgb(0, 0, 0);
    const headingBold = true;
    const headX =
      width / 2 - headFont.widthOfTextAtSize(headText, headFontSize) / 2;
    const headY = height - lineHeight - 20;

    page.drawText(headText, {
      x: headX,
      y: headY,
      size: headFontSize,
      font: headFont,
      color: headColor,
      bold: headingBold,
    });

    const headWidth = headFont.widthOfTextAtSize(headText, headFontSize);
    page.drawLine({
      start: { x: headX, y: headY - 5 },
      end: { x: headX + headWidth, y: headY - 5 },
      color: headColor,
      thickness: 1,
    });

    // heading 2

    const headingText = 'Tax Report';
    const headingFontSize = 18;
    const headingFont = timesRomanFont;
    const headingColor = rgb(0, 0, 0);
    const headingX = 50;
    const headingY = headY - 2 * lineHeight - 20;
    // const headingBold = true;

    page.drawText(headingText, {
      x: headingX,
      y: headingY,
      size: headingFontSize,
      font: headingFont,
      color: headingColor,
      bold: headingBold,
      underline: true,
    });

    const headingWidth = headingFont.widthOfTextAtSize(
      headingText,
      headingFontSize,
    );

    // Draw a line
    page.drawLine({
      start: { x: headingX, y: headingY - 5 }, // Adjust the Y position as needed
      end: { x: headingX + headingWidth, y: headingY - 5 }, // Adjust the Y position as needed
      color: headingColor,
      thickness: 1, // Adjust the line thickness as needed
    });

    // Calculate the maximum width for "Name" and "Last Name" keys
    const nameKey = 'First Name:';
    const lastNameKey = 'Last Name:';
    const maxKeyWidth = Math.max(
      timesRomanFont.widthOfTextAtSize(nameKey, fontSize),
      timesRomanFont.widthOfTextAtSize(lastNameKey, fontSize),
    );

    // Define the vertical gap between content above and the table
    const verticalGap = 20; // Adjust as needed

    // Define the positions for the text
    const keyX = 50;
    const valueX = 50 + maxKeyWidth + 50; // Add padding between key and value
    const startY = headingY - 2 * lineHeight - verticalGap + 19; // Add vertical gap

    // Draw "Name" key and value
    page.drawText(nameKey, {
      x: keyX,
      y: startY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });
    let firstName = '';
    if (panUserDetails.full_name) {
      firstName = panUserDetails.full_name;
    } else if (panUserDetails.first_name) {
      firstName = panUserDetails.first_name;
    }

    page.drawText(firstName, {
      x: valueX,
      y: startY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    let startMY = headingY - 2 * lineHeight - verticalGap + 19;

    let middleName = '';
    if (panUserDetails.middle_name) {
      console.log('inside middle pdf', panUserDetails.middle_name);
      startMY = startY - lineHeight; // Add vertical gap
      middleName = panUserDetails.middle_name;
      // middle name
      page.drawText('Middle Name', {
        x: keyX,
        y: startMY,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      });
      page.drawText(middleName, {
        x: valueX,
        y: startMY,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      });
    }

    const lastNameY = startMY - lineHeight;

    // Draw "Last Name" key and value
    page.drawText(lastNameKey, {
      x: keyX,
      y: lastNameY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    let currlastName = '';
    if (panUserDetails.last_name) {
      currlastName = panUserDetails.last_name;
    }

    page.drawText(currlastName, {
      x: valueX,
      y: lastNameY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // pan no
    const panNoY = lastNameY - lineHeight;

    page.drawText('PAN No: ', {
      x: keyX,
      y: panNoY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(panNumber, {
      x: valueX,
      y: panNoY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // Assessment Year
    const AssessmentYearY = panNoY - lineHeight;

    page.drawText('Assessment Year: ', {
      x: keyX,
      y: AssessmentYearY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(userDetails.financial_year, {
      x: valueX,
      y: AssessmentYearY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // Gender
    const GenderY = AssessmentYearY - lineHeight;

    page.drawText('Gender : ', {
      x: keyX,
      y: GenderY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(userDetails.gender, {
      x: valueX,
      y: GenderY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // Residential Status
    const ResidentialStatusY = GenderY - lineHeight;

    page.drawText('Residential Status : ', {
      x: keyX,
      y: ResidentialStatusY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(userDetails.residential_status, {
      x: valueX,
      y: ResidentialStatusY,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // heading 3
    // Add the heading below Residential Status
    const heading2Text = 'Computation of Total Estimate'; // Your heading text
    const heading2FontSize = 16; // Font size
    const heading2Font = timesRomanFont;
    const heading2Color = rgb(0, 0, 0); // Black color
    const heading2X =
      width / 2 -
      heading2Font.widthOfTextAtSize(heading2Text, heading2FontSize) / 2; // Centered horizontally
    const heading2Y = ResidentialStatusY - lineHeight - 20; // Adjust vertical position as needed

    // Draw the heading text
    page.drawText(heading2Text, {
      x: heading2X,
      y: heading2Y,
      size: heading2FontSize,
      font: heading2Font,
      color: heading2Color,
      bold: headingBold,
    });

    // Draw a line under the second heading
    const heading2Width = heading2Font.widthOfTextAtSize(
      heading2Text,
      heading2FontSize,
    );
    page.drawLine({
      start: { x: heading2X, y: heading2Y - 5 }, // Adjust the Y position as needed
      end: { x: heading2X + heading2Width, y: heading2Y - 5 }, // Adjust the Y position as needed
      color: heading2Color,
      thickness: 1, // Adjust the line thickness as needed
    });

    // Define table headers with borders and bold text
    const headers = ['Tax Name', 'Estimated'];
    const tableWidths = [200, 200]; // Adjust the column widths as needed

    // Calculate cell height
    const cellHeight = 20;

    // Draw table headers with borders and bold text
    const tableY = ResidentialStatusY - 2 * lineHeight - verticalGap - 50; // Add vertical gap

    for (let i = 0; i < headers.length; i++) {
      const headerX = keyX + i * (tableWidths[i] + 1); // Add 1 for border
      page.drawRectangle({
        x: headerX,
        y: tableY,
        width: tableWidths[i],
        height: cellHeight,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
      });
      page.drawText(headers[i], {
        x: headerX + 5, // Adjust the X position as needed for padding
        y: tableY + cellHeight / 2 - fontSize / 2,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
        bold: true,
      });
    }

    // Draw table rows
    let rowIndex = 0;
    const titleCaseObject = convertCamelCaseToTitleCaseWithSpaces(taxValue);
    console.log(titleCaseObject);

    for (const key in titleCaseObject) {
      if (titleCaseObject.hasOwnProperty(key)) {
        const rowY = tableY - (rowIndex + 1) * cellHeight;

        for (let i = 0; i < headers.length; i++) {
          const cellX = keyX + i * (tableWidths[i] + 1); // Add 1 for border
          page.drawRectangle({
            x: cellX,
            y: rowY,
            width: tableWidths[i],
            height: cellHeight,
            borderColor: rgb(0, 0, 0),
            borderWidth: 1,
          });

          if (i === 0) {
            page.drawText(key, {
              x: cellX + 5, // Adjust the X position as needed for padding
              y: rowY + cellHeight / 2 - fontSize / 2,
              size: fontSize,
              font: timesRomanFont,
              color: rgb(0, 0, 0),
            });
          } else if (i === 1) {
            // Align the text to the right
            page.drawText(`Rs ${titleCaseObject[key].toString()}`, {
              x: cellX + tableWidths[i] - 53, // Adjust the X position for right alignment
              y: rowY + cellHeight / 2 - fontSize / 2,
              size: fontSize,
              font: timesRomanFont,
              color: rgb(0, 0, 0),
              alignment: 'right', // Align text to the right
            });
          }
        }

        rowIndex++;
      }
    }

    const pdfBytes = await pdfDoc.save();

    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    const pdfUrl = URL.createObjectURL(pdfBlob);

    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'generated-pdf.pdf';
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(pdfUrl);
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
    onSubmit: (values) => {
      setCalculatedNetTax('');
      setSurchargeValue('');
      setEducationCessValue('');
      setTotalTaxLiabilityValue('');

      console.log('user values: ', values);
      setUserDetails(values);
      let taxValue = {};

      if (values.filing_category === 'Co-operative Society') {
        {
          cooperative115bad === 'yes'
            ? (taxValue = calculateNetIncomeTaxCoopsection115BAD(
                values.basic_salary,
              ))
            : (taxValue = calculateNetIncomeTaxCoop(values.basic_salary));
        }

        console.log('coop soc tax', taxValue);
      } else if (
        (values.residential_status === 'non_resident' ||
          values.residential_status === 'not_ordinary_resident') &&
        values.basic_salary <= 500000 &&
        values.basic_salary >= 250000
      ) {
        taxValue = calculateNonResidentialTax(values.basic_salary);
        console.log('non resident tax', taxValue);
      } else if (values.filing_category === 'General') {
        if (values.financial_year === 'FY 2019-20') {
          if (
            values.gender === 'male' ||
            values.gender === 'female' ||
            (values.gender === 'senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident') ||
            (values.gender === 'super_senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident')
          ) {
            taxValue = calculateNetIncomeTaxIndividual1920(values.basic_salary);
            console.log(taxValue);
          } else if (values.gender === 'senior_citizen') {
            taxValue = calculateNetIncomeTaxSeniorC1920(values.basic_salary);
          } else if (values.gender === 'super_senior_citizen') {
            taxValue = calculateNetIncomeTaxSuperSeniorC1920(
              values.basic_salary,
            );
          }
        } else if (values.financial_year === 'FY 2018-19') {
          if (
            values.gender === 'male' ||
            values.gender === 'female' ||
            (values.gender === 'senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident') ||
            (values.gender === 'super_senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident')
          ) {
            taxValue = calculateNetIncomeTaxIndividual1819(values.basic_salary);
            console.log(taxValue);
          } else if (values.gender === 'senior_citizen') {
            taxValue = calculateNetIncomeTaxSeniorC1819(values.basic_salary);
          } else if (values.gender === 'super_senior_citizen') {
            taxValue = calculateNetIncomeTaxSuperSeniorC1819(
              values.basic_salary,
            );
          }
        } else if (values.financial_year === 'FY 2020-21') {
          console.log('inside 20-21', values);
          if (
            values.gender === 'male' ||
            values.gender === 'female' ||
            (values.gender === 'senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident') ||
            (values.gender === 'super_senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident')
          ) {
            taxValue = calculateNetIncomeTaxIndividual2021(values.basic_salary);
            console.log('inside 20-21 taxvalue', taxValue);
          } else if (values.gender === 'senior_citizen') {
            taxValue = calculateNetIncomeTaxSeniorC2021(values.basic_salary);
          } else if (values.gender === 'super_senior_citizen') {
            taxValue = calculateNetIncomeTaxSuperSeniorC2021(
              values.basic_salary,
            );
          }
        } else if (values.financial_year === 'FY 2021-22') {
          if (
            values.gender === 'male' ||
            values.gender === 'female' ||
            (values.gender === 'senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident') ||
            (values.gender === 'super_senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident')
          ) {
            taxValue = calculateNetIncomeTaxIndividual2122(values.basic_salary);
            console.log(taxValue);
          } else if (values.gender === 'senior_citizen') {
            taxValue = calculateNetIncomeTaxSeniorC2122(values.basic_salary);
          } else if (values.gender === 'super_senior_citizen') {
            taxValue = calculateNetIncomeTaxSuperSeniorC2122(
              values.basic_salary,
            );
          }
        } else if (values.financial_year === 'FY 2022-23') {
          if (
            values.gender === 'male' ||
            values.gender === 'female' ||
            (values.gender === 'senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident') ||
            (values.gender === 'super_senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident')
          ) {
            taxValue = calculateNetIncomeTaxIndividual2223(values.basic_salary);
            console.log(taxValue);
          } else if (values.gender === 'senior_citizen') {
            taxValue = calculateNetIncomeTaxSeniorC2223(values.basic_salary);
          } else if (values.gender === 'super_senior_citizen') {
            taxValue = calculateNetIncomeTaxSuperSeniorC2223(
              values.basic_salary,
            );
          }
        } else if (values.financial_year === 'FY 2023-24') {
          if (
            values.gender === 'male' ||
            values.gender === 'female' ||
            (values.gender === 'senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident') ||
            (values.gender === 'super_senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident')
          ) {
            taxValue = calculateNetIncomeTaxIndividual2324(values.basic_salary);
            console.log(taxValue);
          } else if (values.gender === 'senior_citizen') {
            taxValue = calculateNetIncomeTaxSeniorC2223(values.basic_salary);
          } else if (values.gender === 'super_senior_citizen') {
            taxValue = calculateNetIncomeTaxSuperSeniorC2223(
              values.basic_salary,
            );
          }
        } else if (values.financial_year === 'FY 2024-25') {
          if (
            values.gender === 'male' ||
            values.gender === 'female' ||
            (values.gender === 'senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident') ||
            (values.gender === 'super_senior_citizen' &&
              values.residential_status !== 'resident' &&
              values.residential_status !== 'not_ordinary_resident')
          ) {
            taxValue = calculateNetIncomeTaxIndividual2425(values.basic_salary);
            console.log(taxValue);
          } else if (values.gender === 'senior_citizen') {
            taxValue = calculateNetIncomeTaxSeniorC2425(values.basic_salary);
          } else if (values.gender === 'super_senior_citizen') {
            taxValue = calculateNetIncomeTaxSuperSeniorC2425(
              values.basic_salary,
            );
          }
        }
      } else if (
        values.filing_category === 'HUF(Hindu undivided family)' ||
        values.filing_category === 'AOP/BOI'
      ) {
        console.log('in HUF');

        if (
          values.financial_year === 'FY 2019-20' ||
          values.financial_year === 'FY 2018-19' ||
          values.financial_year === 'FY 2020-21'
        ) {
          taxValue = calculateNetIncomeTaxHUF_AOP_BOI1821(values.basic_salary);
          console.log('in tax Value calculation', taxValue);
        } else {
          taxValue = calculateNetIncomeTaxHUF_AOP_BOI21beyond(
            values.basic_salary,
          );
        }
      } else if (values.filing_category === 'Domestic Company') {
        console.log('in Domestic');

        if (
          values.financial_year === 'FY 2019-20' ||
          values.financial_year === 'FY 2018-19' ||
          values.financial_year === 'FY 2020-21'
        ) {
          taxValue = calculateNetIncomeTaxDComapny2324(values.basic_salary);
          console.log('in tax Value calculation', taxValue);
        } else {
          taxValue = calculateNetIncomeTaxDComapny2324(values.basic_salary);
        }
      } else if (values.filing_category === 'Foreign Company') {
        console.log('in Domestic');

        if (
          values.financial_year === 'FY 2019-20' ||
          values.financial_year === 'FY 2018-19' ||
          values.financial_year === 'FY 2020-21'
        ) {
          taxValue = calculateNetIncomeTaxFCompany2324(values.basic_salary);
          console.log('in tax Value calculation', taxValue);
        } else {
          taxValue = calculateNetIncomeTaxFCompany2324(values.basic_salary);
        }
      } else if (values.filing_category === 'LLP') {
        console.log('in Firm/llp');

        if (
          values.financial_year === 'FY 2019-20' ||
          values.financial_year === 'FY 2018-19' ||
          values.financial_year === 'FY 2020-21'
        ) {
          taxValue = calculatedNetTaxFirm_LLP2324(values.basic_salary);
          console.log('in tax Value calculation', taxValue);
        } else {
          taxValue = calculatedNetTaxFirm_LLP2324(values.basic_salary);
          console.log('in tax Value 225', taxValue);
        }
      }
      console.log('aftter loop', taxValue);
      setCalculatedNetTax(taxValue.taxRate);
      setSurchargeValue(taxValue.surcharge);
      setEducationCessValue(taxValue.educationCess);
      let totalTax =
        taxValue.taxRate + taxValue.surcharge + taxValue.educationCess;
      setTotalTaxLiabilityValue(totalTax);
    },
  });

  const pdfHandler = (e) => {
    e.preventDefault();
    let data = {
      taxRate: calculatedNetTax,
      SurCharge: surchargeValue,
      EducationCess: educationCessValue,
      totalTaxLiability: totalTaxLiabilityValue,
    };

    const name = 'John';
    const lastName = 'Doe';
    generatePDF(name, lastName, data);
  };

  useEffect(() => {
    const tax = calculateTax(formik.values.basic_salary);
    setCalculatedTax({
      inst_one: tax * 0.15,
      inst_two: tax * 0.3,
      inst_three: tax * 0.3,
      inst_four: tax * 0.25,
    });
  }, [formik.values.basic_salary]);

  const classes =
    '[&_input]:h-10 [&_input]:px-3 [&_input]:border [&_input]:border-neutral-800 [&_input]:rounded [&_input]:w-full';
  const classes2 =
    '[&_select]:h-10 [&_select]:bg-white [&_select]:border [&_select]:border-neutral-800 [&_select]:px-2 [&_select]:rounded [&_select]:w-full [&_label]:text-lg';
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div>
          <div className="my-8 flex justify-center">
            <div
              className={`${classes} ${classes2} w-full rounded-md border border-primary_light p-8 md:w-[950px] [&>div]:border-b [&>div]:border-b-primary_light [&_div]:flex [&_div]:items-center [&_div]:justify-between [&_div]:gap-2 [&_div]:py-1`}
              id="advancetaxdiv"
            >
              <h3 className="mb-8 w-max rounded bg-primary px-2 text-2xl font-bold text-white md:text-3xl">
                TAX CALCULATOR
              </h3>
              <div>
                <div>
                  <label htmlFor="pan">PAN No.</label>
                </div>
                <div className="relative w-64">
                  <input
                    type="text"
                    name="pan"
                    id="pan"
                    placeholder="Pan number "
                    value={panNumber}
                    onChange={(e) => {
                      setPanNumber(e.target.value);
                    }}
                    onBlur={() => {
                      // Perform your check on panNumber here
                      console.log('blur running', panNumber);
                      if (panNumber) {
                        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                        if (!regex.test(panNumber)) {
                          setPanNumberError(true);
                        } else {
                          setPanNumberError(false);
                          getUserDetailsUsingPAN(panNumber);
                        }
                      }
                    }}
                  />
                  {formik.errors.pan && (
                    <p className="absolute -bottom-3 text-red-500">
                      {formik.errors.pan}
                    </p>
                  )}
                  {panNumberError && (
                    <p className="absolute -bottom-3 text-red-500">
                      Invalid pan number
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Tax Payer</label>
                </div>
                <div className="w-64">
                  <select
                    name="filing_category"
                    id=""
                    value={select}
                    onChange={(e) => {
                      setSelect(e.target.value);
                    }}
                  >
                    <option value={''}>Select</option>
                    <option value={'General'}>Individual</option>
                    <option value={'HUF(Hindu undivided family)'}>
                      HUF(Hindu undivided family)
                    </option>
                    <option value={'AOP/BOI'}>AOP/BOI</option>
                    <option value={'Domestic Company'}>Domestic Company</option>
                    <option value={'Foreign Company'}>Foreign Company</option>
                    <option value={'LLP'}>Firm/LLP</option>
                    <option value={'Co-operative Society'}>
                      Co-operative Society{' '}
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Status</label>
                </div>
                <div className="w-64">
                  <input name="status" type="text" value={panStatus} readOnly />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">First Name: </label>
                </div>
                <div className="w-64">
                  <input
                    name="firstName"
                    type="text"
                    value={panFirstName}
                    readOnly
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Last Name: </label>
                </div>
                <div className="w-64">
                  <input
                    name="lastName"
                    type="text"
                    value={panLastName}
                    readOnly
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Assessment Year</label>
                </div>
                <div className="w-64">
                  <select
                    name="financial_year"
                    id=""
                    value={formik.values.financial_year}
                    onChange={formik.handleChange}
                  >
                    <option selected>Choose...</option>
                    <option value={'FY 2024-25'}>2024-25</option>
                    <option value={'FY 2023-24'}>2023-24</option>
                    <option value={'FY 2022-23'}>2022-23</option>
                    <option value={'FY 2021-22'}>2021-22</option>
                    <option value={'FY 2020-21'}>2020-21</option>
                    <option value={'FY 2019-20'}>2019-20</option>
                    {/* <option value={"FY 2018-19"}>2018-19</option> */}
                  </select>
                </div>
              </div>
              <form
                className="[&>div]:border-b [&>div]:border-b-primary_light"
                action=""
                onSubmit={formik.handleSubmit}
              >
                {select == '' && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div className="w-64">
                        <input type="text" readOnly />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div className="w-64">
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div className="w-64">
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div className="w-64">
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div className="w-64">
                        <input type="text" />
                      </div>
                    </div>
                  </>
                )}

                {select === 'General' && (
                  <>
                    {formik.values.financial_year === 'FY 2024-25' ||
                    formik.values.financial_year === 'FY 2023-24' ||
                    formik.values.financial_year === 'FY 2022-23' ||
                    formik.values.financial_year === 'FY 2021-22' ? (
                      <div>
                        <div>
                          <label htmlFor="">
                            Whether opting for taxation under Section{' '}
                            <span className="text-blue-600">115BAC</span>?
                          </label>
                        </div>
                        <div>
                          <select
                            name=""
                            id=""
                            onChange={(e) => {
                              setSection115Bac(e.target.value);
                            }}
                          >
                            <option value="no">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    <div>
                      <div>
                        <label htmlFor="gender">Gender</label>
                      </div>
                      <div className="w-64">
                        <select
                          name="gender"
                          id="gender"
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
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Residential Status</label>
                      </div>
                      <div className="w-64">
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
                      </div>
                    </div>

                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>

                      <div className="w-64">
                        <input
                          name="basic_salary"
                          type="text"
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    {showHide1 && (
                      <>
                        <div className="flex flex-col">
                          <div className="w-full">
                            <label className="cursor-pointer">
                              <input
                                type="checkbox"
                                value={false}
                                style={{ width: '20px', height: '18px' }}
                                className="h-2 w-2"
                                onChange={checkInterest}
                              />{' '}
                              <span className="mx-2">
                                (a)Income from Self-occupied Property or
                                Interest Paid/Payable on Housing Loan
                              </span>
                            </label>
                          </div>
                          {!isLetoutSelected && (
                            <section className="flex w-full flex-col">
                              <div>
                                <div>
                                  <label htmlFor="">
                                    (a)1. Interest on Housing Loan
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    onChange={getuncheckedLetoutAmountHandler}
                                  />
                                </div>
                              </div>

                              <div>
                                <div>
                                  <label htmlFor="">
                                    (a)2. Income from self-occupied house
                                    property
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={
                                      uncheckedLetoutAmount
                                        ? -uncheckedLetoutAmount
                                        : ''
                                    }
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </section>
                          )}
                        </div>
                      </>
                    )}
                    <div>
                      <div>
                        <label htmlFor="">
                          Income Tax after relief u/s{' '}
                          <span className="text-blue-600"> 87A</span>
                        </label>
                      </div>
                      <div className="w-64">
                        <input value={calculatedNetTax} type="text" readOnly />
                      </div>
                    </div>

                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div className="w-64">
                        <input value={surchargeValue} type="text" />
                      </div>
                    </div>

                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div className="w-64">
                        <input type="number" value={educationCessValue} />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div className="w-64">
                        <input type="number" value={totalTaxLiabilityValue} />
                      </div>
                    </div>
                  </>
                )}

                {(select === 'AOP/BOI' ||
                  select === 'HUF(Hindu undivided family)' ||
                  select === 'Domestic Company' ||
                  select === 'Foreign Company' ||
                  select === 'LLP') && (
                  <>
                    {select === 'Domestic Company' && (
                      <>
                        {formik.values.financial_year === 'FY 2024-25' && (
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                style={{ width: '10px', height: '10px' }}
                              />
                            </div>
                            <div>
                              <label
                                className=" text-xs"
                                for="flexCheckDefault"
                              >
                                Tick if, total turnover or gross receipt of the
                                company in the previous year &quot;year&quot;
                                does not exceed 400 crore rupees
                              </label>
                            </div>
                          </div>
                        )}
                        {formik.values.financial_year === 'FY 2023-24' && (
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                style={{ width: '10px', height: '10px' }}
                              />
                            </div>
                            <div>
                              <label
                                className=" text-xs"
                                for="flexCheckDefault"
                              >
                                Tick if, total turnover or gross receipt of the
                                company in the previous year 2020-21 does not
                                exceed 400 crore rupees
                              </label>
                            </div>
                          </div>
                        )}
                        {formik.values.financial_year === 'FY 2022-23' && (
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                style={{ width: '10px', height: '10px' }}
                              />
                            </div>
                            <div>
                              <label
                                className=" text-xs"
                                for="flexCheckDefault"
                              >
                                Tick if, total turnover or gross receipt of the
                                company in the previous year 2019-20 does not
                                exceed 400 crore rupees
                              </label>
                            </div>
                          </div>
                        )}
                        {formik.values.financial_year === 'FY 2021-22' && (
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                style={{ width: '10px', height: '10px' }}
                              />
                            </div>
                            <div>
                              <label
                                className=" text-xs"
                                for="flexCheckDefault"
                              >
                                Tick if, total turnover or gross receipt of the
                                company in the previous year 2018-19 does not
                                exceed 400 crore rupees
                              </label>
                            </div>
                          </div>
                        )}
                        {formik.values.financial_year === 'FY 2020-21' && (
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                style={{ width: '10px', height: '10px' }}
                              />
                            </div>
                            <div>
                              <label
                                className=" text-xs"
                                for="flexCheckDefault"
                              >
                                Tick if, total turnover or gross receipt of the
                                company in the previous year 2017-18 does not
                                exceed 400 crore rupees
                              </label>
                            </div>
                          </div>
                        )}
                        {formik.values.financial_year === 'FY 2019-20' && (
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                style={{ width: '10px', height: '10px' }}
                              />
                            </div>
                            <div>
                              <label
                                className=" text-xs"
                                for="flexCheckDefault"
                              >
                                Tick if, total turnover or gross receipt of the
                                company in the previous year 2016-17 does not
                                exceed 250 crore rupees
                              </label>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center me-4">
                          <div>
                            <input
                              type="checkbox"
                              value=""
                              id="flexCheckDefault2"
                              style={{ width: '10px', height: '10px' }}
                            />
                          </div>
                          <div>
                            <label for="">
                              Tick if, company opted and qualify under section
                              115BA
                            </label>
                          </div>
                        </div>

                        <div>
                          <div>
                            <input
                              type="checkbox"
                              value=""
                              id="flexCheckDefault3"
                              style={{ width: '10px', height: '10px' }}
                            />
                          </div>
                          <div>
                            <label for="flexCheckDefault3">
                              Tick if, company opted and qualify for section
                              115BAA
                            </label>
                          </div>
                        </div>
                        <div>
                          <div>
                            <input
                              type="checkbox"
                              value=""
                              id="flexCheckDefault4"
                              style={{ width: '10px', height: '10px' }}
                            />
                          </div>
                          <div>
                            <label for="flexCheckDefault4">
                              Tick if, company opted and qualify for section
                              115BAB
                            </label>
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>

                      <div className="w-64">
                        <input
                          name="basic_salary"
                          type="text"
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Income Tax after relief u/s{' '}
                          <span className="text-blue-600">87A</span>
                        </label>
                      </div>
                      <div className="w-64">
                        <input value={calculatedNetTax} type="text" readOnly />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div className="w-64">
                        <input value={surchargeValue} type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div className="w-64">
                        <input type="number" value={educationCessValue} />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div className="w-64">
                        <input type="number" value={totalTaxLiabilityValue} />
                      </div>
                    </div>
                  </>
                )}

                {select === 'Co-operative Society' && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">
                          Co-operative society opted and qualify for section
                          <span className="text-blue-600">115BAD</span>
                        </label>
                      </div>
                      <div>
                        <select
                          name=""
                          id=""
                          onChange={(e) => {
                            setCooperative115bad(e.target.value);
                          }}
                        >
                          <option disabled selected>
                            select
                          </option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                    {formik.values.financial_year === 'FY 2024-25' && (
                      <div>
                        <div>
                          <label htmlFor="">
                            Co-operative society opted and qualify for section
                            <span className="text-blue-600">115BAE</span>
                          </label>
                        </div>
                        <div>
                          <select name="" id="">
                            <option value="">select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>

                      <div className="w-64">
                        <input
                          name="basic_salary"
                          type="text"
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Income Tax after relief u/s{' '}
                          <span className="text-blue-600">87A</span>
                        </label>
                      </div>
                      <div className="w-64">
                        <input
                          value={showCurrency(calculatedNetTax)}
                          type="text"
                          readOnly
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div className="w-64">
                        <input
                          value={showCurrency(surchargeValue)}
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Education Cess</label>
                      </div>
                      <div className="w-64">
                        <input
                          type="text"
                          value={showCurrency(educationCessValue)}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div className="w-64">
                        <input
                          type="text"
                          value={showCurrency(totalTaxLiabilityValue)}
                        />
                      </div>
                    </div>
                  </>
                )}
              </form>
              <section className="mt-8 flex justify-center gap-8">
                <button className="rounded bg-red-500 p-3 px-8 text-white hover:opacity-75">
                  <span>Reset</span>
                </button>

                <button
                  type="submit"
                  className="rounded bg-primary p-3 px-8 text-white hover:opacity-75"
                  onClick={formik.handleSubmit}
                >
                  <span>Calculate</span>
                </button>
                <button
                  type="submit"
                  className="rounded bg-primary p-3 px-8 text-white hover:opacity-75"
                  onClick={pdfHandler}
                >
                  <span>Download PDF</span>
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
