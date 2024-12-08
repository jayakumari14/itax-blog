'use client';

import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const sharedClasses = {
  input: 'flex-1 border border-gray-300 rounded-lg p-1 bg-white text-sm',
  label: 'block text-gray-700 font-medium text-sm',
  container: 'mb-3',
  button: 'p-1 rounded-lg text-white font-semibold text-xs',
  card: 'bg-white shadow-sm rounded-lg p-3',
};

const resultCard = 'bg-white shadow-sm rounded-lg p-3 mb-3';
const resultTitle = 'text-base font-semibold text-gray-800';
const resultValue = 'text-lg font-bold text-gray-700';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(6);
  const [time, setTime] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    calculateInterest();
  }, [principal, rate, time]);

  const calculateInterest = () => {
    const r = rate / 100; // Convert rate to decimal
    const A = principal * Math.pow(1 + r, time);

    const totalInterest = A - principal;
    setTotalAmount(A);

    updateChart(principal, totalInterest);
  };

  const updateChart = (principal, totalInterest) => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Principal amount', 'Total interest'],
        datasets: [
          {
            data: [principal, totalInterest],
            backgroundColor: ['#3b82f6', '#93c5fd'],
            borderColor: '#ffffff',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });
  };

  const handlePrint = () => {
    const printContent = document.querySelector('.print-content');
    if (!printContent) return;

    const originalContent = document.body.innerHTML;
    document.body.innerHTML = `
      <html>
        <head>
          <title>Print</title>
          <style>
            @media print {
              .print-content { width: 100%; }
              .chart-container { display: flex; flex-direction: column; }
              .chart-container canvas { width: 100% !important; height: auto; }
            }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `;
    window.print();
    document.body.innerHTML = originalContent;
  };

  const handleDownloadPDF = async () => {
    const element = document.querySelector('.print-content');
    if (!element) return;

    await new Promise((resolve) => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const doc = new jsPDF('p', 'mm', 'a4');
    doc.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust width as needed
    doc.save('interest_calculator.pdf');
  };

  const handleClear = () => {
    setPrincipal(1000);
    setRate(10);
    setTime(10);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-6">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-4 print-content">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Compound Interest Calculator
          </h1>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <div className={sharedClasses.container}>
              <label className={sharedClasses.label}>Principal amount</label>
              <div className="flex ">
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(parseFloat(e.target.value))}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <div className="flex items-center bg-primary text-white rounded-r px-4">
                  ₹
                </div>
                <input
                  type="range"
                  min="1000"
                  max="1000000"
                  value={principal}
                  onChange={(e) => setPrincipal(parseFloat(e.target.value))}
                  className="ml-2"
                />
                <span className="ml-2 text-gray-500">&#8377;</span>
              </div>
            </div>

            <div className={sharedClasses.container}>
              <label className={sharedClasses.label}>
                Rate of interest (p.a)
              </label>
              <div className="flex">
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <div className="flex items-center bg-primary text-white rounded-r px-4">
                  %
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="ml-2"
                />
                <span className="ml-2 text-gray-500">%</span>
              </div>
            </div>

            <div className={sharedClasses.container}>
              <label className={sharedClasses.label}>Time period (years)</label>
              <div className="flex">
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(parseFloat(e.target.value))}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <div className="flex items-center bg-primary text-white rounded-r px-4">
                  Y
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={time}
                  onChange={(e) => setTime(parseFloat(e.target.value))}
                  className="ml-2"
                />
                <span className="ml-2 text-gray-500">Y</span>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={handlePrint}
                className={`bg-blue-500 hover:bg-blue-600 ${sharedClasses.button}`}
              >
                Print
              </button>
              <button
                onClick={handleDownloadPDF}
                className={`bg-blue-700 hover:bg-blue-800 ml-2 ${sharedClasses.button}`}
              >
                Download PDF
              </button>
              <button
                onClick={handleClear}
                className={`bg-red-500 hover:bg-red-600 ml-2 ${sharedClasses.button}`}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="flex-1 mt-4 sm:mt-0">
            <div
              className="chart-container"
              style={{ width: '100%', height: '250px' }}
            >
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className={resultCard}>
            <h2 className={resultTitle}>Results</h2>
            <div className="mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Principal amount:</span>
                <span className={resultValue}>₹{principal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Total interest:</span>
                <span className={resultValue}>
                  ₹{(totalAmount - principal).toFixed(0)}
                </span>
              </div>

              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Total amount:</span>
                <span className={resultValue}>₹{totalAmount.toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
