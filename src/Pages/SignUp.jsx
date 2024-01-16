import React, { useState } from 'react'
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
import SignUpForm from '../components/SignUpForm'
import Navbar from '../components/Navbar'

function SignUp() {


  return (
    <>
    <Navbar />
    <ToastContainer />
    <div className="flex justify-between sm:w-[80%] w-[90%] m-auto drop-shadow-sm items-center">
        <div className='w-full m-auto'>

            <div className="grid md:grid-cols-2 md:gap-20 items-start pt-10">
                <div>
                    <h1 className="text-2xl font-medium">Create an Account</h1>
                    <p className="text-sm text-gray-500">Start your saving journey</p>
                    <SignUpForm />
                    <button className='mt-0 w-full border shadow-sm hover:text-white py-3 rounded-xl text-black font-medium my-3 hover:bg-theme-color hover:opacity-90 transition-all duration-700 hover:text-[#eee99] flex items-center justify-center gap-5'><FcGoogle size={25} />Sign In with Google</button>
                    <Link to={"/auth/login"} className='cursor-pointer text-theme-color underline text-center block w-max hover:no-underline m-auto'>
                        Already have an account? Log In
                    </Link>
                </div>
                <img src={img} className="hidden md:block w-[100%] h-[40vw] rounded-md shadow-sm pb-10" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp
