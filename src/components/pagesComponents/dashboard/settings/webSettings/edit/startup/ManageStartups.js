'use client';

// import Pagination from '@/components/navigation/Pagination';
// import ReactSelect from 'react-select';
import { useCallback, useEffect, useState } from 'react';
import userAxios from '@/lib/userAxios';
import StartupForm from './StartupForm';
import EditStartupItem from './EditStartupItem';
import Modal from '@/components/ui/Modal';
import { toast } from 'react-toastify';
import Loader from '@/components/partials/loading/Loader';
import Button from '@/components/ui/Button';
import userAxiosNext from '@/lib/userNextAxios';
import ReactSelect from 'react-select';
import { startupCategoryOptions } from './staticData';

export default function ManageStartups() {
  const [activeCat, setActiveCat] = useState(startupCategoryOptions.at(0));
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editFormData, setEditFormData] = useState(null);
  const [startupsList, setStartupsList] = useState([]);

  // Pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const [limit, setLimit] = useState({ label: 5, vlaue: 5 });

  const getFilteredList = () => {
    const data = startupsList.filter(
      (item) => item.categories === activeCat.value,
    );
    return data;
  };

  const getAllStartups = useCallback(async () => {
    try {
      setIsLoading(true);
      const { status, data } = await userAxios.get(`/startup/getAll`);
      if (status === 200) {
        setStartupsList(data.AllStartup);
      }
    } catch (error) {
      toast.error('Error getting startups');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllStartups();
  }, [getAllStartups]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[75vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-2">
      <div className="flex justify-between px-3 gap-2 items-center">
        <div>
          <label className="text-sm font-medium">Category:</label>
          <ReactSelect
            options={startupCategoryOptions}
            onChange={setActiveCat}
            value={activeCat}
          />
        </div>
        <Button onClick={() => setModal(true)}>Add Startup</Button>
      </div>
      <Modal
        title={editFormData ? 'Update Startup' : 'Create Startup'}
        onClose={() => {
          if (editFormData) {
            setEditFormData(null);
          }
          setModal(false);
        }}
        className={'md:w-[900px]'}
        isOpen={modal}
      >
        <div className="p-4 min-h-[450px] bg-white border-gray-200  shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <StartupForm
            refresh={getAllStartups}
            data={editFormData}
            onClose={() => setModal(false)}
          />
        </div>
      </Modal>

      <ul className="px-2 py-4 grid md:grid-cols-4 gap-4">
        {Array.isArray(getFilteredList()) && getFilteredList().length > 0 ? (
          getFilteredList().map((startupData) => (
            <EditStartupItem
              key={startupData.id}
              onEdit={() => {
                setEditFormData(startupData);
                setModal(true);
              }}
              startupData={startupData}
              setLoading={setIsLoading}
              refresh={getAllStartups}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-[50vh] md:col-span-4">
            <p className="text-2xl font-medium">No startup data created yet!</p>
          </div>
        )}
      </ul>

      {/* Pagination code incase required */}

      {/* <div className="flex items-center justify-end p-2">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={(startupsList && startupsList?.pages) || 10}
        />
        <ReactSelect
          placeholder="Rows"
          value={limit}
          onChange={(option) => setLimit(option)}
          options={Array.from({ length: 4 }).map((n, i) => {
            return { value: (i + 1) * 5, label: (i + 1) * 5 };
          })}
        />
      </div> */}
    </div>
  );
}
