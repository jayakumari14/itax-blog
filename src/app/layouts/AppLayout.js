'use client';

import { usePathname } from 'next/navigation';
import TopNavbar from '@/components/partials/topNavbar/Navbar';
import Footer from '@/components/partials/footer/Footer';

export default function AppLayout({ children }) {
  const pathname = usePathname();

  const authRouteRegex = new RegExp(
    '^(/login|/signup|/verify-otp|/reset-password)',
  );

  if (
    authRouteRegex.test(pathname) ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/profile')
  ) {
    return <>{children}</>;
  }

  return (
    <>
      <TopNavbar />
      {children}
      <Footer />
    </>
  );
}
