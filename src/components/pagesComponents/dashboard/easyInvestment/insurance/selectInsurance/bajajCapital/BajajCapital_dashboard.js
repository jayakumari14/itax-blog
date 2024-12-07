"use client"
import Section from "@/components/pagesComponents/pageLayout/Section";
import GridItem from "@/components/pagesComponents/grid/GridItem";
import Link from "next/link";

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const bajajCapitalData = {
	upcomingRenewals: [
		{
			day: "Today",
			pendingRenewals: 0,
		},
		{
			day: "Next 7 days",
			pendingRenewals: 0,
		},
		{
			day: "Next 15 days",
			pendingRenewals: 0,
		},
		{
			day: "Next 30 days",
			pendingRenewals: 0,
		},
	],
	expiredRenewals: [
		{
			day: "Yesterday",
			pendingRenewals: 0,
		},
		{
			day: "Last 7 days",
			pendingRenewals: 0,
		},
		{
			day: "Last 15 days",
			pendingRenewals: 0,
		},
		{
			day: "Last 30 days",
			pendingRenewals: 0,
		},
	],
	policyIssuance: [
		{
			date: "Current Year",
			policiesIssued: [
				{
					type: "All Premiums",
					amount: 0, // Total amount of all premiums
					NOP: 0, // Total number of policies
				},
				{
					type: "Car Insurance",
					amount: 0,
					NOP: 0,
				},
				{
					type: "Bike Insurance",
					amount: 0,
					NOP: 0,
				},
				{
					type: "Health Insurance",
					amount: 0,
					NOP: 0,
				},
			],
		},
		{
			date: "Last Year",
			policiesIssued: [
				{
					type: "All Premium",
					amount: 0, // Total amount of all premiums
					NOP: 0, // Total number of policies
				},
				{
					type: "Car Insurance",
					amount: 0,
					NOP: 0,
				},
				{
					type: "Bike Insurance",
					amount: 0,
					NOP: 0,
				},
				{
					type: "Health Insurance",
					amount: 0,
					NOP: 0,
				},
			],
		},
	],

    Proposal_PolicyStatus : [
        {
            title:"Quote",
            value:0
        },
        {
            title:"ProposalPending",
            value:0
        },
        {
            title:"PaymentPending",
            value:0
        },
        {
            title:"BookingPending",
            value:0
        },
        {
            title:"PolicyIssued",
            value:0
        },
        {
            title:"Inspection",
            value:0
        },
    ]
};


function RenewalCard({ data,title }) {
    return (
        <div>
            <div className='text-2xl border-l-4 border-l-primary pl-2 font-semibold mb-4 capitalize'>
                <h2>{title}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 py-4">
                {data.map((renewal, index) => (
                    <GridItem className={`bg-white `} key={index}>
                        <div className=" flex-1 mb-2 text-sm font-semibold text-txt">
                            {renewal.day}
                        </div>
                        <div className="text-lg font-semibold text=txt outline outline-1 rounded-full outline-primary px-2 grid place-content-center">
                            {renewal.pendingRenewals}
                        </div>
                    </GridItem>
                ))}
            </div>
        </div>
    );
}

function YearlyPolicyTable({ data,title }) {
    const pieRef = useRef(null);
  
    useEffect(() => {
        const pieConfig = {
            type: 'doughnut',
            data: {
                datasets: [
                {
                    data: [33, 33, 33],
                    backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
                    label: 'Dataset 1',
                },
                ],
                labels: ['car', 'bike', 'health'],
            },
            options: {
                responsive: true,
                cutoutPercentage: 80,
                legend: {
                display: false,
                },
            },
        };
  
      if (pieRef.current) {
        const myPieInstance = new Chart(pieRef.current, pieConfig);
  
        // Cleanup chart on component unmount
        return () => {
          myPieInstance.destroy();
        };
      }
    }, []);
    return (
        <div>
            <div className='text-2xl border-l-4 border-l-primary pl-2 font-semibold mb-4 capitalize'>
                <h2>{title}</h2>
            </div>
            <div className="grid gap-8 justify-center md:grid-cols-2">
                <div  className=" h-72">
                    <canvas ref={pieRef}></canvas>
                </div>
                <div>
                    <ul className="flex gap-4 text-sm font-semibold">
                        <li className="border-b-2">Select Date Range</li>
                        <li className="border-b-2">Current Month</li>
                        <li className="border-b-2">Current Year</li>
                    </ul>
                    <ul className="grid sm:grid-cols-2 sm:grid-rows-2 gap-2 py-4">
                        <GridItem className="flex">
                            <div className="flex-1">All Premium</div>
                            <div>0</div>
                        </GridItem>
                        <GridItem className="flex">
                            <div className="flex-1">Car Insurance</div>
                            <div>0</div>
                        </GridItem>
                        <GridItem className="flex">
                            <div className="flex-1">Bike Insurance</div>
                            <div>0</div>
                        </GridItem>
                        <GridItem className="flex">
                            <div className="flex-1">Health Insurance</div>
                            <div>0</div>
                        </GridItem>
                    </ul>
                </div>
            </div>
        </div>
    );
}
function Proposal_PolicyStatus({ data,title }) {
    const barsRef = useRef(null);
      
    useEffect(() => {
        const barConfig = {
          type: 'bar',
          data: {
            labels: ['inspection', 'Policy Issued', 'Booking Pending', 'Payment Pending', 'Proposal Pending', 'Quote',],
            datasets: [
              {
                label:" ",
                backgroundColor: '#6555e0',
                borderWidth: 1,
                data: [31, 14, 52, 74, 33, 90, 70],
              },
            ],
          },
          options: {
            responsive: true,
            legend: {
              display: false,
            },
          },
        };
    
        if (barsRef.current) {
          const myBarInstance = new Chart(barsRef.current, barConfig);
    
          return () => {
            myBarInstance.destroy();
          };
        }
      }, []);
    return (
        <div>
            <div className='text-2xl border-l-4 border-l-primary pl-2 font-semibold mb-4 capitalize'>
                <h2>{title}</h2>
            </div>
            <div className="grid gap-8 justify-center md:grid-cols-2">
                <div>
                    <canvas ref={barsRef}></canvas>
                </div>
                <ul className="grid sm:grid-cols-2 sm:grid-rows-2 gap-2 py-4">
                    {bajajCapitalData.Proposal_PolicyStatus.map((item, index) => (
                        <GridItem className="flex bg-primary/80" key={index}>
                            <div className="text-neutral-50 flex-1">{item.title}</div>
                            <div className="text-neutral-50">{item.value}</div>
                        </GridItem>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default function BajajCapital_dashboard() {
    return (
        <div className="p-4">
            <div>
                <div className="text-2xl border-l-4 pl-2 font-semibold mb-4 capitalize">
                    <Link href="/dashboard/easy-investment/general-insurance/bajaj-capital-dashboard/Sale" className="bg-accent text-neutral-50 p-2 px-8 rounded-md">Sale Now</Link>
                </div>
            </div>
            <Section className=" grid lg:grid-cols-2 gap-4">
                <RenewalCard data={bajajCapitalData.upcomingRenewals} title={"upcomingRenewals"} />
                <RenewalCard data={bajajCapitalData.expiredRenewals} title={"expiredRenewals"} />
            </Section>

            <Section>
                <YearlyPolicyTable  data={bajajCapitalData.policyIssuance.policyIssuance} title={"Policy Issuance (NOP / Premium)"}/>
            </Section>

            <Section>
                <Proposal_PolicyStatus  data={"data"} title={"Proposal / Policy Status ( Current Month )"}/>
            </Section>
        </div>
	);
}
