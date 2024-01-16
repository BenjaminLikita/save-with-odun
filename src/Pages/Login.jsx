import React, { useState } from 'react'
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import img from "../assets/login.png"
import { FcGoogle } from 'react-icons/fc'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'



function Login() {

  return (
    <>
    <ToastContainer />
    <Navbar />
    <div className="flex justify-between sm:w-[90%] w-[90%] m-auto drop-shadow-sm items-center">
        <div className='sm:w-full md:w-[90%] w-full m-auto'>
            <div className='grid md:grid-cols-2 md:gap-20 items-start pt-10'>
                <div>
                    <h1 className="md:text-2xl sm:text-xl py-1 font-medium">Welcome Back!</h1>
                    <p className="text-gray-500 md:text-sm sm:text-xs">Welcome back! Please enter your details!</p>
                    <LoginForm />
                        <button className='mt-0 w-full border shadow-sm hover:text-white py-3 rounded-xl text-black font-medium my-3 hover:bg-theme-color hover:opacity-90 transition-all duration-700 hover:text-[#eee99] flex items-center justify-center gap-5'><FcGoogle size={25} />Sign In with Google</button>
                
                        <Link to={"/auth/signup"} className='cursor-pointer text-theme-color underline text-center block w-max hover:no-underline m-auto'>
                            Dont have an account? Sign Up
                        </Link>
                </div>
                <img src={img} className='hidden md:block w-[100%] h-[40vw] rounded-md shadow-sm' alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
