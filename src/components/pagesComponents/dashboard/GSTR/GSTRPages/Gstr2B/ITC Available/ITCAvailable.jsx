const ITCAvailable = () => {
    return (
        <>
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
                                value={"  Payment from Sadhguru Finance"}
                                class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </th>
                        <td className="border border-slate-600">
                            <input
                                type="text"
                                id="small-input"
                                value={"Apr 23, 2023"}
                                class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                        <td className="border border-slate-600">
                            <input
                                type="text"
                                id="small-input"
                                value={"25000"}
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
                                value={"  Payment to client"}
                                class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </th>
                        <td className="border border-slate-600">
                            <input
                                type="text"
                                id="small-input"
                                value={"Apr 23, 2023"}
                                class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                        <td className="border border-slate-600">
                            <input
                                type="text"
                                id="small-input"
                                value={"25000"}
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
                                value={"  Payment from Sadhguru Finance"}
                                class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </th>
                        <td className="border border-slate-600">
                            <input
                                type="text"
                                id="small-input"
                                value={"Apr 23, 2023"}
                                class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                        <td className="border border-slate-600">
                            <input
                                type="text"
                                id="small-input"
                                value={"25000"}
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
        </>
    );
};

export default ITCAvailable;
