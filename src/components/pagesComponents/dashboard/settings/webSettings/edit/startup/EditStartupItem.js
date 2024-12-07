import userAxios from '@/lib/userAxios';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import { startupCategoryOptions } from './staticData';
import Image from 'next/image';

export default function Item_edit({
  startupData,
  refresh,
  setLoading,
  onEdit,
}) {
  const deleteStartups = async (id) => {
    try {
      if (window.confirm('Are you sure you want to delete?')) {
        setLoading(true);
        const { status } = await userAxios.delete(`/startup/delete/${id}`);
        if (status === 200) {
          toast.success('Item deleted');
          refresh();
        }
      }
    } catch (error) {
      toast.error('Error deleting item');
    } finally {
      setLoading(false);
    }
  };

  const getFormattedCategories = (category) => {
    return startupCategoryOptions.find((c) => c.value === category).label;
  };

  return (
    <li className="border shadow-md rounded-md p-4">
      <div className="flex flex-col gap-3 p-2">
        <div className="flex h-[200px] justify-center">
          <Image
            src={startupData.image}
            className="object-cover max-h-full rounded-sm"
            width={250}
            height={250}
            alt={'Startup Image'}
          />
        </div>
        <div className="flex justify-center flex-col">
          <div className="text-2xl mb-2 font-semibold self-center">
            {startupData.title}
          </div>
          <p className="text-center">
            {getFormattedCategories(startupData.categories)}
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <div
            className="border cursor-pointer border-blue-600 rounded-md p-1 text-xl hover:text-blue-500"
            title="edit"
            onClick={() => onEdit()}
          >
            <Icon icon="material-symbols:edit-outline" />
          </div>
          <div
            className="border border-red-600 rounded-md p-1 text-xl hover:text-red-600"
            title="delete"
          >
            <Icon
              className="cursor-pointer"
              icon="material-symbols:delete-outline"
              onClick={() => deleteStartups(startupData.id)}
            />
          </div>
        </div>
      </div>
    </li>
  );
}
