"use client";
import React, { useState } from "react";
import DashSection from "@/components/pagesComponents/pageLayout/DashSection";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import userAxios from "@/lib/userAxios";
import { useRouter } from "next/navigation";
import VerifyIndicator from "@/components/indicators/VerifyIndicator";

const createAgentSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    gender: yup.string().required(),
    address: yup.string().required(),
});

export default function Create_Agents() {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [success,setSuccess]=useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(createAgentSchema),
    });
    const onFormSubmit =async (data) => {
        setLoading(true)
        setError(false)
        setSuccess(false)
        try {
            const resp = await userAxios.post("/user/sign-up-agent", {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                password: data.password,
                phone: data.phone,
                gender: data.gender,
                address: data.address
              })
            setSuccess(true)
            console.log(resp)
            if (resp.response.success) {
                router.push("/dashboard/admin/network")
            }
        } catch (error) {
            setError(error)
            console.log(error)
        } finally {
            setLoading(false)
        }
    };
    // if(watch("pan").length === 10){
    //     setPanVerify(true)
    // }
    // if(watch("aadhaar").length === 12){
    //     setAadhaarVerify(true)
    // }
    return (
        <DashSection title={"Create Agent"} className="mt-4">
            <div className="text-center p-2">
                {error && <p className=" tracking-tighter text-red-600">{error?.response?.data?.message || error?.message}</p>}
                {success && <p className="text-xs text-green-600">{"Agent Created"}</p>}
            </div>
            <form
                className="max-w-sm mx-auto "
                onSubmit={handleSubmit(onFormSubmit)}
            >
                {/* <ul className="grid grid-cols-2 p-2 gap-4">
                    <li>
                        <label htmlFor="name" className="label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input"
                            {...register("name")}
                        />
                        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="email" className="label">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="phone" className="label">
                            Phone no.
                        </label>
                        <input
                            type="text"
                            id="phone"
                            className="input"
                            {...register("phone")}
                        />
                        {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="aadhaar" className="label grid grid-cols-[1fr_auto]">
                            Aadhaar no.
                            <VerifyIndicator loading={aadhaarRespLoading} verified={aadhaarVerify}/>
                        </label>
                        <input
                            type="text"
                            id="aadhaar"
                            className="input"
                            {...register("aadhaar")}
                        />
                        {errors.aadhaar && <p className="text-xs text-red-600">{errors.aadhaar.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="pan" className="label grid grid-cols-[1fr_auto]">
                            Pan no.
                            <VerifyIndicator loading={panRespLoading} verified={panVerify}/>
                        </label>
                        <input
                            type="text"
                            id="pan"
                            className="input"
                            {...register("pan")}
                        />
                        
                        {errors.pan && <p className="text-xs text-red-600">{errors.pan.message}</p>}
                    </li>
                </ul> */}
                <ul className="grid sm:grid-cols-2 p-2 gap-4">
                    <li>
                        <label htmlFor="firstName" className="label">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="input"
                            {...register("firstName")}
                        />
                        {errors.firstName && <p className="text-xs text-red-600">{errors.firstName.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="lastName" className="label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="input"
                            {...register("lastName")}
                        />
                        {errors.lastName && <p className="text-xs text-red-600">{errors.lastName.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="email" className="label">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="phone" className="label">
                            Phone no.
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="input"
                            {...register("phone")}
                        />
                        {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
                    </li>
                    <li className="sm:col-span-2">
                        <label htmlFor="gender" className="label">
                            Gender
                        </label>
                        <select
                            type="text"
                            id="gender"
                            className="input"
                            {...register("gender")}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <p className="text-xs text-red-600">{errors.gender.message}</p>}
                    </li>
                    <li className="sm:col-span-2">
                        <label htmlFor="address" className="label">
                            Address
                        </label>
                        <textarea
                            type="text"
                            id="address"
                            className="input"
                            {...register("address")}
                        ></textarea>
                        {errors.address && <p className="text-xs text-red-600">{errors.address.message}</p>}
                    </li>
                    
                </ul>
                {success?"":
                <div className="mt-4 w-full flex">
                    {loading?(
                    <button className="btn-dark" type="button">
                        <span className="spinner"></span>
                        Create...
                    </button>
                    ):(
                    <button className="btn-primary" type="submit">
                        Create
                    </button>
                    )
                    }
                </div>
                }
            </form>
        </DashSection>
    );
}
