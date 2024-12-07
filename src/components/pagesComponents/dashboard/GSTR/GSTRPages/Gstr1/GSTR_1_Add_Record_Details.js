import GridContainer from "@/components/pagesComponents/grid/GridContainer";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function GSTR_1_Add_Record_Details() {
    const gstr1 = [
        {
            title: "4A, 4B, 6B, 6C-B2B ",
            overview: "invoices",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/b2b",
        },
        {
            title: "5A-B2C  ",
            icon: "icon-park:bill",
            overview: "(large invoices)",
            linkTo: "gstr1/addrecorddetails/five_a_b2c",
        },
        {
            title: "6A Export ",
            overview: "invoices",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/six_a_export",
        },
        {
            title: " 7-B2C ",
            overview: "Others",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/saven_b2c",
        },
        {
            title: "8A, 8B, 8C, 8D-nil ",
            overview: " related supplies",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/eight_a_b_c_d",
        },
        {
            title: "9B-Credit/Debit notes ",
            overview: " (registered)",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/nine_b_cr_dr_notes",
        },
        {
            title: "9B-Credit/Debit notes ",
            overview: " (un-registered) ",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/nine_b_cr_dr_notes_un",
        },
        {
            title: "11A(1), 11A(2) - Tax liability ",
            overview: "(Advances Received)",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/elevin_Aone_atwo",
        },
        {
            title: "11B(1), 11B(2) - Adjustment of",
            overview: " (advances)",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/elevin_Bone_btwo",
        },
        {
            title: " 12 - HSN - wise summary of",
            overview: "outward supplies",
            icon: "icon-park:bill",
            linkTo: "gstr1/addrecorddetails/twelve_hsn_wise",
        },
        {
            title: " Document issued",
            overview: "",
            icon: "icon-park:bill",
            linkTo: "/",
        },
    ];

    return (
        <>
            <div className="bg-gray-200">
                <div className="pb-10 p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    {gstr1.map((item, index) => (
                        <Link
                            key={index}
                            href={item.linkTo}
                            className="flex flex-col items-center py-4 px-3 bg-white hover:shadow-lg hover:shadow-primary shadow-md rounded-lg mx-8 md:mx-0"
                        >
                            <span className="object-contain  fill-zinc-600">
                                <Icon
                                    className="w-20 h-14  mx-auto"
                                    icon={item.icon}
                                />
                            </span>
                            <p className="heading-6 p-0  text-center mt-2 ">
                                {" "}
                                {item.title}
                            </p>
                            <p className="text-sm  text-center mt-1">
                                {item.overview}
                            </p>
                            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                                2
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
