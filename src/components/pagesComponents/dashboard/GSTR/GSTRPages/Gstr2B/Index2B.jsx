"use client";
import { useState } from "react";
import Summary from "./Summary";
import All_Tables from "./All_Tables";

const Index2B = ({ businessProfile }) => {
    const [bProfile, setBProfile] = useState(
        businessProfile.response.data.profile,
    );
    const [activetav, setActiveTab] = useState(1);

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
            <div className="rounded-md overflow-hidden">
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
            </div>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap-mb-px justify-left">
                    <li className="me-2">
                        <button
                            className={
                                activetav === 1
                                    ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                                    : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            }
                            onClick={(e) => handleTab(1)}
                        >
                            Summary
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
                            All Tables
                        </button>
                    </li>
                </ul>
            </div>
            {activetav === 1 && <Summary />}
            {activetav === 2 && <All_Tables />}
        </>
    );
};

export default Index2B;
