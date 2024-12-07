'use client';

import { useCallback, useState } from 'react';
import ErrorComponent from '@/components/partials/error/ErrorComponent';
import CreateInvoice from '@/components/pagesComponents/dashboard/accounts/invoice/invoice/CreateInvoice';

const initialSearch = { search: '', type: null, status: null };
export default async function CreateInvoicePage({ businessProfile }) {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentInv, setCurrentInv] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(initialSearch);
  const [invoices, setInvoices] = useState(null);
  const [pagination, setPagination] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const getInvoices = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get(
        `/invoice/invoices?page=${currentPage}&limit=5&type=${search?.type?.value ?? ''}&search=${search.search ?? ''}&status=${search?.status?.value ?? ''}`,
      );

      if (status === 200) {
        const { invoices, pagination } = data;
        setPagination(pagination);
        setInvoices(invoices);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  }, [currentPage, search?.type?.value, search?.search, search?.status?.value]);

  if (errorMessage)
    <ErrorComponent
      message={errorMessage}
      info="Something went wrong."
      type=""
    />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Invoice</h1>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <CreateInvoice
            currentInvoice={currentInv}
            refresh={getInvoices}
            businessProfile={businessProfile}
          />
        </div>
      </div>
    </div>
  );
}
