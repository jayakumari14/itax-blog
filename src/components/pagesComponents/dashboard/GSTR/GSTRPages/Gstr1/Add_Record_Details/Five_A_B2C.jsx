"use client";
import userAxios from "@/lib/userAxios";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Five_A_B2C = () => {
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

    //   useEffect(() => {
    //     userAxios
    //         .get(`/gstr1/4a-getall`)
    //         .then(function (response) {
    //             console.log(response.data.data[0]);
    //             setGstrTableData(response.data.data[0]);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }, [activetav]);
    useEffect(() => {
        userAxios
            .get(`/gstr1/5a-getall`)
            .then(function (response) {
                console.log(response.data.data);
                // setGstrTableData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handle5B2CSubmit = (data) => {
        userAxios
            .post(`/gstr1/5a-create`, {
                pos: getValues("pos"),
                invoice_No: getValues("invoiceno"),
                supply_type: getValues("supplytype"),
                invoice_date: getValues("inovicedate"),
                invoice_value: getValues("invoicevalue"),
                total_invoice_value: getValues("totalinvoiceval"),
                gstr1_5A_items: [
                    {
                        tax_rate: "0%",
                        Ammmout_of_tax: getValues("0Amountoftax"),
                        Igst: getValues("0Igst"),
                        cess: getValues("0Cess"),
                    },
                    {
                        tax_rate: "11%",
                        Ammmout_of_tax: getValues("11Amountoftax"),
                        Igst: getValues("11Igst"),
                        cess: getValues("11Cess"),
                    },
                    {
                        tax_rate: "10%",
                        Ammmout_of_tax: getValues("10Amountoftax"),
                        Igst: getValues("10Igst"),
                        cess: getValues("10Cess"),
                    },
                    {
                        tax_rate: "01%",
                        Ammmout_of_tax: getValues("01Amountoftax"),
                        Igst: getValues("01Igst"),
                        cess: getValues("01Cess"),
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
    const handleB2bUpdate = async (id) => {
        // console.log("editupdate", id);
        await userAxios
            .post(`/gstr1/4a-update/${id}`, {
                LegalName: legalName,
                GSTN: getValues("gstr"),
                pos: posData,
                invoice_No: getValues("invoiceno"),
                invoice_date: getValues("invoicedate"),
                invoice_value: getValues("invoicevalue"),
                rate: "1200",
                nature: "dsdfds",
                source: "fsdfd",
                cgst: "fsdfds",
                sgst: "ghfg",
                igst: "fgh",
                supply_type: "hgfhg",
                fy: "gdg",
                period: "dfsd",
                taxpayer_type: taxPType,
                processed_records: "",
                status: "",
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const deleteRecord = async (id) => {
        await userAxios
            .delete(`/gstr1/ID/${id}`)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(handle5B2CSubmit)}
                className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 "
            >
                <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
                    {/* <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Sr No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                1
                            </th>
                        </tr>
                    </thead> */}
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
                                    <option value="12 Anranchal Pradesh">
                                        12 Anranchal Pradesh{" "}
                                    </option>
                                    <option value="18 Assam">18 Assam</option>
                                    <option value="10 Bihar">10 Bihar</option>
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
                            <td className="px-6 py-3">Invoice Date</td>
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
                                Amount Of Tax
                            </th>
                            <th scope="col" class="px-6 py-3">
                                IGST
                            </th>
                            <th scope="col" class="px-6 py-3">
                                CESS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-3">0%</td>
                            <td>
                                <input
                                    {...register("0Amountoftax")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("0Igst")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("0Cess")}
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
                                    {...register("1Amountoftax")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("1Igst")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("1Cess")}
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
                                    {...register("2Amountoftax")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("2Igst")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("2Cess")}
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
                                    {...register("5Amountoftax")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("5Igst")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                            <td>
                                <input
                                    {...register("5Cess")}
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
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add
                    </button>
                </div>
            </form>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Sr no.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Invoice no.
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Total Invoice Val
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Taxable Val
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Integrated tax
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
                            <td>
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

export default Five_A_B2C;
