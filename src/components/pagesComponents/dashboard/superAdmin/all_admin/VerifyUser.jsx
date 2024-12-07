import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import userAxios from '@/lib/userAxios';
import regex from '@/utils/regex';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

const schema = z.object({
  otp: z
    .string()
    .min(6, 'Six digit otp is required')
    .max(6, 'Six digit otp is required')
    .regex(regex.stringNumberRegex, 'Six digit otp is required')
    .refine((s) => s.trim()),
});

const VerifyUser = ({ email, otp_key, onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      otp: '',
    },
  });

  const submitHandler = async (body) => {
    try {
      setIsLoading(true);
      const { status } = await userAxios.post('/user/verify', {
        ...body,
        email,
        otp_key,
      });
      if (status === 200) {
        toast.success('User verified successfully');
        return await onClose();
      }
    } catch (error) {
      toast.error('Error validating user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="md:max-w-lg mx-auto grid gap-3 p-3">
        <div>
          <Input
            placeholder="Enter your otp here.."
            type="text"
            {...register('otp')}
            label={'Your OTP*'}
          />
          <span className="h-[10px] text-red-500 text-sm px-1">
            {errors.otp && errors.otp.message}
          </span>
        </div>
        <div className="flex justify-center">
          <Button
            disabled={isLoading}
            className={'min-w-[30%] font-medium tracking-wider'}
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                <Image
                  width={25}
                  height={25}
                  alt="Loading.."
                  src={'/whiteLoader.svg'}
                />
                <span>Verifying..</span>
              </div>
            ) : (
              'Verify'
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default VerifyUser;
