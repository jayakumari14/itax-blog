const Create_Loan = () => {
  return (
    <>
      <h1 className="text-center font-bold">Loan Creation Form</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col mb-2">
            <label htmlFor="name">Loan Name</label>
            <input
              className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              type="text"
              name="gstin_no"
              placeholder="Party Name:"
              id="gstin_no"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="dept">Loan Type</label>
            <select
              className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              name=""
              id=""
            >
              <option value="volvo">Personal Laon </option>
              <option value="saab">Bussiness Laon </option>
            </select>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="batch">Short Name</label>
            <input
              className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              type="text"
              name="pan"
              placeholder="Short Name"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="batch">Interest Rate:</label>
            <input
              className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              type="text"
              name="bankname"
              placeholder="Interest Rate:"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="batch">Max Amount:</label>
            <input
              className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              type="number"
              name="bankaccno"
              placeholder="Min Amount:"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="batch">Min Amount</label>
            <input
              className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              type="number"
              name="bankaccno"
              placeholder="Min Amount"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="batch">Description</label>
            <textarea
              className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
              type="number"
              name="bankaccno"
              placeholder="Min Amount"
            />
          </div>
          <br />
          <div className=" mb-2">
            <input type="checkbox" id="" name="" value="" />
            <label for="vehicle1">Identification Document</label>
            <br />
          </div>
          <div className=" mb-2">
            <input type="checkbox" id="" name="" value="" />
            <label for="vehicle1">Income Proof</label>
            <br />
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500">
              Add Document
            </button>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_Loan;
