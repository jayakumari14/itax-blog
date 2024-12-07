'use client';

import GridContainer from '@/components/pagesComponents/grid/GridContainer';
import GridItem from '@/components/pagesComponents/grid/GridItem';
import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import { Icon } from '@iconify/react';
import { invoiceDashboardNavItems } from './staticData';

function InvoiceDashboardNavItem({ navCardData }) {
  // console.log(navCardData);
  return (
    <DashSection
      className="mt-4"
      title="Invoice"
      titleRight="current year - 2024"
    >
      <div className="grid grid-rows-1 grid-flow-col p-4">
        {invoiceDashboardNavItems.map((el, key) => (
          <div key={key} href={`/dashboard/accounts/invoice/${el?.linkTo}`}>
            <div>
              <Icon
                icon={el?.icon}
                className={`rounded-xl sm:h-16 sm:w-16 sm:p-3 h-14 w-14 p-3 ${el?.cssClass}`}
              />
            </div>
          </div>
        ))}
      </div>
      <GridContainer className=" p-4">
        {invoiceDashboardNavItems.map((el, key) => (
          <GridItem
            key={key}
            href={`/dashboard/accounts/invoice/${el?.linkTo}`}
          >
            <div className=" grid justify-center sm:w-1/2 w-1/5">
              <Icon
                icon={el?.icon}
                className={`rounded-xl sm:h-16 sm:w-16 sm:p-3 h-14 w-14 p-3 ${el?.cssClass}`}
              />
            </div>
            <div>
              <p className={`text-lg sm:w-full capitalize`}>
                {[el.title]} - {navCardData[el.title]?.length ?? 0}
              </p>
              {el.title === 'invoice' && (
                <p className="font-normal">
                  {' '}
                  &#8377;
                  {(navCardData.invoice || []).reduce(
                    (acc, inv) => acc + inv.totalAmount,
                    0,
                  )}
                </p>
              )}
              {el.title === 'sale' && (
                <p className="font-normal">
                  &#8377;
                  {(navCardData.sale || []).reduce(
                    (acc, inv) => acc + inv.totalAmount,
                    0,
                  )}
                </p>
              )}
              {el.title === 'purchase' && (
                <p className="font-normal">
                  &#8377;
                  {(navCardData.purchase || []).reduce(
                    (acc, inv) => acc + inv.totalAmount,
                    0,
                  )}
                </p>
              )}
              {el.title === 'cash/bank' && (
                <p className="font-normal">
                  &#8377;
                  {(navCardData.sale || []).reduce(
                    (acc, inv) => acc + inv.totalAmount,
                    0,
                  ) -
                    (navCardData.purchase || []).reduce(
                      (acc, inv) => acc + inv.totalAmount,
                      0,
                    )}
                </p>
              )}
            </div>
          </GridItem>
        ))}
      </GridContainer>
    </DashSection>
  );
}

export default InvoiceDashboardNavItem;
