import React, { useState } from 'react';

const DatePicker = ({ id, label, onChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex flex-col mb-2">
      {label && (
        <label htmlFor={id} className="mb-1 text-xs font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="date"
        id={id}
        value={selectedDate}
        onChange={handleDateChange}
        className="w-40 px-2 py-1 text-xs text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
    </div>
  );
};

export default DatePicker;
