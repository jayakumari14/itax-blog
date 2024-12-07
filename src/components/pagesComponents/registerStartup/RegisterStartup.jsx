'use client';

import { useCallback, useEffect, useState } from 'react';
import { TopNavigation } from './TopNavigation';
import { REGISTER_STARTUP_CATEGORIES } from './staticData';
import Image from 'next/image';
import Link from 'next/link';
import userAxios from '@/lib/userAxios';
import { toast } from 'react-toastify';
import Loader from '@/components/partials/loading/Loader';

export default function RegisterStartup({ params }) {
  const [isLoading, setIsLoading] = useState(false);
  const [startupData, setStartupData] = useState([]);

  const getStartupData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get('/Startup/getAll');
      // CHECK: all startups are showing without authentication,
      console.log(data)
      if (
        status === 200 &&
        data &&
        data.AllStartup &&
        data.AllStartup.length > 0
      ) {
        setStartupData(data.AllStartup);
      }
    } catch (error) {
      toast.error('Error getting services data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filteredData = startupData.filter((item) => {
    return item.categories === params.category;
  });

  useEffect(() => {
    if (!startupData || startupData.length === 0) {
      getStartupData();
    }
  }, [startupData, getStartupData]);

  return (
    <div className="mt-2 mb-24">
      <TopNavigation selectedCategory={params.category} />
      {isLoading ? (
        <div className="flex min-h-[50vh] justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="bg-white p-4">
          <h2 className="text-xl mb-7 text-center">
            {REGISTER_STARTUP_CATEGORIES[params.category]}
          </h2>
          <div className="grid grid-cols-1 md:max-w-[1380px] md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mx-auto">
            {filteredData.map((item) => {
              return (
                <div
                  className="w-72 h-64 pt-10 pl-10 pr-10 pb-4 flex flex-col shadow-[0_3px_8px_rgb(0,85,212,0.3)] overflow-hidden rounded-[10px]"
                  key={item.title}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-12 h-12 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-1">
                    <Link
                      href={`/register-startup/${params.category}/${item.id}`}
                      className="block cursor-pointer text-center text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 hover:text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
