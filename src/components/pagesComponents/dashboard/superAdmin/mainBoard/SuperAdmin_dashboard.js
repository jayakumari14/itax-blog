'use client';
import CardOverview from './items/CardOverview';
import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import { useEffect, useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import { Icon } from '@iconify/react';
import Link from 'next/link';

import axios from 'axios';
import Financial_Details from './items/Financial_Details';
import userAxios from '@/lib/userAxios';

const tableClassName = {
  headTH:
    'ps-2 py-3 text-left text-xs font-medium  tracking-wider  border border-slate-600 ',
};
export default function SuperAdmin_Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(4);
  const { token } = useAuth();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const resp = await userAxios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/get-all-users?page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setTotalPages(resp.data.data.page);
        setUsers(resp.data.data.users);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    getAllUsers();
  }, []);
  return (
    <div className="px-4 grid gap-8">
      <DashSection title={'Overview'}>
        <CardOverview className="col-span-12 xl:col-span-7" />
      </DashSection>
      <DashSection
        title={'Recent Users'}
        titleRight={
          <Link href={'/dashboard/all-users'}>
            <button className="btn-primary">View All</button>
          </Link>
        }
      >
        <div className=" mt-2 max-h-96 shadow overflow-y-auto  border-b border-gray-200 sm:rounded-lg">
          <table className=" divide-gray-200 ">
            <thead className="text-left bg-blue-500 text-neutral-50 ">
              <tr>
                <th scope="col" className={tableClassName.headTH}>
                  First Name
                </th>

                <th scope="col" className={tableClassName.headTH}>
                  Email
                </th>
                <th scope="col" className={tableClassName.headTH}>
                  Mobile No.
                </th>

                <th scope="col" className={tableClassName.headTH}>
                  Pan No.
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white divide-y divide-gray-200 ">
              {users.map((user) => (
                <tr key={user.email}>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={`${user?.firstName || 'empty'} ${user?.lastName || 'empty'}`}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={user?.email || 'empty'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>

                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={user?.phone || 'empty'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>

                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={user?.pan || 'empty'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length <= 0 ? (
            <div className="py-4 flex flex-col items-center gap-4 justify-center mb-2 max-w-6xl mx-auto">
              {isLoading ? (
                'loading'
              ) : isError ? (
                'error'
              ) : (
                <>
                  <div>
                    <Icon
                      className="w-40 h-24 opacity-5 mx-auto"
                      icon="ph:files-light"
                    />
                    <p className="text-center">No Record Found</p>
                  </div>
                  <Link href={'link to create user'}>
                    <button
                      type="button"
                      className="capitalize flex items-center focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  "
                    >
                      create user
                    </button>
                  </Link>
                </>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </DashSection>

      <DashSection
        title={'Financial Details'}
        titleRight={'current year - 2024'}
      >
        <div className=" grid grid-cols-2">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs   bg-blue-500 text-neutral-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="border border-slate-600 text-left p-3"
                  >
                    Transaction
                  </th>
                  <th
                    scope="col"
                    className="border border-slate-600 text-left p-3"
                  >
                    Due Date
                  </th>
                  <th
                    scope="col"
                    className="border border-slate-600 text-left p-3"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="border border-slate-600 text-left p-3"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
              <tbody>
                <tr>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Loan By Sadhguru Finance'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Loan By Sadhguru Finance'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      Cancelled
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Loan By Sadhguru Finance'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Loan By Sadhguru Finance'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      Cancelled
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Loan By Sadhguru Finance'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Loan By Sadhguru Finance'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      Cancelled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Financial_Details
            title={'Loan , Payment ,Working Capital '}
            className="col-span-1"
          />
        </div>
      </DashSection>
      <DashSection
        title={'Recent Transactions'}
        titleRight={'current year - 2024'}
      >
        <div className="p-4">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs border border-slate-600 bg-blue-500 text-neutral-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-3 border border-slate-600">
                    Transaction
                  </th>
                  <th scope="col" className="p-3 border border-slate-600">
                    Date & Time
                  </th>
                  <th scope="col" className="p-3 border border-slate-600">
                    Amount
                  </th>
                  <th scope="col" className="p-3 border border-slate-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'  Payment from Sadhguru Finance'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </th>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'  Payment to client'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </th>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      Cancelled
                    </span>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'  Payment from Sadhguru Finance'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </th>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'Apr 23, 2023'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <input
                      type="text"
                      id="small-input"
                      value={'25000'}
                      class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </td>
                  <td className="border border-slate-600">
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DashSection>
    </div>
  );
}
