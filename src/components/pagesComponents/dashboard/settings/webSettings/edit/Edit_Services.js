"use client"
import Section from "@/components/pagesComponents/pageLayout/Section";
import { H5 } from "@/components/pagesComponents/pageLayout/Headings";
import Pagination from "@/components/navigation/Pagination";
import { useForm } from "react-hook-form";

import { Icon } from "@iconify/react";
import { useState } from "react";
function Item_edit(props) {
    const {title,overview,date}=props
    return (
		<li className=" shadow-md shadow-primary/20 rounded-md p-4 bg-bg_1/70">
			<div className="flex ">
                <div className="flex-1">
                    <div className="text-txt text-xl font-semibold self-center">{title}</div>
                    <p className="text-txt/90">{overview}</p>
                </div>
                <div className="grid place-content-between gap-2">
                    <div className="border border-blue-600 rounded-md p-1 text-xl hover:text-blue-500" title="edit"><Icon icon="material-symbols:edit-outline"/></div>
                    <div className="border border-red-600 rounded-md p-1 text-xl hover:text-red-600" title="delete"><Icon icon="material-symbols:delete-outline"/></div>
                </div>
            </div>
            <div className=" relative top-2 italic text-sm text-txt/40">{date}</div>
		</li>
	);
}


const blogs = [
    {
        title:"gst",
        overview:"gst overview",
        lastUpdated:"Saturday, 9 December, 2023"
    },
    {
        title:"easy gst",
        overview:"easy gst overview",
        lastUpdated:"Saturday, 9 December, 2023"
    },
    {
        title:"easy gst",
        overview:"easy gst overview",
        lastUpdated:"Saturday, 9 December, 2023"
    },
    {
        title:"easy gst",
        overview:"easy gst overview",
        lastUpdated:"Saturday, 9 December, 2023"
    },
    {
        title:"easy gst",
        overview:"easy gst overview",
        lastUpdated:"Saturday, 9 December, 2023"
    }
]

export default function Edit_Services() {
    const [currentPage, setCurrentPage] = useState(1);
    const { register, handleSubmit, watch, formState,trigger  } =useForm();
    const { errors }=formState
    const totalPages = 14
    const onSubmit = (data) => {
        console.log(data);
    }
	return (
		<>
			<H5 className=" mt-12">Edit services</H5>
            <Section>
                <form action="">
                    <ul>
                        <li className="sm:col-span-1 col-span-2">
                            <label className="text-txt font-semibold" htmlFor="ServiceTitle">ServiceTitle</label>
                            <input {...register("ServiceTitle",{
                                required:{
                                    value:true,
                                    message:"ServiceTitle name is required",
                                }
                            })} 
                            type="text" placeholder="ServiceTitle" name="ServiceTitle" id="ServiceTitle" className="mt-1 bg-bg_2/10 border border-txt/400 focus:border-primary text-txt text-sm block w-full p-2" 
                            />
                            {errors?
                            <small className="text-red-500 italic">{errors.ServiceTitle?.message}</small>
                            :""}
                        </li>
                        <li className="sm:col-span-1 col-span-2">
                            <label className="text-txt font-semibold" htmlFor="ServiceOverview">ServiceOverview</label>
                            <input {...register("ServiceOverview",{
                                required:{
                                    value:true,
                                    message:"ServiceOverview name is required",
                                }
                            })} 
                            type="text" placeholder="ServiceOverview" name="ServiceOverview" id="ServiceOverview" className="mt-1 bg-bg_2/10 border border-txt/400 focus:border-primary text-txt text-sm block w-full p-2" 
                            />
                            {errors?
                            <small className="text-red-500 italic">{errors.ServiceOverview?.message}</small>
                            :""}
                        </li>
                    </ul>
                </form>
                <ul className="px-2 py-4 grid gap-4">
                    {blogs?.map((blog, index) => (
                        <Item_edit key={index} title={blog.title} overview={blog.overview} date={blog.lastUpdated}/>
                    ))}
                </ul>
            </Section>
             <div className="flex p-6">
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </div>
		</>
	);
}
