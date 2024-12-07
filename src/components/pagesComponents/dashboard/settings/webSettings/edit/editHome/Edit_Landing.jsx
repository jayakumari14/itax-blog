'use client';

import { H4, H5 } from '@/components/pagesComponents/pageLayout/Headings';
import Section from '@/components/pagesComponents/pageLayout/Section';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import userAxios from '@/lib/userAxios';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { toast } from 'react-toastify';

function Landing({ upper }) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [editlanding, setEditLanding] = useState(false);

  const handleEditLanding = () => {
    if (editlanding) {
      setValue('mainheading', upper.mainHeading);
      setValue('subheading', upper.subHeading);
      setValue('button', upper.button);
    }
    setEditLanding(!editlanding);
  };

  const SubmitUpdate = async (upper) => {
    try {
      setIsLoading(true);
      const { status } = await userAxios.post('/cms/main-heading-content', {
        upper,
      });
      if (status === 200) {
        setIsLoading(false);
        setEditLanding(!editlanding);
        return toast.success('Changed Successfully');
      }
      return toast.error('Server Error!');
    } catch (error) {
      setIsLoading(false);
      return toast.error('Server Error!');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(SubmitUpdate)} className="mx-auto">
        <div className="flex justify-end items-center my-2">
          <H4 className="text-slate-800">Landing</H4>
          {!editlanding ? (
            <Button size={'md-1'} type="button" onClick={handleEditLanding}>
              Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button disabled={isLoading} size={'md-1'} type="submit">
                {isLoading ? (
                  <Image
                    src={'/whiteLoader.svg'}
                    width={50}
                    height={20}
                    alt="Loading.."
                  />
                ) : (
                  'Save'
                )}
              </Button>

              <Button
                size={'md-1'}
                type="button"
                variant="secondary"
                disabled={isLoading}
                onClick={handleEditLanding}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-7 justify-center gap-2 mb-2 md:pt-2 pt-4">
          <div className="md:col-span-2">
            <label className="capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
              Main Heading {editlanding && <Icon icon="line-md:edit" />}
            </label>
            {editlanding ? (
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="mainheading"
                type="text"
                placeholder="main heading"
                {...register('mainHeading')}
              />
            ) : (
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="first-name"
                type="text"
                defaultValue={upper?.mainHeading}
                placeholder="Main Heading"
                readOnly
              />
            )}
          </div>
          <div className="md:col-span-3">
            <label className=" capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
              Sub Heading {editlanding && <Icon icon="line-md:edit" />}
            </label>
            {editlanding ? (
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="heading"
                type="text"
                placeholder="heading"
                {...register('subHeading')}
              />
            ) : (
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="heading"
                type="text"
                defaultValue={upper?.subHeading}
                placeholder="heading"
                readOnly
              />
            )}
          </div>
          <div className="md:col-span-2">
            <label className=" capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
              Button Text {editlanding && <Icon icon="line-md:edit" />}
            </label>
            {editlanding ? (
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="button"
                type="text"
                placeholder="button text"
                {...register('button')}
              />
            ) : (
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="button"
                type="text"
                defaultValue={upper?.button}
                readOnly
                placeholder="button text"
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
}

function EditLanding({}) {
  const [upper, setUpper] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    userAxios
      .get(`/cms/homescreen`)
      .then(function (response) {
        setUpper(response.data.data.home.upper);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] justify-center items-center">
        <Image src={'/loading.svg'} width={50} height={50} alt="Loading.." />
      </div>
    );
  }
  if (error) {
    return <div className="flex h-36 justify-center items-center">{error}</div>;
  }

  return (
    <>
      {/* <H5>Edit Home Page</H5> */}
      <Section>
        <Landing upper={upper} />
      </Section>
    </>
  );
}

export default EditLanding;
