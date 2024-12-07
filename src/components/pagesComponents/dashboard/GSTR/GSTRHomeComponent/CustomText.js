import React from 'react';

const CustomText = ({ className, children, variant }) => {
  const baseStyles = 'customtext'; // Default class

  const styles = {
    dashboard: 'text-black text-sm',
    info: 'text-green-500 text-lg',
    form: 'text-blue-500 text-base font-normal',
    heading: 'text-navy text-2xl font-bold',
    subheading: 'text-darkslategray text-xl font-bold',
    subSubHeading: 'text-slategray text-lg font-normal',
    warning:
      'flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400',
    news: 'flex items-center text-sm text-blue-800 rounded-lg ',
    link: 'text-blue-500 text-base font-normal cursor-pointer',
  };

  const appliedStyle = styles[variant] || '';

  return (
    <div className={`${baseStyles} ${appliedStyle} ${className}`}>
      {children}
    </div>
  );
};

export default CustomText;
