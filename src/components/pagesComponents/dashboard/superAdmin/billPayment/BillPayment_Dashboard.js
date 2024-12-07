"use client"
import GridContainer from "@/components/pagesComponents/grid/GridContainer"
import {H4} from "@/components/pagesComponents/pageLayout/Headings"
import { Icon } from "@iconify/react"
import Link from "next/link"
const BillPayment_DashboardData = [
    {
        linkTo:"all-users",
        title: "all users",
        iconName: "mdi:users",
    },
    {
        linkTo:"active-users",
        title: "active users",
        iconName: "mdi:account-check",
    },
    {
        linkTo:"non-active-users",
        title: "non active users",
        iconName: "mingcute:user-x-fill",
    },

]
export default function BillPayment_Dashboard() {
    return (
        <div className=" container 2xl:max-w-7xl mx-auto p-4">
            <H4>Bill Payments</H4>
            <GridContainer className=" capitalize">
                {BillPayment_DashboardData.map((item, index) => (
                    <li key={index}>
                        <Link href={`/dashboard/bill-payment/${item.linkTo}`} className="grid grid-cols-[3fr_1fr] shadow-sm shadow-primary/20 hover:shadow-primary/90 rounded-md p-4 px-2">
                            <div className="text-txt/90 text-xl self-center">{item.title}</div>
                            <div className="place-self-center text-2xl border border-primary text-primary rounded-full p-2 "><Icon icon={item.iconName}/></div>
                        </Link>
                    </li>
                ))}
            </GridContainer>
        </div>
    )
}
