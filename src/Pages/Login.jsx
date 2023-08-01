import React from 'react'
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../Slices/userSlice'
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import img from "../assets/login.png"
import logo from "../assets/ODUN.jpg"
import { FcGoogle } from 'react-icons/fc'


function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const {token} = useSelector(state => state.user)

    const formSchema = yup.object().shape({
        email: yup.string().email().required("Please insert a valid email"),
        password: yup.string().min(8, "Must be at least 8 characters").required()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const submit = (formData) => {

        try{
            axios.post("http://localhost:5000/auth/login", formData).then(res => {
                if(res.data.token){
                    toast("Logged In Successfully!", {type: "success"})
                    setTimeout(() => {
                        dispatch(setToken(res.data.token))
                    }, 1000)
                }
                console.log(res.data);
            })
        }
        catch(err){

        }
    
        console.log(formData);
    }

  return (
    <>
    <Link to={"/"}>
        <img src={logo} className='h-20 pl-[3vw]' alt="" />
    </Link>
    <div className="flex justify-between sm:w-[90%] w-[90%] m-auto drop-shadow-sm items-center">
        <ToastContainer />
        <div className='sm:w-full md:w-[90%] w-full m-auto'>
            <div className='grid grid-flow-col grid-cols-2 gap-20 items-start pt-10'>
                <div>
                    <h1 className="md:text-2xl sm:text-xl py-1 font-medium">Welcome Back!</h1>
                    <p className="text-gray-500 md:text-sm sm:text-xs">Welcome back! Please enter your details!</p>
                    <form onSubmit={handleSubmit(submit)} className='py-8'>
                        <div className='py-3'>
                            <label htmlFor="" className='block text-xl pb-2'>Email:</label>
                            <input type="text" placeholder='Enter your email' className='border w-full p-2 rounded-lg' {...register("email")}/>
                            <p className='text-red-500'>{errors.email?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="" className='block text-xl pb-2'>Password:</label>
                            <input type="password" placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' className='border w-full p-2 rounded-lg' {...register("password")}/>
                            <p className='text-red-500'>{errors.password?.message}</p>
                        </div>
                
                            <div className="flex justify-between py-3">
                                <div>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="" className='pl-2'>Remember Password</label>
                                </div>
                                <Link to={"/"} className='text-theme-color underline hover:no-underline transition-all w-max'>
                                    Forgot Password?
                                </Link>
                            </div>
                            <button className='text-center border shadow-sm w-full py-3 rounded-xl text-white font-medium my-3 bg-theme-color hover:bg-white hover:text-black transition-all duration-700 hover:text-[#eee99]'>Sign In</button>
                        <button className='w-full border shadow-sm hover:text-white py-3 rounded-xl text-black font-medium my-3 hover:bg-theme-color hover:opacity-90 transition-all duration-700 hover:text-[#eee99] flex items-center justify-center gap-5'><FcGoogle size={25} />Sign In with Google</button>
                
                        <a href={"/auth/signup"} className='cursor-pointer text-theme-color underline text-center block w-max hover:no-underline m-auto'>
                            Dont have an account? Sign Up
                        </a>
                    </form>
                </div>
                <img src={img} className='h-[70vh] rounded-md shadow-sm' alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
