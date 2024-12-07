import Link from "next/link";

const Nine_A_Export = () => {
  return (
    <div className=" mx-auto bg-white  space-y-4 max-w-4xl">
      <div
        class="p-4 mb-4 mt-8 text-sm text-white  bg-primary dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="font-medium">9A - Amended Export Invoices </span>
      </div>
      <div className="p-4">
        <div
          class="p-4 mb-4 mt-8 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span class="font-medium">There are no record to be displayed </span>
        </div>
        <div className="max-w-xl mx-auto grid grid-cols-2 gap-4">
          <div>
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Financial Year<span className="text-red-500">*</span>
            </label>

            <select
              id="financialyear"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>2024-25</option>
              <option value="">2023-24</option>
              <option value="">2022-23</option>
              <option value="">2021-22</option>
              <option value="">2020-21</option>
            </select>
          </div>
          <div>
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Invoice No.<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="small-input"
              class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="text-right my-4">
          <Link href="/dashboard/easy-gst-return/gstr/gstr1/amendrecorddetails/nine-a-exports/amend-export-9a">
            <button className="btn-primary">Amend Record</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nine_A_Export;
