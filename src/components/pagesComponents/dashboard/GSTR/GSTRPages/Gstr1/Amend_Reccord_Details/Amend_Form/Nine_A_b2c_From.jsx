import React from "react";

const Nine_A_b2c_From = () => {
  return (
    <div className=" mx-auto bg-white  space-y-4 max-w-4xl">
      <div
        class="p-4 mb-4 mt-8 text-sm text-white  bg-primary dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="font-medium"> B2C - Amend Invoices </span>
      </div>
      <p class="mb-2 text-sm text-right  text-gray-900 dark:text-white">
        <span className="text-red-500 text-end ">*</span> Indicates mandatory
        Field
      </p>
      <div className="grid text-sm grid-cols-3 gap-4 bg-gray-100 p-2">
        <div>
          <input type="checkbox" />
          <label>&nbsp;Deerned Export </label>
        </div>

        <div>
          <input type="checkbox" />
          <label>&nbsp;Sez Supplies with payment </label>
        </div>

        <div>
          <input type="checkbox" />
          <label>&nbsp;Sez Supplies without payment </label>
        </div>
      </div>
      <div className="p-2 grid text-sm grid-cols-3 gap-4">
        <div>
          <input type="checkbox" />
          <label>&nbsp;Supply attreact reverse charge </label>
        </div>

        <div>
          <input type="checkbox" />
          <label> &nbsp;Intra-State Supplies attreacting IGST</label>
        </div>
      </div>
      <div className="bg-gray-100 p-2 text-sm">
        <input type="checkbox" />
        <label>
          &nbsp; Is the supply eligible to be taxed at a differential percentage
          (%) of the existing rate of tax, as notified by the Goverment?
        </label>
      </div>
      <div className="grid text-sm grid-cols-3 gap-4 p-2">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Recipient GSTIN/UIN
            <span className="text-red-500 text-end ">*</span>
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Recipient Name
            <span className="text-red-500 text-end ">*</span>
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name as in master
            <span className="text-red-500 text-end ">*</span>
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="bg-gray-100 p-2">
        <p class="mb-2 text-sm  text-gray-900 dark:text-white">
          GSTIN not present in master/ GSTIN is selected as supplier only.
        </p>
        <button className="btn-primary">ADD TO MASTER</button>
      </div>
      <div className="grid text-sm grid-cols-3 gap-4 p-2">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Revised/Orginal Invoice
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Revised/Orginal Invoice Date
            <span className="text-red-500 text-end ">*</span>
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Revised Invoice No.
            <span className="text-red-500 text-end ">*</span>
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="grid text-sm grid-cols-3 gap-4 p-2 bg-gray-100">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Revised Date <span className="text-red-500 text-end ">*</span>
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Total Invoice value (₹)
            <span className="text-red-500 text-end ">*</span>
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            POS
            <span className="text-red-500 text-end ">*</span>
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>37 Andhra Pradesh</option>
            <option value="">12 Anranchal Pradesh </option>
            <option value="">18 Assam</option>
            <option value="">10 Bihar</option>
            <option value="">22 Chhattisgarh</option>
            <option value="">30 Goa</option>
            <option value="">24 Gujarat</option>
            <option value="">6 Haryana</option>
            <option value="">02 Himanchal Pradesh</option>
            <option value="">20 Jharkhand</option>
            <option value="">29 Karnataka</option>
            <option value="">32 Kerala</option>
            <option value="">23 Madhya Pradesh</option>
            <option value="">27 Maharashtra</option>
            <option value="">14 Manipur</option>
            <option value="">17 Meghalaya</option>
            <option value="">15 Mizoram</option>
            <option value=""> 13 Nagaland</option>
            <option value=""> 21 Odisha</option>
            <option value=""> 03 Punjab</option>
            <option value=""> 08 Rajasthan</option>
            <option value=""> 11 Sikkim</option>
            <option value=""> 33 Tamil Nadu</option>
            <option value=""> 36 Telangana</option>
            <option value=""> 16 Tripura</option>
            <option value=""> 09 Uttar Pradesh</option>
            <option value=""> 05 Uttarakhand</option>
            <option value=""> 19 West Bengal</option>
            <option value=""> 35 Andaman and Nicobar Island</option>
            <option value=""> 04 Chandigarh</option>
            <option value=""> 26 Dadar and Nagar Haveli Daman And Diu</option>
            <option value=""> 31 Lakshadweep</option>
            <option value=""> 07 Delhi</option>
          </select>
        </div>
      </div>
      <div className="grid text-sm grid-cols-3 gap-4 p-2">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Supply Type
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <p>Item Details</p>
      <div class="relative overflow-x-auto">
        <table class="w-full border border-slate-500  text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                class="border border-slate-600 px-6 py-3"
                rowSpan={2}
              >
                {" "}
                Rate (%)
              </th>
              <th
                scope="col"
                class="border border-slate-600 px-6 py-3"
                rowSpan={2}
              >
                {" "}
                Taxable value(₹)
                <span className="text-red-500 text-end ">*</span>
              </th>
              <th scope="col" className="text-center" colSpan={3}>
                Amount of Tax
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-slate-600"></th>
              <th className="border border-slate-600"></th>

              <th class="border border-slate-600 ">
                Central tax <span className="text-red-500 ">*</span>
              </th>
              <th class="border border-slate-600 ">
                State/UT tax <span className="text-red-500">*</span>
              </th>
              <th class="border border-slate-600 ">Cess</th>
            </tr>
            <tr>
              <td className="border border-slate-600">0%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">0.1%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">0.25%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">1%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600"> 1.5%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">3%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">5%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">6%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">7.5%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">12%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">18%</td>
              <td>
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td>
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td>
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td>
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600">28%</td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  disabled
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="float-end">
        <button className="btn-primary">Save</button>
      </div>
    </div>
  );
};

export default Nine_A_b2c_From;
