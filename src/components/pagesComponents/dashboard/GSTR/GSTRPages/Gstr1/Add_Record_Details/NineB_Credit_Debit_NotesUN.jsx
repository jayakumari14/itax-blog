"use client";
import { useForm } from "react-hook-form";
import userAxios from "@/lib/userAxios";
import { Icon } from "@iconify/react";

const NineB_Credit_Debit_NotesUN = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handle9BUNSubmit = (data) => {
        userAxios
            .post(`/gstr1/9create`, {
                type: "sudhir",
                debit_credit_note_no: "1234",
                debit_credit_note_date: "122",
                state_tax: "222",
                note_type: "122",
                supply_type: "122",
                item_details: "125",
                select_rate: "124",
                note_values: "125",
                state_tax_rs: "111",
                central_tax_rs: "111",
                cess: "1111",
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
        <form
            onSubmit={handleSubmit(handle9BUNSubmit)}
            className="p-2 md:px-80 space-y-4"
        >
            <p>GSTN:-</p>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    <div className="grid grid-cols-2"></div>
                    <tr>
                        <td className="px-6 py-3"> Type</td>
                        <td>
                            <select
                                {...register("type")}
                                id="note type"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>B2CL</option>
                                <option>Exports With Payment</option>
                                <option>Export Without Payment</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Debit/Credit Note No.</td>
                        <td>
                            <input
                                {...register("debit_credit_note_no ")}
                                type="text"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Debit/Credit Note date</td>
                        <td>
                            <input
                                {...register("debit_credit_note_date  ")}
                                type="date"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="px-6 py-3">State Tax</td>
                        <td>
                            <input
                                {...register("state_tax ")}
                                type="text"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Note Type</td>
                        <td>
                            <select
                                {...register("note_type  ")}
                                id="note type"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Credit</option>
                                <option>Debit</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Supply Type</td>
                        <td>
                            <input
                                {...register("supply_type")}
                                type="text"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Item Details</td>
                        <td>
                            <input
                                {...register("item_details")}
                                type="text"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Select Rate (%)</td>
                        <td>
                            <select
                                {...register("select_rate")}
                                id="note type"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>0%</option>
                                <option>0.1%</option>
                                <option>0.25%</option>
                                <option>1%</option>
                                <option>1.5%</option>
                                <option>3%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7.5%</option>
                                <option>12%</option>
                                <option>18%</option>
                                <option>28%</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Note Value</td>
                        <td>
                            <input
                                {...register("note_value ")}
                                type="text"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">State Tax ₹</td>
                        <td>
                            <input
                                {...register("state_tax_rs ")}
                                type="text"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Central Tax ₹</td>
                        <td>
                            <input
                                {...register("central_tax_rs")}
                                type="text"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Cess ₹</td>
                        <td>
                            <input
                                {...register("cess")}
                                type="text"
                                id="base-input"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex items-center p-2 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                    data-modal-hide="static-modal"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default NineB_Credit_Debit_NotesUN;
