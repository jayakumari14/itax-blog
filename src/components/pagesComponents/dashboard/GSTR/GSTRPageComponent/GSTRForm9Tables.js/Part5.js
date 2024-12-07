// Part1.js
import React from 'react';
import CustomLabel from '../../GSTRHomeComponent/CustomLabel';

const Part5 = () => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <CustomLabel variant="heading" className="mb-4">
        Basic Details: Part 5
      </CustomLabel>
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 w-1/12"></th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 border-r border-gray-300 w-4/12"></th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 border-r border-gray-300 w-2/12">
              Source
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 w-4/12"></th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800">
          <tr className="border-b border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              1
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              Financial Year
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              Auto
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300">
              2022-2023
            </td>
          </tr>
          <tr className="border-b border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              2
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              GSTIN
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              Auto
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300">
              23DNNPS1910Q1ZG
            </td>
          </tr>
          <tr className="border-b border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              {'3A)'}
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              Legal Name
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              Auto
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300">
              AJAY SHARMA
            </td>
          </tr>
          <tr className="border-b border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              {'3B)'}
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              Trade Name (If any)
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300 border-r border-gray-300">
              Auto
            </td>
            <td className="px-4 py-2 text-gray-800 dark:text-gray-300"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Part5;
