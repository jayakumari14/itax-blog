"use client";
import userAxios from "@/lib/userAxios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const FormClassName = {
  Label: "block text-sm font-medium leading-6 text-gray-900",
  Input:
    "px-2 py-1.5 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
};

export default function BajajCapitalForm() {
  const [loading, setLoading] = useState(false); 
  // const [userData, setUserData] = useState(""); 
  const [name, setName] = useState(""); 
  const [address, setAddress] = useState(""); 
  const [gender, setGender] = useState(""); 
  const [dob, setDob] = useState(""); 
  const [phone, setPhone] = useState(""); 
  const [type, setType] = useState(""); 
  const [email, setEmail] = useState(""); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    userAxios
      .get(`/user/profile`)
      .then(function (response) {
        console.log(response.data.data.user);
        // setUserData(response.data.data.user);      
        setName(`${response.data.data.user.firstName} ${response.data.data.user.lastName} `);      
        setAddress(response.data.data.user.address);      
        setPhone(response.data.data.user.phone);      
              
        setEmail(response.data.data.user.email);      
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);




  const onSubmit = async () => {

    console.log("on sbmit run");

    try {
      setLoading(true);
      const response = await userAxios.post("/insourance/apply", {
        name: name,
        address:address,
        gender:gender,
        // vehicle: data.vehicle,
        maritalStatus:"",
        dob:dob,
        mobile: phone,
        email: email,
        type:type
      });


      toast.success("Details Submmited We Reach You Shortly");
      
    } catch (error) {
      if (error?.response?.status === 409) {
        toast.success(error.response.data.message);
        console.log("Internal server error login", error);
      } else if (error?.response && error?.response?.status === 500) {
        toast.error("something went wrong. Please try again later");
        console.log("Internal server error login", error);
      }
    } finally {
      setLoading(false);
    }

    console.log();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4 grid gap-4 grid-cols-2">
        <div>
          <label className={FormClassName.Label} htmlFor="fullName">
             Name
          </label>
          <input
            className={FormClassName.Input}
            type="text"
            id="name"
            autoComplete="fullName"
            value={name}
            placeholder="Enter your  Name"
           onChange={(e)=>setName(e.target.value)}
          />
          
        </div>
        <div>
          <label className={FormClassName.Label} htmlFor="address">
            Address
          </label>
          <input
            className={FormClassName.Input}
            type="text"
            id="address"
            autoComplete="address"
            value={address}
            placeholder="Enter your Address"
            onChange={(e)=>setAddress(e.target.value)}

          />
         
        </div>

        <div>
          <label className={FormClassName.Label} htmlFor="phone">
            Phone
          </label>
          <input
            className={FormClassName.Input}
            type="text"
            id="phone"
            value={phone}
            autoComplete="phone"
            placeholder="+91"
            onChange={(e)=>setPhone(e.target.value)}

          />
          
        </div>
        <div>
          <label htmlFor="email" className={FormClassName.Label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            className={FormClassName.Input}
            placeholder="123@gmail.com"
            onChange={(e)=>setEmail(e.target.value)}

          />
        </div>
        <div>
          <label htmlFor="email" className={FormClassName.Label}>
            Dob
          </label>
          <input
            id="dob"
            name="dob"
            type="date"            
            // value={email}
            className={FormClassName.Input}
           
            onChange={(e)=>setDob(e.target.value)}

          />
        </div>
        <div>
          <label className={FormClassName.Label} htmlFor="vehicle">
            Vehicle Number
          </label>
          <input
            className={FormClassName.Input}
            type="text"
            id="vehicle"
            autoComplete="vehicle"
            placeholder="Enter your Vehicle"
           
          />
          
        </div>
        <div>
          <label className={FormClassName.Label} htmlFor="vehicle">
            Gender
          </label>
          <select id="gender" className={FormClassName.Input} onChange={(e)=>setGender(e.target.value)}
>
                <option selected disabled>Choose a Gender</option>
                
                <option value="male">Male</option>
                <option value="female">female</option>
                
              
              </select>
         
          {errors.vehicletype && (
            <span className="text-red-500 text-xs">
              Please enter your Vehicletype Number
            </span>
          )}
        </div>
        <div>
          <label className={FormClassName.Label} htmlFor="vehicle">
            Vehicle Type
          </label>
          <select id="type" className={FormClassName.Input} onChange={(e)=>setType(e.target.value)}
>
                <option selected disabled>Choose a Vehicle</option>
                <option value="heavyvehicle">Heavy Vehicle</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                
              
              </select>
         
          {errors.vehicletype && (
            <span className="text-red-500 text-xs">
              Please enter your Vehicletype Number
            </span>
          )}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <div className="flex-1">
          <button
            type="submit"
            className=" w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading === true ? (
              <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
            ) : (
              " Submit"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
