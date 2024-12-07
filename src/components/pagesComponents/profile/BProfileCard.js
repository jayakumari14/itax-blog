import Image from 'next/image';
import { Icon } from '@iconify/react';

const BProfileCard = ({ businessProfile }) => {
  const address =
    `${businessProfile?.street ? businessProfile.street + ',' : ''} ${businessProfile?.landmark ? businessProfile.landmark + ',' : ''} ${businessProfile?.city ? businessProfile.city + ',' : ''} ${businessProfile?.dst ? businessProfile.dst + ',' : ''} ${businessProfile?.stcd ? businessProfile.stcd + ',' : ''}`.trim();

  const profile = {
    businessName: 'Name',
    pan: 'PAN card',
    taxpayer_type: 'Tax Payer Type',
    status: 'Status',
    ctb: 'CTB',
    gstin: 'GST number',
  };

  return (
    <div className="mx-4 bg-white shadow-md border rounded-lg text-gray-900">
      <div className="rounded-t-lg h-36 overflow-hidden">
        <Image
          className="w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
          width={400}
          height={300}
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        {businessProfile?.user?.avatar ? (
          <Image
            className="w-full"
            src={businessProfile?.user?.avatar}
            alt="User Profile"
            width={400}
            height={300}
          />
        ) : (
          <Icon
            className="text-9xl bg-neutral-50 text-neutral-950 rounded-xl p-2 sm:p-6"
            icon="mdi:user"
          />
        )}
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{businessProfile?.businessName}</h2>
      </div>

      <div className="p-4 border-t mt-2">
        <div className="grid grid-cols-3 gap-2 my-2">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key} className="flex flex-col pb-3">
              <dt className="mb-1 capitalize text-gray-500 md:text-xs dark:text-gray-400">
                {value}
              </dt>
              <dd className="text-xs font-semibold">
                <p>{businessProfile[key]}</p>
              </dd>
            </div>
          ))}
          <div className="flex flex-col pb-3 col-span-3">
            <dt className="mb-1 capitalize text-gray-500 md:text-xs dark:text-gray-400">
              Address:
            </dt>
            <dd className="text-xs font-semibold">
              <p className="capitalize">{address}</p>
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BProfileCard;
