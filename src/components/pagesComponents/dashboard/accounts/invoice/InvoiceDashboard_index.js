'use client';

import InvoiceDashboardNavItem from './InvoiceDashboardNavItem.jsx';
import OverviewDashboard from './OverviewDashboard.jsx';
import OverviewTable from './OverviewTable.jsx';
import userAxios from '@/lib/userAxios.js';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image.js';
import moment from 'moment';
import Modal from '@/components/ui/Modal.js';
import CreateInvoice from './invoice/CreateInvoice.js';
import Loader from '@/components/partials/loading/Loader.js';

export default function InvoiceDashboard_index({ businessProfile }) {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const [currentInv, setCurrentInv] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState({
    search: '',
    type: null,
    status: null,
  });
  const [invoices, setInvoices] = useState(null);
  const [pagination, setPagination] = useState({});

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
      console.log(error.message);
    }
  }, [currentPage, search?.type?.value, search?.search, search?.status?.value]);
  // console.log(items);
  const navCardData = {
    invoice: invoices && invoices,
    sale: invoices && invoices.filter((inv) => inv.type === 'sales'),
    purchase: invoices && invoices.filter((inv) => inv.type === 'purchase'),
    item: items && items,
    customer: invoices && invoices.filter((inv) => inv.type === 'sales'),
    supplier: invoices && invoices.filter((inv) => inv.type === 'purchase'),
    'cash/bank': invoices && invoices,
  };
  const invoiceOverview = {
    totalInvoices: invoices && invoices.length,
    unpaidInvoices:
      invoices && invoices.filter((inv) => inv.status === 'unpaid').length,
    overDue:
      invoices &&
      invoices
        .filter((inv) => {
          const isDue = moment(new Date(inv.dueDate)).isBefore(moment());
          const isUnpaid = inv.status === 'unpaid';
          return isDue && isUnpaid;
        })
        .reduce((acc, inv) => inv.totalAmount + acc, 0),
    upcomingPayouts:
      invoices &&
      invoices
        .filter((inv) => {
          const isUpcoming = moment(new Date(inv.dueDate)).isAfter(moment());
          const isUnpaid = inv.status === 'unpaid';
          return isUpcoming && isUnpaid;
        })
        .reduce((acc, inv) => inv.totalAmount + acc, 0),
  };

  useEffect(() => {
    getInvoices();
  }, [currentPage, getInvoices, search]);

  // console.log('search', search);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[75vh]">
        <Image src={'/loading.svg'} width={50} height={50} alt="Loading..." />
      </div>
    );
  }

  const handleEdit = (row) => {
    if (row) {
      setCurrentInv(row);
    }
    setModal(true);
  };

  const handleEditClose = () => {
    if (currentInv) {
      setCurrentInv(null);
    }
    setModal(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[75vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Form Modal */}
      <Modal
        isOpen={modal}
        className="lg:min-w-[1000px]"
        onClose={handleEditClose}
        title={currentInv ? 'Update Invoice' : 'Create Invoice'}
      >
        <CreateInvoice
          currentInvoice={currentInv}
          refresh={getInvoices}
          onClose={handleEditClose}
          businessProfile={businessProfile}
        />
      </Modal>
      <InvoiceDashboardNavItem navCardData={navCardData} />
      <OverviewDashboard invoiceOverview={invoiceOverview} />
      <OverviewTable
        setSearch={setSearch}
        search={search}
        handleEdit={handleEdit}
        handleEditClose={handleEditClose}
        refresh={getInvoices}
        currentPage={currentPage}
        invoices={invoices}
        pagination={pagination}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
