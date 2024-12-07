"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { blogCategories } from "./staticData";
import Image from "next/image";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function BlogIndividualPage({ params }) {
  const pathURL = params.slug[0];
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blog/posts/${pathURL}`);
        console.log("response :", response.data);
        setBlogData(response.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(`${BASE_URL}/blog/posts/${id}`, blogData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEditMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/blog/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Redirect to the blog list page after successful deletion
      window.location.replace("/blogs");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function formateUploadDate() {
    const formattedDate = new Date(blogData.createdAt);
    const day = formattedDate.getDate();
    const month = formattedDate.toLocaleString("default", {
      month: "short",
    });
    const year = formattedDate.getFullYear();
    return `${day} ${month} ${year}`;
  }

  return (
    <>
      {loading ? (
        <div className="fixed min-h-screen w-screen bg-white flex items-center justify-center">
          <Image
            src="/loading.svg"
            alt="loading..."
            width={100}
            height={100}
            style={{ width: "100px" }}
          />
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 py-6">
          {/* Posts Section */}
          <section className="w-full md:col-span-4   items-center px-3">
            <article className="flex flex-col shadow my-4">
              {/* Article Image */}
              <div className="w-full max-h-96 relative overflow-hidden">
                <Image
                  src={blogData.imageUrl || "/default-image.jpg"}
                  alt="blog image"
                  width={1200}
                  height={400}
                  layout="responsive"
                  className="object-bottom  aspect-auto object-contain"
                  objectFit="cover"
                />
              </div>
              <div className="bg-white flex flex-col justify-start p-6">
                <div>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {blogCategories[blogData.category]}
                  </span>
                </div>
                <h6 className="text-2xl font-semibold pt-3 capitalize hover:text-gray-700 pb-4">
                  {blogData.title}
                </h6>
                <p className="text-sm flex items-center pb-3">
                  By
                  <span className="font-semibold pl-1 pr-2 hover:text-gray-800">
                    ItaxEasy,
                  </span>
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                    {formateUploadDate()}
                  </span>
                </p>
                <h1 className="pb-6 text-xl font-semibold pt-4">
                  {blogData.contentHeading}
                </h1>
                <p className="pb-6">{blogData.contentDescription}</p>
              </div>
            </article>
          </section>
          {/* Sidebar Section */}
          <aside className="w-full md:col-span-2  flex flex-col items-center px-3">
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
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
