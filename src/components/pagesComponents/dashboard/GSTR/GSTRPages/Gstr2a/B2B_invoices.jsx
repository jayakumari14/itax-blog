import { IoMdDownload } from "react-icons/io";
import ExcelJS from "exceljs";
import userAxios from "@/lib/userAxios";
import { useEffect, useState } from "react";
const formatDate = (timestamp) =>
    new Date(timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

const invoiceDetails = [
    {
        invoiceNum: "MP123124214324234",
        invoiceDate: Date.now(),
        invoiceType: "R",
        placeOfSupply: "Madhya Pradesh",
        supplyAttrRevCharge: "N",
        totalInvoiceValue: "3,11,451.00",
        totalTaxableValue: "2,96,323.78",
        integeratedTax: "0.00",
        centralTax: "7,408.09",
        stateTax: "7,408.09",
        cess: "0.00",
        source: "E-Invoice",
    },
    {
        invoiceNum: "MP12312421234234",
        invoiceDate: Date.now(),
        invoiceType: "R",
        placeOfSupply: "Madhya Pradesh",
        supplyAttrRevCharge: "N",
        totalInvoiceValue: "3,11,451.00",
        totalTaxableValue: "2,96,323.78",
        integeratedTax: "0.00",
        centralTax: "7,408.09",
        stateTax: "7,408.09",
        cess: "0.00",
        source: "E-Invoice",
    },
];

const headers = {
    "Invoice No.": "invoiceNum",
    "Invoice Date": "invoiceDate",
    "Invoice Type": "invoiceType",
    "Place Of Supply": "placeOfSupply",
    "Supply Attract Reverse Charge": "supplyAttrRevCharge",
    "Total Invoice Value (₹)": "totalInvoiceValue",
    "Total Taxable Value (₹)": "totalTaxableValue",
    "Integerated Tax(₹)": "integeratedTax",
    "Central Tax (₹)": "centralTax",
    "State/UT Tax (₹)": "stateTax",
    "CESS (₹)": "cess",
    Source: "source",
};

const B2B_invoices = () => {
    const [invoiceData, setInvoiceData] = useState("");
    const giveMaxWidth = (column) => {
        let maxWidth = column.length;
        invoiceDetails.forEach((element) => {
            console.log(element);
            if (element[column].length > maxWidth) {
                maxWidth = element[column].length;
            }
        });
        return maxWidth;
    };
    const handleExport = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("B2B");

        // add header columns
        worksheet.columns = Object.keys(headers).map((col) => {
            return {
                header: col,
                key: headers[col],
                width: Math.max(col.length, giveMaxWidth(headers[col]) + 2),
            };
        });

        // add data to file
        invoiceDetails.forEach((invoice) => {
            worksheet.addRow(invoice);
        });

        // adding styles
        worksheet.getRow(1).height = 40;
        worksheet.getRow(1).font = {
            bold: true,
            color: {
                argb: "FFFFFF",
            },
        };
        worksheet.getRow(1).eachCell((cell) => {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FF3C7CDD" }, //bg-primary background
            };
            cell.alignment = { vertical: "middle" }; // Center text
        });
        worksheet.getRow(1).alignment = { vertical: "middle" };

        // applying styles on table data
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1 && rowNumber % 2 !== 0) {
                row.eachCell((cell) => {
                    cell.fill = {
                        type: "pattern",
                        pattern: "solid",
                        fgColor: { argb: "FFbfdbfe" },
                    };
                });
            }
            row.eachCell((cell) => {
                cell.alignment = { vertical: "middle", horizontal: "center" };
            });
        });

        // Adding banner styles
        const bannerData = [
            {
                text: "Goods and Services Tax  - GSTR 2A",
                fontSize: 25,
                fontItalic: false,
                fontUnderline: false,
                fontBold: true,
                textColor: "fffffff",
                backgroundColor: "FF3C7CDD",
                startRow: 1,
                endRow: 1,
                startCol: 1,
                endCol: 24,
                height: 60,
            },
            {
                text: "Taxable inward supplies received from registered persons",
                fontSize: 16,
                fontUnderline: false,
                fontBold: false,
                textColor: "2550000000",
                backgroundColor: "fef9c3",
                height: 25,
                startRow: 2,
                endRow: 2,
                startCol: 1,
                endCol: 24,
                fontItalic: false,
                height: 40,
            },
        ];
        const numColumnsToSpan = worksheet.columns.length;
        bannerData.forEach((data) => {
            worksheet.insertRow(data.startRow, []);
            worksheet.mergeCells(
                data.startRow,
                data.startCol,
                data.endRow,
                numColumnsToSpan,
            );
            worksheet.getRow(data.startRow).getCell(1).alignment = {
                horizontal: "center",
                vertical: "middle",
            };
            if (data.height !== undefined)
                worksheet.getRow(data.startRow).height = data.height;
            const cell = worksheet.getRow(data.startRow).getCell(1);
            cell.value =
                data.hyperlink === undefined
                    ? data.text
                    : {
                          text: data.text,
                          hyperlink: data.hyperlink,
                          tooltip: data.hyperlinkText,
                      };
            cell.font = {
                size: data.fontSize,
                bold: data.fontBold,
                color: { argb: data.textColor },
                italic: data.fontItalic,
                underline: data.fontUnderline,
            };
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: data.backgroundColor },
            };
            cell.border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
            };
        });

        // downloading the sheet
        // Generate Excel buffer
        const buffer = await workbook.xlsx.writeBuffer();

        // Create Blob object and trigger download
        const blob = new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "userData.xlsx";
        link.click();
        URL.revokeObjectURL(downloadUrl);
    };
    // useEffect(() => {
    //     userAxios
    //         .get(
    //             `/gst/search/gstin-by-pan?pan=${panno}&gst_state_code=${statecode}`,
    //         )
    //         .then(function (response) {
    //             console.log(response);
    //             setInvoiceData(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     // console.log("working");
    // }, []);

    return (
        <div className="p-4 md:px-16 lg:px-20">
            {/* Header */}
            <div className="h-24 bg-primary text-white p-4">
                <h1 className="text-xl text-white">B2B Invoice Summary</h1>
            </div>
            {/* Table container */}
            <div className="py-6 px-4">
                {/* Options form */}
                <div>
                    <form className="flex flex-col  sm:flex-row sm:justify-end  gap-6">
                        <div className="flex flex-col  sm:flex-row sm:items-center gap-4">
                            <label
                                htmlFor="columns"
                                className="text-sm whitespace-nowrap font-medium text-gray-900 dark:text-white"
                            >
                                Display/Hide columns
                            </label>

                            <select
                                id="columns"
                                defaultValue={"5"}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value={"5"}>+5</option>
                                <option value={"10"}>+10</option>
                                <option value={"20"}>+20</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <label
                                htmlFor="search"
                                className="text-sm  font-medium text-gray-900 dark:text-white"
                            >
                                Search
                            </label>

                            <input
                                type="text"
                                placeholder="search..."
                                id="search"
                                className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    </form>
                </div>
                {/* Table */}
                <div className="mt-6 overflow-x-auto scrollbar-thin">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-blue-50  bg-primary dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {Object.keys(headers).map((col) => {
                                    return (
                                        <th className="px-6 py-3" key={col}>
                                            {col}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceDetails.map((invoice, index) => {
                                return (
                                    <tr
                                        className={`${index % 2 !== 0 ? "bg-blue-50" : ""}`}
                                        key={invoice.invoiceNum}
                                    >
                                        {Object.keys(headers).map((col) => {
                                            if (col === "Invoice Date") {
                                                return (
                                                    <td
                                                        className="px-6 py-3"
                                                        key={col}
                                                    >
                                                        {formatDate(
                                                            invoice[
                                                                headers[col]
                                                            ],
                                                        )}
                                                    </td>
                                                );
                                            } else
                                                return (
                                                    <td
                                                        className="px-6 py-3"
                                                        key={col}
                                                    >
                                                        {invoice[headers[col]]}
                                                    </td>
                                                );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                {/* Buttons */}
                <div className="flex flex-row justify-end mt-12">
                    <button
                        onClick={handleExport}
                        className=" flex items-center gap-1 justify-center px-4 py-1 rounded-md text-white bg-green-500 hover:bg-green-600 hover:scale-105 transition-[transform,_colors] duration-300"
                    >
                        <IoMdDownload />
                        <span>Excel</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default B2B_invoices;
