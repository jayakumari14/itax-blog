"use client";
import GridContainer from "@/components/pagesComponents/grid/GridContainer";
import GridItem from "@/components/pagesComponents/grid/GridItem";
import DashSection from "@/components/pagesComponents/pageLayout/DashSection";
import { Icon } from "@iconify/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from "react-chartjs-2";



const AccountDashLinksData = [
    {
        linkTo: "items",
        icon: "mdi:cart-sale",
        title: "Items",
        data: "0",
        cssClass:
            "p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500",
    },
    {
        linkTo: "parties",
        icon: "carbon:purchase",
        title: "Parties",
        data: "0",
        cssClass:
            "p-3 mr-4 text-indigo-500 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-500",
    },
    {
        linkTo: "sales",
        icon: "mdi:cash-return",
        title: "Sales",
        data: "0",
        cssClass:
            "p-3 mr-4 text-pink-500 bg-pink-100 rounded-full dark:text-pink-100 dark:bg-pink-500",
    },
    {
        linkTo: "purchase",
        icon: "solar:box-broken",
        title: "Purchases",
        data: "0",
        cssClass:
            "p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500",
    },
    {
        linkTo: "account",
        icon: "ph:users-four",
        title: "Accounts",
        cssClass:
            "p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500",
    },
    {
        linkTo: "journal-entry",
        icon: "tabler:report",
        title: "Journal",
        data: "0",
        cssClass:
            "p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500",
    },
    {
        linkTo: "",
        icon: "tabler:report",
        title: "Assets & liabilities ",
        data: "0",
        cssClass:
            "p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500",
    },
    {
        linkTo: "",
        icon: "tabler:report",
        title: "Drawing ",
        data: "0",
        cssClass:
            "p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500",
    },
    {
        linkTo: "",
        icon: "tabler:report",
        title: "Creditors & Debtors ",
        data: "0",
        cssClass:
            "p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500",
    },
    {
        linkTo: "",
        icon: "tabler:report",
        title: "Depreciation  ",
        data: "0",
        cssClass:
            "p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500",
    },
    {
        linkTo: "Settings",
        icon: "mdi:journal-outline",
        title: "Settings",
        data: "0",
        cssClass:
            "p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500",
    },
];
const data = {
    labels: ["Monthly Income"],
    datasets: [
        {
            // label: '# of Votes',
            data: [122],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
        },
    ],
};
function AccountsOverview() {
    return (
        <div className="p-2 max-w-7xl mx-auto w-[calc(100%-2rem)] rounded-md bg-white shadow-md">
            <div className="grid gap-6 lg:grid-cols-3">
                <ul
                    className="
                    p-2 space-y-2 text-sm shadow-inner shadow-neutral-500/50 rounded-md bg-gray-200
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
                >
                    <li>
                        <div className="text-xl">
                            Capital
                            <span> &#8377; 0</span>
                        </div>

                        <div className="grid justify-end">
                            <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                                <Icon icon="basil:add-solid" />
                                Add
                            </button>
                        </div>
                    </li>
                    <li>
                        <div>Paid Invoice</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>

                    <li>
                        <div>Unpaid Invoice</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>
                </ul>
                <ul
                    className="
                    p-2 space-y-2 text-sm shadow-inner shadow-neutral-500/50 rounded-md bg-gray-200
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
                >
                    <li>
                        <div className="text-xl">
                            {"Loan's"}
                            <span> &#8377; 0</span>
                        </div>

                        <div className="grid justify-end">
                            <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                                <Icon icon="basil:add-solid" />
                                Add
                            </button>
                        </div>
                    </li>
                    <li>
                        <div>Paid Invoice</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>

                    <li>
                        <div>Unpaid Invoice</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>
                </ul>
                <ul
                    className="
                    p-2 space-y-2 text-sm shadow-inner shadow-neutral-500/50 rounded-md bg-gray-200
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
                >
                    <li>
                        <div className="text-xl">
                            Stocks
                            <span> &#8377; 0</span>
                        </div>

                        <div className="grid justify-end">
                            <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                                <Icon icon="basil:add-solid" />
                                Add
                            </button>
                        </div>
                    </li>
                    <li>
                        <div>closing</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>

                    <li>
                        <div>Opening</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>
                </ul>
                <ul
                    className="
                    p-2 space-y-2 text-sm shadow-inner shadow-neutral-500/50 rounded-md bg-gray-200
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
                >
                    <li>
                        <div className="text-xl">
                            Profit & Loss
                            <span> &#8377; 0</span>
                        </div>

                        {/* <div className="grid justify-end">
                            <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                                <Icon icon="basil:add-solid" />
                                Add
                            </button>
                        </div> */}
                    </li>
                    <li>
                        <div>Profit</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>

                    <li>
                        <div>Loss</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>
                </ul>
                <ul
                    className="
                    p-2 space-y-2 text-sm shadow-inner shadow-neutral-500/50 rounded-md bg-gray-200
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
                >
                    <li>
                        <div className="text-xl">
                            Duty & Tax
                            <span> &#8377; 0</span>
                        </div>

                        {/* <div className="grid justify-end">
                            <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                                <Icon icon="basil:add-solid" />
                                Add
                            </button>
                        </div> */}
                    </li>
                    <li>
                        <div>Profit</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>

                    <li>
                        <div>Loss</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>
                </ul>
                <ul
                    className="
                    p-2 space-y-2 text-sm shadow-inner shadow-neutral-500/50 rounded-md bg-gray-200
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
                >
                    <li>
                        <div className="text-xl">
                            Closing & Opening Stock
                            <span> &#8377; 0</span>
                        </div>

                        {/* <div className="grid justify-end">
                            <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                                <Icon icon="basil:add-solid" />
                                Add
                            </button>
                        </div> */}
                    </li>
                    <li>
                        <div>Profit</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>

                    <li>
                        <div>Loss</div>
                        <span className="text-end">&#8377; 0</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
function InvoiceDashboardNavItem() {
    return (
        <DashSection
            className="bg-white"
            title="Account Dashboard"
            titleRight="current year - 2024"
        >
            <GridContainer className=" p-4">
                {AccountDashLinksData.map((el, key) => (
                    <GridItem
                        key={key}
                        href={`/dashboard/accounts/${el?.linkTo}`}
                    >
                        <div className=" grid justify-center sm:w-1/2 w-1/5">
                            <Icon
                                icon={el?.icon}
                                className={`
                                rounded-xl
                                sm:h-16 
                                sm:w-16
                                sm:p-3
                                
                                h-14 
                                w-14 
                                p-3
                                ${el?.cssClass}
                            `}
                            />
                        </div>
                        <div>
                            <p
                                className={`
                                text-lg 
                                sm:w-full  
                            `}
                            >
                                {el?.title}
                            </p>
                            <p className="font-normal">{el?.data}</p>
                        </div>
                    </GridItem>
                ))}
            </GridContainer>
        </DashSection>
    );
}
function Cash_Bank() {
    return (
        <DashSection
            className="bg-white"
            title={"Cash/Bank Fund Transfer"}
            titleRight={
                <div>
                    <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                        <Icon icon="basil:add-solid" />
                        Add
                    </button>
                </div>
            }
        >
            <ul
                className="
                    p-5
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
            >
                <li>
                    <div>Cash Account</div>
                    <span className="text-end">&#8377; 0</span>
                </li>

                <li>
                    <div>Bank Account</div>
                    <span className="text-end">&#8377; 0</span>
                </li>
            </ul>
        </DashSection>
    );
}
function InDir_Income() {
    return (
        <DashSection
            className="bg-white"
            title={"Direct Income / Indirect income"}
            titleRight={
                <div>
                    <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                        <Icon icon="basil:add-solid" />
                        Add
                    </button>
                </div>
            }
        >
            <div className="max-w-min">
                <Pie data={data} />
            </div>
        </DashSection>
    );
}
function Dir_Income() {
    return (
        <DashSection
            className="bg-white"
            title={"Suspence"}
            titleRight={
                <div>
                    <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                        <Icon icon="basil:add-solid" />
                        Add
                    </button>
                </div>
            }
        >
            <div className="max-w-min">
                <Pie data={data} />
            </div>
        </DashSection>
    );
}

function Purchase_order() {
    return (
        <DashSection
            className="bg-white"
            title={"Deposit Assest"}
            titleRight={
                <div>
                    <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                        <Icon icon="basil:add-solid" />
                        Add
                    </button>
                </div>
            }
        >
            <ul
                className="
                    p-5
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
            >
                <li>
                    <div>Cash Account</div>
                    <span className="text-end">&#8377; 0</span>
                </li>

                <li>
                    <div>Bank Account</div>
                    <span className="text-end">&#8377; 0</span>
                </li>
            </ul>
        </DashSection>
    );
}
function Sale_order() {
    return (
        <DashSection
            className="bg-white"
            title={"TDS & TCS and Cess"}
            titleRight={
                <div>
                    <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                        <Icon icon="basil:add-solid" />
                        Add
                    </button>
                </div>
            }
        >
            <ul
                className="
                    p-5
                    [&>li]:grid [&>li]:gap-2 [&>li]:grid-cols-2 
                    [&>li>div]:font-semibold [&>li>div]:text-sm
                    "
            >
                <li>
                    <div>Cash Account</div>
                    <span className="text-end">&#8377; 0</span>
                </li>

                <li>
                    <div>Bank Account</div>
                    <span className="text-end">&#8377; 0</span>
                </li>
            </ul>
        </DashSection>
    );
}

function BalanceSheet() {
    return (
        <DashSection
            className="bg-white"
            title={"Mis Expensances (Assests)"}
            titleRight={
                <div>
                    <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                        <Icon icon="grommet-icons:transaction" />
                        Show Capital Transaction
                    </button>
                </div>
            }
        >
            <div className=" p-5 font-semibold text-sm ">
                Balance Sheet as of 17.01.2024
            </div>
        </DashSection>
    );
}
function Profit() {
    return (
        <DashSection
            className="bg-white"
            title={"Provision"}
            titleRight={
                <div>
                    <button className="bg-gray-500 hover:bg-gray-800 text-gray-50 py-1 px-2 rounded-lg flex gap-2 items-center">
                        <Icon icon="material-symbols:calculate" />
                        Calculate
                    </button>
                </div>
            }
        >
            <div className=" p-5 font-semibold text-sm "></div>
        </DashSection>
    );
}

export default function Old_Account_Dashboard () {
    
    return (
        <main className=" py-4 bg-neutral-50 min-h-screen space-y-6">
            <AccountsOverview />
            <InvoiceDashboardNavItem />
            <div className="max-w-7xl mx-auto w-[calc(100%)] grid gap-6 lg:grid-cols-2 ">
                <Sale_order />

                <Purchase_order />
                <Dir_Income />
                <InDir_Income />
            </div>
            <Cash_Bank />

            <BalanceSheet />
            <Profit />
           
        </main>
    );
}
  


