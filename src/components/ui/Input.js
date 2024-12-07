import React, { forwardRef } from 'react'; // Ensure forwardRef is imported correctly
import { cn } from '../pagesComponents/pageLayout/cn';
import ReactSelect from 'react-select';

const Input = forwardRef((props, ref) => {
  const {
    className = '',
    wrapperClassName = '',
    labelClassName = '',
    label,
    type = 'text',
    id,
    ...rest
  } = props;

  const defaultClasses =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 disabled:bg-gray-200 disabled:cursor-not-allowed';

  const inputTypes = {
    textarea: (
      <textarea ref={ref} className={cn(defaultClasses, className)} {...rest} />
    ),
    select: (
      <ReactSelect
        ref={ref}
        className={cn(
          '[&>div]:py-1 [&>div]:px-1 [&>div]:rounded-md',
          className,
        )}
        {...rest}
      />
    ),
  };

  return (
    <div className={cn(wrapperClassName)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'mb-1 text-md font-medium text-slate-800 capitalize',
            labelClassName,
          )}
        >
          {label}
        </label>
      )}
      {inputTypes[type] ?? (
        <input
          ref={ref}
          type={type}
          className={cn(defaultClasses, className)}
          {...rest}
        />
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
