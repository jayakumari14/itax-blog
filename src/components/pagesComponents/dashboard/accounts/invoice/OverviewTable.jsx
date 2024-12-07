'use client';

import React, { useEffect, useState } from 'react';
import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Pagination from '@/components/navigation/Pagination';
import ReactTable from '@/components/ui/ReactTable';
import { invoicesTableHeaders } from './staticData';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import userAxios from '@/lib/userAxios';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import { IoMdDownload } from 'react-icons/io';
import ExcelJS from 'exceljs';

function OverviewTable({
  handleEdit,
  invoices,
  refresh,
  search,
  setSearch,
  pagination,
  currentPage,
  setCurrentPage,
}) {
  const [isDeleteLoading, setDeleteLoading] = useState(false);
  const [form, setForm] = useState({
    search: '',
    type: { label: '', value: '' },
  });

  const handleDeleteById = async (id) => {
    try {
      if (window.confirm('Are you sure ?')) {
        setDeleteLoading(true);
        const response = await userAxios.delete(`/invoice/invoices/${id}`);
        if (response.status === 200) {
          await refresh();
          toast.success(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setDeleteLoading(false);
    }
  };

  const adjustedHeaders = [
    {
      text: (
        <div className="flex justify-start items-center">
          <span className="font-medium capitalize">SR.NO.</span>
        </div>
      ),
      dataField: 'id',
      formatter: (id) => {
        return (
          <div className="flex justify-start items-center">
            <span className="font-medium capitalize">
              {Array.isArray(invoices) &&
                invoices.findIndex((inv) => inv.id === id) + 1}
            </span>
          </div>
        );
      },
    },
    ...invoicesTableHeaders,
    {
      text: (
        <div className="flex justify-start items-center">
          <span className="font-medium">Action</span>
        </div>
      ),
      dataField: '',
      formatter: (data, row) => (
        <div className="flex gap-2 items-center">
          <Link href={`/dashboard/accounts/invoice/${row.id}`}>
            <Button className={BTN_SIZES['sm']}>
              <FaEye size={28} />
            </Button>
          </Link>
          <Button className={BTN_SIZES['sm']} onClick={() => handleEdit(row)}>
            <MdEdit size={28} />
          </Button>
          <Button
            className={BTN_SIZES['sm']}
            onClick={() => handleDeleteById(row.id)}
          >
            <MdDelete size={28} />
          </Button>
        </div>
      ),
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch({
      ...form,
      search: form.search ?? form.search.trim(),
    });
  };

  const tableData = {
    'Party Name': 'partyName',
    Date: 'createdAt',
    'GST Number': 'gstNumber',
    'Invoice No.': 'invoiceNumber',
    'Total GST': 'totalGst',
    Amount: 'totalAmount',
    Status: 'status',
    'Mode Of Payment': 'modeOfPayment',
    Details: 'details',
    'Extra Details': 'extraDetails',
  };

  //excel fil exported for invoice

  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Invoices');

    const giveMaxWidth = (column) => {
      let maxWidth = column.length;
      invoices.forEach((element) => {
        if (element[column] && element[column].length > maxWidth) {
          maxWidth = element[column].length;
        }
      });
      return maxWidth;
    };

    // Add header columns
    worksheet.columns = Object.keys(tableData).map((col) => {
      return {
        header: col,
        key: tableData[col],
        width: giveMaxWidth(tableData[col]) + 2,
      };
    });

    // Add data to file
    invoices.forEach((invoice) => {
      worksheet.addRow(invoice);
    });

    // Adding styles
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

    // Generate Excel buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Create Blob object and trigger download
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'invoices.xlsx';
    link.click();
    URL.revokeObjectURL(downloadUrl);
  };

  useEffect(() => {
    if (search) {
      setForm({
        search: search.search,
        type: search.type ?? null,
        status: search.status ?? null,
      });
    }
  }, [search]);
  console.log(invoices);
  return (
    <DashSection
      title={'Invoices'}
      titleRight={
        <>
          <div>
            <Button
              onClick={() => handleEdit(null)}
              size={'sm'}
              className={'m-2'}
            >
              Create Invoice
            </Button>
            <Button onClick={handleExport} size={'sm'} className={'m-2'}>
              Export Invoice
            </Button>
          </div>
        </>
      }
      className="flex gap-4 flex-col mt-8 p-2"
    >
      <div>
        <form onSubmit={handleSearch} className="flex justify-end p-2 gap-2">
          <div className="flex gap-2">
            <label className="hidden" htmlFor="search">
              Search
            </label>
            <Input
              className="md:min-w-[250px]"
              type="search"
              label="Search"
              value={form.search}
              onChange={(e) => setForm({ ...form, search: e.target.value })}
              name="search"
              placeholder="Search by invoice number, gstin.. safsdztgr"
              id="search"
            />
          </div>
          <div>
            <Input
              type="select"
              placeholder="Select Type"
              isClearable
              label="Type"
              options={[
                { label: 'Purchase', value: 'purchase' },
                { label: 'Sale', value: 'sales' },
              ]}
              onChange={(option) => {
                setForm({
                  ...form,
                  type: option,
                });
              }}
              value={form.type}
            />
          </div>
          <div>
            <Input
              type="select"
              placeholder="Select Payment"
              isClearable
              label="Payment"
              options={[
                { label: 'Paid', value: 'paid' },
                { label: 'Unpaid', value: 'unpaid' },
              ]}
              onChange={(option) => {
                setForm({
                  ...form,
                  status: option,
                });
              }}
              value={form.status}
            />
          </div>
          <div className="flex items-end">
            <Button>
              <Icon fontSize={28} icon="ic:baseline-search" />
            </Button>
          </div>
        </form>
        <div className="w-full inline-block align-middle">
          <div className="overflow-auto p-2">
            {isDeleteLoading ? (
              <div className="flex justify-center items-center my-4">
                <Image
                  src={'/loading.svg'}
                  width={50}
                  height={50}
                  alt="Loading.."
                />
              </div>
            ) : (
              <>
                <ReactTable columns={adjustedHeaders} data={invoices || []} />
                {Array.isArray(invoices) && invoices.length === 0 && (
                  <div className="w-[100vw] border h-full flex flex-col justify-start items-center p-4 min-h-[300px]">
                    <Icon
                      className="w-40 h-24 opacity-5 text-slate-800 mx-auto"
                      icon="ph:files-light"
                    />
                    <p className="text-center font-normal">No Record Found!</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={pagination?.pages}
          setCurrentPage={setCurrentPage}
          invoices={invoices}
        />
      </div>
    </DashSection>
  );
}

export default OverviewTable;
