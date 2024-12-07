"use client"
import { useForm } from "react-hook-form"
import userAxios from "@/lib/userAxios"
import { useState } from "react";
import {toast} from "react-toastify"
import { getCookie,setCookie } from "cookies-next"
import { useRouter } from "next/navigation";
import FormBrand from "@/components/pagesComponents/auth/FormBrand";

function LoginWithGstin_step1(props) {
    const {register} = props;
    return(
        <ul className="space-y-2">
            <li>
                <label className="label" htmlFor="person">Person</label>
                <input
                    {...register("person")}
                    className="input"    
                    type="text" id="person"
                    placeholder="Person"
                />
            </li>
            <li>
                <label className="label" htmlFor="username">Username</label>
                <input
                    {...register("username")}
                    className="input"    
                    type="text" id="username"
                    placeholder="Username"
                />
            </li>
            <li>
                <label className="label" htmlFor="gstin">GSTIN</label>
                <input
                    {...register("gstin")}
                    className="input"    
                    type="text" id="gstin" 
                    placeholder="GSTIN"
                />
            </li>
            
        </ul>
    )
}
function LoginWithGstin_step2(props) {
    const {register} = props
    return(
        <>
            <ul className="grid gap-2">
                <li>
                    <label className="label" htmlFor="OTP">OTP</label>
                    <div className="flex">
                        <input
                            {...register("otp")}
                            className="input"
                            type="text" 
                            id="otp" 
                            placeholder="OTP"
                        />
                    </div>
                </li>
            </ul>
        </>
    )
}
export default function LoginWithGstin() {
    const {register, handleSubmit,getValues} = useForm();
    const [isStep1, setIsStep1] = useState(1);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    if(typeof window !== "undefined" && getCookie("gstin")) {
        return router.replace("/dashboard/easy-gst-return/check-return-status");
    }

    const handleSendOtp = async () => {
        const {gstin,username} = getValues();
        
        if (gstin && username) {
            try {
                setIsLoading(true)
                const resp = await userAxios.post("/gst/tax-payer/generate-otp", {
                        gstin:gstin,
                        username:username
                    })
                if (resp.data.data.status_cd==="1") {
                    toast.success(resp.data.data.message);
                    console.log(resp.data.data);
                    setIsStep1(2);
                    
                } else {
                    toast.error("enter a valid GSTIN and Username");
                }
                
            } catch (error) {
                console.log(error);
                setIsError(error)
            } finally {
                setIsLoading(false)
            }
        }else{
            toast.error("GSTIN and Username is required")
        }
        
    }
    const onSubmit = async (data) => {
        const {gstin,username,otp} = data;
        if (gstin && username && otp) {
            try {
                setIsLoading(true)
                const resp = await userAxios.post("/gst/tax-payer/verify-otp", {
                        gstin:gstin,
                        username:username,
                        otp:otp
                    })
                if (resp.data.success) {
                    setCookie("gstin",gstin)
                    toast.success(resp.data.message)
                    router.push("/dashboard/easy-gst-return/check-return-status")
                }
                
            } catch (error) {
                setIsError(error)
            } finally {
                setIsLoading(false)
                
            }
        }else{
            toast.error("GSTIN , Username and OTP is required")
        }
    }
    return (
		<div className=" lg:bg-neutral-100 max-w-7xl mx-auto grid lg:grid-cols-2 place-content-center min-h-[calc(100vh-10rem)] ">
            <FormBrand/>
            <div className="grid place-content-center">
                <form className="shadow-lg p-4 sm:max-w-2xl py-4 sm:p-8 my-8 rounded-md bg-neutral-50 text-neutral-900 px-8 pt-10 pb-6" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-2xl pb-8 font-bold">Login With GSTIN</h1>
                    {isStep1 === 1 ? (
                        <LoginWithGstin_step1
                            register={register}
                        />
                    ) : (
                        <LoginWithGstin_step2 register={register} />
                    )}
                    <div className="flex justify-between mt-8">
                        {isStep1 === 11 ? (
                            <button
                                onClick={handleSendOtp}
                                type="button"
                                className="btn-primary"
                            >
                            {isLoading ? <div>loading...</div> : "Send OTP"}
                                
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => setIsStep1(1)}
                                    type="button"
                                    className="btn-light"
                                >
                                    back
                                </button>
                                <button type="submit" className="btn-primary">
                                {isLoading ? <div>loading...</div> : "Login"}
                                </button>
                            </>
                        )}
                    </div>
                    
                </form>
            </div>
		</div>
	)
}