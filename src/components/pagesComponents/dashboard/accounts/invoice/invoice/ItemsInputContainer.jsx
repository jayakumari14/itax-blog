'use client';

import { useState, useEffect } from 'react';
import { formClassNames } from './CreateInvoice';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import { toast } from 'react-toastify';
import { GrClose } from 'react-icons/gr';
import Select from 'react-select'; // Import react-select for searchable dropdown

// const gstRates = [
//   { value: 0, label: '0%' },
//   { value: 5, label: '5%' },
//   { value: 12, label: '12%' },
//   { value: 18, label: '18%' },
//   { value: 28, label: '28%' },
// ];

export default function ItemsInputContainer({
  itemsData,
  newItems,
  setNewItems,
}) {
  const initState = {
    item: '',
    price: '',
    quantity: '',
    discount: 0, // Default discount to 0
    taxPercent: null,
  };
  const [formData, setFormData] = useState(initState);

  useEffect(() => {
    if (formData.item) {
      const selectedItem = itemsData.items.find(
        (item) => item.id === formData.item.id,
      );
      if (selectedItem) {
        setFormData((prev) => ({
          ...prev,
          price: selectedItem.price,
        }));
      }
    }
  }, [formData.item, itemsData.items]);

  const handleForm = (name, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleAddItems = () => {
    let isDataCorrect = true;
    let message = '';
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'discount' && !value) {
        isDataCorrect = false;
        message = 'All fields except discount are required';
      }
      if (
        key !== 'item' &&
        key !== 'discount' &&
        key !== 'price' &&
        isNaN(value)
      ) {
        isDataCorrect = false;
        message = 'Entered values must be numbers';
      }
      if (key === 'taxPercent' && value < 1) {
        isDataCorrect = false;
        message = 'Tax percent must be at least 1';
      }
    });

    if (!isDataCorrect) return toast.info(message);

    const foundItem = newItems.find((item) => item.id !== formData.item.id);
    const restItems = newItems.filter((item) => item.id === formData.item.id);

    if (foundItem) {
      setNewItems(() => [
        ...restItems,
        {
          item: formData.item,
          quantity: parseInt(formData.quantity) + foundItem.quantity,
          discount: parseInt(formData.discount) + foundItem.discount,
          taxPercent: parseInt(formData.taxPercent) + foundItem.taxPercent,
        },
      ]);
    } else {
      setNewItems((prev) => [
        ...prev,
        {
          item: formData.item,
          quantity: parseInt(formData.quantity),
          discount: parseInt(formData.discount),
          taxPercent: parseInt(formData.taxPercent),
        },
      ]);
    }

    setFormData(initState);
  };

  const getTaxableValue = () => {
    if (newItems && newItems.length > 0) {
      return newItems.reduce((prev, item) => {
        const subTotal = item.item.price * item.quantity;
        const discount = Math.round((subTotal * item.discount) / 100);
        return prev + (subTotal - discount);
      }, 0);
    }
    return 0;
  };

  const handleDeleteById = (id) => {
    setNewItems((prev) => {
      return prev.filter(({ item }) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="mt-5 md:col-span-4">
      <h2>Item Details</h2>
      <p className="text-xs text-red-500 h-4 px-2">
        {itemsData?.items?.length === 0 && 'No item found'}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-6 gap-2">
        <li className="col-span-1">
          <label htmlFor="itemName" className={formClassNames.label}>
            Item name
          </label>
          <Select
            name="itemName"
            id="itemName"
            value={
              formData.item
                ? { value: formData.item, label: formData.item.itemName }
                : null
            }
            options={itemsData?.items?.map((item) => ({
              value: item,
              label: item.itemName,
            }))}
            // className={formClassNames.input}
            onChange={(selectedOption) =>
              handleForm('item', selectedOption ? selectedOption.value : '')
            }
          />
        </li>
        <li>
          <label htmlFor="price" className={formClassNames.label}>
            Price (₹)
          </label>
          <input
            id="price"
            name="price"
            className={formClassNames.input}
            type="number"
            value={formData.price}
            readOnly
          />
        </li>
        <li>
          <label htmlFor="quantity" className={formClassNames.label}>
            Quantity*
          </label>
          <input
            id="quantity"
            name="quantity"
            className={formClassNames.input}
            type="number"
            value={formData.quantity}
            onChange={(e) => handleForm('quantity', e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="discount" className={formClassNames.label}>
            Discount (%)
          </label>
          <input
            id="discount"
            name="discount"
            type="number"
            className={formClassNames.input}
            onChange={(e) => handleForm('discount', e.target.value)}
            value={formData.discount}
          />
        </li>
        <li>
          <label htmlFor="taxPercent" className={formClassNames.label}>
            Tax (%)*
          </label>
          {/* <Select
            id="taxPercent"
            name="taxPercent"
            value={gstRates.find((rate) => rate.value === formData.taxPercent)}
            options={gstRates}
            // className={formClassNames.input}
            onChange={(selectedOption) =>
              handleForm(
                'taxPercent',
                selectedOption ? selectedOption.value : null,
              )
            }
          /> */}
          <input
            id="taxPercent"
            name="taxPercent"
            type="number"
            className={formClassNames.input}
            onChange={(e) => handleForm('taxPercent', e.target.value)}
            value={formData.taxPercent}
            min={0}
            max={100}
          />
        </li>
        <li className="flex items-end">
          <Button
            variant="ghost"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={handleAddItems}
            size={'sm'}
            type="button"
          >
            Add New Item
          </Button>
        </li>
      </ul>
      <div className="bg-neutral-50 border mt-6 border-neutral-300 text-neutral-900 text-sm rounded-lg p-2">
        <ol className="grid grid-cols-1 gap-2">
          <li className="border grid gap-2 bg-white shadow-lg rounded-lg p-2">
            <div>{newItems.length === 0 && 'No item added'}</div>
            {newItems?.map((item, index) => {
              const subTotal = item.item.price * item.quantity;
              const discount = Math.round((subTotal / 100) * item.discount);

              return (
                <div className="p-2 border-b" key={index}>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm p-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => handleDeleteById(item.item.id)}
                    >
                      <GrClose />
                    </button>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Name</span>{' '}
                      {item.item.itemName}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Price</span> ₹
                      {item.item.price}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Quantity</span>{' '}
                      {item.quantity}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Sub Total</span> ₹{subTotal}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Discount</span> ₹{discount} @
                      {item.discount}%
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Total</span> ₹{' '}
                      {subTotal - discount}
                    </div>
                  </div>
                  {index === newItems.length - 1 && (
                    <div className="flex justify-end mt-3 font-medium">
                      Taxable Value: ₹{getTaxableValue()}
                    </div>
                  )}
                </div>
              );
            })}
          </li>
        </ol>
      </div>
    </div>
  );
}
