"use client"
import React, { useState } from "react";

const View_Payment = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <div className="container m-5">
        <div className="flex space-x-3 content-center border-b">
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-2 border-b-4 transition-colors duration-300 ${
                  idx === activeTabIndex
                    ? "border-teal-500"
                    : "border-transparent hover:border-gray-200"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Show active tab content. */}
        <div className="py-4">
          <div class="flex ...">
            <div class="flex-none w-14 h-14 ...">
              <p>UPI ID</p>
            </div>
            <div class="flex-none ">
              <p>{tabsData[activeTabIndex].content.Upi_ID}</p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div class="flex ...">
            <div class="flex-none w-14 h-14 ...">
              <p>Reciept</p>
            </div>
            <div class="flex-none ">
              <p></p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div class="flex ...">
            <div class="flex-none w-14 h-14 ...">
              <p>Date</p>
            </div>
            <div class="flex-none ">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View_Payment;
const tabsData = [
  {
    label: "Details",
    content: {
      Upi_ID: "abc@oksbi",
      Reciept: "",
      Date: "21/05/12",
    },
  },
  {
    label: "Seller",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
  {
    label: "Purchaser",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];
