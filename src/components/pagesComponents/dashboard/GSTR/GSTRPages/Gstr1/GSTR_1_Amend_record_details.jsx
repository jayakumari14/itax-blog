import GridContainer from "@/components/pagesComponents/grid/GridContainer";
import { Icon } from "@iconify/react";
import Link from "next/link";

const GSTR_1_Amend_record_details = () => {
    return (
        <>
            <div className="bg-gray-200">
                <div className="pb-10 p-8 max-w-7xl   mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    {gstr1.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="flex flex-col items-center py-4 px-3 bg-white hover:shadow-lg hover:shadow-primary shadow-md rounded-lg mx-8 md:mx-0"
                        >
                            <span className="object-contain  fill-zinc-600">
                                <Icon
                                    className="w-20 h-14  mx-auto"
                                    icon={item.icon}
                                />
                            </span>
                            <p className="heading-6 p-0 text-center mt-2 ">
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
};

export default GSTR_1_Amend_record_details;

const gstr1 = [
    {
        title: "9A - Amended B2B  ",
        icon: "icon-park:bill",
        overview: "invoices",
        link: "gstr1/amendrecorddetails/nine-a-b2b",
    },
    {
        title: "9A - Amended B2C ",
        icon: "icon-park:bill",
        overview: "(large invoices)",
        link: "gstr1/amendrecorddetails/nine-a-b2c",
    },
    {
        title: "9A - Amended exports",
        icon: "icon-park:bill",
        overview: "invoices",
        link: "gstr1/amendrecorddetails/nine-a-exports",
    },
    {
        title: " 9A - Amended Credit/Debit notes",
        icon: "icon-park:bill",
        overview: "(Registered)",
        link: "gstr1/amendrecorddetails/nine-a-cr-dr-notes-reg",
    },
    {
        title: "9A - Amended Credit/Debit notes ",
        icon: "icon-park:bill",
        overview: " (Unregistered)",
        link: "gstr1/amendrecorddetails/nine-a-cr-dr-notes-unreg",
    },
    {
        title: "10 - Amended B2C",
        icon: "icon-park:bill",
        overview: "  (others))",
        link: "gstr1/amendrecorddetails/ten-b2c",
    },
    {
        title: "11A - Amended Tax Liability",
        icon: "icon-park:bill",
        overview: " (advances received) ",
        link: "gstr1/amendrecorddetails/elaven-a-tax-liability",
    },
    {
        title: "11A - Amended of adjustment of",
        icon: "icon-park:bill",
        overview: " (advances received) ",
        link: "gstr1/amendrecorddetails/elaven-a-adjustment",
    },
];
