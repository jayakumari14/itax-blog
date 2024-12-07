'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import userAxios from '@/lib/userAxios';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  blogSchema,
  categoryOptions,
  defaultValuesBlogPost,
  labelKeyMappingBlogPost,
} from './staticData';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const CreateBlogPost = ({ refresh, onClose, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    setValue,
    reset,
    watch,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValuesBlogPost,
    resolver: zodResolver(blogSchema),
  });

  const category = watch('category');

  const formSubmitHandler = async (formData) => {
    try {
      setIsLoading(true);
      const URL = data ? `/blog/posts/${data.id}` : '/blog/posts';
      const config = { headers: { 'content-type': 'multipart/form-data' } };
      let isSuccess;
      if (data) {
        const { status } = await userAxios.put(URL, formData, config);
        isSuccess = status;
      } else {
        const { status } = await userAxios.post(URL, formData, config);
        isSuccess = status;
      }

      if (isSuccess === 201 || isSuccess === 200) {
        refresh();
        onClose();
        toast.success(`Post ${data ? 'updated' : 'created'} successfully!`);
      }
    } catch (error) {
      toast.error(`Error ${data ? 'updating' : 'creating'} post!`);
    } finally {
      setIsLoading(false);
    }
  };

  function getValuesFromData(data) {
    if (data) {
      return {
        title: data.title,
        contentHeading: data.contentHeading,
        contentDescription: data.contentDescription,
        category: data.category,
      };
    }
  }

  useEffect(() => {
    if (data) {
      reset(getValuesFromData(data));
    }
  }, [data]);

  return (
    <form className="p-3" onSubmit={handleSubmit(formSubmitHandler)}>
      <div className="grid md:grid-cols-3 gap-4">
        {/* Title */}
        <div className="mb-2">
          <Input
            type="text"
            required={true}
            label={`${labelKeyMappingBlogPost['title']}: `}
            placeholder={`Enter ${labelKeyMappingBlogPost['title']}`}
            {...register('title')}
          />
          {errors['title'] && (
            <p className="text-red-500 text-sm">{errors['title'].message}</p>
          )}
        </div>

        {/* Content Heading */}
        <div className="mb-2">
          <Input
            type="text"
            required={true}
            label={`${labelKeyMappingBlogPost['contentHeading']}: `}
            placeholder={`Enter ${labelKeyMappingBlogPost['contentHeading']}`}
            {...register('contentHeading')}
          />
          {errors['contentHeading'] && (
            <p className="text-red-500 text-sm">
              {errors['contentHeading'].message}
            </p>
          )}
        </div>

        {/* Category */}
        <div className="mb-2">
          <Input
            type="select"
            required={true}
            value={categoryOptions.find((item) => item.value === category)}
            name="category"
            label={`${labelKeyMappingBlogPost['category']}: `}
            options={categoryOptions}
            onChange={(option) => setValue('category', option.value)}
            placeholder={`Enter ${labelKeyMappingBlogPost['category']}`}
          />
          {errors['category'] && (
            <p className="text-red-500 text-sm">{errors['category'].message}</p>
          )}
        </div>

        {/* Description */}
        <div className="md:col-span-3 mb-2">
          <Input
            type="textarea"
            name="contentDescription"
            placeholder="Describe your blog post.."
            rows={10}
            cols={10}
            label={'Post Content:'}
            {...register('contentDescription')}
          />
          {errors['contentDescription'] && (
            <p className="text-red-500 text-sm">
              {errors['contentDescription'].message}
            </p>
          )}
        </div>
      </div>

      {/* FILE */}
      <div className="col-span-2 mb-2">
        <Input
          type="file"
          required={true}
          label={labelKeyMappingBlogPost['image']}
          onChange={(e) => setValue('image', e.target.files[0])}
        />
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>
      <div className={'flex justify-center my-3'}>
        <Button disabled={isLoading} type="submit">
          {isLoading ? 'Loading...' : 'Save post'}
        </Button>
      </div>
    </form>
  );
};

export default CreateBlogPost;