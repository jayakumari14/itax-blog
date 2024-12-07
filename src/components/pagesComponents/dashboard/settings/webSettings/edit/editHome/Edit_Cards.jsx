'use client';

import { H4 } from '@/components/pagesComponents/pageLayout/Headings';
import Section from '@/components/pagesComponents/pageLayout/Section';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import userAxios from '@/lib/userAxios';
import { Icon } from '@iconify/react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { toast } from 'react-toastify';

function Card({ cardData, index, register, editCards, setValue }) {
  if (!cardData) {
    return <></>;
  }

  return (
    <>
      <div>
        <div className="flex flex-col justify-center mb-2 gap-3 border shadow-md px-3 py-5 rounded-md">
          <h2 className="text-3xl font-medium">Card {index + 1}</h2>
          <div className="px-3">
            <label className="capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
              Card Heading {editCards && <Icon icon="line-md:edit" />}
            </label>
            <input
              type="text"
              defaultValue={cardData.heading}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              readOnly={!editCards}
              placeholder={cardData.heading}
              {...register(`data.${index}.heading`)}
            />
          </div>
          {cardData.items.map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-2 px-3">
              <div>
                <label className="capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Heading {i + 1} {editCards && <Icon icon="line-md:edit" />}
                </label>

                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id={`item-${index}-${i}`}
                  type="text"
                  defaultValue={item.label}
                  readOnly={!editCards}
                  placeholder={item.label}
                  {...register(`data.${index}.items.${i}.label`)}
                />
              </div>
              <div className="flex gap-2">
                <div>
                  <label className="capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Link {i + 1} {editCards && <Icon icon="line-md:edit" />}
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id={`item-${index}-${i}`}
                    type="text"
                    defaultValue={item.link}
                    readOnly={!editCards}
                    placeholder={'Enter link here'}
                    {...register(`data.${index}.items.${i}.link`)}
                  />
                </div>
                {/* <div className="flex flex-col gap-3 justify-start">
                  <label className="capitalize tracking-wide text-gray-700 text-xs font-bold">
                    upcoming
                  </label>
                  <input
                    type="checkbox"
                    {...register(`data.${index}.items.${i}.upcoming`, {
                      onChange: (e) => {
                        setValue(
                          `data.${index}.items.${i}.upcoming`,
                          e.target.value,
                        );
                      },
                    })}
                    className="p-2"
                    // className="appearance-none w-full mt-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 max-h-full px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id={`item-${index}-${i}`}
                    disabled={!editCards}
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function EditCards() {
  const [Cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editCards, setEditCards] = useState(false);
  const { register, reset, handleSubmit, setValue } = useForm();

  const handleCards = () => {
    if (editCards) {
      reset();
    }
    setEditCards(!editCards);
  };

  const submitHandler = async ({ data: cards }) => {
    try {
      setLoading(true);
      const { status } = await userAxios.post('/cms/cards', { cards });
      if (status === 200) {
        reset({ data: cards });
        setLoading(false);
        setEditCards(false);
        return toast.success('Changed Successfully');
      }
      return toast.error('Server Error!');
    } catch (error) {
      setLoading(false);
      return toast.error('Server Error!');
    }
  };

  useEffect(() => {
    setLoading(true);
    userAxios
      .get(`/cms/homescreen`)
      .then(function (response) {
        setCards(response.data.data.home.cards || []);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Section>
        <div className="h-[70vh] grid place-content-center">
          <Image src={'/loading.svg'} width={50} height={50} alt="Loading.." />
        </div>
      </Section>
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
      <Section className="capitalize border my-4 shadow-md">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <div className="flex justify-between items-center my-2">
              <H4 className="justify-left text-4xl">Cards</H4>
              <div className="flex justify-end m-2">
                {!editCards ? (
                  <Button size={'md-1'} onClick={handleCards}>
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button disabled={loading} type="submit" size={'md-1'}>
                      Save
                    </Button>

                    <Button
                      disabled={loading}
                      variant="secondary"
                      size={'md-1'}
                      onClick={handleCards}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {Array.isArray(Cards) &&
                Cards.map((cardData, index) => {
                  return (
                    <Card
                      key={index}
                      index={index}
                      register={register}
                      setValue={setValue}
                      cardData={cardData}
                      editCards={editCards}
                    />
                  );
                })}
            </div>
          </div>
        </form>
      </Section>
    </>
  );
}

export default EditCards;
