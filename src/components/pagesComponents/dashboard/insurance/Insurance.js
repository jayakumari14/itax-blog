'use client';

import React, { useCallback } from 'react';
import userAxios from '@/lib/userAxios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ReactTable from '@/components/ui/ReactTable';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import InsuranceForm from './InsuranceForm';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Loader from '@/components/partials/loading/Loader';
import { formatDate } from '@/utils/utilityFunctions';
import Pagination from '@/components/navigation/Pagination';
import ReactSelect from 'react-select';

const generatedLimitOptions = Array.from({ length: 5 }).map((k, i) => ({
  label: (i + 1) * 5,
  value: (i + 1) * 5,
}));

const Insurance = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Modal
  const [editModalData, setEditModalData] = useState(null);
  const [modal, setModal] = useState(false);

  // Pagination
  const [isPage, setIsPage] = useState(1);
  const [limit, setLimit] = useState(generatedLimitOptions[0]);

  // Modal Toggler
  const toggleModal = (newVal) => {
    if (typeof newVal === 'boolean') {
      return setModal(newVal);
    }
    setModal(!modal);
  };

  // Fetches Applications
  const getApplications = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await userAxios.get(
        `/insurance/getAll?page=${isPage}&limit=${limit.value}&order='asc'`,
      );
      if (response && response?.data) {
        setData(response.data);
      }
    } catch (error) {
      toast.error('Error while getting applications.');
    } finally {
      setIsLoading(false);
    }
  }, [isPage, limit]);

  const handleEdit = async (row) => {
    setEditModalData(row);
    toggleModal(true);
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm('Are you sure you want to delete')) {
        setIsLoading(true);
        const { status } = await userAxios.delete(`/insurance/delete/${id}`);
        if (status) {
          toast.success('Application deleted successfully!');
          getApplications();
        }
      }
    } catch (error) {
      toast.error('Error while deleting!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApplications();
  }, [isPage, limit, getApplications]);

  const columns = [
    {
      text: 'Name',
      dataField: 'name',
      formatter: (value) => (
        <div className="flex min-w-12 justify-start">
          <span>{value}</span>
        </div>
      ),
    },
    {
      text: 'Email',
      dataField: 'email',
      formatter: (value) => (
        <div className="flex min-w-12 justify-start">
          <span>{value}</span>
        </div>
      ),
    },
    {
      text: 'Date of birth',
      dataField: 'dob',
      formatter: (value) => (
        <div className="flex min-w-12 justify-start">
          <span>{formatDate(value)}</span>
        </div>
      ),
    },
    {
      text: 'Mobile No.',
      dataField: 'mobile',
      formatter: (value) => (
        <div className="flex min-w-12 justify-start">
          <span>{value}</span>
        </div>
      ),
    },
    {
      text: 'Gender',
      dataField: 'gender',
      formatter: (value) => (
        <div className="flex min-w-12 justify-start">
          <span className="capitalize">{value}</span>
        </div>
      ),
    },
    {
      text: 'Marital Status',
      dataField: 'maritalStatus',
      formatter: (value) => (
        <div className="flex min-w-12 justify-start">
          <span className="capitalize">{value}</span>
        </div>
      ),
    },
    {
      text: 'Type',
      dataField: 'type',
      formatter: (value) => (
        <div className="flex min-w-20 justify-start">
          <span className="capitalize">{value}</span>
        </div>
      ),
    },
    {
      text: 'Address',
      dataField: 'address',
      formatter: (value) => (
        <div className="flex min-w-12 justify-start">
          <span>{value}</span>
        </div>
      ),
    },
    {
      text: 'Actions',
      dataField: '',
      formatter: (data, row) => {
        return (
          <div className="flex gap-2">
            <Button className={BTN_SIZES['sm']} onClick={() => handleEdit(row)}>
              <FaRegEdit />
            </Button>
            <Button
              className={BTN_SIZES['sm']}
              onClick={() => handleDelete(row.id)}
            >
              <FaTrashAlt />
            </Button>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[75vh]">
        <Loader />
      </div>
    );
  }

  return (
    <main>
      <section className="grid gap-3 py-4 p-2 md:max-w-[1200px] overflow-hidden border-2 shadow-md my-3 rounded-lg mx-auto">
        <div className="flex flex-wrap px-2 py-3 justify-between rounded-lg gap-3">
          <h2 className="md:text-2xl text-xl font-semibold text-slate-800">
            Applications for insurance
          </h2>
          <Button onClick={toggleModal} size={BTN_SIZES['sm']}>
            Add Application
          </Button>
        </div>

        {/* Modal */}
        <Modal
          title={`${editModalData ? 'Update' : 'Create'} Application`}
          className={'md:max-w-[900px] '}
          isOpen={modal}
          onClose={() => {
            if (editModalData) {
              setEditModalData(null);
            }
            toggleModal();
          }}
        >
          <InsuranceForm
            refresh={getApplications}
            onClose={() => {
              if (editModalData) {
                setEditModalData(null);
              }
              toggleModal();
            }}
            data={editModalData}
          />
        </Modal>

        {data && data.length < 1 ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <span className="text-lg font-medium">No applications yet!</span>
          </div>
        ) : (
          <div>
            <ReactTable
              columns={columns}
              data={data?.applications ?? []}
              id="insuranceTable"
            />
            <div className="flex justify-end items-center my-4 pb-36 gap-3">
              <Pagination
                currentPage={isPage}
                setCurrentPage={setIsPage}
                totalPages={data?.totalApplications ?? 5}
              />
              <ReactSelect
                value={limit}
                onChange={(opt) => setLimit(opt)}
                options={generatedLimitOptions}
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Insurance;
