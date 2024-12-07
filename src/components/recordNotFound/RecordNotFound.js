"use client"
import { Icon } from "@iconify/react";
export default function RecordNotFound(props) {
    const {className,children} = props;
    return (
        <div className={`${className} bg-white shadow-md rounded-md max-w-7xl w-[calc(100%-2rem)] mx-auto  grid place-content-center min-h-52 `}>
            <Icon
                className="w-40 h-24 opacity-5 mx-auto"
                icon="ph:files-light"
            />
            <p className="text-center">No Record Found</p>
            {children}
        </div>
    );
}
