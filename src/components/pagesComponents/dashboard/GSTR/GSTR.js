// 'use client';

// // import Link from 'next/link';
// // import Section from "@/components/pagesComponents/pageLayout/Section";
// // import Button from './Button';
// // import generateFY from "@/helper/generateFY";
// import { useRouter } from 'next/navigation';
// import DashSection from '../../pageLayout/DashSection';
// import { useEffect, useState } from 'react';
// import GSTRButtons from './GSTRButtons';
// import GSTRInfo from './GSTRInfo';
// import GSTR_Supply from './GSTR_Supply';
// import GSTRTable from './GSTRTable';
// import GSTR_LedgerBalance from './GSTR_LedgerBalance';
// import { getTrackGstReturn } from '@/helper/api/gstrApi';
// import { isInQuarter } from './utility';

// const allFYYears = [];
// const date = new Date();

// const { currentYear, currentMonth } = {
//   currentYear: date.getFullYear(),
//   currentMonth: date.getMonth() + 1,
// };

// // Select option financial year
// for (let i = currentYear - 4; i < currentYear; i++) {
//   const startYear = i + 1;
//   const endYear = i + 2;
//   const shortEndYear = parseInt(endYear.toString().substring(2));
//   allFYYears.unshift({ startYear: startYear, endYear: shortEndYear });
// }

// // export default function GSTR({ businessProfile }) {
//   const router = useRouter();
//   const [FYYear, setFYYear] = useState();
//   const [monthRange, setMonthRange] = useState();
//   // const [selectedMonth, setSelectedMonth] = useState('');
//   const [bProfile, setBProfile] = useState(businessProfile);
//   const [isLoadingGstTrack, setIsLoadingGstTrack] = useState(false);
//   const [registrationType, setRegistrationType] = useState('');
//   const [gstrReturnTrack, setGstrReturnTrack] = useState(null);
//   const [gstrReturnTrackFiltered, setGstrReturnTrackFiltered] = useState(null);

//   function handleChange(value) {
//     router.push(`/dashboard/easy-gst-return/gstr/${value}`);
//     value = '';
//   }

//   // Sets the range options state for select
//   const setMonthRangeBasedOnCurrentMonth = () => {
//     let monthRange;
//     if (currentMonth >= 4 && currentMonth <= 6) {
//       monthRange = 'Apr-Jun';
//     } else if (currentMonth >= 7 && currentMonth <= 9) {
//       monthRange = 'Jul-Sep';
//     } else if (currentMonth >= 10 && currentMonth <= 12) {
//       monthRange = 'Oct-Dec';
//     } else if (currentMonth >= 1 && currentMonth <= 3) {
//       monthRange = 'Jan-Mar';
//     } else {
//       monthRange = 'Invalid month';
//     }

//     setMonthRange(monthRange);
//   };

//   useEffect(() => {
//     if (!monthRange) setMonthRangeBasedOnCurrentMonth();
//     // if (!selectedMonth) setSelectedMonth(currentMonth);
//     if (!FYYear) {
//       setFYYear(`${currentYear}-${(currentYear + 1)?.toString().substring(2)}`);
//     }
//     if (!registrationType) {
//       setRegistrationType(
//         bProfile?.taxpayer_type ? bProfile?.taxpayer_type.toLowerCase() : '',
//       );
//     }
//   }, [bProfile]);

//   useEffect(() => {
//     if (FYYear && bProfile) {
//       (async function () {
//         try {
//           setIsLoadingGstTrack(true);
//           const res = await getTrackGstReturn({
//             gstin: bProfile?.gstin,
//             financialYear: `FY ${FYYear}`,
//           });
//           setGstrReturnTrack(res?.EFiledlist);
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setIsLoadingGstTrack(false);
//         }
//       })();
//     }
//   }, [FYYear, bProfile]);

//   useEffect(() => {
//     if (gstrReturnTrack) {
//       setGstrReturnTrackFiltered(
//         gstrReturnTrack.filter((list) => isInQuarter(list.dof, monthRange)),
//       );
//     }
//   }, [monthRange, gstrReturnTrack]);

//   const userDetails = {
//     gstNum: bProfile?.gstin,
//     tradeName: bProfile?.businessName,
//   };

//   const supplyData = [
//     ['', 18, 9, 9, 2],
//     ['', 36, 18, 18, 4],
//     ['', 36, 18, 18, 4],
//     ['', 54, 27, 27, 6],
//     ['', 72, 36, 36, 8],
//     ['', 90, 45, 45, 10],
//     ['', 108, 54, 54, 12],
//     ['', 126, 63, 63, 14],
//   ];

//   return (
//     <>
//       <DashSection
//         title="Easy GST Return"
//         titleRight={
//           <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-2">
//             <p className="px-2 py-2">
//               GSTIN - <span className="uppercase">{userDetails.gstNum}</span>
//             </p>

//             <p className="px-2 py-2">
//               Trade Name -{' '}
//               <span className="uppercase">{userDetails.tradeName}</span>
//             </p>
//           </div>
//         }
//       >
//         <form className="p-4">
//           <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2 sm:gap-4 justify-evenly">
//             <li className="lg:">
//               <label htmlFor="FY-year">Select F.Y. Year: </label>
//               <select
//                 id="FY-year"
//                 className={`
// 									bg-gray-50
// 									border border-gray-300
// 									text-gray-900 text-sm
// 									rounded-lg focus:ring-blue-500 focus:border-blue-500
// 									block w-full p-2.5
// 								`}
//                 value={FYYear}
//                 onChange={(e) => setFYYear(e.target.value)}
//               >
//                 <option value="">Choose a Year</option>
//                 {allFYYears?.map((years) => {
//                   const fy = `${years.startYear}-${years.endYear}`;
//                   return (
//                     <option key={years.startYear} value={fy}>
//                       {fy}
//                     </option>
//                   );
//                 })}
//               </select>
//             </li>
//             <li>
//               <label htmlFor="monthRange">Period Range:</label>
//               <select
//                 id="monthRange"
//                 name="monthRange"
//                 className={`
// 									bg-gray-50
// 									border border-gray-300
// 									text-gray-900 text-sm
// 									rounded-lg
// 									focus:ring-blue-500 focus:border-blue-500
// 									block w-full p-2.5
// 								`}
//                 value={monthRange}
//                 onChange={(e) => {
//                   setMonthRange(e.target.value);
//                   // setSelectedMonth('');
//                 }}
//               >
//                 <option value="Oct-Dec">Oct - Dec</option>
//                 <option value="Jul-Sep">Jul - Sep</option>
//                 <option value="Apr-Jun">Apr - Jun</option>
//                 <option value="Jan-Mar">Jan - Mar</option>
//               </select>
//             </li>

//             {/* <li className="lg:">
//               <label htmlFor="month">Month:</label>
//               <select
//                 id="month"
//                 name="month"
//                 className={`
// 									bg-gray-50
// 									border border-gray-300
// 									text-gray-900 text-sm
// 									rounded-lg
// 									focus:ring-blue-500 focus:border-blue-500
// 									block w-full p-2.5
// 								`}
//                 value={selectedMonth}
//                 onChange={(e) => setSelectedMonth(e.target.value)}
//               >
//                 <option value="">Select Month</option>
//                 {monthRange === 'Oct-Dec' && (
//                   <>
//                     <option value="December">December</option>
//                     <option value="November">November</option>
//                     <option value="October">October</option>
//                   </>
//                 )}
//                 {monthRange === 'Jul-Sep' && (
//                   <>
//                     <option value="September">September</option>
//                     <option value="August">August</option>
//                     <option value="July">July</option>
//                   </>
//                 )}
//                 {monthRange === 'Apr-Jun' && (
//                   <>
//                     <option value="June">June</option>
//                     <option value="May">May</option>
//                     <option value="April">April</option>
//                   </>
//                 )}
//                 {monthRange === 'Jan-Mar' && (
//                   <>
//                     <option value="March">March</option>
//                     <option value="February">February</option>
//                     <option value="January">January</option>
//                   </>
//                 )}
//               </select>
//             </li> */}

//             <li className="lg:">
//               <label htmlFor="registrationType">Registration Type:</label>
//               <select
//                 id="registrationType"
//                 name="registrationType"
//                 className={`
// 									bg-gray-50
// 									border border-gray-300
// 									text-gray-900 text-sm
// 									rounded-lg
// 									focus:ring-blue-500 focus:border-blue-500
// 									block w-full p-2.5
// 								`}
//               >
//                 {registrationType === 'composition' && (
//                   <option value="composition">Composition</option>
//                 )}
//                 {registrationType === 'regular' && (
//                   <option value="regular">Regular</option>
//                 )}
//               </select>
//             </li>
//             {FYYear && monthRange && registrationType && (
//               <li className="lg:">
//                 <label htmlFor="GSTR">GSTR: </label>
//                 <select
//                   id="GSTR"
//                   name="GSTR"
//                   className={`
// 									bg-gray-50
// 									border border-gray-300
// 									text-gray-900 text-sm
// 									rounded-lg
// 									focus:ring-blue-500 focus:border-blue-500
// 									block w-full p-2.5
// 								`}
//                   onChange={(e) => handleChange(e.target.value)}
//                   defaultValue={'gstr1'}
//                 >
//                   <option value="">Select GSTR</option>
//                   {registrationType === 'regular' && (
//                     <>
//                       <option value={'gstr1'}>GSTR-1</option>
//                       <option value={'gstr2a'}>GSTR-2A</option>
//                       <option value={'gstr2b'}>GSTR-2B</option>
//                       <option value={'gstr3b'}>GSTR-3B</option>
//                     </>
//                   )}
//                   {registrationType === 'composition' && (
//                     <>
//                       <option value="gstr-4a">GSTR-4A</option>
//                       <option value="gstr-cmp8">CMP-8</option>
//                     </>
//                   )}
//                 </select>
//               </li>
//             )}
//           </ul>
//         </form>
//         <GSTRButtons />
//       </DashSection>

//       <GSTRInfo
//         isLoading={isLoadingGstTrack}
//         gstrReturnTrack={gstrReturnTrackFiltered}
//       />
//       <DashSection className="overflow-x-auto p-4">
//         <div className="flex shadow rounded">
//           <GSTR_Supply />
//           <GSTRTable supplyData={supplyData} />
//           <GSTR_LedgerBalance />
//         </div>
//       </DashSection>
//     </>
//   );
// }
