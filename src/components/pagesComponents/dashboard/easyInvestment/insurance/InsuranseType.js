"use client"
import Link from "next/link"
import { Icon } from "@iconify/react";
const insuranceTypeData=[
    {
        access:["superAdmin"],
        upcoming: false,
        title: "general insurance",
        overview:"Life Insurance Corporation of India is an Indian multinational public sector life insurance company..",
        image:"mdi:hand-heart-outline",
        linkTo:"general-insurance",
        iconName: "material-symbols:dashboard",
    },
    {
        access:["superAdmin"],
        upcoming: false,
        title: "life insurance",
        overview:"Life Insurance Corporation of India is an Indian multinational public sector life insurance company..",
        image:"material-symbols:ecg-heart-sharp",
        linkTo:"life-insurance",
        iconName: "material-symbols:dashboard",
    },
]
export default function SelectInsuranceType() {
    return (
            <div className=" container 2xl:max-w-7xl mx-auto mt-12 p-4">
                 <div className="grid gap-4 md:gap-6 md:px-8 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] capitalize">
                {insuranceTypeData.map((item, index) => (
                     <Link href={item.upcoming?"":`insurance/${item.linkTo}`} key={index} className={`${item.upcoming?"cursor-default":""} block relative max-w-sm mx-auto  border border-blue-500/40 hover:border-blue-500 rounded-xl overflow-hidden shadow p-4 `}>
                        {item.upcoming?<span className=" px-4 py-2 rounded-2xl absolute top-1 left-1 text-neutral-100 bg-primary">UpComing</span>:""}
                        <div className={` rounded-xl text-9xl text-primary/80 grid justify-center bg-neutral-100 py-6`} >
                            {/* <img className="rounded-t-lg" src={item.image} alt="" /> */}
                            <Icon icon={item.image} />
                        </div>
                        <div className="p-5">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">{item.title}</h5>
                            </div>
                            <p className="mb-3 font-normal text-txt/70">{item.overview}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
    )
}
