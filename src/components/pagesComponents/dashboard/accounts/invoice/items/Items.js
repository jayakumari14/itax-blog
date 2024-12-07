import Link from 'next/link';
import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import { getInvoiceItems } from '@/app/dashboard/accounts/invoice/items/page';
import ItemsTable from './ItemsTable';
import { Suspense } from 'react';
import ItemsFilters from './ItemsFilters';
import Loader from '@/components/partials/loading/Loader';

export default async function Items() {
  const itemsData = await getInvoiceItems(); // server side fetch request
  const linkToCreateSale = '/dashboard/accounts/invoice/items/create-item';

  return (
    <>
      <Suspense fallback={<Loader />}>
        <DashSection title="Items" className="p-4 mx-auto my-2 border">
          <div className="p-2">
            <div className="flex gap-2 justify-end mb-2 mx-auto">
              <Link href={linkToCreateSale}>
                <button
                  type="button"
                  className="capitalize flex items-center focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  "
                >
                  create items
                </button>
              </Link>
            </div>

            <ItemsFilters />

            <div className="my-4 max-h-96 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
              <Suspense fallback={<div>Loading...</div>}>
                <ItemsTable itemsData={itemsData} />
              </Suspense>
            </div>
            {/* {isLoading ? 'loading' : isError ? 'error' : ''} */}
            {itemsData?.items.length === 0 ? (
              <div className=" flex flex-col items-center gap-4 justify-center mb-2 mx-auto">
                <div>
                  <p className="text-center">No Record Found</p>
                </div>
                <Link href={linkToCreateSale}>
                  <button
                    type="button"
                    className="capitalize flex items-center focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  "
                  >
                    create sales
                  </button>
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </DashSection>
      </Suspense>
    </>
  );
}

// 'use client';

// import { Icon } from '@iconify/react';
// import Link from 'next/link';
// import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
// import { useEffect, useState } from 'react';
// import userAxios from '@/lib/userAxios';
// import { toast } from 'react-toastify';

// export default function Items() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(null);
//   const [error, setError] = useState(null);
//   const [respData, setRespData] = useState();

//   const fetchItemsData = async () => {
//     try {
//       setIsLoading(true);
//       setIsError(false);

//       const response = await userAxios.get('/invoice/items');
//       setRespData(response.data);

//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       setIsError(true);
//       setError({ isError: true, error });
//     }
//   };

//   useEffect(() => {
//     fetchItemsData();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const response = await userAxios.delete('/invoice/items/' + id);
//       if (response.data.success) {
//         toast.success(`Item Deleted : ${response.data.item?.itemName}`);
//         fetchItemsData();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const itemsData = {
//     itemsData_title: [
//       {
//         title: 'itemName',
//       },
//       {
//         title: 'id',
//       },
//       {
//         title: 'unit',
//       },
//       {
//         title: 'price',
//       },
//       {
//         title: 'openingStock',
//       },
//       {
//         title: 'closingStock',
//       },
//       {
//         title: 'purchasePrice',
//       },
//       {
//         title: 'gst',
//       },
//       {
//         title: 'taxExempted',
//       },
//       {
//         title: 'description',
//       },
//       {
//         title: 'hsnCode',
//       },
//       {
//         title: 'categoryId',
//       },
//       {
//         title: 'supplierId',
//       },
//       {
//         title: 'userId',
//       },
//       {
//         title: 'createdAt',
//       },
//       {
//         title: 'updatedAt',
//       },
//     ],
//   };
//   const linkToCreateSale = '/dashboard/accounts/invoice/items/create-item';

//   return (
//     <>
//       <DashSection title="Items" className="p-4 max-w-6xl mx-auto">
//         <div className=" flex gap-2 justify-end mb-2 max-w-6xl mx-auto">
//           <Link href={linkToCreateSale}>
//             <button
//               type="button"
//               className="capitalize flex items-center focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  "
//             >
//               create items
//             </button>
//           </Link>
//         </div>
//         <form className="grid md:grid-cols-[1fr_auto] gap-2 items-center max-w-6xl mx-auto">
//           <label
//             htmlFor="default-search"
//             className=" text-sm font-medium text-neutral-900 sr-only dark:text-white"
//           >
//             Search
//           </label>
//           <div className="relative">
//             <input
//               type="search"
//               id="default-search"
//               className="block w-full py-2 px-4 pe-6 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Search Name, Address..."
//               required
//             />
//             <button
//               type="submit"
//               className="m-2 bg-neutral-50 dark:bg-neutral-900 absolute inset-y-0 end-0 flex items-center p-2"
//             >
//               <Icon icon="zondicons:search" />
//             </button>
//           </div>

//           <div className="relative m-[2px] float-right ml-auto sm:block">
//             <label htmlFor="inputFilter" className="sr-only">
//               Filter
//             </label>
//             <select
//               id="inputFilter"
//               className="block w-40 rounded-lg border dark:border-none dark:bg-neutral-600 p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
//             >
//               <option value="1">Last week</option>
//               <option value="2">Last month</option>
//               <option value="3">Yesterday</option>
//               <option value="4">Last 7 days</option>
//               <option value="5">Last 30 days</option>
//             </select>
//           </div>
//         </form>
//         <div className="my-4 max-w-6xl max-h-96 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
//             <thead className=" sticky -top-0 shadow-md text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
//               <tr className="border-b-2 dark:border-neutral-900">
//                 {itemsData.itemsData_title.map((item, index) => (
//                   <th
//                     className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap"
//                     key={index}
//                   >
//                     {item.title}
//                   </th>
//                 ))}
//                 <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">
//                   action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100 border-t border-gray-100">
//               {respData?.items.length != 0 &&
//                 respData?.items.map((item, i) => (
//                   <tr
//                     key={i}
//                     className="odd:bg-white odd:dark:bg-neutral-900 even:bg-neutral-50 even:dark:bg-neutral-800 border-b dark:border-neutral-700"
//                   >
//                     <td className="px-6 py-4 font-semibold text-gray-900">
//                       {item.itemName}
//                     </td>
//                     <td className="px-6 py-4">{item.id}</td>
//                     <td className="px-6 py-4">{item.unit}</td>
//                     <td className="px-6 py-4">{item.price}</td>
//                     <td className="px-6 py-4">{item.openingStock}</td>
//                     <td className="px-6 py-4">{item.closingStock}</td>
//                     <td className="px-6 py-4">{item.purchasePrice}</td>
//                     <td className="px-6 py-4">{item.gst}</td>
//                     <td className="px-6 py-4">{item.taxExempted}</td>
//                     <td className="px-6 py-4">{item.description}</td>
//                     <td className="px-6 py-4">{item.hsnCode}</td>
//                     <td className="px-6 py-4">{item.categoryId}</td>
//                     <td className="px-6 py-4">{item.supplierId}</td>
//                     <td className="px-6 py-4">{item.userId}</td>
//                     <td className="px-6 py-4">{item.createdAt}</td>
//                     <td className="px-6 py-4">{item.updatedAt}</td>
//                     <td className="px-6 py-4 flex">
//                       <Icon
//                         icon="bxs:edit"
//                         className=" cursor-pointer hover:text-blue-700 text-xl"
//                       />
//                       <Icon
//                         onClick={() => handleDelete(item.id)}
//                         icon="material-symbols:delete"
//                         className=" cursor-pointer hover:text-red-700 text-xl"
//                       />
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//         {isLoading ? 'loading' : isError ? 'error' : ''}
//         {respData?.items.length === 0 ? (
//           <div className=" flex flex-col items-center gap-4 justify-center mb-2 max-w-6xl mx-auto">
//             <div>
//               <Icon
//                 className="w-40 h-24 opacity-5 mx-auto"
//                 icon="ph:files-light"
//               />
//               <p className="text-center">No Record Found</p>
//             </div>
//             <Link href={linkToCreateSale}>
//               <button
//                 type="button"
//                 className="capitalize flex items-center focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  "
//               >
//                 create sales
//               </button>
//             </Link>
//           </div>
//         ) : (
//           ''
//         )}
//       </DashSection>
//     </>
//   );
// }
