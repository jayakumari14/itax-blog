'use client';

import { useForm } from 'react-hook-form';
import { footerDefaults, footerInputs, footerValidation } from './staticData';
import Input from '@/components/ui/Input';
import Button, { BTN_STYLES } from '@/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import Section, { SECTION_SIZES } from '@/components/ui/Section';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import userAxios from '@/lib/userAxios';
import Image from 'next/image';

export default function Edit_Footer() {
  const [socials, setSocials] = useState(footerDefaults);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: socials,
    resolver: zodResolver(footerValidation),
  });

  // Fetches the footer
  const getSocials = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get('/cms/footer');
      if (status === 200 && data) {
        toast.success(data.message);
        setSocials(data.data?.socials);
        reset(data.data?.socials);
      } else {
        toast.error('Error getting socials');
      }
    } catch (error) {
      toast.error('Error getting socials');
    } finally {
      setIsLoading(false);
    }
  }, [reset]);

  useEffect(() => {
    getSocials();
  }, [getSocials]);

  // Updates footer section
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { status } = await userAxios.put('/cms/footer', data);
      if (status === 200) {
        await getSocials();
        setIsEdit(false);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error('Error updating footer');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section
      className={'border shadow-md rounded-lg p-4 md:p-8 min-h-[80vh]'}
      size={SECTION_SIZES['md']}
    >
      {
        <>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[65vh]">
              <Image
                src={'/loading.svg'}
                width={50}
                height={50}
                alt="Loading.."
              />
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex justify-between items-center my-3 mt-4">
                  <h1 className="text-3xl font-bold mb-4">Edit Footer</h1>
                  {!isEdit ? (
                    <span
                      className={BTN_STYLES}
                      onClick={() => {
                        setIsEdit(true);
                      }}
                    >
                      Edit Footer
                    </span>
                  ) : (
                    <div className="flex gap-3">
                      <Button type="submit" isLoading={isLoading}>
                        Save
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          setIsEdit(false);
                          reset(socials);
                        }}
                        variant={'secondary'}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
                <div className="md:max-w-7xl grid md:grid-cols-3 gap-4">
                  {Object.keys(footerInputs).map((key) => (
                    <div key={footerInputs[key].id} className="flex flex-col">
                      <Input
                        disabled={!isEdit}
                        {...footerInputs[key]}
                        {...register(key)}
                      />
                      <span className="text-red-500 min-h-6 text-sm">
                        {errors[key] && errors[key].message}
                      </span>
                    </div>
                  ))}
                </div>
              </form>
            </>
          )}
        </>
      }
    </Section>
  );
}
