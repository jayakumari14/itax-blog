'use client';
import React, { useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
const MOM_ITAX_URL = process.env.NEXT_PUBLIC_MOM_ITAX_URL;
import uuid from 'react-uuid';
import { useReactToPrint } from 'react-to-print';
import SearchResult_section from '@/components/pagesComponents/pageLayout/SearchResult_section.js';
import Image from 'next/image';
import { formatINRCurrency } from '@/utils/utilityFunctions';
ChartJS.register(ArcElement, Tooltip, Legend);

const NpsCal = () => {
  const monthlyinvestmentRef = useRef(0);
  const roiRef = useRef(0);
  const ageRef = useRef(0);
  const [showdata, setShowData] = useState('');
  const [showTableData, setShowTableData] = useState([]);
  const [showStat, setShowStat] = useState(false);
  const [loading, setLoading] = useState('');
  const pdf_ref = useRef();

  const handleClear = () => {
    monthlyinvestmentRef.current.value = '';
    roiRef.current.value = '';
    ageRef.current.value = '';
    setShowData('');
    setShowTableData([]);
    setShowStat(false);
  };
  const generatePDF = useReactToPrint({
    content: () => pdf_ref.current,
    documentTitle: 'NPS',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const rate = +roiRef.current.value / (100 * 12);
    const year = 60 - +ageRef.current.value;
    const invested = +monthlyinvestmentRef.current.value * year * 12;
    const yearlyGain = [];

    let multiplier = Math.pow(1 + rate, year * 12) - 1 / rate;
    let futureValue =
      +monthlyinvestmentRef.current.value * multiplier * (1 + rate);

    const gains = futureValue - invested;
    let thisYearInterest = 0;

    for (let i = 0; i < year; i++) {
      const previousYearInterest = thisYearInterest;

      multiplier = Math.pow(1 + rate, (i + 1) * 12) - 1 / rate;
      const thisYearGain =
        +monthlyinvestmentRef.current.value * multiplier * (1 + rate);
      thisYearInterest =
        thisYearGain - +monthlyinvestmentRef.current.value * 12 * (i + 1);

      yearlyGain.push({
        year: i + 1,
        investment_amount: +monthlyinvestmentRef.current.value * 12,
        interest_earned: Math.round(thisYearInterest - previousYearInterest),
        maturity_amount: Math.round(thisYearGain),
      });
    }

    const data = {
      status: 'success',
      total: Math.round(futureValue),
      invested: invested,
      gain: Math.round(gains),
      yearlyGain: yearlyGain,
    };
    setShowData(data);
    setShowTableData(data.yearlyGain);
    setShowStat(true);
    setLoading(false);
    return data;
  };

  const data = {
    labels: ['Total', 'Invested', 'Gain'],
    datasets: [
      {
        // label: '# of Votes',
        data: [showdata.total, showdata.invested, showdata.gain],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <SearchResult_section title="NPS Calculator">
        <li className="p-4">
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3 xl:w-75 mx-2">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Monthly Investment
              </label>
              <div className="flex">
                <input
                  required
                  type="number"
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
                  placeholder="Investment Amount                                                "
                  ref={monthlyinvestmentRef}
                />
                <div className="flex items-center bg-primary text-white  rounded-r px-4">
                  ₹
                </div>
              </div>
            </div>
            <div className="mb-3 xl:w-75 mx-2">
              <label
                htmlFor="exampleFormControlInput2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Rate Of Interest (P.A.)
              </label>
              <div className="flex">
                <input
                  required
                  type="number"
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
            <div className="mb-3 xl:w-75 mx-2">
              <label
                htmlFor="exampleFormControlInput3"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Current Age
              </label>
              <div className="flex">
                <input
                  required
                  type="number"
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
                  placeholder="Current Age"
                  ref={ageRef}
                />
                <div className="flex items-center bg-primary text-white  rounded-r px-4">
                  Y
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
                  Download
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
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 place-content-center">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
                    Total
                  </h5>
                  <h3 className="text-2xl">
                    <span className="text-xl">
                      {formatINRCurrency(showdata.total)}
                    </span>
                  </h3>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
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
              </div>
              <h6 className="text-primary text-center mb-3 mt-5">
                Yearly Gain
              </h6>
              <div className="overflow-x-auto w-[95%] mx-auto">
                <table
                  id="table-to-xls"
                  className="min-w-full border border-gray-300"
                >
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300  bg-primary dark:text-white w-1/6"
                      >
                        Year
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300  bg-primary dark:text-white w-1/6"
                      >
                        Investment Amount
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300  bg-primary dark:text-white w-1/6"
                      >
                        Interest Earned
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300  bg-primary dark:text-white w-1/6"
                      >
                        Maturity Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {showTableData.map((currdata, k) => {
                      return (
                        <>
                          <tr className="border-b" key={uuid()}>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                              {currdata.year}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                              {currdata.investment_amount}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                              {currdata.interest_earned}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                              {currdata.maturity_amount}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </li>
        )}
      </SearchResult_section>
    </>
  );
};

export default NpsCal;
