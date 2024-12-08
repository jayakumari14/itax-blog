'use client';
import React, { useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { useReactToPrint } from 'react-to-print';
import SearchResult_section from '@/components/pagesComponents/pageLayout/SearchResult_section.js';
import Image from 'next/image';
import { formatINRCurrency } from '@/utils/utilityFunctions';
ChartJS.register(ArcElement, Tooltip, Legend);

const LumpSumpCal = () => {
  const principalRef = useRef('');
  const roiRef = useRef('');
  const timeperiodRef = useRef('');
  const [showdata, setShowData] = useState('');

  const [loading, setLoading] = useState('');
  const [showStat, setShowStat] = useState();
  const pdf_ref = useRef();
  const handleClear = () => {
    principalRef.current.value = '';
    roiRef.current.value = '';
    timeperiodRef.current.value = '';
    setShowData('');
    setShowStat(false);
  };
  const generatePDF = useReactToPrint({
    content: () => pdf_ref.current,
    documentTitle: 'Lump Sum',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const invested = +principalRef.current.value;
    const rate = +roiRef.current.value;
    const year = +timeperiodRef.current.value;

    const total = invested * Math.pow(1 + rate / 100, year);
    const gain = total - invested;

    setShowData({
      invested: invested.toFixed('2'),
      total: total.toFixed('2'),
      gain: gain.toFixed('2'),
    });
    setShowStat(true);
    setLoading(false);
  };
  const data = {
    labels: ['Invested', 'Gain'],
    datasets: [
      {
        // label: '# of Votes',
        data: [showdata.invested, showdata.gain],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <SearchResult_section title="Lump Sump Calculator">
      <li className="p-4 ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
            <div>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Invested
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
                  placeholder="Invested"
                  ref={principalRef}
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
                Rate Of Interest (P.A.)
              </label>
              <div className="flex">
                <input
                  type="text"
                  required
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
                  ref={roiRef}
                />
                <div className="flex items-center bg-primary text-white  rounded-r px-4">
                  %
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="exampleFormControlInput3"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Time Period (In Years)
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
                  placeholder="Time Period"
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
          <div className="p-4 bg-neutral-50">
            <div className="p-4 mx-auto w-full sm:w-3/4 md:w-1/2 aspect-square">
              <Pie data={data} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-2">
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5">
                  Invested
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">
                    {formatINRCurrency(showdata.invested)}
                  </span>
                </h3>
              </div>
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
                  Gain
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">
                    {formatINRCurrency(showdata.gain)}
                  </span>
                </h3>
              </div>
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5">
                  Total
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">
                    {formatINRCurrency(showdata.total)}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </li>
      )}
    </SearchResult_section>
  );
};

export default LumpSumpCal;
