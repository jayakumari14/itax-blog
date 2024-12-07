import GSTRTable from '../../GSTRTable';
import StatusHeader from '../StatusHeader';
import InwardSuppliesDetails from './InwardSuppliesDetails.js';
import DashSection from '@/components/pagesComponents/pageLayout/DashSection';

const links = [
  { label: 'Inward Supplies Details' },
  { label: 'Taxable Supplies', href: 'taxable-supplies' },
  { label: 'Non Taxable Supplies', href: 'non-taxable-supplies' },
  { label: 'Debit Credit Notes', href: 'debit-credit-notes' },
  { label: 'ISD/TDS/TCS Credits', href: 'isd-tds-tcs-credits' },
  { label: 'HSN-wise Inward Summary', href: 'hsn-wise-outwards-summary' },
  { label: 'Total Inward & ITC: (1+2+3+4)' },
];

const supplyData = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const linksDueTable = [
  { label: 'Tax Liability On Inward Due To' },
  { label: 'Inward Attract Reverse Charge', href: 'inward-attract-charge' },
  { label: 'Advances Paid', href: 'advances-paid' },
  { label: 'Advances Adjusted', href: 'advances-adjusted' },
  { label: 'Reversal Of Credit', href: 'credit-reversal' },
  { label: 'Mismatch Adjustments', href: 'mismatch-adjustments' },
  { label: 'Tax Liability On Inwards (A+B-C+D+E)' },
];

const supplyValueData = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const InwardSupplies = () => {
  return (
    <>
      <main>
        <section>
          <StatusHeader />
        </section>

        <DashSection>
          <div className="flex p-3">
            <InwardSuppliesDetails links={links} />
            <GSTRTable supplyData={supplyData} />
          </div>
        </DashSection>
        <DashSection>
          <div className="flex p-3">
            <InwardSuppliesDetails links={linksDueTable} />
            <GSTRTable supplyData={supplyValueData} />
          </div>
        </DashSection>
      </main>
    </>
  );
};

export default InwardSupplies;
