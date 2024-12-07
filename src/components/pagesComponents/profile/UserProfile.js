'use client';

// import useAuth from '@/hooks/useAuth';
// import Image from 'next/image';
// import { getCookie } from 'cookies-next';
// import { Icon } from '@iconify/react';
// import Image from 'next/image';
import Button from '@/components/ui/Button';
import userAxios from '@/lib/userAxios';
import userAxiosNext from '@/lib/userNextAxios';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import UserProfileCard from './UserProfileCard';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import regex from '@/utils/regex';
import { zodResolver } from '@hookform/resolvers/zod';
import { userCreate, userSchema } from './validation/schemas';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { parseNonNullObject } from '@/utils/utilityFunctions';

const UserProfile = () => {
  const router = useRouter();
  const { token } = useAuth();

  // DATA FOR PROFILE CARD ~ USER DETAILS
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // PAN CARD
  const [loading, setLoading] = useState(false);
  const [panDetails, setPanDetails] = useState('');

  // HOOK FORM
  const [editable, setEditable] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: userCreate,
    resolver: zodResolver(userSchema),
  });

  const panCard = watch('panCard');

  // EVENT HANDLERS
  const handleEditbutton = () => setEditable(!editable);

  // EDIT CANCEL HANDLER
  const editCancelHandler = () => {
    setEditable(!editable);
    reset(data);
  };

  // UPDATES USER DETAILS
  const submitHandler = async (data) => {
    const formData = new FormData();
    const BASE = process.env.NEXT_PUBLIC_BASE_URL;

    for (const key in data) {
      if (key === 'avatar') {
        formData.append(key, data[key]?.[0] ?? '');
      } else {
        formData.append(key, data[key] ?? '');
      }
    }

    try {
      setIsLoading(true);
      const { status } = await axios.put(`${BASE}/user/update`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      if (status === 200) {
        setEditable(!editable);
        return toast.success('Successfully updated!');
      }
      return toast.error('Failed to update!');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // FETCHES USER DETAILS
  const getUserDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get(`/user/profile`);

      if (status === 200 && data && data.data && data.data.user) {
        reset(parseNonNullObject(data.data.user));
        setData(data.data.user);
      }
    } catch (error) {
      toast.error('Error fetching user details.');
    } finally {
      setIsLoading(false);
    }
  }, [reset]);

  // FETCHES PAN DETAILS WITH USER INPUT
  const handlePanDetails = useCallback(
    async (pan) => {
      try {
        setLoading(true);
        const existingValues = getValues();
        const response = await userAxios.get(`/pan/get-pan-details?pan=${pan}`);
        setLoading(false);
        const data = response?.data?.data;

        if (!!data) {
          setPanDetails(data);
          setValue('firstName', data.first_name || existingValues?.fName);
          setValue('lastName', data.last_name || existingValues?.lName);
          setValue('email', data.email || existingValues?.email);
          setValue('phone', data.phone || existingValues?.mobile);
          setValue('address', data.address || existingValues?.address);
          setValue('gender', data.gender || existingValues?.gender);
          setValue('pin', data.pin || existingValues?.pin);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [getValues, setValue],
  );

  // FETCHES USER DETAILS ON RENDER
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  // PAN CARD HANDLER
  useEffect(() => {
    if (regex.PAN_CARD.test(panCard)) {
      handlePanDetails(panCard);
    }
  }, [panCard, handlePanDetails]);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <Image src={'/loading.svg'} alt="Loading.." width={75} height={75} />
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 my-2">
          <UserProfileCard panDetails={panDetails} data={data} />
          <div className="mx-5">
            <h1 className="text-3xl font-semibold text-slate-800 my-4">
              Your Profile
            </h1>

            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Pan
                    </label>
                    {loading && (
                      <svg
                        aria-hidden="true"
                        class="inline w-4 h-4  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                    {panDetails && (
                      <svg
                        class="w-4 h-4 me-2  text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                    )}
                  </div>

                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 uppercase placeholder:capitalize"
                    id="pan"
                    type="text"
                    disabled={!editable}
                    placeholder="Enter your pan card"
                    {...register('pan')}
                  />
                  {errors.pan && (
                    <span className="text-red-500 text-sm">
                      {errors.pan.message}
                    </span>
                  )}
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Aadhaar
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    id="aadhaar"
                    type="text"
                    disabled={!editable}
                    placeholder={'Enter your aadhaar'}
                    {...register('aadhaar')}
                  />
                  {errors.aadhaar && (
                    <span className="text-red-500 text-sm">
                      {errors.aadhaar.message}
                    </span>
                  )}
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    First Name
                  </label>

                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    id="firstName"
                    type="text"
                    placeholder={'Enter Your first name'}
                    disabled={!editable}
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Middle Name (If Applicable)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    id="middleName"
                    type="text"
                    placeholder="Enter your middle name"
                    disabled={!editable}
                    {...register('middleName')}
                  />
                  {errors.middleName && (
                    <span className="text-red-500 text-sm">
                      {errors.middleName.message}
                    </span>
                  )}
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    {...register('lastName')}
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    disabled={!editable}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    id="email"
                    disabled={!editable}
                    type="email"
                    {...register('email')}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    phone Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    id="mobile"
                    type="text"
                    disabled={!editable}
                    {...register('phone')}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="w-full px-3 mb-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Gender
                  </label>
                  <select
                    {...register('gender')}
                    id="gender"
                    disabled={!editable}
                    class="appearance-none capitalize block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option selected value="male">
                      Male
                    </option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-500 text-sm">
                      {errors.gender.message}
                    </span>
                  )}
                </div>

                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    id="address"
                    type="text"
                    placeholder="Enter your address"
                    {...register('address')}
                    disabled={!editable}
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">
                      {errors.address.message}
                    </span>
                  )}
                </div>
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="address"
                  >
                    Pin Code
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Enter your pin code"
                    disabled={!editable}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    {...register('pin')}
                  />
                  {errors.pin && (
                    <span className="text-red-500 text-sm">
                      {errors.pin.message}
                    </span>
                  )}
                </div>
                <div className="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="file_input"
                  >
                    Upload Profile photo
                  </label>
                  <input
                    disabled={!editable}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:capitalize"
                    id="file_input"
                    type="file"
                    {...register('avatar')}
                  />
                </div>

                <div className="flex gap-2 items-end justify-end">
                  {!editable ? (
                    <>
                      <p
                        className="btn-primary py-2 select-none"
                        role="button"
                        onClick={handleEditbutton}
                      >
                        Edit
                      </p>
                      <Button
                        type="button"
                        onClick={() => router.push('/')}
                        size={'md-1'}
                      >
                        Back
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size={'md-1'} type="submit">
                        Save
                      </Button>
                      <Button size={'md-1'} onClick={editCancelHandler}>
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
