import React from 'react';

const CustomInput = ({
  id,
  type = 'text',
  name, // Add name prop for radio button grouping
  placeholder,
  required = false,
  className,
  options = [], // Add options prop for dropdown
  variant, // Add variant prop
  children, // Add children prop for radio button text
}) => {
  if (variant === 'radioButton') {
    return (
      <label className={`flex items-center space-x-2 ${className}`}>
        <input
          type="radio"
          id={id}
          name={name} // Use name to group radio buttons
          className="form-radio text-blue-600 h-4 w-4 transition duration-150 ease-in-out"
          required={required}
        />
        <span className="text-sm text-gray-900 dark:text-white">
          {children}
        </span>
      </label>
    );
  }

  return type === 'dropdown' ? (
    <select
      id={id}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      required={required}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  ) : (
    <input
      type={type}
      id={id}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default CustomInput;
