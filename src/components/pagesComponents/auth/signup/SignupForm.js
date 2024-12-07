'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import api from '@/lib/userNextAxios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { I } from '@/components/iconify/I';
// import { setCookie } from 'cookies-next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import regex from '@/utils/regex';
import userAxios from '@/lib/userAxios';

const formClassName = {
  Label: 'text-sm font-medium',
  Input:
    'w-full py-2 px-3 text-slate-900 mt-1 outline-none border focus:border-primary rounded',
};

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email('This email is invalid*')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*\d).{8,}$/,
      'Password must have at least 8 characters, One digit and one lowercase letter',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required*')
    .oneOf([Yup.ref('password')], 'Confirm Password must match password'),
});

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const router = useRouter();
  const [otpKey, setOtpKey] = useState(null)
  const [email, setEmail] = useState(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSendOtp = async (FormData) => {
    const {
      firstName,
      lastName,
      gender,
      pin,
      phone,
      email,
      password,
      //confirmPassword,
      address,
    } = FormData;

    try {
      setLoading(true);
      const { data } = await userAxios.post('/user/sign-up', {
        firstName,
        lastName,
        gender,
        pin,
        address,
        email,
        phone,
        password,
        type: 'normal',
      });
console.log("ddddddddddddddddddd",data);

      if (data.success) {
        router.push(
          '/verify-otp?email=' +
            FormData.email +
            '&otp_key=' +
            data.data.otp_key,
        );
        toast.success(data.message);
      }
    } catch (error) {
      if (error?.response?.status === 409) {
        toast.info(
          `User already exists! Please Login with your email address.`,
        );
       
      } else if (error?.response && error?.response?.status === 500) {
        toast.error('something went wrong. Please try again later');
        console.log('Internal server error login', error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="lg:w-2/3 shadow-lg rounded-md bg-neutral-50 p-4 sm:max-w-2xl py-4 sm:p-8"
        onSubmit={handleSubmit(onSendOtp)}
      >
        <h1 className="text-2xl font-bold text-center mb-8">
          Create Your Account
        </h1>

        <ul className="grid gap-2">
          <li>
            <label className={formClassName.Label} htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={formClassName.Input}
              maxLength={20}
              {...register('firstName', { required: 'firstName is required.' })}
            />
            {errors.firstName && (
              <p className="text-xs text-red-500">{errors.firstName.message}</p>
            )}
          </li>
          <li>
            <label className={formClassName.Label} htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              maxLength={25}
              className={formClassName.Input}
              {...register('lastName', { required: 'lastName is required.' })}
            />
            {errors.lastName && (
              <p className="text-xs text-red-500">{errors.lastName.message}</p>
            )}
          </li>
          <li>
            <label className={formClassName.Label} htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="📧 Enter your email"
              className={formClassName.Input}
              {...register('email')}
            />

            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </li>
          <li>
            <label className={formClassName.Label} htmlFor="phone">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="📞 Enter 10 digit phone number"
              className={formClassName.Input}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </li>
          <li className="relative">
            <label className={formClassName.Label} htmlFor="password">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="🔑 Enter password"
                id="password"
                className={formClassName.Input}
                {...register('password')}
              />
              <I
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                icon={isPasswordVisible ? 'mdi:eye' : 'mdi:eye-off'}
                className=" select-none text-zinc-500 absolute top-[50%] right-[10px] translate-y-[-40%] text-xl cursor-pointer"
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </li>
          <li>
            <label className={formClassName.Label} htmlFor="confirmPassword">
              Confirm password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={isPasswordVisible2 ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="🔑 Confirm your password"
                className={formClassName.Input}
                {...register('confirmPassword', {
                  required: 'Confirm password is required.',
                })}
              />
              <I
                onClick={() => setIsPasswordVisible2(!isPasswordVisible2)}
                icon={isPasswordVisible2 ? 'mdi:eye' : 'mdi:eye-off'}
                className=" select-none text-zinc-500 absolute top-[50%] right-[10px] translate-y-[-40%] text-xl cursor-pointer"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </li>

          <li>
            <label className={formClassName.Label} htmlFor="gender">
              Gender <span className="text-red-600">*</span>
            </label>
            <select
              name="gender"
              id="gender"
              className={formClassName.Input}
              {...register('gender', { required: 'gender is required.' })}
              defaultValue={getValues('gender')}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {errors.gender && (
              <p className="text-xs text-red-500">{errors.gender.message}</p>
            )}
          </li>

          <li>
            <label className={formClassName.Label} htmlFor="pin">
              PIN Code
            </label>
            <input
              type="number"
              id="pin"
              className={formClassName.Input}
              {...register(
                'pin',
                {
                  pattern: {
                    value: regex.PIN_RGX,
                    message: 'Enter a valid PIN Code',
                  },
                },
                {
                  required: 'Pincode is required',
                },
              )}
            />
            {errors.pin && (
              <p className="text-xs text-red-500">{errors.pin.message}</p>
            )}
          </li>

          <li className="sm:col-span-2">
            <label className={formClassName.Label} htmlFor="address">
              Address
            </label>
            <textarea
              type="text"
              name="address"
              id="address"
              className={formClassName.Input}
              {...register('address')}
            />
          </li>
        </ul>
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="py-2 px-4 w-[50%] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
            ) : (
              'Submit'
            )}
          </button>
        </div>
        <div className="flex justify-center pt-4">
          Forgot Password ?
          <Link className="ml-2 text-blue-600 font-bold" href="/reset-password">
            Reset
          </Link>
        </div>

        <div className="flex text-sm font-semibold justify-center pt-4">
          Already have an account?
          <Link className="ml-2 text-blue-600 font-bold" href="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
