"use client";
import { Icon } from "@iconify/react";
import GridItem from "@/components/pagesComponents/grid/GridItem";

const DashBoardData = [
  {
    upcoming: true,
    title: "Users",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "all-users",
    iconName: "material-symbols:account-circle-outline",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-green-100 dark:bg-green-500",
  },
  {
    upcoming: false,
    title: "Admin",
    overview: "25",
    time: "1% + since yesterday ",
    linkTo: "all-admin",
    iconName: "entypo:user",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "File ITR",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "applications",
    iconName: "pepicons-print:file",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "Fill GSTR",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "applications",
    iconName: "bytesize:file",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "Insurance",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "insureance",
    iconName: "streamline:insurance-hand-solid",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "Accounts",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "applications",
    iconName: "material-symbols:account-balance",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "Invoice",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "applications",
    iconName: "mdi:invoice-add",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "Finance",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "applications",
    iconName: "mdi:finance",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "Transactions",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "transactions",
    iconName: "bitcoin-icons:transactions-filled",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "Report",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "applications",
    iconName: "tabler:report",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
  {
    upcoming: false,
    title: "Bill Payment",
    overview: "2503",
    time: "10% + since yesterday ",
    linkTo: "applications",
    iconName: "streamline:payment-cash-out-3",
    cssClass:
      "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
  },
];

export default function CardOverview(props) {
  const { className } = props;
  return (
    <div className={`${className} mx-auto mt-2 p-4 `}>
      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
        {DashBoardData.map((el, key) => (
          <GridItem key={key} href={`/dashboard/${el?.linkTo}`}>
            <div>
              <Icon
                icon={el.iconName}
                className={` rounded-xl sm:h-16  sm:w-16 sm:p-3 h-14 w-14 p-3 ${el.cssClass}`}
              />
            </div>
            <div>
              <div className="flex flex-wrap justify-between">
                <span>{el.title}</span>
                <span>{el.overview}</span>
              </div>
              <p className="font-normal"></p>
              <p className=" font-normal  text-txt/70">{el.time}</p>
            </div>
          </GridItem>
        ))}
      </ul>
    </div>
  );
}
