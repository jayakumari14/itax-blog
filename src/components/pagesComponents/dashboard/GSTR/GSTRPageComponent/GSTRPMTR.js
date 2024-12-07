'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import CustomButton from '../GSTRHomeComponent/CustomButton';
import GSTRLoginWithoutOtp from './GSTRLoginWithoutOtp';

function MyComponent() {
  return (
    <div className="flex flex-col overflow-hidden pb-5 pl-2.5">
      <Header />
      <main className="flex flex-col items-start px-5 py-3 mt-1 mx-3 bg-white border-2 border-stone-300 max-md:px-5 max-md:mx-2.5 max-md:max-w-full">
        <section className="flex flex-wrap gap-5 justify-between items-center w-full text-sm text-black">
          <label htmlFor="gstin" className="flex-shrink-0 w-1/4 md:w-1/6">
            GSTIN (Registration) :
          </label>
          <input
            id="gstin"
            type="text"
            className="px-3 py-1.5 border border-neutral-500 flex-grow"
            value="23DNNPS19100QZG"
            readOnly
          />
        </section>
        <section className="flex flex-wrap gap-5 justify-between mt-3 items-center w-full text-sm text-black">
          <label htmlFor="legalName" className="flex-shrink-0 w-1/4 md:w-1/6">
            Legal Name (As per PAN) :
          </label>
          <input
            id="legalName"
            type="text"
            className="px-3 py-1.5 border border-neutral-500 flex-grow"
            value="AJAY SHARMA"
            readOnly
          />
        </section>
        <CashLedgerSection />
        <BalanceTable />
        <TransferSection />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center p-3 mt-1 border border-stone-300 bg-violet-950 bg-opacity-70 ">
      <h1 className="text-base font-bold text-white">
        AAR PHARMACY(23DNNPS1..)
      </h1>
      <div className="text-base font-bold text-white">PMT-09</div>
      <div className="flex gap-10 items-center ">
        <div className="text-base font-bold text-white">F.Y: 2022-23 (Dec)</div>
        <button className="flex gap-1.5 items-center px-3 py-1.5 bg-green-300 rounded-3xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/347b1924be835dffa796fb705d70a3f4b21de3b05831133937de3c16cdd2bab9"
            className="w-2.5 h-2.5"
            alt="Exit"
          />
          <span>Exit</span>
        </button>
      </div>
    </header>
  );
}

function CashLedgerSection() {
  const [openModal, setOpenModal] = useState(null); // State to track which modal is open

  const handleButtonClick = (modalType) => {
    setOpenModal(modalType);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <section className="flex flex-wrap gap-7 mt-2.5 text-sm font-bold  items-center ">
      <h2 className="flex-auto text-black text-center">
        Cash Ledger balance - available for transfer
      </h2>
      <div className="flex gap-3.5 text-center text-white">
        <CustomButton className="px-7 py-2.5">
          Get Cash Ledger Balance From GSTN
        </CustomButton>
        <CustomButton
          className="px-5 py-2.5"
          onClick={() => handleButtonClick('gstn')}
        >
          Upload on GSTN
        </CustomButton>
        {openModal === 'gstn' && <GSTRLoginWithoutOtp onClose={closeModal} />}
      </div>
    </section>
  );
}

function BalanceTable() {
  const headers = [
    'Integrated tax',
    'Central Tax',
    'State/ UI TAX',
    'Cess',
    'Total',
  ];
  const rows = ['Tax', 'Interest', 'Free', 'Penalty', 'Others', 'Total'];

  return (
    <section className="flex flex-col mt-5 text-sm text-black max-md:max-w-full">
      <div className="flex gap-8 w-auto ">
        <div className="px-10 py-4 font-bold bg-zinc-300 bg-opacity-40">
          Description
        </div>
        <div className="flex-1 px-10 py-4 font-bold bg-zinc-300 bg-opacity-40">
          Cash Ledger Balance
        </div>
      </div>
      <div className="flex gap-8 mt-3">
        <div className="flex flex-col">
          {rows.map((row, index) => (
            <div key={index} className="mt-4 first:mt-0">
              {row}
            </div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-5 gap-6">
          {headers.map((header, index) => (
            <div key={index} className="flex flex-col w-full">
              <div className="px-4 py-2 font-bold bg-zinc-300 bg-opacity-40 text-center">
                {header}
              </div>
              {rows.map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex items-center justify-center h-[30px] border border-stone-300 mt-2"
                >
                  {/* Input or data here */}
                </div>
              ))}
              <div className="px-4 py-2 bg-white border border-stone-300 mt-4 text-center">
                0
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransferSection() {
  const headers = [
    'Major Head',
    'Minor Head',
    'Major Head',
    'Tax',
    'Interest',
    'Fee',
    'Penalty',
    'Others',
  ];

  return (
    <section className="mt-3.5 w-full">
      <h3 className="text-sm font-bold text-black">Add Record</h3>
      <div className="flex flex-col bg-white border border-violet-200 p-5 mt-3">
        <div className="flex justify-between font-bold bg-zinc-300 bg-opacity-40 p-3">
          <div>Transfer Amount From</div>
          <div>Transfer Amount To</div>
        </div>
        <div className="flex gap-10 items-start font-medium bg-zinc-300 bg-opacity-40 p-3 mt-3">
          {headers.map((header, index) => (
            <div key={index} className="w-full">
              {header}
            </div>
          ))}
        </div>
        <div className="h-px bg-violet-200 mt-10 w-full" />
      </div>
    </section>
  );
}

export default MyComponent;
