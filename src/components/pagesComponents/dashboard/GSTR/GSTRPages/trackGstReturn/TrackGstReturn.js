'use client';

import Loader from '@/components/partials/loading/Loader';
import { getTrackGstReturn } from '@/helper/api/gstrApi';
import { useEffect, useState } from 'react';

export default function TrackGstReturn({ businessProfile }) {
  const [EFiledlist, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState('FY 2023-24');

  async function getData() {
    try {
      const options = {
        gstin: businessProfile?.gstin,
        financialYear: year,
      };
      if (options.financialYear && options.gstin) {
        setLoading(true);
        const data = await getTrackGstReturn(options);
        setData(data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [year, businessProfile?.gstin]);

  return (
    <div className="p-4 max-w-7xl w-[calc(100%-2rem)] mx-auto mt-4 bg-neutral-50">
      <div className="p-2 rounded-md bg-white shadow-md">
        <div className="shadow-inner shadow-neutral-500/50 rounded-md p-2 bg-gray-200">
          <button
            className={`rounded-md grid place-content-center text-xs md:text-sm py-1 px-2`}
            type="button"
          >
            CHECK-RETURN-STATUS
          </button>
        </div>

        <div className="flex m-2 gap-3">
          <div>
            <label htmlFor="financialYear">Financial Year</label>
            <select
              onChange={(e) => setYear(e.target.value)}
              defaultValue={year}
              className="form-input w-full border p-[10px] border-blue-500 rounded"
              aria-label="Default select example"
            >
              <option value="FY 2023-24">2023-24</option>
              <option value="FY 2022-23">2022-23</option>
              <option value="FY 2021-22">2021-22</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="gst">GSTIN</label>
            <input
              className="form-input w-full border p-2 cursor-not-allowed bg-slate-200 rounded"
              type="text"
              placeholder="Enter your gstin"
              disabled
              value={businessProfile?.gstin || ''}
            />
          </div>
        </div>

        {error && (
          <div className="grid min-h-56 place-content-center">
            {error.message}
          </div>
        )}
        {loading ? (
          <div className="flex justify-center items-center min-h-[600px]">
            <Loader />
          </div>
        ) : (
          <ul className="mx-auto grid gap-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] p-2">
            {EFiledlist &&
              EFiledlist?.EFiledlist?.map((item, key) => (
                <li key={`${item.rtntype} ${key}`}>
                  <div className="block border my-3 rounded-lg shadow-lg bg-white md:max-w-sm text-center">
                    <div className="py-3 px-6 border-b border-gray-300">
                      <h6 className="text-center font-semibold">
                        {item.rtntype}
                      </h6>
                    </div>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">
                        ARN No. - {item.arn}
                      </h5>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>Date Of Filing - {item.dof}</li>
                        <li>Mode Of Filing - {item.mof}</li>
                        <li>Return Period - {item.ret_prd}</li>
                        <li>Valid - {item.valid}</li>
                      </ul>
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Status - {item.status}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
