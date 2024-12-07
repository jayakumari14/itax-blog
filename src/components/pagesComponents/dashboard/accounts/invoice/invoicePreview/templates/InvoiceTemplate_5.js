import { formatINRCurrency } from '@/utils/utilityFunctions';
import Image from 'next/image';
import useTaxType from './useTaxType';
import { getValue } from './templates.service';

function Invoice_Details(props) {
  const { watch } = props;
  return (
    <div>
      <div className="bg-red-400 text-neutral-50 py-2 flex justify-center items-end uppercase">
        <h1 className="text-3xl font-semibold">{watch('invoiceTitle')}</h1>
      </div>
      <div className="text-sm p-2 mt-2">
        <div className="text-sm  p-2 divide-y-2 mt-2">
          <div className="flex justify-between">
            <div>Invoice No.: </div>
            <span className="font-semibold uppercase">
              {watch('invoiceNumber')}
            </span>
          </div>
          <div className="flex justify-between">
            <div>Invoice Date: </div>
            <span className="font-semibold uppercase">
              {watch('invoiceDate')}
            </span>
          </div>
          <div className="flex justify-between">
            <div>Due Date: </div>
            <span className="font-semibold uppercase">{watch('dueDate')}</span>
          </div>
          <div className="flex justify-between">
            <div>Mode of Payment: </div>
            <span className="font-semibold uppercase">
              {watch('modeOfPayment')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
function DetailsFrom_Inputs(props) {
  const { watch } = props;
  return (
    <div className=" divide-y-2">
      <div className="flex justify-between flex-wrap bg-red-400 text-neutral-50 px-2">
        <div className="mt-2 text-xl font-semibold">From:</div>
        {/* <div>{watch("bName_DetailsFrom")}</div> */}
      </div>
      <div className="[&>div]:flex [&>div]:justify-between [&>div] p-2 text-sm divide-y-2">
        <div>
          Business Name:
          <div className="font-semibold uppercase">
            {watch('bName_DetailsFrom')}
          </div>
        </div>
        <div>
          GSTIN:
          <div className="font-semibold uppercase">
            {watch('GSTIN_DetailsFrom')}
          </div>
        </div>
        <div>
          Pan:
          <div className="font-semibold uppercase">
            {watch('pan_DetailsFrom')}
          </div>
        </div>
        <div>
          Address:
          <div className="font-semibold uppercase">
            {watch('Address_DetailsFrom')}
          </div>
        </div>
        <div>
          Phone:
          <div className="font-semibold uppercase">
            {watch('phone_DetailsFrom')}
          </div>
        </div>
        <div>
          Email:
          <div className="font-semibold uppercase">
            {watch('email_DetailsFrom')}
          </div>
        </div>
      </div>
    </div>
  );
}
function DetailsTo_Inputs(props) {
  const { watch } = props;
  // console.log(to)
  return (
    <div className=" divide-y-2">
      <div className="flex justify-between flex-wrap bg-red-400 text-neutral-50 px-2">
        <div className="mt-2 text-xl font-semibold">To:</div>
        {/* <div>{watch("businessName")}</div> */}
      </div>
      <div className="[&>div]:flex [&>div]:justify-between [&>div] p-2 text-sm divide-y-2">
        <div>
          Business Name:
          <div className="font-semibold uppercase">
            {watch('bName_DetailsTo')}
          </div>
        </div>
        <div>
          GSTIN:
          <div className="font-semibold uppercase">
            {watch('GSTIN_DetailsTo')}
          </div>
        </div>
        <div>
          Pan:
          <div className="font-semibold uppercase">
            {watch('pan_DetailsTo')}
          </div>
        </div>
        <div>
          Address:
          <div className="font-semibold uppercase">
            {watch('Address_DetailsTo')}
          </div>
        </div>
        <div>
          Phone:
          <div className="font-semibold uppercase">
            {watch('phone_DetailsTo')}
          </div>
        </div>
        <div>
          Email:
          <div className="font-semibold uppercase">
            {watch('email_DetailsTo')}
          </div>
        </div>
      </div>
    </div>
  );
}
function Items_Details(props) {
  const { invoice, taxType, invoiceItems } = props;
  return (
    <div className="p-2 min-h-60 overflow-x-scroll">
      <div className="mt-2 text-xl font-semibold">Items</div>
      <table>
        <thead>
          <tr className="[&>th]:border-x text-sm bg-red-400 text-neutral-50 p-8">
            <th>Item Name</th>
            <th>HSN Code</th>
            <th>Purchase Price</th>
            <th>Quantity</th>
            <th>GST (%)</th>
            <th>Discount (%)</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems?.map((item, index) => (
            <tr
              className="  border-y [&>td]:border-x [&>td]:px-2 text-xs"
              key={item.id}
            >
              <td>{item.item.itemName}</td>
              <td>{item.item.hsnCode}</td>
              <td>{item.item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.taxPercent}</td>
              <td>{item.discount}</td>
              <td>&#8377;{item.item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td
              className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900"
              colSpan={4}
            >
              Total Invoice
            </td>
            <td
              className="px-6 py-1 whitespace-nowrap text-sm text-gray-500 text-right"
              colSpan={3}
            >
              {formatINRCurrency(
                getValue('totalInvoiceValue', null, taxType, invoice) -
                  getValue('totalGst', null, taxType, invoice),
              )}
            </td>
          </tr>
          <tr>
            <td
              className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900"
              colSpan={4}
            >
              Total GST
            </td>
            <td
              className="px-6 py-1 whitespace-nowrap text-sm text-gray-500 text-right"
              colSpan={3}
            >
              {formatINRCurrency(getValue('totalGst', null, taxType, invoice))}
            </td>
          </tr>
          <tr>
            <td
              className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900"
              colSpan={4}
            >
              Total Amount Payable
            </td>
            <td
              className="px-6 py-1 whitespace-nowrap text-sm text-gray-500 text-right"
              colSpan={3}
            >
              {formatINRCurrency(
                getValue('totalInvoiceValue', null, taxType, invoice),
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function Other_Details({ watch }) {
  return (
    <div>
      <div className="p-2 grid gap-2 md:grid-cols-2 my-2 divide-y-2 md:divide-y-0">
        <div>
          <div className="mt-2 text-xl bg-red-400 text-neutral-50 px-2 font-semibold">
            Details:{' '}
          </div>
          {watch('details')}
        </div>
        <div>
          <div className="mt-2 text-xl bg-red-400 text-neutral-50 px-2 font-semibold">
            Extra Details:{' '}
          </div>
          {watch('extraDetails')}
        </div>
      </div>
      <div className="p-2">
        <p>{watch('declaration')}</p>
        <div>{watch('regards')}</div>
      </div>
    </div>
  );
}
export default function InvoiceTemplate_4(props) {
  const { respInvoice, watch } = props;
  return (
    <div className="space-y-2">
      <Invoice_Details watch={watch} />
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] p-2">
        <DetailsFrom_Inputs watch={watch} />
        <DetailsTo_Inputs watch={watch} />
      </div>
      <Items_Details
        invoiceItems={respInvoice.invoiceItems}
        items={respInvoice?.invoiceItems}
        invoice={respInvoice}
      />
      <Other_Details watch={watch} />
    </div>
  );
}
