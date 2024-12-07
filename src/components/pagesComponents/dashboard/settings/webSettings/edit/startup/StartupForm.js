import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import userAxios from '@/lib/userAxios';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createStartupSchema,
  startupCategoryOptions,
  updateStartupSchema,
} from './staticData';
import Input from '@/components/ui/Input';
import Button, { BTN_SIZES } from '@/components/ui/Button';
import { useEffect, useState } from 'react';

export default function StartupForm({ data, refresh, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(data ? updateStartupSchema : createStartupSchema),
  });

  const categoryVal = watch('categories');

  // SUBMIT HANDLER
  const createStartups = async (form) => {
    if (isLoading) return;
    const parsedData = data
      ? updateStartupSchema.parse(form)
      : createStartupSchema.parse(form);
    const URL = `/startup/register/${data?.id ?? ''}`;
    const formData = new FormData();

    if (data) {
      formData.append('id', data.id);
    }
    formData.append('title', parsedData.title);
    formData.append('categories', parsedData.categories);
    formData.append('priceWithGst', parsedData.priceWithGst);
    formData.append('aboutService', parsedData.aboutService);
    if (parsedData?.image) {
      formData.append('image', parsedData?.image);
    }

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    try {
      setIsLoading(true);
      let isSuccess = false;
      if (data) {
        const { status } = await userAxios.put(URL, formData, config);
        isSuccess = status;
      } else {
        const { status } = await userAxios.post(URL, formData, config);
        isSuccess = status;
      }
      if (isSuccess === 201 || isSuccess === 200) {
        toast.success(`${data ? 'Updated' : 'Added'} Successfully`);
        refresh();
        onClose();
      }
    } catch (error) {
      toast.error('Server error');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      const { id, priceWithGst, ...rest } = data;

      reset({ ...rest, priceWithGst: priceWithGst.toString() });
    }
  }, [data, reset]);

  return (
    <form onSubmit={handleSubmit(createStartups)}>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Title */}
        <div className="mb-2">
          <Input
            label={'Title'}
            placeholder="Enter title"
            {...register('title')}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Categories */}
        <div>
          <Input
            label={'Select category'}
            type={'select'}
            options={startupCategoryOptions}
            onChange={(newOption) => setValue('categories', newOption.value)}
            value={startupCategoryOptions.find(
              (category) => category.value === categoryVal,
            )}
          />
          {errors.categories && (
            <p className="text-red-500 text-sm mt-1">
              {errors.categories.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <Input
            label={'Price'}
            type={'text'}
            placeholder="Enter price"
            {...register('priceWithGst')}
          />
          {errors.priceWithGst && (
            <p className="text-red-500 text-sm mt-1">
              {errors.priceWithGst.message}
            </p>
          )}
        </div>

        {/* Upload Image */}
        <div>
          <Input
            label={'Upload image'}
            id="image"
            type="file"
            onChange={(e) => {
              setValue('image', e.target.files[0]);
            }}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Service Description */}
        <div className="md:col-span-2">
          <Input
            label={'About service'}
            rows={8}
            placeholder="Describe the service.."
            id="aboutService"
            type="textarea"
            {...register('aboutService')}
          />
          {errors.aboutService && (
            <p className="text-red-500 text-sm mt-1">
              {errors.aboutService.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex md:justify-center items-center md:col-span-2">
          <Button
            disabled={isLoading}
            className={`md:w-fit w-full ${BTN_SIZES['lg-1']}`}
            type="submit"
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </Button>
        </div>
      </div>
    </form>
  );
}
