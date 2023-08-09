import React, { useEffect, useState } from 'react'
import UserNav from '../components/UserNav'
import img from "../assets/mubarak-showole-Ve7xjKImd28-unsplash.png"
import img2 from "../assets/college project-pana.png"
import { FaPlus } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import clsx from 'clsx'
import Boxes from '../components/Boxes'

function TargetBoxes() {

    const [modal, setModal] = useState(false)
    const [page, setPage] = useState("education")

    useEffect(() => {
        if(modal){
            document.body.classList.add("overflow-hidden")
        }
        else{
            document.body.classList.remove("overflow-hidden")
        }
    }, [modal])

  return (
    <div className='w-[98%] m-auto gap-10 grid grid-cols-3'>
        <UserNav />
        <div className='col-span-2'>
            <div className='bg-[#F3F8F0] py-5 px-3 rounded-2xl shadow-sm'>
                <div>
                    <ul className='w-[100%] sm:w-[100%] lg:w-[90%]  m-auto flex items-center justify-between text-xs font-medium'>
                        <button className={clsx('border border-[#F3F8F0] p-3 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500', {
                            "bg-theme-lighter text-white": page === "regular-savings"
                        })}
                        onClick={() => setPage("regular-savings")}>Regular savings</button>
                        <button className={clsx('border border-[#F3F8F0] p-3 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500', {
                            "bg-theme-lighter text-white": page === "education"
                        })}
                        onClick={() => setPage("education")}
                        >Education TargetBox</button>
                        <button className={clsx('border border-[#F3F8F0] p-3 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500', {
                            "bg-theme-lighter text-white": page === "studentpreneur"
                        })}
                        onClick={() => setPage("studentpreneur")}
                        >Studentpreneur TargetBox</button>
                        <button className={clsx('border border-[#F3F8F0] p-3 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500', {
                            "bg-theme-lighter text-white": page === "investment"
                        })}
                        onClick={() => setPage("investment")}
                        >Investment TargetBox</button>
                    </ul>
                    
                    <Boxes type={page} />
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default TargetBoxes
