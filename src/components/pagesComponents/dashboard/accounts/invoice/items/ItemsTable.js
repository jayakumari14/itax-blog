'use client';

import React, { useTransition } from 'react';
import { formatDate } from '@/utils/utilityFunctions';
import Link from 'next/link';
import userAxios from '@/lib/userAxios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const itemData = {
  itemsData_title: [
    {
      title: 'item name',
    },
    {
      title: 'id',
    },
    {
      title: 'unit',
    },
    {
      title: 'price',
    },
    {
      title: 'opening stock',
    },
    {
      title: 'closing stock',
    },
    {
      title: 'purchase price',
    },
    {
      title: 'gst',
    },
    {
      title: 'tax exempted',
    },
    {
      title: 'description',
    },
    {
      title: 'hsn code',
    },
    {
      title: 'category id',
    },
    {
      title: 'supplier id',
    },
    {
      title: 'user id',
    },
    {
      title: 'created at',
    },
  ],
};

const ItemsTable = ({ itemsData }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async (id) => {
    try {
      const response = await userAxios.delete('/invoice/items/' + id);
      if (response.data.success) {
        toast.success(`Item Deleted : ${response.data.item?.itemName}`);
      }

      startTransition(() => {
        // Refresh the current route and fetch new data
        // from the server without losing
        // client-side browser or React state.
        router.refresh();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
      <thead className=" sticky -top-0 shadow-md text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
        <tr className="border-b-2 dark:border-neutral-900">
          {itemData.itemsData_title.map((item, index) => (
            <th
              className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap"
              key={index}
            >
              {item.title}
            </th>
          ))}
          <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">
            action
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {itemsData?.items.length != 0 &&
          itemsData?.items.map((item, i) => (
            <tr key={i} className="border-b">
              <td className="px-6 py-4 font-semibol">{item.itemName}</td>
              <td className="px-6 py-4">{item.id || 'N/A'}</td>
              <td className="px-6 py-4 capitalize">{item.unit || 'N/A'}</td>
              <td className="px-6 py-4">₹{item.price || 'N/A'}</td>
              <td className="px-6 py-4">{item.openingStock || 'N/A'}</td>
              <td className="px-6 py-4">{item.closingStock || 'N/A'}</td>
              <td className="px-6 py-4">₹{item.purchasePrice || 'N/A'}</td>
              <td className="px-6 py-4">{item.gst || 'N/A'}</td>
              <td className="px-6 py-4">
                {item.taxExempted === true ? 'Yes' : 'No'}
              </td>
              <td className="px-6 py-4">{item.description || 'N/A'}</td>
              <td className="px-6 py-4">{item.hsnCode || 'N/A'}</td>
              <td className="px-6 py-4">{item.categoryId || 'N/A'}</td>
              <td className="px-6 py-4">{item.supplierId || 'N/A'}</td>
              <td className="px-6 py-4">{item.userId || 'N/A'}</td>
              <td className="px-6 py-4">
                {formatDate(item.createdAt, 'DD, MMM YYYY') || 'N/A'}
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center items-center gap-2">
                  <Link
                    href={`/dashboard/accounts/invoice/items/update-item/${item.id}`}
                    className="cursor-pointer p-2 rounded-md bg-primary text-white active:scale-95 hover:opacity-70"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="cursor-pointer p-2 rounded-md bg-red-500 text-white active:scale-95 hover:opacity-70"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
