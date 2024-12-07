'use client';

import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import Link from 'next/link';
// import userAxios from "@/lib/userAxios";
// import { useEffect, useState } from "react";

const Insureance_Admin = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   userAxios
  //     .get(`${process.env.NEXT_PUBLIC_BASE_URL}/insourance/getAll`)
  //     .then(function (response) {
  //       // console.log("repdfjklkads", response.data.applications);
  //       setData(response.data.applications);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <DashSection
        title={'Total Insureance Queries'}
        titleRight={
          <Link href="/">
            <button className="btn-primary">Sell Now</button>
          </Link>
        }
      >
        <div className=" mt-2 max-h-96 shadow overflow-y-auto  border-b border-gray-200 sm:rounded-lg">
          <table className=" divide-gray-200 ">
            <thead className="bg-blue-500 text-neutral-50 p-3 text-xs">
              <tr>
                <th
                  scope="col"
                  className="border p-3  border-slate-600 text-center"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="border p-3  border-slate-600 text-center"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="border p-3  border-slate-600 text-center"
                >
                  Mobile No.
                </th>
                <th
                  scope="col"
                  className="border p-3  border-slate-600 text-center"
                >
                  Gender
                </th>
                <th
                  scope="col"
                  className="border p-3  border-slate-600 text-center"
                >
                  Marital Status
                </th>
                <th
                  scope="col"
                  className="border p-3  border-slate-600 text-center"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="border p-3  border-slate-600 text-center"
                >
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="border border-slate-600">
                  <input
                    type="text"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </td>
                <td className="border border-slate-600">
                  <input
                    type="text"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </td>
                <td className="border border-slate-600">
                  <input
                    type="text"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </td>
                <td className="border border-slate-600">
                  <input
                    type="text"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </td>
                <td className="border border-slate-600">
                  <input
                    type="text"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </td>
                <td className="border border-slate-600">
                  <input
                    type="text"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </td>
                <td className="border border-slate-600">
                  <input
                    type="text"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DashSection>
    </>
  );
};

export default Insureance_Admin;
