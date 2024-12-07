import userAxios from '@/lib/userAxios';
import { useForm } from 'react-hook-form';
import React, { useCallback, useEffect, useState } from 'react';
import BProfileCard from './BProfileCard';
import { toast } from 'react-toastify';
import {
  defaultValuesBsProfile,
  labelKeyMapping,
} from './validation/staticData';
import GreenTick from './Tick';
import Loader from './Loader';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { bsProfileCreateSchema } from './validation/schemas';
import regex from '@/utils/regex';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const BusinessProfile = () => {
  const router = useRouter();

  // SAVES BUSINESS PROFILE IF EXISTS
  const [businessProfile, setBusinessProfile] = useState({});

  // LOADING STATES
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGstDetails, setIsLoadingGstDetails] = useState(false);
  const [editable, setEditable] = useState(false);

  // GST DETAILS FETCHED FROM API ~
  const [gstDetails, setGstDetails] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setValue,
    watch,
    reset,
  } = useForm({
    defaultValues: defaultValuesBsProfile,
    resolver: zodResolver(bsProfileCreateSchema),
  });

  const pan = watch('pan');
  const gstin = watch('gstin');
  const keysToBeCap = ['pan', 'gstin'];

  // FETCHES GST PROFILE BY GSTIN
  const getGstProfileByGstin = useCallback(async (gstin) => {
    try {
      setIsLoadingGstDetails(true);
      const { data, status } = await userAxios.get(
        `/gst/search/gstin/${gstin}`,
      );

      if (status === 200 && data && data.data && data.data.data) {
        setGstDetails(data.data.data);
      }
    } catch (error) {
      toast.error('Error while fetching gst profile!');
    } finally {
      setIsLoadingGstDetails(false);
    }
  }, []);

  useEffect(() => {
    if (editable && regex.GSTIN.test(gstin) && isDirty) {
      getGstProfileByGstin(gstin);
    }
  }, [editable, gstin, getGstProfileByGstin, isDirty]);

  // FETCHES AND SETS BUSINESS PROFILE
  const getBusinessProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get(`/business/profile`);
      const profile = data?.data?.profile;

      if (status === 200 && profile) {
        setBusinessProfile(profile);
        reset(profile);
        return true;
      }
    } catch (error) {
      if (error.response.status === 404) {
        return toast.info('No business profile created yet!');
      }
      toast.error('Failed to fetch business profile.');
    } finally {
      setIsLoading(false);
    }
  }, [reset, setBusinessProfile]);

  useEffect(() => {
    if (businessProfile.id) {
      reset(businessProfile);
    }
    if (!businessProfile.id) {
      getBusinessProfile();
    }
  }, [reset, businessProfile, getBusinessProfile]);

  // EVENT HANDLERS
  const handleEdit = () => {
    if (businessProfile.id) {
      reset(businessProfile);
    } else {
      reset(defaultValuesBsProfile);
    }
    return setEditable(!editable);
  };

  // FORM INPUT CHANGE HANDLER
  const onChangeHandler = (key, value) => {
    setValue(key, value);
  };

  // FORM SUBMIT HANDLER
  const formSubmitHandler = async (body) => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.post(`/business`, body);

      if (status === 200 && data) {
        toast.success(data.message);
        await getBusinessProfile();

        handleEdit();
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        return toast.error(error?.response?.data?.message);
      }
      toast.error('Failed to create business profile');
    } finally {
      setIsLoading(false);
    }
  };

  // UPDATES STATE CODE AND PANCARD WHEN GST CHANGES
  useEffect(() => {
    if (regex.GSTIN.test(gstin)) {
      const code = gstin.slice(0, 2);
      const pan = gstin.slice(2, 12);
      setValue('statecode', code);
      setValue('pan', pan);
    }
  }, [gstin, setValue, businessProfile]);

  // UPDATES FORM IF GST PROFILE EXISTS VIA API
  useEffect(() => {
    if (gstDetails.lgnm) {
      const address = gstDetails?.pradr?.addr;
      if (address) {
        setValue('businessName', gstDetails?.tradeNam);
        setValue('taxpayer_type', gstDetails?.dty);
        setValue('status', gstDetails?.sts);
        setValue('ctb', gstDetails?.ctb);
        setValue(
          'street',
          address.bno ? address.bno + ', ' + address?.st : address?.st,
        );
        setValue('landmark', address?.landMark);
        setValue('city', address?.loc);
        setValue('dst', address?.dst);
        setValue('stcd', address?.stcd);
      }
    }
  }, [businessProfile, gstDetails, setValue]);

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 my-2">
      {isLoading ? (
        <div className="flex col-span-2 justify-center items-center h-[70vh]">
          <Image src={'/loading.svg'} alt="Loading.." width={75} height={75} />
        </div>
      ) : (
        <>
          <BProfileCard businessProfile={businessProfile} />
          <div className="mx-5">
            <h1 className="text-3xl font-semibold text-slate-800 my-4">
              Your Business Profile
            </h1>
            <form className="my-2" onSubmit={handleSubmit(formSubmitHandler)}>
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                {Object.keys(defaultValuesBsProfile).map((key) => (
                  <>
                    <div key={key} className="relative w-full px-3">
                      <label
                        className={
                          'flex justify-between uppercase items-center tracking-wide text-gray-700 text-xs font-bold mb-2'
                        }
                        htmlFor={key}
                      >
                        {labelKeyMapping[key]}:{false && <GreenTick />}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${keysToBeCap.includes(key) ? 'placeholder:capitalize uppercase' : ''}`}
                          placeholder={`Enter ${labelKeyMapping[key]}`}
                          disabled={!editable}
                          id={key}
                          {...register(key, {
                            onChange: (e) =>
                              onChangeHandler(key, e.target.value),
                          })}
                        />
                        <div className="absolute right-[10px] top-[15px] flex items-center pointer-events-none">
                          {isLoadingGstDetails && <Loader />}
                        </div>
                      </div>
                      {errors[key] && (
                        <p className="text-red-500 text-sm">
                          {errors[key].message}
                        </p>
                      )}
                    </div>
                  </>
                ))}
              </div>
              <div className="flex justify-end items-center py-2 gap-3 px-3">
                {!editable ? (
                  <>
                    <p
                      onClick={handleEdit}
                      className="btn-primary select-none py-2"
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
                ) : null}
                {editable ? (
                  <>
                    <button type="submit" className="btn-primary py-2">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn-primary py-2"
                      onClick={handleEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : null}
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default BusinessProfile;
