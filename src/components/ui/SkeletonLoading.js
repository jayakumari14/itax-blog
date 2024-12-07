import React from 'react';

const SkeletonLoading = () => {
  return (
    <div className="md:w-[calc(100%-3rem)] w-[calc(100%-1rem)] px-2 mx-auto">
      <div className="animate-pulse flex space-x-3">
        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
