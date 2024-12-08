'use client';

import React, { useState } from 'react';

const sharedInputClasses = 'w-full p-2 border rounded-lg';
const sharedLabelClasses = 'block text-zinc-700';
const sharedContainerClasses = 'mb-4';

const GSTCalculator = () => {
  const [gstType, setGstType] = useState('include');
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('5');
  const [customGstRate, setCustomGstRate] = useState('');
  const [gstAmount, setGstAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [isCustomGstRate, setIsCustomGstRate] = useState(false);

  const calculateGst = () => {
    const amountValue = parseFloat(amount) || 0;
    const gstRateValue = isCustomGstRate
      ? parseFloat(customGstRate) || 0
      : parseFloat(gstRate) || 0;
    let gstAmountValue = 0;
    let totalAmountValue = 0;

    if (gstType === 'include') {
      gstAmountValue = (amountValue * gstRateValue) / (100 + gstRateValue);
      totalAmountValue = amountValue - gstAmountValue;
    } else {
      gstAmountValue = (amountValue * gstRateValue) / 100;
      totalAmountValue = amountValue + gstAmountValue;
    }

    setGstAmount(gstAmountValue.toFixed(2));
    setTotalAmount(totalAmountValue.toFixed(2));
  };

  const handleGstRateChange = (e) => {
    if (e.target.value === 'custom') {
      setIsCustomGstRate(true);
      setGstRate(''); // Reset the gstRate value when switching to custom
    } else {
      setGstRate(e.target.value);
      setIsCustomGstRate(false);
      setCustomGstRate(''); // Reset the customGstRate value when switching back to predefined rates
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-10">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">GST Calculator</h1>
        </div>
        <div className="bg-white shadow-inner p-4 rounded-lg mb-6">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full  max-w-6xl">
            <div className={sharedContainerClasses}>
              <label htmlFor="gst-type" className={sharedLabelClasses}>
                GST Type:
              </label>
              <select
                id="gst-type"
                className={sharedInputClasses}
                value={gstType}
                onChange={(e) => setGstType(e.target.value)}
              >
                <option value="include">Including GST</option>
                <option value="exclude">Excluding GST</option>
              </select>
            </div>
            <div className={sharedContainerClasses}>
              <label htmlFor="amount" className={sharedLabelClasses}>
                Amount: (&#8377;)
              </label>
              <input
                type="number"
                id="amount"
                className={sharedInputClasses}
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className={sharedContainerClasses}>
              <label htmlFor="gst-rate" className={sharedLabelClasses}>
                GST Rate: (%)
              </label>
              {!isCustomGstRate ? (
                <select
                  id="gst-rate"
                  className={sharedInputClasses}
                  value={gstRate}
                  onChange={handleGstRateChange}
                >
                  <option value="0">0% (NILL)</option>

                  <option value="5">5%</option>
                  <option value="12">12%</option>
                  <option value="18">18%</option>
                  <option value="28">28%</option>
                  <option value="custom">Custom</option>
                </select>
              ) : (
                <input
                  type="number"
                  id="custom-gst-rate"
                  className={sharedInputClasses}
                  placeholder="Enter custom GST rate"
                  value={customGstRate}
                  onChange={(e) => setCustomGstRate(e.target.value)}
                />
              )}
            </div>
            <div className={sharedContainerClasses}>
              <label htmlFor="gst-amount" className={sharedLabelClasses}>
                GST Amount: (&#8377;)
              </label>
              <input
                type="number"
                id="gst-amount"
                placeholder="GST Amount"
                className={sharedInputClasses}
                value={gstAmount}
                readOnly
              />
            </div>
            <div className={sharedContainerClasses}>
              <label htmlFor="total-amount" className={sharedLabelClasses}>
                Total Amount: (&#8377;)
              </label>
              <input
                type="number"
                id="total-amount"
                placeholder="Total Amount Amount"
                className={sharedInputClasses}
                value={totalAmount}
                readOnly
              />
            </div>
            <div className="flex justify-center">
              <button
                id="calculate"
                className="bg-blue-500 text-white p-2 rounded-lg"
                onClick={calculateGst}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTCalculator;
