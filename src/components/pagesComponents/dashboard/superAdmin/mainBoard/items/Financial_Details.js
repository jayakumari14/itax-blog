"use client";
import DashSection from "@/components/pagesComponents/pageLayout/DashSection";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ["Loan", "Payment", "Working Capital"],
  datasets: [
    {
      data: [300, 100, 150],
      backgroundColor: ["#36A2EB", "#3bcc53", "#e79c39"],
      hoverBackgroundColor: ["#36A2EB", "#3bcc53", "#e79c39"],
    },
  ],
};

export default function Financial_Details() {
  return (
    <div
      title={"Loan , Payment ,Working Capital "}
      titleRight={"current year - 2024"}
    >
      <div className="p-4 grid lg:grid-cols-2">
        <div>
          <p className="text-3xl font-bold text-[#36A2EB]">Loan</p>
          <p className="text-3xl font-bold text-[#3bcc53]">Payment</p>
          <p className="text-3xl font-bold text-[#e79c39]">Working Capital</p>
        </div>
        <div className="lg:max-w-4xl w-full">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}
