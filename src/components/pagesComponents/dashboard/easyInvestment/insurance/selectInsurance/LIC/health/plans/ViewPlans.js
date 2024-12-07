"use client"
import Link from "next/link";

import DashSection from "@/components/pagesComponents/pageLayout/DashSection";
export default function ViewPlans() {
	return (
        <div className="p-4">
            <DashSection title="View Plans" className="p-4 grid gap-4 lg:grid-cols-[4fr_1fr]">
                <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <li className=" rounded-lg shadow-xl bg-bg_1/80">
                        <div className="p-6">
                            <div className="relative rounded-xl overflow-hidden">
                                <img className=" filter brightness-50" src="/public/dashboard/easyInvestment/insurance/BimaJyoti.jpg" alt="" />
                                <h2 className="absolute left-4 top-4 bg-primary text-white rounded-xl p-6 font-medium text-4xl">SIP</h2>
                            </div>
                            <div className="mt-4 text-center">
                                <span className="text-2xl font-extrabold text-txt/60">For-</span>
                                <span className="text-4xl font-extrabold text-primary">15Yr.</span>
                                <span className="text-base font-medium text-gray-500">years</span>
                            </div>
                            <div className="flex justify-between">
                                <p className="mt-4">
                                    <div className="text-xl font-extrabold text-txt/60">Invest </div>
                                    <span className="text-xl font-extrabold text-primary">₹10K</span>
                                    <span className="text-base font-medium text-gray-500">/Month</span>
                                </p>
                                <p className="mt-4">
                                    <div className="text-xl font-extrabold text-txt/60">You Get </div>
                                    <span className="text-xl font-extrabold text-primary">₹ 62.8</span>
                                    <span className="text-base font-medium text-gray-500">/L</span>
                                </p>
                            </div>
                            <p className="mt-4 text-end">
                                <span className="text-2xl font-extrabold text-primary">16.7%</span>
                                <span className="text-base font-medium text-gray-500">Return</span>
                            </p>
                            <Link href={"tier.href"} className="mt-4 block w-full bg-primary border border-primary rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900" >
                                details
                            </Link>
                        </div>
                    </li>

                </ul>
                <div className="mt-4">
                    <h1 className="text-2xl font-semibold text-gray-500/90 mt-4">Addons & Covers</h1>
                    <ul className="grid gap-4 mt-4">
                        <li className=" md:col-span-1 col-span-2 grid gri-col-1 mt-4">
                            <label htmlFor="pinCode" className=" capitalize">Invested Amount</label>
                            <input type="number" name="pinCode" id="pinCode" placeholder="Invested Amount" className="mt-2 bg-bg_1 text-tx border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" />
                            <span className="text-base font-medium text-gray-500">₹/month</span>
                        </li>
                        <li className=" md:col-span-1 col-span-2 grid gri-col-1 mt-4">
                            <label htmlFor="cityName" className=" capitalize">City Name</label>
                            <input type="text" name="cityName" id="cityName" placeholder="cityName" className="mt-2 bg-bg_1 text-tx border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2" />
                            <span className="text-base font-medium text-gray-500">/Till 2038</span>
                        </li>
                    </ul>
                </div>
            </DashSection>
        </div>
	);
}
