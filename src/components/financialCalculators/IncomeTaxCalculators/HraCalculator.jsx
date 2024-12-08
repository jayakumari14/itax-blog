'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

function App() {
  const [basic, setBasic] = useState('');
  const [hra, setHra] = useState('');
  const [rent, setRent] = useState('');
  const [isMetro, setIsMetro] = useState(false);
  const [da, setDa] = useState('');
  const [otherAllowances, setOtherAllowances] = useState('');
  const [result, setResult] = useState(null);

  const calculateHRA = () => {
    const basicSalary = parseFloat(basic);
    const hraReceived = parseFloat(hra);
    const rentPaid = parseFloat(rent);
    const dearnessAllowance = parseFloat(da);
    const salary = basicSalary + dearnessAllowance;

    const metroAllowance = isMetro ? 0.5 * salary : 0.4 * salary;
    const excessRent = rentPaid - 0.1 * salary;
    const hraExempt = Math.min(hraReceived, metroAllowance, excessRent);

    setResult(hraExempt.toFixed(2));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`HRA Calculation Result: ${result}`, 10, 10);
    doc.save('HRA_Calculation_Result.pdf');
  };

  const clearFields = () => {
    setBasic('');
    setHra('');
    setRent('');
    setIsMetro(false);
    setDa('');
    setOtherAllowances('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-400 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">
            HRA Calculator
          </h2>
          <div className="space-y-3">
            <input
              type="number"
              placeholder="Basic Salary"
              className="w-full p-2 border border-gray-300 rounded"
              value={basic}
              onChange={(e) => setBasic(e.target.value)}
            />
            <input
              type="number"
              placeholder="HRA Received"
              className="w-full p-2 border border-gray-300 rounded"
              value={hra}
              onChange={(e) => setHra(e.target.value)}
            />
            <input
              type="number"
              placeholder="Rent Paid"
              className="w-full p-2 border border-gray-300 rounded"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
            />
            <input
              type="number"
              placeholder="Dearness Allowance (DA)"
              className="w-full p-2 border border-gray-300 rounded"
              value={da}
              onChange={(e) => setDa(e.target.value)}
            />
            <input
              type="number"
              placeholder="Other Allowances"
              className="w-full p-2 border border-gray-300 rounded"
              value={otherAllowances}
              onChange={(e) => setOtherAllowances(e.target.value)}
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isMetro}
                onChange={(e) => setIsMetro(e.target.checked)}
              />
              <span>Metro City</span>
            </label>
            <button
              onClick={calculateHRA}
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Calculate
            </button>
            {result !== null && (
              <div className="bg-blue-100 p-4 rounded text-center text-lg mt-4">
                <p className="text-xl font-semibold">HRA Exemption</p>
                <p className="text-2xl font-bold text-blue-700">{result}</p>
              </div>
            )}
            <div className="flex space-x-3 mt-4">
              <button
                onClick={handlePrint}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Print
              </button>
              <button
                onClick={handleDownload}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Download PDF
              </button>
            </div>
            <button
              onClick={clearFields}
              className="w-full p-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-3"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
