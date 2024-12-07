import * as ExcelJS from "exceljs";

const handleExport = async (data, fileName) => {
    console.log(data);
    const giveMaxWidth = (sheet, column) => {
        let maxWidth = column.length;
        data[sheet].bodyData.forEach((element) => {
            if (
                element[column] &&
                element[column]?.toString()?.length > maxWidth
            ) {
                maxWidth = element[column].toString().length;
            }
        });
        return maxWidth;
    };

    const workbook = new ExcelJS.Workbook();
    for (let sheet in data) {
        const worksheet = workbook.addWorksheet(sheet);
        // add header columns
        worksheet.columns = Object.keys(data[sheet].headers).map((col) => {
            return {
                header: col,
                key: data[sheet].headers[col],
                width: Math.max(
                    col.length + 2,
                    giveMaxWidth(sheet, data[sheet].headers[col]) + 2,
                ),
            };
        });
        // add data to file
        data[sheet]?.bodyData.forEach((invoice) => {
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
                cell.alignment = { vertical: "middle", horizontal: "left" };
            });
        });
        // Adding banner styles
        const numColumnsToSpan = worksheet.columns.length;
        data[sheet].bannerData.forEach((data) => {
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
                wrapText: true,
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

        if (data[sheet].specialHeader) {
            const rowValues = [];
            data[sheet].specialHeader.forEach((element) => {
                rowValues[element.startCol] = element.text;
            });

            const insertedRow = worksheet.insertRow(4, rowValues);
            data[sheet].specialHeader.forEach((data) => {
                worksheet.mergeCells(
                    data.startRow,
                    data.startCol,
                    data.endRow,
                    data.endCol,
                );
            });
            //adding styles to special row
            insertedRow.height = 40;
            insertedRow.font = {
                bold: true,
                color: {
                    argb: "FFFFFF",
                },
            };
            insertedRow.eachCell((cell) => {
                cell.fill = {
                    type: "pattern",
                    pattern: "solid",
                    fgColor: { argb: "FF1e3a8a" }, //bg-primary background
                };
                cell.alignment = { vertical: "middle" }; // Center text
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" },
                };
            });
            insertedRow.alignment = { vertical: "middle" };
        }
    }

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
    link.download = `${fileName ?? "Data"}.xlsx`;
    link.click();
    URL.revokeObjectURL(downloadUrl);
};

export default handleExport;
