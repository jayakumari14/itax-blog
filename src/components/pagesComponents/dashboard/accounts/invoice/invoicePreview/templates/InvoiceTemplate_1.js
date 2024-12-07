import { useEffect, useState } from 'react';
import { TAX_TYPES_BY_STATES, UT_STATE_CODES } from '../../invoice/staticData';
import { formatINRCurrency } from '@/utils/utilityFunctions';
import Image from 'next/image';
import useTaxType from './useTaxType';
import { getValue } from './templates.service';

function Invoice_Details(props) {
  const { watch } = props;
  return (
    <div>
      <div className="bg-neutral-400 text-neutral-50 py-2 flex justify-center items-end uppercase">
        {/* grid gap-2 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] */}
        <h1 className="text-3xl font-semibold">{watch('invoiceTitle')}</h1>
      </div>
      <div className="text-sm p-2 mt-2 divide-y-2 ">
        <div>
          <Image width={50} height={50} src="/logo.png" alt="itaxeasy" />
          <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
            ItaxEasy
          </h1>
        </div>
        <div>
          <ul
            className="
                border p-2 text-xs grid gap-2 grid-cols-2
                [&>li>div]:font-medium [&>li]:flex [&>li]:flex-wrap [&>li]:gap-2 
            "
          >
            <li>
              <div>Invoice No:</div>
              {watch('invoiceNumber') || '--'}
            </li>
            <li>
              <div>Invoice Date:</div>
              {watch('invoiceDate') || '--'}
            </li>
            <li>
              <div>Mode Of Payment:</div>
              {watch('modeOfPayment') || '--'}
            </li>
            <li>
              <div>Due Date:</div>
              {watch('dueDate') || '--'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function DetailsFrom_Inputs(props) {
  const { watch } = props;

  return (
    <div className=" divide-y-2">
      <div className="flex justify-between flex-wrap">
        <div className="mt-2 text-xl text-gray-800 font-semibold py-2">
          From:
        </div>
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
          <span className="break-words text-end font-semibold uppercase">
            {watch('Address_DetailsFrom')}
          </span>
        </div>
        <div>
          Phone:
          <div className="font-semibold uppercase">
            {watch('phone_DetailsFrom')}
          </div>
        </div>
        <div>
          Email:
          <div className="font-semibold">{watch('email_DetailsFrom')}</div>
        </div>
      </div>
    </div>
  );
}
function DetailsTo_Inputs(props) {
  const { watch } = props;

  return (
    <div className=" divide-y-2">
      <div className="flex justify-between flex-wrap">
        <div className="mt-2 text-xl text-gray-800 font-semibold py-2">To:</div>
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
          <div className="font-semibold">{watch('email_DetailsTo')}</div>
        </div>
      </div>
    </div>
  );
}
// function Items_Details(props) {
//   const { invoice, taxType } = props;

//   return (
//     <div className="p-2 min-h-50 ">
//       <div className="mt-2 text-xl font-semibold">GST Details</div>
//       <table>
//         <thead>
//           <tr className="[&>th]:border-x text-sm bg-neutral-400 text-neutral-50">
//             <th>Item Name</th>
//             <th>HSN Code</th>
//             <th>Quantity</th>
//             <th>Price Per Item</th>
//             <th>Discount</th>
//             <th>Taxable Value</th>
//             <th>CGST</th>
//             <th>SGST</th>
//             <th>IGST</th>
//             <th>UTGST</th>
//             <th>CESS</th>
//             <th>TOTAL</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoice?.invoiceItems &&
//             invoice?.invoiceItems?.map((item, index) => (
//               <tr
//                 className="  border-y [&>td]:border-x [&>td]:px-2 text-xs"
//                 key={item.id}
//               >
//                 <td>{item.item.itemName}</td>
//                 <td>{item.item.hsnCode}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.item.price}</td>
//                 <td>{item.discount} %</td>
//                 <td>{getValue('taxableValue', item, taxType, invoice)}</td>
//                 <td>{getValue('cgst', item, taxType, invoice)}</td>
//                 <td>{getValue('sgst', item, taxType, invoice)}</td>
//                 <td>{getValue('igst', item, taxType, invoice)}</td>
//                 <td>{getValue('utgst', item, taxType, invoice)}</td>
//                 <td>{getValue('cess', item, taxType, invoice)}</td>
//                 <td>{getValue('total', item, taxType, invoice)}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="text-xs my-2 font-semibold flex items-end gap-1 flex-col">
//         <div>
//           <span>Taxable Amount: </span>
//           <span>
//             {formatINRCurrency(
//               getValue('totalInvoiceValue', null, taxType, invoice) -
//                 getValue('totalGst', null, taxType, invoice),
//             )}
//           </span>
//         </div>
//         <div>
//           <span>Total GST: </span>
//           <span>
//             {/* {formatINRCurrency(getValue('totalGst', null, taxType, invoice))} */}
//             {/* {taxType === 'Inter State' && 'Inter State'}
//             {taxType === 'intra State' && 'intra State'}
//             {taxType === 'UT GST' && 'UT GST'} */}
//             {taxType}
//           </span>
//         </div>
//         <div>
//           <span>Invoice Total: </span>
//           <span>
//             {formatINRCurrency(
//               getValue('totalInvoiceValue', null, taxType, invoice),
//             )}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
function Other_Details({ watch }) {
  return (
    <div>
      <hr></hr>
      <div className="p-2 grid gap-2 md:grid-cols-2 my-2 divide-y-2 md:divide-y-0">
        <div>
          <div className="mt-2 text-xl text-gray-800 font-semibold py-2">
            Details:{' '}
          </div>
          {watch('details')}
        </div>
        <div>
          <div className="mt-2 text-xl text-gray-800 font-semibold py-2">
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

const InvoiceTable = ({ items, taxes, total, roundOff, taxType, invoice }) => {
  return (
    <div className="p-4 bg-white">
    <table className="min-w-full divide-y divide-gray-200 border">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No.</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description of Goods</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Per</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Discount (%)</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">GST (%)</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">GST Amount</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {items.map(({ item, quantity, taxPercent, discount }, index) => (
          <tr key={index}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{quantity}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{item.price}</td>
            <td className="px-4 py-2 whitespace-nowrap capitalize text-sm text-gray-500 text-right">{item.unit}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{discount}%</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{taxPercent}%</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{formatINRCurrency(item.price * quantity * (taxPercent / 100))}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{formatINRCurrency(item.price * quantity)}</td>
          </tr>
        ))}
        {taxes && taxes.map((tax, index) => (
          <tr key={`tax-${index}`}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
            <td className="px-4 py-2 text-right whitespace-nowrap text-sm font-medium text-gray-900">{tax.label}</td>
            <td colSpan={5} className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{formatINRCurrency(tax.amount)}</td>
          </tr>
        ))}
        <tr>
        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" colSpan={1}></td>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" colSpan={3}>Total Invoice</td>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" colSpan={4}></td>
         
          
          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>{formatINRCurrency(getValue('totalInvoiceValue', null, taxType, invoice) - getValue('totalGst', null, taxType, invoice))}</td>
        </tr>
        <tr>
        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" colSpan={1}> </td>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" colSpan={3}>Total GST</td>
          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={4}></td>
          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>
          {formatINRCurrency( getValue('totalGst', null, taxType, invoice))}
          </td>
        </tr>
        <tr>
        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" colSpan={1}> </td>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" colSpan={3}>Total Amount</td>
          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={4}></td>
          <td className="px-4 py-2 whitespace-nowrap text-sm text-black text-right font-semibold" colSpan={1}>
          {formatINRCurrency(getValue('totalInvoiceValue', null, taxType, invoice))}
          </td>
        </tr>
        {/* {taxType === 'Intra State' && (
          <tr>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-right" colSpan={2}>IGST</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}></td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>18%</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>%</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}></td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>{formatINRCurrency(getValue('totalInvoiceValue', null, taxType, invoice) - getValue('totalGst', null, taxType, invoice))}</td>
          </tr>
        )}
        {taxType === 'Inter State' && (
          <tr>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-right" colSpan={2}>CGST & SGST</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}></td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>18%</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>%</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}></td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>{formatINRCurrency(getValue('totalGst', null, taxType, invoice))}</td>
          </tr>
        )}
        {taxType === 'UT GST' && (
          <tr>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-right" colSpan={2}>UT GST</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}></td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>18%</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>%</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}></td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={1}>{formatINRCurrency(getValue('totalInvoiceValue', null, taxType, invoice) - getValue('totalGst', null, taxType, invoice))}</td>
          </tr>
        )}
        {!['intra State', 'Inter State', 'UT GST'].includes(taxType) && taxType}
        <tr>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" colSpan={4}>Total Amount Payable</td>
          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right" colSpan={3}>{formatINRCurrency(getValue('totalInvoiceValue', null, taxType, invoice))}</td>
        </tr> */}
      </tbody>
    </table>
  </div>
  
  );
};

export default function InvoiceTemplate_1(props) {
  const { respInvoice, watch, businessProfile } = props;
  const [taxType] = useTaxType(respInvoice, businessProfile);

  return (
    <div className="space-y-2 w-full">
      <Invoice_Details watch={watch} />
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] p-2">
        <DetailsFrom_Inputs watch={watch} />
        <DetailsTo_Inputs watch={watch} />
      </div>
      <InvoiceTable
        taxType={taxType}
        items={respInvoice?.invoiceItems}
        invoice={respInvoice}
      />
      {/* <Items_Details taxType={taxType} invoice={respInvoice} /> */}
      <Other_Details watch={watch} />
    </div>
  );
}
