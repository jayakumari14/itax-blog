import React from 'react';

const CustomLabel = ({
  htmlFor,
  children,
  className = '',
  variant = 'normal',
}) => {
  const baseStyles = 'block mb-1  font-medium';
  //text-sm
  const styles = {
    normal: 'text-gray-900 dark:text-white',
    warning: 'text-red-600 dark:text-red-500',
    heading: ' font-bold text-red-600 dark:text-red-500 text-2xl',
    subheading: 'text-md font-semibold text-gray-900 dark:text-white',
  };

  const appliedStyle = styles[variant] || styles['normal'];
  const finalClassName = `${baseStyles} ${appliedStyle} ${className}`;

  return (
    <label htmlFor={htmlFor} className={finalClassName}>
      {children}
    </label>
  );
};

export default CustomLabel;
