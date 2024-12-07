"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";

import userAxios from "@/lib/userAxios";

function BusinessProfile_Form(props) {
  const { register, watch, editable } = props;
  const formClassName = {
    label: "text-blue-700 font-semibold text-sm",
    inputValue:
      "border border-blue-600/10 rounded w-full py-2 px-3 min-h-[42px]",
    input: "shadow-md border border-blue-600 rounded w-full py-2 px-3 text-sm",
  };
  return (
    <ul className="grid md:grid-cols-2 gap-4 sm:gap-6 p-2">
      <li>
        <label className={formClassName.label} htmlFor="businessName">
          Trade Name:
        </label>
        {editable ? (
          <input
            className={formClassName.input}
            type="text"
            id="businessName"
            {...register("businessName")}
          />
        ) : (
          <div className={formClassName.inputValue}>
            <input value={watch.businessName} />

            {/* {watch("businessName")} */}
          </div>
        )}
      </li>
      <li>
        <label className={formClassName.label} htmlFor="CompanyPanNumber">
          PAN :
        </label>
        {editable ? (
          <input
            className={formClassName.input}
            type="text"
            id="CompanyPanNumber"
            {...register("CompanyPanNumber")}
          />
        ) : (
          <div className={formClassName.inputValue}>
            <input value={watch.pan} />

            {/* {watch("CompanyPanNumber")} */}
          </div>
        )}
      </li>
      <li>
        <label className={formClassName.label} htmlFor="CompanyTanNumber">
          Tax Payer Type:
        </label>
        {editable ? (
          <input
            className={formClassName.input}
            type="text"
            id="CompanyTanNumber"
            {...register("CompanyTanNumber")}
          />
        ) : (
          <div className={formClassName.inputValue}>
            <input value={watch.tan} />

            {/* {watch("CompanyTanNumber")} */}
          </div>
        )}
      </li>

      <li>
        <label className={formClassName.label} htmlFor="GSTNumber">
          GST Number:
        </label>
        {editable ? (
          <input
            className={formClassName.input}
            type="text"
            id="GSTNumber"
            {...register("GSTNumber")}
          />
        ) : (
          <div className={formClassName.inputValue}>
            <input value={watch.gstin} />
            {/* {watch("GSTNumber")} */}
          </div>
        )}
      </li>

      <li>
        <label className={formClassName.label} htmlFor="bankName">
          Status:
        </label>
        {editable ? (
          <input
            className={formClassName.input}
            type="text"
            id="bankName"
            {...register("bankName")}
          />
        ) : (
          <div className={formClassName.inputValue}>
            <input value={watch.bankName} />

            {/* {watch("bankName")} */}
          </div>
        )}
      </li>
      <li>
        <label className={formClassName.label} htmlFor="ctb">
          Ctb:
        </label>
        {editable ? (
          <input
            className={formClassName.input}
            type="text"
            id="ctb"
            {...register("ctb")}
          />
        ) : (
          <div className={formClassName.inputValue}>
            <input value={watch.bankAccountNo} />
            {/* {watch("GSTNumber")} */}
          </div>
        )}
      </li>

      <li className="col-span-2">
        <label className={formClassName.label} htmlFor="address">
          Address
        </label>
        {editable ? (
          <input
            className={formClassName.input}
            type="text"
            id="address"
            {...register("address")}
          />
        ) : (
          <div className={formClassName.inputValue}>
            <input className="w-full" value={watch.address} />

            {/* {watch("address")} */}
          </div>
        )}
      </li>
    </ul>
  );
}

export default function BusinessProfile() {
  const [panDetils, setPanDetails] = useState("");
  const [panAddDetils, setPanAddDetails] = useState("");
  const [activetav, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [createBusineess, setCreateBusiness] = useState(true);
  const [editable, setEditable] = useState(false);
  const [BusinessProfileResponse, setBusinessProfileResponse] = useState("");

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const handleTab = (e) => {
    setActiveTab(e);
  };

  useEffect(() => {
    userAxios
      .get(`/business/profile`)
      .then(function (response) {
        console.log(response.data.data.profile);
        // setData(response.data);

        setBusinessProfileResponse(response.data.data.profile);
        setCreateBusiness(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleEdit = () => {
    setEditable(true);
  };
  const handleCancelEdit = () => {
    setEditable(false);
    setValue("businessName", BusinessProfileResponse?.businessName);
    // setValue("businessLegalName", BusinessProfileResponse?.businessLegalName)
    setValue("CompanyPanNumber", BusinessProfileResponse?.pan);
    setValue("CompanyTanNumber", BusinessProfileResponse?.tan);
    setValue("MSMENumber", BusinessProfileResponse?.MSMENumber);
    setValue("GSTNumber", BusinessProfileResponse?.gstin);
    setValue("bankName", BusinessProfileResponse?.bankName);
    setValue("address", BusinessProfileResponse?.address);
    setValue("BankAccountDetails", BusinessProfileResponse?.BankAccountDetails);
    setValue(
      "incorporationCertificationDetails",
      BusinessProfileResponse?.incorporationCertificationDetails
    );
    setValue("address", BusinessProfileResponse?.address);
  };
  const handleSaveEdit = (data) => {
    // const updateProfile = async()=>{
    //     const resp = await userAxios.put(`/business/profile/${"51"}`, data, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     console.log(resp)
    // }
    console.log(data);
  };

  const handleCreateBusinessProfile = () => {
    userAxios
      .post(`/business`, {
        businessName: panDetils.tradeNam,
        gstin: panDetils.gstin,
        pan: getValues("pan"),
        tan: panDetils.dty,
        address: panAddDetils,
        bankName: panDetils.sts,
        bankAccountNo: panDetils.ctb,
        bankIfsc: "",
        bankBranch: "",
        state: "",
      })
      .then(function (response) {
        // console.log(response.data);
        toast.success("Successfully Created");

        setCreateBusiness(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlePanInput = () => {
    // console.log(getValues(["pan", "statecode"]));
    let panno = getValues("pan");
    let statecode = getValues("statecode");
    if (statecode.length === 2) {
      setLoading(true);
      userAxios
        .get(
          `/gst/search/gstin-by-pan?pan=${panno}&gst_state_code=${statecode}`
        )
        .then(function (response) {
          setPanDetails(response.data.data[0].data);
          setPanAddDetails(
            `${response.data.data[0].data.pradr.addr.bno},${response.data.data[0].data.pradr.addr.landMark},${response.data.data[0].data.pradr.addr.st},${response.data.data[0].data.pradr.addr.dst},${response.data.data[0].data.pradr.addr.stcd}`
          );
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const handleInputChange = (event) => {
    if (event.target.value) {
      event.target.value = event.target.value.toUpperCase();
    }
  };
  const formClassName = {
    label: "text-blue-700 font-semibold text-sm",
    inputValue:
      "border border-blue-600/10 rounded w-full py-2 px-3 min-h-[42px]",
    input: "shadow-md border border-blue-600 rounded w-full py-2 px-3 text-sm",
  };

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap-mb-px justify-center">
          <li className="me-2">
            <button
              className={
                activetav === 1
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              onClick={(e) => handleTab(1)}
            >
              User Proflie
            </button>
          </li>
          <li className="me-2">
            <button
              className={
                activetav === 2
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              onClick={(e) => handleTab(2)}
            >
              Business Proflie
            </button>
          </li>
        </ul>
      </div>

      {activetav === 2 && (
        <>
          <div className="max-w-7xl mx-auto px-4 grid gap-2 grid-cols-1 lg:grid-cols-2">
            <div className="mx-auto bg-gradient-to-br from-blue-800 to-neutral-900  max-w-[500px] my-6 p-6 sm:px-6 flex flex-wrap justify-center gap-4  dark:bg-bg_2/20 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded-md border border-txt/10">
              <div className="flex-[1_1_2rem] max-w-[9rem] grid place-content-center">
                <Icon
                  className="text-9xl bg-neutral-50 text-neutral-950 rounded-xl p-2 sm:p-6"
                  icon="mdi:user"
                />
              </div>
              <ul className=" grid grid-cols-2 gap-4 text-neutral-200">
                <li className="text-lg leading-8 font-mediu col-span-2 text-center">
                  <span className="font-semibold text-neutral-50">
                    Trade Name:{" "}
                  </span>
                  <div className=" underline underline-offset-2 text-sm min-h-10">
                    {BusinessProfileResponse?.businessName}
                  </div>
                </li>
                <li className="leading-6 mt-1 max-w-2xl">
                  <label className="font-semibold text-sm text-neutral-50">
                    PAN :
                  </label>
                  <div>{BusinessProfileResponse?.pan}</div>
                </li>
                <li className="leading-6 mt-1 max-w-2xl">
                  <label className="font-semibold text-sm text-neutral-50">
                    Tax Payer Type:
                  </label>
                  <div className=" underline underline-offset-2 text-sm min-h-10">
                    {BusinessProfileResponse?.tan}
                  </div>
                </li>
                {/* <li className="leading-6 mt-1 max-w-2xl">
                  <label className="font-semibold text-sm text-neutral-50">
                    MSME Number:
                  </label>
                  <div className=" underline underline-offset-2 text-sm min-h-10">
                    {BusinessProfileResponse?.MSMENumber}
                  </div>
                </li> */}
                <li className="leading-6 mt-1 max-w-2xl">
                  <label className="font-semibold text-sm text-neutral-50">
                    GST Number:
                  </label>
                  <div className=" underline underline-offset-2 text-sm min-h-10">
                    {BusinessProfileResponse?.gstin}
                  </div>
                </li>
                <li className="leading-6 mt-1 max-w-2xl">
                  <label className="font-semibold text-sm text-neutral-50">
                    Status:
                  </label>
                  <div className=" underline underline-offset-2 text-sm min-h-10">
                    {BusinessProfileResponse?.bankName}
                  </div>
                </li>
                <li className="leading-6 mt-1 max-w-2xl">
                  <label className="font-semibold text-sm text-neutral-50">
                    Ctb:
                  </label>
                  <div className=" underline underline-offset-2 text-sm min-h-10">
                    {BusinessProfileResponse?.bankAccountNo}
                  </div>
                </li>
                <li className="leading-6 col-span-2 mt-1 max-w-2xl">
                  <label className="font-semibold text-sm text-neutral-50">
                    Address:
                  </label>
                  <div className=" underline underline-offset-2 text-sm min-h-10">
                    {BusinessProfileResponse?.address}
                  </div>
                </li>
              </ul>
            </div>
            {createBusineess === true ? (
              <div className=" mx-auto">
                <form
                  className="shadow-md border rounded-md my-6 p-6 sm:px-6"
                  onSubmit={handleSubmit(handleCreateBusinessProfile)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative w-full">
                      <label className={formClassName.label} htmlFor="pan">
                        PAN :
                      </label>

                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="enter pan no "
                        required
                        id="pan"
                        {...register("pan", {
                          onChange: handleInputChange,
                        })}
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
                        {loading && (
                          <svg
                            aria-hidden="true"
                            class="inline w-4 h-4 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}
                        {panDetils && (
                          <svg
                            class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="relative w-full">
                      <label className={formClassName.label} htmlFor="pan">
                        State Code :
                      </label>

                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="statecode"
                        required
                        type="number"
                        id="statecode"
                        {...register("statecode", {
                          onChange: handlePanInput,
                        })}
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
                        {loading && (
                          <svg
                            aria-hidden="true"
                            class="inline w-4 h-4 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}
                        {panDetils && (
                          <svg
                            class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="relative w-full">
                      <label className={formClassName.label} htmlFor="pan">
                        Trade Name:
                      </label>

                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="businessName "
                        required
                        id="businessName"
                        value={panDetils.lgnm}
                        {...register("businessName")}
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
                        {loading && (
                          <svg
                            aria-hidden="true"
                            class="inline w-4 h-4 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}
                        {panDetils && (
                          <svg
                            class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="relative w-full">
                      <label className={formClassName.label} htmlFor="pan">
                        Tax Payer Type :
                      </label>

                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="tax payer "
                        required
                        type="text"
                        id="Type"
                        value={panDetils.dty}
                        {...register("Type")}
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
                        {loading && (
                          <svg
                            aria-hidden="true"
                            class="inline w-4 h-4 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}
                        {panDetils && (
                          <svg
                            class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="relative w-full">
                      <label className={formClassName.label} htmlFor="pan">
                        GST Number:
                      </label>

                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="GST Number "
                        required
                        id="GSTNumber"
                        value={panDetils.gstin}
                        {...register("GSTNumber")}
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
                        {loading && (
                          <svg
                            aria-hidden="true"
                            class="inline w-4 h-4 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}
                        {panDetils && (
                          <svg
                            class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="relative w-full">
                      <label className={formClassName.label} htmlFor="pan">
                        Status:
                      </label>

                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=" Status "
                        required
                        type="text"
                        id="Status"
                        value={panDetils.sts}
                        {...register("Status")}
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
                        {loading && (
                          <svg
                            aria-hidden="true"
                            class="inline w-4 h-4 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}
                        {panDetils && (
                          <svg
                            class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="relative w-full">
                      <label className={formClassName.label} htmlFor="ctb">
                        CTB:
                      </label>

                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ctb "
                        required
                        id="ctb"
                        value={panDetils.ctb}
                        {...register("ctb")}
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
                        {loading && (
                          <svg
                            aria-hidden="true"
                            class="inline w-4 h-4 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}
                        {panDetils && (
                          <svg
                            class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <label className={formClassName.label} htmlFor="pan">
                      Address:
                    </label>

                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" Address "
                      required
                      type="text"
                      id="Address"
                      value={panAddDetils}
                      {...register("Address")}
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
                      {loading && (
                        <svg
                          aria-hidden="true"
                          class="inline w-4 h-4 mt-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      )}
                      {panDetils && (
                        <svg
                          class="w-4 h-4 me-2 mt-5 text-green-500 dark:text-green-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="h-10  mt-6 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                  >
                    Create
                  </button>
                </form>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(handleSaveEdit)}
                className="shadow-md border rounded-md my-6 p-6 sm:px-6"
              >
                <div className="flex justify-end gap-4 p-2">
                  {editable ? (
                    <>
                      <button
                        onClick={handleSaveEdit}
                        className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                      >
                        save
                      </button>
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={handleEdit}
                      className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                    >
                      Edit
                    </button>
                  )}
                </div>
                <BusinessProfile_Form
                  register={register}
                  watch={BusinessProfileResponse}
                  editable={editable}
                />
              </form>
            )}
          </div>
        </>
      )}
    </>
  );
}
