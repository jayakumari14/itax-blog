
import Link from "next/link";
import { Icon } from "@iconify/react";
export default function SubSubSubmenu(props) {
    const {upcoming,title,iconName,linkTo,subMenu,subMenuItems}=props;
    console.log("abc",title)
    if (subMenu) {
        return (
        <div className={`overflow-hidden/ grid transition-grid-rows duration-300 grid-rows-[0fr_0fr] focus:grid-rows-[0fr_1fr]`}>
            <button className="font-thin ">{title}</button>
            <div className="overflow-hidden/">
                <button>SubSubSubmenu title</button>
            </div>
        </div>
        )
    }
    return (
        <div className=" p-4 pl-8">
            <Link href={linkTo}>
                <button className={` ${(upcoming)?"opacity-50":"opacity-100"} flex font-thin`}>
                    <span><Icon icon={iconName} className='w-6 h-6 ml-1 mr-2  bg-blue-500 text-neutral-50 rounded-2xl p-1'/></span>
                    {title==="Super Admin" ?( <button className="ml-6 font-semibold text-left block text-sm bg-blue-600">
          {title} 
        </button> ):(<span className="ml-6 font-semibold text-left block text-sm">
						{title}
					</span> ) }
					
                    
                </button>
            </Link>
        </div> 
    )
}