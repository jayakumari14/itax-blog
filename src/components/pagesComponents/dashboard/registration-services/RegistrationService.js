'use client';

import React, { useCallback } from 'react';
import userAxios from '@/lib/userAxios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ReactTable from '@/components/ui/ReactTable';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { FaEye, FaRegCheckCircle, FaTrashAlt } from 'react-icons/fa';
import Loader from '@/components/partials/loading/Loader';
import Image from 'next/image';
import Pagination from '@/components/navigation/Pagination';
import ReactSelect from 'react-select';
import { MdContentCopy } from 'react-icons/md';

const generatedLimitOptions = Array.from({ length: 5 }).map((k, i) => ({
  label: (i + 1) * 5,
  value: (i + 1) * 5,
}));

const Insurance = () => {
  const [data, setData] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Modal
  const [editModalData, setEditModalData] = useState(null);
  const [modal, setModal] = useState(false);

  // Pagination
  const [isPage, setIsPage] = useState(1);
  const [pagination, setPagination] = useState({});
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
        `/registration?page=${isPage}&limit=${limit.value}&order='asc'`,
      );
      if (response && response?.data?.data) {
        const newData = response.data.data.map((item) => {
          const { user, registerStartup, ...rest } = item;
          return {
            ...user,
            ...registerStartup,
            ...rest,
          };
        });
        setData(newData);
        setPagination(response?.data?.pagination ?? {});
      }
    } catch (error) {
      console.log('🚀 ~ getApplications ~ error:', error);
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
        const { status } = await userAxios.delete(`/registration/${id}`);
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

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        toast.success(`Phone number has copied to clipboard`);
        setTimeout(() => setIsCopied(false), 1000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleDownload = async (url, filename) => {
    try {
      const response = await fetch(url, {
        mode: 'cors',
      });
      const blob = await response.blob();
      const link = document.createElement('a');
      const urlObject = URL.createObjectURL(blob);
      link.href = urlObject;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(urlObject);
    } catch (error) {
      console.error('Failed to download file:', error);
    }
  };

  useEffect(() => {
    getApplications();
  }, [isPage, limit, getApplications]);

  const columns = [
    {
      text: 'Applicant Name',
      dataField: 'firstName',
      formatter: (value, row) => (
        <div className="flex min-w-12 justify-start">
          <span>{`${value}${row.middleName ?? ' '} ${row.lastName ?? ''}`}</span>
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
      text: 'Mobile No.',
      dataField: 'phone',
      formatter: (value) => (
        <div className="flex min-w-12 justify-start">
          <span className="text-primary font-medium flex gap-2 items-center">
            {value}
            {isCopied ? (
              <FaRegCheckCircle />
            ) : (
              <MdContentCopy
                className="cursor-pointer"
                onClick={() => handleCopy(value)}
              />
            )}
          </span>
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
      text: 'Service Requested',
      dataField: 'title',
      formatter: (value) => (
        <div className="flex capitalize font-medium min-w-12 justify-start">
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
              <FaEye />
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
          <h2 className="md:text-3xl text-xl font-medium text-slate-800">
            Applications for registrations
          </h2>
          {/* <Button onClick={toggleModal} size={BTN_SIZES['sm']}>
            Add Application
          </Button> */}
        </div>

        {/* Modal */}
        <Modal
          title={`User Documents`}
          className={'md:max-w-[850px] '}
          isOpen={modal}
          onClose={() => {
            if (editModalData) {
              setEditModalData(null);
            }
            toggleModal();
          }}
        >
          {editModalData ? (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 items-center border p-2 shadow-sm">
                <span className="text-xl font-medium">Photo</span>
                <Image
                  src={editModalData.photo}
                  width={250}
                  height={250}
                  className="max-w-[250px]"
                  alt="photo"
                />
                <Button
                  onClick={() => handleDownload(editModalData.photo, 'photo')}
                >
                  Download
                </Button>
              </div>
              <div className="flex flex-col gap-2 items-center border p-2 shadow-sm">
                <span className="text-xl font-medium">Aadhaar Card</span>
                <Image
                  src={editModalData.aadhaarCard}
                  width={250}
                  height={250}
                  className="max-w-[250px]"
                  alt="aadhaarCard"
                />
                <Button
                  onClick={() =>
                    handleDownload(editModalData.aadhaarCard, 'aadhaarCard')
                  }
                >
                  Download
                </Button>
              </div>
              <div className="flex flex-col gap-2 items-center border p-2 shadow-sm">
                <span className="text-xl font-medium">Pan Card</span>
                <Image
                  src={editModalData.panCard}
                  width={250}
                  height={250}
                  className="max-w-[250px]"
                  alt="panCard"
                />
                <Button
                  onClick={() =>
                    handleDownload(editModalData.panCard, 'panCard')
                  }
                >
                  Download
                </Button>
              </div>
              <div className="flex flex-col gap-2 items-center border p-2 shadow-sm">
                <span className="text-xl font-medium">Gst Certificate</span>
                <Image
                  src={editModalData.gstCertificate}
                  width={250}
                  height={250}
                  className="max-w-[250px]"
                  alt="gstCertificate"
                />
                <Button
                  onClick={() =>
                    handleDownload(
                      editModalData.gstCertificate,
                      'gstCertificate',
                    )
                  }
                >
                  Download
                </Button>
              </div>
            </div>
          ) : null}
        </Modal>

        {data && data.length < 1 ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <span className="text-lg font-medium">No applications yet!</span>
          </div>
        ) : (
          <div>
            <ReactTable
              columns={columns}
              data={Array.isArray(data) ? data : []}
              id="insuranceTable"
            />
            <div className="flex justify-end items-center my-4 pb-36 gap-3">
              <Pagination
                currentPage={pagination?.currentPage}
                setCurrentPage={setIsPage}
                totalPages={pagination?.totalPages ?? 5}
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
