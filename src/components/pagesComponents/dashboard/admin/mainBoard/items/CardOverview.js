"use client"
import { Icon } from "@iconify/react";
import GridItem from "@/components/pagesComponents/grid/GridItem"

const DashBoardData = [
	{
		access: ["normal"],
		upcoming: false,
		title: "Total Clients ",
		overview: "2503",
		time: "10% + since yesterday ",
		linkTo: "/dashboard/easy-investment/life-insurance/bajaj",
		iconName: "material-symbols:account-circle-outline",
		cssClass:
			"p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500",
	},
	{
		access: ["normal"],
		upcoming: false,
		title: "New Clients",
		overview: "350",
		time: "-2% since last quarter",
		// linkTo: "/dashboard/easy-investment/life-insurance/bajaj",
		iconName: "material-symbols:account-circle-outline",
		cssClass:
			"p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500",
	},
	{
		access: ["normal"],
		upcoming: false,
		title: "Sales",
		overview: "2503",
		time: "+20% since last month",
		// linkTo: "/dashboard/easy-investment/life-insurance/bajaj",
		iconName: "foundation:burst-sale",
		cssClass:
			"p-3 mr-4 text-indigo-500 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-500",
	},
	{
		access: ["normal"],
		upcoming: false,
		title: "Purchase",
		overview: "2503",
		time: "+2% since last day",
		// linkTo: "/dashboard/easy-investment/life-insurance/bajaj",
		iconName: "carbon:location-filled",
		cssClass:
			"p-3 mr-4 text-pink-500 bg-pink-100 rounded-full dark:text-pink-100 dark:bg-pink-500",
	},
];

export default function CardOverview(props) {
    const {className} = props
    return (
        <div className={`${className} container 2xl:max-w-7xl mx-auto mt-4 p-4 `}>
            <ul className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
                {DashBoardData.map((el, key) => (
                    <GridItem key={key} href={`/dashboard/${el?.linkTo}`}>
                        <div>
                            <Icon icon={el.iconName} className={` rounded-xl sm:h-16  sm:w-16 sm:p-3 h-14 w-14 p-3 ${el.cssClass}`}/>
                        </div>
                        <div>
                            <div className="flex flex-wrap justify-between">
                                <span>{el.title}</span>
                                <span>{el.overview}</span>
                            </div>
                            <p className="font-normal"></p>
                            <p className=" font-normal  text-txt/70">
                                {el.time}
                            </p>
                        </div>
                    </GridItem>
                ))}
            </ul>
        </div>
    )
}