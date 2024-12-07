'use client';

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import userAxios from '@/lib/userAxios';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import gstStateCodes from '@/utils/gstStateCodes';
import ItemsInputContainer from './ItemsInputContainer';
import { createInvSchema } from './invFormSchema';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import regex from '@/utils/regex';
import TaxTable from './ItemTaxTable/TaxTable';
import { TAX_TYPES_BY_STATES, UT_STATE_CODES } from './staticData';
import moment from 'moment';
// import { Input_GSTIN } from '@/components/formComponents/Inputs';

export const formClassNames = {
  label: 'block  mb-1 text-sm font-medium text-gray-950/90 dark:text-white',
  input:
    'bg-neutral-50 border border-neutral-300 text-neutral-900 disabled:cursor-not-allowed text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  button:
    'w-full text-center mt-4 focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 ',
  gridUL: 'grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4',
  formSectionTitle:
    'text-lg mt-4 font-semibold text-gray-600 dark:text-gray-300',
};

const _defaultValues = {
  credit: '',
  gstNumber: '',
  partyId: '',
  invoiceNumber: '',
  type: '',
  stateOfSupply: '',
  cgst: '0',
  sgst: '0',
  igst: '0',
  utgst: '0',
  invoiceDate: '',
  dueDate: '',
  isInventory: '',
  totalAmount: '',
  totalGst: '',
  modeOfPayment: 'Select mode',
  status: '',
  details: '',
  extraDetails: '',
  invoiceItems: [],
};

export default function CreateInvoice({
  currentInvoice,
  businessProfile,
  onClose = () => null,
  refresh,
}) {
  const defaultValues = {
    ..._defaultValues,
    invoiceNumber: 'INV-' + new Date().getTime(),
  };
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(createInvSchema),
    defaultValues,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [newItems, setNewItems] = useState([]);
  const [taxType, setTaxType] = useState(''); // intra/inter/ut state
  const isInventory = watch('isInventory');
  const [partiesData, setPartiesData] = useState([]);
  const [itemsData, setItemsData] = useState([]);

  // invoice submit handler
  const onSubmit = async (formData) => {
    try {
      setIsLoading(true);
      const data = {
        invoiceNumber: formData.invoiceNumber,
        gstNumber: formData.gstNumber,
        type: formData.type,
        partyId: formData.partyId,
        totalAmount: parseInt(formData.totalAmount),
        totalGst: parseInt(formData.totalGst),
        stateOfSupply: formData.stateOfSupply,
        dueDate: new Date(formData.dueDate),
        invoiceDate: new Date(formData.invoiceDate),
        isInventory: formData.isInventory === 'true',
        cgst: parseInt(formData.cgst),
        sgst: parseInt(formData.sgst),
        igst: parseInt(formData.igst),
        utgst: parseInt(formData.utgst),
        details: formData.details,
        extraDetails: formData.extraDetails,
        invoiceItems:
          newItems &&
          newItems.map((newItemObj) => {
            return {
              itemId: newItemObj.item.id,
              quantity: newItemObj.quantity,
              discount: newItemObj.discount,
              taxPercent: newItemObj.taxPercent,
            };
          }),
        modeOfPayment:
          formData.modeOfPayment === 'Select mode'
            ? 'credit'
            : formData.modeOfPayment,
        credit: formData.credit,
        status: formData.status,
      };
      let resp;
      if (!currentInvoice) {
        resp = await userAxios.post('/invoice/invoices', data);
      } else {
        resp = await userAxios.put(
          `/invoice/invoices/${currentInvoice.id}`,
          data,
        );
      }
      if (resp.status === 201) {
        await refresh();
        onClose();
        toast.success('New invoice created ✅');
      }
      if (resp.status === 200) {
        await refresh();
        onClose();
        toast.success('Invoice updated ✅');
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const getParties = async () => {
    try {
      setIsLoading(true);
      const pariesResponse = await userAxios.get('/invoice/parties');
      setPartiesData(pariesResponse.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getItems = async () => {
    try {
      const itemsResponse = await userAxios.get('/invoice/items');
      setItemsData(itemsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getTax = (taxName, rate) => {
  //   // intra = cgst/sgst, inter = igst, ut = utgst
  //   // tax state is a map of rate with amount. i.e 1: 1000, 1.5: 2000

  //   const allowedTaxes = {
  //     [TAX_TYPES_BY_STATES.intra]: ['cgst', 'sgst'],
  //     [TAX_TYPES_BY_STATES.inter]: ['igst'],
  //     [TAX_TYPES_BY_STATES.ut]: ['cgst', 'utgst'],
  //   };

  //   // If no rate is specified, it sends the total gst tax,
  //   if (taxType && allowedTaxes[taxType].includes(taxName) && !rate) {
  //     let totalTax = 0;
  //     Object.entries(tax).forEach(([key, value]) => {
  //       if (key && value) {
  //         const parsedKey = parseFloat(key); // gst tax rate;
  //         const parseVal = parseInt(value, 10); // gst value;
  //         totalTax += (parseVal * parsedKey) / 100;
  //       }
  //     });
  //     return totalTax;
  //   }

  //   if (taxType && tax[rate] && allowedTaxes[taxType].includes(taxName)) {
  //     return (parseInt(tax[rate], 10) * parseFloat(rate, 10)) / 100;
  //   }

  //   return 0;
  // };

  useEffect(() => {
    if (Array.isArray(newItems) && newItems.length > 0 && taxType) {
      const getAllowedTaxes = {
        [TAX_TYPES_BY_STATES.intra]: ['igst'],
        [TAX_TYPES_BY_STATES.inter]: ['cgst', 'sgst'],
        [TAX_TYPES_BY_STATES.ut]: ['cgst', 'utgst'],
      };

      const allowedTaxes = getAllowedTaxes[taxType];

      // taxamount and discountedprice
      const newAmounts = newItems.map((itemObj) => {
        const { quantity, discount, taxPercent, item } = itemObj;
        const { price } = item;

        const grossPrice = price * quantity;
        const discountedPrice = grossPrice - (grossPrice * discount) / 100;
        const taxAmount = (discountedPrice * taxPercent) / 100;
        return { taxAmount, discountedPrice };
      });

      // total invoice value
      const invoiceVal = newAmounts.reduce(
        (acc, { taxAmount, discountedPrice }) => {
          return acc + taxAmount + discountedPrice;
        },
        0,
      );

      const totalGst = newAmounts.reduce((acc, { taxAmount }) => {
        return acc + taxAmount;
      }, 0);

      const numberOfTaxes = allowedTaxes?.length;
      const singleTaxValue = totalGst / numberOfTaxes;

      allowedTaxes.map((key) => {
        setValue(key, singleTaxValue.toString());
      });

      setValue('totalGst', totalGst.toString());
      setValue('totalAmount', invoiceVal.toString());
    }
  }, [newItems, taxType, setValue]);

  useEffect(() => {
    getParties();
    getItems();
  }, []);

  const gstin = watch('gstNumber');
  const modeOfPayment = watch('modeOfPayment');
  const isCredit = watch('credit');

  // setting state of supply
  useEffect(() => {
    if (regex.GSTIN.test(gstin)) {
      const code = gstin.slice(0, 2);
      setValue('stateOfSupply', code);

      if (UT_STATE_CODES.includes(code)) {
        return setTaxType(TAX_TYPES_BY_STATES.ut);
      }
      // if (gstin === businessProfile?.gstin) {
      //   return setTaxType(TAX_TYPES_BY_STATES.intra);
      // }

      const enteredcode = gstin.slice(0, 2);
      const businessgstcode = businessProfile.gstin.slice(0, 2);

      if (enteredcode === businessgstcode) {
        return setTaxType(TAX_TYPES_BY_STATES.intra);
      }

      if (gstin !== businessProfile?.gstin) {
        return setTaxType(TAX_TYPES_BY_STATES.inter);
      }
    }
  }, [gstin, setValue, businessProfile]);
  useEffect(() => {
    if (isCredit === true) {
      setValue('status', 'unpaid');
      setValue('modeOfPayment', 'Select mode');
    } else {
      setValue('status', 'paid');
    }
  }, [isCredit, modeOfPayment, setValue]);

  useEffect(() => {
    if (currentInvoice) {
      reset({
        credit: currentInvoice.credit,
        gstNumber: currentInvoice.gstNumber,
        partyId: currentInvoice.partyId,
        invoiceNumber: currentInvoice.invoiceNumber,
        type: currentInvoice.type,
        stateOfSupply: currentInvoice.stateOfSupply,
        cgst: currentInvoice?.cgst?.toString() || '0',
        sgst: currentInvoice?.sgst?.toString() || '0',
        igst: currentInvoice?.igst?.toString() || '0',
        utgst: currentInvoice?.utgst?.toString() || '0',
        invoiceDate: currentInvoice.invoiceDate
          ? moment(currentInvoice.invoiceDate).format('YYYY-MM-DD')
          : moment().format('YYYY-MM-DD'),

        dueDate: currentInvoice.dueDate
          ? moment(currentInvoice.dueDate).format('YYYY-MM-DD')
          : '',
        isInventory: currentInvoice.isInventory
          ? currentInvoice.isInventory.toString()
          : 'true',
        totalAmount: currentInvoice.totalAmount
          ? currentInvoice.totalAmount.toString()
          : '0',
        totalGst: currentInvoice.totalGst
          ? currentInvoice.totalGst.toString()
          : '0',
        modeOfPayment:
          currentInvoice.modeOfPayment === 'credit'
            ? 'Select mode'
            : currentInvoice.modeOfPayment,
        status: currentInvoice.status,
        details: currentInvoice.details,
        extraDetails: currentInvoice.extraDetails,
        invoiceItems:
          currentInvoice.invoiceItems &&
          currentInvoice.invoiceItems.map((itemsData) => ({
            ...itemsData,
            itemName: itemsData.item.itemName,
            quantity: itemsData.quantity ? itemsData.quantity.toString() : '0',
          })),
      });
      setNewItems(currentInvoice.invoiceItems);
    } else {
      reset(defaultValues);
    }
  }, [currentInvoice, reset]);

  return (
    <>
      <section className="p-2 rounded-md px-3 max-w-6xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul className="mt-6 grid gap-4 md:grid-cols-4">
            <li>
              <label htmlFor="gstNumber">Gstin</label>
              <input
                type="text"
                id="gstNumber"
                placeholder="Enter GSTIN"
                className={formClassNames.input}
                {...register('gstNumber')}
              />
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.gstNumber && errors.gstNumber.message}
              </p>
            </li>
            <li>
              <label htmlFor="partyId" className={formClassNames.label}>
                Party
              </label>
              <div className="relative">
                <select
                  name="partyId"
                  id="partyId"
                  className={`${formClassNames.input} py-[10px]`}
                  {...register('partyId')}
                >
                  <option value="">Select party</option>
                  {partiesData?.parties?.map((party, index) => (
                    <option key={index} value={party.id}>
                      {party.partyName}
                    </option>
                  ))}
                </select>
              </div>
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.partyId && errors.partyId.message}
              </p>
            </li>
            <li>
              <label htmlFor="invoiceNumber" className={formClassNames.label}>
                Invoice Number
              </label>
              <input
                type="text"
                id="invoiceNumber"
                className={formClassNames.input}
                placeholder="INV123"
                {...register('invoiceNumber')}
              />
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.invoiceNumber && errors.invoiceNumber.message}
              </p>
            </li>
            <li>
              <label htmlFor="type" className={formClassNames.label}>
                Type
              </label>
              <select
                name="type"
                id="type"
                {...register('type')}
                className={`${formClassNames.input} py-[10px]`}
                defaultValue={'sales'}
              >
                <option value="">Select type</option>
                <option value="sales">Sales</option>
                <option value="purchase">Purchase</option>
              </select>
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.type && errors.type.message}
              </p>
            </li>
            <li>
              <label htmlFor="stateOfSupply" className={formClassNames.label}>
                State Of supply
              </label>
              <select
                name="stateOfSupply"
                id="stateOfSupply"
                disabled
                className={`${formClassNames.input} py-[10px]`}
                {...register('stateOfSupply')}
              >
                <option value={''}>Select state</option>
                {gstStateCodes.map((state, index) => (
                  <option key={index} value={`${state.code}`}>
                    {state.code} - {state.state}
                  </option>
                ))}
              </select>
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.stateOfSupply && errors.stateOfSupply.message}
              </p>
            </li>

            <div className="flex flex-col">
              <label htmlFor="credit">Select credit</label>
              <li className="flex p-2 justify-between items-center space-x-3 border border-gray-300 rounded-md ">
                <label htmlFor="credit">Credit</label>
                <label
                  htmlFor="credit"
                  className=" relative inline-flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    id="credit"
                    className="peer sr-only"
                    {...register('credit')}
                  />
                  <div
                    className={` ${
                      watch('credit') ? 'bg-blue-400' : 'bg-gray-400'
                    } h-6 w-11 rounded-full after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-primary-200 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50`}
                  ></div>
                </label>
              </li>
            </div>
            {!isCredit && (
              <li>
                <div>
                  <label
                    htmlFor="modeOfPayment"
                    className={formClassNames.label}
                  >
                    Mode of payment
                  </label>
                  <select
                    name="modeOfPayment"
                    disabled={isCredit}
                    id="modeOfPayment"
                    className={`${formClassNames.input} py-[10px]`}
                    {...register('modeOfPayment')}
                  >
                    <option value="Select mode">Select mode</option>
                    <option value="cash">Cash</option>
                    <option value="bank">Bank</option>
                  </select>
                  <p className=" text-xs text-red-500 h-4 px-2">
                    {errors.modeOfPayment && errors.modeOfPayment.message}
                  </p>
                </div>
              </li>
            )}
            {/* <li>
              <div>
                <label htmlFor="status" className={formClassNames.label}>
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  className={`${formClassNames.input} py-[10px]`}
                  {...register('status')}
                >
                  <option value="">Select status</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                </select>
                <p className=" text-xs text-red-500 h-4 px-2">
                  {errors.status && errors.status.message}
                </p>
              </div>
            </li> */}

            <li>
              <label htmlFor="invoiceDate">Invoice Date</label>
              <input
                type="date"
                id="invoiceDate"
                className={formClassNames.input}
                {...register('invoiceDate')}
              />
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.invoiceDate && errors.invoiceDate.message}
              </p>
            </li>

            <li>
              <label htmlFor="dueDate">Invoice Due Date</label>
              <input
                type="date"
                id="dueDate"
                className={formClassNames.input}
                {...register('dueDate')}
              />
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.dueDate && errors.dueDate.message}
              </p>
            </li>

            <li>
              <div>
                <label htmlFor="isInventory" className={formClassNames.label}>
                  Inventory Type
                </label>
                <select
                  name="isInventory"
                  id="isInventory"
                  className={`${formClassNames.input} py-[10px]`}
                  {...register('isInventory')}
                >
                  <option value="">Select Inventory Type</option>
                  <option value={'true'}>Inventory</option>
                  <option value={'false'}>Non inventory</option>
                </select>
                <p className=" text-xs text-red-500 h-4 px-2">
                  {errors.isInventory && errors.isInventory.message}
                </p>
              </div>
            </li>
            <li>
              <label htmlFor="supplyType" className={formClassNames.label}>
                Supply Type
              </label>
              <input
                type="text"
                id="supplyType"
                value={taxType}
                placeholder="Suppy type"
                className={formClassNames.input}
                disabled
              />
            </li>

            {isInventory === 'false' && taxType && (
              <div className="w-full md:col-span-4">
                <TaxTable taxType={taxType} />
              </div>
            )}

            {isInventory === 'true' && (
              <ItemsInputContainer
                register={register}
                itemsData={itemsData}
                newItems={newItems}
                setNewItems={setNewItems}
              />
            )}

            {taxType === TAX_TYPES_BY_STATES.inter && (
              <>
                <li>
                  <label htmlFor="cgst" className={formClassNames.label}>
                    CGST
                  </label>
                  <input
                    type="text"
                    id="cgst"
                    className={formClassNames.input}
                    placeholder="CGST Amount"
                    {...register('cgst')}
                    disabled
                  />
                  <p className=" text-xs text-red-500 h-4 px-2">
                    {errors.cgst && errors.cgst.message}
                  </p>
                </li>

                <li>
                  <label htmlFor="sgst" className={formClassNames.label}>
                    SGST
                  </label>
                  <input
                    type="text"
                    id="sgst"
                    className={formClassNames.input}
                    placeholder="SGST Amount"
                    {...register('sgst')}
                    disabled
                  />
                  <p className=" text-xs text-red-500 h-4 px-2">
                    {errors.sgst && errors.sgst.message}
                  </p>
                </li>
              </>
            )}

            {taxType === TAX_TYPES_BY_STATES.intra && (
              <li>
                <label htmlFor="igst" className={formClassNames.label}>
                  IGST
                </label>
                <input
                  type="text"
                  id="igst"
                  className={formClassNames.input}
                  placeholder="IGST Amount"
                  {...register('igst')}
                  disabled
                />
                <p className=" text-xs text-red-500 h-4 px-2">
                  {errors.igst && errors.igst.message}
                </p>
              </li>
            )}

            {taxType === TAX_TYPES_BY_STATES.ut && (
              <li>
                <label htmlFor="utgst" className={formClassNames.label}>
                  UTGST
                </label>
                <input
                  type="text"
                  id="utgst"
                  className={formClassNames.input}
                  placeholder="UGST Amount"
                  {...register('utgst')}
                  disabled
                />
                <p className=" text-xs text-red-500 h-4 px-2">
                  {errors.utgst && errors.utgst.message}
                </p>
              </li>
            )}

            <li>
              <label htmlFor="totalGst" className={formClassNames.label}>
                Total GST
              </label>
              <input
                type="text"
                id="totalGst"
                className={formClassNames.input}
                placeholder="Total GST Amount"
                {...register('totalGst')}
                disabled
              />
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.totalGst && errors.totalGst.message}
              </p>
            </li>

            <li>
              <label htmlFor="totalAmount" className={formClassNames.label}>
                Total Invoice Value
              </label>
              <input
                type="text"
                id="totalAmount"
                className={formClassNames.input}
                placeholder="0.00"
                {...register('totalAmount')}
                disabled
              />
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.totalAmount && errors.totalAmount.message}
              </p>
            </li>

            <li>
              <label htmlFor="details" className={formClassNames.label}>
                Details
              </label>
              <textarea
                id="details"
                className={`${formClassNames.input}`}
                rows="1"
                placeholder="Enter Additional Details"
                {...register('details')}
              ></textarea>
              <p className=" text-xs text-red-500 h-4 px-2">
                {errors.details && errors.details.message}
              </p>
            </li>
          </ul>

          <div className="flex md:justify-center items-center mt-8">
            <Button size={'sm'} disabled={isLoading} type="submit">
              {isLoading ? (
                <div className="flex gap-1 items-center">
                  <Image
                    src={'/whiteLoader.svg'}
                    width={30}
                    height={25}
                    alt="Loading.."
                  />
                  <p>Creating..</p>
                </div>
              ) : currentInvoice ? (
                'Update Invoice'
              ) : (
                'Create Invoice'
              )}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
