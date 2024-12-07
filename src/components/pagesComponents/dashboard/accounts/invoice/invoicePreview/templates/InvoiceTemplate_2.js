import showCurrency from '@/helper/showCurrency';
import useTaxType from './useTaxType';
import { getValue } from './templates.service';
import { formatINRCurrency } from '@/utils/utilityFunctions';

function Items_Details(props) {
  const { invoice, taxType } = props;
  console.log(invoice, taxType);
  return (
    <table className="[&_tr>th]:border [&_tr>td]:border text-sm tracking-tighter [&_*]:p-2 [&_*]:text-left">
      <tbody>
        <tr>
          <th>SN</th>
          <th>Description</th>
          <th>HSN</th>
          <th>QTY</th>
          <th>Tax(%)</th>
          <th>Disc.</th>
          <th>&#8377; price</th>
        </tr>
        {invoice?.invoiceItems &&
          invoice?.invoiceItems?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td className="text-[0.7rem]">{item.item.itemName}</td>
              <td>{item.item.hsnCode}</td>
              <td>{item.quantity}</td>
              <td>{item.taxPercent}%</td>
              <td>{item.discount}%</td>
              <td>&#8377;{item.item.price}</td>
            </tr>
          ))}
        <tr className="[&>td]:font-semibold ">
          <td></td>
          <td>Taxable Amount</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            {' '}
            <span>
              {formatINRCurrency(
                getValue('totalInvoiceValue', null, taxType, invoice) -
                  getValue('totalGst', null, taxType, invoice),
              )}
            </span>
          </td>
        </tr>
        <tr className="[&>td]:font-semibold">
          <td></td>
          <td>GST</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <span>
              {formatINRCurrency(getValue('totalGst', null, taxType, invoice))}
            </span>
          </td>
        </tr>
        <tr className="[&>td]:font-semibold">
          <td></td>
          <td>Total Amount</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <span>
              {formatINRCurrency(
                getValue('totalInvoiceValue', null, taxType, invoice),
              )}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
function DetailsFrom_Inputs(props) {
  const { watch } = props;

  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <div className=" flex-1 text-neutral-900 font-semibold">From:</div>
        {/* <div>{watch("bName_DetailsFrom")}</div> */}
      </div>
      <div className="[&>div]:border [&>div]:flex [&>div]:justify-between [&>div] [&>div]:px-1 leading-[1.2rem]">
        <div className="text-sm tracking-tighter">
          Business Name:
          <div>{watch('bName_DetailsFrom')}</div>
        </div>
        <div className="text-sm tracking-tighter">
          GSTIN:
          <div> {watch('GSTIN_DetailsFrom')}</div>
        </div>
        <div className="text-sm tracking-tighter">
          Pan:
          <div> {watch('pan_DetailsFrom')}</div>
        </div>
        <div className="text-sm tracking-tighter">
          Address:
          <div> {watch('Address_DetailsFrom')}</div>
        </div>
        {/* <div className="text-sm tracking-tighter">
                    Phone: 
                    <div>{businessProfile?.b}</div>
                </div>
				<div className="text-sm tracking-tighter">
                    Email: 
                    <div>{businessProfile?.b}</div>
                </div> */}
      </div>
    </div>
  );
}
function DetailsTo_Inputs(props) {
  const { watch } = props;

  // console.log(respParty)
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <div className=" flex-1 text-neutral-900 font-semibold">To:</div>
        {/* <div>{watch("businessName")}</div> */}
      </div>
      <div className="[&>div]:border [&>div]:flex [&>div]:justify-between [&>div] [&>div]:px-1 leading-[1.2rem]">
        <div className="text-sm tracking-tighter">
          Party Name:
          <div className="uppercase"> {watch('bName_DetailsTo')}</div>
        </div>
        <div className="text-sm tracking-tighter">
          GSTIN:
          <div className="uppercase"> {watch('GSTIN_DetailsTo')}</div>
        </div>
        <div className="text-sm tracking-tighter">
          Pan:
          <div className="uppercase"> {watch('pan_DetailsTo')}</div>
        </div>
        <div className="text-sm tracking-tighter">
          Address:
          <div className="uppercase"> {watch('Address_DetailsTo')}</div>
        </div>
        <div className="text-sm tracking-tighter">
          Phone:
          <div className="uppercase"> {watch('phone_DetailsTo')}</div>
        </div>
        <div className="text-sm tracking-tighter">
          Email:
          <div className="uppercase"> {watch('email_DetailsTo')}</div>
        </div>
      </div>
    </div>
  );
}
function Invoice_Details(props) {
  const { watch } = props;
  return (
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
  );
}

export default function InvoiceTemplate_2(props) {
  const { respInvoice, watch, businessProfile } = props;
  const [taxType] = useTaxType(respInvoice, businessProfile);
  // console.log(respInvoice)
  const texRate =
    respInvoice?.cgst +
    respInvoice?.sgst +
    respInvoice?.igst +
    respInvoice?.utgst;
  // console.log(texRate)
  const amount = (respInvoice?.totalAmount * texRate) / 100;
  return (
    <div className="text-sm space-y-4 p-4">
      <h1 className="text-3xl">{respInvoice.type} Invoice</h1>
      <div className="space-y-4">
        <DetailsFrom_Inputs watch={watch} />
        <DetailsTo_Inputs watch={watch} />
      </div>
      <Invoice_Details watch={watch} />
      <Items_Details taxType={taxType} invoice={respInvoice} />

      <div className="border divide-y [&>div]:text-xs [&>div]:p-2">
        <div>
          <div>Details</div>
          <div className="text-[0.7rem]">{respInvoice?.details}</div>
        </div>
        <div>
          <div>Extra Details</div>
          <div className="text-[0.7rem]">{respInvoice?.extraDetails}</div>
        </div>
      </div>
      {/* <table className="p-2 [&_tr>th]:border [&_tr>td]:border text-sm tracking-tighter [&_*]:p-2 [&_*]:text-left"> */}
      {/* <tbody>
          <tr>
            <th>Taxable Value</th>
            <th>
              <div>Integrated Tax</div>
              <span>Rate</span>
              <span>Amount</span>
            </th>
            <th>Total Tax Amount</th>
          </tr>
          <tr>
            <td>{showCurrency(respInvoice?.totalAmount || '-')}</td>
            <td className="divide-x">
              <span>{texRate}%</span>
              <span>{amount.toFixed(2)}</span>
            </td>
            <td>{amount.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total : {showCurrency(respInvoice?.totalAmount || '-')}</td>
            <td className="divide-x">
              <span>_____</span>
              <span>{amount.toFixed(2)}</span>
            </td>
            <td>{amount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table> */}
      <p className="text-sm tracking-tighter">
        <span className="underline ">Declaration</span>
        <br />
        We declare that this invoice shows the actual price of the goods
        described and that all particulars are true and correct.
      </p>
    </div>
  );
}
