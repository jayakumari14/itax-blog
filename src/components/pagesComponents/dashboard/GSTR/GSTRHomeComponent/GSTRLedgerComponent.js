import React from 'react';

import LedgerDetails from '../GSTRPageComponent/LedgerDetails';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import Link from 'next/link';

const LedgerBalances = () => {
  return (
    <div className="flex flex-col items-center pt-3 pb-1 w-full bg-white border-2 border-solid border-stone-300 max-md:mr-1">
      <div className="flex flex-col items-start pr-16 pb-4 pl-3.5 w-full text-sm bg-white border-2 border-solid border-stone-300 max-md:pr-4 max-md:ml-1">
        <CustomText
          className="z-10 gap-0.5 self-stretch px-0.5 py-px -mt-2.5 font-bold text-center text-red-600 bg-white min-h-[21px]"
          text="Following is Imperfect:"
        >
          Following is Imperfect:
        </CustomText>
        <CustomText
          className="mt-2 font-medium text-blue-700"
          text="Preceding FY AATO is blank."
        >
          Preceding FY AATO is blank.
        </CustomText>
      </div>
      <div className="flex gap-3 justify-between max-w-full w-[270px]">
        <div className="flex flex-col text-xs font-bold text-white">
          <CustomButton
            text="Ledger Details"
            className="px-5 py-2.5 max-md:px-4 max-md:mr-2"
            linkTo="/dashboard/easy-gst-return/ledger-details"
          >
            {' '}
            Ledger Details
          </CustomButton>
          <div className="flex flex-col items-start pl-3 mt-3 text-sm font-medium text-neutral-950">
            <CustomText
              className="self-stretch max-md:mr-2"
              text="Credit Ledger :"
            >
              Credit Ledger :
            </CustomText>
            <CustomText className="mt-4" text="Liability Ledger :">
              Liability Ledger :
            </CustomText>
            <CustomText className="mt-4" text="Cash Ledger :">
              Cash Ledger :
            </CustomText>
          </div>
          <CustomButton
            className=" mt-2 text-center whitespace-nowrap rounded-3xl border border-solid max-md:px-4 max-md:mr-2"
            text="PMT09"
            linkTo="/dashboard/easy-gst-return/gstr-pmtr-09"
          >
            PMT09
          </CustomButton>
          <CustomButton
            className="px-7 py-2.5 mt-2 text-center rounded-3xl border border-solid max-md:px-4 max-md:mr-2"
            text="Late Fees +"
          >
            Late Fees +{' '}
          </CustomButton>
        </div>
        <div className="flex flex-col items-center self-start mt-1 text-sm font-medium whitespace-nowrap text-neutral-950">
          <CustomText className="self-stretch" text="Balance">
            Balance
          </CustomText>
          <CustomText className="mt-4" text="0.00">
            0.00
          </CustomText>
          <CustomText className="mt-4" text="0.00">
            0.00
          </CustomText>
          <CustomText className="mt-8" text="0.00">
            0.00
          </CustomText>
          <CustomText
            className="self-stretch mt-9 max-md:mt-8 max-md:mr-2 max-md:ml-2"
            text="500.0"
          >
            500.0
          </CustomText>
        </div>
      </div>
      <CustomButton
        className="px-14 py-2 mt-3 max-w-full text-sm font-bold text-center rounded-3xl border border-solid-70 w-[290px] max-md:px-5"
        text="GSTR1 Late Fees"
      >
        GSTR1 Late Fees
      </CustomButton>
      <div className="shrink-0 self-stretch mt-2 h-px border-2 border-solid border-stone-300" />
      <div className="flex gap-3 justify-between mt-2 max-w-full text-sm font-bold w-[300px] p-2">
        <div className="flex flex-col text-black">
          <CustomButton variant="secondary" textColor="black">
            Annual Return GSTR-9
          </CustomButton>
        </div>
        <div className="flex flex-col self-start text-white whitespace-nowrap">
          <CustomButton
            // className="px-5 pt-2 pb-3 rounded-3xl border-2 border-solid max-md:px-4"
            text="GSTR-9C"
            linkTo="/dashboard/easy-gst-return/gstr-form-9"
          >
            GSTR-9C
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const SupplyTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className=" border border-stone-300 bg-white">
        <thead className="bg-neutral-200 bg-opacity-50 text-sm font-medium text-black border-b border-stone-300">
          <tr>
            <th className="p-4 text-left border-r"></th>
            <th className="p-4 text-center border-r border-stone-300">
              Supply Value
            </th>
            <th className="p-4 text-center border-r border-stone-300">IGST</th>
            <th className="p-4 text-center border-r border-stone-300">CGST</th>
            <th className="p-4 text-center border-r border-stone-300">SGST</th>
            <th className="p-4 text-center">CESS</th>
          </tr>
        </thead>
        <tbody>
          {['A', 'B', 'C', 'D', 'E', 'F'].map((label, index) => (
            <tr key={index} className="border-b border-stone-300">
              <td className="p-4 text-center bg-neutral-100 border-r border-stone-300">
                {label}
              </td>
              <td className="p-4 text-center border-r border-stone-300"></td>
              <td className="p-4 text-center border-r border-stone-300"></td>
              <td className="p-4 text-center border-r border-stone-300"></td>
              <td className="p-4 text-center border-r border-stone-300"></td>
              <td className="p-4 text-center"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TaxLiability = () => {
  return (
    <div className="flex flex-col self-start mt-4 space-y-4">
      <CustomButton
        className="px-7 py-2 rounded-3xl border border-solid max-md:px-4"
        text="Outward Supplies Liability (GSTR-1)"
      >
        Outward Supplies Liability (GSTR-1)
      </CustomButton>
      <CustomButton
        className="px-9 py-2 mt-3 rounded-3xl border border-solid max-md:px-4"
        text="Inward Supplies Liability (GSTR-2)"
      >
        Inward Supplies Liability (GSTR-2)
      </CustomButton>
      <div className="flex flex-col pr-4 pl-12 mt-4 text-sm font-medium max-md:px-4">
        <CustomText className="text-blue-700" text="Utilized ITC Balance:">
          Utilized ITC Balance:
        </CustomText>
        <CustomText
          className="mt-2 text-black"
          text="Net Tax Liability on Outward Supply: (A-C)"
        >
          Net Tax Liability on Outward Supply: (A-C)
        </CustomText>
      </div>
      <div className="flex flex-col pr-16 pl-1 mt-2 text-sm font-medium text-black max-md:pr-4">
        <CustomText
          className="ml-4 text-black"
          text="Add: Tax Liability on Inward Supply"
        >
          Add: Tax Liability on Inward Supply
        </CustomText>
        <CustomText
          className="ml-12 mt-2.5 text-black"
          text="Total Tax Payable in Cash: (D+E)"
        >
          Total Tax Payable in Cash: (D+E)
        </CustomText>
      </div>
      <div className="flex flex-col pl-1 mt-2 w-full">
        <div className="flex gap-7 font-bold ml-4">
          <div className="grow my-auto text-sm text-black">
            <span className="font-medium">Less: </span>
            <span className="font-medium text-blue-700">
              Utilized Cash Balance:
            </span>
          </div>
        </div>
        <CustomButton
          className="px-4 py-2 rounded-3xl border border-solid mt-4 mb-4"
          text="Challan Detail"
        >
          Challan Detail
        </CustomButton>
        <CustomText
          className="self-start mt-2 ml-12 text-sm font-medium text-black max-md:ml-2"
          text="Balance GST Due: (F-G):"
        >
          Balance GST Due: (F-G):
        </CustomText>
      </div>
    </div>
  );
};

const GSTLedgerComponent = () => {
  return (
    <div className="flex gap-3 justify-between pr-2 pl-4 pt-2 mt-2.5 w-full bg-white border-2 border-solid border-stone-300 max-md:max-w-full">
      <div className="flex flex-col my-auto">
        <CustomText
          className="z-10 gap-0.5 self-start px-0.5 py-px ml-6 text-sm font-bold text-center text-red-600 bg-white min-h-[20px] max-md:ml-2.5"
          text="Ledger Balances"
        >
          Ledger Balances
        </CustomText>
        <LedgerBalances />
      </div>
      <div className="shrink-0 w-0.5 border-2 border-solid border-stone-300"></div>
      <SupplyTable />
      <TaxLiability />
    </div>
  );
};

export default GSTLedgerComponent;
