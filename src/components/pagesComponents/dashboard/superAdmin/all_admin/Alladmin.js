'use client';

import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import ReactTable from '@/components/ui/ReactTable';
import userAxios from '@/lib/userAxios';
import { useCallback, useEffect, useState } from 'react';
import { getAdminTableHeaders } from './staticData';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import Pagination from '@/components/navigation/Pagination';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import CreateAdmin from './CreateAdmin';
import Modal from '@/components/ui/Modal';

const Alladmin = () => {
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
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get(
        `/user/get-all-admins?page=${currentPage}&order=desc`,
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

  // const handleDeleteUser = async (id) => {
  //   try {
  //     if (window.confirm('Are you sure you want to delete')) {
  //       setIsLoading(true);
  //       const { status } = await userAxios.delete(`/user/delete-user/${id}`);
  //       if (status === 200) {
  //         toast.success('User deleted successfully');
  //       }
  //     }
  //   } catch (error) {
  //     toast.error('Error deleting user');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const headers = [
    ...getAdminTableHeaders,
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
        title={'All Admin'}
        titleRight={
          <Button onClick={() => setModal(true)} className={BTN_SIZES['md-1']}>
            Create Admin
          </Button>
        }
      >
        <Modal
          className={'md:max-w-[950px]'}
          title={currentRow ? 'Update User' : 'Create User'}
          onClose={() => {
            if (currentRow) {
              setCurrentRow(null);
            }
            setModal(false);
          }}
          isOpen={modal}
        >
          <CreateAdmin
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

// function Pagination(prop) {
//   const { page, setPage, totalPages } = prop;
//   return (
//     <nav className="flex justify-center my-8">
//       <ul className="inline-flex -space-x-px text-base h-10">
//         <li>
//           <button
//             className=" cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//             disabled={+page === 0}
//             onClick={() => setPage((prev) => +prev - 1)}
//           >
//             Prev
//           </button>
//         </li>
//         <li>
//           <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//             {page}
//           </span>
//         </li>
//         <li>
//           <button
//             className=" cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//             onClick={() => setPage((prev) => +prev + 1)}
//             disabled={+totalPages === +page + 1}
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default Alladmin;
