import React, { useState } from 'react';
import { TAX_TYPES_BY_STATES } from '../staticData';
import ReactTable from '@/components/ui/ReactTable';
import { formClassNames } from '../CreateInvoice';
import { formatINRCurrency } from '@/utils/utilityFunctions';

const baseTableHeaders = [
  {
    text: 'Rate %',
    dataField: 'rate',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center">
          <span>{data}</span>
        </div>
      );
    },
  },
  {
    text: 'Tax value (₹)',
    dataField: 'value',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center gap-3">{data}</div>
      );
    },
  },
];

const intraTableHeaders = [
  {
    text: 'Central Tax (₹) *',
    dataField: 'cgst',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center">
          <span>{data}</span>
        </div>
      );
    },
  },
  {
    text: 'State/UT Tax (₹) *',
    dataField: 'sgst',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center">
          <span>{data}</span>
        </div>
      );
    },
  },
  {
    text: 'CESS (₹)',
    dataField: 'cess',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center">
          <span>{data}</span>
        </div>
      );
    },
  },
];

const utTableHeaders = [
  intraTableHeaders.at(0),
  {
    text: 'UT Tax (₹) *',
    dataField: 'utgst',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center">
          <span>{data}</span>
        </div>
      );
    },
  },
  {
    text: 'CESS (₹)',
    dataField: 'cess',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center">
          <span>{data}</span>
        </div>
      );
    },
  },
];

const interTableHeaders = [
  {
    text: 'Integrated Tax (₹) *',
    dataField: 'igst',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center">
          <span>{data}</span>
        </div>
      );
    },
  },
  {
    text: 'CESS (₹)',
    dataField: 'cess',
    formatter: (data) => {
      return (
        <div className="flex justify-center items-center">
          <span>{data}</span>
        </div>
      );
    },
  },
];

const tableHeaders = {
  [TAX_TYPES_BY_STATES.intra]: baseTableHeaders.concat(intraTableHeaders),
  [TAX_TYPES_BY_STATES.inter]: baseTableHeaders.concat(interTableHeaders),
  [TAX_TYPES_BY_STATES.ut]: baseTableHeaders.concat(utTableHeaders),
};

const TaxTable = ({ taxType }) => {
  const [tax, setTax] = useState({});

  const handleTaxValueChange = (e) => {
    const { name, value } = e.target;

    if (value > 0 || !value) {
      setTax((prevTax) => ({
        ...prevTax,
        [name]: value,
      }));
    }
  };

  const getTax = (taxName, rate) => {
    // intra = cgst/sgst, inter = igst, ut = utgst
    // tax state is a map of rate with amount. i.e 1: 1000, 1.5: 2000

    const allowedTaxes = {
      [TAX_TYPES_BY_STATES.intra]: ['cgst', 'sgst'],
      [TAX_TYPES_BY_STATES.inter]: ['igst'],
      [TAX_TYPES_BY_STATES.ut]: ['cgst', 'utgst'],
    };

    // If no rate is specified, it sends the total gst tax,
    if (taxType && allowedTaxes[taxType].includes(taxName) && !rate) {
      let totalTax = 0;
      Object.entries(tax).forEach(([key, value]) => {
        if (key && value) {
          const parsedKey = parseFloat(key); // gst tax rate;
          const parseVal = parseInt(value, 10); // gst value;
          totalTax += (parseVal * parsedKey) / 100;
        }
      });
      return totalTax;
    }

    if (taxType && tax[rate] && allowedTaxes[taxType].includes(taxName)) {
      return (parseInt(tax[rate], 10) * parseFloat(rate, 10)) / 100;
    }

    return 0;
  };

  const tableData = [
    {
      rate: '0%',
      value: (
        <input
          type="text"
          name="0"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['0']}
        />
      ),
      cgst: getTax('cgst', '0'),
      sgst: getTax('sgst', '0'),
      igst: getTax('igst', '0'),
      cess: getTax('cess', '0'),
    },
    {
      rate: '1%',
      value: (
        <input
          type="text"
          name="1"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['1']}
        />
      ),
      cgst: getTax('cgst', '1'),
      sgst: getTax('sgst', '1'),
      igst: getTax('igst', '1'),
      cess: getTax('cess', '1'),
    },
    {
      rate: '1.5%',
      value: (
        <input
          type="text"
          name="1.5"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['1.5']}
        />
      ),
      cgst: getTax('cgst', '1.5'),
      sgst: getTax('sgst', '1.5'),
      igst: getTax('igst', '1.5'),
      cess: getTax('cess', '1.5'),
    },
    {
      rate: '3%',
      value: (
        <input
          type="text"
          name="3"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['3']}
        />
      ),
      cgst: getTax('cgst', '3'),
      sgst: getTax('sgst', '3'),
      igst: getTax('igst', '3'),
      cess: getTax('cess', '3'),
    },
    {
      rate: '5%',
      value: (
        <input
          type="text"
          name="5"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['5']}
        />
      ),
      cgst: getTax('cgst', '5'),
      sgst: getTax('sgst', '5'),
      igst: getTax('igst', '5'),
      cess: getTax('cess', '5'),
    },
    {
      rate: '6%',
      value: (
        <input
          type="text"
          name="6"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['6']}
        />
      ),
      cgst: getTax('cgst', '6'),
      sgst: getTax('sgst', '6'),
      igst: getTax('igst', '6'),
      cess: getTax('cess', '6'),
    },
    {
      rate: '7.5%',
      value: (
        <input
          type="text"
          name="7.5"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['7.5']}
        />
      ),
      cgst: getTax('cgst', '7.5'),
      sgst: getTax('sgst', '7.5'),
      igst: getTax('igst', '7.5'),
      cess: getTax('cess', '7.5'),
    },
    {
      rate: '12%',
      value: (
        <input
          type="text"
          name="12"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['12']}
        />
      ),
      cgst: getTax('cgst', '12'),
      sgst: getTax('sgst', '12'),
      igst: getTax('igst', '12'),
      cess: getTax('cess', '12'),
    },
    {
      rate: '18%',
      value: (
        <input
          type="text"
          name="18"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['18']}
        />
      ),
      cgst: getTax('cgst', '18'),
      sgst: getTax('sgst', '18'),
      igst: getTax('igst', '18'),
      cess: getTax('cess', '18'),
    },
    {
      rate: '28%',
      value: (
        <input
          type="text"
          name="28"
          className={formClassNames.input}
          onChange={(e) => handleTaxValueChange(e)}
          value={tax['28']}
        />
      ),
      cgst: getTax('cgst', '28'),
      sgst: getTax('sgst', '28'),
      igst: getTax('igst', '28'),
      cess: getTax('cess', '28'),
    },
    {
      rate: (
        <div className="font-medium">
          <span>Total</span>
        </div>
      ),
      value: (
        <div className="flex justify-start w-full">
          <span className="font-medium">
            {formatINRCurrency(
              Object.values(tax).reduce(
                (total, val) => parseFloat(val || 0, 10) + total,
                0,
              ),
            )}
          </span>
        </div>
      ),
      cgst: formatINRCurrency(getTax('cgst')),
      sgst: formatINRCurrency(getTax('sgst')),
      igst: formatINRCurrency(getTax('igst')),
      cess: 0,
    },
  ];

  return (
    <div className="my-3">
      <ReactTable columns={tableHeaders[taxType] || []} data={tableData} />
    </div>
  );
};

export default TaxTable;
