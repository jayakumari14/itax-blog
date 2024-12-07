import React from 'react';

const date = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const StatusHeader = ({ periodChangeHandler, period }) => {
  return (
    <div className="flex justify-between p-3 border-b my-2">
      <p>Status: </p>
      <div className="flex gap-2 items-center">
        <label htmlFor="period">Period:</label>
        <select
          className="px-2 py-1 rounded-sm border"
          name="period"
          id="periodSelect"
        >
          {date.map((date) => (
            <option className="capitalize" key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StatusHeader;
