'use client';

import { H4 } from '@/components/pagesComponents/pageLayout/Headings';
import Section from '@/components/pagesComponents/pageLayout/Section';
// import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import userAxios from '@/lib/userAxios';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Button, { BTN_SIZES } from '@/components/ui/Button';

function NavCards({ navCard, loading, setLoading, getNavCards }) {
  const [editNavCard, setEditNavCard] = useState(false);
  const [nvcards, setNvCards] = useState();

  useEffect(() => {
    // This will map over navCard and setNvCards accordingly
    if (Array.isArray(navCard) && navCard.length > 0) {
      setNvCards(
        navCard?.map((item) => ({
          link: item?.link || '',
          name: item?.name || '',
          cards: item?.cards || [],
        })),
      );
    }
  }, [navCard]);

  const handleInputChange = (categoryIndex, cardIndex, field, value) => {
    const updatedNvCards = [...nvcards];
    updatedNvCards[categoryIndex].cards[cardIndex][field] = value;
    setNvCards(updatedNvCards);
  };

  const handleNameChange = (categoryIndex, value) => {
    const updatedNvCards = [...nvcards];
    updatedNvCards[categoryIndex].name = value;
    setNvCards(updatedNvCards);
  };

  const handleLinkChange = (categoryIndex, value) => {
    const updatedNvCards = [...nvcards];
    updatedNvCards[categoryIndex].link = value;
    setNvCards(updatedNvCards);
  };

  //console.log('navdata', nvcards);

  const handleNavCard = () => {
    setEditNavCard(!editNavCard);
  };

  // Submit handler
  const SubmitUpdate = async () => {
    try {
      setLoading(true);
      const { status } = await userAxios.post('/cms/navcards', {
        navcards: nvcards,
      });
      if (status === 200) {
        setLoading(false);
        getNavCards();
        return toast.success('Successfully updated nav cards!');
      }
      setLoading(false);
      return toast.error('Error updating nav cards');
    } catch (error) {
      setLoading(false);
    }
  };

  // Add card

  // {
  //   link: '/gst',
  //   name: 'GST',
  //   cards: Array(6) [
  //     {
  //       heading: 'GSTR-1',
  //       content:
  //         'Outward Supplies Are The Sales Of Goods & Services Furnished By All Registered Taxpayers.'
  //     },

  // Add/Remove card
  const addCard = () => {
    const updatedNvCards = [
      { link: '', name: '', cards: [{ heading: '', content: '' }] },
      ...nvcards,
    ];

    setNvCards(updatedNvCards);
    toast.success('New card added, fill it now.');
    setEditNavCard(true);
  };

  const deleteCard = (cardIndex) => {
    if (window.confirm('Are you sure you want to delete')) {
      const updatedNvCards = [...nvcards];
      updatedNvCards.splice(cardIndex, 1);
      setNvCards(updatedNvCards);
      toast.success(`Card ${cardIndex + 1} is deleted successfully`);
      setEditNavCard(true);
    }
  };

  // Add/Remove row
  const addRow = (categoryIndex) => {
    const updatedNvCards = [...nvcards];
    updatedNvCards[categoryIndex].cards.unshift({
      heading: '',
      content: '',
    });
    setNvCards(updatedNvCards);
    toast.success('New row added, fill it now.');
    setEditNavCard(true);
  };
  const removeRow = (categoryIndex, cardIndex) => {
    const updatedNvCards = [...nvcards];
    updatedNvCards[categoryIndex].cards.splice(cardIndex, 1);
    setNvCards(updatedNvCards);
    toast.success('Row deleted successfully');
    setEditNavCard(true);
  };

  return (
    <>
      <div className="mx-auto">
        <div className="flex items-center justify-between m-2">
          <H4 className="text-slate-800">Nav Cards</H4>
          {!editNavCard ? (
            <div className="flex gap-2 items-end">
              <Button size={'md-1'} onClick={addCard}>
                Add
              </Button>
              <Button size={'md-1'} onClick={handleNavCard}>
                Edit
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button disabled={loading} onClick={SubmitUpdate} size={'md-1'}>
                Save
              </Button>

              <Button
                variant="secondary"
                disabled={loading}
                size={'md-1'}
                onClick={handleNavCard}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>

        {nvcards?.map((navCardsData, categoryIndex) => (
          <Section key={categoryIndex} className="capitalize border shadow-md">
            <div className="flex justify-between my-4">
              <h3 className="text-2xl font-medium">Card {categoryIndex + 1}</h3>
              <Button
                onClick={() => deleteCard(categoryIndex)}
                className={`bg-white ${BTN_SIZES['sm']}`}
              >
                ❌
              </Button>
            </div>
            <div className="space-y-4 mt-3 py-3">
              <div className="grid grid-cols-4 gap-4 mb-2">
                <div className="px-3">
                  <label className="capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                    {editNavCard && <Icon icon="line-md:edit" />}
                  </label>
                  {editNavCard ? (
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="name"
                      type="text"
                      placeholder="Fill Card Name"
                      value={navCardsData.name}
                      onChange={(e) =>
                        handleNameChange(categoryIndex, e.target.value)
                      }
                    />
                  ) : (
                    <input
                      readOnly
                      className="min-h-[50px] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-not-allowed"
                      value={navCardsData.name}
                    />
                  )}
                </div>
                <div className="px-3 col-span-3">
                  <label className="capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Link {editNavCard && <Icon icon="line-md:edit" />}
                  </label>
                  {editNavCard ? (
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="link"
                      type="text"
                      placeholder="Fill Card Link"
                      value={navCardsData.link}
                      onChange={(e) =>
                        handleLinkChange(categoryIndex, e.target.value)
                      }
                    />
                  ) : (
                    <input
                      value={navCardsData.link}
                      readOnly
                      className="min-h-[50px] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-not-allowed"
                    />
                  )}
                </div>
              </div>

              {navCardsData.cards.map((nvcarin, cardIndex) => (
                <div className="grid grid-cols-4 gap-4 mb-2" key={cardIndex}>
                  <div className="px-3">
                    <label className="capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Heading
                      {editNavCard && <Icon icon="line-md:edit" />}
                    </label>
                    {editNavCard ? (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="Heading"
                        type="text"
                        placeholder="Heading"
                        value={nvcarin.heading}
                        onChange={(e) =>
                          handleInputChange(
                            categoryIndex,
                            cardIndex,
                            'heading',
                            e.target.value,
                          )
                        }
                      />
                    ) : (
                      <input
                        value={nvcarin.heading}
                        readOnly
                        className="min-h-[50px] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-not-allowed"
                      />
                    )}
                  </div>
                  <div className="col-span-3 px-3">
                    <label className="capitalize flex gap-2 tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Content {editNavCard && <Icon icon="line-md:edit" />}
                    </label>
                    {editNavCard ? (
                      <div className="flex gap-1">
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="Content"
                          type="text"
                          placeholder="Content"
                          value={nvcarin.content}
                          onChange={(e) =>
                            handleInputChange(
                              categoryIndex,
                              cardIndex,
                              'content',
                              e.target.value,
                            )
                          }
                        />

                        {/* ADD/REMOVE ROW BTNS */}
                        {cardIndex === 0 ? (
                          <Button
                            onClick={() => addRow(categoryIndex, cardIndex)}
                            className={BTN_SIZES['sm']}
                            variant="ghost"
                          >
                            ➕
                          </Button>
                        ) : (
                          <Button
                            onClick={() => removeRow(categoryIndex, cardIndex)}
                            className={BTN_SIZES['sm']}
                            variant="ghost"
                          >
                            ❌
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="flex gap-1">
                        <input
                          value={nvcarin.content}
                          readOnly
                          className="min-h-[50px] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-not-allowed"
                        />
                        {/* ADD/REMOVE ROW BTNS */}
                        {cardIndex === 0 ? (
                          <Button
                            onClick={() => addRow(categoryIndex, cardIndex)}
                            className={BTN_SIZES['sm']}
                            variant="ghost"
                          >
                            ➕
                          </Button>
                        ) : (
                          <Button
                            onClick={() => removeRow(categoryIndex, cardIndex)}
                            className={BTN_SIZES['sm']}
                            variant="ghost"
                          >
                            ❌
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        ))}
      </div>
    </>
  );
}

function EditNavcards() {
  const [navCard, setNavCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNavCards = () => {
    setLoading(true);
    userAxios
      .get(`/cms/homescreen`)
      .then(function (response) {
        if (response.data.data.home.navcards) {
          setNavCard(response.data.data.home.navcards);
        }
      })
      .catch(function (error) {
        setError(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getNavCards();
  }, []);

  const handleSubUpdate = (data) => {
    console.log(data);
  };

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
          <NavCards
            loading={loading}
            setLoading={setLoading}
            getNavCards={getNavCards}
            navCard={navCard}
            handleSubUpdate={handleSubUpdate}
          />
        </div>
      </Section>
    </>
  );
}

export default EditNavcards;
