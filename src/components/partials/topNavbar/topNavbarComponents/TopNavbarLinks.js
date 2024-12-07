'use client';

import Link from 'next/link';
import { I } from '@/components/iconify/I';

const topNavbarLinks = [
  {
    title: 'Our Product',
    isSubmenu: true,
    submenu: [
      {
        linkTo: '/',
        title: 'Easy E-library',
      },
    ],
  },
  {
    title: 'Easy Services',
    isSubmenu: true,
    submenu: [
      {
        linkTo: '/',
        title: 'Easy GST Links',
      },
    ],
  },
  {
    title: 'Financial Calculators',
    isSubmenu: true,
    submenu: [
      {
        linkTo: '/',
        title: 'Bank Calculators',
      },
    ],
  },
  {
    title: 'Financial Calculators',
    isSubmenu: true,
    submenu: [
      {
        linkTo: '/',
        title: 'Bank Calculators',
      },
    ],
  },
  {
    linkTo: '/',
    title: 'Blogs',
    isSubmenu: false,
  },
  {
    linkTo: '/',
    title: 'Register a StartUp',
    isSubmenu: false,
  },
  {
    linkTo: '/',
    title: 'APIs',
    isSubmenu: false,
  },
  {
    linkTo: '/',
    title: 'Downloads',
    isSubmenu: false,
  },
];

export default function TopNavbarLinks() {
  return (
    <ul className="flex gap-2 ">
      {topNavbarLinks.map((link, index) => (
        <li key={index}>
          {link.linkTo ? (
            <Link
              href={link.linkTo}
              className="block font-medium py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              aria-current="page"
            >
              {link.title}
            </Link>
          ) : (
            <>
              <button
                className="flex align-center flex-nowrap font-medium py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
                aria-current="page"
              >
                <span>{link.title}</span>
                <span className="grid place-content-center mt-1">
                  <I className="w-5 h-5" icon="iconamoon:arrow-down-2-light" />
                </span>
              </button>
              <ul className="hidden">
                <li>links</li>
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
