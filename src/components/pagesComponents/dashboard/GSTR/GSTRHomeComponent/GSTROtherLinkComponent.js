import React from 'react';
import CustomButton from './CustomButton';

const CustomText = ({ text, className }) => (
  <span className={`text-xs font-bold ${className}`}>{text}</span>
);

const LinkComponent = () => {
  const otherLinks = ['Other Forms', 'D Letters', 'DMS', 'Mails'];
  const utilities = [
    'Bulk Update',
    'Verify GSTIN',
    'Reports',
    'Filing Entries',
    'Export Patty',
  ];

  return (
    <section className="flex flex-col p-4 mt-4 w-full font-bold bg-white border border-solid border-stone-300 max-md:max-w-full">
      <nav className="flex w-full mb-3">
        <CustomText text="Other Links" className="text-red-600">
          Other Links
        </CustomText>
      </nav>
      <div className="flex justify-between w-full gap-4">
        <div className="flex gap-2 bg-white border-2 border-solid border-stone-300 p-3">
          {otherLinks.map((link, index) => (
            <CustomButton key={index}>{link}</CustomButton>
          ))}
          <CustomText text="=> Logs" className="text-black my-auto">
            Logs
          </CustomText>
        </div>
        <div className="relative bg-white border-2 border-solid border-stone-300 p-3 w-32">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2">
            <CustomText
              text="Points to Remember"
              className="text-blue-700 font-medium"
            >
              Points to Remember
            </CustomText>
          </div>
        </div>

        <div className="flex gap-2 bg-white border-2 border-solid border-stone-300 p-3">
          <CustomText text="Utilities" className="text-red-600 mr-2">
            Utilities
          </CustomText>
          {utilities.map((utility, index) => (
            <CustomButton key={index}>{utility}</CustomButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkComponent;
