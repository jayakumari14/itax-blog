import SkeletonLoading from '@/components/ui/SkeletonLoading';
import { FaCheckCircle } from 'react-icons/fa';
import { HiMiniNoSymbol } from 'react-icons/hi2';

export default function GSTRInfo({ gstrReturnTrack, isLoading }) {
  const iconMap = {
    filed: <FaCheckCircle />,
    pending: <HiMiniNoSymbol size={20} />,
  };

  return (
    <>
      {isLoading ? (
        <div className="md:w-[calc(100%-3rem)] w-[calc(100%-1rem)] px-2 mx-auto">
          <SkeletonLoading />
        </div>
      ) : (
        <ul
          className={`
        grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] divide-x
        font-semibold text-sm bg-primary/70 text-white [&>li]:px-2
        p-3 rounded-md md:w-[calc(100%-3rem)] w-[calc(100%-1rem)] mx-auto
        `}
        >
          {Array.isArray(gstrReturnTrack) && gstrReturnTrack.length ? (
            gstrReturnTrack.map((track, i) => (
              <li
                className="flex justify-center uppercase font-semibold gap-2 items-center"
                key={i}
              >
                {track.rtntype} is {track.status}{' '}
                {iconMap[`${track.status}`.toLowerCase()]}
              </li>
            ))
          ) : (
            <li>No GST returns found!</li>
          )}
        </ul>
      )}
    </>
  );
}
