import { formatINRCurrency } from '@/utils/utilityFunctions';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import UseAuth from '../../../../../hooks/useAuth';
import axios from 'axios';

export const getUserDetailsUsingPAN = async (
  panNumber,
  setValue,
  setError,
  setUserDetails,
) => {
  const { token } = UseAuth();
  //console.log('pan no', panNumber);
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
    // CHECK PAN STATUS
    if (response.data.data.status === 'NOT-VALID') {
      //setPanNumberError(true);
      setError(
        'pan',
        { type: 'custom', message: 'Invalid pan number' },
        { shouldFocus: true },
      );
      setValue('status', 'NOT-VALID');
      return;
    } else {
      setValue('status', 'VALID');
    }
    // SET NAMES
    if (response.data.data.first_name) {
      setValue('firstName', response.data.data.first_name);
    } else if (response.data.data.full_name) {
      setValue('firstName', response.data.data.full_name);
    }
    setValue('lastName', response.data.data.last_name);

    if (response.data.data.category === 'Individual') {
      setValue('taxPayerCategory', 'General');
    } else {
      setValue('taxPayerCategory', response.data.data.category);
    }
    setUserDetails(response.data.data);
    return true;
  } catch (error) {
    setError('pan', { type: 'custom', message: 'Invalid pan number' });
    setValue('status', 'NOT-VALID');
    console.error('Error:', error);
    setUserDetails(null);
    return false;
  }
};

export const compare = function (oldRegime, tax, taxAlt) {
  if (oldRegime === 'no') {
    return tax > taxAlt
      ? {
          save: Math.abs(tax - taxAlt),
          regime: 'NEW',
          oldRegime: tax,
          newRegime: taxAlt,
        }
      : {
          save: Math.abs(tax - taxAlt),
          regime: 'OLD',
          oldRegime: tax,
          newRegime: taxAlt,
        };
  } else {
    return tax > taxAlt
      ? {
          save: Math.abs(tax - taxAlt),
          regime: 'OLD',
          oldRegime: taxAlt,
          newRegime: tax,
        }
      : {
          save: Math.abs(tax - taxAlt),
          regime: 'NEW',
          oldRegime: taxAlt,
          newRegime: tax,
        };
  }
};

export const calculateLiability = function (netTax, surcharge, cess) {
  return netTax + surcharge + cess;
};

export const setResults = function (
  basicIncome,
  isOldRegime,
  oldRegimeCalcFunction,
  newRegimeCalcFunction,
  setComparison,
  setValue,
  setTaxResult,
) {
  let response = {};
  const oldRegime = oldRegimeCalcFunction(basicIncome);
  const newRegime = newRegimeCalcFunction(basicIncome);
  const oldLiability = calculateLiability(
    oldRegime.netTax,
    oldRegime.cess,
    oldRegime.surcharge,
  );
  const newLiability = calculateLiability(
    newRegime.netTax,
    newRegime.cess,
    newRegime.surcharge,
  );
  if (isOldRegime === 'no') {
    setValue('calculatedNetTax', formatINRCurrency(oldRegime.netTax));
    setValue('surcharge', formatINRCurrency(oldRegime.surcharge));
    setValue('educationCess', formatINRCurrency(oldRegime.cess));
    setValue('totalTaxLiability', formatINRCurrency(oldLiability));
    setTaxResult({ ...oldRegime, totalTaxLiability: oldLiability });
    response = compare(isOldRegime, oldLiability, newLiability);
  } else {
    setValue('calculatedNetTax', formatINRCurrency(newRegime.netTax));
    setValue('surcharge', formatINRCurrency(newRegime.surcharge));
    setValue('educationCess', formatINRCurrency(newRegime.cess));
    setValue('totalTaxLiability', formatINRCurrency(newLiability));
    setTaxResult({ ...newRegime, totalTaxLiability: newLiability });
    response = compare(isOldRegime, newLiability, oldLiability);
  }
  setComparison(response);
};
// This function will set result for Domestic companies, foreign companies,Firm/llp , cooperate societies
export const setResultAlt = function (
  basicIncome,
  calculationFunction,
  setValue,
  setTaxResult,
  extraCategory,
) {
  const result = calculationFunction(basicIncome, extraCategory);
  const liability = calculateLiability(
    result.netTax,
    result.cess,
    result.surcharge,
  );
  setValue('calculatedNetTax', formatINRCurrency(result.netTax));
  setValue('surcharge', formatINRCurrency(result.surcharge));
  setValue('educationCess', formatINRCurrency(result.cess));
  setValue('totalTaxLiability', formatINRCurrency(liability));
  setTaxResult({ ...result, totalTaxLiability: liability });
};

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

// generate pdf
export const generatePDF = async (userDetails, result, getValues) => {
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
  if (userDetails.full_name) {
    firstName = userDetails.full_name;
  } else if (userDetails.first_name) {
    firstName = userDetails.first_name;
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
  if (userDetails.middle_name) {
    console.log('inside middle pdf', userDetails.middle_name);
    startMY = startY - lineHeight; // Add vertical gap
    middleName = userDetails.middle_name;
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
  if (userDetails.last_name) {
    currlastName = userDetails.last_name;
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

  page.drawText(userDetails.pan, {
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

  page.drawText(getValues('assessmentYear'), {
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

  page.drawText(getValues('gender'), {
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

  page.drawText(getValues('residentStatus'), {
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
  const titleCaseObject = convertCamelCaseToTitleCaseWithSpaces(result);
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
