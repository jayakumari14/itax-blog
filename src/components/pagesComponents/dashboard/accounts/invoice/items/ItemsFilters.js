import React from 'react';

const ItemsFilters = () => {
  return (
    <form className="grid md:grid-cols-[1fr_auto] gap-2 items-center mx-auto">
      <label
        htmlFor="default-search"
        className=" text-sm font-medium text-neutral-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full py-2 px-4 pe-6 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by name, id"
          required
        />
        <button
          type="submit"
          className="m-2 bg-neutral-50 dark:bg-neutral-900 absolute inset-y-0 end-0 flex items-center p-2"
        >
          {/* <Icon icon="zondicons:search" /> */}
          Search
        </button>
      </div>

      <div className="relative m-[2px] float-right ml-auto sm:block">
        <label htmlFor="inputFilter" className="sr-only">
          Filter
        </label>
        <select
          id="inputFilter"
          className="block w-40 rounded-lg border dark:border-none dark:bg-neutral-600 p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option value="1">Last week</option>
          <option value="2">Last month</option>
          <option value="3">Yesterday</option>
          <option value="4">Last 7 days</option>
          <option value="5">Last 30 days</option>
        </select>
      </div>
    </form>
  );
};

export default ItemsFilters;
