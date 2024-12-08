// 'use client';
// import React, { useRef, useState } from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import axios from 'axios';
// const MOM_ITAX_URL = process.env.NEXT_PUBLIC_MOM_ITAX_URL;
// import { useReactToPrint } from 'react-to-print';
// import SearchResult_section from '@/components/pagesComponents/pageLayout/SearchResult_section.js';
// import Image from 'next/image';
// import { formatINRCurrency } from '@/utils/utilityFunctions';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const SimpleInterestCal = () => {
//   const principalRef = useRef('');
//   const roiRef = useRef('');
//   const timeperiodRef = useRef('');
//   const [showdata, setShowData] = useState('');
//   const [showStat, setShowStat] = useState(false);
//   // const [showTableData, setShowTableData] = useState([])
//   // const [showTableMonthData, setShowTableMonthData] = useState([])
//   const [loading, setLoading] = useState('');
//   const pdf_ref = useRef();
//   const generatePDF = useReactToPrint({
//     content: () => pdf_ref.current,
//     documentTitle: 'Simple Interest',
//   });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // await axios
//     //   .post(`${MOM_ITAX_URL}/calculator/miscellaneous/simple-interest`, {
//     //     principle: principalRef.current.value,
//     //     rate: roiRef.current.value,
//     //     year: timeperiodRef.current.value,
//     //   })
//     //   .then(function (response) {
//     //     // console.log(response.data);
//     //     setShowData(response.data.results);

//     //     // setShowTableData(response.data.results.yearlyCalculation)
//     //     // setShowTableMonthData(response.data.results.monthlyCalculation)
//     //     setLoading(false);
//     //     setShowStat(true);
//     //   })
//     //   .catch(function (error) {
//     //     console.log(error);
//     //     setLoading(false);
//     //     setShowStat(false);
//     //   });

//     const data = {
//       principle: principalRef.current.value,
//       interestEarned:
//         (Number(principalRef.current.value) *
//           Number(roiRef.current.value) *
//           Number(timeperiodRef.current.value)) /
//         100,
//     };
//     setShowData(data);
//     setLoading(false);
//     setShowStat(true);
//   };
//   const handleClear = () => {
//     principalRef.current.value = '';
//     roiRef.current.value = '';
//     timeperiodRef.current.value = '';
//     setShowData('');
//     setShowStat(false);
//   };
//   const data = {
//     labels: ['Principal', 'interestEarned'],
//     datasets: [
//       {
//         // label: '# of Votes',
//         data: [showdata.principle, showdata.interestEarned],
//         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
//         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <>
//       <SearchResult_section title="Simple Interest Calculator">
//         <li className="p-4">
//           <form action="" onSubmit={handleSubmit}>
//             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
//               <div>
//                 <div className="mb-3 xl:w-75 mx-2">
//                   <label
//                     htmlFor="exampleFormControlInput1"
//                     className="form-label inline-block mb-2 text-gray-700"
//                   >
//                     Principal
//                   </label>
//                   <div className="flex">
//                     <input
//                       required
//                       type="text"
//                       className="form-control
//                                         block
//                                         w-full
//                                         px-3
//                                         py-1.5
//                                         text-base
//                                         font-normal
//                                         text-gray-700
//                                         bg-white bg-clip-padding
//                                         border border-solid border-gray-300
//                                         rounded-l
//                                         transition
//                                         ease-in-out
//                                         m-0

//                                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//                                     "
//                       id="exampleFormControlInput1"
//                       placeholder="Principal"
//                       ref={principalRef}
//                     />
//                     <div className="flex items-center bg-primary text-white  rounded-r px-4">
//                       ₹
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-3 xl:w-75 mx-2">
//                   <label
//                     htmlFor="exampleFormControlInput2"
//                     className="form-label inline-block mb-2 text-gray-700"
//                   >
//                     Rate Of Interest (P.A.)
//                   </label>
//                   <div className="flex">
//                     <input
//                       required
//                       type="text"
//                       className="form-control
//                                         block
//                                         w-full
//                                         px-3
//                                         py-1.5
//                                         text-base
//                                         font-normal
//                                         text-gray-700
//                                         bg-white bg-clip-padding
//                                         border border-solid border-gray-300
//                                         rounded-l
//                                         transition
//                                         ease-in-out
//                                         m-0

//                                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//                                     "
//                       id="exampleFormControlInput2"
//                       placeholder="Rate Of Interest"
//                       ref={roiRef}
//                     />
//                     <div className="flex items-center bg-primary text-white  rounded-r px-4">
//                       %
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="mb-3 xl:w-75 mx-2">
//                   <label
//                     htmlFor="exampleFormControlInput3"
//                     className="form-label inline-block mb-2 text-gray-700"
//                   >
//                     Time Period (In Years)
//                   </label>
//                   <div className="flex">
//                     <input
//                       required
//                       type="text"
//                       className="form-control
//                                         block
//                                         w-full
//                                         px-3
//                                         py-1.5
//                                         text-base
//                                         font-normal
//                                         text-gray-700
//                                         bg-white bg-clip-padding
//                                         border border-solid border-gray-300
//                                         rounded-l
//                                         transition
//                                         ease-in-out
//                                         m-0

//                                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//                                     "
//                       id="exampleFormControlInput3"
//                       placeholder="Time Period"
//                       ref={timeperiodRef}
//                     />
//                     <div className="flex items-center bg-primary text-white  rounded-r px-4">
//                       Y
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="grid gap-4 lg:p-4 place-content-center grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] xl:grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`btn-primary ${loading ? ' cursor-not-allowed ' : ''}`}
//               >
//                 {loading ? <span className="spinner"></span> : 'Calculate'}
//               </button>
//               <button
//                 type="button"
//                 onClick={handleClear}
//                 className="btn-primary bg-red-500 hover:bg-red-600"
//               >
//                 Clear
//               </button>
//               {showStat && (
//                 <button
//                   type="button"
//                   className="btn-primary "
//                   onClick={generatePDF}
//                 >
//                   Print
//                 </button>
//               )}
//               {showStat && (
//                 <button
//                   type="button"
//                   className="btn-primary bg-green-500 hover:bg-green-600"
//                 >
//                   Download
//                 </button>
//               )}
//             </div>
//           </form>
//         </li>
//         {showStat && (
//           <li className="lg:col-span-2 bg-gray-200 p-4" ref={pdf_ref}>
//             {showStat && (
//               <div className="bg-gray-50 p-4 grid lg:grid-cols-2 gap-4 ">
//                 <div className="p-4 mx-auto sm:col-span-2 w-[95%] sm:w-3/4 md:w-1/2 aspect-square">
//                   <Pie data={data} />
//                 </div>
//                 <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
//                   <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
//                     Principal
//                   </h5>
//                   <h3 className="text-2xl">
//                     <span className="text-xl">
//                       {formatINRCurrency(showdata.principle)}
//                     </span>
//                   </h3>
//                 </div>
//                 <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
//                   <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 ">
//                     Interest Earned
//                   </h5>
//                   <h3 className="text-2xl">
//                     <span className="text-xl">
//                       {formatINRCurrency(showdata.interestEarned)}
//                     </span>
//                   </h3>
//                 </div>
//               </div>
//             )}
//           </li>
//         )}
//       </SearchResult_section>
//     </>
//   );
// };

// export default SimpleInterestCal;
