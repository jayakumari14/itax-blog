'use client';

import GridContainer from '@/components/pagesComponents/grid/GridContainer';
import { H4 } from '@/components/pagesComponents/pageLayout/Headings';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const WebSettings_DashboardData = [
  {
    linkTo: 'edit-home',
    title: 'edit home',
    iconName: '',
  },
  {
    linkTo: 'blogs',
    title: 'Blogs',
    iconName: '',
  },
  {
    linkTo: 'edit-startups',
    title: 'edit Startups',
    iconName: '',
  },
  {
    linkTo: 'edit-e-library',
    title: 'edit e-library',
    iconName: '',
  },
  {
    linkTo: 'edit-download',
    title: 'edit download',
    iconName: '',
  },
  {
    linkTo: 'edit-footer',
    title: 'edit footer',
    iconName: '',
  },
];
export default function WebSettings_Dashboard() {
  return (
    <div className=" container 2xl:max-w-7xl mx-auto p-4">
      <H4 className="text-slate-800">Web Settings</H4>
      <GridContainer className="capitalize">
        {WebSettings_DashboardData.map((item, index) => (
          <li key={index}>
            <Link
              href={`/dashboard/settings/web-settings/${item.linkTo}`}
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
