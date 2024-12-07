import Button from './Button';

export default function GSTR_LedgerBalance() {
  return (
    <>
      <div className="border w-1/4 pt-0 rounded-tr-md rounded-br-md">
        <h1 className="flex justify-between pt-2 pb-2 pl-1 pr-1 font-semibold">
          Ledger Balances
        </h1>
        <div className="flex justify-between items-center pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <Button
            title="Ledger Details"
            linkTo="/dashboard/easy-gst-return/ledger-details"
          />

          <h1>Balance</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <h1>Credit Ledger</h1>
          <h1>0</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <h1>Liability Ledger</h1>
          <h1>0</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <h1>Cash Ledger</h1>
          <h1>0</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <Button title="PMT09" linkTo="/" />

          <h1>0</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <Button title="Late Fees +" linkTo="/" />

          <h1>0</h1>
        </div>
        <hr />
        <hr />
        <div className="flex flex-col gap-2 text-sm justify-between mt-2 pr-1 pl-1">
          <Button className="w-full" title="Annual Return GSTR-9" linkTo="/" />

          <Button className="w-full" title="GSTR-9C" linkTo="/" />
        </div>
      </div>
    </>
  );
}
