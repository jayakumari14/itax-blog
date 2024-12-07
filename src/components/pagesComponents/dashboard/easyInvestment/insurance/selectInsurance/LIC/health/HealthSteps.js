"use client"
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const stepsData = [
    { id: "Step 1", step:1, name: "Personal Details",},
    { id: "Step 2", step:2, name: "Insure?", },
    { id: "Step 3", step:3, name: "Location",},
    { id: "Step 4", step:4, name: "medical history",},
];
function Steps({stepsData,currentStep,handleStep}) {
	return (
		<nav aria-label="Progress">
			<ol className="space-y-4 md:flex md:space-y-0 md:space-x-8 md:px-16">
            {stepsData.map((step) => (
                <li key={step.name} className="md:flex-1">
                    {step.step <= currentStep ? (
                        <div onClick={()=>handleStep(step.step)} className=" cursor-pointer group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" >
                            <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">
                                {step.id}
                            </span>
                            <span className="text-sm font-medium">
                                {step.name}
                            </span>
                        </div>
                    ) : (
                        <div onClick={()=>handleStep(step.step)} className=" cursor-pointer group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" >
                            <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
                                {step.id}
                            </span>
                            <span className="text-sm font-medium">
                                {step.name}
                            </span>
                        </div>
                    )}
                </li>
            ))}
			</ol>
		</nav>
	);
}

function HealthStep_1() {
    
    return (
        <>
            <h1 className="text-2xl font-semibold text-gray-500/90 mt-4">Personal Details</h1>
            <ul className="grid grid-cols-2 gap-4 mt-4">
                <li className="flex gap-4 mt-4">
                    <label className="grid grid-cols-[1fr_auto] cursor-pointer" for="male">
                    <Icon className="text-2xl" icon="mdi:face-male"/>
                        <div>
                        Male<input className="ml-2" type="radio" id="male" name="gender" value="male"/>
                    </div>
                    </label>

                    <label className="grid grid-cols-[1fr_auto] cursor-pointer" for="female">
                    <Icon className="text-2xl" icon="mdi:face-female"/>
                        <div>
                        Female<input className="ml-2" type="radio" id="female" name="gender" value="female"/>
                    </div>
                    </label>
                </li>
                <li className=" col-span-2 grid gri-col-1 mt-4">
                    <label htmlFor="name" className=" capitalize">name</label>
                    <input type="text" name="name" id="name" placeholder="name" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </li>
                <li className=" sm:col-span-1 col-span-2 grid gri-col-1 mt-4">
                    <label htmlFor="email" className=" capitalize">email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </li>
                <li className=" sm:col-span-1 col-span-2 grid gri-col-1 mt-4">
                    <label htmlFor="mobile" className=" capitalize">mobile</label>
                    <input type="tel" name="mobile" id="mobile" placeholder="mobile" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </li>
            </ul>
        </>
    )
}
function HealthStep_2() {
    const insuranceFor = [
        {name:"self"},
        {name:"spouse"},
        {name:"son"},
        {name:"daughter"},
        {name:"father"},
        {name:"mother"},
    ]
    return (
        <>
            <h1 className="text-2xl font-semibold text-gray-500/90 mt-4">Who would you like to insure?</h1>
            <ul className="grid grid-cols-2 gap-y-4  gap-x-12 mt-4">
                {insuranceFor.map((insuranceFor, index) => (
                    <li key={index} className=" md:col-span-1 col-span-2 flex items-center p-2.5 mt-4   border border-gray-300 rounded-lg">
                        <label htmlFor={insuranceFor.name} className="flex-1 capitalize">{insuranceFor.name}</label>
                        <input type="date" name={insuranceFor.name} id={insuranceFor.name} placeholder="date of birth" className=" cursor-pointer bg-bg_1 text-tx  text-sm  block " />
                    </li>
                ))}
            </ul>
        </>
    )
}
function HealthStep_3() {
    return (
        <>
            <h1 className="text-2xl font-semibold text-gray-500/90 mt-4">Tell us where you live</h1>
            <ul className="grid grid-cols-2 gap-4 mt-4">
                <li className=" md:col-span-1 col-span-2 grid gri-col-1 mt-4">
                    <label htmlFor="pinCode" className=" capitalize">Enter PIN Code</label>
                    <input type="number" name="pinCode" id="pinCode" placeholder="Enter PIN Code" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </li>
                <li className=" md:col-span-1 col-span-2 grid gri-col-1 mt-4">
                    <label htmlFor="cityName" className=" capitalize">City Name</label>
                    <input type="text" name="cityName" id="cityName" placeholder="cityName" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </li>
            </ul>
        </>
    )
}
function HealthStep_4() {
    return (
        <>
            <h1 className="text-2xl font-semibold text-gray-500/90 mt-4">Any of the insured member have a medical history?</h1>
            <ul className="grid grid-cols-2 gap-4 mt-4">
                <li className="flex gap-4 mt-4">
                    <label className="grid grid-cols-[1fr_auto] cursor-pointer" for="male">
                        <div>yes<input className="ml-2" type="radio" id="male" name="gender" value="male"/></div>
                    </label>

                    <label className="grid grid-cols-[1fr_auto] cursor-pointer" for="female">
                        <div>no<input className="ml-2" type="radio" id="female" name="gender" value="female"/></div>
                    </label>
                </li>
            </ul>
        </>
    )
}

export default function HealthSteps() {
	const [currentStep, setCurrentStep] = useState(1);
    const handleStep = (step) => {
        setCurrentStep(step);
    }
	return (
		<div className="mx-auto max-w-4xl p-8 py-20">
            <form action="">
                <Steps
                    stepsData={stepsData}
                    currentStep={currentStep}
                    handleStep={handleStep}
                />
                {currentStep === 1 ? (
                    <HealthStep_1 />
                ) : currentStep === 2 ? (
                    <HealthStep_2 />
                ) : currentStep === 3 ? (
                    <HealthStep_3 />
                ) : (
                    <HealthStep_4 />
                )}
                <div className="flex gap-2 mt-4 py-4">
                    <button type="button" disabled={currentStep<4} className={`${currentStep===4?"bg-primary":"bg-primary/40 cursor-not-allowed"} capitalize rounded-lg px-16 py-2  text-white`}>
                        {/* submit */}
                        <Link href="create-insurance/plans">Next</Link>
                    </button>
                </div>
            </form>
		</div>
	);
}
