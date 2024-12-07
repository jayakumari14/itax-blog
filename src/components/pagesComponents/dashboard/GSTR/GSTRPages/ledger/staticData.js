import Button from '../../Button';

/* This file contains some static data for Ledger page,
this is important for ui, do not remove it without caution. */

// This array defines table headers and headers datafield for the rows.
export const ledgerBalanceTableHeaders = [
  {
    text: 'Ledger',
    dataField: 'ledger',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'IGST',
    dataField: 'igst',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'CGST',
    dataField: 'cgst',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'SGST',
    dataField: 'sgst',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'CESS',
    dataField: 'cess',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'Total',
    dataField: 'total',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'OTP',
    dataField: '',
    formatter: () => (
      <div className="flex justify-center items-center">
        <Button className={'rounded-sm'} title={'GET'} />
      </div>
    ),
  },
  {
    text: 'Without OTP',
    dataField: '',
    formatter: () => (
      <div className="flex justify-center items-center">
        <Button className={'rounded-sm'} title={'GET'} />
      </div>
    ),
  },
];

// This array defines table headers and headers datafield for the rows.
export const ledgerCreditBalanceTableHeaders = [
  {
    text: 'As Per',
    dataField: 'asPer',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'IGST',
    dataField: 'igst',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'CGST',
    dataField: 'cgst',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'SGST',
    dataField: 'sgst',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'CESS',
    dataField: 'cess',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'Total',
    dataField: 'total',
    formatter: (value) => (
      <div className="flex justify-center items-center">
        <p>{value}</p>
      </div>
    ),
  },
  {
    text: 'OTP',
    dataField: '',
    formatter: () => (
      <div className="flex justify-center items-center">
        <Button className={'rounded-sm'} title={'GET'} />
      </div>
    ),
  },
];
