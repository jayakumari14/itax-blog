'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import api from '@/lib/userNextAxios';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import userAxios from '@/lib/userAxios';

const formClassName = {
  Label: 'text-sm font-medium',
  Input:
    'w-full py-2 px-3 mt-1 outline-none border focus:border-primary rounded',
};

export default function VerifyOTPForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const otp_key = parseInt(searchParams.get('otp_key'), 10);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [loadingOTP, setLoadingOTP] = useState(false);
  // const [isOtpSend, setIsOtpSend] = useState(false);
  const [otpKey, setIsOtpKey] = useState(null);

  useEffect(() => {
    setIsOtpKey(otp_key);
  }, []);

  const handleSendOTP = async (data) => {
    try {
      setLoadingOTP(true);
      setValue('otp', '');

      // setIsOtpSend(true);

      // setTimeout(() => {
      //     setIsOtpSend(false);
      // }, 60000);

      if (email) {
        const { data } = await userAxios.post('/user/resendotp', {
          email,
          type: 'VERIFICATION',
        });
        setIsOtpKey(data?.data?.otp_key);
        toast.success(data?.message);
      }
    } catch (error) {
      console.log(error);
      const msg = error.response.data.message;
      if (msg) {
        toast.error(msg);
        console.log('Internal server error otp verification', error);
      } else {
        toast.error('something went wrong. Please try again later');
        console.log('An error occurred otp verification', error);
      }
    } finally {
      setLoadingOTP(false);
    }
  };

  const onOtpVerify = async (data) => {
    try {
      setLoading(true);
      const { otp } = data;
      const response = await userAxios.post('/user/verify', {
        email,
        otp_key: otpKey,
        otp,
      });
      console.log(response);
      console.log(response.status);
      if (response.status === 200) {
        toast.success('verified successfully');
        router.push('/login');
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.success === false) {
        toast.warning(error.response.data.message);
      } else {
        toast.error('something went wrong. Please try again later');
        console.log('An error occurred login', error);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      className="shadow-lg bg-neutral-50 p-4 sm:max-w-sm mx-auto rounded-lg py-4 sm:p-8"
      action=""
      onSubmit={handleSubmit(onOtpVerify)}
    >
      <h1 className="text-2xl font-bold text-center mb-8">Verify OTP</h1>
      <ul className=" grid gap-2 min-h-56 ">
        <li className="text-center">
          <label className={formClassName.Label} htmlFor="email">
            An OTP sent to Your Email
          </label>
          <div className="w-full py-2 px-3 mt-1 rounded text-blue-900">
            {email && email}
          </div>
        </li>
        <li>
          <div className=" flex text-xs justify-between items-center py-2">
            <label className={formClassName.Label} htmlFor="otp">
              Enter OTP
            </label>

            {loadingOTP ? (
              <button
                className=" relative top-2 right-2 bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 rounded"
                type="button"
              >
                <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
              </button>
            ) : (
              <button
                onClick={handleSendOTP}
                className=" relative top-2 right-2 bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 rounded"
                type="button"
              >
                Resend
              </button>
            )}
          </div>
          <input
            type="text"
            id="otp"
            className={formClassName.Input}
            {...register('otp', { required: 'otp is required.' })}
          />
          {errors.otp && (
            <p className="text-xs text-red-500">{errors.otp.message}</p>
          )}
        </li>
      </ul>
      <div className="pt-4 text-center">
        <button className="py-2 px-4 w-[50%] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl">
          {loading ? (
            <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
          ) : (
            'Verify OTP'
          )}
        </button>
      </div>
      <div className="flex justify-center pt-4">
        Don&apos;t have an account?
        <Link className="ml-2 text-blue-600 font-bold" href="/signup">
          Signup
        </Link>
      </div>
    </form>
  );
}
