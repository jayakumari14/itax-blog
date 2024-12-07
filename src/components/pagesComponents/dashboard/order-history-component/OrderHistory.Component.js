'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const sharedButtonClasses = 'text-white px-4 py-2 rounded';
const sharedTextClasses = 'text-sm text-zinc-500';

const OrderHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [allOrders, setAllOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState('Past 3 Months');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const fetchOrderData = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await axios.get('/api/subscriptions');

      const { data } = response;

      if (data) {
        setAllOrders(data.data);
        filterOrders(data.data, selectedHistory);
      } else {
        setAllOrders([]);
        console.error('Unexpected API response structure:', data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  };

  const filterOrders = (orders, duration) => {
    const now = new Date();
    const filtered = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      switch (duration) {
        case 'Past 3 Months':
          return now - orderDate <= 3 * 30 * 24 * 60 * 60 * 1000; // 3 months
        case 'Past 6 Months':
          return now - orderDate <= 6 * 30 * 24 * 60 * 60 * 1000; // 6 months
        case 'Past Year':
          return now - orderDate <= 12 * 30 * 24 * 60 * 60 * 1000; // 1 year
        default:
          return true;
      }
    });
    setFilteredOrders(filtered);
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  useEffect(() => {
    filterOrders(allOrders, selectedHistory);
  }, [selectedHistory, allOrders]);

  const handleHistoryChange = (e) => {
    setSelectedHistory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchOrders = (orders, query) => {
    if (!query) return orders;
    return orders.filter((order) =>
      order.id.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const filteredAndSearchedOrders = searchOrders(filteredOrders, searchQuery);

  const handleInvoiceClick = (orderId) => {
    setSelectedOrderId(orderId);
  };

  const handleBackToOrders = () => {
    setSelectedOrderId(null);
  };

  if (selectedOrderId) {
    return <Invoice orderId={selectedOrderId} onBack={handleBackToOrders} />;
  }

  console.log(allOrders);
  const OrderCard = ({ order }) => {
    return (
      <div className="order-card bg-white border border-zinc-300 rounded-lg p-4 mb-4 text-black">
        <div className="">
          <div className="flex justify-between">
            <span className={sharedTextClasses}>Order ID: {order.id}</span>

            {order.status === 'success' && (
              <button
                className={`bg-blue-500 hover:bg-blue-700 ${sharedButtonClasses}`}
                onClick={() => handleInvoiceClick(order.id)}
              >
                Invoice
              </button>
            )}
            {order.status === 'pending' && 'Pending'}
          </div>

          <div className="flex justify-between">
            <h4 className="text-sm font-semibold">
              {new Date(order.createdAt).toLocaleDateString()}
            </h4>
            <span className="text-lg font-bold">
              &#8377;{order.amountForServices.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <ul>
            {order.registrationStartup.map((startup, index) => (
              <li key={index} className="mb-2 flex">
                <img
                  src={startup.image}
                  alt={startup.title}
                  className="rounded-lg mr-4"
                  width="50"
                  height="50"
                />
                <div>
                  <h4>{startup.title}</h4>
                  <span className="text-lg font-bold">
                    &#8377;{startup.priceWithGst.toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <ul>
            {order.registrationServices.map((service, index) => (
              <li key={index} className="mb-2 flex">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg mr-4"
                  width="50"
                  height="50"
                />
                <div>
                  <h4>{service.title}</h4>
                  <span className="text-lg font-bold">
                    &#8377;{service.price.toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <ul>
            {order.services.map((service, index) => (
              <li key={index} className="mb-2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg mr-4"
                  width="50"
                  height="50"
                />
                <div>
                  <h4>{service.title}</h4>
                  <span className="text-lg font-bold">
                    &#8377;{service.price.toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-300 py-10 text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Your Orders ({filteredAndSearchedOrders.length})
      </h1>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <select
            id="order-history"
            className="bg-white text-black border border-zinc-300 rounded p-2"
            value={selectedHistory}
            onChange={handleHistoryChange}
          >
            <option>Past 3 Months</option>
            <option>Past 6 Months</option>
            <option>Past Year</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Order ID"
            className="bg-white text-black border border-zinc-300 rounded p-2 w-auto"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        filteredAndSearchedOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))
      )}
    </div>
  );
};

const Invoice = ({ orderId, onBack }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      console.log('order id', orderId);
      try {
        const response = await axios.get('/api/subscriptions');
        const orders = response.data.data;
        const order = orders.find((order) => order.id === orderId);
        if (order) {
          setOrderDetails(order);
        } else {
          throw new Error('Order not found');
        }
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const handlePrint = () => {
    const printContent = document.getElementById('tobeprint').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // To ensure that event listeners are restored
  };

  // const handlePrint = () => {
  //   const printContent = document.getElementById('tobeprint').innerHTML;
  //   const originalContent = document.body.innerHTML;

  //   document.body.innerHTML = printContent;
  //   window.print();
  //   document.body.innerHTML = originalContent;
  //   // No need to reload the page
  // };

  const handleDownload = () => {
    const printContent = document.getElementById('tobeprint').outerHTML;
    const originalHTML = document.documentElement.outerHTML;

    const fullDocument = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice ${orderId}</title>
        <style>
          ${Array.from(document.styleSheets)
            .map((styleSheet) => {
              try {
                return Array.from(styleSheet.cssRules)
                  .map((rule) => rule.cssText)
                  .join('\n');
              } catch (e) {
                console.log('Error loading stylesheet:', e);
                return '';
              }
            })
            .join('\n')}
        </style>
      </head>
      <body>
        ${printContent}
      </body>
      </html>
    `;

    const file = new Blob([fullDocument], { type: 'text/html' });
    const element = document.createElement('a');
    element.href = URL.createObjectURL(file);
    element.download = `invoice-${orderId}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element); // Clean up the DOM
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const {
    createdAt,
    status,
    amountForServices,
    registrationStartup,
    registrationServices,
    services,
  } = orderDetails;

  return (
    <div className="container mx-auto p-6 bg-white text-black min-h-screen">
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded mb-4"
        onClick={onBack}
      >
        Back to Orders
      </button>
      <h1 className="text-2xl font-bold mb-4">Invoice for Order {orderId}</h1>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2"
          onClick={handlePrint}
        >
          Print
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
      <div className="border p-4" id="tobeprint">
        <h2 className="text-xl font-bold mb-4">Order Details</h2>
        <p>Order ID: {orderId}</p>
        <p>Order Date: {new Date(createdAt).toLocaleDateString()}</p>
        <p>Status: {status}</p>
        <h3 className="text-lg font-bold mt-4">Items</h3>
        <table className="w-full mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Title</th>
              <th className="text-right p-2">Quantity</th>
              <th className="text-right p-2">Price</th>
              <th className="text-right p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {registrationStartup.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.title}</td>
                <td className="p-2 text-right">1</td>
                <td className="p-2 text-right">
                  &#8377;{item.priceWithGst.toFixed(2)}
                </td>
                <td className="p-2 text-right">
                  &#8377;{item.priceWithGst.toFixed(2)}
                </td>
              </tr>
            ))}
            {registrationServices.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.title}</td>
                <td className="p-2 text-right">1</td>
                <td className="p-2 text-right">
                  &#8377;{item.price.toFixed(2)}
                </td>
                <td className="p-2 text-right">
                  &#8377;{item.price.toFixed(2)}
                </td>
              </tr>
            ))}
            {services.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.title}</td>
                <td className="p-2 text-right">1</td>
                <td className="p-2 text-right">
                  &#8377;{item.price.toFixed(2)}
                </td>
                <td className="p-2 text-right">
                  &#8377;{item.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="text-lg font-bold mt-4">Summary</h3>
        <table className="w-full mb-4">
          <tbody>
            <tr>
              <td className="p-2">Invoice value</td>
              <td className="p-2 text-right font-semibold">
                &#8377;{(amountForServices * 100) / 118}
              </td>
            </tr>

            <tr>
              <td className="p-2">GST</td>
              <td className="p-2 text-right font-semibold">
                &#8377;{amountForServices - (amountForServices * 100) / 118}
              </td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Total Amount</td>
              <td className="p-2 text-right font-bold">
                &#8377;{amountForServices.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
