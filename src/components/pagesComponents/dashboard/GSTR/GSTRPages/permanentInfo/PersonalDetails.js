export default function PersonalDetails({ userProfile }) {
  const user = userProfile?.response?.data?.user;
  const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`;

  return (
    <div className="p-2 rounded-md bg-white shadow-md">
      <div className=" shadow-inner shadow-neutral-500/50 rounded-md p-2 bg-gray-200">
        <button
          className={`rounded-md grid place-content-center text-xs md:text-sm py-1 px-2`}
          type="button"
        >
          Personal Details
        </button>
      </div>
      <div className="bg-white lg:mx-0 mx-auto max-w-[500px] my-6 p-6 sm:px-6 flex flex-wrap justify-center gap-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded-md border border-txt/10">
        <div
          className="flex-[1_1_2rem]
              bg-gradient-to-br from-blue-700 to-neutral-900  text-white 
              min-w-36 min-h-36 p-4 rounded-sm
               grid place-content-center
              "
        >
          USER
        </div>
        <ul className=" grid grid-cols-2 gap-2 text-black">
          <li>
            <span className="text-sm font-semibold">Full name:</span>
            <div className="capitalize underline underline-offset-2 text-xs">
              {fullName}
            </div>
          </li>
          <li>
            <span className="text-sm font-semibold">Email :</span>
            <div className=" underline underline-offset-2 text-xs">
              {user?.email}
            </div>
          </li>
          <li>
            <span className="text-sm font-semibold">Phone Number:</span>
            <div className=" underline underline-offset-2 text-xs">
              {user?.phone}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
