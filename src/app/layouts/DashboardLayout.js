'use client';

import { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { USER_ROLES } from '@/utils/globals';
import { usePathname } from 'next/navigation';
import { DashboardSidebarItemsData } from './staticData.js';
import TopNavbar from '@/components/partials/topNavbar/TopNavbar';
import BackButton from '@/components/pagesComponents/dashboard/BackButton';
import SideBar from '@/components/pagesComponents/dashboard/sidebar/SideBar';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const { currentUser } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => setIsSidebarOpen((prev) => !prev);

  if (pathname.startsWith('/dashboard/accounts/invoice')) {
    return <>{children}</>;
  }

  const userType = currentUser?.userType;

  const getSidebarByRole = {
    [USER_ROLES.normal]: DashboardSidebarItemsData.normal,
    [USER_ROLES.admin]: DashboardSidebarItemsData.admin,
    [USER_ROLES.superAdmin]: DashboardSidebarItemsData.superAdmin,
  };

  return (
    <>
      <>
        <SideBar
          data={getSidebarByRole[userType]}
          userType={userType}
          isSidebarOpen={isSidebarOpen}
          handleSidebar={handleSidebar}
        />
      </>
      <TopNavbar handleSidebar={handleSidebar} isSidebarOpen={isSidebarOpen} />
      <main
        className={`${isSidebarOpen ? 'lg:pl-64 ' : 'lg:pl-16'} transition-[padding] duration-200`}
      >
        <BackButton />
        {children}
      </main>
    </>
  );
}
