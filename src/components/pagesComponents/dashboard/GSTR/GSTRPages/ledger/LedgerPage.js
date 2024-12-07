import React from 'react';
import ReactTable from '@/components/ui/ReactTable';
import {
  ledgerBalanceTableHeaders,
  ledgerCreditBalanceTableHeaders,
} from './staticData';

// This data will be replaced with api
const data = [
  {
    ledger: 'Tax Liability Ledger',
    igst: '0',
    cgst: '0',
    sgst: '0',
    cess: '0',
    total: '0',
  },
  {
    ledger: 'Input Tax Credit Ledger',
    igst: '0',
    cgst: '0',
    sgst: '0',
    cess: '0',
    total: '0',
  },
  {
    ledger: 'Cash Ledger',
    igst: '0',
    cgst: '0',
    sgst: '0',
    cess: '0',
    total: '0',
  },
];

// This data will be replaced with api
const data2 = [
  {
    asPer: 'GSTIN',
    igst: '',
    cgst: '',
    sgst: '',
    cess: '',
    total: '',
  },
  {
    asPer: 'Software',
    igst: '0',
    cgst: '0',
    sgst: '0',
    cess: '0',
    total: '0',
  },
];

const LedgerPage = () => {
  return (
    <section className="py-2 flex flex-col gap-2">
      <div className="p-3">
        <h1 className="text-2xl font-semibold">Ledger Balances</h1>
        <div className="my-2">
          <ReactTable columns={ledgerBalanceTableHeaders} data={data} />
        </div>
      </div>

      <div className="p-3">
        <h1 className="text-2xl font-semibold">
          Povisional Input Tax Credit Balance
        </h1>
        <div className="my-2">
          <ReactTable columns={ledgerCreditBalanceTableHeaders} data={data2} />
        </div>
      </div>
    </section>
  );
};

export default LedgerPage;
