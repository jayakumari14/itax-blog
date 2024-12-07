import { formatINRCurrency } from '@/utils/utilityFunctions';
import Image from 'next/image';
import { getValue } from './templates.service';

function Invoice_Details(props) {
  const { watch } = props;
  return (
    <div>
      <div className="bg-blue-400 text-neutral-50 py-2 flex justify-center items-end uppercase">
        <h1 className="text-3xl font-semibold">{watch('invoiceTitle')}</h1>
      </div>
      <div className="text-sm border-y-4 p-2 border-4 mt-2">
        <div className="text-sm  p-2 divide-y-2 mt-2">
          <div className="flex justify-between">
            <div>Invoice No.: </div>
            <span className="font-medium">{watch('invoiceNumber')}</span>
          </div>
          <div className="flex justify-between">
            <div>Invoice Date: </div>
            <span className="font-medium">{watch('invoiceData')}</span>
          </div>
          <div className="flex justify-between">
            <div>Due Date: </div>
            <span className="font-medium">{watch('dueDate')}</span>
          </div>
          <div className="flex justify-between">
            <div>Mode of Payment: </div>
            <span className="font-medium">{watch('modeOfPayment')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function DetailsFrom_Inputs(props) {
  const { watch } = props;
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <div className=" flex-1 bg-blue-400 text-neutral-50">From:</div>
        {/* <div>{watch("bName_DetailsFrom")}</div> */}
      </div>
      <div className="[&>div]:flex [&>div]:justify-between [&>div] p-2 text-sm divide-y-2">
        <div>
          Business Name:
          <div>{watch('bName_DetailsFrom')}</div>
        </div>
        <div>
          GSTIN:
          <div>{watch('GSTIN_DetailsFrom')}</div>
        </div>
        <div>
          Pan:
          <div>{watch('pan_DetailsFrom')}</div>
        </div>
        <div>
          Address:
          <div> {watch('Address_DetailsFrom')}</div>
        </div>
        <div>
          Phone:
          <div>{watch('phone_DetailsFrom')}</div>
        </div>
        <div>
          Email:
          <div>{watch('email_DetailsFrom')}</div>
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
      <div className="flex justify-between flex-wrap">
        <div className=" flex-1 bg-blue-400 text-neutral-50">To:</div>
        {/* <div>{watch("businessName")}</div> */}
      </div>
      <div className="[&>div]:flex [&>div]:justify-between [&>div] p-2 text-sm divide-y-2">
        <div>
          Business Name:
          <div>{watch('bName_DetailsTo')}</div>
        </div>
        <div>
          GSTIN:
          <div>{watch('GSTIN_DetailsTo')}</div>
        </div>
        <div>
          Pan:
          <div>{watch('pan_DetailsTo')}</div>
        </div>
        <div>
          Address:
          <div>{watch('Address_DetailsTo')}</div>
        </div>
        <div>
          Phone:
          <div>{watch('phone_DetailsTo')}</div>
        </div>
        <div>
          Email:
          <div>{watch('email_DetailsTo')}</div>
        </div>
      </div>
    </div>
  );
}
const InvoiceTable = ({ items, taxes, total, invoice }) => {
  return (
    <div className="p-4 min-h-60 overflow-x-auto bg-white border rounded shadow-md">
      <div className="mt-2 text-xl font-semibold text-gray-700">Items</div>
      <table className="min-w-full mt-4">
        <thead>
          <tr className="bg-blue-500 text-white text-sm">
            <th className="px-4 py-2 border">Item Name</th>
            <th className="px-4 py-2 border">Item Name</th>

            <th className="px-4 py-2 border">HSN Code</th>
            <th className="px-4 py-2 border">Purchase Price</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">GST (%)</th>
            <th className="px-4 py-2 border">Discount (%)</th>
            <th className="px-4 py-2 border">Amount</th>
          </tr>
        </thead>
        <tbody>
        {items.map(({ item, quantity, taxPercent, discount }, index) => (
            <tr className="text-sm text-gray-700" key={index}>
            <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{item.description}</td>
              <td className="px-4 py-2 border">{item.unit}</td>
              <td className="px-4 py-2 border">{item.price}</td>
              <td className="px-4 py-2 border">{quantity}</td>
              <td className="px-4 py-2 border">{taxPercent}</td>
              <td className="px-4 py-2 border">{discount}</td>
              <td className="px-4 py-2 border">&#8377;{formatINRCurrency(item.price * quantity * (taxPercent / 100))}</td>
            </tr>
          ))}
          <tr className="text-sm font-semibold text-gray-700 bg-gray-100">
            <td className="px-4 py-2 border" colSpan={4}>
              Total Invoice
            </td>
            <td className="px-4 py-2 border text-right" colSpan={4}>
              {formatINRCurrency(
                getValue('totalInvoiceValue', null, invoice) -
                  getValue('totalGst', null, invoice)
              )}
            </td>
          </tr>
          <tr className="text-sm font-semibold text-gray-700 bg-gray-100">
            <td className="px-4 py-2 border" colSpan={4}>
              Total GST
            </td>
            <td className="px-4 py-2 border text-right" colSpan={4}>
              {formatINRCurrency(getValue('totalGst', null, invoice))}
            </td>
          </tr>
          <tr className="text-sm font-semibold text-gray-700 bg-gray-100">
            <td className="px-4 py-2 border" colSpan={4}>
              Total Amount Payable
            </td>
            <td className="px-4 py-2 border text-right" colSpan={4}>
              {formatINRCurrency(getValue('totalInvoiceValue', null, invoice))}
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
          <div className="bg-blue-400 text-neutral-50">Details: </div>
          {watch('details')}
        </div>
        <div>
          <div className="bg-blue-400 text-neutral-50">Extra Details: </div>
          {watch('extraDetails')}
        </div>
      </div>
      <div>
        <p>{watch('declaration')}</p>
        <div>{watch('regards')}</div>
      </div>
    </div>
  );
}
export default function InvoiceTemplate_4(props) {
  const { respInvoice, watch } = props;
  return (
    <div className="bg-neutral-50 p-2 max-w-7xl">
      <div className=" space-y-2 p-2 border-4 border-neutral-900/90">
        <Invoice_Details watch={watch} />
        <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] border-y-4 p-2 divide-x-2 border-4">
          <DetailsFrom_Inputs watch={watch} />
          <DetailsTo_Inputs watch={watch} />
        </div>
        {/* <Items_Details invoice={respInvoice} /> */}
        <Other_Details watch={watch} />
        <InvoiceTable
      
        items={respInvoice?.invoiceItems}
        invoice={respInvoice}
        />
      </div>
    </div>
  );
}
