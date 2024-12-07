import Link from "next/link";
export default function GridItem(props) {
	const { children, className, href } = props;
	if (href) {
		return (
			<Link
				{...props}
				className={`
                        p-4
                        h-full
                        rounded-md
                        flex
                        items-center
        
        
        
        
                        shadow-md
                        shadow-blue-300
                        hover:shadow-xl
                        
                        hover:shadow-blue-100
                        bg-neutral-50
                        text-neutral-600 



                        dark:shadow-sm
                        hover:dark:shadow-blue-900
                        dark:hover:shadow-md
                        dark:shadow-blue-950 

                        dark:bg-neutral-950
                        dark:text-neutral-200
                        
                        
                        
                        active:bg-transparent

                        border border-blue-600/20
                        transition-all 
                        duration-200
                        ease-in-out
                        
                        ${className}
                    `}>
				{children}
			</Link>
		);
	}
	return (
		<li
			{...props}
			className={`
                p-4
                h-full
                rounded-md
                flex
                items-center




                shadow-md
                shadow-blue-300
                hover:shadow-xl
                
                hover:shadow-blue-100
                bg-neutral-100
                text-neutral-500 



                dark:shadow-sm
                hover:dark:shadow-blue-900
                dark:hover:shadow-md
                dark:shadow-blue-950 

                dark:bg-neutral-950
                dark:text-neutral-200
                
                
                
                active:bg-transparent

                transition-all 
                duration-500
                ease-in-out
                
                ${className}
            `}>
			{children}
		</li>
	);
}
