import React from 'react';
import CustomButton from '../GSTRHomeComponent/CustomButton';
import CustomText from '../GSTRHomeComponent/CustomText';

const GSTRLoginWithOtp = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-900 bg-white p-2.5 w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
        >
          &times;
        </button>

        <div className="text-center">
          <h2 className="mb-4 text-lg font-bold text-gray-700">
            GST Login With OTP
          </h2>

          <CustomText
            variant="warning"
            text="Error Occured at GSTN site. Please Try After Some Time"
          >
            Error Occured at GSTN site. Please Try After Some Time
          </CustomText>

          <div className="flex justify-center gap-4">
            <CustomButton onClick={onClose}>Return</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTRLoginWithOtp;
