"use client";
import userAxios from "@/lib/userAxios";
import regex from "@/utils/regex";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const B2B = ({ businessProfile }) => {
    const [legalName, setLegalName] = useState("");
    const [tradeName, setTradeName] = useState("");
    const [taxPType, setTaxPType] = useState("");
    const [gstrTableData, setGstrTableData] = useState([]);
    const [currdata, setCurrData] = useState([]);
    const [posData, setPOSData] = useState("");
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const GstFilterTaxType = businessProfile.response.data.profile.gstin;

    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const showtype = (id) => {
        const crrid = gstrTableData.filter((item) => item.id == id);
        setCurrData(crrid);
        setShow(!show);
        console.log("data", crrid);
    };
    const showtypeEdit = (id) => {
        // setCurrData(crrid);
        setShowEdit(!showEdit);
        // console.log("data", id);
        handleB2bUpdate(id);
    };
    const handleGSTR = async (value) => {
        const splits = value.slice(0, 2);
        setPOSData(splits);

        await userAxios
            .get(`/gst/search/gstin/${value}`)
            .then(function (response) {
                setTaxPType(response.data.data.data.dty);
                setTradeName(response.data.data.data.tradeNam);
                setLegalName(response.data.data.data.lgnm);
                console.log(response.data.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const handlePos = (e) => {
        setPOSData(e.target.value);
    };

    useEffect(() => {
        userAxios
            .get(`/gstr1/4a-getall`)
            .then(function (response) {
                console.log(response.data.data);
                setGstrTableData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleB2bSubmit = async () => {
        await userAxios
            .post(`/gstr1/4a-create`, {
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
            <div className="p-2  space-y-4">
                <form
                    onSubmit={handleSubmit(handleB2bSubmit)}
                    className="max-w-lg mx-auto grid grid-cols-3 gap-4"
                >
                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            GSTIN
                        </label>
                        <input
                            type="text"
                            maxLength="15"
                            {...register("gstr", {
                                onChange: (e) => handleGSTR(e.target.value),
                                pattern: {
                                    value: regex.GSTIN,
                                    message: "Please enter a valid GST No.",
                                },
                                required: "GST Number is required",
                            })}
                            id="small-input"
                            className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <p className=" -text--clr-accent-250 h-4 text-xs italic">
                            {errors.gstr && errors.gstr.message}
                        </p>
                    </div>
                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            POS
                        </label>

                        <select
                            id="pos"
                            onChange={(e) => handlePos(e)}
                            className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {posData === "01" ? (
                                <option selected value="01 Jammu And Kashmir">
                                    01 Jammu And Kashmir
                                </option>
                            ) : (
                                <option value=" 01 Jammu And Kashmir">
                                    01 Jammu And Kashmir
                                </option>
                            )}
                            {posData === "37" ? (
                                <option selected value=" 37 Andhra Pradesh">
                                    37 Andhra Pradesh
                                </option>
                            ) : (
                                <option value=" 37 Andhra Pradesh">
                                    37 Andhra Pradesh
                                </option>
                            )}
                            {posData === "12" ? (
                                <option selected value=" 12 Anranchal Pradesh">
                                    12 Anranchal Pradesh
                                </option>
                            ) : (
                                <option value=" 12 Anranchal Pradesh">
                                    12 Anranchal Pradesh
                                </option>
                            )}
                            {posData === "18" ? (
                                <option selected value="18 Assam">
                                    18 Assam
                                </option>
                            ) : (
                                <option value="18 Assam">18 Assam</option>
                            )}
                            {posData === "10" ? (
                                <option selected value="10 Bihar">
                                    10 Bihar
                                </option>
                            ) : (
                                <option value="10 Bihar">10 Bihar</option>
                            )}
                            {posData === "22" ? (
                                <option selected value="22 Chhattisgarh">
                                    22 Chhattisgarh
                                </option>
                            ) : (
                                <option value="22 Chhattisgarh">
                                    22 Chhattisgarh
                                </option>
                            )}
                            {posData === "30" ? (
                                <option selected value="30 Goa">
                                    30 Goa
                                </option>
                            ) : (
                                <option value="30 Goa">30 Goa</option>
                            )}
                            {posData === "24" ? (
                                <option selected value="24 Gujarat">
                                    24 Gujarat
                                </option>
                            ) : (
                                <option value="24 Gujarat">24 Gujarat</option>
                            )}
                            {posData === "06" ? (
                                <option selected value="06 Haryana">
                                    06 Haryana
                                </option>
                            ) : (
                                <option value="06 Haryana">06 Haryana</option>
                            )}
                            {posData === "02" ? (
                                <option selected value="02 Himanchal Pradesh">
                                    02 Himanchal Pradesh
                                </option>
                            ) : (
                                <option value="02 Himanchal Pradesh">
                                    02 Himanchal Pradesh
                                </option>
                            )}
                            {posData === "20" ? (
                                <option selected value="20 Jharkhand">
                                    20 Jharkhand
                                </option>
                            ) : (
                                <option value="20 Jharkhand">
                                    20 Jharkhand
                                </option>
                            )}
                            {posData === "29" ? (
                                <option selected value="29 Karnataka">
                                    29 Karnataka
                                </option>
                            ) : (
                                <option value="29 Karnataka">
                                    29 Karnataka
                                </option>
                            )}
                            {posData === "32" ? (
                                <option selected value="32 Kerala">
                                    32 Kerala
                                </option>
                            ) : (
                                <option value="32 Kerala">32 Kerala</option>
                            )}

                            {posData === "23" ? (
                                <option selected value="23 Madhya Pradesh">
                                    23 Madhya Pradesh
                                </option>
                            ) : (
                                <option value="23 Madhya Pradesh">
                                    23 Madhya Pradesh
                                </option>
                            )}
                            {posData === "12" ? (
                                <option selected value="12 Anranchal Pradesh">
                                    12 Anranchal Pradesh
                                </option>
                            ) : (
                                <option value="12 Anranchal Pradesh">
                                    12 Anranchal Pradesh
                                </option>
                            )}
                            {posData === "27" ? (
                                <option selected value="27 Maharashtra">
                                    27 Maharashtra
                                </option>
                            ) : (
                                <option value="27 Maharashtra">
                                    27 Maharashtra
                                </option>
                            )}
                            {posData === "14" ? (
                                <option selected value="14 Manipur">
                                    14 Manipur
                                </option>
                            ) : (
                                <option value="14 Manipur">14 Manipur</option>
                            )}
                            {posData === "17" ? (
                                <option selected value="17 Meghalaya">
                                    17 Meghalaya
                                </option>
                            ) : (
                                <option value="17 Meghalaya">
                                    17 Meghalaya
                                </option>
                            )}
                            {posData === "15" ? (
                                <option selected value="15 Mizoram">
                                    15 Mizoram
                                </option>
                            ) : (
                                <option value="15 Mizoram">15 Mizoram</option>
                            )}
                            {posData === "13" ? (
                                <option selected value="13 Nagaland">
                                    {" "}
                                    13 Nagaland
                                </option>
                            ) : (
                                <option value="13 Nagaland">
                                    {" "}
                                    13 Nagaland
                                </option>
                            )}
                            {posData === "21" ? (
                                <option selected value="21 Odisha">
                                    {" "}
                                    21 Odisha
                                </option>
                            ) : (
                                <option value="21 Odisha"> 21 Odisha</option>
                            )}
                            {posData === "03" ? (
                                <option selected value="03 Punjab">
                                    {" "}
                                    03 Punjab
                                </option>
                            ) : (
                                <option value="03 Punjab"> 03 Punjab</option>
                            )}
                            {posData === "08" ? (
                                <option selected value="08 Rajasthan">
                                    {" "}
                                    08 Rajasthan
                                </option>
                            ) : (
                                <option value="08 Rajasthan">
                                    {" "}
                                    08 Rajasthan
                                </option>
                            )}
                            {posData === "11" ? (
                                <option selected value="11 Sikkim">
                                    {" "}
                                    11 Sikkim
                                </option>
                            ) : (
                                <option value="11 Sikkim"> 11 Sikkim</option>
                            )}
                            {posData === "33" ? (
                                <option selected value="33 Tamil Nadu">
                                    {" "}
                                    33 Tamil Nadu
                                </option>
                            ) : (
                                <option value="33 Tamil Nadu">
                                    {" "}
                                    33 Tamil Nadu
                                </option>
                            )}

                            {posData === "36" ? (
                                <option selected value="36 Telangana">
                                    {" "}
                                    36 Telangana
                                </option>
                            ) : (
                                <option value="36 Telangana">
                                    {" "}
                                    36 Telangana
                                </option>
                            )}

                            {posData === "16" ? (
                                <option selected value="16 Tripura">
                                    {" "}
                                    16 Tripura
                                </option>
                            ) : (
                                <option value="16 Tripura"> 16 Tripura</option>
                            )}

                            {posData === "09" ? (
                                <option selected value="09 Uttar Pradesh">
                                    {" "}
                                    09 Uttar Pradesh
                                </option>
                            ) : (
                                <option value="09 Uttar Pradesh">
                                    {" "}
                                    09 Uttar Pradesh
                                </option>
                            )}
                            {posData === "05" ? (
                                <option selected value="05 Uttarakhand">
                                    {" "}
                                    05 Uttarakhand
                                </option>
                            ) : (
                                <option value="05 Uttarakhand">
                                    {" "}
                                    05 Uttarakhand
                                </option>
                            )}
                            {posData === "19" ? (
                                <option selected value=" 19 West Bengal">
                                    {" "}
                                    19 West Bengal
                                </option>
                            ) : (
                                <option value=" 19 West Bengal">
                                    {" "}
                                    19 West Bengal
                                </option>
                            )}
                            {posData === "35" ? (
                                <option
                                    selected
                                    value="35 Andaman and Nicobar Island"
                                >
                                    {" "}
                                    35 Andaman and Nicobar Island
                                </option>
                            ) : (
                                <option value="35 Andaman and Nicobar Island">
                                    {" "}
                                    35 Andaman and Nicobar Island
                                </option>
                            )}
                            {posData === "04" ? (
                                <option selected value="04 Chandigarh">
                                    {" "}
                                    04 Chandigarh
                                </option>
                            ) : (
                                <option value="04 Chandigarh">
                                    {" "}
                                    04 Chandigarh
                                </option>
                            )}
                            {posData === "26" ? (
                                <option
                                    selected
                                    value="26 Dadar and Nagar Haveli Daman And
                                        Diu"
                                >
                                    26 Dadar and Nagar Haveli Daman And Diu
                                </option>
                            ) : (
                                <option
                                    value="26 Dadar and Nagar Haveli Daman And
                                        Diu"
                                >
                                    26 Dadar and Nagar Haveli Daman And Diu
                                </option>
                            )}
                            {posData === "31" ? (
                                <option selected value="31 Lakshadweep">
                                    {" "}
                                    31 Lakshadweep
                                </option>
                            ) : (
                                <option value="31 Lakshadweep">
                                    {" "}
                                    31 Lakshadweep
                                </option>
                            )}
                            {posData === "07" ? (
                                <option selected value="07 Delhi">
                                    {" "}
                                    07 Delhi
                                </option>
                            ) : (
                                <option value="07 Delhi"> 07 Delhi</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Invoice No.
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            {...register("invoiceno")}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Invoice Date.
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            {...register("invoicedate")}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Invoice Value
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            {...register("invoicevalue")}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    {getValues("gstr") === GstFilterTaxType && (
                        <>
                            <div>
                                <label
                                    htmlFor="small-input"
                                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    CGST
                                </label>
                                <input
                                    type="text"
                                    id="small-input"
                                    {...register("cgst")}
                                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="small-input"
                                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    SGST
                                </label>
                                <input
                                    type="text"
                                    id="small-input"
                                    {...register("sgst")}
                                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </>
                    )}

                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Rate
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            {...register("rate")}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nature
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            {...register("nature")}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Source
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            {...register("source")}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="small-input"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Supply Type
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            {...register("supplytype")}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center p-2 md:p-2 border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            data-modal-hide="static-modal"
                            type="submit"
                            className="btn-primary"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
            {/* Table  */}

            <div className="">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-white  bg-primary dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Recipient
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Trade Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Taxpayer Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Processed Records
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pending/Errored
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gstrTableData.map((gstTable, i) => (
                                <tr key={i}>
                                    <td>{gstTable.id}</td>
                                    <td>{gstTable.LegalName}</td>
                                    <td></td>
                                    <td>{gstTable.taxpayer_type}</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button
                                            type="button"
                                            class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            onClick={() =>
                                                showtype(gstTable.id)
                                            }
                                        >
                                            <Icon icon="carbon:view-filled" />
                                            View
                                        </button>
                                        <button
                                            onClick={() =>
                                                showtypeEdit(gstTable.id)
                                            }
                                            type="button"
                                            class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-green-700  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            <Icon icon="uil:edit" />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                deleteRecord(gstTable.id)
                                            }
                                            type="button"
                                            class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-700  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                        >
                                            <Icon icon="material-symbols-light:delete-outline" />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* view model */}
            <div
                id="static-modal"
                data-modal-backdrop="static"
                tabIndex={-1}
                aria-hidden="true"
                className={
                    show === true
                        ? "  overflow-y-auto backdrop-blur-sm bg-black/30 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                        : "hidden  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                }
            >
                <div className="relative m-auto  p-4 ">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t dark:border-gray-600">
                            <button type="button" class="btn-primary">
                                Download
                            </button>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="static-modal"
                                onClick={showtype}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close </span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-2 space-y-4">
                            {currdata.map((element) => {
                                return (
                                    <>
                                        <div className="">
                                            <table className="table text-left border-collapse border border-gray-300 ">
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-gray-300  ">
                                                            Id
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            GSTIN
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Legal Name
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Invoice No
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Invoice Date
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Invoice Value
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            POS
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Rate
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Sgst
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Source
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Supplt Type
                                                        </td>
                                                        <td className="border border-gray-300  ">
                                                            Taxpayer Type
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 ">
                                                            {element.id}
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {element.GSTN}
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {element.LegalName}
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {element.invoice_No}
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {
                                                                element.invoice_date
                                                            }
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {
                                                                element.invoice_value
                                                            }
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {element.pos}
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {element.rate}
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {element.sgst}
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {element.source}
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {
                                                                element.supply_type
                                                            }
                                                        </td>
                                                        <td className="border border-gray-300 ">
                                                            {
                                                                element.taxpayer_type
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* edit modal */}
            <div
                id="static-modal2"
                data-modal-backdrop="static"
                tabIndex={-1}
                aria-hidden="true"
                className={
                    showEdit === true
                        ? "  overflow-y-auto backdrop-blur-sm bg-black/30 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                        : "hidden  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                }
            >
                <div className="relative m-auto  p-4 ">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t dark:border-gray-600">
                            <button type="button" class="btn-primary">
                                Download
                            </button>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="static-modal"
                                onClick={showtypeEdit}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close </span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-2 space-y-4">
                            <form
                                onSubmit={handleSubmit(handleB2bUpdate)}
                                className="max-w-lg mx-auto grid grid-cols-3 gap-4"
                            >
                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        GSTIN
                                    </label>
                                    <input
                                        type="text"
                                        maxLength="15"
                                        {...register("gstr", {
                                            onChange: (e) =>
                                                handleGSTR(e.target.value),
                                            pattern: {
                                                value: regex.GSTIN,
                                                message:
                                                    "Please enter a valid GST No.",
                                            },
                                            required: "GST Number is required",
                                        })}
                                        id="small-input"
                                        className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <p className=" -text--clr-accent-250 h-4 text-xs italic">
                                        {errors.gstr && errors.gstr.message}
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        POS
                                    </label>

                                    <select
                                        id="pos"
                                        onChange={(e) => handlePos(e)}
                                        className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        {posData === "01" ? (
                                            <option
                                                selected
                                                value="01 Jammu And Kashmir"
                                            >
                                                01 Jammu And Kashmir
                                            </option>
                                        ) : (
                                            <option value=" 01 Jammu And Kashmir">
                                                01 Jammu And Kashmir
                                            </option>
                                        )}
                                        {posData === "37" ? (
                                            <option
                                                selected
                                                value=" 37 Andhra Pradesh"
                                            >
                                                37 Andhra Pradesh
                                            </option>
                                        ) : (
                                            <option value=" 37 Andhra Pradesh">
                                                37 Andhra Pradesh
                                            </option>
                                        )}
                                        {posData === "12" ? (
                                            <option
                                                selected
                                                value=" 12 Anranchal Pradesh"
                                            >
                                                12 Anranchal Pradesh
                                            </option>
                                        ) : (
                                            <option value=" 12 Anranchal Pradesh">
                                                12 Anranchal Pradesh
                                            </option>
                                        )}
                                        {posData === "18" ? (
                                            <option selected value="18 Assam">
                                                18 Assam
                                            </option>
                                        ) : (
                                            <option value="18 Assam">
                                                18 Assam
                                            </option>
                                        )}
                                        {posData === "10" ? (
                                            <option selected value="10 Bihar">
                                                10 Bihar
                                            </option>
                                        ) : (
                                            <option value="10 Bihar">
                                                10 Bihar
                                            </option>
                                        )}
                                        {posData === "22" ? (
                                            <option
                                                selected
                                                value="22 Chhattisgarh"
                                            >
                                                22 Chhattisgarh
                                            </option>
                                        ) : (
                                            <option value="22 Chhattisgarh">
                                                22 Chhattisgarh
                                            </option>
                                        )}
                                        {posData === "30" ? (
                                            <option selected value="30 Goa">
                                                30 Goa
                                            </option>
                                        ) : (
                                            <option value="30 Goa">
                                                30 Goa
                                            </option>
                                        )}
                                        {posData === "24" ? (
                                            <option selected value="24 Gujarat">
                                                24 Gujarat
                                            </option>
                                        ) : (
                                            <option value="24 Gujarat">
                                                24 Gujarat
                                            </option>
                                        )}
                                        {posData === "06" ? (
                                            <option selected value="06 Haryana">
                                                06 Haryana
                                            </option>
                                        ) : (
                                            <option value="06 Haryana">
                                                06 Haryana
                                            </option>
                                        )}
                                        {posData === "02" ? (
                                            <option
                                                selected
                                                value="02 Himanchal Pradesh"
                                            >
                                                02 Himanchal Pradesh
                                            </option>
                                        ) : (
                                            <option value="02 Himanchal Pradesh">
                                                02 Himanchal Pradesh
                                            </option>
                                        )}
                                        {posData === "20" ? (
                                            <option
                                                selected
                                                value="20 Jharkhand"
                                            >
                                                20 Jharkhand
                                            </option>
                                        ) : (
                                            <option value="20 Jharkhand">
                                                20 Jharkhand
                                            </option>
                                        )}
                                        {posData === "29" ? (
                                            <option
                                                selected
                                                value="29 Karnataka"
                                            >
                                                29 Karnataka
                                            </option>
                                        ) : (
                                            <option value="29 Karnataka">
                                                29 Karnataka
                                            </option>
                                        )}
                                        {posData === "32" ? (
                                            <option selected value="32 Kerala">
                                                32 Kerala
                                            </option>
                                        ) : (
                                            <option value="32 Kerala">
                                                32 Kerala
                                            </option>
                                        )}

                                        {posData === "23" ? (
                                            <option
                                                selected
                                                value="23 Madhya Pradesh"
                                            >
                                                23 Madhya Pradesh
                                            </option>
                                        ) : (
                                            <option value="23 Madhya Pradesh">
                                                23 Madhya Pradesh
                                            </option>
                                        )}
                                        {posData === "12" ? (
                                            <option
                                                selected
                                                value="12 Anranchal Pradesh"
                                            >
                                                12 Anranchal Pradesh
                                            </option>
                                        ) : (
                                            <option value="12 Anranchal Pradesh">
                                                12 Anranchal Pradesh
                                            </option>
                                        )}
                                        {posData === "27" ? (
                                            <option
                                                selected
                                                value="27 Maharashtra"
                                            >
                                                27 Maharashtra
                                            </option>
                                        ) : (
                                            <option value="27 Maharashtra">
                                                27 Maharashtra
                                            </option>
                                        )}
                                        {posData === "14" ? (
                                            <option selected value="14 Manipur">
                                                14 Manipur
                                            </option>
                                        ) : (
                                            <option value="14 Manipur">
                                                14 Manipur
                                            </option>
                                        )}
                                        {posData === "17" ? (
                                            <option
                                                selected
                                                value="17 Meghalaya"
                                            >
                                                17 Meghalaya
                                            </option>
                                        ) : (
                                            <option value="17 Meghalaya">
                                                17 Meghalaya
                                            </option>
                                        )}
                                        {posData === "15" ? (
                                            <option selected value="15 Mizoram">
                                                15 Mizoram
                                            </option>
                                        ) : (
                                            <option value="15 Mizoram">
                                                15 Mizoram
                                            </option>
                                        )}
                                        {posData === "13" ? (
                                            <option
                                                selected
                                                value="13 Nagaland"
                                            >
                                                {" "}
                                                13 Nagaland
                                            </option>
                                        ) : (
                                            <option value="13 Nagaland">
                                                {" "}
                                                13 Nagaland
                                            </option>
                                        )}
                                        {posData === "21" ? (
                                            <option selected value="21 Odisha">
                                                {" "}
                                                21 Odisha
                                            </option>
                                        ) : (
                                            <option value="21 Odisha">
                                                {" "}
                                                21 Odisha
                                            </option>
                                        )}
                                        {posData === "03" ? (
                                            <option selected value="03 Punjab">
                                                {" "}
                                                03 Punjab
                                            </option>
                                        ) : (
                                            <option value="03 Punjab">
                                                {" "}
                                                03 Punjab
                                            </option>
                                        )}
                                        {posData === "08" ? (
                                            <option
                                                selected
                                                value="08 Rajasthan"
                                            >
                                                {" "}
                                                08 Rajasthan
                                            </option>
                                        ) : (
                                            <option value="08 Rajasthan">
                                                {" "}
                                                08 Rajasthan
                                            </option>
                                        )}
                                        {posData === "11" ? (
                                            <option selected value="11 Sikkim">
                                                {" "}
                                                11 Sikkim
                                            </option>
                                        ) : (
                                            <option value="11 Sikkim">
                                                {" "}
                                                11 Sikkim
                                            </option>
                                        )}
                                        {posData === "33" ? (
                                            <option
                                                selected
                                                value="33 Tamil Nadu"
                                            >
                                                {" "}
                                                33 Tamil Nadu
                                            </option>
                                        ) : (
                                            <option value="33 Tamil Nadu">
                                                {" "}
                                                33 Tamil Nadu
                                            </option>
                                        )}

                                        {posData === "36" ? (
                                            <option
                                                selected
                                                value="36 Telangana"
                                            >
                                                {" "}
                                                36 Telangana
                                            </option>
                                        ) : (
                                            <option value="36 Telangana">
                                                {" "}
                                                36 Telangana
                                            </option>
                                        )}

                                        {posData === "16" ? (
                                            <option selected value="16 Tripura">
                                                {" "}
                                                16 Tripura
                                            </option>
                                        ) : (
                                            <option value="16 Tripura">
                                                {" "}
                                                16 Tripura
                                            </option>
                                        )}

                                        {posData === "09" ? (
                                            <option
                                                selected
                                                value="09 Uttar Pradesh"
                                            >
                                                {" "}
                                                09 Uttar Pradesh
                                            </option>
                                        ) : (
                                            <option value="09 Uttar Pradesh">
                                                {" "}
                                                09 Uttar Pradesh
                                            </option>
                                        )}
                                        {posData === "05" ? (
                                            <option
                                                selected
                                                value="05 Uttarakhand"
                                            >
                                                {" "}
                                                05 Uttarakhand
                                            </option>
                                        ) : (
                                            <option value="05 Uttarakhand">
                                                {" "}
                                                05 Uttarakhand
                                            </option>
                                        )}
                                        {posData === "19" ? (
                                            <option
                                                selected
                                                value=" 19 West Bengal"
                                            >
                                                {" "}
                                                19 West Bengal
                                            </option>
                                        ) : (
                                            <option value=" 19 West Bengal">
                                                {" "}
                                                19 West Bengal
                                            </option>
                                        )}
                                        {posData === "35" ? (
                                            <option
                                                selected
                                                value="35 Andaman and Nicobar Island"
                                            >
                                                {" "}
                                                35 Andaman and Nicobar Island
                                            </option>
                                        ) : (
                                            <option value="35 Andaman and Nicobar Island">
                                                {" "}
                                                35 Andaman and Nicobar Island
                                            </option>
                                        )}
                                        {posData === "04" ? (
                                            <option
                                                selected
                                                value="04 Chandigarh"
                                            >
                                                {" "}
                                                04 Chandigarh
                                            </option>
                                        ) : (
                                            <option value="04 Chandigarh">
                                                {" "}
                                                04 Chandigarh
                                            </option>
                                        )}
                                        {posData === "26" ? (
                                            <option
                                                selected
                                                value="26 Dadar and Nagar Haveli Daman And
                                        Diu"
                                            >
                                                26 Dadar and Nagar Haveli Daman
                                                And Diu
                                            </option>
                                        ) : (
                                            <option
                                                value="26 Dadar and Nagar Haveli Daman And
                                        Diu"
                                            >
                                                26 Dadar and Nagar Haveli Daman
                                                And Diu
                                            </option>
                                        )}
                                        {posData === "31" ? (
                                            <option
                                                selected
                                                value="31 Lakshadweep"
                                            >
                                                {" "}
                                                31 Lakshadweep
                                            </option>
                                        ) : (
                                            <option value="31 Lakshadweep">
                                                {" "}
                                                31 Lakshadweep
                                            </option>
                                        )}
                                        {posData === "07" ? (
                                            <option selected value="07 Delhi">
                                                {" "}
                                                07 Delhi
                                            </option>
                                        ) : (
                                            <option value="07 Delhi">
                                                {" "}
                                                07 Delhi
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Invoice No.
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        {...register("invoiceno")}
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Invoice Date.
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        {...register("invoicedate")}
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Invoice Value
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        {...register("invoicevalue")}
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                {getValues("gstr") === GstFilterTaxType && (
                                    <>
                                        <div>
                                            <label
                                                htmlFor="small-input"
                                                className="block  text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                CGST
                                            </label>
                                            <input
                                                type="text"
                                                id="small-input"
                                                {...register("cgst")}
                                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="small-input"
                                                className="block  text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                SGST
                                            </label>
                                            <input
                                                type="text"
                                                id="small-input"
                                                {...register("sgst")}
                                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                    </>
                                )}

                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Rate
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        {...register("rate")}
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Nature
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        {...register("nature")}
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Source
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        {...register("source")}
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="small-input"
                                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Supply Type
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        {...register("supplytype")}
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex items-center p-2 md:p-2 border-gray-200 rounded-b dark:border-gray-600">
                                    <button
                                        data-modal-hide="static-modal"
                                        type="submit"
                                        className="btn-primary"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default B2B;
