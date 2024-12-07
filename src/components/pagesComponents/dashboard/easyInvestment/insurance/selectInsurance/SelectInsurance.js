"use client"
import Image from "next/image";
import Link from "next/link";

const insuranceTypeData= {
    ["life-insurance"]:[
        {
            access:["superAdmin"],
            upcoming: false,
            title: "L. I. C.",
            overview:"Life Insurance Corporation of India is an Indian multinational public sector life insurance company..",
            image:"/icons/lic_logo.png",
            linkTo:"lic",
            iconName: "material-symbols:dashboard",
        },
       
        
        {
            access:["superAdmin"],
            upcoming: false,
            title: "Star Health",
            overview:"Star Health Insurance offers flexible insurance policies for securing you and your loved ones...",
            image:"/icons/starHealth.png",
            linkTo:"star-health",
            iconName: "material-symbols:dashboard",
        },
    ],
    ["general-insurance"]:[
        
        {
            access:["superAdmin"],
            upcoming: false,
            title: "BAJAJ CAPITAL",
            overview:"Bajaj Capital with over 59 years of experience is your one-stop solution for Mutual Funds...",
            image:"/icons/bajaj_capital-logo.png",
            linkTo:"bajaj-capital",
            iconName: "material-symbols:dashboard",
        },
       
    ],
}
export default function SelectInsurance({insuranceType}) {
    return (
        <div className=" container 2xl:max-w-7xl mx-auto mt-12 p-4">
            <div className="grid gap-4 md:gap-6 md:px-8 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] capitalize">
                {insuranceTypeData[insuranceType].map((item, index) => (
                    <Link href={item.upcoming?"":`general-insurance/${item.linkTo}`} key={index} className={`${item.upcoming?"cursor-default":""} relative max-w-sm mx-auto  border border-blue-500/40 hover:border-blue-500 rounded-xl overflow-hidden shadow p-4 `}>
                        {item.upcoming?<span className=" px-4 py-2 rounded-2xl absolute top-1 left-1 text-neutral-100 bg-primary">UpComing</span>:""}
                        <div className={` rounded-xl text-9xl text-primary/80 grid place-content-center bg-neutral-100  py-6 h-44`} >
                            <Image width={200} height={200} className="rounded-t-lg rounded-md  w-36" src={item.image} alt="" />
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
