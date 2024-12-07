import React from 'react';
import ReactTable from '@/components/ui/ReactTable';
import { careerTableHeaders } from './staticData';
import { nodeAxios } from '@/lib/axios';

export const AllCareers = async () => {
  try {
    const response = await nodeAxios.get('/career/findAll');
    return (
      <div className="p-4">
        <div className="overflow-auto">
          <ReactTable
            columns={careerTableHeaders}
            data={response.data.allCareer || []}
          />
        </div>
      </div>
    );
  } catch (error) {
    //console.log(error);
    return (
      <div className="h-34 grid place-content-center">
        <p>Something went wrong</p>
      </div>
    );
  }
};
