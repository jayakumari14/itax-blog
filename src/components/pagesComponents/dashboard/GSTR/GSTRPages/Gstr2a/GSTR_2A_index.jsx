"use client";
import Link from "next/link";
import { useState } from "react";

const GSTR_2A_index = ({ businessProfile }) => {
    const [bProfile, setBProfile] = useState(
        businessProfile.response.data.profile,
    );
    const userDetails = {
        gstNum: bProfile?.gstin,
        // legalName: "Anurag sharma",
        tradeName: bProfile?.businessName,
        fy: "2023-24",
        returnPeriod: "December",
    };
    return (
        <div className="p-4 md:px-16 lg:px-20">
            {/* Header info */}
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
            {/* Imp Note */}
            <p className="text-xs mt-4">
                <span className="text-red-500">**</span>NOTE : You can only view
                details of inward supplies in GSTR-2A
            </p>
            {/* Invoices */}
            {gstr2a.map((part, index) => {
                return (
                    <div
                        className="mt-6 bg-gray-200 py-8 px-4 shadow-md rounded-md"
                        key={index}
                    >
                        <div className="flex justify-between mb-2 items-center">
                            <h1 className="uppercase">
                                Part - {String.fromCharCode(65 + index)}
                            </h1>
                            {index === 0 && (
                                <p className="text-xs">
                                    <span className="text-red-500">**</span>
                                    IMPORTANT NOTICE: If the invoices are more
                                    than 500, please check{" "}
                                    <span className="text-blue-500">here</span>
                                </p>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {part.map((section, index) => {
                                return (
                                    <Link
                                        key={index}
                                        className="text-primary font-bold hover:shadow-lg hover:shadow-primary shadow-md rounded-md duration-300 text-center py-4 bg-white"
                                        href={section.link}
                                    >
                                        {section.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            {/* Buttons */}
            <div className="py-8 text-right">
                <button className="text-blue-950 border border-blue-950 px-4 py-2 rounded-sm">
                    Back
                </button>
            </div>
        </div>
    );
};

export default GSTR_2A_index;

const gstr2a = [
    [
        {
            title: "B2B Invoices  ",
            link: "gstr2a/b2b-invoices",
        },
        {
            title: "Credit/Debit Notes  ",
            link: "gstr2a/credit-debit-notes",
        },
        {
            title: "Amendments to B2B Invoices  ",
            link: "gstr2a/amend-to-b2b-invoices",
        },
        {
            title: "Amendments to Credit/Debit Notes  ",
            link: "gstr2a/amend-to-credit-debit-notes",
        },
    ],
    [
        {
            title: "ISD Credits  ",
            link: "gstr2a/isd-credits",
        },
        {
            title: "Amendments to ISD Credits  ",
            link: "gstr2a/amend-to-isd-credits",
        },
    ],
    [
        {
            title: "TDS Credits  ",
            link: "gstr2a/tds-credits",
        },
        {
            title: "Amendments to TDS Credits  ",
            link: "gstr2a/amend-to-tds-credits",
        },
        {
            title: "TCS Credits  ",
            link: "gstr2a/tcs-credits",
        },
    ],
    [
        {
            title: "Import of goods from overseas on bill of entry  ",
            link: "gstr2a/import-goods-from-overseas",
        },
        {
            title: "Import of goods from SEZ units / developers on bill of entry  ",
            link: "gstr2a/import-of-goods-from-sez-units",
        },
    ],
];
