import React, { useRef, useState } from "react";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import UseAuth from "@/hooks/useAuth";
const CreateBlogPost = () => {
  const { token } = useAuth();
  const titleRef = useRef("");
  const contentRef = useRef("");
  const imageUrlRef = useRef("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(
      titleRef.current.value,
      contentRef.current.value,
      imageUrlRef.current.value
    );
    try {
      const response = await axios.post(
        `${BASE_URL}/blog/posts`,
        {
          title: titleRef.current.value,
          content: contentRef.current.value,
          imageUrl: imageUrlRef.current.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with how you set and retrieve the admin token
          },
        }
      );

      // Handle the response, show success message, etc.
      console.log("Blog post created successfully:", response.data);
    } catch (error) {
      console.error("Error creating blog post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center">
      <div className="w-full mx-auto px-6 py-4 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              ref={titleRef}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              id="content"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              rows="6"
              placeholder="Enter content"
              ref={contentRef}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageUrl"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter image URL"
              ref={imageUrlRef}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Blog Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPost;
