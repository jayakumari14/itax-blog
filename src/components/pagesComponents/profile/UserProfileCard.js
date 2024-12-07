import { Icon } from '@iconify/react';
import Image from 'next/image';

const UserProfileCard = ({ data, panDetails }) => {
  return (
    <div className="mx-4 bg-white shadow-md border rounded-lg text-gray-900">
      <div className="rounded-t-lg h-36 overflow-hidden">
        <Image
          src={
            'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
          }
          alt="Mountain"
          className="w-full"
          width={400}
          height={300}
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        {data.avatar ? (
          <Image
            width={100}
            height={100}
            src={data.avatar}
            className="w-full object-contain"
            alt={'User profile'}
          />
        ) : (
          <Icon
            className="text-9xl bg-neutral-50 text-neutral-950 rounded-xl p-2 sm:p-6"
            icon="mdi:user"
          />
        )}
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">
          {data.firstName || ''} {data.lastName || ''}
        </h2>
        <p className="text-gray-500">{data.email || ''}</p>
      </div>
      <ul className="grid grid-cols-2 gap-2 py-4 mt-2 border-b text-gray-700">
        <li className="flex flex-col items-center justify-around">
          {data.aadhaar === '' || data.aadhaar === null ? (
            <svg
              className="w-4 h-4 me-2 mt-5 text-red-500 dark:text-text-400 flex-shrink-0 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          )}

          <div>Aadhaar</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          {data.panCard === '' || data.panCard === null ? (
            <svg
              className="w-4 h-4 me-2 mt-5 text-red-500 dark:text-text-400 flex-shrink-0 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          )}
          <div>Pan</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <div>Business Profile</div>
        </li>

        <li className="flex flex-col items-center justify-between">
          {panDetails.aadhaar_seeding_status !== 'Y' ? (
            <svg
              className="w-4 h-4 me-2 mt-5 text-red-500 dark:text-text-400 flex-shrink-0 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          )}
          <div>Pan Aadhaar Link</div>
        </li>
      </ul>
    </div>
  );
};

export default UserProfileCard;
