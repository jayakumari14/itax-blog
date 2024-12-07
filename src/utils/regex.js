const regex = {
  PHONE_RGX: /^\d{10}$/g,
  PIN_RGX: /^\d{6}$/g,
  PAN_CARD: /^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/,
  AADHAAR: /^\d{12}$/,
  EMAIL_RGX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g,
  stringNumberRegex: /^[0-9]+$/, // MATCHES NUMBER IN STRING FORMAT LIKE '1';
  assessYearRegex: /^\d{4}-\d{4}$/, // MATCHES ASSESS YEAR IN STRING FORMAT LIKE '2012-2013';
  financialYearRegex: /\b\d{4}\b/, // MATCHES YEAR IN STRING LIKE '2013';
  GSTIN: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  DDMMYYYY: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
  YYYY: /^\d{4}$/,
};

export default regex;
