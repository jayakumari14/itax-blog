"use client"
import { useForm } from "react-hook-form";
import Link from "next/link";
import BackButton from "../../../BackButton";
import { useState } from "react";
import { Icon } from "@iconify/react";
const indianStates = [
	'Andhra Pradesh',
	'Arunachal Pradesh',
	'Assam',
	'Bihar',
	'Chhattisgarh',
	'Goa',
	'Gujarat',
	'Haryana',
	'Himachal Pradesh',
	'Jharkhand',
	'Karnataka',
	'Kerala',
	'Madhya Pradesh',
	'Maharashtra',
	'Manipur',
	'Meghalaya',
	'Mizoram',
	'Nagaland',
	'Odisha',
	'Punjab',
	'Rajasthan',
	'Sikkim',
	'Tamil Nadu',
	'Telangana',
	'Tripura',
	'Uttar Pradesh',
	'Uttarakhand',
	'West Bengal'
];
let totalItems =0
export default function ReturnPurchase() {
    const { handleSubmit, register,watch} =useForm()
    const [ItemsData,setItemsData]=useState([])
    const onCreatePurchase = (data) => {

    }
    const handleAddItem = ()=>{
        totalItems++
        setItemsData((prev)=>{
            return[
                ...prev,
                {
                    itemName:"",
                    price:0,
                    quantity:0,
                    discount:0,
                    gst:0,
                    total:0,
                    id:totalItems
                },
            ]
        })
    }
    const handleDelete = (id) => {
        setItemsData((prev) => prev.filter((item) => item.id !== id));
    };
    const formClassNames={
        label:"block mb-2 text-sm font-medium text-gray-950/90 dark:text-white",
        input:"bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        button:"w-full text-center mt-4 focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 ",
        gridUL:"grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4",
        formSectionTitle:"text-lg mt-4 font-semibold text-gray-600 dark:text-gray-300",
    }
	return (
        <>
            <BackButton title="Create Purchase Return"/>
            <section className="p-4 max-w-6xl mx-auto">
                <form action="" onSubmit={handleSubmit(onCreatePurchase)}>
                    <ul className={formClassNames.gridUL}>
                        <li >
                            <label htmlFor="original_invoice_number" className={formClassNames.label}>
                                Original Invoice Number
                            </label>
                            <input
                                type="text"
                                id="original_invoice_number"
                                className={formClassNames.input}
                                placeholder="Original Invoice Number"
                                {...register("original_invoice_number")}
                            />
                        </li>
                        <li >
                            <label htmlFor="sales_date" className={formClassNames.label}>
                                Sales Date
                            </label>
                            <input
                                type="date"
                                id="sales_date"
                                className={formClassNames.input}
                                placeholder="sales_date"
                                {...register("sales_date")}
                            />
                        </li>
                    </ul>
                        
                    <ul className="my-4">
                        <li className=" p-2 flex items-center space-x-3 bg-blue-50 dark:bg-blue-950">
                            <label htmlFor="credit">Credit</label>
                            <label htmlFor="credit" className="relative inline-flex cursor-pointer items-center">
                                <input 
                                    type="checkbox" 
                                    id="credit" 
                                    className="peer sr-only" 
                                    {...register("credit")}
                                    />
                                <div className={` ${watch("credit")?"bg-blue-400":"bg-gray-400"} h-6 w-11 rounded-full after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-primary-200 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50`}></div>
                            </label>
                        </li>
                    </ul>
                    <ul className={formClassNames.gridUL}>
                        {!watch("credit")?
                            <li >
                                <label htmlFor="mode_of_payment" className={formClassNames.label}>
                                    Mode of Payment
                                </label>
                                <select
                                    id="mode_of_payment"
                                    className={`${watch("credit")?"cursor-not-allowed ":" "} bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    {...register("mode_of_payment")}
                                    disabled={watch("credit")}
                                    >
                                    <option value="cash">Cash</option>
                                    <option value="bank">Bank</option>
                                </select>
                            </li>
                        :""}
                        <li >
                            <label htmlFor="State" className={formClassNames.label}>
                                State
                            </label>
                            <select
                                id="State"
                                className={`bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                {...register("State")}
                                >
                                {indianStates.map((stateName,i)=>(
                                    <option key={i} value={stateName}>{stateName}</option>
                                ))}
                            </select>
                        </li>
                        <li >
                            <label htmlFor="supplier" className={formClassNames.label}>
                                Supplier
                            </label>
                            <input
                                type="text"
                                id="supplier"
                                className={formClassNames.input}
                                placeholder="Supplier"
                                {...register("supplier")}
                            />
                        </li>
                    </ul>

                    <p className={formClassNames.formSectionTitle}>Items</p>
                    <div className=" overflow-auto">
                        
                        {ItemsData.length==0?
                        <div>No Items added </div>:
                        
                        <>
                            <ul className="mt-8 grid grid-cols-7 gap-4 item-center  min-w-[40rem]">
                                <li>Item</li>
                                <li>Price/Unit</li>
                                <li>Qty</li>
                                <li>Discount %</li>
                                <li>GST %</li>
                                <li>Total</li>
                            </ul>
                            {ItemsData.map((item,i)=>(

                                <ul key={i} className="mt-8 grid grid-cols-7 gap-4 item-center  min-w-[40rem]">
                                    <li className="">
                                        <label htmlFor={item.name} className={formClassNames.label}>
                                            {item.name}
                                        </label>
                                        <input
                                            type="text"
                                            id={item.name}
                                            className={formClassNames.input}
                                            placeholder={item.name}
                                            {...register(`item_${item.id}`)}
                                        />
                                    </li>
                                    <li className="border grid place-items-center">{item.price}</li>
                                    <li className="border grid place-items-center">{item.quantity}</li>
                                    <li className="border grid place-items-center">%{item.discount}</li>
                                    <li className="border grid place-items-center">{item.gst || "-"}</li>
                                    <li className="border grid place-items-center">{item.total}</li>
                                    <li className=" col-span-2 md:col-span-1 grid justify-start">
                                        <button onClick={() => handleDelete(item.id)} className="flex items-center focus:outline-none text-red-500 border border-red-500  focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2  ">
                                            <Icon icon="material-symbols:delete-outline"/>
                                        </button>
                                    </li>
                                </ul>
                            ))}
                        </>

                        }
                        <button onClick={handleAddItem} className=" mt-4 flex items-center focus:outline-none text-blue-500 border border-blue-500 font-medium rounded-lg text-sm px-8 py-2  ">Add Items</button>
                    </div>

                    <ul className={formClassNames.gridUL}>
                        <li className="md:col-span-6 col-span-12">
                            <label htmlFor="Description" className="mb-1 block text-sm font-medium text-gray-700">Description</label>
                            <textarea 
                                id="Description" 
                                className={formClassNames.input}
                                rows="3" 
                                placeholder="Description"
                                {...register("description")}
                                ></textarea>
                        </li>
                    </ul>
                    <div className={formClassNames.gridUL}>
                        <button className={formClassNames.button}>
                            Create
                        </button>
                    </div>
                </form>
            </section>
        </>
	);
}
