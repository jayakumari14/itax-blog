import moment from 'moment';

export const formatDate = (date, format = 'DD/MM/YYYY') => {
  try {
    if (format && date) {
      const returnDate = moment(date).format(format);
      const isValid = moment(returnDate).isValid();
      return returnDate ?? 'N/A';
    }
    return 'N/A';
  } catch (error) {
    console.log(error);
    return 'N/A';
  }
};

export const formatINRCurrency = function (amountStr) {
  try {
    const amount = parseFloat(amountStr);
    if (isNaN(amount)) {
      return 0;
    }
    const formattedAmount = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
    return formattedAmount;
  } catch (error) {
    return error.message;
  }
};

export const getObjectFromIterator = (iterator) => {
  try {
    const obj = {};
    for (const [key, value] of iterator) {
      obj[key] = value;
    }
    return obj;
  } catch (error) {
    return error.message;
  }
};

export const generateQueryFromObject = (object) => {
  try {
    const query = Object.keys(object)
      .map((key) => `${key}=${object[key] || ''}`)
      .join('&');
    return query;
  } catch (error) {
    return error.message;
  }
};

export const parseNonNullObject = (obj) => {
  try {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && obj[key]) {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  } catch (error) {
    return error.message;
  }
};
