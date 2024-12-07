// import Image from 'next/image';
// import Link from 'next/link';
// import { fetchApiServices } from '@/app/api/fetchData';
// import { iconList, categories } from './staticData';
// import { getUserOnServer } from '@/lib/getServerSideToken';
// import AddServices from './AddServices';

// export default async function Apis({ category }) {
//   const apiServices = await fetchApiServices(category);
//   const user = getUserOnServer();
//   // console.log(user);
//   return (
//     <div>
//       <AddServices user={user} />
//       <div className="flex items-center md:justify-center overflow-x-scroll md:overflow-auto mt-10 max-w-7xl mx-auto">
//         {categories.map((element) => (
//           <Link key={element.id} href={element.path}>
//             <div
//               className={`h-28 w-36 flex md:items-center justify-center px-5 border-b-4 mx-3 cursor-pointer text-nowrap ${
//                 category === element.id
//                   ? 'border-primary fill-primary text-primary'
//                   : 'border-white fill-zinc-500 text-zinc-500'
//               }`}
//             >
//               <div className="flex flex-col text-center items-center">
//                 {element.icon === undefined ? (
//                   <Image width={30} height={30} src={element.src} alt="icon" />
//                 ) : (
//                   <span className="object-contain h-9 w-9">{element.icon}</span>
//                 )}
//                 <p className="font-semibold mt-5">{element.title}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className="mb-10 md:rounded-xl bg-gray-200 grid-rows-1 p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {apiServices?.map((element, index) => (
//           <Link key={index} href={`/apis/${category}/${element.id}`}>
//             <div className="flex hover:shadow-lg h-full hover:shadow-primary flex-col justify-start items-center py-8 px-3 bg-white shadow-md rounded-lg mx-8 md:mx-0 cursor-pointer">
//               {iconList[element.title]?.icon ? (
//                 <span className="object-contain h-11 w-11 fill-zinc-600">
//                   {iconList[element.title]?.icon}
//                 </span>
//               ) : (
//                 <Image
//                   className="w-[40px] object-cover rounded-lg"
//                   src={iconList[element.title]?.src}
//                   width={44}
//                   height={44}
//                   alt="icon"
//                 />
//               )}
//               <div>
//                 <p className="heading-6 text-center my-8 ">{element.title}</p>
//                 <p className="description text-justify mt-1">
//                   {element.overview}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
