'use client';

import DashSection from '@/components/pagesComponents/pageLayout/DashSection';

function OverviewDashboard({ invoiceOverview }) {
  return (
    <DashSection
      className="mt-4"
      title={'Overview'}
      titleRight={new Date().getFullYear()}
    >
      <ul className="grid p-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 [&>li]:p-2 [&>li]:border-l-4">
        <li>
          <h2>Total Invoices</h2>
          <p className="text-lg font-medium">
            {invoiceOverview?.totalInvoices}
          </p>
        </li>
        <li>
          <h2>Unpaid Invoices</h2>
          <p className="text-lg font-medium">
            {invoiceOverview?.unpaidInvoices}{' '}
          </p>
        </li>
        <li>
          <h2>Over Due</h2>
          <p className="text-lg font-medium">
            {invoiceOverview?.overDue} &#8377;
          </p>
        </li>
        <li>
          <h2>Upcoming Payouts</h2>
          <p className="text-lg font-medium">
            {invoiceOverview?.upcomingPayouts} &#8377;
          </p>
        </li>
      </ul>
    </DashSection>
  );
}

export default OverviewDashboard;
