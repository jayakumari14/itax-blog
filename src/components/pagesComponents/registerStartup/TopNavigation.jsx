import Link from 'next/link';
import { REGISTER_STARTUP_CATEGORIES } from './staticData';

export const TopNavigation = ({ selectedCategory }) => {
  return (
    <div className="my-5 z-10 px-3">
      <div
        className="border mx-auto p-3 md:max-w-7xl grid gap-2 md:rounded-full shadow-md rounded-md"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        }}
      >
        {Object.keys(REGISTER_STARTUP_CATEGORIES).map((item) => (
          <Link
            href={`/register-startup/${item}`}
            key={item}
            className={`${
              selectedCategory === item
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300'
            }  text-slate-900 items-center justify-center w-full py-1 sm:py-3 font-semibold text-center cursor-pointer transition-all transform duration-300 ease-in-out hover:shadow-md rounded-full`}
          >
            {REGISTER_STARTUP_CATEGORIES[item]}
          </Link>
        ))}
      </div>
    </div>
  );
};
