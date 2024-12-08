'use client';
import React, { useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useReactToPrint } from 'react-to-print';
import SearchResult_section from '@/components/pagesComponents/pageLayout/SearchResult_section.js';
import Image from 'next/image';
import { formatINRCurrency } from '@/utils/utilityFunctions';
ChartJS.register(ArcElement, Tooltip, Legend);

const PostofficeCal = () => {
  const investmentAmountRef = useRef('');
  const interestRateRef = useRef('');
  const [showdata, setShowData] = useState('');
  const [loading, setLoading] = useState('');
  const [showStat, setShowStat] = useState(false);
  const pdf_ref = useRef();
  const handleClear = () => {
    investmentAmountRef.current.value = '';
    interestRateRef.current.value = '';
    setShowStat(false);
    setShowData('');
  };
  const generatePDF = useReactToPrint({
    content: () => pdf_ref.current,
    documentTitle: 'PostOfice (MIS)',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const investmentAmount = investmentAmountRef.current.value;
    const interestRate = interestRateRef.current.value;
    const monthlyIncome = investmentAmount * (interestRate / 1200);
    setShowData(monthlyIncome);
    setLoading(false);
    setShowStat(true);
  };
  const data = {
    labels: ['Monthly Income'],
    datasets: [
      {
        // label: '# of Votes',
        data: [showdata],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <SearchResult_section title="Post Office (MIS) Calculator">
      <li className="p-3">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
            <div>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Investment Amount
              </label>
              <div className="flex">
                <input
                  required
                  type="text"
                  className="form-control
                                        block
                                        w-full
                                        px-3    
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded-l
                                        transition
                                        ease-in-out
                                        m-0

                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                  id="exampleFormControlInput1"
                  placeholder="Investment Amount"
                  ref={investmentAmountRef}
                />
                <div className="flex items-center bg-primary text-white  rounded-r px-4">
                  ₹
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="exampleFormControlInput2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Interest Rate
              </label>
              <div className="flex">
                <input
                  required
                  type="text"
                  className="form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded-l
                                        transition
                                        ease-in-out
                                        m-0

                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                  id="exampleFormControlInput2"
                  placeholder="Interest Rate "
                  ref={interestRateRef}
                />
                <div className="flex items-center bg-primary text-white  rounded-r px-4">
                  %
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:p-4 place-content-center grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] xl:grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
            <button
              disabled={loading}
              className={`btn-primary ${loading ? ' cursor-not-allowed ' : ''}`}
            >
              {loading ? <span className="spinner"></span> : 'Calculate'}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="btn-primary bg-red-500 hover:bg-red-600"
            >
              Clear
            </button>
            {showStat && (
              <button
                type="button"
                className="btn-primary "
                onClick={generatePDF}
              >
                Print
              </button>
            )}
            {showStat && (
              <button
                type="button"
                className="btn-primary bg-green-500 hover:bg-green-600"
              >
                Download
              </button>
            )}
          </div>
        </form>
      </li>
      {showdata && (
        <li className="lg:col-span-2 space-y-4 bg-gray-200 p-4" ref={pdf_ref}>
          <div className="bg-neutral-50 p-4">
            <div className="w-[40%] mx-auto">
              <Pie data={data} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-2">
              <div className="block p-6 rounded-lg shadow-lg col-span-2 bg-white max-w-sm  mx-4">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
                  Monthly Income
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">{formatINRCurrency(showdata)}</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
      )}
    </SearchResult_section>
  );
};

export default PostofficeCal;
