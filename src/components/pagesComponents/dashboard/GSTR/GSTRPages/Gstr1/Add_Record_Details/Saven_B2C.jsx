"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import userAxios from "@/lib/userAxios";

const Saven_B2C = () => {
    const [activetav, setActiveTab] = useState(1);
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleTab = (e) => {
        setActiveTab(e);
    };
    const handle7B2CSubmit = (data) => {
        userAxios
            .post(`/gstr1/7a-create`, {
                gstn: "123400",
                pos: "1234",
                taxable_value: "124",
                supply_type: "1255",
                rate: "123",
                central_tax: "122",
                state_tax: "125",
                cess: "1245",
                place_of_supply: "1254",
                total_taxable: "111",
                integrated: "124",
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("data+", data);
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(handle7B2CSubmit)}
                className="p-2 max-w-lg m-auto  space-y-4"
            >
                <p>GSTN:-</p>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr>
                            <td className="px-6 py-3">POS</td>
                            <td>
                                <select
                                    {...register("pos")}
                                    id="pos"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>37 Andhra Pradesh</option>
                                    <option value="">
                                        12 Anranchal Pradesh{" "}
                                    </option>
                                    <option value="">18 Assam</option>
                                    <option value="">10 Bihar</option>
                                    <option value="">22 Chhattisgarh</option>
                                    <option value="">30 Goa</option>
                                    <option value="">24 Gujarat</option>
                                    <option value="">6 Haryana</option>
                                    <option value="">
                                        02 Himanchal Pradesh
                                    </option>
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
                                    <option value="">
                                        {" "}
                                        35 Andaman and Nicobar Island
                                    </option>
                                    <option value=""> 04 Chandigarh</option>
                                    <option value="">
                                        {" "}
                                        26 Dadar and Nagar Haveli Daman And Diu
                                    </option>
                                    <option value=""> 31 Lakshadweep</option>
                                    <option value=""> 07 Delhi</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Taxable Value</td>
                            <td>
                                <input
                                    {...register("taxable_value")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Supply Type</td>
                            <td>
                                <input
                                    {...register("supply_type")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Rate</td>
                            <td>
                                <input
                                    {...register("rate")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Central Tax</td>
                            <td>
                                <input
                                    {...register("central_tax")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">State Tax</td>
                            <td>
                                <input
                                    {...register("state_tax")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">Cess</td>
                            <td>
                                <input
                                    {...register("cess")}
                                    type="text"
                                    id="base-input"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex items-center p-2 md:p-2  border-gray-200 rounded-b dark:border-gray-600">
                    <button
                        data-modal-hide="static-modal"
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add
                    </button>
                </div>
            </form>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Place Of Supply
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rate
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Taxable
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Integrated
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Central Tax
                            </th>
                            <th scope="col" class="px-6 py-3">
                                State Tax
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cess
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>

            {/* Modal footer */}
        </>
    );
};

export default Saven_B2C;
