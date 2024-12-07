"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Twelve_HSN_Wise = () => {
    const [activetav, setActiveTab] = useState(1);

    const handleTab = (e) => {
        setActiveTab(e);
    };
    return (
        <>
            <div className="p-2 grid grid-cols-1 max-w-xl mx-auto gap-4 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Sr No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                1
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-3">POS</td>
                            <td>
                                <select
                                    id="countries"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>37 Andhra Pradesh</option>
                                    <option value="">
                                        12 Anranchal Pradesh{" "}
                                    </option>
                                    <option value="">18 Assam</option>
                                    <option value="">10 Bihar</option>
                                    <option value="">22 Chhattisgarh</option>
                                    <option value="">30 Goa</option>
                                    <option value="">24 Gujarat</option>
                                    <option value="">6 Haryana</option>
                                    <option value="">
                                        02 Himanchal Pradesh
                                    </option>
                                    <option value="">20 Jharkhand</option>
                                    <option value="">29 Karnataka</option>
                                    <option value="">32 Kerala</option>
                                    <option value="">23 Madhya Pradesh</option>
                                    <option value="">27 Maharashtra</option>
                                    <option value="">14 Manipur</option>
                                    <option value="">17 Meghalaya</option>
                                    <option value="">15 Mizoram</option>
                                    <option value=""> 13 Nagaland</option>
                                    <option value=""> 21 Odisha</option>
                                    <option value=""> 03 Punjab</option>
                                    <option value=""> 08 Rajasthan</option>
                                    <option value=""> 11 Sikkim</option>
                                    <option value=""> 33 Tamil Nadu</option>
                                    <option value=""> 36 Telangana</option>
                                    <option value=""> 16 Tripura</option>
                                    <option value=""> 09 Uttar Pradesh</option>
                                    <option value=""> 05 Uttarakhand</option>
                                    <option value=""> 19 West Bengal</option>
                                    <option value="">
                                        {" "}
                                        35 Andaman and Nicobar Island
                                    </option>
                                    <option value=""> 04 Chandigarh</option>
                                    <option value="">
                                        {" "}
                                        26 Dadar and Nagar Haveli Daman And Diu
                                    </option>
                                    <option value=""> 31 Lakshadweep</option>
                                    <option value=""> 07 Delhi</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Taxable Value</td>
                            <td>
                                <input
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td className="flex">
                                <button
                                    type="button"
                                    class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
                                >
                                    <Icon icon="uil:edit" />
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
                                >
                                    <Icon icon="material-symbols-light:delete-outline" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Rate</td>
                            <td>
                                <select
                                    id="countries"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>0%</option>
                                    <option value="">0.1%</option>
                                    <option value="">0.25%</option>
                                    <option value="">1%</option>
                                    <option value="">1.5%</option>
                                    <option value="">3%</option>
                                    <option value="">5%</option>
                                    <option value="">6%</option>
                                    <option value="">7.5%</option>
                                    <option value="">12%</option>
                                    <option value="">18%</option>
                                    <option value="">20%</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Supply Type</td>
                            <td>
                                <input
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td className="flex">
                                <button
                                    type="button"
                                    class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
                                >
                                    <Icon icon="uil:edit" />
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
                                >
                                    <Icon icon="material-symbols-light:delete-outline" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Cess</td>
                            <td>
                                <input
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td className="flex">
                                <button
                                    type="button"
                                    class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
                                >
                                    <Icon icon="uil:edit" />
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    class="text-primary focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium mt-3 text-sm px-2  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  "
                                >
                                    <Icon icon="material-symbols-light:delete-outline" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex items-center p-2 md:p-2  border-gray-200 rounded-b dark:border-gray-600">
                    <button
                        data-modal-hide="static-modal"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add
                    </button>
                    <button
                        data-modal-hide="static-modal"
                        type="button"
                        className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                        Bach
                    </button>
                </div>
            </div>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Place of Supply
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rate
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Total Taxable
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Integrated
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Central Tax
                            </th>
                            <th scope="col" class="px-6 py-3">
                                State Tax
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cess
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </>
    );
};

export default Twelve_HSN_Wise;
