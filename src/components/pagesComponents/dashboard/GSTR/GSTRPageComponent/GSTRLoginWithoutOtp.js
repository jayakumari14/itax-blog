import React from 'react';
import CustomButton from '../GSTRHomeComponent/CustomButton';

const GSTRLoginWithoutOtp = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg max-w-xs w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-900 bg-white p-2.5 w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="text-center">
          {/* Title */}
          <h2 className="mb-4 text-lg font-bold text-gray-700">
            GST Login Without OTP
          </h2>

          {/* CAPTCHA Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/path-to-your-captcha-image.png"
              alt="CAPTCHA"
              className="border border-gray-300"
            />
          </div>

          {/* Input Field */}
          <input
            type="text"
            className="w-full px-3 py-2 mb-4 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Enter CAPTCHA"
          />

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            {/* <button className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-lg">
              OK
            </button> */}
            {/* <button
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow-lg"
              onClick={onClose}
            >
              Cancel
            </button> */}
            <CustomButton>OK</CustomButton>
            <CustomButton onClick={onClose}>Cancel</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTRLoginWithoutOtp;
