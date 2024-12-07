'use client';

import GridContainer from '@/components/pagesComponents/grid/GridContainer';
import { H4 } from '@/components/pagesComponents/pageLayout/Headings';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Settings_DashboardData = [
  {
    linkTo: 'web-settings',
    title: 'Web settings',
    iconName: 'material-symbols:web',
  },
  {
    linkTo: 'theme',
    title: 'Theme',
    iconName: 'line-md:light-dark',
  },
  {
    linkTo: 'change-password',
    title: 'Change password',
    iconName: 'teenyicons:password-outline',
  },
  {
    linkTo: 'change-language',
    title: 'Change language',
    iconName: 'clarity:language-solid',
  },
];

export default function Settings_Dashboard() {
  return (
    <div className=" container 2xl:max-w-7xl mx-auto p-4">
      <H4 className="text-slate-800">Settings</H4>
      <GridContainer className="capitalize">
        {Settings_DashboardData.map((item, index) => (
          <li key={index}>
            <Link
              href={`/dashboard/settings/${item.linkTo}`}
              className="grid grid-cols-[3fr_1fr] border shadow-sm shadow-primary/90 rounded-md p-4 px-2"
            >
              <div className="text-txt/90 text-xl self-center">
                {item.title}
              </div>
              <div className="place-self-center text-2xl border border-primary text-primary rounded-full p-2 ">
                <Icon icon={item.iconName} />
              </div>
            </Link>
          </li>
        ))}
      </GridContainer>
    </div>
  );
}
