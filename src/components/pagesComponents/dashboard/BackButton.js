import { Icon } from "@iconify/react";
// import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
function Crumb(props) {
    const { crumb, index, crumbs } = props;
    if (crumbs.length - 1 !== index) {
        return (
            <li className="capitalize flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500">
                <span href={crumb.link}>{crumb.label}</span>
                <Icon
                    className="text-lg"
                    icon={"iconamoon:arrow-right-2-light"}
                />
            </li>
        );
    }
    return (
        <li className="capitalize inline-flex items-center text-xs font-bold text-blue-600 truncate dark:text-blue-200">
            {crumb.label}
        </li>
    );
}
export default function BackButton({ props }) {
    const router = useRouter();
    const pathname = usePathname();

    const pathnames = pathname.split("/").filter(Boolean); // remove empty strings

    let breadcrumbs = [];
    let path = "";

    pathnames.forEach((name, i) => {
        if (i === 0) {
            path += `/${name}`;
            breadcrumbs.push({ label: name, link: path });
        } else {
            path += `/${name}`;
            breadcrumbs.push({ label: name, link: path });
        }
    });

    return (
        <div className="text-gray-800 dark:text-gray-200 font-semibold  flex items-center gap-2 p-2 border-y border-gray-200 dark:border-gray-700">
            <button onClick={() => router.back()} {...props}>
                <Icon icon="ph:arrow-left-bold" className="w-6 h-6" />
            </button>
            <ol
                className="flex items-center flex-wrap "
                aria-label="Breadcrumb"
            >
                <li></li>
                {breadcrumbs.map((crumb, index) => (
                    <Crumb
                        key={index}
                        crumb={crumb}
                        index={index}
                        crumbs={breadcrumbs}
                    />
                ))}
            </ol>
            {/* <h1 className="uppercase">{lastElement}</h1> */}
        </div>
    );
}
