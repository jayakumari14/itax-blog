'use client';
import Image from 'next/image';
import { useState } from 'react';
function ViewResumeModal({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  if (!data.includes('https://')) {
    return (
      <>
        <p>No data</p>
      </>
    );
  }

  return (
    <>
      <button
        className="block text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        See Resume
      </button>
      <div
        id="resume-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={
          isOpen
            ? 'overflow-y-auto backdrop-blur-sm bg-black/30 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
            : 'hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
        }
      >
        <div className="relative p-4 w-full max-w-4xl mx-auto max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Resume
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <Image src={data} width={800} height={500} alt="resume" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewResumeModal;
