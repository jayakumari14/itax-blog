import { H4 } from '@/components/pagesComponents/pageLayout/Headings';
// import { Icon } from '@iconify/react';
import GridContainer from '@/components/pagesComponents/grid/GridContainer';
import Link from 'next/link';
// function Landing({ upper }) {
//   const { register, handleSubmit, getValues } = useForm();
//   const [editlanding, setEditLanding] = useState(false);

//   const handleEditLanding = (event) => {
//     event.preventDefault();
//     setEditLanding(!editlanding);
//   };
//   const SubmitUpdate = () => {
//     userAxios
//       .post('/cms/main-heading-content', {
//         upper: {
//           mainHeading: getValues('mainheading'),
//           subHeading: getValues('subheading'),
//           button: getValues('button'),
//         },
//       })
//       .then(function (response) {
//         console.log('direact', response.data);
//         toast('Changed Successfully', {
//           type: 'success',
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <form className=" mx-auto">
//         <div className="flex justify-end m-2">
//           {!editlanding ? (
//             <button className="btn-primary mt-7" onClick={handleEditLanding}>
//               Edit
//             </button>
//           ) : (
//             <>
//               <button className="btn-primary mx-2  mt-7" onClick={SubmitUpdate}>
//                 Save
//               </button>

//               <button className="btn-primary  mt-7" onClick={handleEditLanding}>
//                 Cancel
//               </button>
//             </>
//           )}
//         </div>
//         <div className="flex justify-center   mb-2">
//           <div className="w-full md:w-1/4 px-3">
//             <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//               Main Heading {editlanding && <Icon icon="line-md:edit" />}
//             </label>
//             {editlanding ? (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="mainheading"
//                 type="text"
//                 placeholder="main heading"
//                 {...register('mainheading')}
//               />
//             ) : (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="first-name"
//                 type="text"
//                 value={upper.mainHeading}
//                 placeholder="Main Heading"
//               />
//             )}
//           </div>
//           <div className="w-full md:w-2/4 px-3">
//             <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//               Sub Heading {editlanding && <Icon icon="line-md:edit" />}
//             </label>
//             {editlanding ? (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="heading"
//                 type="text"
//                 placeholder="heading"
//                 {...register('subheading')}
//               />
//             ) : (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="heading"
//                 type="text"
//                 value={upper.subHeading}
//                 placeholder="heading"
//               />
//             )}
//           </div>
//           <div className="w-full md:w-1/4 px-3">
//             <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//               Button Text {editlanding && <Icon icon="line-md:edit" />}
//             </label>
//             {editlanding ? (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="button"
//                 type="text"
//                 placeholder="button text"
//                 {...register('button')}
//               />
//             ) : (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="button"
//                 type="text"
//                 value={upper.button}
//                 placeholder="button text"
//               />
//             )}
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
// function Ongoing_Edit({ ongoingPro }) {
//   const { register, handleSubmit, getValues } = useForm();
//   const [editongoing, setEditongoing] = useState(false);
//   const [ogPro, setOgPro] = useState([
//     {
//       ongoingPro: [
//         {
//           image: '',
//           heading: '',
//         },
//       ],
//     },
//   ]);

//   useEffect(() => {
//     // This will map over navCard and setNvCards accordingly
//     setOgPro(
//       ongoingPro?.map((item) => ({
//         image: item?.image || '',
//         heading: item?.heading || '',
//       })),
//     );
//   }, [ongoingPro]);

//   const handleOnGoing = () => {
//     setEditongoing(!editongoing);
//   };
//   const handleImgUrlChange = (i, value) => {
//     const updateOGChange = [...ogPro];
//     updateOGChange[i].image = value;
//     setOgPro(updateOGChange);
//   };
//   const handleHeadingChange = (i, value) => {
//     const updateOGChange = [...ogPro];
//     updateOGChange[i].heading = value;
//     setOgPro(updateOGChange);
//   };

//   const SubmitUpdate = () => {
//     userAxios
//       .post('/cms/ongoingprojects', {
//         ongoingPro: ogPro,
//       })
//       .then(function (response) {
//         console.log('direact', response.data);
//         toast('Changed Successfully', {
//           type: 'success',
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <div className=" mx-auto">
//         <div className="flex justify-end m-2">
//           {!editongoing ? (
//             <button className="btn-primary mt-7" onClick={handleOnGoing}>
//               Edit
//             </button>
//           ) : (
//             <>
//               <button className="btn-primary mx-2  mt-7" onClick={SubmitUpdate}>
//                 Save
//               </button>

//               <button className="btn-primary  mt-7" onClick={handleOnGoing}>
//                 Cancel
//               </button>
//             </>
//           )}
//         </div>
//         {ongoingPro.map((ongoingPro, i) => (
//           <div key={i} className="flex justify-center   mb-2">
//             <div className="w-full md:w-1/4 px-3">
//               <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//                 image Url {editongoing && <Icon icon="line-md:edit" />}
//               </label>
//               {editongoing ? (
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="imgurl"
//                   type="text"
//                   placeholder="Image Url"
//                   onChange={(e) => handleImgUrlChange(i, e.target.value)}
//                 />
//               ) : (
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="first-name"
//                   type="text"
//                   value={ongoingPro.image}
//                   placeholder="img url"
//                 />
//               )}
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//                 Heading {editongoing && <Icon icon="line-md:edit" />}
//               </label>
//               {editongoing ? (
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="heading"
//                   type="text"
//                   placeholder="heading"
//                   onChange={(e) => handleHeadingChange(i, e.target.value)}
//                 />
//               ) : (
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="heading"
//                   type="text"
//                   value={ongoingPro.heading}
//                   placeholder="heading"
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// function Card({ Cards, editCards }) {
//   const { register, handleSubmit, getValues } = useForm();

//   return (
//     <>
//       <div className=" mx-auto">
//         <div className="flex flex-row justify-center   mb-2">
//           <div className=" px-3">
//             <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//               Card Heading {editCards && <Icon icon="line-md:edit" />}
//             </label>
//             {editCards ? (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="cardHeading"
//                 type="text"
//                 placeholder="card Heading"
//                 {...register('cardHeading')}
//               />
//             ) : (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="first-name"
//                 type="text"
//                 value={Cards.cardHeading}
//                 placeholder="cardHeading"
//               />
//             )}
//           </div>
//           <div className=" px-3">
//             <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//               sub1 {editCards && <Icon icon="line-md:edit" />}
//             </label>
//             {editCards ? (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="sub1"
//                 type="text"
//                 placeholder="sub1"
//                 {...register('sub1')}
//               />
//             ) : (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="sub1"
//                 type="text"
//                 value={Cards.sub1}
//                 placeholder="sub1"
//               />
//             )}
//           </div>
//           <div className=" px-3">
//             <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//               sub2 {editCards && <Icon icon="line-md:edit" />}
//             </label>
//             {editCards ? (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="sub2"
//                 type="text"
//                 placeholder="sub2"
//                 {...register('sub2')}
//               />
//             ) : (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="sub2"
//                 type="text"
//                 value={Cards.sub2}
//                 placeholder="sub2"
//               />
//             )}
//           </div>
//           <div className=" px-3">
//             <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//               sub3 {editCards && <Icon icon="line-md:edit" />}
//             </label>
//             {editCards ? (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="sub3"
//                 type="text"
//                 placeholder="sub3"
//                 {...register('sub3')}
//               />
//             ) : (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="sub3"
//                 type="text"
//                 value={Cards.sub3}
//                 placeholder="sub3"
//               />
//             )}
//           </div>
//           <div className=" px-3">
//             <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//               sub4 {editCards && <Icon icon="line-md:edit" />}
//             </label>
//             {editCards ? (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="sub4"
//                 type="text"
//                 placeholder="sub4"
//                 {...register('sub4')}
//               />
//             ) : (
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="sub4"
//                 type="text"
//                 value={Cards.sub4}
//                 placeholder="sub4"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// function NavCards({ navCard }) {
//   const [editNavCard, setEditNavCard] = useState(false);
//   const [nvcards, setNvCards] = useState([
//     {
//       link: '',
//       name: '',
//       cards: [
//         {
//           content: '',
//           heading: '',
//         },
//       ],
//     },
//   ]);

//   useEffect(() => {
//     // This will map over navCard and setNvCards accordingly
//     setNvCards(
//       navCard?.map((item) => ({
//         link: item?.link || '',
//         name: item?.name || '',
//         cards: item?.cards || [],
//       })),
//     );
//   }, [navCard]);

//   const handleInputChange = (categoryIndex, cardIndex, field, value) => {
//     const updatedNvCards = [...nvcards];
//     updatedNvCards[categoryIndex].cards[cardIndex][field] = value;
//     setNvCards(updatedNvCards);
//   };

//   const handleNameChange = (categoryIndex, value) => {
//     const updatedNvCards = [...nvcards];
//     updatedNvCards[categoryIndex].name = value;
//     setNvCards(updatedNvCards);
//   };

//   const handleLinkChange = (categoryIndex, value) => {
//     const updatedNvCards = [...nvcards];
//     updatedNvCards[categoryIndex].link = value;
//     setNvCards(updatedNvCards);
//   };

//   console.log('navdata', nvcards);

//   const handleNavCard = () => {
//     setEditNavCard(!editNavCard);
//   };

//   const SubmitUpdate = () => {
//     userAxios
//       .post('/cms/navcards', {
//         navcards: nvcards,
//       })
//       .then(function (response) {
//         console.log('direact', response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <div className=" mx-auto ">
//         <div className="flex justify-end m-2">
//           {!editNavCard ? (
//             <button className="btn-primary mt-7" onClick={handleNavCard}>
//               Edit
//             </button>
//           ) : (
//             <>
//               <button onClick={SubmitUpdate} className="btn-primary mx-2  mt-7">
//                 Save
//               </button>

//               <button className="btn-primary  mt-7" onClick={handleNavCard}>
//                 Cancel
//               </button>
//             </>
//           )}
//         </div>
//         {nvcards?.map((navCardsData, categoryIndex) => (
//           <div key={categoryIndex}>
//             <div className="grid grid-cols-2 gap-4  mb-2">
//               <div className="px-3">
//                 <label className="uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//                   {editNavCard ? navCardsData.name : 'Name'}
//                   {editNavCard && <Icon icon="line-md:edit" />}
//                 </label>
//                 {editNavCard ? (
//                   <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     id="name"
//                     type="text"
//                     placeholder="name"
//                     value={navCardsData.name}
//                     onChange={(e) =>
//                       handleNameChange(categoryIndex, e.target.value)
//                     }
//                   />
//                 ) : (
//                   <p>{navCardsData.name}</p>
//                 )}
//               </div>
//               <div className="px-3">
//                 <label className="uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//                   Link {editNavCard && <Icon icon="line-md:edit" />}
//                 </label>
//                 {editNavCard ? (
//                   <input
//                     className="appearance-none  block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     id="link"
//                     type="text"
//                     placeholder="link"
//                     value={navCardsData.link}
//                     onChange={(e) =>
//                       handleLinkChange(categoryIndex, e.target.value)
//                     }
//                   />
//                 ) : (
//                   <p>{navCardsData.link}</p>
//                 )}
//               </div>
//             </div>

//             {navCardsData.cards.map((nvcarin, cardIndex) => (
//               <div className="grid grid-cols-4 gap-4 mb-2" key={cardIndex}>
//                 {/* ... rest of your rendering */}
//                 <div className="px-3">
//                   <label className="uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//                     {editNavCard ? nvcarin.heading : 'Heading'}
//                     {editNavCard && <Icon icon="line-md:edit" />}
//                   </label>
//                   {editNavCard ? (
//                     <input
//                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                       id="Heading"
//                       type="text"
//                       placeholder="Heading"
//                       value={nvcarin.heading}
//                       onChange={(e) =>
//                         handleInputChange(
//                           categoryIndex,
//                           cardIndex,
//                           'heading',
//                           e.target.value,
//                         )
//                       }
//                     />
//                   ) : (
//                     <p>{nvcarin.heading}</p>
//                   )}
//                 </div>
//                 <div className="col-span-3 px-3">
//                   <label className="uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//                     Content {editNavCard && <Icon icon="line-md:edit" />}
//                   </label>
//                   {editNavCard ? (
//                     <input
//                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                       id="Content"
//                       type="text"
//                       placeholder="Content"
//                       value={nvcarin.content}
//                       onChange={(e) =>
//                         handleInputChange(
//                           categoryIndex,
//                           cardIndex,
//                           'content',
//                           e.target.value,
//                         )
//                       }
//                     />
//                   ) : (
//                     <p>{nvcarin.content}</p>
//                   )}
//                 </div>
//                 {/* ... rest of your rendering */}
//               </div>
//             ))}
//             <hr className="my-2 h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// function Corporate({ corporateProData }) {
//   const [editCorporatePro, setEditCorporatePro] = useState(false);
//   const [corPro, setCorPro] = useState([
//     {
//       ongoingPro: [
//         {
//           image: '',
//           heading: '',
//         },
//       ],
//     },
//   ]);
//   useEffect(() => {
//     // This will map over navCard and setNvCards accordingly
//     setCorPro(
//       corporateProData?.map((item) => ({
//         image: item?.image || '',
//         heading: item?.heading || '',
//       })),
//     );
//   }, [corporateProData]);

//   const handleCorporatePro = () => {
//     setEditCorporatePro(!editCorporatePro);
//   };

//   const handleImgUrlChange = (i, value) => {
//     const updateCorpChange = [...corPro];
//     updateCorpChange[i].image = value;
//     setCorPro(updateCorpChange);
//   };
//   const handleHeadingChange = (i, value) => {
//     const updateCorpChange = [...corPro];
//     updateCorpChange[i].heading = value;
//     setCorPro(updateCorpChange);
//   };
//   const SubmitCorpUpdate = () => {
//     console.log('called corp fuction');
//     userAxios
//       .post('/cms/corporateprojects', {
//         corporatePro: corPro,
//       })
//       .then(function (response) {
//         console.log('direact', response.data);
//         toast('Changed Successfully', {
//           type: 'success',
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   return (
//     <>
//       <div className=" mx-auto">
//         <div className="flex justify-end m-2">
//           {!editCorporatePro ? (
//             <button className="btn-primary mt-7" onClick={handleCorporatePro}>
//               Edit
//             </button>
//           ) : (
//             <>
//               <button
//                 className="btn-primary mx-2  mt-7"
//                 onClick={SubmitCorpUpdate}
//               >
//                 Save
//               </button>

//               <button
//                 className="btn-primary  mt-7"
//                 onClick={handleCorporatePro}
//               >
//                 Cancel
//               </button>
//             </>
//           )}
//         </div>

//         {corporateProData.map((corporateProData, i) => (
//           <div className="flex justify-center   mb-2" key={i}>
//             <div className="w-full md:w-1/4 px-3">
//               <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//                 image Url {editCorporatePro && <Icon icon="line-md:edit" />}
//               </label>
//               {editCorporatePro ? (
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="imgurl"
//                   type="text"
//                   placeholder="Image Url"
//                   onChange={(e) => handleImgUrlChange(i, e.target.value)}
//                 />
//               ) : (
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="first-name"
//                   type="text"
//                   value={corporateProData.image}
//                   placeholder="img url"
//                 />
//               )}
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label className=" uppercase flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
//                 Heading {editCorporatePro && <Icon icon="line-md:edit" />}
//               </label>
//               {editCorporatePro ? (
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="heading"
//                   type="text"
//                   placeholder="heading"
//                   onChange={(e) => handleHeadingChange(i, e.target.value)}
//                 />
//               ) : (
//                 <input
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="heading"
//                   type="text"
//                   value={corporateProData.heading}
//                   placeholder="heading"
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

const EditHomePage_DashboardData = [
  {
    linkTo: 'edit-landing',
    title: 'Edit Landing',
    iconName: '',
  },
  {
    linkTo: 'edit-cards',
    title: 'edit cards',
    iconName: '',
  },
  {
    linkTo: 'edit-navcards',
    title: 'edit nav cards',
    iconName: '',
  },
  {
    linkTo: 'edit-ongoing-project',
    title: 'edit ongoing project',
    iconName: '',
  },
  {
    linkTo: 'edit-corporate-project',
    title: 'edit corporate project',
    iconName: '',
  },
];

export default function Edit_HomePage() {
  // const [corporatePro, setCorporatePro] = useState([]);
  // const [navCard, setNavCard] = useState([]);
  // const [Cards, setCards] = useState([]);
  // const [ongoingPro, setongoingPro] = useState([]);
  // const [upper, setUpper] = useState('');
  // const { register, handleSubmit, watch, formState, trigger } = useForm();
  // const [editCards, setEditCards] = useState(false);

  // const handleCards = () => {
  //   setEditCards(!editCards);
  // };

  // const handleSubUpdate = (data) => {
  //   console.log(data);
  // };

  // useEffect(() => {
  //   userAxios
  //     .get(`/cms/homescreen`)
  //     .then(function (response) {
  //       setUpper(response.data.data.home.upper);
  //       setongoingPro(response.data.data.home.ongoingPro);
  //       setNavCard(response.data.data.home.navcards);

  //       setCorporatePro(response.data.data.home.corporatePro);
  //       setCards(response.data.data.home.cards);
  //       // console.log("direact", response.data.data.home);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      {/* <H5 className=" ">Edit Home Page</H5> */}
      {/* Dashboard */}
      <div className=" container 2xl:max-w-7xl mx-auto p-4">
        <H4 className="text-slate-800">Edit Home Page</H4>
        <GridContainer className=" capitalize">
          {EditHomePage_DashboardData.map((item, index) => (
            <li key={index}>
              <Link
                href={`/dashboard/settings/web-settings/edit-home/${item.linkTo}`}
                className="grid grid-cols-[3fr_1fr] border shadow-sm shadow-primary/90 rounded-md p-4 px-2"
              >
                <div className="text-txt/90 text-nowrap text-xl self-center">
                  {item.title}
                </div>
                <div className="place-self-center text-2xl border border-primary text-primary rounded-full p-2 ">
                  {/* <Icon icon={item.iconName} /> */}
                </div>
              </Link>
            </li>
          ))}
        </GridContainer>
      </div>
      {/* <H4 className="justify-left">Landing</H4>
      <Section className="capitalize border">
        <div>
          <Landing upper={upper} />
        </div>
      </Section> */}

      {/* <H4 className="justify-left">Cards</H4>
      <Section className="capitalize border">
        <div>
          <div className="flex justify-end m-2">
            {!editCards ? (
              <button className="btn-primary mt-7" onClick={handleCards}>
                Edit
              </button>
            ) : (
              <>
                <button className="btn-primary mx-2  mt-7">Save</button>

                <button className="btn-primary  mt-7" onClick={handleCards}>
                  Cancel
                </button>
              </>
            )}
          </div>
          {Cards.map((CardsData, index) => (
            <Card key={index} Cards={CardsData} editCards={editCards} />
          ))}
        </div>
      </Section> */}

      {/* <H4 className="justify-left">Navcard</H4>
      <Section className="capitalize border">
        <div>
          <NavCards navCard={navCard} handleSubUpdate={handleSubUpdate} />
        </div>
      </Section> */}

      {/* <H4 className="justify-left">Ongoing Project</H4>
      <Section className="capitalize border">
        <div>
          <Ongoing_Edit ongoingPro={ongoingPro} />
        </div>
      </Section>

      <H4 className="justify-left">Corporate Pro</H4>
      <Section className="capitalize border">
        <div>
          <Corporate corporateProData={corporatePro} />
        </div>
      </Section> */}
    </>
  );
}
