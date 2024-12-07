'use client';
const formatDate = (timestamp) =>
  new Date(timestamp).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { IoMdDownload } from 'react-icons/io';
import ExcelJS from 'exceljs';
const tableData = {
  'Party Name': 'partyName',
  Date: 'createdAt',
  'GST Number': 'gstNumber',
  'Invoice No.': 'invoiceNumber',
  Amount: 'totalAmount',
  Status: 'status',
};

export default function Sales(props) {
  const { salesInvoices, loading, error } = props;
  // const [invoiceFiltered, setInvoiceFiltered] = useState();

  // const [query, setQuery] = useState("");
  // const handleSearch = (e)=>{
  //     setQuery(e.target.value)
  //     if(e.target.value === "") {
  //         setInvoiceFiltered(salesInvoices)
  //     }
  //     setInvoiceFiltered(salesInvoices.filter((invoice)=>{
  //         return invoice.invoiceNumber.includes(e.target.value)
  //     }))
  // }

  // console.log(salesInvoices);
  // Excel Export
  const giveMaxWidth = (column) => {
    let maxWidth = column.length;
    salesInvoices.forEach((element) => {
      console.log(element);
      if (element[column].length > maxWidth) {
        maxWidth = element[column].length;
      }
    });
    return maxWidth;
  };
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('MySheet1');

    // add header columns
    worksheet.columns = Object.keys(tableData).map((col) => {
      return {
        header: col,
        key: tableData[col],
        width: giveMaxWidth(tableData[col]) + 2,
      };
    });

    // add data to file
    salesInvoices.forEach((invoice) => {
      worksheet.addRow(invoice);
    });
    // adding styles
    worksheet.getRow(1).height = 40;
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFCCCCCC' }, // Grey background color
      };
      cell.alignment = { vertical: 'center' }; // Center text
    });
    worksheet.getRow(1).alignment = { vertical: 'middle' };

    // ADDING A STYLED BANNER
    // Header data
    const bannerData = [
      {
        text: 'Itax Easy Sales report',
        fontSize: 25,
        fontItalic: false,
        fontUnderline: false,
        fontBold: true,
        textColor: 'bfdbfe',
        backgroundColor: '1d4ed8',
        height: 90,
        row: 1,
      },
      {
        text: 'Visit Facebook',
        fontSize: 16,
        fontUnderline: true,
        fontBold: false,
        textColor: 'FF67e8f9',
        backgroundColor: 'FFFFFFFF',
        height: 25,
        row: 2,
        fontItalic: true,
        isImage: true,
        hyperlink: 'http://www.facebook.com/itaxeasydotcom',
        hyperlinkText: 'Visit our Facebook page',
      },
      {
        text: 'Visit twitter',
        fontSize: 16,
        fontUnderline: true,
        fontBold: false,
        fontItalic: true,
        textColor: 'FF67e8f9',
        backgroundColor: 'FFFFFFFF',
        height: 25,
        row: 3,
        hyperlink: 'https://twitter.com/itaxeasy',
        hyperlinkText: 'Visit our X page',
      },
    ];

    const numColumnsToSpan = worksheet.columns.length;
    bannerData.forEach((data) => {
      worksheet.insertRow(data.row, []);
      worksheet.mergeCells(data.row, 1, data.row, numColumnsToSpan);
      worksheet.getRow(data.row).getCell(1).alignment = {
        horizontal: 'center',
        vertical: 'middle',
      };
      worksheet.getRow(data.row).height = data.height;
      const cell = worksheet.getRow(data.row).getCell(1);
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
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: data.backgroundColor },
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    // Generate Excel buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Create Blob object and trigger download
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'userData.xlsx';
    link.click();
    URL.revokeObjectURL(downloadUrl);
  };

  if (loading) {
    return (
      <div className="grid place-content-center min-h-[calc(100vh-5rem)]">
        <h1>loading</h1>
      </div>
    );
  }
  if (error?.isError) {
    return (
      <div className="grid place-content-center min-h-[calc(100vh-5rem)]">
        <h1>{error?.response?.data?.message}</h1>
      </div>
    );
  }

  return (
    <DashSection
      title={'Sales Invoice'}
      titleRight={
        <div className=" flex flex-row items-center gap-4 justify-center mb-2">
          <Link
            href="/dashboard/accounts/invoice/sales/create"
            className="inline-block px-4 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-[transform,_colors] duration-300"
          >
            create
          </Link>

          <button
            onClick={handleExport}
            className=" flex items-center gap-1 justify-center px-4 py-1 rounded-md text-white bg-green-500 hover:bg-green-600 hover:scale-105 transition-[transform,_colors] duration-300"
          >
            <IoMdDownload />
            <span>Excel</span>
          </button>
        </div>
      }
      className="py-0"
    >
      {/* <div>
                    <label htmlFor="search">Search</label>
                    <input
                        type="search"
                        id="search"
                        className="input"
                        value={query}
                        onChange={handleSearch}
                    />
                    <button>Search</button>
                </div> */}
      <div className="h-[calc(100vh-190px)] sm:h-[calc(100vh-220px)] overflow-y-auto p-2 border border-t-2">
        {salesInvoices?.length === 0 ? (
          <div className="grid place-content-center h-full">
            <Icon
              className="w-40 h-24 opacity-5 mx-auto"
              icon="ph:files-light"
            />
            <p className="text-center">No Record Found</p>
          </div>
        ) : (
          // <ul className="p-2 gap-2 grid sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
          //     {salesInvoices?.map((invoice) => (
          //         <li key={invoice?.id}>
          //             <Link
          //                 href={`/dashboard/accounts/invoice/sales/sale?id=${invoice?.id}`}
          //                 className="text-sm p-2 rounded-md grid sm:grid-cols-2 gap-4 shadow-md shadow-blue-500 hover:shadow-blue-600 outline outline-1 hover:outline-2 outline-blue-500"
          //             >
          //                 <div>
          //                     <div className="flex gap-2">
          //                         <div className="label font-semibold">
          //                             Party Name:
          //                         </div>
          //                         <div className="tracking-tighter text-gray-800 font-medium">
          //                             Jitendra Yadav
          //                         </div>
          //                     </div>
          //                     <div className="flex gap-2">
          //                         <div className="label font-semibold">
          //                             GST Number
          //                         </div>
          //                         <div className="tracking-tighter text-gray-800 font-medium">
          //                             {invoice?.gstNumber}a
          //                         </div>
          //                     </div>
          //                 </div>
          //                 <div>
          //                     <div className="flex gap-2">
          //                         <div className="label font-semibold">
          //                             Date
          //                         </div>
          //                         <div className="tracking-tighter text-gray-800 font-medium">
          //                             {formatDate(invoice?.createdAt)}
          //                         </div>
          //                     </div>
          //                     <div className="flex gap-2">
          //                         <div className="label font-semibold">
          //                             Invoice No.
          //                         </div>
          //                         <div className="tracking-tighter text-gray-800 font-medium">
          //                             {invoice?.invoiceNumber}
          //                         </div>
          //                     </div>
          //                 </div>
          //                 <div className="sm:col-span-2 sm:flex justify-between">
          //                     <div className="flex gap-2">
          //                         <div className="label font-semibold">
          //                             Amount-
          //                         </div>
          //                         <div className="tracking-tighter text-gray-800 font-medium">
          //                             ₹${invoice?.totalAmount}
          //                         </div>
          //                     </div>
          //                     <div className="flex gap-2">
          //                         <div className="label font-semibold">
          //                             Status{" "}
          //                         </div>
          //                         <div className="text-orange-500 ">
          //                             {invoice?.status}
          //                         </div>
          //                     </div>
          //                 </div>
          //             </Link>
          //         </li>
          //     ))}
          // </ul>
          <div className=" w-full overflow-x-auto scrollbar-thin">
            <table className="w-full border-collapse text-nowrap ">
              <thead className="text-left">
                <tr>
                  {Object.keys(tableData).map((column) => {
                    return (
                      <th className="border-b px-4 py-3" key={column}>
                        {column}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="text-left">
                {salesInvoices &&
                  salesInvoices.map((invoice, index) => {
                    return (
                      <tr
                        key={invoice?.id}
                        className={index % 2 !== 0 ? 'bg-blue-100' : ''}
                      >
                        {Object.keys(tableData).map((column) => {
                          return (
                            <td
                              className={`px-4 py-3 ${column === 'Status' ? 'text-orange-500' : ''}`}
                              key={invoice[tableData[column]]}
                            >
                              {column === 'Date'
                                ? formatDate(invoice[tableData[column]])
                                : invoice[tableData[column]]}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashSection>
  );
}
