'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import userAxios from '@/lib/userAxios';
import { formatINRCurrency } from '@/utils/utilityFunctions';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import AddToCart from './AddtoCart';
import useAuth from '@/hooks/useAuth';

const validateFile = (file) => {
  if (!file) return false;

  const actualFile = file[0];

  if (actualFile) {
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const isValidType = validTypes.includes(actualFile.type);
    const isValidSize = actualFile.size <= 1 * 1024 * 1024; // 1MB
    return isValidType && isValidSize;
  }
  return false;
};

const fileSchema = z
  .any()
  .refine((file) => file instanceof FileList, { message: 'Must be a file' })
  .refine(validateFile, {
    message: 'File must be a PDF or Image and less than 1MB',
  });

const userDocuments = z.object({
  aadhaarCard: fileSchema,
  panCard: fileSchema,
  gstCertificate: fileSchema,
  photo: fileSchema,
});

function RegisterStartUpDetails({ params }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      aadhaarCard: null,
      panCard: null,
      gstCertificate: null,
      photo: null,
    },
    resolver: zodResolver(userDocuments),
  });
  const { token, currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [serviceData, setServiceData] = useState(null);

  const [showAbout, setShowAbout] = useState(true);
  const [startupData, setStartupData] = useState({});

  const getStartupData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get(
        `/Startup/getOne/${+params.serviceId}`,
      );
      if (status === 200 && data) {
        setStartupData(data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [params.serviceId]);

  const getServiceData = async () => {
    try {
      const { status, data } = await userAxios.get(`/registration`);
      if (status === 200) {
        const stuff = data?.data[0];
        if (stuff) {
          setServiceData(stuff);
        }
      }
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const submitHandler = async (rawData) => {
    try {
      setIsLoading(true);
      if (!startupData || !startupData.id) {
        return toast.error('Service details not found!');
      }

      const body = userDocuments.parse(rawData);
      const formData = new FormData();

      formData.append('serviceId', startupData.id);

      Object.keys(body).forEach((key) => formData.append(key, body[key][0]));

      const { status, data } = await userAxios.post('/registration', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (status === 201) {
        await getServiceData();
        toast.success(
          'Successfully uploaded your documents, Our admins will call you soon.',
        );
      }
    } catch (error) {
      toast.error(error.message ?? 'Server error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStartupData();
  }, [getStartupData]);

  useEffect(() => {
    if(token && currentUser) getServiceData();
  }, [token, currentUser]);

  return (
    <>
      {isLoading ? (
        <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
          <Image src="/loading.svg" alt="loading..." width={100} height={100} />
        </div>
      ) : (
        <div className="my-10 mx-2 md:mx-10 lg:mx-20 flex flex-col lg:flex-row gap-5 p-5 text-slate-900">
          <div className="flex flex-col lg:w-4/12 gap-3 mt-4 text-center">
            <Image
              src={startupData?.image}
              alt="ESI"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="text-2xl font-semibold">{startupData?.title}</h3>
            <div className="text-xl font-semibold">
              Price <span>{formatINRCurrency(startupData?.priceWithGst)}</span>
              <span className="text-xs"> Incl. GST</span>
            </div>
            {!isLoading && <AddToCart item={startupData} />}
          </div>
          <div className="w-full p-5">
            <h3 className="text-2xl font-semibold text-center border-b mx-auto max-w-3xl">
              {startupData?.title}
            </h3>
            <div className="flex flex-col lg:flex-row mt-3 gap-4">
              <button
                className={`w-full lg:w-1/2 text-base btn-primary rounded ${!showAbout ? ' bg-gray-100 text-[#2a275d]' : ''}`}
                onClick={() => {
                  setShowAbout(true);
                }}
              >
                About
              </button>
              <button
                className={`w-full lg:w-1/2 text-base btn-primary rounded ${showAbout ? ' bg-gray-100 text-[#2a275d]' : ''}`}
                onClick={() => {
                  setShowAbout(false);
                }}
              >
                Documents Required
              </button>
            </div>
            {showAbout ? (
              <div className="mt-4 text-xl leading-8 p-5">
                <p className="whitespace-pre-wrap text-justify text-xl font-medium mb-5">
                  {startupData?.aboutService}
                </p>
              </div>
            ) : (
              <>
                {!serviceData ? (
                  <div className="mt-5 text-base leading-8 lg:ml-5">
                    <h4 className="text-center font-medium mb-5 text-base sm:text-2xl">
                      Documents required for registration
                    </h4>
                    <div>
                      <form
                        onSubmit={handleSubmit(submitHandler)}
                        className="flex flex-col gap-5"
                      >
                        <div className="flex justify-between flex-wrap gap-2 sm:gap-0">
                          <label htmlFor="aadhaar">
                            Aadhaar Card (PDF or Image):
                          </label>
                          <input
                            type="file"
                            {...register('aadhaarCard')}
                            id="aadhaar"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                          />
                          {errors.aadhaarCard && (
                            <span className="text-red-500">
                              {errors.aadhaarCard.message}
                            </span>
                          )}
                        </div>

                        <div className="flex justify-between flex-wrap gap-2 sm:gap-0">
                          <label htmlFor="pan">PAN Card (PDF or Image):</label>
                          <input
                            type="file"
                            {...register('panCard')}
                            id="pan"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                          />
                          {errors.panCard && (
                            <span className="text-red-500">
                              {errors.panCard.message}
                            </span>
                          )}
                        </div>

                        <div className="flex justify-between flex-wrap gap-2 sm:gap-0">
                          <label htmlFor="gst">
                            GST Certificate (PDF or Image):
                          </label>
                          <input
                            type="file"
                            {...register('gstCertificate')}
                            id="gst"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                          />
                          {errors.gstCertificate && (
                            <span className="text-red-500">
                              {errors.gstCertificate.message}
                            </span>
                          )}
                        </div>

                        <div className="flex justify-between flex-wrap gap-2 sm:gap-0">
                          <label htmlFor="photo">Photo (PDF or Image):</label>
                          <input
                            type="file"
                            {...register('photo')}
                            id="photo"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                          />
                          {errors.photo && (
                            <span className="text-red-500">
                              {errors.photo.message}
                            </span>
                          )}
                        </div>

                        <button
                          className="mt-5 btn-primary bg-gray-100 hover:bg-blue-500 text-[#2a275d] hover:text-white font-semibold"
                          type="submit"
                        >
                          Upload Documents
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 text-base leading-8 lg:ml-5 flex justify-center items-center">
                    <h3 className="my-4 text-xl font-medium">
                      We have successfully recieved your documents! Our Team
                      will contact your furthur
                    </h3>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterStartUpDetails;
