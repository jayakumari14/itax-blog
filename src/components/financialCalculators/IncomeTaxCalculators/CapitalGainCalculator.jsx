'use client';
import React, { useRef, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useReactToPrint } from 'react-to-print';
import SearchResult_section from '@/components/pagesComponents/pageLayout/SearchResult_section.js';
import Image from 'next/image';
import { formatINRCurrency } from '@/utils/utilityFunctions';
ChartJS.register(ArcElement, Tooltip, Legend);

const CapitalGainCal = () => {
  const purchasePriceRef = useRef('');
  const salePriceRef = useRef('');
  const capitalGainsTaxRateRef = useRef('');
  const [showData, setShowData] = useState('');
  const [loading, setLoading] = useState(false);
  const [showStat, setShowStat] = useState(false);
  const pdf_ref = useRef();
  const generatePDF = useReactToPrint({
    content: () => pdf_ref.current,
    documentTitle: 'Capital Gain',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const purchasePrice = parseFloat(purchasePriceRef.current.value);
    const salePrice = parseFloat(salePriceRef.current.value);
    const capitalGainsTaxRate = parseFloat(
      capitalGainsTaxRateRef.current.value,
    );

    const totalCapitalGains = salePrice - purchasePrice;
    const taxOwed = (totalCapitalGains * capitalGainsTaxRate) / 100;

    const data = {
      purchasePrice,
      salePrice,
      capitalGainsTaxRate,
      totalCapitalGains,
      taxOwed,
    };

    setShowData(data);
    setLoading(false);
    setShowStat(true);
  };
  const handleClear = () => {
    purchasePriceRef.current.value = '';
    salePriceRef.current.value = '';
    capitalGainsTaxRateRef.current.value = '';
    setShowStat(false);
    setShowData('');
  };

  const data = {
    labels: [
      'Purchase Price',
      'Sale Price',
      'Capital Gains Tax Rate',
      'Total Capital Gains',
      'Tax Owed',
    ],
    datasets: [
      {
        data: [
          showData.purchasePrice || 0,
          showData.salePrice || 0,
          showData.capitalGainsTaxRate || 0,
          showData.totalCapitalGains || 0,
          showData.taxOwed || 0,
        ],
        backgroundColor: [
          'rgba(26, 259, 13, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(0, 128, 0, 0.2)',
        ],
        borderColor: [
          'rgba(26, 259, 13, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(0, 128, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <SearchResult_section title="Capital Gain Calculator">
      <li className="p-3">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
            <div>
              <label
                htmlFor="purchasePrice"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Purchase Price
              </label>
              <input
                required
                type="number"
                id="purchasePrice"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Purchase Price"
                ref={purchasePriceRef}
              />
            </div>
            <div>
              <label
                htmlFor="salePrice"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Sale Price
              </label>
              <input
                required
                type="number"
                id="salePrice"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Sale Price"
                ref={salePriceRef}
              />
            </div>
            <div>
              <label
                htmlFor="capitalGainsTaxRate"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Capital Gains Tax Rate
              </label>
              <input
                required
                type="number"
                id="capitalGainsTaxRate"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Capital Gains Tax Rate"
                ref={capitalGainsTaxRateRef}
              />
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
                className="btn-primary"
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
          <div className="bg-neutral-50 p-4">
            <div className="mx-auto p-4 bg-neutral-50">
              <div className="w-1/2 mx-auto">
                <Pie data={data} />
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 place-content-center">
              <div className=" p-6 rounded-lg shadow-lg bg-white">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
                  Purchase Price
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">
                    {formatINRCurrency(showData.purchasePrice || 0)}
                  </span>
                </h3>
              </div>
              <div className=" p-6 rounded-lg shadow-lg bg-white">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
                  Sale Price
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">
                    {formatINRCurrency(showData.salePrice || 0)}
                  </span>
                </h3>
              </div>
              <div className=" p-6 rounded-lg shadow-lg bg-white">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
                  Capital Gains Tax Rate
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">
                    {showData.capitalGainsTaxRate || 0}%
                  </span>
                </h3>
              </div>
              <div className=" p-6 rounded-lg shadow-lg bg-white">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
                  Total Capital Gains
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">
                    {formatINRCurrency(showData.totalCapitalGains || 0)}
                  </span>
                </h3>
              </div>
              <div className=" p-6 rounded-lg shadow-lg bg-white">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
                  Tax Owed
                </h5>
                <h3 className="text-2xl">
                  <span className="text-xl">
                    {formatINRCurrency(showData.taxOwed || 0)}
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

export default CapitalGainCal;
