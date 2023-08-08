import React, { useEffect, useState } from 'react'
import UserNav from '../components/UserNav'
import img from "../assets/mubarak-showole-Ve7xjKImd28-unsplash.png"
import img2 from "../assets/college project-pana.png"
import { FaPlus } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

function TargetBoxes() {

    const [modal, setModal] = useState(false)
    const [page, setPage] = useState()

    useEffect(() => {
        if(modal){
            document.body.classList.add("overflow-hidden")
        }
        else{
            document.body.classList.remove("overflow-hidden")
        }
    }, [modal])

  return (
    <div className='w-[90%] m-auto gap-10 grid grid-cols-3'>
        <UserNav />
        <div className='col-span-2'>
            <div className='bg-[#F3F8F0] py-5 px-3 rounded-2xl shadow-sm'>
                <div>
                    <ul className='w-[100%] sm:w-[100%] lg:w-[90%]  m-auto flex items-center justify-between text-xs font-medium'>
                        <button className='border border-[#F3F8F0] px-2 py-4 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500'>Regular savings</button>
                        <button className='border border-[#F3F8F0] px-2 py-4 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500'>Education TargetBox</button>
                        <button className='border border-[#F3F8F0] px-2 py-4 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500'>Studentpreneur TargetBox</button>
                        <button className='border border-[#F3F8F0] px-2 py-4 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500'>Investment TargetBox</button>
                    </ul>
                    <div className='px-5 pt-10 py-5 flex jusify-between gap-10'>
                        <div className="">
                            <h1 className='text-theme-color text-2xl font-bold pb-5'>Education TargetBox</h1>
                            <p className=' text-sm'>Are you tired of scrambling to pay for your school fees every semester? Say goodbye to financial stress and hello to the Education Targetbox. This feature empowers students like you to effortlessly save money for your next round of educational expenses. So get started by setting a target and the duration you would like to save for!</p>
                        </div>
                        <img src={img} className='w-[50%] object-contain rounded-lg shadow-sm' alt="" />
                    </div>
                    <div className='px-5 pt-10 py-5 flex items-center justify-between gap-10'>
                        <img src={img2} className='w-[30%] object-contain' alt="" />
                        <button className='bg-theme-color text-white hover:text-black flex items-center gap-2 rounded-md shadow-sm p-2 transition-all duration-700 hover:bg-white'
                        onClick={() => setModal(!modal)}
                        ><FaPlus />CREATE A TARGET</button>
                    </div>
                    {
                        modal 
                        &&
                        <>
                        <div className='bg-[#C6FCC9] transition-all duration-700 opacity-50 w-[100vw] h-[100vh] fixed top-0 left-0 z-40'></div>
                        <div className='fixed top-[50%] left-[50%] bg-white rounded-2xl shadow-sm p-7 pr-24 translate-x-[-50%] translate-y-[-50%] z-50'>
                            <h1 className="font-bold">Create your Box</h1>
                            <p className='text-xs'>Time to reach your goal</p>

                            <form action="">
                                <div className="py-2">
                                    <label htmlFor="" className='block text-sm font-semibold py-1'>Box Name</label>
                                    <input type="text" className='bg-theme-light px-3 py-1 rounded-lg focus:outline-none' />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="" className='block text-sm font-semibold py-1'>Target Amount</label>
                                    <input type="number" inputMode='numeric' className='bg-theme-light px-3 py-1 rounded-lg focus:outline-none' />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="" className='block text-sm font-semibold py-1'>Duration</label>
                                    <select name="" id="" className='w-full bg-theme-light px-3 py-1 rounded-lg focus:outline-none cursor-pointer'>
                                        <option value="" disabled selected>Select Duration</option>
                                        <option value="3">3 Months</option>
                                        <option value="6">6 Months</option>
                                        <option value="9">9 Months</option>
                                        <option value="12">12 Months</option>
                                    </select>
                                </div>
                                <div className="py-2">
                                    <label htmlFor="" className='block text-sm font-semibold py-1'>Strictness</label>
                                    <select name="" id="" className='w-full bg-theme-light px-3 py-1 rounded-lg focus:outline-none cursor-pointer'>
                                        <option value="" disabled selected>Select Strictness</option>
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>
                                <button className='bg-theme-lighter text-white hover:text-black flex items-center gap-2 rounded-md shadow-sm p-2 mt-1 transition-all duration-700 hover:bg-white'
                                onClick={() => setModal(!modal)}
                                ><FaPlus />Create</button>
                            </form>
                            <button onClick={() => setModal(!modal)} className='absolute top-3 right-3 hover:bg-gray-200 transition-all duration-700 p-2 rounded-full'><IoMdClose size={20}/></button>
                        </div>
                        </>
                    }

                </div>
            </div>


        </div>
        
    </div>
  )
}

export default TargetBoxes
