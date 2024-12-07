"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Payment_index = () => {
    return (
        <>
            <div className="my-4 max-w-6xl mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <p className="text-xl font-semibold">Payment</p>
                <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
                    <thead className="text-xs text-neutral-700 uppercase bg-slate-200 dark:bg-neutral-700 dark:text-neutral-400">
                        <tr>
                            <th className="px-6 py-3">S. No.</th>
                            <th className="px-6 py-3">Transaction ID</th>
                            <th className="px-6 py-3">UPI ID</th>
                            <th className="px-6 py-3">Seller Name</th>
                            <th className="px-6 py-3">Purchaser Name</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>abc@oksbi</td>
                            <td>Ramesh</td>
                            <td>Mahesh</td>
                            <td>06/12/23, 12:46 pm</td>
                            <td>
                                <Link href="/dashboard/finance/payment/view">
                                    <button
                                        type="button"
                                        class="text-primary font-semibold  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-sm px-5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                                    >
                                        <Icon
                                            icon="mdi:eye-outline"
                                            className=" cursor-pointer hover:text-blue-700 text-xl"
                                        />
                                        View
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>abc@oksbi</td>
                            <td>Ramesh</td>
                            <td>Mahesh</td>
                            <td>06/12/23, 12:46 pm</td>
                            <td>
                                <Link href="/dashboard/finance/payment/view">
                                    <button
                                        type="button"
                                        class="text-primary font-semibold  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-sm px-5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                                    >
                                        <Icon
                                            icon="mdi:eye-outline"
                                            className=" cursor-pointer hover:text-blue-700 text-xl"
                                        />
                                        View
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>abc@oksbi</td>
                            <td>Ramesh</td>
                            <td>Mahesh</td>
                            <td>06/12/23, 12:46 pm</td>
                            <td>
                                <Link href="/dashboard/finance/payment/view">
                                    <button
                                        type="button"
                                        class="text-primary font-semibold  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-sm px-5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                                    >
                                        <Icon
                                            icon="mdi:eye-outline"
                                            className=" cursor-pointer hover:text-blue-700 text-xl"
                                        />
                                        View
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>abc@oksbi</td>
                            <td>Ramesh</td>
                            <td>Mahesh</td>
                            <td>06/12/23, 12:46 pm</td>
                            <td>
                                <Link href="/dashboard/finance/payment/view">
                                    <button
                                        type="button"
                                        class="text-primary font-semibold  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-sm px-5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                                    >
                                        <Icon
                                            icon="mdi:eye-outline"
                                            className=" cursor-pointer hover:text-blue-700 text-xl"
                                        />
                                        View
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Payment_index;
