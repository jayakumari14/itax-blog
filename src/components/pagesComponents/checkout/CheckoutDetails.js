'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Title, PaymentButton } from '@/app_old/pages/Checkout/checkoutStyles';
import { toast } from 'react-toastify';
import userAxios from '@/lib/userAxios';
import PayNowHandler from './PayNowHandler';

const PaymentPageWrapper = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-8 flex items-center justify-center">
    {children}
  </div>
);

const PaymentForm = ({ children }) => (
  <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
    {children}
  </div>
);

export default function CheckoutDetails({ cartItems = {} }) {
  const services = cartItems?.at(0)?.services || [];
  const registrationStartup = cartItems?.at(0)?.registrationStartup || [];
  const registrationServices = cartItems?.at(0)?.registrationServices || [];

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gst: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const getUserDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get(`/user/profile`);
      if (status === 200 && data && data.data && data.data.user) {
        const { firstName, lastName, email, gst } = data.data.user;
        setUserDetails({ firstName, lastName, email, gst });
      }
    } catch (error) {
      toast.error('Error fetching user details.');
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  const calculateTotal = (
    services,
    registrationStartup,
    registrationServices,
  ) => {
    const serviceTotal = services.reduce((acc, item) => acc + item.price, 0);
    const registrationStartupTotal = registrationStartup.reduce(
      (acc, item) => acc + item.priceWithGst,
      0,
    );
    const registrationServiceTotal = registrationServices.reduce(
      (acc, item) => acc + item.price,
      0,
    );
    return serviceTotal + registrationStartupTotal + registrationServiceTotal;
  };

  const calculateGST = (total) => {
    return total * 0.18; // Assuming 18% GST
  };

  const totalAmount = calculateTotal(
    services,
    registrationStartup,
    registrationServices,
  );
  const gstAmount = calculateGST(totalAmount);
  const netTotalAmount = totalAmount + gstAmount;

  if (isLoading || !userDetails.email) {
    return (
      <PaymentPageWrapper className="py-10">
        <PaymentForm>
          <Title>Payment Page</Title>
          <div className="flex justify-between bg-gray-200 p-2 mt-5">
            <h2>Loading...</h2>
          </div>
        </PaymentForm>
      </PaymentPageWrapper>
    );
  }

  if (
    !services.length &&
    !registrationStartup.length &&
    !registrationServices.length
  ) {
    return (
      <PaymentPageWrapper className="py-10">
        <PaymentForm>
          <Title>Payment Page</Title>
          <div className="flex justify-between bg-gray-200 p-2 mt-5">
            <h2>No items in the cart</h2>
          </div>
        </PaymentForm>
      </PaymentPageWrapper>
    );
  }

  return (
    <PaymentPageWrapper>
      <PaymentForm>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Checkout Page
          </h1>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <span className="text-gray-600">Name</span>
            <span className="font-medium text-gray-800">
              {userDetails.firstName} {userDetails.lastName}
            </span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <span className="text-gray-600">Email</span>
            <span className="font-medium text-gray-800">
              {userDetails.email}
            </span>
          </div>
          {userDetails.gst && (
            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <span className="text-gray-600">GST</span>
              <span className="font-medium text-gray-800">
                {userDetails.gst}
              </span>
            </div>
          )}
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <span className="text-gray-600">Service</span>
                <div className="font-medium text-gray-800">{item.title}</div>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-2 w-20 h-20 object-cover rounded-md"
                  />
                )}
              </div>
              <div>
                <span className="text-gray-600">Price</span>
                <div className="font-medium text-gray-800">₹{item.price}</div>
              </div>
            </div>
          ))}
          {registrationStartup.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <span className="text-gray-600">Registration Startup</span>
                <div className="font-medium text-gray-800">{item.title}</div>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-2 w-20 h-20 object-cover rounded-md"
                  />
                )}
              </div>
              <div>
                <span className="text-gray-600">Price</span>
                <div className="font-medium text-gray-800">
                  ₹{item.priceWithGst}
                </div>
              </div>
            </div>
          ))}
          {registrationServices.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <span className="text-gray-600">Registration Service</span>
                <div className="font-medium text-gray-800">{item.title}</div>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-2 w-20 h-20 object-cover rounded-md"
                  />
                )}
              </div>
              <div>
                <span className="text-gray-600">Price</span>
                <div className="font-medium text-gray-800">₹{item.price}</div>
              </div>
            </div>
          ))}
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <span className="text-gray-600">GST (18%)</span>
            <span className="font-medium text-gray-800">
              ₹{gstAmount.toFixed(2)}
            </span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <span className="text-gray-600">Total Amount</span>
            <span className="font-medium text-gray-800">
              ₹{totalAmount.toFixed(2)}
            </span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <span className="text-gray-600">Net Total Amount</span>
            <span className="font-medium text-gray-800">
              ₹{netTotalAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-center mt-8">
            <PayNowHandler
              totalAmount={netTotalAmount.toFixed(2)}
              services={services}
              registrationStartup={registrationStartup}
              registrationServices={registrationServices}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            />
          </div>
        </div>
      </PaymentForm>
    </PaymentPageWrapper>
  );
}
