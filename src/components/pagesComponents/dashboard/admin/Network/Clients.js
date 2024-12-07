"use client"
import React, { useEffect, useState } from "react"
import DashSection from "@/components/pagesComponents/pageLayout/DashSection";
import userAxios from "@/lib/userAxios";
import Link from "next/link";

export default function Agents() {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [agentsRespData,setAgentsRespData]=useState(false);
    const [currentPage,setCurrentPage]=useState(0);
    const handleGetAgents =async (p) => {
        setLoading(true)
        setError(false)
        setAgentsRespData(false)
        try {
            const resp = await userAxios.get(`/user/get-all-users?page=${p}`)
            setAgentsRespData(resp)
        } catch (error) {
            setError(error)
            console.log(error)
        } finally {
            setLoading(false)
        }
    };
    useEffect(() => {
        handleGetAgents(currentPage)
    }, [currentPage])
    // console.log(agentsRespData?.data?.data?.users)
    return (
        <DashSection
            className={"mt-4"}
            title={"All Clients"}
            titleRight={new Date().toLocaleDateString()}
        >
            <div className="text-center p-4">
                {loading && <p className="spinner"></p>}
                {error && <p className="tracking-tighter text-red-600">{error?.response?.data?.message || error?.message}</p>}
            </div>
            <div className="p-4">
                <table className="w-full border border-slate-500  text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs bg-blue-500 text-neutral-50   dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th
                                scope="col"
                                className="border border-slate-600 px-6 py-3"
                            >
                                First Name
                            </th>
                            <th
                                scope="col"
                                className="border border-slate-600 px-6 py-3"
                            >
                                Last Name
                            </th>
                            <th
                                scope="col"
                                className="border border-slate-600 px-6 py-3"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="border border-slate-600 text-center"
                            >
                                Phone
                            </th>
                            <th
                                scope="col"
                                className="border border-slate-600 text-center"
                            >
                                Aadhaar
                            </th>
                            <th
                                scope="col"
                                className="border border-slate-600 text-center"
                            >
                                Pan
                            </th>
                            <th
                                scope="col"
                                className="border border-slate-600 text-center"
                            >
                                User Type
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {agentsRespData?.data?.data?.users?.map((agent) => (
                            <tr key={agent.id}>
                                <td className="border border-slate-600">
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={agent?.firstName || "-"}
                                        readOnly
                                    />
                                </td>
                                <td className="border border-slate-600">
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={agent?.lastName || "-"}
                                        readOnly
                                    />
                                </td>
                                <td className="border border-slate-600">
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={agent?.email || "-"}
                                        readOnly
                                    />
                                </td>

                                <td className="border border-slate-600">
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={agent?.phone || "-"}
                                        readOnly
                                    />
                                </td>
                                <td className="border border-slate-600">
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={agent?.aadhaar || "-"}
                                        readOnly
                                    />
                                </td>
                                <td className="border border-slate-600">
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={agent?.pan || "-"}
                                        readOnly
                                    />
                                </td>
                                <td className="border border-slate-600">
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={agent?.userType || "-"}
                                        readOnly
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashSection>
    );
};
