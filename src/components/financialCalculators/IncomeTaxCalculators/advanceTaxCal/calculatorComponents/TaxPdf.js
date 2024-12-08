import { ExportExcel } from "@/components/converter/ExportExcel";

export default function TaxPdf(props) {
    const {advanceTaxCalculated} = props;
    return true;
    if (advanceTaxCalculated === null) {
        return null
    }
    const viewers = [
        {},
        {
            "": "",
            "Tax Payer": "cheng mey",
            "Net Taxable Income": "income tax",
            "Income Tax": "any",
            Surcharge: 1200,
            "Health and Education Cess": 1000,
            "Total Tax Liability": 1500,
            Relief: "PR01000074",
            "TDS/TCS/MAT/(AMT) Credit Utilize": 2500,
            "Accessed Tax": 50000,
        },
        {
            "": "",
            "Tax Payer": "cheng mey",
            "Net Taxable Income": "income tax",
            "Income Tax": "any",
            Surcharge: 1200,
            "Health and Education Cess": 1000,
            "Total Tax Liability": 1500,
            Relief: "PR01000074",
            "TDS/TCS/MAT/(AMT) Credit Utilize": 2500,
            "Accessed Tax": 50000,
            "aaa":"aaa",
        },
    ];

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
    console.log(advanceTaxCalculated)
    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Viewers Tax Information
            </h2>

            <ExportExcel
                data={viewers}
                fileName={"Advance_Tax_calculator_itaxeasy"}
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
        </div>
    );
}
