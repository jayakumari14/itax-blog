"use client";
import GridContainer from "@/components/pagesComponents/grid/GridContainer";
import { Icon } from "@iconify/react";
import Link from "next/link";

const LoanStatistics = [
	{
		iconName: "gg:add",
		title: "Approved Loans",
		overview: "0",
	},
	{
		iconName: "material-symbols:avg-pace-rounded",
		title: "Pending Loans ",
		overview: "0",
	},
	{
		iconName: "zondicons:close-outline",
		title: "Rejected Loans ",
		overview: "0",
	},
	{
		iconName: "bxs:file",
		title: "Total Loans",
		overview: "0",
	},
];
const LoanStatisticsCategory = [
	{
		Loantype: "Business Loan",
		loanAction1: "Approved Loans",
		loanAction2: "Pending Loan",
		loanAction3: "Rejected Loans",
		loanamount1: "0",
		loanamount2: "0",
		loanamount3: "0",
	},
	{
		Loantype: "Home Loan",
		loanAction1: "Approved Loans",
		loanAction2: "Pending Loan",
		loanAction3: "Rejected Loans",
		loanamount1: "0",
		loanamount2: "0",
		loanamount3: "0",
	},
	{
		Loantype: "Car Loan",
		loanAction1: "Approved Loans",
		loanAction2: "Pending Loan",
		loanAction3: "Rejected Loans",
		loanamount1: "0",
		loanamount2: "0",
		loanamount3: "0",
	},
	{
		Loantype: "Personal Loan",
		loanAction1: "Approved Loans",
		loanAction2: "Pending Loan",
		loanAction3: "Rejected Loans",
		loanamount1: "0",
		loanamount2: "0",
		loanamount3: "0",
	},
];

const Loan_Index = () => {
	return (
		<>
			<div className=" container 2xl:max-w-7xl mx-auto mt-4 p-4 ">
				<div className="flex justify-between ">
					<div>
						<h1 className="text-xl font-bold">Statistics</h1>
					</div>
					<div>
						<Link href="/dashboard/finance/loan/apply">
							<button
								type="button"
								className="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
								<Icon
									className="w-6 h-6 me-2 -mx-3"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="apple"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									icon="system-uicons:create"
								/>
								Apply For Loan
							</button>
						</Link>
						<Link href="/dashboard/finance/loan/create">
							<button
								type="button"
								className="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
								<Icon
									className="w-6 h-6 me-2 -mx-3"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="apple"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									icon="system-uicons:create"
								/>
								Create Loan
							</button>
						</Link>
					</div>
				</div>
				<GridContainer>
					{LoanStatistics.map((item, index) => (
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

										<h2 className=" font-normal text-xl text-center  text-txt/70">
											{item.overview}
										</h2>
									</div>
								</div>
							</div>
						</Link>
					))}
				</GridContainer>

				<p className="text-xl font-semibold my-6">
					Statistics For Loan Categories
				</p>

				<div className="grid grid-rows-2 grid-flow-col gap-4">
					{LoanStatisticsCategory.map((item, index) => (
						<div key={index}>
							<h3 className="text-center font-semibold text-l">
								{item.Loantype}
							</h3>

							<div className="relative min-w-full mx-auto grid grid-cols-3  gap-2 bg-slate-50  border border-bg_2/60  rounded-xl overflow-hidden shadow p-4">
								<div className="  border border-bg_2/60 hover:border-primary rounded overflow-hidden shadow p-2">
									<div>
										<h5 className=" text-base font-bold text-center tracking-tight text-primary">
											{item.loanAction1}
										</h5>

										<h2 className=" font-normal text-xl text-center  text-txt/70">
											{item.loanamount1}
										</h2>
									</div>
								</div>
								<div className="  border border-bg_2/60 hover:border-primary rounded overflow-hidden shadow p-2">
									<div>
										<h5 className=" text-base font-bold text-center tracking-tight text-primary">
											{item.loanAction2}
										</h5>

										<h2 className=" font-normal text-xl text-center  text-txt/70">
											{item.loanamount2}
										</h2>
									</div>
								</div>
								<div className="  border border-bg_2/60 hover:border-primary rounded overflow-hidden shadow p-2">
									<div>
										<h5 className=" text-base font-bold text-center tracking-tight text-primary">
											{item.loanAction3}
										</h5>

										<h2 className=" font-normal text-xl text-center  text-txt/70">
											{item.loanamount3}
										</h2>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Loan_Index;
