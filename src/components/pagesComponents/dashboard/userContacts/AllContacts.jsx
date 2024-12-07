import React from 'react';
import ReactTable from '@/components/ui/ReactTable';
import { contactsTableHeaders } from './staticData';
import { nodeAxios } from '@/lib/axios';

export const AllContacts = async () => {
  try {
    const response = await nodeAxios.get('/contactUs/getAll');
    //console.log(response);
    return (
      <div className="p-4">
        <ReactTable
          columns={contactsTableHeaders}
          data={response.data.allContactUs || []}
        />
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
