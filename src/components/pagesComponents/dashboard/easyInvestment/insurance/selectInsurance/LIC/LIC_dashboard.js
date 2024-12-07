"use client"
import GridContainer from "@/components/pagesComponents/grid/GridContainer";
import { Icon } from "@iconify/react"
import Link from "next/link"
const CreateInsuranceData = [
    {
        linkTo:"create-insurance",
        title: "create health insurance",
        iconName: "healthicons:health",
    },

]
export default function CreateInsurance() {
    return (
        <div className=" container 2xl:max-w-7xl mx-auto mt-12 p-4">
            <GridContainer className=" capitalize">
                {CreateInsuranceData.map((item, index) => (
                    <li key={index}>
                        <Link href={`/dashboard/easy-investment/insurance/general-insurance/lic/${item.linkTo}`} className="grid grid-cols-[3fr_1fr] shadow-sm shadow-primary/20 hover:shadow-primary/90 rounded-md p-4 px-2">
                            <div className="text-txt/90 text-xl self-center">{item.title}</div>
                            <div className="place-self-center text-2xl border border-primary text-primary rounded-full p-2 "><Icon icon={item.iconName}/></div>
                        </Link>
                    </li>
                ))}
            </GridContainer>
        </div>
    )
}
