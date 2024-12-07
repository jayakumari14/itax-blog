"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { blogCategories } from "./staticData";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Blogs = () => {
  const [apires, setApiRes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const start = async () => {
        setLoading(true);

        await axios
          .get(`${BASE_URL}/blog/posts?page=${page}&limit=${2}`)
          .then(function (response) {
            console.log(response);
            setApiRes(response.data.data.posts);
            setTotalPages(response.data.data.pages || 1);
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
            setLoading(false);
          });
      };
      start();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [setPage, page]);
  return (
    <>
      <div className="container mx-auto flex flex-row flex-wrap py-6">
        {/* Posts Section */}
        <>
          <div className="w-full md:w-2/3">
            {loading ? (
              <div className="fixed w-full md:2/3 bg-white flex items-center justify-center">
                <Image
                  src="/loading.svg"
                  alt="loading..."
                  width={100}
                  height={100}
                />
              </div>
            ) : (
              <section className="w-full flex flex-col items-center px-3">
                <div className="grid sm:grid-cols-2 gap-4">
                  {apires?.map((blog) => {
                    const formattedDate = new Date(blog.createdAt);
                    const day = formattedDate.getDate();
                    const month = formattedDate.toLocaleString("default", {
                      month: "short",
                    });
                    const content = blog.contentDescription.slice(0, 180);
                    const year = formattedDate.getFullYear();

                    return (
                      <article
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        key={blog.id}
                      >
                        <div className="h-48 overflow-hidden">
                          <Image
                            className="rounded-t-md object-cover "
                            src={blog.imageUrl}
                            alt="Blog Image"
                            width={800}
                            height={600}
                          />
                        </div>

                        <div className="p-5">
                          <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                              {blogCategories[blog.category]}
                            </span>
                          </div>
                          <p className="md:text-xl font-semibold capitalize  text-xs  hover:text-gray-700  p-2 pb-4 pl-0 ">
                            {blog.title}
                          </p>

                          <p className="pb-2 text-xs hidden md:block">
                            {content}...
                            <Link
                              href={`/blogs/${blog.id}`}
                              className="text-primary ml-2"
                            >
                              Continue reading
                            </Link>
                          </p>
                          <p href="#" className="text-sm pb-3">
                            By
                            <a
                              href="#"
                              className="font-semibold mx-1 hover:text-gray-800"
                            >
                              ItaxEasy
                            </a>
                            ,
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mx-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                              <Icon icon="mdi:clock" />
                              {`${day} ${month} ${year}`}
                            </span>
                          </p>
                          <Link
                            className="mt-3 block"
                            href={`/blogs/${blog.id}`}
                          >
                            <Button className="flex gap-2 items-center hover:bg-blue-600">
                              Read More
                              <Icon icon="mdi:chevron-right" />
                            </Button>
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Pagination */}
              </section>
            )}
          </div>
          {/* Sidebar Section  */}
          <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">About Us</p>
              <p className="pb-2">
                Read latest articles on GST, Income Tax, International Taxation,
                Corporate Laws, Tax Filing Software, AS, Income Tax Slab, GST
                Rates on best tax professional blog in India.
              </p>
              <Link href="/about" className="w-full btn-primary text-center">
                Get to know us
              </Link>
            </div>
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">Related Post</p>

              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <Image
                    className="object-cover w-full  h-96 md:h-20 md:w-48 "
                    src="https://source.unsplash.com/random/?accounts"
                    alt="demo image"
                    height={200}
                    width={400}
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-semibold text-gray-700 text-xs dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <Image
                    className="object-cover w-full  h-96 md:h-20 md:w-48 "
                    src="https://source.unsplash.com/random/?court"
                    alt="demo image"
                    height={200}
                    width={400}
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-semibold text-gray-700 text-xs dark:text-gray-400">
                      HC Allows Liquidator’s Plea to Dissolve Co. As There Were
                      No Recoverable Assets for Remittance of ...
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </>
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

function Pagination(prop) {
  const { page, setPage, totalPages } = prop;
  return (
    <nav className="flex justify-center my-8">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            className=" cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={+page === 1}
            onClick={() => setPage((prev) => +prev - 1)}
          >
            Prev
          </button>
        </li>
        <li>
          <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {page}
          </span>
        </li>
        <li>
          <button
            className=" cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setPage((prev) => +prev + 1)}
            disabled={+totalPages === +page}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Blogs;
