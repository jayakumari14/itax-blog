'use client';
import Link from 'next/link';
import Image from 'next/image';
import { getCookie } from 'cookies-next';
// import TopNavbarLinks from "./topNavbarComponents/TopNavbarLinks";
import UserInfo from './topNavbarComponents/UserInfo';
import useClient from '@/hooks/useClient';
import { Icon } from '@iconify/react';

const topNavbarData = [
  {
    href: '/',
    name: 'our products',
    subLink: [
      {
        href: '/',
        name: 'Easy GST',
        upcoming: true,
      },
      {
        href: '/ourproducts/library',
        name: 'Easy E-Library',
      },
      // {
      //   href: '/',
      //   name: 'Fastag Recharge',
      //   upcoming: true,
      // },
      // {
      //   href: '/',
      //   name: 'Business Erp',
      //   upcoming: true,
      // },
      // {
      //   href: '/',
      //   name: 'School Erp',
      //   upcoming: true,
      // },
      // {
      //   href: '/',
      //   name: 'CRM',
      //   upcoming: true,
      // },
      // {
      //   href: '/',
      //   name: 'Easy Cloud',
      //   upcoming: true,
      // },
    ],
  },
  {
    href: '/',
    name: 'easy services',
    subLink: [
      {
        name: 'Easy GST Links',
        subLink: [
          {
            href: '/easyservice/searchbygstin',
            name: 'Search by GSTIN',
          },
          {
            href: '/easyservice/searchbypan',
            name: 'Search by PAN',
          },
          {
            href: '/easyservice/trackgstreturn',
            name: 'Track GST Return',
          },
        ],
      },
      {
        name: 'Easy IncomeTax Links',
        subLink: [
          {
            href: '/easyservice/verifypandetails',
            name: 'Verify Pan Details',
          },
          {
            href: '/easyservice/checkpanaadhaarstatus',
            name: 'Check Pan Aadhaar Status',
            // upcoming: true
          },
          {
            href: '/easyservice/searchtan',
            name: 'Search Tan',
          },
        ],
      },
      {
        href: '/',
        name: 'Easy Bank Links',
        subLink: [
          {
            href: '/easyservice/ifscdetails',
            name: 'IFSC Code',
          },
          {
            href: '/easyservice/verifybankdetails',
            name: 'Verify Bank Account',
          },
          {
            href: '/easyservice/upiverify',
            name: 'UPI Verification',
          },
        ],
      },
      {
        href: '/',
        name: 'Easy MCA',
        subLink: [
          {
            href: '/easyservice/companydetails',
            name: 'Company Details',
          },
          {
            href: '/easyservice/companydirectordetails',
            name: 'Company Director Details',
          },
        ],
      },
      {
        href: '/',
        name: 'Easy Aadhaar Links',
        subLink: [
          {
            href: '/easyservice/aadhaar-verify', /// link:----- /easyservice/aadharverify
            name: 'Easy Aadhaar Verification',
            upcoming: false,
          },
          {
            href: '/easyservice/aadhaar-link-status',
            name: 'Easy Link Aadhaar Status',
            upcoming: false,
          },
        ],
      },
      {
        href: '/',
        name: 'Easy Converter',
        subLink: [
          {
            href: '/easyservice/image-to-pdf',
            name: 'Image to PDF',
          },
          {
            href: '/easyservice/merge-pdf',
            name: 'Merge PDF',
          },
        ],
      },
      {
        href: '/',
        name: 'Post Office',
        subLik: [
          {
            href: '/easyservice/pincodeinfo',
            name: 'Pincode Information',
          },
          {
            href: '/easyservice/pincodebycity',
            name: 'Pin by City',
          },
        ],
      },
    ],
  },
  {
    href: '/',
    name: 'financial calculators',
    subLink: [
      {
        href: '/',
        name: 'Bank Calculators',
        subLink: [
          {
            href: '/financialcal/sical',
            name: 'Simple Interest Calculator',
          },
          {
            href: '/financialcal/cical',
            name: 'Compound Interest',
          },
        ],
      },
      {
        href: '/',
        name: 'Income Tax Calculators',
        subLink: [
          {
            href: '/financialcal/hracal',
            name: 'HRA Calculator',
          },
          {
            href: '/financialcal/depCalc', // link:--- /financialcal/depreciatoncal
            name: 'Depreciation Calculator',
          },
          {
            href: '/financialcal/advanceTaxCal', // link:--- /financialcal/advanceTaxCal
            name: 'Advance Tax Calculator (Old-Regime)',
          },
          {
            href: '/financialcal/taxcalculator/new',
            name: 'Tax Calculator',
          },
          {
            href: '/financialcal/capitalGainCalc', // link:--- /financialcal/capitalGainCalc
            name: 'Capital Gain Calculator',
          },
        ],
      },
      {
        href: '/',
        name: 'GST Calculators',
        subLink: [
          {
            href: '/financialcal/gstcal',
            name: 'GST Calculator',
          },
        ],
      },
      {
        href: '/',
        name: 'Investment Calculators',
        subLink: [
          {
            href: '/financialcal/miscal',
            name: 'Post Office MIS',
          },
          {
            href: '/financialcal/cagr',
            name: 'CAGR Calculator',
          },
          {
            href: '/financialcal/rdcal',
            name: 'RD Calculator',
          },
          {
            href: '/financialcal/fdcal',
            name: 'FD Calculator',
          },
          {
            href: '/financialcal/lumpsumpcal',
            name: 'Lump Sum Calculator',
          },
          {
            href: '/financialcal/sipcal',
            name: 'SIP Calculator',
          },
        ],
      },
      {
        href: '/',
        name: 'Loan Calculators',
        subLink: [
          {
            href: '/financialcal/businesscal',
            name: 'Business Loan Calculator',
          },
          {
            href: '/financialcal/carloancal',
            name: 'Car Loan Calculator',
          },
          {
            href: '/financialcal/loanagainstcal',
            name: 'Loan Against Property',
          },
          {
            href: '/financialcal/homeloancal',
            name: 'Home Loan Calculator',
          },
          {
            href: '/financialcal/personalloancal',
            name: 'Personal Loan Calculator',
          },
        ],
      },
      {
        href: '/',
        name: 'Insurance Calculators',
        subLink: [
          {
            href: '/financialcal/npscal',
            name: 'NPS Calculator',
          },
        ],
      },
    ],
  },
  {
    href: '/blogs',
    name: 'blogs',
  },
  {
    href: '/register-startup/registration',
    name: 'register a startup',
  },
  {
    href: '/apis/all_apis',
    name: 'apis',
  },
  {
    href: '/downloads',
    name: 'downloads',
  },
];

function SubLinksItems({ linkItem }) {
  const { upcoming, subLink, name, href } = linkItem;
  if (subLink) {
    return (
      <li className="group/subLink relative text-nowrap">
        <button className="min-w-56 w-full flex gap-1 items-center tracking-tighter p-2 text-gray-800 group-hover/subLink:text-blue-500 font-semibold text-sm">
          <Icon
            className="rotate-0 group-hover/subLink:-rotate-90  transition-transform 0.3s"
            icon="iconamoon:arrow-down-2"
          />
          {name}
          {upcoming && (
            <span className="ml-auto bg-green-100/50 text-green-500 rounded-sm px-1 py-[2px] text-sm">
              Upcoming
            </span>
          )}
        </button>
        <ul
          className="
                group-hover/subLink:block hidden absolute top-0 left-56 
                bg-white rounded-md shadow-sm shadow-blue-600 border
                "
        >
          {subLink.map((link, index) => (
            <SubLinksItems key={index} linkItem={link} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="text-nowrap">
      <Link
        className="min-w-56 flex gap-1 tracking-tighter px-4 py-2 font-semibold text-sm  text-gray-800 hover:text-blue-500"
        href={href}
      >
        {name}
        {upcoming && (
          <span className="ml-auto bg-green-100/50 text-green-500 rounded-sm px-1 py-[2px] text-sm">
            Upcoming
          </span>
        )}
      </Link>
    </li>
  );
}

function LinksItems({ linkItem }) {
  const { subLink, name, href } = linkItem;
  if (subLink) {
    return (
      <li className="group/link relative text-nowrap">
        <button className="capitalize tracking-tighter flex items-center font-bold text-sm pt-3 pb-2 text-gray-700 group-hover/link:text-blue-500 border-b-4 border-b-blue-500/0 group-hover/link:border-b-blue-500">
          <Icon
            className="rotate-0 group-hover/link:-rotate-90  transition-transform 0.3s"
            icon="iconamoon:arrow-down-2"
          />
          {name}
        </button>
        <ul
          className=" 
                group-hover/link:block hidden absolute top-13 left-0 
                bg-white rounded-md shadow-sm shadow-blue-600 border
                "
        >
          {subLink.map((link, index) => (
            <SubLinksItems key={index} linkItem={link} />
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li className="text-nowrap capitalize">
      <Link
        className="tracking-tighter block font-bold text-sm pt-4 pb-2 text-gray-700 hover:text-blue-500 border-b-4 border-b-blue-500/0 hover:border-b-blue-500"
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}

function TopNavbarLinks() {
  return (
    <ul className="flex items-center gap-2">
      {topNavbarData.map((linkItem, index) => (
        <LinksItems key={index} linkItem={linkItem} />
      ))}
    </ul>
  );
}

export default function TopNavbar({ handleSidebar, isSidebarOpen }) {
  const token = useClient(() => getCookie('token'));
  return (
    <header
      className={`${isSidebarOpen ? 'lg:pl-64' : 'lg:pl-16'} transition-[padding] duration-200 bg-white sticky w-full z-10 top-0 start-0 border-b pt-1 border-gray-200`}
    >
      <div className="flex items-center justify-between mx-auto min-h-14 px-4">
        <button
          onClick={handleSidebar}
          className="block lg:hidden px-2 mr-2 text-3xl text-blue-700 hover:scale-105 hover:text-blue-800 transition-transform duration-200"
        >
          <Icon className="rounded-sm" icon="ant-design:menu-unfold-outlined" />
        </button>
        <Link href="/" className="min-w-max flex items-center">
          <Image width={60} height={60} src="/logo.svg" alt="ItaxEasy logo" />
        </Link>
        <nav className="mx-auto hidden lg:block">
          <TopNavbarLinks />
        </nav>
        <div className="flex">
          {/* <button onClick={handleSidebar} className="block lg:hidden px-2 mr-2 text-3xl text-blue-700 hover:scale-105 hover:text-blue-800 transition-transform duration-200">
                        <Icon className="rounded-sm" icon="material-symbols:menu"/>
                    </button> */}
          {token ? (
            <UserInfo />
          ) : (
            <Link
              href={'/login'}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
