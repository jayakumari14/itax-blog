'use client';
import React, { useState } from 'react';
import CustomButton from '../GSTRHomeComponent/CustomButton';

import Header from '../GSTRHomeComponent/Header';
import ExcelModal from './GSTRDownloadExcel'; // Import the Excel Modal component
import GetLedgerFromGSTIN from './GSTRGetLedgerFromGSTIN';
import GSTRLoginWithoutOtp from './GSTRLoginWithoutOtp';
import GSTRLoginWithOtp from './GSTRWithOtp';

// NavBar Component
const NavBar = () => {
  const [openModal, setOpenModal] = useState(null); // State to track which modal is open

  const handleButtonClick = (modalType) => {
    setOpenModal(modalType);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="flex justify-end gap-2 text-center">
      <CustomButton
        text="Ledger Report"
        variant="primary"
        className="px-2 py-1 text-xs"
        // onClick={() => handleButtonClick('ledgerReport')}
        linkTo="/dashboard/easy-gst-return/ledger-report"
      >
        Ledger Report
      </CustomButton>
      <CustomButton
        text="Get Ledger From GSTN"
        variant="primary"
        className="px-2 py-1 text-xs"
        onClick={() => handleButtonClick('gstn')}
      >
        Get Ledger From GSTN
      </CustomButton>
      <CustomButton
        text="Download Excel From GSTN"
        variant="primary"
        className="px-2 py-1 text-xs"
        onClick={() => handleButtonClick('excel')}
      >
        Download Excel From GSTN
      </CustomButton>
      <CustomButton
        text="Import from Previous Year"
        variant="primary"
        className="px-2 py-1 text-xs"
        // onClick={() => handleButtonClick('importPreviousYear')}
      >
        Import from Previous Year
      </CustomButton>

      {/* {openModal === 'ledgerReport' && (
        <LedgerReportModal onClose={closeModal} />
      )}
      {openModal === 'importPreviousYear' && (
        <ImportPreviousYearModal onClose={closeModal} />
        )} */}
      {openModal === 'gstn' && <GetLedgerFromGSTIN onClose={closeModal} />}
      {openModal === 'excel' && <ExcelModal onClose={closeModal} />}
    </div>
  );
};

// LedgerHeader Component
const LedgerHeader = () => (
  <header className="flex flex-wrap items-center text-xs font-bold text-center text-white mt-4">
    <button className="px-4 py-2.5 rounded-3xl border border-solid bg-violet-950 border-stone-300">
      Ledger Balances
    </button>
    <div className="flex-grow h-1 ml-4 border-t-2 border-stone-300" />
  </header>
);

// LedgerTable Component
const LedgerTable = () => {
  const tableData = [
    {
      ledger: 'Tax Liability Register',
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
      total: 0,
    },
    {
      ledger: 'Input Tax Credit Ledger',
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
      total: 0,
    },
    {
      ledger: 'Cash Ledger',
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
      total: 0,
    },
  ];

  const [openModal, setOpenModal] = useState(null); // State to track which modal is open

  const handleButtonClick = (modalType) => {
    setOpenModal(modalType);
  };

  const closeModal = () => {
    setOpenModal(null);
  };
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full text-left table-auto border-collapse">
        <thead>
          <tr className="bg-zinc-100 text-stone-600">
            <th className=" px-4 py-2">Ledger</th>
            <th className=" px-4 py-2">IGST</th>
            <th className=" px-4 py-2">CGST</th>
            <th className=" px-4 py-2">SGST</th>
            <th className=" px-4 py-2">Cess</th>
            <th className=" px-4 py-2">Total</th>
            <th className=" px-4 py-2">OTP</th>
            <th className=" px-4 py-2">Without OTP</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b border-stone-300">
              <td className="border border-stone-300 px-4 py-2 text-center">
                {row.ledger}
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                {row.igst}
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                {row.cgst}
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                {row.sgst}
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                {row.cess}
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                {row.total}
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                <CustomButton
                  text="Get OTP"
                  className=" content-center "
                  onClick={() => handleButtonClick('WithOtp')}
                >
                  Get OTP
                </CustomButton>
                {openModal === 'WithOtp' && (
                  <GSTRLoginWithOtp onClose={closeModal} />
                )}
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                <CustomButton
                  text="Get OTP"
                  className=" content-center"
                  onClick={() => handleButtonClick('WithoutOtp')}
                >
                  Get OTP
                </CustomButton>
                {openModal === 'WithoutOtp' && (
                  <GSTRLoginWithoutOtp onClose={closeModal} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Summary Component
const Summary = () => {
  return (
    <section className="flex flex-col mt-6 text-base font-bold text-center">
      <header className="flex flex-wrap items-center text-xs font-bold text-center text-white mt-4">
        <button className="px-4 py-2.5 rounded-3xl border border-solid bg-violet-950 border-stone-300">
          Provisional Input Tax Credit Balance
        </button>
        <div className="flex-grow h-1 ml-4 border-t-2 border-stone-300" />
      </header>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="bg-zinc-100 text-stone-600 text-center">
              <th className="px-4 py-2">As Per</th>
              <th className="px-4 py-2">IGST</th>
              <th className="px-4 py-2">CGST</th>
              <th className="px-4 py-2">SGST</th>
              <th className="px-4 py-2">Cess</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-stone-300">
              <td className="border border-stone-300 px-4 py-2 text-center">
                GSTN
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                <CustomButton text="Get" className="content-center">
                  Get
                </CustomButton>
              </td>
            </tr>
            <tr className="border-b border-stone-300 bg-yellow-300">
              <td className="border border-stone-300 px-4 py-2 text-center ">
                Software
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center text-red-600">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center text-red-600">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center text-red-600">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center text-red-600">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center text-red-600">
                0
              </td>
              <td className="border border-stone-300 px-4 py-2 text-center">
                <CustomButton text="Get" className="content-center">
                  Get
                </CustomButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

// MainSection Component
const LedgerDetails = () => (
  <div>
    <Header />
    <section className="p-16 w-full bg-white border border-stone-300">
      <NavBar />
      <div className="mt-8">
        <LedgerHeader />
        <LedgerTable />
        <Summary />
      </div>
    </section>
  </div>
);

export default LedgerDetails;
