import React from 'react';
import { cn } from '../pagesComponents/pageLayout/cn';

export const SECTION_SIZES = {
  lg: 'md:max-w-[1200px]',
  md: 'md:max-w-[1000px]',
  sm: 'md:max-w-[900px]',
  xs: 'md:max-w-[800px]',
};

const Section = ({ children, size, className, ...props }) => {
  const defaultStyles = 'md:mx-auto m-3';
  return (
    <div
      className={cn(
        `${defaultStyles}`,
        `${size || SECTION_SIZES['lg']}`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Section;
