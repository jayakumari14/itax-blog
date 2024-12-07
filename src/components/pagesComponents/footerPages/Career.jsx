'use client';

import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageContainer from '../pageLayout/PageContainer.jsx';
import userAxios from '@/lib/userAxios.js';

// import Select from 'react-select';
// import { colourOptions } from './docs/data';
// import Button from '@/components/ui/Button.js';

const Career = () => {
  const [success, setSuccess] = useState(true);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (body) => {
    try {
      let maxlimit = 1024 * 1024;
      const file = body.cv[0];

      let size = file.size;
      let type = file.type;

      if (!file) {
        throw new Error('Resume is required.');
      }

      if (size > maxlimit && type !== 'application/pdf') {
        throw new Error('Only Pdf File Accepted and Should be less than 1 mb.');
      }

      setSuccess(false);
      setMessage('');
      setLoading(true);

      const formData = new FormData();

      formData.append('name', body?.name);
      formData.append('skills', 'Available in CV');
      formData.append('gender', body.gender);
      formData.append('email', body.email);
      formData.append('pin', body.pin);
      formData.append('address', body.address);
      formData.append('mobile', body.mobile);
      formData.append('cv', body.cv[0]);

      const { data, status, message } = await userAxios.post(
        '/career/create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (status === 201) {
        setSuccess(data?.status);
        reset({
          name: '',
          skills: '',
          gender: '',
          email: '',
          pin: '',
          address: '',
          mobile: '',
          cv: '',
        });
        toast.success(data?.message);
      } else {
        toast.error(message ?? 'Server error');
        setSuccess(true);
      }
      // setMessage(json.msg);
    } catch (error) {
      const message = error?.response?.data?.message;
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer className="p-0 ">
      <div
        className={
          'mx-auto max-w-5xl flex flex-col lg:flex-row bg-blue-300 dark:bg-gray-700 dark:text-gray-50 border ease-in-out text-black '
        }
        id="careerForm"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="formName"
          // className='px-3 overflow-hidden md:w-full w-11/12 mx-auto py-10 md:px-12 [&_label]:text-xl shadow-xl bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 md:[&_input]:p-3 [&_input]:py-2 [&_input]:outline-none [&_input]:border-b-2 [&_input]:--border--clr-neutral-200 [&_input]:indent-1 flex -text--clr-neutral-200 [&_input]:-text--clr-neutral-200 gap-5 flex-col'
          className={`
						mt-6
						md:mt-0
                        px-3 
                        overflow-hidden 
                        md:w-full 
                        w-11/12 mx-auto 
                        py-4 
                        md:px-12 
                        [&_label]:text-xl 
                        shadow-xl 
                        bg-blue-500
                        dark:-bg--clr-neutral-900
                        dark:text-gray-50
                        text-white
                        md:[&_input]:p-3 
                        [&_input]:py-2 
                        [&_input]:outline-none 
                        [&_input]:border-b-2 
                        [&_input]:--border--clr-neutral-200 
                        [&_input]:indent-1 
                        flex 
                        gap-5 
                        flex-col
                        `}
        >
          <h1 className="text-3xl font-semibold md:text-4xl text-center my-3">
            Application
          </h1>
          <div className="flex flex-col relative">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="name"
              className="-bg--clr-neutral-200  transition ease-in-out delay-150    hover:bg-gray-200 duration-300   border -border--clr-neutral-200 -text--clr-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('name', { required: true })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name?.type === 'required' && (
              <p className=" -text--clr-accent-250 text-white " role="alert">
                Name is required
              </p>
            )}
          </div>

          <div className="flex flex-col relative">
            <input
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id="email"
              className="-bg--clr-neutral-200  transition ease-in-out delay-150   hover:bg-gray-200 duration-300 border -border--clr-neutral-200 -text--clr-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('email', { required: true })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email?.type === 'required' && (
              <p className=" -text--clr-accent-250  text-white " role="alert">
                Email is required
              </p>
            )}
          </div>
          <div className="flex flex-col relative">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Your Address"
              className="-bg--clr-neutral-200  transition ease-in-out delay-150   hover:bg-gray-200 duration-300 border -border--clr-neutral-200 -text--clr-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('address', { required: true })}
              aria-invalid={errors.address ? 'true' : 'false'}
            />
            {errors.address?.type === 'required' && (
              <p className=" -text--clr-accent-250  text-white " role="alert">
                Address is required
              </p>
            )}
          </div>
          {/* <div className='flex flex-col relative'>
						<input
							type='text'
							name='skills'
							id='skills'
							placeholder='Your skills'
							// className='shadow-sm bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 p-1'
							className="-bg--clr-neutral-200 border -border--clr-neutral-200 -text--clr-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							{...register("skills", { required: true })}
							aria-invalid={errors.skills ? "true" : "false"}
						/>
						{errors.skills?.type === "required" && (
							<p className=' -text--clr-accent-250   ' role='alert'>
								Mention your skills
							</p>
						)}
					</div> */}
          {/* <div className="flex flex-col relative text-gray-500 font-bolt">
            <p className="text-white">Add Skill</p>
            <Select
              defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              options={colourOptions}
              className="basic-multi-select  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300 "
              classNamePrefix="select"
              {...register("skills", { required: true })}
              aria-invalid={errors.skills ? "true" : "false"}
            />
            {errors.skills?.type === "required" && (
              <p className=" -text--clr-accent-250  text-white " role="alert">
                Mention your skills
              </p>
            )}
          </div> */}

          <div className="flex gap-3 justify-between">
            <div className="w-2/4">
              <input
                type="text"
                placeholder="Enter Your Address Pin Code"
                className="-bg--clr-neutral-200  transition ease-in-out delay-150   hover:bg-gray-200 duration-300 border -border--clr-neutral-200 -text--clr-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('pin', { required: true })}
                aria-invalid={errors.address ? 'true' : 'false'}
              />
              {errors.address?.type === 'required' && (
                <p className=" -text--clr-accent-250  text-white " role="alert">
                  PIN Code is required
                </p>
              )}
            </div>
            <div className="flex w-2/4 flex-col relative">
              <input
                type="text"
                name="mobile"
                placeholder="Enter Your Phone Number"
                id="moblie"
                className="-bg--clr-neutral-200  transition ease-in-out delay-150 hover:bg-gray-200 duration-300 border -border--clr-neutral-200 -text--clr-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('mobile', { required: true })}
                aria-invalid={errors.mobile ? 'true' : 'false'}
              />
              {errors.mobile?.type === 'required' && (
                <p className=" -text--clr-accent-250   text-white" role="alert">
                  Contact number is required
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 lg:[&>div]:basis-1/2 items-center lg:flex-row ">
            <div className="flex w-full mx-2">
              <p className="mr-2 text-lg flex-shrink-0">Gender :</p>
              <select
                className=" -bg--clr-neutral-200  transition ease-in-out delay-150   hover:bg-gray-200 duration-300 border -border--clr-neutral-200 -text--clr-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="gender"
                id="gender"
                {...register('gender', { required: true })}
                aria-invalid={errors.gender ? 'true' : 'false'}
              >
                <option selected disabled hidden>
                  ---Select---Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender?.type === 'required' && (
                <p className=" -text--clr-accent-250  text-white " role="alert">
                  Mention your gender
                </p>
              )}
            </div>

            <div className="flex w-full items-center [&_label]:text-xl">
              <p className="mr-2 text-lg flex-shrink-0">Role :</p>
              <select
                name="role"
                className="-bg--clr-neutral-200  transition ease-in-out delay-150   hover:bg-gray-200 duration-300 border -border--clr-neutral-200 -text--clr-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="role"
                {...register('role', { required: true })}
                aria-invalid={errors.role ? 'true' : 'false'}
              >
                <option selected disabled hidden>
                  --Select--Role
                </option>
                <option value="job">Job</option>
                <option value="internship">Internship</option>
              </select>
              {errors.role?.type === 'required' && (
                <p className=" -text--clr-accent-250  text-white " role="alert">
                  Select a role
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div>
              <label
                htmlFor="resume"
                className="block mb-2 text-white text-sm font-medium -text--clr-neutral-900 dark:text-white"
              >
                Resume :
              </label>
            </div>
            <div>
              <input
                type="file"
                name="cv"
                id="name"
                className="block w-full text-sm -text--clr-neutral-900  transition ease-in-out delay-150    hover:bg-gray-200 duration-300 border -border--clr-neutral-200 rounded-lg cursor-pointer -bg--clr-neutral-200 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                {...register('cv', { required: true })}
                aria-invalid={errors.cv ? 'true' : 'false'}
              />

              {errors.cv?.type === 'required' && (
                <p className=" -text--clr-accent-250  text-white " role="alert">
                  CV / Resume is required
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2 justify-center [&>*]:mr-2"></div>

          <div className="flex gap-4 justify-between  ">
            <button
              type="reset"
              form="formName"
              name="reset"
              id="submit"
              className="btn-primary bg-red-500 hover:bg-red-600"
            >
              Reset
            </button>
            {/* <button
							type='submit'
							name='submit'
							disabled={loading}
							id='submit'
							className=' mx-auto py-3  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300 border-none cursor-pointer font-bold px-16 -text--clr-neutral-900 rounded-lg bg-green-700'
						>
							{loading ? (
								<span className='inline-block w-5 h-5 border-2 border-t-0 border-r-0 rounded-full border-primary animate-spin'></span>
							) : (
								"Submit"
							)}
						</button> */}
            <button
              className="btn-primary bg-green-500 hover:bg-green-600"
              type="submit"
              name="submit"
              disabled={loading}
              id="submit"
            >
              {loading ? (
                <span className="inline-block w-5 h-5 border-2 border-t-0 border-r-0 rounded-full border-primary animate-spin"></span>
              ) : (
                'Submit'
              )}
            </button>
          </div>
          {message && (
            <p
              className={`text-center font-bold mt-2 ${
                success ? '-text--clr-accent-150' : ' -text--clr-accent-250   '
              }`}
            >
              {message}.
            </p>
          )}
          <div>
            {/* <Button buttonname={"Submit"}>Submit</Button>
						<Button buttonname={"Reset....nhnhnh"}>Submit</Button> */}
          </div>
        </form>

        <div className="flex justify-center shadow-xl">
          <div className="px-12 py-10">
            <h2 className="text-3xl md:text-4xl">
              <span className="border-b-4 border-red-500">Con</span>
              tact us
            </h2>
            <div className="text-lg flex my-4 [&>div]:flex [&>div]:items-center [&>div]:gap-5 flex-col gap-12">
              <p className="mt-8">
                We&apos;re open for any suggestion or any query..
              </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>
                  G - 41, Gandhi Nagar, Near Defense Colony, Padav Gwalior
                  474002 (M.P)
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>8770877270</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <p>support@itaxeasy.com</p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>https://itaxeasy.com/</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Career;
