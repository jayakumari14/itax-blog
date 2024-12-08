import showCurrency from "@/helper/showCurrency";
import { ExportExcel } from "@/components/converter/ExportExcel";
function AdvanceTaxLiability(props) {
    const {CurrentYear,advanceTaxCalculated:{assessedTax}} = props;
    const advanceTaxLiability = [
        {
            title:`Advance tax payable upto June 15, ${CurrentYear} (Cumulative)`,
            data:(assessedTax*0.15),
        },
        {
            title:`Advance tax payable upto September 15, ${CurrentYear} (Cumulative)`,
            data:(assessedTax*0.45)-(assessedTax*0.15)+(assessedTax*0.15),
        },
        {
            title:`Advance tax payable upto December 15, ${CurrentYear} (Cumulative)`,
            data:(assessedTax*0.75)-(assessedTax*0.45)+(assessedTax*0.45),
        },
        {
            title:`Advance tax payable upto March 15, ${CurrentYear+1} (Cumulative)`,
            data:(assessedTax*1)-(assessedTax*0.75)+(assessedTax*0.75),
        },
    ];
    const headings=[
        "Description",
        "Advance Tax liability",
    ]
    const style = {
        textDecoration: "none",
        padding: "10px",
        backgroundColor: "#f44336",
        color: "#fff",
        borderRadius: "5px",
        textAlign: "center", // Center align the button
        display: "inline-block",
        margin: "20px",
    };
    return (
        <>
            <thead>
                <tr>
                    <th className="text-2xl pt-8">Advance Tax liability</th>
                    <th>
                        <ExportExcel
                            data={{headings:headings,body:advanceTaxLiability}}
                            fileName={"Advance Tax liability"}
                            style={style}
                            specificColumnWidth={{ A: 100 }}
                            columnWidths={{
                                A: 10,
                                B: 20,
                                C: 15,
                                D: 10,
                                E: 25,
                                F: 20,
                                G: 10,
                                H: 20,
                                I: 10,
                                J: 10,
                            }}
                        />
                    </th>
                </tr>
            </thead>
            <tbody className="[&_tr]:border [&_tr]:border-blue-700/50 [&_th]:p-[2px_4px] [&_td]:p-[4px_8px] [&_td]:text-sm [&_td]:tracking-tighter">
                <tr className="bg-blue-400 text-neutral-50">
                    <th>Description</th>
                    <th>Advance Tax liability</th>
                </tr>
                {advanceTaxLiability.map((item) => (
                    <tr key={item.title}>
                        <td>{item.title}</td>
                        <td className="border-l border-l-blue-700/50">{showCurrency(item.data||"")}</td>
                    </tr>
                ))}
            </tbody>
        </>
    );
}
function AdvanceTaxInstallments(props) {
    const {CurrentYear,advanceTaxCalculated:{assessedTax}} = props;
    const advanceTaxInstallments = [
        {
            title:`First installment payable for the period April 1, ${CurrentYear} to June 15, ${CurrentYear}`,
            data:(assessedTax*0.15)
        },
        {
            title:`Second installment payable for the period June 16, ${CurrentYear} to September 15, ${CurrentYear}`,
            data:(assessedTax*0.45)-(assessedTax*0.15)
        },
        {
            title:`Third installment payable for the period September 16, ${CurrentYear} to December 15, ${CurrentYear}`,
            data:(assessedTax*0.75)-(assessedTax*0.45)
        },
        {
            title:`Last installment payable for the period December 16, ${CurrentYear+1} to March 15, ${CurrentYear+1}`,
            data:(assessedTax*1)-(assessedTax*0.75)
        },
    ];
    const headings=[
        "Description",
        "Advance Tax Installments",
    ]
    const style = {
        textDecoration: "none",
        padding: "10px",
        backgroundColor: "#f44336",
        color: "#fff",
        borderRadius: "5px",
        textAlign: "center", // Center align the button
        display: "inline-block",
        margin: "20px",
    };
    return (
        <>
            <thead>
                <tr>
                    <th className="text-2xl pt-8">Advance Tax Installments</th>
                    <th>
                        <ExportExcel
                            data={{headings:headings,body:advanceTaxInstallments}}
                            fileName={"Advance Tax Installments"}
                            style={style}
                            specificColumnWidth={{ A: 100 }}
                            columnWidths={{
                                A: 10,
                                B: 20,
                                C: 15,
                                D: 10,
                                E: 25,
                                F: 20,
                                G: 10,
                                H: 20,
                                I: 10,
                                J: 10,
                            }}
                        />
                    </th>
                </tr>
            </thead>
            <tbody className="[&_tr]:border [&_tr]:border-blue-700/50 [&_th]:p-[2px_4px] [&_td]:p-[4px_8px] [&_td]:text-sm [&_td]:tracking-tighter">
                <tr className="bg-blue-400 text-neutral-50">
                    <th>Description</th>
                    <th>Advance Tax Installments</th>
                </tr>
                {advanceTaxInstallments.map((item) => (
                    <tr key={item.title}>
                        <td>{item.title}</td>
                        <td className="border-l border-l-blue-700/50">{showCurrency(item.data||"")}</td>
                    </tr>
                ))}
            </tbody>
        </>
    );
}
export default function TaxResultTable(props) {
    const {advanceTaxCalculated} = props;
    if(!advanceTaxCalculated) return null
    return (
        <table className={` mt-4 mx-auto text-left w-[calc(100%-2rem)] md:max-w-[calc(950px-2rem)]`}>
            <AdvanceTaxLiability {...props}/>
            <AdvanceTaxInstallments {...props}/>
        </table>
    );
}