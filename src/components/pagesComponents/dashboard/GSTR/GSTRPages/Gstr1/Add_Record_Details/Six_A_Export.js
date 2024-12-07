"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import userAxios from "@/lib/userAxios";

const Six_A_Export = () => {
    const [activetav, setActiveTab] = useState(1);
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleTab = (e) => {
        setActiveTab(e);
    };

    const handle6ASubmit = (data) => {
        userAxios
            .post(`/gstr1/6a-create`, {
                sr_no: "sr_no",
                pos: "123",
                invoice_no: "123",
                supply_type: "new",
                invoice_data: "123",
                total_taxable_value: "123",
                invoice_value: "invoice_value",
                total_value: "12",
                gst_payement: "gst_payement",
                integarted_tax: "integrated_tax",
                cess: "cess",
                gstr1_6A_items: [
                    {
                        pecentage: "0%",
                        integrated_value: getValues("0iValue"),
                        cgst: getValues("0cValue"),
                        sgst: getValues("0sValue"),
                    },
                    {
                        pecentage: "1%",
                        integrated_value: getValues("1iValue"),
                        cgst: getValues("1cValue"),
                        sgst: getValues("1sValue"),
                    },
                    {
                        pecentage: "2%",
                        integrated_value: getValues("2iValue"),
                        cgst: getValues("2cValue"),
                        sgst: getValues("2sValue"),
                    },
                    {
                        pecentage: "5%",
                        integrated_value: getValues("5iValue"),
                        cgst: getValues("5cValue"),
                        sgst: getValues("5sValue"),
                    },
                ],
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("data+", data);
    };

    return (
        <>
            <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr>
                            <td className="px-6 py-3">POS</td>
                            <td>
                                <select
                                    {...register("pos")}
                                    id="pos"
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
                            <td className="px-6 py-3">Invoice No.</td>
                            <td>
                                <input
                                    {...register("invoiceno.")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Supply Type</td>
                            <td>
                                <input
                                    {...register("supplytype")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Invoice Data</td>
                            <td>
                                <input
                                    {...register("inovicedate")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Invoice Value</td>
                            <td>
                                <input
                                    {...register("invoicevalue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Total Invoice Val</td>
                            <td>
                                <input
                                    {...register("totalinvoiceval")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Tax Rate
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Integrated
                            </th>
                            <th scope="col" class="px-6 py-3">
                                CGST
                            </th>
                            <th scope="col" class="px-6 py-3">
                                SGST
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-3">0%</td>
                            <td>
                                <input
                                    {...register("0iValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("0cValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("0sValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">1%</td>
                            <td>
                                <input
                                    {...register("1iValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("1cValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("1sValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">2%</td>
                            <td>
                                <input
                                    {...register("2iValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("2cValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("2sValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">5%</td>
                            <td>
                                <input
                                    {...register("5iValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("5cValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("5sValue")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Total</td>
                            <td>
                                <input
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
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
                </div>
            </div>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs  uppercase bg-primary text-white dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Sr no.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Invoice no.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Invoice data
                            </th>
                            <th scope="col" class="px-6 py-3">
                                GST Payment
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Invoice Val
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Taxable Val
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Integrate Tax
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cess
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="flex ">
                                <button
                                    type="button"
                                    class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <Icon icon="carbon:view-filled" />
                                    View
                                </button>
                                <button
                                    type="button"
                                    class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-green-700  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    <Icon icon="uil:edit" />
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-700  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                >
                                    <Icon icon="material-symbols-light:delete-outline" />
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Six_A_Export;
