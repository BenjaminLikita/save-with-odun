import React, { useState } from 'react'
import clsx from 'clsx'
import { TailSpin } from 'react-loader-spinner'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { signUpSchema } from '../schema/schemas'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {

    
    const [signingIn, isSigningIn] = useState(false)

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(signUpSchema)
    })

    const navigate = useNavigate()

    const submit = (formData) => {
        isSigningIn(true)
        setTimeout(() => {
            console.log(formData);
            isSigningIn(false)
            navigate("/auth/login")
        }, 700)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)} className='py-8 pb-3 grid gap-2 font-medium'>
            <div>
                <label htmlFor="" className='block text-md pb-2'>Full Name:<span className="text-red-600 font-semibold">*</span></label>
                <input type="text" placeholder='Full Name' className='border w-full p-2 rounded-lg' {...register("full_name")}/>
                <p className='text-red-500'>{errors.full_name?.message}</p>
            </div>
            <div>
                <label htmlFor="" className='block text-md pb-2'>Phone Number:<span className="text-red-600 font-semibold">*</span></label>
                <input type="text" placeholder='Phone Number' className='border w-full p-2 rounded-lg' {...register("phone_number")}/>
                <p className='text-red-500'>{errors.phone_number?.message}</p>
            </div>
            <div>
                <label htmlFor="" className='block text-md pb-2'>Email Address:<span className="text-red-600 font-semibold">*</span></label>
                <input type="email" placeholder='Enter your email' className='border w-full p-2 rounded-lg' {...register("email")}/>
                <p className='text-red-500'>{errors.email?.message}</p>
            </div>
            <div>
                <label htmlFor="" className='block text-md pb-2'>Password:<span className="text-red-600 font-semibold">*</span></label>
                <input type="password" placeholder='Create a password' className='border w-full p-2 rounded-lg' {...register("password")}/>
                <p className='text-red-500'>{errors.password?.message}</p>
            </div>
            <div>
                <label htmlFor="" className='block text-md pb-2'>Confirm Password:<span className="text-red-600 font-semibold">*</span></label>
                <input type="password" placeholder='Confirm password' className='border w-full p-2 rounded-lg' {...register("password1")}/>
                <p className='text-red-500'>{errors.password1?.message}</p>
            </div>
            <p className='text-theme-color font-semibold my-5'>A fee of 500 Naira is required to complete your registration<span className='text-red-600'>*</span></p>
            <div>
                <label htmlFor="" className='block text-md pb-2'>Card Number:<span className="text-red-600 font-semibold">*</span></label>
                <input type="text" placeholder='Enter Your Card Number' className='border w-full p-2 rounded-lg' {...register("cardNumber")}/>
                <p className='text-red-500'>{errors.cardNumber?.message}</p>
            </div>
            <div>
                <label htmlFor="" className='block text-md pb-2'>Expiration Date:<span className="text-red-600 font-semibold">*</span></label>
                <input type="text" placeholder='MM/YY' className='border w-full p-2 rounded-lg' {...register("expirationDate")}/>
                <p className='text-red-500'>{errors.expirationDate?.message}</p>
            </div>
            <div>
                <label htmlFor="" className='block text-md pb-2'>CVV:<span className="text-red-600 font-semibold">*</span></label>
                <input type="text" placeholder='CVV' className='border w-full p-2 rounded-lg' {...register("cvv")}/>
                <p className='text-red-500'>{errors.cvv?.message}</p>
            </div>
        
            <button className={clsx('text-center border shadow-sm w-full py-3 rounded-xl text-white font-medium my-3 mb-0 bg-theme-color hover:bg-white hover:text-black transition-all duration-700 hover:text-[#eee99]', {
                    "flex justify-center": signingIn
                })}>
                {signingIn ? <TailSpin height={30} width={30} color='#ccc' /> : "Sign Up"}
                </button>
        </form>
    </div>
  )
}

export default SignUpForm