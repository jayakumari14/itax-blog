'use client';

import { H4 } from '@/components/pagesComponents/pageLayout/Headings';
import Section from '@/components/pagesComponents/pageLayout/Section';
// import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import userAxios from '@/lib/userAxios';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import Button from '@/components/ui/Button';

function Corporate({ corporateProData, loading, setIsLoading, refresh }) {
  const [editCorporatePro, setEditCorporatePro] = useState(false);
  const [corPro, setCorPro] = useState([
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
    // This will map over navCard and setNvCards accordingly
    setCorPro(
      corporateProData?.map((item) => ({
        image: item?.image || '',
        heading: item?.heading || '',
      })),
    );
  }, [corporateProData]);

  const handleCorporatePro = () => {
    setEditCorporatePro(!editCorporatePro);
  };

  const handleImgUrlChange = (i, value) => {
    const updateCorpChange = [...corPro];
    updateCorpChange[i].image = value;
    setCorPro(updateCorpChange);
  };

  const handleHeadingChange = (i, value) => {
    const updateCorpChange = [...corPro];
    updateCorpChange[i].heading = value;
    setCorPro(updateCorpChange);
  };

  const SubmitCorpUpdate = async () => {
    try {
      setIsLoading(true);
      const { status } = await userAxios.post('/cms/corporateprojects', {
        corporatePro: corPro,
      });

      if (status === 200) {
        await refresh();
        return toast.success('Successfuly updated corporate projects');
      }
      throw new Error('Error updating corporate projects');
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="pb-3  mx-auto">
        <div className="flex justify-end items-center my-2 mx-4">
          <H4 className="justify-left">Corporate Pro</H4>
          {!editCorporatePro ? (
            <Button size={'md-1'} onClick={handleCorporatePro}>
              Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button
                disabled={loading}
                size={'md-1'}
                onClick={SubmitCorpUpdate}
              >
                Save
              </Button>

              <Button
                disabled={loading}
                variant="secondary"
                size={'md-1'}
                onClick={handleCorporatePro}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>

        {corporateProData.map((corporateProData, i) => (
          <div className="flex justify-center   mb-2" key={i}>
            <div className="w-full md:w-1/4 px-3">
              <label className=" capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                image Url {editCorporatePro && <Icon icon="line-md:edit" />}
              </label>
              {editCorporatePro ? (
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
                  defaultValue={corporateProData.image}
                  readOnly
                  placeholder="img url"
                />
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className=" capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                Heading {editCorporatePro && <Icon icon="line-md:edit" />}
              </label>
              {editCorporatePro ? (
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
                  defaultValue={corporateProData.heading}
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
function EditCorporateProjects() {
  const [corporatePro, setCorporatePro] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setFormData = async () => {
    try {
      setLoading(true);
      const { status, data } = await userAxios.get(`/cms/homescreen`);
      if (status === 200) {
        setCorporatePro(data.data.home.corporatePro);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFormData();
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
      <Section className="capitalize border shadow-md my-3">
        <div>
          <Corporate
            loading={loading}
            setIsLoading={setLoading}
            corporateProData={corporatePro}
            refresh={setFormData}
          />
        </div>
      </Section>
    </>
  );
}

export default EditCorporateProjects;
