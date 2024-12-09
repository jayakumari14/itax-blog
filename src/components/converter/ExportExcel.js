"use client";
import ExcelJS from "exceljs";

export const ExportExcel = (props) => {
    const {data,fileName,style,rowHeights,columnWidths,customColumnWidths,customRowHeights,} = props;
    const generateExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Sheet 1");
        // Add column headings
        worksheet.addRow([...data.headings]);

        // Set default column widths
        if (columnWidths) {
            Object.entries(columnWidths).forEach(([column, width]) => {
                worksheet.getColumn(column).width = width;
            });
        }

        // Merge default and custom column widths
        if (customColumnWidths) {
            Object.entries(customColumnWidths).forEach(([column, width]) => {
                worksheet.getColumn(column).width = width;
            });
        }
        data.body.forEach((row, rowIndex) => {
            worksheet.addRow([row.title, row.data]);
        })
        // Set default row heights
        if (rowHeights) {
            Object.entries(rowHeights).forEach(([rowIndex, height]) => {
                worksheet.getRow(parseInt(rowIndex) + 1).height = height;
            });
        }

        // Merge default and custom row heights
        if (customRowHeights) {
            Object.entries(customRowHeights).forEach(([rowIndex, height]) => {
                worksheet.getRow(parseInt(rowIndex) + 1).height = height;
            });
        }

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName + ".xlsx";
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <button onClick={generateExcel} style={style}>
            Export Excel
        </button>
    );
};




//////////////////////////////////////
// import React from "react";

// import { ExportExcel } from "@/components/converter/ExportExcel";

// export default function example() {
//     const fileName = "Advance_Tax_calculator_itaxeasy";

//     const viewers = [
//         {},
//         {
//             "": "",
//             "Tax Payer": "cheng mey",
//             "Net Taxable Income": "income tax",
//             "Income Tax": "any",
//             Surcharge: 1200,
//             "Health and Education Cess": 1000,
//             "Total Tax Liability": 1500,
//             Relief: "PR01000074",
//             "TDS/TCS/MAT/(AMT) Credit Utilize": 2500,
//             "Accessed Tax": 50000,
//         },
//         {
//             "": "",
//             "Tax Payer": "cheng mey",
//             "Net Taxable Income": "income tax",
//             "Income Tax": "any",
//             Surcharge: 1200,
//             "Health and Education Cess": 1000,
//             "Total Tax Liability": 1500,
//             Relief: "PR01000074",
//             "TDS/TCS/MAT/(AMT) Credit Utilize": 2500,
//             "Accessed Tax": 50000,
//         },
//     ];

//     const style = {
//         textDecoration: "none",
//         padding: "10px",
//         backgroundColor: "#f44336",
//         color: "#fff",
//         borderRadius: "5px",
//         textAlign: "center", // Center align the button
//         display: "inline-block",
//         margin: "20px",
//     };

//     return (
//         <div style={{ fontFamily: "Arial, sans-serif" }}>
//             <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//                 Viewers Tax Information
//             </h2>

//             <ExportExcel
//                 data={viewers}
//                 fileName={fileName}
//                 style={style}
//                 specificColumnWidth={{ A: 100 }}
//                 columnWidths={{
//                     A: 10,
//                     B: 20,
//                     C: 15,
//                     D: 10,
//                     E: 25,
//                     F: 20,
//                     G: 10,
//                     H: 20,
//                     I: 10,
//                     J: 10,
//                 }}
//             />
//         </div>
//     );
// }
