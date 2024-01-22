import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearData } from '../Slices/userSlice';
import { Link } from 'react-router-dom';
import logo from "../assets/ODUNinv.png"
import { BiSolidDashboard, BiSearch, BiBell } from 'react-icons/bi'
import { TbPigMoney, TbHistory, TbTarget } from 'react-icons/tb'
import { GiTakeMyMoney } from 'react-icons/gi'
import { SlSettings } from 'react-icons/sl'
import { FiLogOut } from 'react-icons/fi'
import clsx from 'clsx';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {TailSpin} from "react-loader-spinner"
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import userProfile from "../assets/default-image.png"

function UserNav({className=""}) {

    const dispatch = useDispatch()
    const [loggingOut, isLoggingOut] = useState(false)
    const [visible, setVisible] = useState(false)

    let href = window.location.href
    const index = href.lastIndexOf("/")
    href = href.slice(index)

    const userName = "Joke"
    

  return (
    <div>
      <ToastContainer />
    <div className={`lg:sticky flex justify-between items-center w-[100%] lg:block lg:m-0 top-0 bg-none lg:bg-[#F3F8F0] rounded-2xl shadow-none backdrop:lg:shadow-sm px-3 pt-1 pb-3 ${className}`}>
      <img src={logo} className='h-20 hidden lg:block my-5' alt="" />
      <div className='flex lg:hidden gap-3 items-center pt-2'>
        <img src={userProfile} className='w-[40px] h-[40px] object-cover object-top rounded-full' />
        <h1 className='font-medium'>{userName}</h1>
      </div>
      <div className={clsx("fixed lg:relative flex flex-col gap-4 top-0 bg-[#F3F8F0] lg:bg-none px-5 py-20 lg:py-10 lg:px-0 shadow-xl lg:shadow-none rounded-lg h-[100%] lg:h-auto z-30 transition-all duration-300", {
        ["right-0"] : visible,
        ["right-[-100%] lg:right-0"] : !visible,
      })}>
        <Link to={"/user"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
            "active": href === "/user"
        })}><BiSolidDashboard />Dashboard</Link>
        <Link to={"/user/my-target-boxes"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
            "active": href === "/my-target-boxes"
        })}><TbTarget />My TargetBoxes</Link>
        <Link to={"/user/investments"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
          "active": href === "/investments"
        })}><GiTakeMyMoney />My Investments</Link>
        <Link to={"/user/history"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
          "active": href === "/history"
        })}><TbHistory />History</Link>
        <Link to={"/user/settings"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
          "active": href === "/settings"
        })}><SlSettings />Settings</Link>
        <button to={"/"} onClick={(e) => {
            e.preventDefault()
            toast("Logging Out...", {type:"info"})
            console.log("Logging Out");
            isLoggingOut(true);
            setTimeout(() => {
              isLoggingOut(false)
              dispatch(clearData())
            }, 2000)
          }}
          className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
            "justify-center": loggingOut
          })}>{!loggingOut && <FiLogOut />}{loggingOut ? <TailSpin height={30} width={30} color='#ccc' /> : "Log Out"}</button>
          <IoMdClose size={30} onClick={() => setVisible(false)} className="hover:text-theme-color absolute right-[5%] top-[2%] cursor-pointer transition-all duration-700 lg:hidden block" />
      </div>

      <FaBars size={30} onClick={() => setVisible(true)} className="hover:text-theme-color cursor-pointer transition-all duration-700 lg:hidden block" />
    </div>
    </div>
  )
}

export default UserNav


