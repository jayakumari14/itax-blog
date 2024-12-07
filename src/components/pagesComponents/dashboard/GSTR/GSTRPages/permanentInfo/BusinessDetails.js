'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function BusinessDetails({ businessProfile }) {
  const [bProfile] = useState(businessProfile.response.data.profile);

  return (
    <div className="p-2 rounded-md bg-white shadow-md">
      <div className=" shadow-inner shadow-neutral-500/50 rounded-md p-2 bg-gray-200">
        <button
          className={`rounded-md grid place-content-center text-xs md:text-sm py-1 px-2`}
          type="button"
        >
          Business Details
        </button>
      </div>
      <div className="bg-white lg:mx-0 mx-auto max-w-[500px] my-6 p-6 sm:px-6 flex flex-wrap justify-center gap-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded-md border border-txt/10">
        <div
          className="flex-[1_1_2rem] grid
                  bg-gradient-to-br from-blue-700 to-neutral-900  text-white 
                  max-w-64 min-h-32 p-4 rounded-md
                  space-y-2
                  "
        >
          <span className="text-7xl  bg-neutral-50 text-neutral-950 rounded-md p-2 sm:p-6 grid place-content-center">
            <Icon icon="mdi:user" />
          </span>
        </div>
        <ul className=" grid grid-cols-2 gap-2 text-black">
          <li>
            <span className="text-sm font-semibold">Trade Name:</span>
            <div className=" underline underline-offset-2 text-xs">
              {bProfile.businessName}
            </div>
          </li>
          <li>
            <span className="text-sm font-semibold">PAN :</span>
            <div className=" underline underline-offset-2 text-xs">
              {bProfile.pan}
            </div>
          </li>
          <li>
            <span className="text-sm font-semibold">Tax Payer Type:</span>
            <div className=" underline underline-offset-2 text-xs">
              {bProfile?.taxpayer_type}
            </div>
          </li>
          <li>
            <span className="text-sm font-semibold">GST Number:</span>
            <div className=" underline underline-offset-2 text-xs">
              {bProfile.gstin}
            </div>
          </li>
          <li>
            <span className="text-sm font-semibold">Bank Name:</span>
            <div className=" underline underline-offset-2 text-xs">
              {bProfile?.bankName || 'N/A'}
            </div>
          </li>
          <li>
            <span className="text-sm font-semibold">CTB:</span>
            <div className=" underline underline-offset-2 text-xs">
              {bProfile?.ctb}
            </div>
          </li>
          <li className=" col-span-2">
            <span className="text-sm font-semibold">Address:</span>
            <div className=" underline underline-offset-2 text-xs">
              {bProfile.address}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
