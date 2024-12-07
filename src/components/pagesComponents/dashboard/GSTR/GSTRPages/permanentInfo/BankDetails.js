export default function BankDetails({ userProfile }) {
  const user = userProfile?.response?.data?.user;
  const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`;

  return (
    <div className="p-2 rounded-md bg-white shadow-md">
      <div className=" shadow-inner shadow-neutral-500/50 rounded-md p-2 bg-gray-200">
        <button
          className={`rounded-md grid place-content-center text-xs md:text-sm py-1 px-2`}
          type="button"
        >
          Bank Details
        </button>
      </div>
      <div className="flex flex-wrap">
        <div className="bg-white lg:mx-0 mx-auto max-w-[500px] my-6 p-6 sm:px-6 flex flex-wrap justify-center gap-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded-md border border-txt/10">
          <div
            className="
                          mt-4
                          bg-gradient-to-br from-blue-700 to-neutral-900  text-white 
                          w-64 min-h-32 p-4 rounded-md
                          space-y-2
                          "
          >
            <div className="flex justify-end text-2xl">
              {/* <Icon icon="wpf:sim-card-chip" /> */}
              CARD
            </div>
            <div className="flex items-center gap-2 tracking-tighter font-light">
              <span>****</span>
              <span>****</span>
              <span>****</span>
              <span>****</span>
            </div>
            <div className="text-xs">Card Name</div>
            <div className="flex justify-between">
              <div className="capitalize text-base">{fullName}</div>
              <div className="text-xs">06/24</div>
            </div>
          </div>
          <ul
            className="
                          mt-4 p-2 grid gap-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]
                          [&>li]:grid [&>li]:grid-cols-2 [&>li>div]:text-center
                          "
          >
            <li>
              <span className="text-sm font-semibold">Bank Name:</span>
              <div className=" underline underline-offset-2 text-xs">
                {user?.bankName || 'N/A'}
              </div>
            </li>
            <li>
              <span className="text-sm font-semibold">Account Number:</span>
              <div className=" underline underline-offset-2 text-xs">
                {user?.accountNumber || 'N/A'}
              </div>
            </li>
            <li>
              <span className="text-sm font-semibold">Card Number:</span>
              <div className=" underline underline-offset-2 text-xs">
                {user?.cardNumber || 'N/A'}
              </div>
            </li>
            <li>
              <span className="text-sm font-semibold">CVV Code:</span>
              <div className=" underline underline-offset-2 text-xs">
                {user?.cvv || 'N/A'}
              </div>
            </li>
            <li>
              <span className="text-sm font-semibold">Card Expire:</span>
              <div className=" underline underline-offset-2 text-xs">
                {user?.cardExpiry || 'N/A'}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
