export const monthStringToNumber = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

// checks if the DD/MM/YYYY format date is in the selected quarter.
export const isInQuarter = (dateString, quarterString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  const [startMonth, endMonth] = quarterString.split('-');

  return (
    month >= monthStringToNumber[startMonth] &&
    month <= monthStringToNumber[endMonth]
  );
};
