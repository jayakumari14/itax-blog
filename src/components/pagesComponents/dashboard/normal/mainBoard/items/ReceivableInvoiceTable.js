'use client';

import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import ReactTable from '@/components/ui/ReactTable';
import userAxios from '@/lib/userAxios';
import { useCallback, useEffect, useState } from 'react';
import { getReceivableTableHeaders } from './staticData';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import Pagination from '@/components/navigation/Pagination';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import CreateReceivable from './CreateReceivable';
import Modal from '@/components/ui/Modal';

const ReceivableInvoiceTable = () => {
  const [modal, setModal] = useState(false);
  const [admin, setAdmin] = useState([]);
  const [currentRow, setCurrentRow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalUser, setTotalUser] = useState({
    userCount: 0,
    pageCount: 0,
  });

  // FETCHES USERS
  const getAllUsers = useCallback(async () => {
    return
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get(
        `${currentPage}&order=desc`,
      );
      if (status === 200 && data && data.data) {
        setAdmin(data.data);
        setTotalUser({
          userCount: data.totalusers,
          pageCount: data.page,
        });
      }
    } catch (error) {
      console.log('🚀 ~ getAllUsers ~ error:', error);
      toast.error('Error getting users');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

 

  const headers = [
    {
      dataField: 'id',
      text: 'S No.',
      formatter: (data) => (
        <div>
          <span>{data ?? 'N/A'}</span>
        </div>
      ),
    },
    ...getReceivableTableHeaders,
    {
      dataField: '',
      text: 'Action',
      formatter: (data, row) => (
        <div>
          <Button
            className={BTN_SIZES['sm']}
            onClick={() => {
              setCurrentRow(row);
              setModal(true);
            }}
          >
            <FaEdit />
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getAllUsers();
  }, [currentPage, setCurrentPage, getAllUsers]);

  return (
    <>
      <DashSection
        title={'Receivable Invoice'}
        titleRight={
          <Button onClick={() => setModal(true)} className={BTN_SIZES['md-1']}>
            Create Receivable
          </Button>
        }
      >
        <Modal
          className={'md:max-w-[950px]'}
          title={currentRow ? 'Update Receivable' : 'Create Receivable'}
          onClose={() => {
            if (currentRow) {
              setCurrentRow(null);
            }
            setModal(false);
          }}
          isOpen={modal}
        >
          <CreateReceivable
            currentRow={currentRow}
            onRefresh={getAllUsers}
            onClose={() => {
              if (currentRow) {
                setCurrentRow(null);
              }
              setModal(false);
            }}
          />
        </Modal>
        <div className="p-3">
          <ReactTable columns={headers} data={admin} />
        </div>
        <div className="flex justify-end">
          <Pagination
            currentPage={currentPage + 1}
            setCurrentPage={setCurrentPage}
            totalPages={totalUser.pageCount}
          />
        </div>
      </DashSection>
    </>
  );
};
export default ReceivableInvoiceTable;


