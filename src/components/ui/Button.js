import React from 'react';
import Image from 'next/image';
import { cn } from '../pagesComponents/pageLayout/cn';

export const BTN_SIZES = {
  xs: 'px-1 py-1',
  sm: 'px-2 py-2',
  'md-1': 'px-4 py-2',
  md: 'px-4 py-3',
  lg: 'px-6 py-3',
  'lg-1': 'px-6 py-2',
  xl: 'px-8 py-3',
  'xl-1': 'px-8 py-2',
  '2xl': 'px-10 py-3',
};

export const BTN_STYLES = `bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-200 disabled:cursor-not-allowed cursor-pointer transition-all duration-300`;

const Button = ({
  children,
  size,
  className,
  isLoading,
  variant = 'primary',
  ...props
}) => {
  const btnVariant = {
    primary: 'bg-blue-600 text-white focus:ring-4 focus:ring-blue-300',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-slate-700',
    ghost: 'hover:bg-gray-300 bg-transparent text-slate-700',
    outlined: 'border border-slate-700 bg-white text-slate-700',
    danger: 'bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300',
  };

  return (
    <button
      disabled={isLoading}
      className={cn(`${BTN_STYLES}`, btnVariant[variant], size, className)}
      {...props}
    >
      {isLoading ? (
        <div className="flex gap-2">
          <Image
            width={25}
            height={25}
            src={'/whiteLoader.svg'}
            alt="Loading..."
          />
          <span className="tracking-wider">Loading..</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
