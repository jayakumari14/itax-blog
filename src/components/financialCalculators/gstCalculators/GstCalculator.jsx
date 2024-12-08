// 'use client';
// import React, { useRef, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { useReactToPrint } from 'react-to-print';
// import SearchResult_section from '@/components/pagesComponents/pageLayout/SearchResult_section.js';
// import { formatINRCurrency } from '@/utils/utilityFunctions';
// ChartJS.register(ArcElement, Tooltip, Legend);

// const GstCal = () => {
//   const gsttypeRef = useRef('choose');
//   const gstammountRef = useRef('');
//   const gstrateRef = useRef('');
//   const [showdata, setShowData] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showStat, setShowStat] = useState(false);
//   const pdf_ref = useRef();
//   const generatePDF = useReactToPrint({
//     content: () => pdf_ref.current,
//     documentTitle: 'GST',
//   });
//   const handleClear = () => {
//     gsttypeRef.current.value = 'choose';
//     gstammountRef.current.value = '';
//     gstrateRef.current.value = '';
//     setShowStat(false);
//     setShowData('');
//   };
//   const signMap = {
//     including: '-',
//     excluding: '+',
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const type = gsttypeRef.current.value; // 'including' or 'excluding'
//     const amount = parseFloat(gstammountRef.current.value); // Amount
//     const rate = parseFloat(gstrateRef.current.value); // GST Rate

//     let gstAmount = 0;
//     let totalAmount = 0;

//     if (type === 'including') {
//       gstAmount = (amount * rate) / (100 + rate);
//       totalAmount = amount - gstAmount;
//     } else if (type === 'excluding') {
//       gstAmount = (amount * rate) / 100;
//       totalAmount = amount + gstAmount;
//     } else {
//       console.error('Invalid GST type');
//     }

//     const data = {
//       amount: amount,
//       finalAmount: totalAmount.toFixed(2),
//       gstAmount: gstAmount.toFixed(2),
//       gstRate: rate,
//     };
//     setShowData(data);
//     setLoading(false);
//     setShowStat(true);
//   };

//   const data = {
//     labels: ['Base Amount', 'GST'],
//     datasets: [
//       {
//         data: [showdata.amount || 0, showdata.gstAmount || 0],
//         backgroundColor: [
//           'rgba(26, 259, 13, 0.2)',
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//         ],
//         borderColor: [
//           'rgba(26, 259, 13, 1)',
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 m-4 w-full max-w-3xl">
//         <h1 className="text-4xl font-semibold mb-4">Page Title</h1>
//         <SearchResult_section title="GST Calculator">
//           <li className="p-3">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
//                 <div>
//                   <label
//                     htmlFor="gstType"
//                     className="form-label inline-block mb-2 text-gray-700"
//                   >
//                     GST Type
//                   </label>
//                   <div className="flex justify-center">
//                     <select
//                       id="gstType"
//                       ref={gsttypeRef}
//                       className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                       aria-label="GST Type"
//                     >
//                       <option value="choose">Choose..</option>
//                       <option value="excluding">GST Excluding</option>
//                       <option value="including">GST Including</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="gstAmount"
//                     className="form-label inline-block mb-2 text-gray-700"
//                   >
//                     Amount
//                   </label>
//                   <div className="flex">
//                     <input
//                       required
//                       type="number"
//                       id="gstAmount"
//                       className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                       placeholder="GST Amount"
//                       ref={gstammountRef}
//                     />
//                     <div className="flex items-center bg-primary text-white rounded-r px-4">
//                       ₹
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="gstRate"
//                     className="form-label inline-block mb-2 text-gray-700"
//                   >
//                     GST Rate
//                   </label>
//                   <div className="flex">
//                     <input
//                       required
//                       type="number"
//                       id="gstRate"
//                       className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                       placeholder="GST Rate"
//                       ref={gstrateRef}
//                     />
//                     <div className="flex items-center bg-primary text-white rounded-r px-4">
//                       %
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid gap-4 lg:p-4 place-content-center grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] xl:grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
//                 <button
//                   disabled={loading}
//                   className={`btn-primary ${loading ? ' cursor-not-allowed ' : ''}`}
//                 >
//                   {loading ? <span className="spinner"></span> : 'Calculate'}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleClear}
//                   className="btn-primary bg-red-500 hover:bg-red-600"
//                 >
//                   Clear
//                 </button>
//                 {showStat && (
//                   <button
//                     type="button"
//                     className="btn-primary "
//                     onClick={generatePDF}
//                   >
//                     Print
//                   </button>
//                 )}
//                 {showStat && (
//                   <button
//                     type="button"
//                     className="btn-primary bg-green-500 hover:bg-green-600"
//                   >
//                     Download
//                   </button>
//                 )}
//               </div>
//             </form>
//           </li>
//           {showStat && (
//             <li
//               className="lg:col-span-2 space-y-4 bg-gray-200 p-4"
//               ref={pdf_ref}
//             >
//               {showStat && (
//                 <div className="p-4 bg-neutral-50">
//                   <div className="p-4 mx-auto sm:col-span-2 w-[95%] sm:w-3/4 md:w-1/2 aspect-square ">
//                     <Pie data={data} />
//                   </div>
//                   <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 place-content-center">
//                     <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-4">
//                       <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
//                         Base Amount
//                       </h5>
//                       <h3 className="text-2xl">
//                         <span className="text-xl">
//                           {formatINRCurrency(showdata.amount || 0)}
//                         </span>
//                       </h3>
//                     </div>
//                     <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-4">
//                       <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
//                         GST Amount
//                       </h5>
//                       <h3 className="text-2xl">
//                         <span className="text-xl">
//                           {formatINRCurrency(showdata.gstAmount || 0)}
//                         </span>
//                       </h3>
//                     </div>
//                     <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-4">
//                       <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
//                         Final Amount
//                       </h5>
//                       <h3 className="text-2xl">
//                         <span className="text-xl">
//                           {formatINRCurrency(showdata.finalAmount || 0)}
//                         </span>
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>
//           )}
//         </SearchResult_section>
//       </div>
//     </div>
//   );
// };

// export default GstCal;
