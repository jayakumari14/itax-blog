'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import userAxios from '@/lib/userAxios';
import { toast } from 'react-toastify';
export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const submitHandler = async (formData) => {
    console.log(formData);
    try {
      setLoading(true);
      const response = await userAxios.post('/contactUs/create', {
        ...formData,
        // phoneNumber: '8400258085',
      });
      toast.success(response.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
      setLoading(false);
    }
    reset();
  };
  return (
    <main className=" bg-gray-100 dark:bg-neutral-900 sm:p-8 min-h-screen grid place-items-center">
      <section className="sm:rounded-lg -bg--clr-neutral-100 dark:bg-gray-800 p-4 sm:p-8 max-w-7xl mx-auto grid gap-12 lg:grid-cols-[2fr,1fr] grid-rows-[2fr,1fr] lg:grid-rows-1">
        <div className="bg-gray-100 py-8 lg:py-16 px-4 mx-auto max-w-3xl rounded-md dark:bg-neutral-900 shadow-lg dark:shadow-sm dark:shadow-white ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="  grid sm:grid-cols-3 gap-2"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter name"
              />
              {errors && errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email<sup className="text-red-500">*</sup>
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="xyz@gmail.com"
              />
              {errors && errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'Subject is required' })}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
              />
              {errors && errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message<sup className="text-red-500">*</sup>
              </label>
              <textarea
                id="message"
                rows="6"
                {...register('message', { required: 'Message is required' })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
              {errors && errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <div className="flex gap-4 flex-wrap sm:col-span-3">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center bg-primary text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
                ) : (
                  'Send Message'
                )}
              </button>
              <button
                type="reset"
                onClick={() => {
                  reset();
                }}
                className="py-3 px-5 text-sm font-medium text-center  bg-red-500 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset
              </button>
            </div>
          </form>
          <div className="flex justify-between mt-8">
            <a
              className="underline font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
              href="tel:+918770877270"
            >
              Contact us: 8770877270
            </a>
            <a
              className="underline font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
              href="mailto:support@itaxeasy.com"
            >
              support@itaxeasy.com
            </a>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md overflow-hidden shadow-lg dark:shadow-sm dark:shadow-white ">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4668.759088204337!2d78.1760718502079!3d26.2171536260565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c69faa0547f1%3A0x3996f8cdea3069b!2sItax%20easy%20private%20limited!5e0!3m2!1sen!2sin!4v1676326483432!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
