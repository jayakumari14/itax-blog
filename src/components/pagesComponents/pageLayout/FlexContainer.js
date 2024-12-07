import React from 'react';
import { cn } from './cn';

const FlexContainer = ({ className, children }) => {
  return (
    <div className={cn('flex justify-center items-center', className)}>
      {children}
    </div>
  );
};

export default FlexContainer;
