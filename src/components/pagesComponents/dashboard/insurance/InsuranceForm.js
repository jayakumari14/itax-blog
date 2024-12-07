import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import {
  insuranceInitialData,
  insuranceFormFields,
  insuranceValidationSchema,
} from './staticData';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import userAxios from '@/lib/userAxios';
import moment from 'moment';

const InsuranceForm = ({ data, onClose, refresh }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    setValue,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: insuranceInitialData,
    resolver: zodResolver(insuranceValidationSchema),
  });

  // Submit Handler
  const submitHandler = async (body) => {
    try {
      setIsLoading(true);
      let isSuccess;

      if (data) {
        // IF DATA IS PASSED, UPDATE API SHOULD BE CALLED
        const { status } = await userAxios.put(
          `/insurance/update/${data.id}`,
          body,
        );
        if (status === 200) {
          isSuccess = true;
        }
      } else {
        const { status } = await userAxios.post(`/insurance/apply`, body);
        if (status === 201) {
          isSuccess = true;
        }
      }
      if (isSuccess) {
        refresh();
        onClose();
        toast.success(`Successfully ${data ? 'updated' : 'created'}!`);
      }
    } catch (error) {
      toast.error('Error while submitting the form!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      const { createdAt, updatedAt, userId, dob, ...rest } = data;
      const formData = {
        ...rest,
        dob: moment(new Date(dob)).format('YYYY-MM-DD'),
      };
      reset(formData);
    }
  }, [data, reset]);

  return (
    <section className="min-h-[70vh]">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="grid md:grid-cols-3 gap-5 p-3">
          {Object.keys(insuranceFormFields).map((key) => {
            if (insuranceFormFields[key].type === 'select') {
              return (
                // Handled the select with onchange event
                <div key={key}>
                  <Input
                    {...register(key)}
                    {...insuranceFormFields[key]}
                    value={insuranceFormFields[key].options.find(
                      (option) => option.value === getValues(key),
                    )}
                    onChange={(option) => setValue(key, option.value)}
                  />
                  <span className="block min-h-6 text-red-500">
                    {errors[key] ? errors[key].message : ''}
                  </span>
                </div>
              );
            }
            return (
              <div key={key}>
                <Input
                  key={key}
                  {...register(key)}
                  {...insuranceFormFields[key]}
                />
                <span className="block min-h-6 text-red-500">
                  {errors[key] ? errors[key].message : ''}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center my-3">
          <Button className={BTN_SIZES['md-1']} disabled={isLoading}>
            {isLoading ? 'Loading..' : 'Submit'}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default InsuranceForm;
