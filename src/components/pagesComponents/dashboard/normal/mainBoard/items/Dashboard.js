'use client';

// import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
// import GridContainer from '@/components/pagesComponents/grid/GridContainer';
// import GridItem from '@/components/pagesComponents/grid/GridItem';
// import { Icon } from '@iconify/react';
// import { FaUsers } from 'react-icons/fa';
// import { FaPlusCircle } from 'react-icons/fa';
import Button, { BTN_SIZES } from '../../../../../ui/Button';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { IoIosArrowForward } from 'react-icons/io';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  LineElement,
  BarElement,
  PointElement,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import moment from 'moment';
import Modal from '@/components/ui/Modal';
import Input from '@/components/ui/Input';

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  BarElement,
  Legend,
  Title,
  Tooltip,
);

const UserDashLinksData = [
  {
    linkTo: 'Bank Or Cash',
    icon: 'mdi:cart-sale',
    title: 'Users',
    data: '50055',
    image: '/images/user.png',
    cssClass:
      'px-2 py-1 mr-1 text-yellow-500 bg-yellow-100 rounded dark:text-yellow-100 dark:bg-yellow-500',
  },
  {
    linkTo: 'User',
    icon: 'carbon:purchase',
    title: ' Outgoing Bills',
    data: '50+',
    image: '/images/revenue.png',
    cssClass:
      'px-2 py-1 mr-1 text-indigo-500 bg-indigo-100 rounded dark:text-indigo-100 dark:bg-indigo-500',
  },
  {
    linkTo: 'Role Manager',
    icon: 'mdi:cash-return',
    title: 'Incoming Bills',
    data: '30+',
    image: '/images/revenue.png', ///images/rolemanager.png
    cssClass:
      'px-2 py-1 mr-1 text-pink-500 bg-pink-100 rounded dark:text-pink-100 dark:bg-pink-500',
  },
  {
    linkTo: 'Revenue Rs.505',
    icon: 'solar:box-broken',
    title: 'Cash Payment',
    data: '0',
    image: '/images/rolemanager.png',
    cssClass:
      'px-2 py-1 mr-1 text-green-500 bg-green-100 rounded dark:text-green-100 dark:bg-green-500',
  },
  {
    linkTo: 'Revenue Rs.505',
    icon: 'solar:box-broken',
    title: 'Bank Payment',
    data: '0',
    image: '/images/bankorcash.png',
    cssClass:
      'px-2 py-1 mr-1 text-green-500 bg-green-100 rounded dark:text-green-100 dark:bg-green-500',
  },
];

const CardCarouselData = [
  {
    linkTo: '/dashboard/accounts/sale-invoice-table',
    title: 'Sale',
    data: '50055',
    cssClass:
      'px-2 py-1 mr-1 text-yellow-500 bg-yellow-100 rounded dark:text-yellow-100 dark:bg-yellow-500',
  },
  {
    linkTo: '/dashboard/accounts/purchase-invoice-table',
    title: 'Purchase',
    data: '50055',
    cssClass:
      'px-2 py-1 mr-1 text-yellow-500 bg-yellow-100 rounded dark:text-yellow-100 dark:bg-yellow-500',
  },
  {
    linkTo: '/dashboard/accounts/payments-invoice-table',
    title: 'Payments',
    data: '50055',
    cssClass:
      'px-2 py-1 mr-1 text-yellow-500 bg-yellow-100 rounded dark:text-yellow-100 dark:bg-yellow-500',
  },
  {
    linkTo: '/dashboard/accounts/receivable-invoice-table',
    title: 'Receivable',
    data: '0',
    cssClass:
      'px-2 py-1 mr-1 text-green-500 bg-green-100 rounded dark:text-green-100 dark:bg-green-500',
  },
];

// const FooterDashLinksData = [
//   {
//     linkTo: 'Like us on facebook',
//     title: 'Like us on facebook',
//     bgColor: 'bg-[hsla(187,13%,34%,1)]',
//     data: '50,05',
//     image: '/images/facebook.png',
//     cssClass:
//       'px-2 py-1 mr-1 text-yellow-500 bg-indigo-100 rounded dark:text-yellow-100 dark:bg-yellow-500',
//   },
//   {
//     linkTo: 'Follow us on twitter',
//     title: 'Follow us on twitter',
//     bgColor: 'bg-[hsla(204, 88%, 53%, 1)]',
//     data: '48,596',
//     image: '/images/twitter.png',
//     cssClass:
//       'px-2 py-1 mr-1  text-indigo-500 bg-indigo-100 rounded dark:text-indigo-100 dark:bg-indigo-500',
//   },
//   {
//     linkTo: 'Follow us on instagram',
//     title: 'Follow us on instagram',
//     bgColor: 'bg-[hsla(13, 99%, 61%, 1)]',
//     data: '52,085',
//     image: '/images/instagram.png',
//     cssClass:
//       'px-2 py-1 mr-1 text-pink-500 bg-pink-100 rounded dark:text-pink-100 dark:bg-pink-500',
//   },
//   {
//     linkTo: 'Follow us on linkedin',
//     title: 'Follow us on linkedin',
//     bgColor: 'bg-[hsla(210, 90%, 40%, 1)]',
//     data: '690,50',
//     image: '/images/linkedin.png',
//     cssClass:
//       'px-2 py-1 mr-1  text-green-500 bg-indigo-100 rounded dark:text-green-100 dark:bg-green-500',
//   },
// ];

const QuickAccessData = [
  {
    label: 'Finance Year',
    type: 'financialyear',
    size: BTN_SIZES.md,
    variant: 'ghost',
    className: 'bg-customGreen hover:bg-green-600 w-2/3 font-bold ',
  },
  {
    label: 'Yearly',
    type: 'yearly',
    size: BTN_SIZES.md,
    variant: 'ghost',
    className: 'bg-customOrange hover:bg-orange-600 w-2/3 font-bold',
  },
  {
    label: 'Quaterly',
    type: 'quarterly',
    size: BTN_SIZES.md,
    variant: 'ghost',
    className: 'bg-customPurple hover:bg-purple-600 w-2/3 font-bold',
  },
  {
    label: 'Monthly',
    type: 'monthly',
    size: BTN_SIZES.md,
    variant: 'ghost',
    className: 'bg-customYellow hover:bg-yellow-600 w-2/3 font-bold',
  },
  {
    label: 'Weekly',
    type: 'weekly',
    size: BTN_SIZES.md,
    variant: 'ghost',
    className: 'bg-customLightGreen hover:bg-customGreen  w-2/3 font-bold',
  },
  // {
  //   label: 'Ledger Type ',
  //   size: BTN_SIZES.md,
  //   variant: 'ghost',
  //   className: 'bg-customAqua hover:bg-aqua-600 w-2/3 font-bold',
  // },
  // {
  //   label: 'Ledger Group ',
  //   size: BTN_SIZES.md,
  //   variant: 'ghost',
  //   className: 'bg-customGray hover:bg-gray-600 w-2/3 font-bold',
  // },
  // {
  //   label: 'Debit Voucher',
  //   size: BTN_SIZES.md,
  //   variant: 'ghost',
  //   className: 'bg-customLightGreen hover:bg-lightGreen-600 w-2/3 font-bold',
  // },
  // {
  //   label: 'Credit Voucher',
  //   size: BTN_SIZES.md,
  //   variant: 'ghost',
  //   className: 'bg-customBeige hover:bg-beige-600 w-2/3 font-bold',
  // },
];

export function NormalDashboardUpperItem() {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isListOfAcOpen, setIsListOfAcOpen] = useState(false);

  const reportsRef = useRef(null);
  const listOfAcRef = useRef(null);

  const toggleReportsDropdown = () => {
    setIsReportsOpen(!isReportsOpen);
    setIsListOfAcOpen(false); // Close the other dropdown
  };

  const toggleListOfAcDropdown = () => {
    setIsListOfAcOpen(!isListOfAcOpen);
    setIsReportsOpen(false); // Close the other dropdown
  };

  const handleClickOutside = (event) => {
    if (reportsRef.current && !reportsRef.current.contains(event.target)) {
      setIsReportsOpen(false);
    }
    if (listOfAcRef.current && !listOfAcRef.current.contains(event.target)) {
      setIsListOfAcOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="grid md:grid-cols-8 sm:grid-cols-1 gap-2  mx-4">
      <div className=" grid md:grid-cols-5 sm:grid-cols-1 gap-2 md:col-span-7 ">
        {UserDashLinksData.map((el, key) => (
          <div
            key={key}
            href={'/'}
            className="flex justify-between px-2 py-2  h-16 rounded-md shadow-md  shadow-blue-300
            hover:shadow-xl hover:shadow-blue-100 bg-white
            text-neutral-600"
          >
            <div className="">
              <p
                className={`
                              text-lg 
                              sm:w-full  
                          `}
              >
                {el?.title}
              </p>
              <p className="font-bold">{el?.data}</p>
            </div>{' '}
            <div className={el?.cssClass}>
              <Image src={el?.image} alt="abc" width={40} height={40} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-1 col-span-1">
        <div className="relative" ref={reportsRef}>
          <Button
            className="dropdown-button items-center  dropdown-button flex justify-around  dropdown-button hover:bg-blue-700 bg-blue-500 text-white font-semibold w-full h-8"
            onClick={toggleReportsDropdown}
          >
            <Image
              className="text-black font-bold"
              src="/images/report.png"
              alt="report image"
              width={20}
              height={20}
            />
            <span className=" ">Report</span>
            <span className=" pl-6">
              <IoIosArrowForward />
            </span>
          </Button>
          {isReportsOpen && (
            <ul className="absolute top-4 bg-white shadow-lg rounded-md mt-1 w-full text-black py-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Sale Reports
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Purchase Reports
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Profit & Loss Reports
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Balance Sheet Reports
              </li>

              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Ratio Analysis
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Depreciation Chart
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Other Reports
              </li>
            </ul>
          )}
        </div>
        <div className="relative" ref={listOfAcRef}>
          <Button
            className="flex justify-around  dropdown-button hover:bg-blue-700 bg-blue-500 text-white font-semibold w-full h-8"
            onClick={toggleListOfAcDropdown}
          >
            <Image
              className=""
              src="/images/listofacc.png"
              alt="report image"
              width={20}
              height={20}
            />{' '}
            <span className=" -top-10">List of Ac.</span>
            <span className="pt-1 ">
              {' '}
              <IoIosArrowForward />
            </span>
            {isListOfAcOpen && (
              <ul className="absolute bg-white shadow-lg rounded-md mt-1 w-full text-neutral-600 text-start py-4">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Sale
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Purchase
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Expense
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Cash
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Bank
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Tax
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Capital Accounts
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Customer
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Supplier
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Indirect Expenses
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Other Income
                </li>
              </ul>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
// export function NormalDashboardLowerItem() {
//   return (
//     <GridContainer className="mx-4 ">
//       {FooterDashLinksData.map((el, key) => (
//         <GridItem
//           key={key}
//           href={'/'}
//           className={`flex justify-between bg-white rounded-xl ${el?.bgColor}`}
//         >
//           <div className="">
//             <p
//               className={`
//                               text-lg
//                               sm:w-full
//                           `}
//             >
//               {el?.title}
//             </p>
//             <p className="font-bold">{el?.data}</p>
//           </div>{' '}
//           <div className={el?.cssClass}>
//             <Image src={el?.image} alt="abc" width={50} height={50} />
//           </div>
//         </GridItem>
//       ))}
//     </GridContainer>
//   );
// }

export function QuickAccess({ setFilterType, setDateFilter }) {
  const [isCustomDateModal, setIsCustomModal] = useState(false);
  const [customDate, setCustomDate] = useState({ from: '', to: '' });

  const handleDate = () => {
    setDateFilter({
      startDate: moment(customDate.from).format('YYYY-MM-DD'),
      endDate: moment(customDate.to).format('YYYY-MM-DD'),
    });
    setIsCustomModal(false);
  };

  return (
    <div
      className=" py-1 m-1 mx-4 rounded-md shadow-md  shadow-blue-300
      hover:shadow-xl hover:shadow-blue-100 bg-white
      text-neutral-600 "
    >
      <p className=" font-bold text-xl p-1">Quick Access</p>
      <div className=" grid md:grid-cols-6 sm:grid-cols-1 sm:gap-4 md:gap-1 rounded  pb-1 ">
        {QuickAccessData.map((btn, index) => (
          <Button
            key={index}
            size={btn.size}
            onClick={() => setFilterType(btn.type)}
            className={`col-span-1 px-3 py-2 mx-4  ${btn.className}`}
            variant={btn.variant}
          >
            {btn.label}
          </Button>
        ))}
        <Button
          variant="ghost"
          onClick={() => setIsCustomModal(true)}
          className="bg-customPink hover:bg-pink-600 w-2/3 font-bold"
        >
          Custom Date
        </Button>
        <Modal
          isOpen={isCustomDateModal}
          className="lg:w-[650px]"
          onClose={() => setIsCustomModal(false)}
          title="Custom Date"
        >
          <div className="grid md:grid-cols-2 gap-6 p-2">
            <Input
              value={customDate.from}
              onChange={(e) =>
                setCustomDate({ ...customDate, from: e.target.value })
              }
              label="From"
              type="date"
            />
            <Input
              value={customDate.to}
              onChange={(e) =>
                setCustomDate({ ...customDate, to: e.target.value })
              }
              label="To"
              type="date"
            />
            <div className={`md:col-span-2 pt-3 flex justify-center`}>
              <Button
                onClick={handleDate}
                className={`${BTN_SIZES['md-1']}`}
                variant="primary"
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
    // </DashSection>
  );
}

export function LineChart() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        data: [45, 60, 75, 52, 42, 42, 30],
        label: 'Profit',
        borderColor: 'rgba(10, 85, 204, 1)',
        borderWidth: 3,
        tension: 0.2,
      },
      {
        data: [25, 45, 55, 32, 35, 52, 25],
        label: 'Loss',
        borderColor: 'rgba(82, 194, 226, 0.85)',
        borderWidth: 3,
        tension: 0.2,
      },
    ],
  };
  const options = {
    // responsive:true,
    // aspectRatio:1,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        min: 20,
        max: 80,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          color: 'black',
          font: { size: 15 },
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true,
          padding: 10,
        },
        // padding: {
        //   bottom: 10, // Add padding below the legend
        // },
      },
      title: {
        display: true,
        text: 'Overview',
        font: {
          size: 25,
        },
        position: 'top',
        align: 'start',
        // padding: { bottom: 5 },
        padding: { bottom: 0, right: 20 },
      },
    },
    layout: {
      padding: {
        top: 10, // Adjust top padding to fit content properly
      },
    },
  };
  return (
    <div className="">
      <Line data={chartData} options={options}></Line>
    </div>
  );
  // flex max-w-3xl mx-auto justify-center items-center min-h-screen
}

export function BarChart() {
  const chartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [401, 502, 500, 550, 500, 500, 450, 390, 250, 390, 450, 550],
        label: 'Tax Collected',
        borderColor: 'rgba(82, 194, 226, 0.85)',
        borderWidth: 1,
        tension: 0.2,
        backgroundColor: 'rgba(82, 194, 226, 0.85)',
        borderRadius: 8,
        barPercentage: 0.9, // Adjust the bar width
        categoryPercentage: 0.4,
      },
      {
        data: [352, 601, 315, 650, 250, 550, 230, 310, 250, 240, 420, 410],
        label: 'Input Tax',
        borderColor: 'rgba(10, 85, 204, 1)',
        borderWidth: 1,
        tension: 0.2,
        backgroundColor: 'rgba(10, 85, 204, 1)',
        borderRadius: 8,
        barPercentage: 0.9, // Adjust the bar width
        categoryPercentage: 0.4,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 800,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          color: 'black',
          font: { size: 15 },
          boxWidth: 10,
          boxHeight: 10,
          // usePointStyle: true,
          // padding:10,
        },
        padding: {
          bottom: 10, // Add padding below the legend
        },
      },
      title: {
        display: true,
        text: 'Total Voucher',
        font: {
          size: 25,
        },
        position: 'top',
        align: 'start',
        // padding: { bottom: 5 },
        padding: { bottom: 0, right: 20 },
      },
    },
    layout: {
      padding: {
        top: 10, // Adjust top padding to fit content properly
      },
    },
  };
  // Register the custom plugin
  //  Chart.register(roundedBarPlugin);
  return (
    <div className="">
      <Bar data={chartData} options={options}>
        Chart demo{' '}
      </Bar>
    </div>
  );
}

export function CardCarousel() {
  //    const router = useRouter();

  return (
    <div className=" mx-1 p-1 grid grid-cols-4 gap-2">
      {CardCarouselData.map((item, index) => (
        <div
          key={index}
          className="h-fit bg-white p-4 grid grid-cols-1 gap-1 px-2 py-2 m-2  rounded-md shadow-md  shadow-blue-300 hover:shadow-xl hover:shadow-blue-100 text-neutral-600"
        >
          {' '}
          {/* <div className='flex justify-between'>
            <p className="text-black font-semibold">{item.title} </p>
            <button className="flex  bg-blue-100  border rounded-xl px-1">
              <span className="text-blue-500 pt-1">
                <FaPlusCircle />
              </span>{' '}
              <span className="text-blue-500 font-medium">Add</span>
            </button>
          </div> */}
          <Link href={item.linkTo}>
            <p className="text-black font-semibold">{item.title} </p>
            <p className="text-black font-semibold">{item.data}</p>
            <p className="text-black flex justify-between">
              <span>Paid Invoice</span> <span>0</span>
            </p>
            <hr />
            <p className="text-black flex justify-between">
              <span>UnPaid Invoice</span> <span>0</span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export function WelcomeHeader({ dateFilter }) {
  if (!dateFilter) {
    return null;
  }

  const { startDate, endDate } = dateFilter;
  return (
    <div className="flex justify-between py-2">
      <span className="text-lg grid grid-cols-2 gap-3 font-medium px-6">
        <span className="hover:font-bold">Welcome Super Admin!</span>
        {moment(startDate, 'YYYY-MM-DD').format('DD MMM, YYYY')} -{' '}
        {moment(endDate, 'YYYY-MM-DD').format('DD MMM, YYYY')}
      </span>
      <span className="text-lg font-medium pr-5">
        <span className="hover:font-bold ">Home</span> /{' '}
        <span className="hover:font-bold ">Admin</span>
      </span>
    </div>
  );
}

export default function Dashboard() {
  return (
    <main className="grid bg-neutral-50 gap-2">
      {/* <WelcomeHeader/> */}

      {/* <NormalDashboardUpperItem />  */}
      {/* <QuickAccess /> */}
      <CardCarousel />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center md:gap-2 sm:gap-5 mx-4 gap-2 ">
        <div className=" md:col-span-1  border rounded-2xl pl-4   shadow-md  shadow-blue-300 hover:shadow-xl hover:shadow-blue-100 bg-white text-neutral-600">
          <LineChart />
        </div>
        <div className=" md:col-span-1  border rounded-2xl pl-4 shadow-md shadow-blue-300 hover:shadow-xl hover:shadow-blue-100 bg-white text-neutral-600">
          <BarChart />
        </div>
      </div>

      {/* <NormalDashboardLowerItem /> */}
    </main>
  );
}
