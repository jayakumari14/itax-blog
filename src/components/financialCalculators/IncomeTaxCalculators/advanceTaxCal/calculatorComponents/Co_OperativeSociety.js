"use client";
import { useState } from "react";
import showCurrency from "@/helper/showCurrency";
import calc_Co_OperativeSociety from "../calc/calc_Co_OperativeSociety";
export default function Co_OperativeSociety(props) {
    const {handleGetLiability_And_Installments}=props;
    const [netTaxableIncome, setNetTaxableIncome] = useState();
    const [relief, setRelief] = useState("");
    const [TDS_TCS_MAT, setTDS_TCS_MAT] = useState("");
    const [resultTax, setResultTax] = useState({
        incomeTax: 0,
        surcharge: 0,
        healthAndEducationCess: 0,
        totalTaxLiability: 0,
        assessedTax: 0,
    });
    const handleCalculate = () => {
        const data = calc_Co_OperativeSociety(netTaxableIncome);
        setResultTax({
            ...data,
            assessedTax: "",
        });
        handleGetLiability_And_Installments({...data
            ,assessedTax:(data?.totalTaxLiability - relief - TDS_TCS_MAT)
        })
    };
    const handleResetForm = () => {
        setResultTax({
            incomeTax: 0,
            surcharge: 0,
            healthAndEducationCess: 0,
            totalTaxLiability: 0,
            assessedTax: 0,
        });
        handleGetLiability_And_Installments(null)
    };
    return (
    <>
        
        <ul className="[&>li]:mt-2 [&>li]:grid [&>li]:items-center [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]">
            <li>
                <label htmlFor="">
                    Whether opting for taxation under Section 115BAC?
                </label>
                <select name="" id="">
                    <option value="">select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </li>
            <li>
                <label htmlFor="">Net Taxable Income</label>
                <input
                    className="input"
                    type="number"
                    minLength="0"
                    onChange={(e) => setNetTaxableIncome(e.target.value)}
                    // onBlur={handleCalculate}
                />
            </li>
            <li>
                <label htmlFor="">Income Tax</label>
                <input
                    className="input bg-neutral-200/80 font-semibold"
                    type="text"
                    value={showCurrency(resultTax?.incomeTax || "")}
                />
            </li>
            <li>
                <label htmlFor="">Surcharge</label>
                <input
                    className="input bg-neutral-200/80 font-semibold"
                    type="text"
                    value={showCurrency(resultTax?.surcharge || "")}
                />
            </li>
            <li>
                <label htmlFor="">Health and Education Cess</label>
                <input
                    className="input bg-neutral-200/80 font-semibold"
                    type="text"
                    value={showCurrency(resultTax?.healthAndEducationCess || "")}
                />
            </li>
            <li>
                <label htmlFor="">Total Tax Liability</label>
                <input
                    className="input bg-neutral-200/80 font-semibold"
                    type="text"
                    value={showCurrency(resultTax?.totalTaxLiability || "")}
                />
            </li>
            <li>
                <label htmlFor="">Relief</label>
                <input
                    className="input"
                    type="number"
                    value={relief}
                    onChange={(e) => setRelief(e.target.value)}
                />
            </li>
            <li>
                <label htmlFor="">TDS/TCS/MAT (AMT) Credit Utilized</label>
                <input
                    className="input"
                    type="number"
                    value={TDS_TCS_MAT}
                    onChange={(e) => setTDS_TCS_MAT(e.target.value)}
                />
            </li>
            <li>
                <label htmlFor="">Assessed Tax</label>
                <input
                    className="input bg-neutral-200/80 font-semibold"
                    type="text"
                    value={showCurrency((resultTax?.totalTaxLiability - relief - TDS_TCS_MAT) || "")}
                />
            </li>
        </ul>
        <span className="mt-8 flex justify-center gap-8">
            <button onClick={handleResetForm} className="rounded bg-red-500 p-3 px-8 text-white hover:opacity-75" >
                <span>Reset</span>
            </button>

            <button onClick={handleCalculate} type="button" className="rounded bg-primary p-3 px-8 text-white hover:opacity-75"
                >
                <span>Calculate</span>
            </button>
        </span>
    </>
    );
}