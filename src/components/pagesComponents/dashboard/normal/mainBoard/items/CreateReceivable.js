'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import {
  createReceivableForm,
  createReceivableInputs,
  createReceivableSchema,
  updateReceivableSchema,
} from './staticData';
import Image from 'next/image';
import { toast } from 'react-toastify';
import userAxios from '@/lib/userAxios';
import { zodResolver } from '@hookform/resolvers/zod';
// import VerifyUser from './VerifyUser';
import Modal from '@/components/ui/Modal';

const CreateReceivable = ({ currentRow, onClose, onRefresh }) => {
//   const disabledInputs = ['email', 'phone'];
  const [createdUser, setCreatedUser] = useState(null);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    setValue,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: createReceivableForm,
    resolver: zodResolver(currentRow ? updateReceivableSchema : createReceivableSchema),
  });

  async function submitHandler(formData) {
    return
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.post(
        '',
        formData,
      );
      if (status === 200) {
        const {
          data: { user, otp_key },
          message,
        } = data;
        setCreatedUser({ user, otp_key });
        onRefresh();
        toast.success(message);
        return reset(PaymentsAdminForm);
      }
    } catch (error) {
      toast.error('Error creating admin user');
    } finally {
      setIsLoading(false);
    }
  }

  async function submitEditHandler(body) {
    return
    try {
      setIsLoading(true);
      const { status } = await userAxios.put(
        `${currentRow.id}`,
        body,
      );
      if (status === 200) {
        toast.success('Successfully updated user');
        onRefresh();
        onClose();
      }
    } catch (error) {
      toast.error('Error submitting');
      console.log('🚀 ~ submitEditHandler ~ error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (createdUser) {
      setModal(true);
    }
  }, [createdUser]);

  useEffect(() => {
    if (currentRow) {
      const {
        createdAt,
        address,
        dob,
        avatar,
        adminId,
        superadminId,
        verified,
        userType,
        ...userData
      } = currentRow;
      const parsedData = Object.fromEntries(
        Object.entries(userData).filter(([key, value]) => !!value),
      );
      reset(parsedData);
    }
  }, [currentRow, reset]);

  return (
    <>
      <form
        onSubmit={handleSubmit(currentRow ? submitEditHandler : submitHandler)}
        className="md:p-8 p-3"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {Object.keys(createReceivableInputs).map((key) => (
            <>
              <div key={createReceivableInputs[key].id}>
                {createReceivableInputs[key].type === 'select' ? (
                  <Input
                    {...register(key)}
                    {...createReceivableInputs[key]}
                    value={createReceivableInputs[key].options.find(
                      (opt) => opt.value === getValues(key),
                    )}
                    onChange={(option) => setValue(key, option.value)}
                  />
                ) : (
                  <>
                    <Input
                      disabled={currentRow && disabledInputs.includes(key)}
                      {...register(key)}
                      {...createReceivableInputs[key]}
                    />
                  </>
                )}
                <div className="text-red-500 block h-[18px] text-sm px-2">
                  {errors[key] ? <>{errors[key].message}</> : ''}
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="flex justify-center w-full my-6">
          <Button
            disabled={isLoading}
            className={'min-w-[150px] font-medium tracking-wider'}
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                <Image
                  width={25}
                  height={25}
                  alt="Loading.."
                  src={'/whiteLoader.svg'}
                />
                <span>Creating..</span>
              </div>
            ) : (
              <>{currentRow ? 'Update Receivable' : 'Create Receivable'}</>
            )}
          </Button>
        </div>
      </form>
      <Modal
        // title={'Verify email'}
        // onClose={() => setModal(false)}
        // className={'md:max-w-xl'}
        // isOpen={modal}
      >
        {/* <VerifyUser
          onClose={onClose}
          email={createdUser?.user?.email}
          otp_key={createdUser?.otp_key}
        /> */}
      </Modal>
    </>
  );
};

export default CreateReceivable;
