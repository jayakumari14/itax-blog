'use client';
import React, { useState } from 'react';
import Header from '../GSTRHomeComponent/Header';
import CustomButton from '../GSTRHomeComponent/CustomButton';
import CustomText from '../GSTRHomeComponent/CustomText';
import CustomInput from '../GSTRHomeComponent/CustomInput';
import Part1 from './GSTRForm9Tables.js/Part1';
import Part2 from './GSTRForm9Tables.js/Part2';
import Part3 from './GSTRForm9Tables.js/Part3';
import Part4 from './GSTRForm9Tables.js/Part4';
import Part5 from './GSTRForm9Tables.js/Part5';
import Part6 from './GSTRForm9Tables.js/Part6';

const GSTRForm9 = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  const renderPart = () => {
    switch (selectedPart) {
      case 'Part1':
        return <Part1 />;
      case 'Part2':
        return <Part2 />;
      case 'Part3':
        return <Part3 />;
      case 'Part4':
        return <Part4 />;
      case 'Part5':
        return <Part5 />;
      case 'Part6':
        return <Part6 />;
      default:
        return <p>Select a part to view details.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <CustomText className="text-lg font-bold mb-2">
              GSTR-9 Form
            </CustomText>
            <CustomText>
              Last Get On: <span className="text-gray-600">DD/MM/YYYY</span>
            </CustomText>
            <CustomText>
              Filing status:{' '}
              <span className="text-gray-600">Filing is pending</span>
            </CustomText>
          </div>
          <div className="md:col-span-1 flex justify-end">
            <CustomButton className="bg-blue-600 hover:bg-blue-800 text-white">
              Get Data From GSTN
            </CustomButton>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {['Part1', 'Part2', 'Part3', 'Part4', 'Part5', 'Part6'].map(
              (part) => (
                <button
                  key={part}
                  onClick={() => setSelectedPart(part)}
                  className={`${
                    selectedPart === part
                      ? 'bg-yellow-500 text-white'
                      : 'bg-blue-600 hover:bg-blue-800 text-white'
                  } px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-full`}
                >
                  {part.replace('Part', 'Part ')}
                </button>
              ),
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg mt-4 md:mt-0 gap-2 p-2">
            <CustomInput variant="radioButton" name="selection">
              Made
            </CustomInput>
            <CustomInput variant="radioButton" name="selection">
              Declared
            </CustomInput>
          </div>
        </div>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="mt-4">{renderPart()}</div>
      </div>
    </div>
  );
};

export default GSTRForm9;
