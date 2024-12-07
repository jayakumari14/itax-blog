import React, { useState } from "react";

const All_Tables = () => {
    const [activetav, setActiveTabmain] = useState(1);
    const handleTab = (e) => {
        setActiveTabmain(e);
    };
    return (
        <>
            <div className="text-sm flex justify-center   font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-6 ">
                    <div className="bg-primary text-white rounded-md">
                        <p className="mt-5">Select table to view details ▼</p>
                    </div>
                    <div className="flex me-2 bg-primary rounded-md text-white">
                        <p className="m-auto mx-5">
                            Taxable Inward supplies received from registered
                            person - B2B
                        </p>
                        <button
                            type="button"
                            className="text-white bg-[#3b5998] mt-2 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                        >
                            help
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-4 px-5">
                <button
                    type="button"
                    class="focus:outline-none text-white bg-primary focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                    Supplier Wise Details
                </button>
                <button
                    type="button"
                    class="focus:outline-none text-white bg-primary focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                    Document Details
                </button>
                <button className="float-end">Download Excel</button>
            </div>
            <table className="w-full mb-6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs border border-slate-600 bg-blue-500 text-neutral-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-3 border border-slate-600">
                            S.NO.
                        </th>
                        <th
                            scope="col"
                            className="p-3 border border-slate-600 "
                        >
                            GSTIN of Supplier
                        </th>
                        <th scope="col" className="p-3 border border-slate-600">
                            Trade/legal name
                        </th>
                        <th scope="col" className="p-3 border border-slate-600">
                            Invoice number
                        </th>
                        <th scope="col" className="p-3 border border-slate-600">
                            Invoice type
                        </th>
                        <th scope="col" className="p-3 border border-slate-600">
                            Invoice Date
                        </th>
                        <th scope="col" className="p-3 border border-slate-600">
                            Invoice Value(₹)
                        </th>
                        <th scope="col" className="p-3 border border-slate-600">
                            Place of supplies
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">1</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">1</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                    </tr>
                </tbody>
            </table>
            <button
                type="button"
                class="text-blue-700 float-end hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
                Back To Summary
            </button>
        </>
    );
};

export default All_Tables;
