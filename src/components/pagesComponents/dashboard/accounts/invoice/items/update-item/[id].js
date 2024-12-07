'use client';

import { useEffect, useState } from 'react';
import userAxios from '@/lib/userAxios';
import CreateItem from '@/components/CreateItem'; // Adjust the import path as needed
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const UpdateItemPage = ({ params }) => {
  const { id } = params;
  const [itemData, setItemData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await userAxios.get(`/invoice/items/${id}`);
        console.log('Fetched Item Data:', response.data.item); // Check data structure
        setItemData(response.data.item);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching item:', error);
        toast.error('Failed to fetch item data');
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);
  return (
    <div>
      <CreateItem data={{ item: itemData }} id={id} />
    </div>
  );
};

export default UpdateItemPage;
