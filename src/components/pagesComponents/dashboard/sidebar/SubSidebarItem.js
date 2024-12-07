import Link from "next/link";
import { Icon } from "@iconify/react";
import SubSubSubmenu from "./SubSubSidebarItem"
export default function SubSideBarItem(props) {
    const {upcoming,title,iconName,linkTo,subMenu,subMenuItems,
        subHandleActive,subActiveItem,index}=props;
    if (subMenu) {
        return (
        <div className={` py-4 pl-1 grid gap-2 transition-grid-rows duration-300 grid-rows-[0fr_0fr] ${subActiveItem===index?"grid-rows-[0fr_1fr]":""}`}>
            <button onClick={()=>subHandleActive(index)} className={`${(upcoming)?"opacity-50":"opacity-100"} flex font-semibold`}>
                <span><Icon icon={iconName} className='w-6 h-6 ml-1 mr-2  bg-blue-500 text-neutral-50 rounded-md p-1'/></span>
                <span className="ml-6 font-semibold text-left block text-md">
                    {title}
                </span>
                <span className="ml-auto">
                    {subMenu? <Icon icon={(subActiveItem===index)?"ep:arrow-up-bold":"ep:arrow-down-bold"}/> :""}
                </span> 
            </button>
            <div className={`overflow-hidden grid gap-2 transition-grid-rows duration-300 grid-rows-[0fr_0fr] bg-neutral-50  shadow-[inset_0px_0px_3px_0px_#444] transition-colors text-blue-500 rounded-md`}>
                {subMenuItems.map((item,i)=>(
                    <SubSubSubmenu key={i} {...item} />
                ))}
            </div>
        </div>
        )
    }
    return (
        <div className="capitalize py-4 pl-1">
            <Link href={linkTo}>
                <button className={`${(upcoming)?"opacity-50":"opacity-100"} flex font-bold`}>
                    <span><Icon icon={iconName} className='w-6 h-6 ml-1 mr-2  bg-blue-500 text-neutral-50 rounded-md p-1'/></span>
					<span className="ml-6 font-semibold text-left block text-sm">
						{title}
					</span>
					<span>
						{subMenu? <Icon icon={(subActiveItem===index)?"ep:arrow-up-bold":"ep:arrow-down-bold"}/> :""}
					</span>
                </button>
            </Link>
        </div>  
    )
}