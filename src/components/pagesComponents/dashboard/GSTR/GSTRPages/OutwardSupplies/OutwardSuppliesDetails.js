import React from 'react';
import Button from '../../Button';

const OutwardSuppliesDetails = () => {
  const links = [
    { label: 'Taxable Supplies', href: 'taxable-supplies' },
    { label: 'Non Taxable Supplies', href: 'non-taxable-supplies' },
    { label: 'Debit Credit Notes', href: 'debit-credit-notes' },
    { label: 'Advances Received', href: 'advances-received' },
    { label: 'Advances Adjusted', href: 'advances-adjusted' },
    { label: 'HSN-wise Outward Summary', href: 'hsn-wise-outwards-summary' },
    { label: 'Documents Issued In Period', href: 'documents-issued' },
  ];

  return (
    <div className="w-2/6 border">
      <div className="min-h-10 flex items-center">
        <p className="text-primary font-semibold px-3">
          Outward Supplies Details
        </p>
      </div>
      <div>
        <ul className="flex flex-col">
          {links.map((link, i) => (
            <li
              className="min-h-10 w-full flex gap-3 items-center px-3"
              key={`${link.href}`}
            >
              {i + 1}{' '}
              <Button
                linkTo={`/dashboard/easy-gst-return/outward-supplies/${link.href}`}
                title={link.label}
                className="w-full"
              />
            </li>
          ))}
          <li className="min-h-10 flex items-center text-xs text-primary px-3">
            Outward Supply & GST (1+2+3+4-5)
          </li>
          <li className="min-h-10 flex items-center text-xs text-primary px-3">
            Less: Supply Attracting Reverse Charge (Invoice)
          </li>
          <li className="min-h-10 flex items-center text-xs text-primary px-3">
            Add/Less: Supply Attracting Reverse Charge (Notes)
          </li>
          <li className="min-h-10 flex items-center px-3 text-xs">
            Tax Liability on Outward (A) as per GSTR-3B
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OutwardSuppliesDetails;
