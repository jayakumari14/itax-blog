"use client";
import GSTR_1_Add_Record_Details from "./GSTR_1_Add_Record_Details";
import GSTR_1_Amend_record_details from "./GSTR_1_Amend_record_details";
import GSTR_1_E_invoice_Download_History from "./GSTR_1_E_invoice_Download_History";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Gstr1Index = ({ businessProfile }) => {
    const [bProfile, setBProfile] = useState(
        businessProfile.response.data.profile,
    );
    const [activetav, setActiveTab] = useState(1);
    const pdf_ref = useRef();
    const generatePDF = useReactToPrint({
        content: () => pdf_ref.current,
        documentTitle: "GSTR1",
    });
    const handleTab = (e) => {
        setActiveTab(e);
    };
    const userDetails = {
        gstNum: bProfile.gstin,
        // legalName: "Anurag sharma",
        tradeName: bProfile.businessName,
        fy: "2023-24",
        returnPeriod: "December",
    };
    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 bg-gray-200">
                    <p className="px-2 py-3">
                        GSTIN -{" "}
                        <span className="uppercase">{userDetails.gstNum}</span>
                    </p>
                    <p className="px-2 py-4">
                        Legal Name -{" "}
                        <span className="uppercase">
                            {userDetails.legalName}
                        </span>
                    </p>
                    <p className="px-2 py-4">
                        Trade Name -{" "}
                        <span className="uppercase">
                            {userDetails.tradeName}
                        </span>
                    </p>
                    <p className="px-2 py-4">
                        FY - <span className="uppercase">{userDetails.fy}</span>
                    </p>
                    <p className="px-2 py-4">
                        Return Period -{" "}
                        <span className="uppercase">
                            {userDetails.returnPeriod}
                        </span>
                    </p>
                </div>
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
                            Add Record Details
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            className={
                                activetav === 2
                                    ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                                    : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            }
                            onClick={(e) => handleTab(2)}
                        >
                            Amend Record Details
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            className={
                                activetav === 3
                                    ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                                    : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            }
                            onClick={(e) => handleTab(3)}
                        >
                            E-Invoice Download History
                        </button>
                    </li>
                </ul>
            </div>
            <div className="p-4 flex justify-end">
                <button
                    className="btn-primary lg:col-span-2"
                    onClick={generatePDF}
                >
                    Download
                </button>
            </div>
            <div ref={pdf_ref}>
                {activetav === 1 && <GSTR_1_Add_Record_Details />}
                {activetav === 2 && <GSTR_1_Amend_record_details />}
                {activetav === 3 && <GSTR_1_E_invoice_Download_History />}
            </div>
        </>
    );
};

export default Gstr1Index;
