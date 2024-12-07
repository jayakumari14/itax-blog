"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

const loantype = [
	{
		iconName: "ion:business-sharp",
		title: "Business",
	},
	{
		iconName: "solar:home-broken",
		title: "Home  ",
	},
	{
		iconName: "solar:home-broken",
		title: "Property",
	},
	{
		iconName: "tabler:car",
		title: "Car",
	},
	{
		iconName: "icon-park-solid:personal-privacy",
		title: "Personal",
	},
];
const loantycalemibutton = [
	{
		title: "Calculate Business Loan EMI",
	},
	{
		title: "Calculate Car Loan EMI  ",
	},
	{
		title: "Calculate Personal Loan EMI",
	},
	{
		title: "Calculate Home Loan EMI",
	},
	{
		title: "Calculate Property Loan EMI",
	},
];

const Apply_Loan = () => {
	return (
		<>
			<div className="grid grid-cols-5 gap-2 m-5">
				{loantype.map((item, index) => (
					<Link href={item.linkTo || ""} key={index}>
						<div className="relative min-w-full mx-auto  border border-bg_2/60 hover:border-primary rounded-xl overflow-hidden shadow p-4">
							<div>
								<div className="flex justify-center">
									<Icon
										icon={item.iconName}
										className="w-8 h-8 text-2xl ml-1 mr-2 bg-primary text-white rounded-2xl p-1"
									/>
								</div>
								<div>
									<h5 className=" text-xl font-bold text-center tracking-tight text-primary">
										{item.title}
									</h5>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
			<div className="grid grid-cols-2 mt-4">
				<div>
					<h6 className="mx-5">
						Relational proportions between loans
					</h6>
					{/* <img
						src="https://www.developerdrive.com/wp-content/uploads/2019/07/chart-js-pie-chart-only-percentages.jpg"
						alt=""
					/> */}
				</div>
				<div>
					<h6 className="mx-5">Calculate EMI</h6>

					<div className="grid grid-rows-5 justify-center ">
						{loantycalemibutton.map((item, key) => (
							<button
								key={key}
								type="button"
								class="text-white max-w-xs bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
								<Icon
									class="w-6 h-6 me-2 -mx-3"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="apple"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									icon="mdi:calculator"
								/>
								{item.title}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Apply_Loan;
