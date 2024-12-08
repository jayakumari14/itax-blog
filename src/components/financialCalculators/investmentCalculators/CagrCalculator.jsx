'use client';
import React, { useRef, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useReactToPrint } from 'react-to-print';
import SearchResult_section from '@/components/pagesComponents/pageLayout/SearchResult_section.js';
import Image from 'next/image';
ChartJS.register(ArcElement, Tooltip, Legend);

const CAGR = () => {
  const initialInvestmentRef = useRef('');
  const finalInvestmentRef = useRef('');
  const timeperiodRef = useRef('');
  const [cagr, setCagr] = useState();
  const [loading, setLoading] = useState('');
  const [showStat, setShowStat] = useState(false);
  const pdf_ref = useRef();
  const generatePDF = useReactToPrint({
    content: () => pdf_ref.current,
    documentTitle: 'CAGR',
  });

  const handleClear = () => {
    initialInvestmentRef.current.value = '';
    finalInvestmentRef.current.value = '';
    timeperiodRef.current.value = '';
    setShowStat(false);
    setCagr();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const initial = +initialInvestmentRef.current.value;
    const final = +finalInvestmentRef.current.value;
    const years = +timeperiodRef.current.value;

    const cagr = ((final / initial) ** (1 / years) - 1) * 100;

    setCagr(cagr.toFixed(2));
    setShowStat(true);

    setLoading(false);
  };
  const data = {
    labels: ['Cagr'],
    datasets: [
      {
        data: [cagr || 0],
        backgroundColor: [
          'rgba(26, 259, 13, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(26, 259, 13, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <SearchResult_section title="CAGR Calculator">
      <li className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
            <div>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Initial Investment
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
                  placeholder="Principal"
                  ref={initialInvestmentRef}
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
                Final Investment
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
                  placeholder="Rate Of Interest"
                  ref={finalInvestmentRef}
                />
                <div className="flex items-center bg-primary text-white  rounded-r px-4">
                  %
                </div>
              </div>
            </div>
            <div className="mb-3 xl:w-75 ">
              <label
                htmlFor="exampleFormControlInput3"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Duration (in Years)
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
                  id="exampleFormControlInput3"
                  placeholder="Years"
                  ref={timeperiodRef}
                />
                <div className="flex items-center bg-primary text-white  rounded-r px-4">
                  Y
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

      {showStat && (
        <li className="lg:col-span-2 space-y-4 bg-gray-200 p-4" ref={pdf_ref}>
          <div className="bg-neutral-50 p-4 ">
            <div className="mx-auto w-[40%] ">
              <Pie data={data} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-2">
              <div className="block p-6 col-span-2 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                  CAGR
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">{cagr} %</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
      )}
    </SearchResult_section>
  );
};

export default CAGR;
