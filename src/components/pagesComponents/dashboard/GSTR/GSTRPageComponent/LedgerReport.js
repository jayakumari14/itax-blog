import React from 'react';
import CustomButton from '../GSTRHomeComponent/CustomButton';

function LedgerReport() {
  const headers = [
    'S.NO.',
    'Date',
    'Reference Number',
    'Month',
    'Year',
    'Description',
    'Transaction Type',
    'IGST',
    'CGST',
    'SGST',
    'Cess',
    'Total',
  ];

  return (
    <main className="flex overflow-hidden flex-col pb-6">
      {/* Header Section */}
      <header className="flex flex-wrap justify-center items-center py-3 pr-3.5 pl-20 max-w-full border border-solid bg-violet-950 bg-opacity-70 border-stone-300 w-full max-md:pl-5">
        <h1 className="flex gap-4 items-center text-xl font-bold text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8309d5623ee8af057e237229197fee5df40a316c9051480b0e972ddd0cbc96f?placeholderIfAbsent=true&apiKey=24199757e3844b4fbf9f805dc968d706"
            className="object-contain shrink-0 w-[15px]"
            alt=""
          />
          <span className="self-stretch basis-auto">Ledger Report</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8309d5623ee8af057e237229197fee5df40a316c9051480b0e972ddd0cbc96f?placeholderIfAbsent=true&apiKey=24199757e3844b4fbf9f805dc968d706"
            className="object-contain shrink-0 w-[15px]"
            alt=""
          />
        </h1>
        <CustomButton
          className="absolute right-6 flex gap-1.5 px-3 pt-1 pb-2.5 text-sm font-medium whitespace-nowrap rounded-3xl justify-center items-center text-center"
          textColor="black"
          variant="exit"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/347b1924be835dffa796fb705d70a3f4b21de3b05831133937de3c16cdd2bab9?placeholderIfAbsent=true&apiKey=24199757e3844b4fbf9f805dc968d706"
            className="object-contain shrink-0 mt-1 w-2.5 aspect-square"
            alt=""
          />
          <span>Exit</span>
        </CustomButton>
      </header>

      {/* Main Section */}
      <section className="flex flex-col px-4 pt-8 mt-7 ml-3.5 font-bold bg-white border border-black border-solid pb-24 max-md:mr-2.5 max-md:max-w-full">
        {/* Ledger Form */}
        <form className="flex flex-wrap gap-4 w-full max-w-[1138px] mx-auto max-md:max-w-full">
          <div className="flex  gap-5 self-start mt-1.5 text-lg text-black max-md:max-w-full">
            <label htmlFor="ledgerType" className="my-auto">
              Ledger For :
            </label>
            <div className="flex gap-1.5 justify-center items-center px-1.5 py-1.5 text-sm font-medium border-2 border-solid bg-neutral-100 border-stone-300 min-h-[28px] text-neutral-500">
              <select
                id="ledgerType"
                className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none"
              >
                <option>All</option>
                <option>Credit Ledger</option>
                <option>Credit Ledger</option>
                <option>Tax Liability Ledger</option>
              </select>
            </div>
            <label htmlFor="fromDate" className="my-auto">
              from Date :
            </label>
            <div className="flex gap-1.5 justify-center items-center px-1.5 py-1.5 text-sm font-medium whitespace-nowrap border-2 border-solid bg-neutral-100 border-stone-300 min-h-[28px] text-neutral-500">
              <input
                type="date"
                id="fromDate"
                className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none"
                defaultValue="2024-07-23"
              />
            </div>
            <label htmlFor="toDate" className="my-auto">
              To Date :
            </label>
            <div className="flex gap-1.5 justify-center items-center px-1.5 py-1.5 text-sm font-medium whitespace-nowrap border-2 border-solid bg-neutral-100 border-stone-300 min-h-[28px] text-neutral-500">
              <input
                type="date"
                id="toDate"
                className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none"
                defaultValue="2024-08-25"
              />
            </div>
          </div>

          <CustomButton className="ml-20 px-2 py-2">Get Data</CustomButton>
        </form>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full mt-9 mb-0 text-xs text-neutral-800 max-md:mr-0 max-md:mb-2.5 max-md:max-w-full border-collapse">
            <thead>
              <tr className="bg-violet-950 text-white">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2.5 text-base border border-solid border-violet-950"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr className="bg-white even:bg-gray-100">
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  1
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  2024-08-17
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  REF12345
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  August
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  2024
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  Sample Description
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  Credit
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  ₹100
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  ₹50
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  ₹50
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  ₹10
                </td>
                <td className="px-4 py-2.5 border border-solid border-gray-300">
                  ₹210
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default LedgerReport;
