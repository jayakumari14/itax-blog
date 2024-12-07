"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { _ } from "ag-grid-community";
import Marquee from "react-fast-marquee";
import Card from "@/styles/cardStyles.jsx";
import { HoveringNavCard } from "@/styles/navcardStyle.jsx";
import Link from "next/link";
import Image from "next/image";
import OngoingProjects from "./OngoingProjects.jsx";
import { BASE_URL, token } from "./staticData.js";
import Hero from "./Hero";
import OurServices from "./OurServices";
import { Icon } from "@iconify/react";

function Home() {
  const [pageData, setPageData] = useState();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState({});
  const [visitors, setVisitors] = useState(0);
  const refs = useRef({});
  const cardRefs = useRef({});
  const containerRef = useRef();
  const currentRef = useRef();
  const activeNav = useRef(null);

  const handleScroll = () => {
    const y = window.scrollY;

    Object.entries(cardRefs.current).forEach(([name, card]) => {
      const navEl = refs.current[name];

      if (
        y >= containerRef.current?.offsetTop + card?.offsetTop &&
        currentRef.current !== navEl
      ) {
        navEl.classList.add("border-primary");
        currentRef.current?.classList.remove("border-primary");

        currentRef.current = navEl;
      }
    });
  };

  const checkImageLink = (url) => {
    if (url && typeof url === "string" && url.includes("/")) {
      return url;
    } else {
      return "/images/home/ongoing_projects/upcoming.avif";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    try {
      setLoading(true);
      const asynFunction = async () => {
        const homeResponse = await axios.get(`${BASE_URL}/cms/homescreen`);
        if (homeResponse.data.success) {
          const data = homeResponse.data.data.home;
          setPageData(data);
          if (data && data.navcards) {
            setSections(data.navcards.map((element) => element.name));
          }
        }
        setLoading(false);
      };
      const countVisitors = async () => {
        try {
          const res = await fetch(`${BASE_URL}/visitorCount/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });

          if (res.ok) {
            const data = await res.json();
            setVisitors(data.count);
          } else {
            console.error("Failed to fetch visitor count:", res.statusText);
          }
        } catch (error) {
          console.error("Error fetching visitor count:", error);
        }
      };

      asynFunction();
      countVisitors();
    } catch (error) {
      console.error("Error in useEffect:", error);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getCmsStats = async () => {
      try {
        const res = await fetch(`${BASE_URL}/cms/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data && data?.data) {
          setAllUsers(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCmsStats();
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
          <Image
            loading="eager"
            width={100}
            height={100}
            src="/loading.svg"
            alt="loading..."
            style={{ width: "100px" }}
          />
        </div>
      ) : (
        <div className="max-w-screen-2xl p-5 mx-auto">
          <Hero pageData={pageData} />

          <div className="w-20 mx-auto h-0 border-t-[6px] border-primary border-dotted my-20" />

          <OurServices ourServicesCards={pageData?.cards || []} />

          <div className="w-20 mx-auto h-0 border-t-[6px] border-primary border-dotted my-20" />

          <div className="max-w-7xl lg:px-12 mx-auto" ref={containerRef}>
            <div id="servicesNav">
              <ul
                className="my-12 px-3 py-3 text-sm mx-auto gap-2 flex flex-row overflow-hidden border md:rounded-lg shadow-sm rounded-md"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                }}
              >
                {pageData.navcards
                  ? pageData.navcards.map((element) => {
                      return (
                        <>
                          {element.name && (
                            <HoveringNavCard
                              ref={(el) => (refs.current[element.name] = el)}
                              key={element.name}
                              id={"nav" + element.name}
                              onClick={() => {
                                const scrollDiv = document.getElementById(
                                  element.name
                                );
                                scrollDiv.scrollIntoView({
                                  behavior: "smooth",
                                  block: "center",
                                  inline: "center",
                                });
                                activeNav.current = scrollDiv;
                              }}
                              className="flex  text-slate-900 items-center justify-center w-4/6 font-semibold text-center cursor-pointer transition-transform-all transform transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md rounded-full"
                            >
                              {element.name}
                            </HoveringNavCard>
                          )}
                        </>
                      );
                    })
                  : null}
              </ul>
            </div>

            <div id="servicesSection" className="max-w-6xl mx-auto relative">
              {pageData.navcards
                ? pageData.navcards.map((element) => {
                    return (
                      <>
                        {element.name && element.link && (
                          <div
                            ref={(el) => (cardRefs.current[element.name] = el)}
                            key={element.name}
                            className="relative"
                            id={element.name}
                          >
                            <h4 className="text-slate-800 text-lg lg:text-[32px] font-semibold text-center flex-wrap my-8">
                              {element.name}
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
                              {element.cards.map((items) => (
                                <>
                                  {items.heading && items.content && (
                                    <li
                                      key={items.heading}
                                      className="flex flex-col justify-between h-52 hover:translate-y-1 transition-all max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden border w-full"
                                    >
                                      <div className="flex items-center px-5 text-sm  py-2 bg-primary text-white font-semibold rounded-t-lg">
                                        <span className="pl-2">
                                          {items.heading}
                                        </span>
                                      </div>
                                      <p className=" max-h-[100px] overflow-hidden line-clamp-4 text-xs px-5 font-medium text-justify">
                                        <p className="bg-blue-100 rounded-full w-10 p-2 text-center mb-2 mt-2 ">
                                          <Icon
                                            icon="carbon:document"
                                            width={20}
                                            className="ml-1 "
                                          />
                                        </p>
                                        {items.content}
                                      </p>
                                      <div className="flex justify-end bg-zinc-100 px-5 gap-5 items-center">
                                        <Link
                                          href={element.link || ""}
                                          target="_blank"
                                          className=" py-5 text-xs link hover:text-primary"
                                        >
                                          <p className="flex flex-row items-center gap-1">
                                            Continue{" "}
                                            <Icon icon="tabler:arrow-right" />
                                          </p>
                                        </Link>
                                        {/* <Link
                                      href={element.readMoreLink || ''}
                                      className="py-2 link hover:text-primary"
                                    >
                                      Read More..
                                    </Link> */}
                                      </div>
                                    </li>
                                  )}
                                </>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="w-20 mx-auto h-0 border-t-[6px] border-primary border-dotted my-20" />

          <div className="max-w-7xl lg:px-8 mx-auto flex md:flex-row flex-col justify-between items-center overflow-hidden">
            <div className="sm:w-1/2 order-2 md:order-1 flex flex-col items-center justify-center">
              <h4 className="font-black text-sm md:text-2xl text-slate-600">
                Choose your right policy
              </h4>
              <h4 className="font-black text-xl md:text-3xl lg:text-justify text-slate-800 leading-snug pt-4">
                Protecting your future,
                <br /> One policy at a time.
              </h4>
              <div className="mt-4">
                <Link
                  href="/dashboard/easy-investment/insurance"
                  className="btn-primary"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="sm:w-1/2 order-1 md:order-2">
              <Image
                src="https://img.freepik.com/free-vector/father-shaking-hands-with-insurance-agent_74855-4412.jpg"
                alt="logo"
                width={400}
                height={250}
                className="mx-auto"
              />
            </div>
          </div>

          <div className="w-20 mx-auto h-0 border-t-[6px] border-primary border-dotted my-20" />

          <div className="mx-auto max-w-4xl flex md:flex-row flex-col items-center overflow-hidden">
            <div className="md:mr-auto">
              <Image
                src="/images/home/phoneApp.jpg"
                alt="logo"
                width={350}
                height={200}
              />
            </div>
            <div className="mx-5 md:mx-0 mt-8 md:mt-0 text-center md:text-left md:ml-auto">
              <h4 className="font-black text-2xl md:text-4xl text-slate-800 leading-snug text-center">
                Visit here
              </h4>
              <h4 className="font-black text-2xl md:text-4xl text-slate-800 leading-snug text-center pt-4">
                File Your ITR In One Go
              </h4>
              <p className="font-semibold text-slate-900 mt-3 text-sm md:text-base text-center">
                Download ItaxEasy App For Better Tax Experience
              </p>
              <a href="#" className="mt-2 flex items-center flex-col">
                <Image
                  src="/icons/home/google-play-badge.png"
                  alt="google-play-badge"
                  width={130}
                  height={40}
                />
                <p className="font-semibold text-slate-900 mt-3 text-sm md:text-base text-center">
                  Being Serviced
                </p>
              </a>
            </div>
          </div>

          <div className="w-20 mx-auto h-0 border-t-[6px] border-primary border-dotted my-20" />

          <div className="max-w-7xl lg:px-8 mx-auto sm:gap-6 grid md:grid-cols-2 place-items-center">
            <Image
              width={500}
              className="rounded-lg"
              src="/images/home/income-text.png"
              height={500}
              alt="Income tax picture"
            />

            <div className="grid gap-4 ">
              <h4 className="font-black text-2xl md:text-4xl text-slate-800 leading-snug">
                Income Tax
              </h4>
              <p className="font-medium mt-3 text-sm md:text-base text-justify grid grid-cols-1 gap-4">
                <span>
                  <strong className=" text-gray-600">
                    Determine Your Taxable Income:
                  </strong>{" "}
                  Your taxable income encompasses the money you earn in a given
                  year from all sources. Subtract any eligible deductions or
                  exemptions to arrive at this crucial figure. Various types of
                  income fall under the taxable category, including wages,
                  salaries, and investment returns.
                </span>
                <span>
                  <strong className=" text-gray-600">
                    Calculate Your Tax Liability:
                  </strong>{" "}
                  Armed with your taxable income, employ a tax calculator or
                  refer to a tax table to gauge the amount you owe. The precise
                  tax owed hinges on factors such as your income level and
                  filing status (single, married filing jointly, etc.).
                  Understanding these steps is pivotal in navigating the
                  intricacies of the income tax system.
                </span>
              </p>

              <div className="flex justify-center items-center">
                <Link href="/blogs" className="btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="w-20 mx-auto h-0 border-t-[6px] border-primary border-dotted my-20" />

          <OngoingProjects ongoingProjects={pageData?.ongoingPro} />

          <div className="w-20 mx-auto h-0 border-t-[6px] border-primary border-dotted my-20" />

          <div className="max-w-7xl lg:px-8 mx-auto">
            <h3 className="text-center text-slate-900 text-3xl md:text-4xl font-extrabold">
              Corporate Partners
            </h3>
            <Marquee gradientWidth={50} speed={40} pauseOnHover={true}>
              <div className="mx-auto py-12 mb-20">
                <div className="grid grid-cols-6 mt-8">
                  {pageData?.corporatePro.map((element, i) => (
                    <div
                      key={element.heading}
                      className="flex flex-col hover:shadow-lg hover:shadow-primary  w-60 shadow-md rounded-lg mx-8 items-center overflow-hidden border"
                    >
                      <div className="flex items-center py-5 h-full min-h-48">
                        <Image
                          width={200}
                          height={100}
                          alt="partners-logo"
                          src={checkImageLink(element.image)}
                        />
                      </div>
                      <div className="bg-zinc-100 w-full flex items-center px-5">
                        <span className="font-semibold text-sm mx-auto text-center py-3">
                          {element.heading}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Marquee>
          </div>

          <div className="w-20 mx-auto h-0 border-t-[6px] border-primary border-dotted my-20" />

          <div className="max-w-7xl lg:px-8 mx-auto">
            <h3 className="text-center text-slate-900 text-3xl md:text-4xl font-extrabold">
              User Insights
            </h3>
            <div className="flex flex-wrap gap-10 my-16 mx-auto justify-center sm:justify-between ">
              <Card text={`${visitors || 0}+`} color="rgb(0, 85, 212)">
                Total Visitors
              </Card>
              <Card
                text={`${allUsers.totalUsers || 0}+`}
                color="rgb(0, 85, 212)"
              >
                Total Active User
              </Card>
              <Card
                text={`${allUsers.totalPhoneNumbers || 0}+`}
                logo="logo"
                color="rgb(0, 85, 212)"
              >
                Total Phone Contacts
              </Card>
              <Card
                text={`${allUsers.totalEmails || 0}+`}
                logo="logo"
                color="rgb(0, 85, 212)"
              >
                Total Mailing Addresses
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
