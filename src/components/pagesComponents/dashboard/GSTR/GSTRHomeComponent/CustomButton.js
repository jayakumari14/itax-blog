import Link from 'next/link';
import React from 'react';

const CustomButton = ({
  className = '',
  onClick,
  variant = 'primary',
  textColor = 'white',
  linkTo,
  children,
}) => {
  const baseStyles =
    'px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center rounded-full text-nowrap';

  const styles = {
    primary: 'bg-blue-500 hover:bg-blue-700 border-blue-500 text-white',
    secondary: 'bg-orange-400 hover:bg-orange-500 border-orange-300 text-white',
    third: 'bg-green-500 hover:bg-green-600 border-green-400 text-white',
    otp: 'bg-blue-500 hover:bg-blue-600 border-blue-700 text-white',
    exit: 'bg-green-300 hover:bg-green-400 text-neutral-800',
    inputbutton:
      'bg-blue-600 hover:bg-blue-700 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2 py-2',
  };

  const appliedStyle = styles[variant] || styles['primary'];

  const finalClassName = `${baseStyles} ${appliedStyle} ${className}`;

  if (linkTo)
    return (
      <Link
        className={finalClassName}
        style={{ color: textColor }}
        href={linkTo}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={finalClassName}
      style={{ color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
