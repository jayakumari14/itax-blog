// 'use client';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Shared Tailwind CSS class strings
// const borderClass = 'border border-zinc-300 p-2';
// const textRightClass = 'text-right';
// const textMutedClass = 'text-sm text-muted-foreground';

// const Header = ({ invoiceNumber, date, companyDetails }) => (
//   <header className="flex flex-col md:flex-row justify-between items-center mb-6">
//     <div className="flex items-center mb-4 md:mb-0">
//       <img
//         src="https://placehold.co/100x100?text=Logo"
//         alt="Company Logo"
//         className="w-16 h-16 mr-4"
//       />
//       <div>
//         <h1 className="text-3xl font-bold text-center md:text-left">Invoice</h1>
//         <p className={textMutedClass}>Invoice #{invoiceNumber}</p>
//         <p className={textMutedClass}>Date: {date}</p>
//       </div>
//     </div>
//     <div className="text-center md:text-right">
//       <h2 className="text-xl font-semibold">{companyDetails.name}</h2>
//       <p className={textMutedClass}>GSTIN: {companyDetails.gstin}</p>
//       <p className={textMutedClass}>{companyDetails.address1}</p>
//       <p className={textMutedClass}>{companyDetails.address2}</p>
//       <p className={textMutedClass}>
//         {companyDetails.city}, {companyDetails.state}, {companyDetails.zip}
//       </p>
//     </div>
//   </header>
// );

// const BillTo = ({ clientDetails }) => (
//   <section className="mb-6">
//     <h3 className="text-lg font-semibold">Bill To:</h3>
//     <p className={textMutedClass}>{clientDetails.name}</p>
//     <p className={textMutedClass}>{clientDetails.address1}</p>
//     <p className={textMutedClass}>{clientDetails.address2}</p>
//     <p className={textMutedClass}>
//       {clientDetails.city}, {clientDetails.state}, {clientDetails.zip}
//     </p>
//   </section>
// );

// const InvoiceTable = ({ items }) => (
//   <table className="w-full mb-6 border-collapse">
//     <thead>
//       <tr className="bg-secondary text-secondary-foreground">
//         <th className={`${borderClass} text-left`}>Description</th>
//         <th className={`${borderClass} ${textRightClass}`}>Quantity</th>
//         <th className={`${borderClass} ${textRightClass}`}>Unit Price</th>
//         <th className={`${borderClass} ${textRightClass}`}>Total</th>
//       </tr>
//     </thead>
//     <tbody>
//       {items.map((item, index) => (
//         <tr key={index}>
//           <td className={borderClass}>{item.description}</td>
//           <td className={`${borderClass} ${textRightClass}`}>
//             {item.quantity}
//           </td>
//           <td className={`${borderClass} ${textRightClass}`}>
//             {item.unitPrice.toFixed(2)}
//           </td>
//           <td className={`${borderClass} ${textRightClass}`}>
//             {(item.quantity * item.unitPrice).toFixed(2)}
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// const SummaryTable = ({ subtotal, gst, total }) => (
//   <div className="flex justify-end mb-6">
//     <table className="w-full md:w-1/2 border-collapse">
//       <tbody>
//         <tr>
//           <td className={`${borderClass} ${textRightClass} font-semibold`}>
//             Subtotal
//           </td>
//           <td className={`${borderClass} ${textRightClass}`}>
//             {subtotal.toFixed(2)}
//           </td>
//         </tr>
//         <tr>
//           <td className={`${borderClass} ${textRightClass} font-semibold`}>
//             GST (18%)
//           </td>
//           <td className={`${borderClass} ${textRightClass}`}>
//             {gst.toFixed(2)}
//           </td>
//         </tr>
//         <tr className="bg-primary text-primary-foreground">
//           <td className={`${borderClass} ${textRightClass} font-bold`}>
//             Total
//           </td>
//           <td className={`${borderClass} ${textRightClass} font-bold`}>
//             {total.toFixed(2)}
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const Footer = () => (
//   <footer className="text-center text-muted-foreground">
//     <p className="text-sm">Thank you for your business!</p>
//     <p className="text-sm">
//       If you have any questions about this invoice, please contact us at
//       support@company.com
//     </p>
//   </footer>
// );

// const OrderInvoice = ({ orderId, onBack }) => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       try {
//         const response = await axios.get('/api/subscriptions');
//         const orders = response.data.data;
//         const order = orders.find((order) => order.id === orderId);
//         if (order) {
//           setOrderDetails(order);
//         } else {
//           throw new Error('Order not found');
//         }
//         setIsLoading(false);
//       } catch (err) {
//         setError(err);
//         setIsError(true);
//         setIsLoading(false);
//       }
//     };

//     fetchOrderDetails();
//   }, [orderId]);

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownload = () => {
//     const element = document.createElement('a');
//     const file = new Blob([document.documentElement.outerHTML], {
//       type: 'text/html',
//     });
//     element.href = URL.createObjectURL(file);
//     element.download = `invoice-${orderId}.html`;
//     document.body.appendChild(element);
//     element.click();
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   const companyDetails = {
//     name: 'Company Name',
//     gstin: '1234567890',
//     address1: 'Address Line 1',
//     address2: 'Address Line 2',
//     city: 'City',
//     state: 'State',
//     zip: 'ZIP',
//   };

//   const clientDetails = {
//     name: 'Client Name',
//     address1: 'Client Address Line 1',
//     address2: 'Client Address Line 2',
//     city: 'City',
//     state: 'State',
//     zip: 'ZIP',
//   };

//   const items = [
//     ...orderDetails.registrationStartup.map((startup) => ({
//       description: startup.title,
//       quantity: 1,
//       unitPrice: startup.priceWithGst,
//     })),
//     ...orderDetails.registrationServices.map((service) => ({
//       description: service.title,
//       quantity: 1,
//       unitPrice: service.price,
//     })),
//     ...orderDetails.services.map((service) => ({
//       description: service.title,
//       quantity: 1,
//       unitPrice: service.price,
//     })),
//   ];

//   const subtotal = items.reduce(
//     (acc, item) => acc + item.quantity * item.unitPrice,
//     0,
//   );
//   const gst = subtotal * 0.18;
//   const total = subtotal + gst;

//   return (
//     <div className="bg-gradient-to-r from-accent to-accent-foreground min-h-screen flex items-center justify-center p-4">
//       <div className="max-w-4xl w-full mx-auto p-6 bg-card text-card-foreground shadow-lg rounded-lg">
//         <button
//           className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded mb-4"
//           onClick={onBack}
//         >
//           Back to Orders
//         </button>
//         <Header
//           invoiceNumber={orderId}
//           date={new Date(orderDetails.createdAt).toLocaleDateString()}
//           companyDetails={companyDetails}
//         />
//         <BillTo clientDetails={clientDetails} />
//         <InvoiceTable items={items} />
//         <SummaryTable subtotal={subtotal} gst={gst} total={total} />
//         <div className="mb-4">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2"
//             onClick={handlePrint}
//           >
//             Print
//           </button>
//           <button
//             className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
//             onClick={handleDownload}
//           >
//             Download
//           </button>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default OrderInvoice;
