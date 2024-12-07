"use client";
import DashSection from "@/components/pagesComponents/pageLayout/DashSection";
import userAxios from "@/lib/userAxios";
import axios from "axios";
import { useEffect, useState } from "react";

const Allusers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalUser, setTotalUser] = useState("");
  var digit = ("" + totalUser)[0];

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const resp = await userAxios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/get-all-users?page=${currentPage}`
        );
        setTotalUser(resp.data.data.totalusers);
        setUsers(resp.data.data.users);

        setIsLoading(false);
      } catch (error) {
        // console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    getAllUsers();
  }, [currentPage, setCurrentPage]);
  return (
    <>
      <DashSection title={"All Users"} titleRight={"current year - 2024"}>
        <div >




        <table class="w-full border border-slate-500  text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs bg-blue-500 text-neutral-50   dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                class="border border-slate-600 px-6 py-3"
                
              >
               
                Name
              </th>
              <th
                scope="col"
                class="border border-slate-600 px-6 py-3"
               
              >
                
                Email
                
              </th>
              <th scope="col" className="border border-slate-600 text-center" >
              Phone
              </th>
              <th scope="col" className="border border-slate-600 text-center" >
              Aadhaar
              </th>
              <th scope="col" className="border border-slate-600 text-center" >
              Pan
              </th>
              <th scope="col" className="border border-slate-600 text-center" >
              User Type
              </th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.email}>
            <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  value={`${user?.firstName || "empty"} ${user?.lastName || "empty"}`}
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  value={user?.email || "empty"}
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  value={user?.phone || "empty"}
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  value={user?.aadhaar || "empty"}
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  value={user?.pan || "empty"}
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  value={user?.userType || "empty"}
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            
             
            </tr>
       
          
           
       ))}
          </tbody>
        </table>


        </div>
        <Pagination
          page={currentPage}
          setPage={setCurrentPage}
          totalPages={digit}
        />
      </DashSection>
    </>
  );
};

function Pagination(prop) {
  const { page, setPage, totalPages } = prop;
  return (
    <nav className="flex justify-center my-8">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            className=" cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={+page === 0}
            onClick={() => setPage((prev) => +prev - 1)}
          >
            Prev
          </button>
        </li>
        <li>
          <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {page}
          </span>
        </li>
        <li>
          <button
            className=" cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setPage((prev) => +prev + 1)}
            disabled={+totalPages === +page + 1}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Allusers;
