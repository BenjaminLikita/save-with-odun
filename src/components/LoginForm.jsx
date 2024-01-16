import { yupResolver } from '@hookform/resolvers/yup'
import React, { useId, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { loginSchema } from '../schema/schemas'
import { useDispatch } from 'react-redux'
import { setUser } from '../Slices/userSlice'
import { TailSpin } from 'react-loader-spinner'
import { toast } from 'react-toastify'

const LoginForm = () => {

    const dispatch = useDispatch()
    const [loggingIn, isLogginIn] = useState(false)

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(loginSchema)
    })

    const submit = (formData) => {
        isLogginIn(true)
        reset()
        toast("Logging In", {type: "info"})
        setTimeout(() => {
            isLogginIn(false)
            dispatch(setUser({...formData, token: "userToken5768897657", userName: "UserJoke"}))
            console.log(formData)
        }, 2000)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)} className='py-8 pb-3 grid gap-2 font-medium'>
            <div>
                <label htmlFor="" className='block text-xl pb-2'>Email:</label>
                <input type="text" placeholder='Enter your email' className='border w-full p-2 rounded-lg' {...register("email")}/>
                <p className='text-red-500'>{errors.email?.message}</p>
            </div>
            <div>
                <label htmlFor="" className='block text-xl pb-2'>Password:</label>
                <input type="password" placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' className='border w-full p-2 rounded-lg' {...register("password")}/>
                <p className='text-red-500'>{errors.password?.message}</p>
            </div>
    
            <div className="flex justify-between">
                <div>
                    <input type="checkbox" name="" id=""/>
                    <label htmlFor="" className='pl-2'>Remember Password</label>
                </div>
                <Link to={"/"} className='text-theme-color underline hover:no-underline transition-all w-max'>
                    Forgot Password?
                </Link>
            </div>
            <button className={'text-center border shadow-sm w-full py-3 flex justify-center rounded-xl text-white font-medium mb-0 my-3 bg-theme-color hover:bg-white hover:text-black transition-all duration-700 hover:text-[#eee99]'}>
            {loggingIn ? <TailSpin height={30} width={30} color='#ccc' /> : "Sign In"}
            </button>
        </form>
    </div>
  )
}

export default LoginForm