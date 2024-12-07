"use client";
import React, { useRef, useState } from "react";

import { useReactToPrint } from "react-to-print";
const Summary = () => {
    const table1_ref = useRef();
    const table2_ref = useRef();
    const generatePDF1 = useReactToPrint({
        content: () => table1_ref.current,
        documentTitle: "ITC Available (GSTR2B)",
    });
    const generatePDF2 = useReactToPrint({
        content: () => table2_ref.current,
        documentTitle: "ITC Not Available (GSTR2B)",
    });
    const [activetav, setActiveTabmain] = useState(1);
    const [showHide1, setShowHide1] = useState(false);
    const [showHide2, setShowHide2] = useState(false);
    const [showHide3, setShowHide3] = useState(false);
    const [showHide4, setShowHide4] = useState(false);
    let val = "";
    const toggleSowhide = (value) => {
        if (value === "one") {
            setShowHide1(!showHide1);
        } else if (value === "two") {
            setShowHide2(!showHide2);
        } else if (value === "three") {
            setShowHide3(!showHide3);
        } else if (value === "four") {
            setShowHide4(!showHide4);
        } else if (value === "allon") {
            setShowHide1(true);
            setShowHide2(true);
            setShowHide3(true);
            setShowHide4(true);
        } else if (value === "alloff") {
            setShowHide1(false);
            setShowHide2(false);
            setShowHide3(false);
            setShowHide4(false);
        }
    };
    const handleTab = (e) => {
        setActiveTabmain(e);
    };
    return (
        <>
            <div className="text-sm flex justify-between   font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap-mb-px justify-center">
                    <li className="me-2">
                        <button
                            className={
                                activetav === 1
                                    ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                                    : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            }
                            onClick={(e) => handleTab(1)}
                        >
                            ITC Available
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            className={
                                activetav === 2
                                    ? "inline-block p-4 text-purple-500 border-b-2 border-purple-500 rounded-t-lg  dark:text-purple-500 dark:border-purple-500"
                                    : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            }
                            onClick={(e) => handleTab(2)}
                        >
                            ITC Not Available
                        </button>
                    </li>
                </ul>
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
            {activetav === 1 && (
                <>
                    <table ref={table1_ref}  className="w-full mb-6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs border border-slate-600 bg-blue-500 text-neutral-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    S.NO.
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600 "
                                >
                                    {showHide1 ||
                                    showHide2 ||
                                    showHide3 ||
                                    showHide4 === true ? (
                                        <p
                                            className="cursor-pointer"
                                            onClick={(e) =>
                                                toggleSowhide((val = "alloff"))
                                            }
                                        >
                                            Heading [Collapse All ▼]
                                        </p>
                                    ) : (
                                        <p
                                            className="cursor-pointer"
                                            onClick={(e) =>
                                                toggleSowhide((val = "allon"))
                                            }
                                        >
                                            Heading [Expand All ▼]
                                        </p>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    GSTR-3B Table
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    Integreated tax(₹)
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    Central tax(₹)
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    State/UT tax(₹)
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    Cess(₹)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">
                                    Part A
                                </th>
                                <th
                                    className="border border-slate-600"
                                    colSpan={6}
                                >
                                    ITC Available - Credit may be claimed may be
                                    in relevent headings in GSTR-3B
                                </th>
                            </tr>
                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">1</th>
                                <th className="border border-slate-600">
                                    <p
                                        onClick={(e) =>
                                            toggleSowhide((val = "one"))
                                        }
                                        className="cursor-pointer"
                                    >
                                        All other ITC - Supplies form registerd
                                        persons ▼
                                    </p>
                                </th>
                                <th className="border border-slate-600">
                                    4(A)(5)
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                            </tr>
                            {showHide1 === true && (
                                <>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Invoices
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Debit notes
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Invoices(Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Debit notes (Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                </>
                            )}
                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">2</th>
                                <th className="border border-slate-600">
                                    <p
                                        onClick={(e) =>
                                            toggleSowhide((val = "two"))
                                        }
                                        className="cursor-pointer"
                                    >
                                        {" "}
                                        Inward Supplies form ISD ▼
                                    </p>
                                </th>
                                <th className="border border-slate-600">
                                    4(A)(4)
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                            </tr>
                            {showHide2 === true && (
                                <>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            ISD - Invoices
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            ISD - Invoices(Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                </>
                            )}

                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">3</th>
                                <th className="border border-slate-600">
                                    <p
                                        onClick={(e) =>
                                            toggleSowhide((val = "three"))
                                        }
                                        className="cursor-pointer"
                                    >
                                        Inward Supplies liable for reverse
                                        charge ▼
                                    </p>
                                </th>
                                <th className="border border-slate-600">
                                    3.1(d)4(A)(3)
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                            </tr>
                            {showHide3 === true && (
                                <>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Invoices
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Debit notes
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Invoices(Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Debit notes (Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                </>
                            )}
                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">4</th>
                                <th className="border border-slate-600">
                                    <p
                                        onClick={(e) =>
                                            toggleSowhide((val = "four"))
                                        }
                                        className="cursor-pointer"
                                    >
                                        {" "}
                                        Import Of Goods ▼
                                    </p>
                                </th>
                                <th className="border border-slate-600">
                                    4(A)(1)
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                            </tr>
                            {showHide4 === true && (
                                <>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            IMPG - Import of gooods from
                                            overseas
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            IMPG - (Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            IMPG - Import of goods from SEZ
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600 ">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            IMPGSEZ (Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                        <tr className="border border-slate-600">
                            <th className="border border-slate-600">Part B</th>
                            <th className="border border-slate-600" colSpan={6}>
                                ITC Available - Credit notes should be net off
                                against relevant ITC avaliable headings in
                                GSTR-3B
                            </th>
                        </tr>
                        <tr className="border border-slate-600">
                            <td className="border border-slate-600">1</td>
                            <td className="border border-slate-600">Others</td>
                            <td className="border border-slate-600">4(A)</td>

                            <td className="border border-slate-600">0.00</td>
                            <td className="border border-slate-600">0.00</td>
                            <td className="border border-slate-600">0.00</td>
                            <td className="border border-slate-600">0.00</td>
                        </tr>
                    </table>
                    <div className="grid mb-10 grid-cols-3 gap-4 content-center px-10 ">
                        <button
                            type="button"
                            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                            BACK TO DASHBOARD
                        </button>
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={generatePDF1}
                        >
                            DOWNLOAD GSTR-2B SUMMARY (PDF)
                        </button>
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            DOWNLOAD GSTR-2B DETISL (EXCEL)
                        </button>
                    </div>
                </>
            )}

            {activetav === 2 && (
                <>
                    <table ref={table2_ref}  className="w-full mb-6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs border border-slate-600 bg-purple-500 text-neutral-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    S.NO.
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600 "
                                >
                                    {showHide1 ||
                                    showHide2 ||
                                    showHide3 ||
                                    showHide4 === true ? (
                                        <p
                                            className="cursor-pointer"
                                            onClick={(e) =>
                                                toggleSowhide((val = "alloff"))
                                            }
                                        >
                                            Heading [Collapse All ▼]
                                        </p>
                                    ) : (
                                        <p
                                            className="cursor-pointer"
                                            onClick={(e) =>
                                                toggleSowhide((val = "allon"))
                                            }
                                        >
                                            Heading [Expand All ▼]
                                        </p>
                                    )}
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    GSTR-3B Table
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    Integreated tax(₹)
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    Central tax(₹)
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    State/UT tax(₹)
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border border-slate-600"
                                >
                                    Cess(₹)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">
                                    Part A
                                </th>
                                <th
                                    className="border border-slate-600"
                                    colSpan={6}
                                >
                                    ITC Not Available
                                </th>
                            </tr>
                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">1</th>
                                <th className="border border-slate-600">
                                    <p
                                        onClick={(e) =>
                                            toggleSowhide((val = "one"))
                                        }
                                        className="cursor-pointer"
                                    >
                                        All other ITC - Supplies form registerd
                                        persons ▼
                                    </p>
                                </th>
                                <th className="border border-slate-600">
                                    4(D)(2)
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                            </tr>
                            {showHide1 === true && (
                                <>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Invoices
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Debit notes
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Invoices(Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Debit notes (Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                </>
                            )}
                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">2</th>
                                <th className="border border-slate-600">
                                    <p
                                        onClick={(e) =>
                                            toggleSowhide((val = "two"))
                                        }
                                        className="cursor-pointer"
                                    >
                                        {" "}
                                        Inward Supplies form ISD ▼
                                    </p>
                                </th>
                                <th className="border border-slate-600">
                                    4(D)(2)
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                            </tr>
                            {showHide2 === true && (
                                <>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            ISD - Invoices
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            ISD - Invoices(Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                </>
                            )}

                            <tr className="border border-slate-600">
                                <th className="border border-slate-600">3</th>
                                <th className="border border-slate-600">
                                    <p
                                        onClick={(e) =>
                                            toggleSowhide((val = "three"))
                                        }
                                        className="cursor-pointer"
                                    >
                                        Inward Supplies liable for reverse
                                        charge ▼
                                    </p>
                                </th>
                                <th className="border border-slate-600">
                                    3.1(d)4(D)(2)
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                                <th className="border border-slate-600">
                                    0.00
                                </th>
                            </tr>
                            {showHide3 === true && (
                                <>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Invoices
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Debit notes
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Invoices(Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                    <tr className="border border-slate-600">
                                        <td className="border border-slate-600"></td>
                                        <td className="border border-slate-600">
                                            B2B - Debit notes (Amendment)
                                        </td>
                                        <td className="border border-slate-600"></td>

                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                        <td className="border border-slate-600">
                                            0.00
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                        <tr className="border border-slate-600">
                            <th className="border border-slate-600">Part B</th>
                            <th className="border border-slate-600" colSpan={6}>
                                ITC Not Available - Credit notes should be net
                                off against relevant ITC avaliable headings in
                                GSTR-3B
                            </th>
                        </tr>
                        <tr className="border border-slate-600">
                            <th className="border border-slate-600">1</th>
                            <th className="border border-slate-600">
                                <p
                                    onClick={(e) =>
                                        toggleSowhide((val = "four"))
                                    }
                                    className="cursor-pointer"
                                >
                                    {" "}
                                    Ohters ▼
                                </p>
                            </th>
                            <th className="border border-slate-600">4(A)</th>
                            <th className="border border-slate-600">0.00</th>
                            <th className="border border-slate-600">0.00</th>
                            <th className="border border-slate-600">0.00</th>
                            <th className="border border-slate-600">0.00</th>
                        </tr>
                        {showHide4 === true && (
                            <>
                                <tr className="border border-slate-600">
                                    <td className="border border-slate-600"></td>
                                    <td className="border border-slate-600">
                                        B2B - Credit Notes
                                    </td>
                                    <td className="border border-slate-600">
                                        4(A)(5)
                                    </td>

                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                </tr>
                                <tr className="border border-slate-600">
                                    <td className="border border-slate-600"></td>
                                    <td className="border border-slate-600">
                                        B2B - Credit Notes (Amendment)
                                    </td>
                                    <td className="border border-slate-600">
                                        4(A)(5)
                                    </td>

                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                </tr>
                                <tr className="border border-slate-600">
                                    <td className="border border-slate-600"></td>
                                    <td className="border border-slate-600">
                                        B2B - Credit Notes (Reverse Charge)
                                    </td>
                                    <td className="border border-slate-600">
                                        4(A)(3)
                                    </td>

                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                </tr>
                                <tr className="border border-slate-600 ">
                                    <td className="border border-slate-600"></td>
                                    <td className="border border-slate-600">
                                        B2B - Credit Notes (Reverse Charge)
                                        (Amendment)
                                    </td>
                                    <td className="border border-slate-600">
                                        4(A)(3)
                                    </td>

                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                </tr>
                                <tr className="border border-slate-600 ">
                                    <td className="border border-slate-600"></td>
                                    <td className="border border-slate-600">
                                        ISD - Credit Notes
                                    </td>
                                    <td className="border border-slate-600">
                                        4(A)(4)
                                    </td>

                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                </tr>
                                <tr className="border border-slate-600 ">
                                    <td className="border border-slate-600"></td>
                                    <td className="border border-slate-600">
                                        ISD - Credit Notes (Amendment)
                                    </td>
                                    <td className="border border-slate-600">
                                        4(A)(4)
                                    </td>

                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                    <td className="border border-slate-600">
                                        0.00
                                    </td>
                                </tr>
                            </>
                        )}
                    </table>
                    <div className="grid mb-10 grid-cols-3 gap-4 content-center px-10 ">
                        <button
                            type="button"
                            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                            BACK TO DASHBOARD
                        </button>
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={generatePDF2}
                        >
                            DOWNLOAD GSTR-2B SUMMARY (PDF)
                        </button>
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            DOWNLOAD GSTR-2B DETISL (EXCEL)
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Summary;
