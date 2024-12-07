'use client';

import { H4 } from '@/components/pagesComponents/pageLayout/Headings';
import Section from '@/components/pagesComponents/pageLayout/Section';
// import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import userAxios from '@/lib/userAxios';
import { Icon } from '@iconify/react';
import Button from '@/components/ui/Button';
import { toast } from 'react-toastify';
import Image from 'next/image';

function Ongoing_Edit({ ongoingPro, loading, setLoading, refreshOngoing }) {
  // const { register, handleSubmit, getValues } = useForm();
  const [editongoing, setEditongoing] = useState(false);
  const [ogPro, setOgPro] = useState([
    {
      ongoingPro: [
        {
          image: '',
          heading: '',
        },
      ],
    },
  ]);

  useEffect(() => {
    setOgPro(
      ongoingPro?.map((item) => ({
        image: item?.image || '',
        heading: item?.heading || '',
      })),
    );
  }, [ongoingPro]);

  const handleOnGoing = () => {
    setEditongoing(!editongoing);
  };

  const handleImgUrlChange = (i, value) => {
    const updateOGChange = [...ogPro];
    updateOGChange[i].image = value;
    setOgPro(updateOGChange);
  };

  const handleHeadingChange = (i, value) => {
    const updateOGChange = [...ogPro];
    updateOGChange[i].heading = value;
    setOgPro(updateOGChange);
  };

  const SubmitUpdate = async () => {
    try {
      setLoading(true);
      const { status } = await userAxios.post('/cms/ongoingprojects', {
        ongoingPro: ogPro,
      });

      if (status === 200) {
        await refreshOngoing();
        setEditongoing(false);
        setLoading(false);
        return toast.success('Successfuly updated ongoing projects');
      }
      setEditongoing(false);
      return toast.error('Error updating ongoing projects');
    } catch (error) {
      console.log('🚀 ~ SubmitUpdate ~ error:', error);
      setEditongoing(false);
      return toast.error('Error updating ongoing projects');
    }
  };

  return (
    <>
      <div className="mx-auto pb-3">
        <div className="flex justify-between items-center m-2">
          <H4 className="text-slate-800">Ongoing Project</H4>
          {!editongoing ? (
            <Button size={'md-1'} onClick={handleOnGoing}>
              Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button disabled={loading} size={'md-1'} onClick={SubmitUpdate}>
                Save
              </Button>

              <Button
                variant="secondary"
                disabled={loading}
                size={'md-1'}
                onClick={handleOnGoing}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
        {ongoingPro.map((ongoingPro, i) => (
          <div key={i} className="flex justify-center   mb-2">
            <div className="w-full md:w-1/4 px-3">
              <label className=" capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                image Url {editongoing && <Icon icon="line-md:edit" />}
              </label>
              {editongoing ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="imgurl"
                  type="text"
                  placeholder="Image Url"
                  onChange={(e) => handleImgUrlChange(i, e.target.value)}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="first-name"
                  type="text"
                  defaultValue={ongoingPro.image}
                  readOnly
                  placeholder="img url"
                />
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className=" capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                Heading {editongoing && <Icon icon="line-md:edit" />}
              </label>
              {editongoing ? (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="heading"
                  type="text"
                  placeholder="heading"
                  onChange={(e) => handleHeadingChange(i, e.target.value)}
                />
              ) : (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="heading"
                  type="text"
                  defaultValue={ongoingPro.heading}
                  readOnly
                  placeholder="heading"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
function EditOngoingProjects() {
  const [ongoingPro, setOngoingPro] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refreshOngoing = async () => {
    try {
      setLoading(true);
      const { data, status } = await userAxios.get(`/cms/homescreen`);
      if (status === 200) {
        setOngoingPro(data.data.home.ongoingPro);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshOngoing();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] justify-center items-center">
        <Image src={'/loading.svg'} width={50} height={50} alt="Loading.." />
      </div>
    );
  }

  if (error) {
    return (
      <Section>
        <div className="h-36 grid place-content-center">{error}</div>
      </Section>
    );
  }

  return (
    <>
      <Section className="capitalize border shadow-md my-4">
        <div>
          <Ongoing_Edit
            loading={loading}
            setLoading={setLoading}
            ongoingPro={ongoingPro}
            setOngoingPro={setOngoingPro}
            refreshOngoing={refreshOngoing}
          />
        </div>
      </Section>
    </>
  );
}

export default EditOngoingProjects;
