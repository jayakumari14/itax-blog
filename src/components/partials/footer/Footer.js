"use client";

import React, { useCallback, useEffect, useState } from "react";
import { I } from "@/components/iconify/I";
import Link from "next/link";
import userAxios from "@/lib/userAxios";
import { toast } from "react-toastify";
// import { GOOGLE_MAPS_API_KEY } from "../env";

export default function Footer() {
  const [socials, setSocials] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Fetches the footer
  const getSocials = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await userAxios.get("/cms/footer");
      if (status === 200 && data) {
        setSocials(data.data?.socials);
      } else {
        toast.error("Error getting socials");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // aman- if any error use this code doing extra work

  // const getSocials = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await userAxios.get('/cms/footer');
  //     console.log('API Response:', response); // Log the entire response
  //     const { data, status } = response;
  //     if (status === 200 && data) {
  //       setSocials(data.data?.socials);
  //     } else {
  //       toast.error('Error getting socials');
  //     }
  //   } catch (error) {
  //     console.error('API call error:', error); // Log the error for more context
  //     toast.error('An error occurred while fetching socials');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    getSocials();
  }, [getSocials]);

  return (
    <>
      <footer className="bg-zinc-100 border-t py-10">
        <div className="max-w-7xl mx-auto pb-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col max-w-xl items-start justify-between">
              <div className="md:pl-10 mt-3 md:mt-0 px-5 md:px-0">
                <h4 className="font-bold text-xl">iTaxEasy</h4>
                <p className="text-sm font-medium mt-1">
                  India&apos;s Most Trusted Accounting And Financial Platform
                  Continuing The Legacy Of Accounting Firm N.S. Bedi And
                  Associates Since 1972.
                </p>
                <iframe
                  width="100%"
                  className="mt-5 border border-double border-zink-700 p-4 hover:shadow-lg transition duration-300 ease-in-out"
                  // src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA-P0vEicsimy6oT5Ssd1Ml_XkbdUOm99E&q=LogixBlossomGreensNoida,Sector143,Noida,UttarPradesh`}
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2999690887127!2d77.42162527485846!3d28.500621390059813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9aadaef8dab%3A0xf4fd0d24e08b249b!2sLogix%20Blossom%20Greens%20Noida%2C%20Sector%20143%2C%20Noida%2C%20Uttar%20Pradesh%20201305!5e0!3m2!1sen!2sin!4v1699005409701!5m2!1sen!2sin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4668.759088204337!2d78.1760718502079!3d26.2171536260565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c69faa0547f1%3A0x3996f8cdea3069b!2sItax%20easy%20private%20limited!5e0!3m2!1sen!2sin!4v1676326483432!5m2!1sen!2sin"
                  allowFullScreen
                ></iframe>
                {/* <img
                width={150}
                src="logo.svg"
                alt="logo"
                className="object-contain mx-auto md:m-0 py-5"
              /> */}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between md:ml-auto mt-8 md:mt-0">
              <div className="mx-8">
                <h6 className="text-lg font-semibold border-b">Quick Link</h6>
                <ul className="font-medium text-sm leading-7 my-2">
                  <li>
                    <Link href="/about" className="hover:text-blue-600">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactus" className="hover:text-blue-600">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://profile.itaxeasy.com/"
                      className="hover:text-blue-600 inline-block"
                    >
                      Company Profile
                    </a>
                  </li>
                  <li>
                    <Link href="/tc" className="hover:text-blue-600">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-blue-600"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/disclaimerpolicy"
                      className="hover:text-blue-600"
                    >
                      Disclaimer Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund-and-cancellation-policy"
                      className="hover:text-blue-600"
                    >
                      Refund & Cancellation Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shipping-and-delivery-policy"
                      className="hover:text-blue-600"
                    >
                      Shipping & Delivery Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/softwarelicense"
                      className="hover:text-blue-600"
                    >
                      Software License
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-blue-600">
                      FAQ&apos;s{" "}
                      <span className="text-xs text-blue-500 italic">
                        Upcoming
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-8">
                <h6 className="text-lg font-semibold border-b">We Offer</h6>
                <ul className="font-medium text-sm leading-7 my-2">
                  <li>
                    <Link href="/career" className="hover:text-blue-600">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-8">
                <h6 className="text-lg font-semibold border-b">
                  Any Questions
                </h6>
                <ul className="font-medium text-sm leading-7 my-2">
                  <li>
                    <a href="tel:+918770877270">Contact us: {socials.phone}</a>
                  </li>
                  <li>
                    <a href={`mailto:${socials.email}`}>{socials.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {!isLoading ? (
            <div className="flex flex-col md:flex-row items-start justify-between border-slate-300 border-t mt-5 pt-8 mx-1 sm:mx-10">
              <div className="max-w-2xl">
                <h5 className="font-semibold text-xl">Our Branches</h5>
                <div className="flex mt-1">
                  <p className="text-sm font-medium pr-5 py-2">
                    {socials.address}
                  </p>
                  <p className="text-sm font-medium border-slate-300 border-l pl-5 py-2">
                    {socials.addressAlternate}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-auto mt-8 md:mt-0">
                <h5 className="font-semibold text-xl text-center md:text-right">
                  Stay Connected
                </h5>
                <div className="flex items-center justify-between mt-2">
                  <a
                    target="_blank"
                    href={socials.facebook}
                    className="h-7 w-7 mx-3"
                  >
                    {React.cloneElement(socialMediaIcons.fb, {
                      fill: "#1877F2",
                    })}
                  </a>
                  <a
                    target="_blank"
                    href={socials.instagram}
                    className="h-7 w-7 mx-3"
                  >
                    <I icon="skill-icons:instagram" className=" h-7 w-7" />
                    {/* {React.cloneElement(socialMediaIcons.insta, { fill: "#C13584" })} */}
                  </a>
                  <a
                    target="_blank"
                    href={socials.linkedin}
                    className="h-7 w-7 mx-3"
                  >
                    {React.cloneElement(socialMediaIcons.linkedin, {
                      fill: "#0A66C2",
                    })}
                  </a>
                  <a
                    target="_blank"
                    href={socials.whatsapp}
                    className="h-7 w-7 mx-3"
                  >
                    {React.cloneElement(socialMediaIcons.whatsapp, {
                      fill: "#25D366",
                    })}
                  </a>
                  <a
                    target="_blank"
                    href={socials.youtube}
                    className="h-10 w-10 ml-3 flex items-center mt-[2px]"
                  >
                    {React.cloneElement(socialMediaIcons.yt, {
                      fill: "#FF0000",
                    })}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="bg-zinc-200 py-5 text-center">
          <span className="text-xs font-semibold">{socials.copyright}</span>
        </div>
      </footer>
    </>
  );
}

const socialMediaIcons = {
  fb: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
    </svg>
  ),

  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  ),

  yt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  ),

  insta: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  ),

  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  ),
};
