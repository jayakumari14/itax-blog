import React from 'react';
import CustomText from '../GSTRHomeComponent/CustomText';
import CustomButton from '../GSTRHomeComponent/CustomButton';
import DatePicker from '../DatePicker';

const SelectInput = ({ id, options, className, ...props }) => (
  <div className={`relative ${className}`}>
    <select
      id={id}
      className="block w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
);

const GetLedgerFromGSTIN = ({ onClose }) => {
  const periods = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
  ];
  const years = [
    '2024-2025',
    '2023-2024',
    '2022-2023',
    '2021-2022',
    '2020-2021',
    '2019-2020',
    '2018-2019',
    '2017-2018',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-900 bg-white p-2.5 w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
        >
          &times;
        </button>
        <form className="flex flex-col">
          <section className="flex flex-col w-full p-4 bg-white border border-black rounded-md">
            <CustomText
              text="Get Ledger From GSTIN"
              className="mb-4 text-lg font-bold text-center text-black"
            >
              Get Ledger From GSTIN
            </CustomText>
            <div className="p-2">
              <div className="flex items-center mb-4 m-2 gap-1">
                <CustomText text="Import Ledger For :" className="pr-10">
                  Import Ledger For :
                </CustomText>

                <div className="flex-1">
                  <SelectInput
                    id="importLedger"
                    options={[
                      'All',
                      'Cash Ledger',
                      'Credit Ledger',
                      'Tax Liability Ledger',
                    ]}
                    className="w-40" // Increased width of dropdown
                  />
                </div>
              </div>

              <div className="flex items-center mb-4 m-2 gap-4">
                <CustomText text="Form Date :">Form Date :</CustomText>
                <DatePicker id="fromDate" defaultValue="2024-05-03" />
                <CustomText text="To Date :">To Date :</CustomText>
                <DatePicker id="toDate" defaultValue="2024-06-05" />
              </div>
              {/* <CustomText
                text="(Enter Date Less Than or Equal to 6 months)"
                className="mb-2 text-xs text-center text-black"
              /> */}
              {/* <div className="flex mb-4 m-2 gap-4">
                <div className="w-1/2">
                  <div className="flex items-center gap-4 pr-2">
                    <CustomText text="Year:" className="pr-12" />
                    <SelectInput
                      id="year"
                      options={years}
                      defaultValue="2023-24"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="w-1/2 pl-2">
                  <div className="flex items-center justify-end gap-4">
                    <CustomText text="Period:" className="pr-4" />
                    <SelectInput
                      id="period"
                      options={periods}
                      defaultValue="May"
                      className="w-full"
                    />
                  </div>
                </div>
              </div> */}
            </div>
            {/* <CustomText
              text="(Select Year and Month for Tax Liability Ledger)"
              className="mb-4 text-xs text-center text-black"
            /> */}

            <div className="flex justify-center gap-4">
              <CustomButton
                text="Import Ledgers in Excel"
                className="px-6 py-2 rounded-md"
              >
                Import Ledgers
              </CustomButton>
              {/* <CustomButton
                text="Import Ledgers in PDF"
                className="px-6 py-2 rounded-md"
              >
                Import Ledgers in PDF
              </CustomButton> */}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default GetLedgerFromGSTIN;
