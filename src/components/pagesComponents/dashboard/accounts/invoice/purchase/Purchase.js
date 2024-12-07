"use client"
import DashSection from "@/components/pagesComponents/pageLayout/DashSection";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
const formClassName = {
    Label:"text-sm p-1 whitespace-no-wrap",
    Input:"border border-2 rounded-md px-2 py-1 w-full",
}
function CreatePurchase ({invoiceForm}) {
    const {register} = invoiceForm;
    return (
        <DashSection title="Create Purchase" className="mt-4">
            <ul className="mt-4 gap-4 grid sm:grid-cols-2 lg:grid-cols-4 [&>li]:flex [&>li]:flex-col">
                <li>
                    <label
                        className={formClassName.Label}
                        htmlFor="partyName"
                    >
                        Party Name
                    </label>
                    <input
                        className={formClassName.Input}
                        type="text"
                        id="partyName"
                        {...register("partyName")}
                    />
                </li>
                <li>
                    <label
                        className={formClassName.Label}
                        htmlFor="partyAddress"
                    >
                        Party Address
                    </label>
                    <input
                        className={formClassName.Input}
                        type="text"
                        id="partyAddress"
                        {...register("partyAddress")}
                    />
                </li>
                <li>
                    <label
                        className={formClassName.Label}
                        htmlFor="invoiceNumber"
                    >
                        Invoice Number
                    </label>
                    <input
                        className={formClassName.Input}
                        type="text"
                        id="invoiceNumber"
                        {...register("invoiceNumber")}
                    />
                </li>
                <li>
                    <label
                        className={formClassName.Label}
                        htmlFor="invoiceDate"
                    >
                        Invoice Date
                    </label>
                    <input
                        className={formClassName.Input}
                        type="date"
                        id="invoiceDate"
                        {...register("invoiceDate")}
                    />
                </li>
            </ul>
            <ul className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4 [&>li]:flex [&>li]:flex-col">
                <li>
                    <label
                        className={formClassName.Label}
                        htmlFor="phoneNumber"
                    >
                        Phone Number
                    </label>
                    <input
                        className={formClassName.Input}
                        type="text"
                        id="phoneNumber"
                        {...register("phoneNumber")}
                    />
                </li>
                <li>
                    <label className={formClassName.Label} htmlFor="GSTIN">
                        GSTIN
                    </label>
                    <input
                        className={formClassName.Input}
                        type="text"
                        id="GSTIN"
                        {...register("GSTIN")}
                    />
                </li>
                <li>
                    <label className={formClassName.Label} htmlFor="days">
                        Days
                    </label>
                    <input
                        className={`${formClassName.Input} bg-neutral-600/20`}
                        disabled
                        type="text"
                        id="days"
                        {...register("days")}
                    />
                </li>
                <li>
                    <label
                        className={formClassName.Label}
                        htmlFor="invoiceDate"
                    >
                        Invoice Date
                    </label>
                    <input
                        className={formClassName.Input}
                        type="date"
                        id="invoiceDate"
                        {...register("invoiceDate")}
                    />
                </li>
            </ul>
        </DashSection>
	);
}
function AllPurchase() {
    const purchaseData = {
        purchaseTitle:[
            {
                title:"SL. NO.",
            },
            {
                title:"Items",
            },
            {
                title:"QUANTITY",
            },
            {
                title:"UNIT",
            },
            {
                title:"PRICE",
            },
            {
                title:"RATE (INCL. DISCOUNT)",
            },
            {
                title:"DISCOUNT",
            },
            {
                title:"UNIT",
            },
        ],
        purchaseData_body:[
            // {
            //     item_name: "value_from_input",
            //     HSN_code: "value_from_input",
            //     Price: 123.45,
            //     gst_percentage: "selected_option_value",
            //     opening_stock: 50,
            //     unit: "selected_option_value",
            // },
        ]
    };
	return (
        <DashSection title={"ITEMS ON THE Purchase"} className="mt-4">
            <div className="my-4 max-h-96 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
                    <thead className=" sticky -top-0 shadow-md text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
                        <tr className="border-b-2 dark:border-neutral-900">
                            {purchaseData.purchaseTitle.map((item,index)=>
                                <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap" key={index}>{item.title}</th>
                                )}
                            <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {purchaseData.purchaseData_body.map((item,i) => (
                            <tr key={i} className="odd:bg-white odd:dark:bg-neutral-900 even:bg-neutral-50 even:dark:bg-neutral-800 border-b dark:border-neutral-700">
                                <td className="px-6 py-4 font-semibold text-gray-900">{item.item_name}</td>
                                <td className="px-6 py-4">{item.HSN_code}</td>
                                <td className="px-6 py-4">{item.Price}</td>
                                <td className="px-6 py-4">{item.gst_percentage}</td>
                                <td className="px-6 py-4">{item.opening_stock}</td>
                                <td className="px-6 py-4">{item.unit}</td>
                                <td className="px-6 py-4 flex">
                                    <Icon icon="bxs:edit" className=" cursor-pointer hover:text-blue-700 text-xl"/>
                                    <Icon icon="material-symbols:delete" className=" cursor-pointer hover:text-red-700 text-xl"/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {purchaseData.purchaseData_body.length === 0 ? ( 
                <div>
                    <Icon className="w-40 h-24 opacity-5 mx-auto" icon="ph:files-light" />
                    <p className="text-center">No Record Found</p>
                </div>
                ):""}
            </div>
            {purchaseData.purchaseData_body.length === 0 ? (
            <div className=" flex flex-col items-center gap-4 justify-center mb-2">
                <Link href="/">
                    <button type="button" className="btn-primary">
                        add Item
                    </button>
                </Link>
            </div>
            ):""}
            <div className="flex justify-between p-4 bg-neutral-300/20 my-4">
                <div>Sub Total (₹)</div>
                <div>0 (₹)</div>
                <div>0 (₹)</div>
                <div>0 (₹)</div>
            </div>
            <div className=" max-w-xs ml-auto grid grid-cols-2 p-4 bg-neutral-400/20 my-4">
                <div>Total Amount</div>
                <div>0 ₹</div>
                <div>Paid via</div>
                <div>Cash</div>
            </div>
            <div className="text-end px-4">
                <button className="btn-primary" type="submit">create</button>
            </div>
        </DashSection>
	);
}
export default function Purchase() {
    const currentDate = useState(new Date().toISOString().split('T')[0])

    const invoiceForm = useForm({
        defaultValues:{
            partyName:"",
            partyAddress:"",
            invoiceNumber:"",
            invoiceDate: currentDate,
            phoneNumber:"",
            GSTIN:"",
            days:"",
            invoiceDate:currentDate,
        }
    })
    const {handleSubmit} = invoiceForm
    const onCreateInvoice=(formData)=>{
        console.log(formData)
    }
    return (
        <form className="w-full" onSubmit={handleSubmit(onCreateInvoice)}>
            <CreatePurchase invoiceForm={invoiceForm}/>
            <AllPurchase />
        </form>
	);
}
