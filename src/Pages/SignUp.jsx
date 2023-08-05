import React, { useEffect, useState } from 'react'
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {yupResolver} from "@hookform/resolvers/yup"
import axios from 'axios'
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import img from "../assets/signup.png"
import logo from "../assets/ODUN.jpg"
import {FcGoogle} from "react-icons/fc"

function SignUp() {

    const navigate = useNavigate()
    
    const formSchema = yup.object().shape({
        full_name: yup.string().required("Please Provide your Full Name"),
        phone_number: yup.string().required("Please Provide your Phone Number"),
        email: yup.string().email().required("Please Provide a Valid Email Address"),
        password1: yup.string().min(8, "Must be at least 8 characters").required(),
        password2: yup.string().oneOf([yup.ref("password1"), null], "Passwords don't match...").required("Please confirm your password")
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(formSchema)
    })


    const submit = async (formData) => {
        try {
            // console.log(formData);
            axios.post("http://localhost:5000/auth/signup", formData).then(res => {
                if(res.data.msg === "success"){
                    reset()
                    setTimeout(() =>{
                        navigate("/auth/login")
                    }, 2000)
                    toast(`Successfully Registered`, {type: "success", autoClose: 2000});
                }
                else{
                    reset()
                    toast(res.data.msg, {type: "error", autoClose: 2000})
                }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }

  return (
    <>
    <Link to={"/"} className="inline-block">
        <img src={logo} className='h-20 pl-[3vw]' alt="" />
    </Link>
    <div className="flex justify-between sm:w-[80%] w-[90%] m-auto drop-shadow-sm items-center">
            <ToastContainer />
        <div className='w-full m-auto'>

            <div className="grid md:grid-cols-2 md:gap-20 items-start pt-10">
                <div>
                    <h1 className="text-2xl font-medium">Create an Account</h1>
                    <p className="text-sm text-gray-500">Start your saving journey</p>
                    <form onSubmit={handleSubmit(submit)} className='py-8'>
                        <div className='py-2'>
                            <label htmlFor="" className='block text-md pb-2'>Full Name:<span className="text-red-600 font-semibold">*</span></label>
                            <input type="text" placeholder='Full Name' className='border w-full p-2 rounded-lg' {...register("full_name")}/>
                            <p className='text-red-500'>{errors.full_name?.message}</p>
                        </div>
                        <div className='py-2'>
                            <label htmlFor="" className='block text-md pb-2'>Phone Number:<span className="text-red-600 font-semibold">*</span></label>
                            <input type="text" placeholder='Phone Number' className='border w-full p-2 rounded-lg' {...register("phone_number")}/>
                            <p className='text-red-500'>{errors.phone_number?.message}</p>
                        </div>
                        <div className='py-2'>
                            <label htmlFor="" className='block text-md pb-2'>Email Address:<span className="text-red-600 font-semibold">*</span></label>
                            <input type="email" placeholder='Enter your email' className='border w-full p-2 rounded-lg' {...register("email")}/>
                            <p className='text-red-500'>{errors.email?.message}</p>
                        </div>
                        <div className='py-2'>
                            <label htmlFor="" className='block text-md pb-2'>Password:<span className="text-red-600 font-semibold">*</span></label>
                            <input type="password" placeholder='Create a password' className='border w-full p-2 rounded-lg' {...register("password1")}/>
                            <p className='text-red-500'>{errors.password1?.message}</p>
                        </div>
                        <div className='py-2'>
                            <label htmlFor="" className='block text-md pb-2'>Confirm Password:<span className="text-red-600 font-semibold">*</span></label>
                            <input type="password" placeholder='Confirm password' className='border w-full p-2 rounded-lg' {...register("password2")}/>
                            <p className='text-red-500'>{errors.password2?.message}</p>
                        </div>
                        <p className='text-gray-500'>Must be at least 8 Characters</p>
                    
                        <button className='text-center border shadow-sm w-full py-3 rounded-xl text-white font-medium my-3 bg-theme-color hover:bg-white hover:text-black transition-all duration-700 hover:text-[#eee99]'>Create Account</button>
                        <button className='w-full border shadow-sm hover:text-white py-3 rounded-xl text-black font-medium my-3 hover:bg-theme-color hover:opacity-90 transition-all duration-700 hover:text-[#eee99] flex items-center justify-center gap-5'><FcGoogle size={25} />Sign In with Google</button>
                        <a href={"/auth/login"} className='cursor-pointer text-theme-color underline text-center block w-max hover:no-underline m-auto'>
                            Already have an account? Log In
                        </a>
                    </form>
                </div>
                <img src={img} className="w-[100%] h-[40vw] rounded-md shadow-sm pb-10" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp
