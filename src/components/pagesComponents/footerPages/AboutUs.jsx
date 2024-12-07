import Image from 'next/image';
import React from 'react';

import Marquee from 'react-fast-marquee';

const About = () => {
  return (
    <>
      <div className="bt-green-50 text-justify  rounded-4xl text-2xl container mx-auto ">
        <div className="header text-center text-5xl font-semibold  pt-28 ">
          About Us
        </div>
        <div className="header2 text-center  text-xl  pt-3 ">
          Know Who We Are
        </div>
      </div>
      <div className="container mx-auto mt-10 ">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
          <div>
            <Image
              src="/images/aboutt.jpg"
              width={700}
              height={700}
              alt="about_image"
            />
          </div>
          <div>
            <div className="px-8  space-y-6 pt-36">
              <h2 className="text-2xl">
                <span>5+</span> Years of Experience
              </h2>

              <p className="text-justify">
                We are a company that makes it easy to manage your taxes and
                other daily needs. We started this journey in the year 2019 with
                a simple idea: people don&apos;t have the knowledge or time to
                manage their own accounts, so we&apos;re here to help!
                We&apos;ve made it possible for you to do what you need, when
                you need it. Our products are available online, on your phone,
                and even in person at our offices!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="header text-center text-5xl font-semibold pt-28 ">
          Company Story
        </div>
        <div className="header2 text-center text-xl  pt-3 ">
          Learn About Our Journey
        </div>
        <div className="min-h-screen my-32">
          <div className="min-h-screen flex justify-center">
            <div className="w-2/3 mx-auto">
              <div className="flex flex-row w-full">
                <div className="w-2/5 px-2 py-10">
                  <div className="flex flex-col w-full rounded-lg shadow-xl bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">The Beginning</div>
                      <div className="flex flex-row">
                        <button className="text-blue-900 mr-2 hover:text-blue-300 transition duration-200">
                          <i className="far fa-edit"></i>
                        </button>
                        <button className="text-red-900 hover:text-red-300 transition duration-200">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                    <div className="text-gray-600 text-justify">
                      The founder develops an idea, registers the company with
                      the government, obtains the necessary legal documents and
                      licenses, and obtains any necessary approvals or
                      clearances from both state and central government
                      agencies.
                    </div>
                  </div>
                </div>
                <div className="w-1/5  flex justify-center">
                  <div className="relative flex h-full w-1 bg-blue-900 items-center justify-center">
                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-900 leading-none text-center z-10 bg-white font-thin">
                      <div>2018</div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 px-2 py-10 "></div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-2/5 px-2 py-10"></div>
                <div className="w-1/5  flex justify-center">
                  <div className="relative flex h-full w-1 bg-blue-900 items-center justify-center">
                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-900 leading-none text-center z-10 bg-white font-thin">
                      <div>2019</div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 px-2 py-10 ">
                  <div className="flex flex-col w-full rounded-lg shadow-xl bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">In 2019</div>
                    </div>
                    <div className="text-gray-600 text-justify">
                      In December 2019, Itax Easy Private Limited began
                      development of the company&apos;s web and app development.
                      We have prepared all the things that are needed to develop
                      our company and idea. Itax Easy Private Limited has a
                      great team who are very dedicated in their work. The team
                      members are very professional, honest and hardworking.
                      They always do their best to make sure that everything is
                      done on time.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-2/5 px-2 py-10">
                  <div className="flex flex-col w-full rounded-lg shadow-xl bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">In 2020</div>
                      <div className="flex flex-row">
                        <button className="text-blue-900 mr-2 hover:text-blue-300 transition duration-200">
                          <i className="far fa-edit"></i>
                        </button>
                        <button className="text-red-900 hover:text-red-300 transition duration-200">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                    <div className="text-gray-600 text-justify">
                      In the year 2020, the company started meeting people and
                      took Lic of india as well as star health and started doing
                      business In the year 2020, the company started meeting
                      people and took Lic of india as well as star health and
                      started doing business
                    </div>
                  </div>
                </div>
                <div className="w-1/5  flex justify-center">
                  <div className="relative flex h-full w-1 bg-blue-900 items-center justify-center">
                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-900 leading-none text-center z-10 bg-white font-thin">
                      <div>2020</div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 px-2 py-10 "></div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-2/5 px-2 py-10"></div>
                <div className="w-1/5  flex justify-center">
                  <div className="relative flex h-full w-1 bg-blue-900 items-center justify-center">
                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-900 leading-none text-center z-10 bg-white font-thin">
                      <div>2021</div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 px-2 py-10 ">
                  <div className="flex flex-col w-full rounded-lg shadow-xl bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">In 2021</div>
                    </div>
                    <div className="text-gray-600 text-justify">
                      The founder develops an idea, registers the company with
                      the government, obtains the necessary legal documents and
                      licenses, and obtains any necessary approvals or
                      clearances from both state and central government
                      agencies.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-2/5 px-2 py-10">
                  <div className="flex flex-col w-full rounded-lg shadow-xl bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">In 2022</div>
                      <div className="flex flex-row">
                        <button className="text-blue-900 mr-2 hover:text-blue-300 transition duration-200">
                          <i className="far fa-edit"></i>
                        </button>
                        <button className="text-red-900 hover:text-red-300 transition duration-200">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                    <div className="text-gray-600 text-justify">
                      Itaxeasy Pvt Ltd, a company that provides online tax
                      filing and compliance services, announced a partnership
                      with Yes Bank in 2022. As part of the partnership, Yes
                      Bank will offer Itaxeasy&apos;s services to its customers,
                      making it easier for them to file their taxes online.
                      Itaxeasy, in turn, will benefit from the partnership by
                      gaining access to Yes Bank&apos;s customer base and
                      expanding its reach in the market. The partnership is
                      expected to be mutually beneficial for both companies, as
                      it combines Itaxeasy&apos;s expertise in tax filing with
                      Yes Bank&apos;s strong customer base and banking services.
                    </div>
                  </div>
                </div>
                <div className="w-1/5  flex justify-center">
                  <div className="relative flex h-full w-1 bg-blue-900 items-center justify-center">
                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-900 leading-none text-center z-10 bg-white font-thin">
                      <div>2022</div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 px-2 py-10 "></div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-2/5 px-2 py-10"></div>
                <div className="w-1/5  flex justify-center">
                  <div className="relative flex h-full w-1 bg-blue-900 items-center justify-center">
                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-900 leading-none text-center z-10 bg-white font-thin">
                      <div>2023</div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 px-2 py-10 ">
                  <div className="flex flex-col w-full rounded-lg shadow-xl bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">In 2023</div>
                    </div>
                    <div className="text-gray-600 text-justify">
                      At Itax Easy Private Limited, we believe that everyone
                      deserves to have access to the financial services they
                      need. That&apos;s why we&apos;ve created
                      &apos;ITAXEASY&apos;, a mobile application that makes it
                      easy for you to manage your finances--and make sure
                      you&apos;re paying the right amount of taxes. We know that
                      going through the process of filing your taxes can be
                      confusing and time-consuming, but with our easy-to-use
                      app, it&apos;s never been easier. You can get all the
                      information you need about your taxes in one place, from
                      start to finish--and then just click &apos;submit&apos;
                      when it&apos;s done! And if you ever want to learn more
                      about how taxes work or what might be affecting them in
                      your particular situation? Our team of experts is here for
                      you. We&apos;ll help answer any questions or concerns you
                      might have about how things were calculated or what other
                      factors might be affecting your tax return.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="header text-center font-semibold text-5xl  pt-28 ">
            Our Mission
          </div>
          <div className="header2 text-center text-xl  pt-3 ">
            Learn About Our Mission
          </div>
          <div className=" relative container mx-auto shadow-lg rounded-xl grid my-20 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            <div className="absolute -bottom-0 left-72 ml-24 rounded-full bg-white  px-40 py-10 ">
              Our Vision is to make The World Powerful{' '}
            </div>
            <div className="mission px-20 py-44 text-justify ">
              A mission statement is typically longer and more detailed than a
              vision statement and should be specific, measurable and most
              importantly actionable.For example, a finance company&apos;s
              mission statement may be to &apos;provide accessible and
              affordable financial services to underserved communities, while
              maintaining the highest standards of integrity and customer
              service.&apos; This mission statement communicates the
              company&apos;s commitment to serving specific customer groups and
              its emphasis on ethical behavior.
            </div>
            <div className="mission_image">
              <Image
                src="/images/about.jpg"
                alt="about image"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>

        <div>
          <div className=" our vision header text-center text-5xl font-semibold pt-28 ">
            Our Vision
          </div>
          <div className="header2 text-center text-xl font-semibold pt-3 ">
            Learn About Our Vision
          </div>

          <div className=" relative container mx-auto shadow-lg rounded-xl grid my-20 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            <div className="absolute -bottom-0 left-72 ml-24 rounded-full bg-white  px-40 py-10 ">
              Our Vision is to make The World Powerful{' '}
            </div>
            <div className="vision_image">
              <Image
                width={500}
                height={500}
                src="/images/grow.png"
                alt="our vision"
              />
            </div>
            <div className="vision p-20 text-justify">
              A mission statement is typically longer and more detailed than a
              vision statement and should be specific, measurable and most
              importantly actionable.For example, a finance company&apos;s
              mission statement may be to &quot;provide accessible and
              affordable financial services to underserved communities, while
              maintaining the highest standards of integrity and customer
              service.&quot; This mission statement communicates the
              company&apos;s commitment to serving specific customer groups and
              its emphasis on ethical behavior.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
